System.register(['../util/root', '../Subscription'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var root_1, Subscription_1;
    var FutureAction;
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            FutureAction = (function (_super) {
                __extends(FutureAction, _super);
                function FutureAction(scheduler, work) {
                    _super.call(this);
                    this.scheduler = scheduler;
                    this.work = work;
                    this.pending = false;
                }
                FutureAction.prototype.execute = function () {
                    if (this.isUnsubscribed) {
                        this.error = new Error('executing a cancelled action');
                    }
                    else {
                        try {
                            this.work(this.state);
                        }
                        catch (e) {
                            this.unsubscribe();
                            this.error = e;
                        }
                    }
                };
                FutureAction.prototype.schedule = function (state, delay) {
                    if (delay === void 0) { delay = 0; }
                    if (this.isUnsubscribed) {
                        return this;
                    }
                    return this._schedule(state, delay);
                };
                FutureAction.prototype._schedule = function (state, delay) {
                    var _this = this;
                    if (delay === void 0) { delay = 0; }
                    // Always replace the current state with the new state.
                    this.state = state;
                    // Set the pending flag indicating that this action has been scheduled, or
                    // has recursively rescheduled itself.
                    this.pending = true;
                    var id = this.id;
                    // If this action has an intervalID and the specified delay matches the
                    // delay we used to create the intervalID, don't call `setInterval` again.
                    if (id != null && this.delay === delay) {
                        return this;
                    }
                    this.delay = delay;
                    // If this action has an intervalID, but was rescheduled with a different
                    // `delay` time, cancel the current intervalID and call `setInterval` with
                    // the new `delay` time.
                    if (id != null) {
                        this.id = null;
                        root_1.root.clearInterval(id);
                    }
                    //
                    // Important implementation note:
                    //
                    // By default, FutureAction only executes once. However, Actions have the
                    // ability to be rescheduled from within the scheduled callback (mimicking
                    // recursion for asynchronous methods). This allows us to implement single
                    // and repeated actions with the same code path without adding API surface
                    // area, and implement tail-call optimization over asynchronous boundaries.
                    //
                    // However, JS runtimes make a distinction between intervals scheduled by
                    // repeatedly calling `setTimeout` vs. a single `setInterval` call, with
                    // the latter providing a better guarantee of precision.
                    //
                    // In order to accommodate both single and repeatedly rescheduled actions,
                    // use `setInterval` here for both cases. By default, the interval will be
                    // canceled after its first execution, or if the action schedules itself to
                    // run again with a different `delay` time.
                    //
                    // If the action recursively schedules itself to run again with the same
                    // `delay` time, the interval is not canceled, but allowed to loop again.
                    // The check of whether the interval should be canceled or not is run every
                    // time the interval is executed. The first time an action fails to
                    // reschedule itself, the interval is canceled.
                    //
                    this.id = root_1.root.setInterval(function () {
                        _this.pending = false;
                        var _a = _this, id = _a.id, scheduler = _a.scheduler;
                        scheduler.actions.push(_this);
                        scheduler.flush();
                        //
                        // Terminate this interval if the action didn't reschedule itself.
                        // Don't call `this.unsubscribe()` here, because the action could be
                        // rescheduled later. For example:
                        //
                        // ```
                        // scheduler.schedule(function doWork(counter) {
                        //   /* ... I'm a busy worker bee ... */
                        //   var originalAction = this;
                        //   /* wait 100ms before rescheduling this action again */
                        //   setTimeout(function () {
                        //     originalAction.schedule(counter + 1);
                        //   }, 100);
                        // }, 1000);
                        // ```
                        if (_this.pending === false && id != null) {
                            _this.id = null;
                            root_1.root.clearInterval(id);
                        }
                    }, delay);
                    return this;
                };
                FutureAction.prototype._unsubscribe = function () {
                    this.pending = false;
                    var _a = this, id = _a.id, scheduler = _a.scheduler;
                    var actions = scheduler.actions;
                    var index = actions.indexOf(this);
                    if (id != null) {
                        this.id = null;
                        root_1.root.clearInterval(id);
                    }
                    if (index !== -1) {
                        actions.splice(index, 1);
                    }
                    this.work = null;
                    this.state = null;
                    this.scheduler = null;
                };
                return FutureAction;
            }(Subscription_1.Subscription));
            exports_1("FutureAction", FutureAction);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9GdXR1cmVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBOzs7O2VBSUc7WUFDSDtnQkFBcUMsZ0NBQVk7Z0JBUy9DLHNCQUFtQixTQUFvQixFQUNwQixJQUFvQztvQkFDckQsaUJBQU8sQ0FBQztvQkFGUyxjQUFTLEdBQVQsU0FBUyxDQUFXO29CQUNwQixTQUFJLEdBQUosSUFBSSxDQUFnQztvQkFIL0MsWUFBTyxHQUFZLEtBQUssQ0FBQztnQkFLakMsQ0FBQztnQkFFRCw4QkFBTyxHQUFQO29CQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7b0JBQ3pELENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDOzRCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN4QixDQUFFO3dCQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOzRCQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDakIsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsK0JBQVEsR0FBUixVQUFTLEtBQVMsRUFBRSxLQUFpQjtvQkFBakIscUJBQWlCLEdBQWpCLFNBQWlCO29CQUNuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDZCxDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFF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LENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQzt3QkFDZixXQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN6QixDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMzQixDQUFDO29CQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0gsbUJBQUM7WUFBRCxDQXhJQSxBQXdJQyxDQXhJb0MsMkJBQVksR0F3SWhEO1lBeElELHVDQXdJQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9GdXR1cmVBY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Jvb3R9IGZyb20gJy4uL3V0aWwvcm9vdCc7XG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmV4cG9ydCBjbGFzcyBGdXR1cmVBY3Rpb248VD4gZXh0ZW5kcyBTdWJzY3JpcHRpb24gaW1wbGVtZW50cyBBY3Rpb248VD4ge1xuXG4gIHB1YmxpYyBpZDogbnVtYmVyO1xuICBwdWJsaWMgc3RhdGU6IFQ7XG4gIHB1YmxpYyBkZWxheTogbnVtYmVyO1xuICBwdWJsaWMgZXJyb3I6IGFueTtcblxuICBwcml2YXRlIHBlbmRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2NoZWR1bGVyOiBTY2hlZHVsZXIsXG4gICAgICAgICAgICAgIHB1YmxpYyB3b3JrOiAoeD86IFQpID0+IFN1YnNjcmlwdGlvbiB8IHZvaWQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZXhlY3V0ZSgpIHtcbiAgICBpZiAodGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgdGhpcy5lcnJvciA9IG5ldyBFcnJvcignZXhlY3V0aW5nIGEgY2FuY2VsbGVkIGFjdGlvbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLndvcmsodGhpcy5zdGF0ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2NoZWR1bGUoc3RhdGU/OiBULCBkZWxheTogbnVtYmVyID0gMCk6IEFjdGlvbjxUPiB7XG4gICAgaWYgKHRoaXMuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc2NoZWR1bGUoc3RhdGUsIGRlbGF5KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfc2NoZWR1bGUoc3RhdGU/OiBULCBkZWxheTogbnVtYmVyID0gMCk6IEFjdGlvbjxUPiB7XG5cbiAgICAvLyBBbHdheXMgcmVwbGFjZSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIHRoZSBuZXcgc3RhdGUuXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgLy8gU2V0IHRoZSBwZW5kaW5nIGZsYWcgaW5kaWNhdGluZyB0aGF0IHRoaXMgYWN0aW9uIGhhcyBiZWVuIHNjaGVkdWxlZCwgb3JcbiAgICAvLyBoYXMgcmVjdXJzaXZlbHkgcmVzY2hlZHVsZWQgaXRzZWxmLlxuICAgIHRoaXMucGVuZGluZyA9IHRydWU7XG5cbiAgICBjb25zdCBpZCA9IHRoaXMuaWQ7XG4gICAgLy8gSWYgdGhpcyBhY3Rpb24gaGFzIGFuIGludGVydmFsSUQgYW5kIHRoZSBzcGVjaWZpZWQgZGVsYXkgbWF0Y2hlcyB0aGVcbiAgICAvLyBkZWxheSB3ZSB1c2VkIHRvIGNyZWF0ZSB0aGUgaW50ZXJ2YWxJRCwgZG9uJ3QgY2FsbCBgc2V0SW50ZXJ2YWxgIGFnYWluLlxuICAgIGlmIChpZCAhPSBudWxsICYmIHRoaXMuZGVsYXkgPT09IGRlbGF5KSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG5cbiAgICAvLyBJZiB0aGlzIGFjdGlvbiBoYXMgYW4gaW50ZXJ2YWxJRCwgYnV0IHdhcyByZXNjaGVkdWxlZCB3aXRoIGEgZGlmZmVyZW50XG4gICAgLy8gYGRlbGF5YCB0aW1lLCBjYW5jZWwgdGhlIGN1cnJlbnQgaW50ZXJ2YWxJRCBhbmQgY2FsbCBgc2V0SW50ZXJ2YWxgIHdpdGhcbiAgICAvLyB0aGUgbmV3IGBkZWxheWAgdGltZS5cbiAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5pZCA9IG51bGw7XG4gICAgICByb290LmNsZWFySW50ZXJ2YWwoaWQpO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gSW1wb3J0YW50IGltcGxlbWVudGF0aW9uIG5vdGU6XG4gICAgLy9cbiAgICAvLyBCeSBkZWZhdWx0LCBGdXR1cmVBY3Rpb24gb25seSBleGVjdXRlcyBvbmNlLiBIb3dldmVyLCBBY3Rpb25zIGhhdmUgdGhlXG4gICAgLy8gYWJpbGl0eSB0byBiZSByZXNjaGVkdWxlZCBmcm9tIHdpdGhpbiB0aGUgc2NoZWR1bGVkIGNhbGxiYWNrIChtaW1pY2tpbmdcbiAgICAvLyByZWN1cnNpb24gZm9yIGFzeW5jaHJvbm91cyBtZXRob2RzKS4gVGhpcyBhbGxvd3MgdXMgdG8gaW1wbGVtZW50IHNpbmdsZVxuICAgIC8vIGFuZCByZXBlYXRlZCBhY3Rpb25zIHdpdGggdGhlIHNhbWUgY29kZSBwYXRoIHdpdGhvdXQgYWRkaW5nIEFQSSBzdXJmYWNlXG4gICAgLy8gYXJlYSwgYW5kIGltcGxlbWVudCB0YWlsLWNhbGwgb3B0aW1pemF0aW9uIG92ZXIgYXN5bmNocm9ub3VzIGJvdW5kYXJpZXMuXG4gICAgLy9cbiAgICAvLyBIb3dldmVyLCBKUyBydW50aW1lcyBtYWtlIGEgZGlzdGluY3Rpb24gYmV0d2VlbiBpbnRlcnZhbHMgc2NoZWR1bGVkIGJ5XG4gICAgLy8gcmVwZWF0ZWRseSBjYWxsaW5nIGBzZXRUaW1lb3V0YCB2cy4gYSBzaW5nbGUgYHNldEludGVydmFsYCBjYWxsLCB3aXRoXG4gICAgLy8gdGhlIGxhdHRlciBwcm92aWRpbmcgYSBiZXR0ZXIgZ3VhcmFudGVlIG9mIHByZWNpc2lvbi5cbiAgICAvL1xuICAgIC8vIEluIG9yZGVyIHRvIGFjY29tbW9kYXRlIGJvdGggc2luZ2xlIGFuZCByZXBlYXRlZGx5IHJlc2NoZWR1bGVkIGFjdGlvbnMsXG4gICAgLy8gdXNlIGBzZXRJbnRlcnZhbGAgaGVyZSBmb3IgYm90aCBjYXNlcy4gQnkgZGVmYXVsdCwgdGhlIGludGVydmFsIHdpbGwgYmVcbiAgICAvLyBjYW5jZWxlZCBhZnRlciBpdHMgZmlyc3QgZXhlY3V0aW9uLCBvciBpZiB0aGUgYWN0aW9uIHNjaGVkdWxlcyBpdHNlbGYgdG9cbiAgICAvLyBydW4gYWdhaW4gd2l0aCBhIGRpZmZlcmVudCBgZGVsYXlgIHRpbWUuXG4gICAgLy9cbiAgICAvLyBJZiB0aGUgYWN0aW9uIHJlY3Vyc2l2ZWx5IHNjaGVkdWxlcyBpdHNlbGYgdG8gcnVuIGFnYWluIHdpdGggdGhlIHNhbWVcbiAgICAvLyBgZGVsYXlgIHRpbWUsIHRoZSBpbnRlcnZhbCBpcyBub3QgY2FuY2VsZWQsIGJ1dCBhbGxvd2VkIHRvIGxvb3AgYWdhaW4uXG4gICAgLy8gVGhlIGNoZWNrIG9mIHdoZXRoZXIgdGhlIGludGVydmFsIHNob3VsZCBiZSBjYW5jZWxlZCBvciBub3QgaXMgcnVuIGV2ZXJ5XG4gICAgLy8gdGltZSB0aGUgaW50ZXJ2YWwgaXMgZXhlY3V0ZWQuIFRoZSBmaXJzdCB0aW1lIGFuIGFjdGlvbiBmYWlscyB0b1xuICAgIC8vIHJlc2NoZWR1bGUgaXRzZWxmLCB0aGUgaW50ZXJ2YWwgaXMgY2FuY2VsZWQuXG4gICAgLy9cbiAgICB0aGlzLmlkID0gcm9vdC5zZXRJbnRlcnZhbCgoKSA9PiB7XG5cbiAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgY29uc3Qge2lkLCBzY2hlZHVsZXJ9ID0gdGhpcztcbiAgICAgIHNjaGVkdWxlci5hY3Rpb25zLnB1c2godGhpcyk7XG4gICAgICBzY2hlZHVsZXIuZmx1c2goKTtcblxuICAgICAgLy9cbiAgICAgIC8vIFRlcm1pbmF0ZSB0aGlzIGludGVydmFsIGlmIHRoZSBhY3Rpb24gZGlkbid0IHJlc2NoZWR1bGUgaXRzZWxmLlxuICAgICAgLy8gRG9uJ3QgY2FsbCBgdGhpcy51bnN1YnNjcmliZSgpYCBoZXJlLCBiZWNhdXNlIHRoZSBhY3Rpb24gY291bGQgYmVcbiAgICAgIC8vIHJlc2NoZWR1bGVkIGxhdGVyLiBGb3IgZXhhbXBsZTpcbiAgICAgIC8vXG4gICAgICAvLyBgYGBcbiAgICAgIC8vIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiBkb1dvcmsoY291bnRlcikge1xuICAgICAgLy8gICAvKiAuLi4gSSdtIGEgYnVzeSB3b3JrZXIgYmVlIC4uLiAqL1xuICAgICAgLy8gICB2YXIgb3JpZ2luYWxBY3Rpb24gPSB0aGlzO1xuICAgICAgLy8gICAvKiB3YWl0IDEwMG1zIGJlZm9yZSByZXNjaGVkdWxpbmcgdGhpcyBhY3Rpb24gYWdhaW4gKi9cbiAgICAgIC8vICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyAgICAgb3JpZ2luYWxBY3Rpb24uc2NoZWR1bGUoY291bnRlciArIDEpO1xuICAgICAgLy8gICB9LCAxMDApO1xuICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICAvLyBgYGBcblxuICAgICAgaWYgKHRoaXMucGVuZGluZyA9PT0gZmFsc2UgJiYgaWQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmlkID0gbnVsbDtcbiAgICAgICAgcm9vdC5jbGVhckludGVydmFsKGlkKTtcbiAgICAgIH1cbiAgICB9LCBkZWxheSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByb3RlY3RlZCBfdW5zdWJzY3JpYmUoKSB7XG5cbiAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICBjb25zdCB7aWQsIHNjaGVkdWxlcn0gPSB0aGlzO1xuICAgIGNvbnN0IHthY3Rpb25zfSA9IHNjaGVkdWxlcjtcbiAgICBjb25zdCBpbmRleCA9IGFjdGlvbnMuaW5kZXhPZih0aGlzKTtcblxuICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmlkID0gbnVsbDtcbiAgICAgIHJvb3QuY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHRoaXMud29yayA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5zY2hlZHVsZXIgPSBudWxsO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
