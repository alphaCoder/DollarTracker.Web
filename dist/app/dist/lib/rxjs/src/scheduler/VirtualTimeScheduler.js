System.register(['../Subscription'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscription_1;
    var VirtualTimeScheduler, VirtualAction;
    return {
        setters:[
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            }],
        execute: function() {
            VirtualTimeScheduler = (function () {
                function VirtualTimeScheduler() {
                    this.actions = []; // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
                    this.active = false;
                    this.scheduledId = null;
                    this.index = 0;
                    this.sorted = false;
                    this.frame = 0;
                    this.maxFrames = 750;
                }
                VirtualTimeScheduler.prototype.now = function () {
                    return this.frame;
                };
                VirtualTimeScheduler.prototype.flush = function () {
                    var actions = this.actions;
                    var maxFrames = this.maxFrames;
                    while (actions.length > 0) {
                        var action = actions.shift();
                        this.frame = action.delay;
                        if (this.frame <= maxFrames) {
                            action.execute();
                            if (action.error) {
                                actions.length = 0;
                                this.frame = 0;
                                throw action.error;
                            }
                        }
                        else {
                            break;
                        }
                    }
                    actions.length = 0;
                    this.frame = 0;
                };
                VirtualTimeScheduler.prototype.addAction = function (action) {
                    var actions = this.actions;
                    actions.push(action);
                    actions.sort(function (a, b) {
                        if (a.delay === b.delay) {
                            if (a.index === b.index) {
                                return 0;
                            }
                            else if (a.index > b.index) {
                                return 1;
                            }
                            else {
                                return -1;
                            }
                        }
                        else if (a.delay > b.delay) {
                            return 1;
                        }
                        else {
                            return -1;
                        }
                    });
                };
                VirtualTimeScheduler.prototype.schedule = function (work, delay, state) {
                    if (delay === void 0) { delay = 0; }
                    this.sorted = false;
                    return new VirtualAction(this, work, this.index++).schedule(state, delay);
                };
                VirtualTimeScheduler.frameTimeFactor = 10;
                return VirtualTimeScheduler;
            }());
            exports_1("VirtualTimeScheduler", VirtualTimeScheduler);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            VirtualAction = (function (_super) {
                __extends(VirtualAction, _super);
                function VirtualAction(scheduler, work, index) {
                    _super.call(this);
                    this.scheduler = scheduler;
                    this.work = work;
                    this.index = index;
                    this.calls = 0;
                }
                VirtualAction.prototype.schedule = function (state, delay) {
                    if (delay === void 0) { delay = 0; }
                    if (this.isUnsubscribed) {
                        return this;
                    }
                    var scheduler = this.scheduler;
                    var action = null;
                    if (this.calls++ === 0) {
                        // the action is not being rescheduled.
                        action = this;
                    }
                    else {
                        // the action is being rescheduled, and we can't mutate the one in the actions list
                        // in the scheduler, so we'll create a new one.
                        action = new VirtualAction(scheduler, this.work, scheduler.index += 1);
                        this.add(action);
                    }
                    action.state = state;
                    action.delay = scheduler.frame + delay;
                    scheduler.addAction(action);
                    return this;
                };
                VirtualAction.prototype.execute = function () {
                    if (this.isUnsubscribed) {
                        throw new Error('How did did we execute a canceled Action?');
                    }
                    this.work(this.state);
                };
                VirtualAction.prototype.unsubscribe = function () {
                    var actions = this.scheduler.actions;
                    var index = actions.indexOf(this);
                    this.work = void 0;
                    this.state = void 0;
                    this.scheduler = void 0;
                    if (index !== -1) {
                        actions.splice(index, 1);
                    }
                    _super.prototype.unsubscribe.call(this);
                };
                return VirtualAction;
            }(Subscription_1.Subscription));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9WaXJ0dWFsVGltZVNjaGVkdWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBQUE7b0JBQ0UsWUFBTyxHQUFrQixFQUFFLENBQUMsQ0FBQyx1RUFBdUU7b0JBQ3BHLFdBQU0sR0FBWSxLQUFLLENBQUM7b0JBQ3hCLGdCQUFXLEdBQVcsSUFBSSxDQUFDO29CQUMzQixVQUFLLEdBQVcsQ0FBQyxDQUFDO29CQUNsQixXQUFNLEdBQVksS0FBSyxDQUFDO29CQUN4QixVQUFLLEdBQVcsQ0FBQyxDQUFDO29CQUNsQixjQUFTLEdBQVcsR0FBRyxDQUFDO2dCQXVEMUIsQ0FBQztnQkFuREMsa0NBQUcsR0FBSDtvQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDcEIsQ0FBQztnQkFFRCxvQ0FBSyxHQUFMO29CQUNFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQzdCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2pDLE9BQU8sT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzt3QkFDMUIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7d0JBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDNUIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDOzRCQUNqQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDakIsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0NBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dDQUNmLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FB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SyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMzQixDQUFDO29CQUVELGdCQUFLLENBQUMsV0FBVyxXQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0gsb0JBQUM7WUFBRCxDQXREQSxBQXNEQyxDQXREOEIsMkJBQVksR0FzRDFDIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9WaXJ0dWFsVGltZVNjaGVkdWxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NoZWR1bGVyfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9BY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgVmlydHVhbFRpbWVTY2hlZHVsZXIgaW1wbGVtZW50cyBTY2hlZHVsZXIge1xuICBhY3Rpb25zOiBBY3Rpb248YW55PltdID0gW107IC8vIFhYWDogdXNlIGBhbnlgIHRvIHJlbW92ZSB0eXBlIHBhcmFtIGBUYCBmcm9tIGBWaXJ0dWFsVGltZVNjaGVkdWxlcmAuXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBzY2hlZHVsZWRJZDogbnVtYmVyID0gbnVsbDtcbiAgaW5kZXg6IG51bWJlciA9IDA7XG4gIHNvcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBmcmFtZTogbnVtYmVyID0gMDtcbiAgbWF4RnJhbWVzOiBudW1iZXIgPSA3NTA7XG5cbiAgcHJvdGVjdGVkIHN0YXRpYyBmcmFtZVRpbWVGYWN0b3I6IG51bWJlciA9IDEwO1xuXG4gIG5vdygpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGZsdXNoKCkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmFjdGlvbnM7XG4gICAgY29uc3QgbWF4RnJhbWVzID0gdGhpcy5tYXhGcmFtZXM7XG4gICAgd2hpbGUgKGFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKTtcbiAgICAgIHRoaXMuZnJhbWUgPSBhY3Rpb24uZGVsYXk7XG4gICAgICBpZiAodGhpcy5mcmFtZSA8PSBtYXhGcmFtZXMpIHtcbiAgICAgICAgYWN0aW9uLmV4ZWN1dGUoKTtcbiAgICAgICAgaWYgKGFjdGlvbi5lcnJvcikge1xuICAgICAgICAgIGFjdGlvbnMubGVuZ3RoID0gMDtcbiAgICAgICAgICB0aGlzLmZyYW1lID0gMDtcbiAgICAgICAgICB0aHJvdyBhY3Rpb24uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBhY3Rpb25zLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5mcmFtZSA9IDA7XG4gIH1cblxuICBhZGRBY3Rpb248VD4oYWN0aW9uOiBBY3Rpb248VD4pOiB2b2lkIHtcbiAgICBjb25zdCBhY3Rpb25zOiBBY3Rpb248VD5bXSA9IHRoaXMuYWN0aW9ucztcblxuICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuXG4gICAgYWN0aW9ucy5zb3J0KChhOiBWaXJ0dWFsQWN0aW9uPFQ+LCBiOiBWaXJ0dWFsQWN0aW9uPFQ+KSA9PiB7XG4gICAgICBpZiAoYS5kZWxheSA9PT0gYi5kZWxheSkge1xuICAgICAgICBpZiAoYS5pbmRleCA9PT0gYi5pbmRleCkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9IGVsc2UgaWYgKGEuaW5kZXggPiBiLmluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGEuZGVsYXkgPiBiLmRlbGF5KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2NoZWR1bGU8VD4od29yazogKHg/OiBUKSA9PiBTdWJzY3JpcHRpb24gfCB2b2lkLCBkZWxheTogbnVtYmVyID0gMCwgc3RhdGU/OiBUKTogU3Vic2NyaXB0aW9uIHtcbiAgICB0aGlzLnNvcnRlZCA9IGZhbHNlO1xuICAgIHJldHVybiBuZXcgVmlydHVhbEFjdGlvbih0aGlzLCB3b3JrLCB0aGlzLmluZGV4KyspLnNjaGVkdWxlKHN0YXRlLCBkZWxheSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIFZpcnR1YWxBY3Rpb248VD4gZXh0ZW5kcyBTdWJzY3JpcHRpb24gaW1wbGVtZW50cyBBY3Rpb248VD4ge1xuICBzdGF0ZTogVDtcbiAgZGVsYXk6IG51bWJlcjtcbiAgY2FsbHMgPSAwO1xuICBlcnJvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzY2hlZHVsZXI6IFZpcnR1YWxUaW1lU2NoZWR1bGVyLFxuICAgICAgICAgICAgICBwdWJsaWMgd29yazogKHg/OiBUKSA9PiBTdWJzY3JpcHRpb24gfCB2b2lkLFxuICAgICAgICAgICAgICBwdWJsaWMgaW5kZXg6IG51bWJlcikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzY2hlZHVsZShzdGF0ZT86IFQsIGRlbGF5OiBudW1iZXIgPSAwKTogVmlydHVhbEFjdGlvbjxUPiB7XG4gICAgaWYgKHRoaXMuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICBsZXQgYWN0aW9uOiBBY3Rpb248VD4gPSBudWxsO1xuICAgIGlmICh0aGlzLmNhbGxzKysgPT09IDApIHtcbiAgICAgIC8vIHRoZSBhY3Rpb24gaXMgbm90IGJlaW5nIHJlc2NoZWR1bGVkLlxuICAgICAgYWN0aW9uID0gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhlIGFjdGlvbiBpcyBiZWluZyByZXNjaGVkdWxlZCwgYW5kIHdlIGNhbid0IG11dGF0ZSB0aGUgb25lIGluIHRoZSBhY3Rpb25zIGxpc3RcbiAgICAgIC8vIGluIHRoZSBzY2hlZHVsZXIsIHNvIHdlJ2xsIGNyZWF0ZSBhIG5ldyBvbmUuXG4gICAgICBhY3Rpb24gPSBuZXcgVmlydHVhbEFjdGlvbihzY2hlZHVsZXIsIHRoaXMud29yaywgc2NoZWR1bGVyLmluZGV4ICs9IDEpO1xuICAgICAgdGhpcy5hZGQoYWN0aW9uKTtcbiAgICB9XG4gICAgYWN0aW9uLnN0YXRlID0gc3RhdGU7XG4gICAgYWN0aW9uLmRlbGF5ID0gc2NoZWR1bGVyLmZyYW1lICsgZGVsYXk7XG4gICAgc2NoZWR1bGVyLmFkZEFjdGlvbihhY3Rpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZXhlY3V0ZSgpIHtcbiAgICBpZiAodGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIb3cgZGlkIGRpZCB3ZSBleGVjdXRlIGEgY2FuY2VsZWQgQWN0aW9uPycpO1xuICAgIH1cbiAgICB0aGlzLndvcmsodGhpcy5zdGF0ZSk7XG4gIH1cblxuICB1bnN1YnNjcmliZSgpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5zY2hlZHVsZXIuYWN0aW9ucztcbiAgICBjb25zdCBpbmRleCA9IGFjdGlvbnMuaW5kZXhPZih0aGlzKTtcblxuICAgIHRoaXMud29yayA9IHZvaWQgMDtcbiAgICB0aGlzLnN0YXRlID0gdm9pZCAwO1xuICAgIHRoaXMuc2NoZWR1bGVyID0gdm9pZCAwO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHN1cGVyLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
