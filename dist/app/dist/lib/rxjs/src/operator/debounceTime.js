System.register(['../Subscriber', '../scheduler/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, async_1;
    var DebounceTimeOperator, DebounceTimeSubscriber;
    /**
     * Returns the source Observable delayed by the computed debounce duration,
     * with the duration lengthened if a new source item arrives before the delay
     * duration ends.
     * In practice, for each item emitted on the source, this operator holds the
     * latest item, waits for a silence for the `dueTime` length, and only then
     * emits the latest source item on the result Observable.
     * Optionally takes a scheduler for manging timers.
     * @param {number} dueTime the timeout value for the window of time required to not drop the item.
     * @param {Scheduler} [scheduler] the Scheduler to use for managing the timers that handle the timeout for each item.
     * @return {Observable} an Observable the same as source Observable, but drops items.
     * @method debounceTime
     * @owner Observable
     */
    function debounceTime(dueTime, scheduler) {
        if (scheduler === void 0) { scheduler = async_1.async; }
        return this.lift(new DebounceTimeOperator(dueTime, scheduler));
    }
    exports_1("debounceTime", debounceTime);
    function dispatchNext(subscriber) {
        subscriber.debouncedNext();
    }
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            DebounceTimeOperator = (function () {
                function DebounceTimeOperator(dueTime, scheduler) {
                    this.dueTime = dueTime;
                    this.scheduler = scheduler;
                }
                DebounceTimeOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
                };
                return DebounceTimeOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            DebounceTimeSubscriber = (function (_super) {
                __extends(DebounceTimeSubscriber, _super);
                function DebounceTimeSubscriber(destination, dueTime, scheduler) {
                    _super.call(this, destination);
                    this.dueTime = dueTime;
                    this.scheduler = scheduler;
                    this.debouncedSubscription = null;
                    this.lastValue = null;
                    this.hasValue = false;
                }
                DebounceTimeSubscriber.prototype._next = function (value) {
                    this.clearDebounce();
                    this.lastValue = value;
                    this.hasValue = true;
                    this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
                };
                DebounceTimeSubscriber.prototype._complete = function () {
                    this.debouncedNext();
                    this.destination.complete();
                };
                DebounceTimeSubscriber.prototype.debouncedNext = function () {
                    this.clearDebounce();
                    if (this.hasValue) {
                        this.destination.next(this.lastValue);
                        this.lastValue = null;
                        this.hasValue = false;
                    }
                };
                DebounceTimeSubscriber.prototype.clearDebounce = function () {
                    var debouncedSubscription = this.debouncedSubscription;
                    if (debouncedSubscription !== null) {
                        this.remove(debouncedSubscription);
                        debouncedSubscription.unsubscribe();
                        this.debouncedSubscription = null;
                    }
                };
                return DebounceTimeSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2RlYm91bmNlVGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBT0E7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNILHNCQUFnQyxPQUFlLEVBQUUsU0FBNEI7UUFBNUIseUJBQTRCLEdBQTVCLHlCQUE0QjtRQUMzRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFGRCx1Q0FFQyxDQUFBO0lBZ0VELHNCQUFzQixVQUF1QztRQUMzRCxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7Ozs7OztZQTVERDtnQkFDRSw4QkFBb0IsT0FBZSxFQUFVLFNBQW9CO29CQUE3QyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7Z0JBQ2pFLENBQUM7Z0JBRUQsbUNBQUksR0FBSixVQUFLLFVBQXlCLEVBQUUsTUFBVztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDakcsQ0FBQztnQkFDSCwyQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUF3QywwQ0FBYTtnQkFLbkQsZ0NBQVksV0FBMEIsRUFDbEIsT0FBZSxFQUNmLFNBQW9CO29CQUN0QyxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFGRCxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLGNBQVMsR0FBVCxTQUFTLENBQVc7b0JBTmhDLDBCQUFxQixHQUFpQixJQUFJLENBQUM7b0JBQzNDLGNBQVMsR0FBTSxJQUFJLENBQUM7b0JBQ3BCLGFBQVEsR0FBWSxLQUFLLENBQUM7Z0JBTWxDLENBQUM7Z0JBRVMsc0NBQUssR0FBZixVQUFnQixLQUFRO29CQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkcsQ0FBQztnQkFFUywwQ0FBUyxHQUFuQjtvQkFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsOENBQWEsR0FBYjtvQkFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBRXJCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3dCQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsQ0FBQztnQkFDSCxDQUFDO2dCQUVPLDhDQUFhLEdBQXJCO29CQUNFLElBQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO29CQUV6RCxFQUFFLENBQUMsQ0FBQyxxQkFBcUIsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7d0JBQ25DLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNwQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO29CQUNwQyxDQUFDO2dCQUNILENBQUM7Z0JBQ0gsNkJBQUM7WUFBRCxDQTFDQSxBQTBDQyxDQTFDdUMsdUJBQVUsR0EwQ2pEIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2RlYm91bmNlVGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7YXN5bmN9IGZyb20gJy4uL3NjaGVkdWxlci9hc3luYyc7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc291cmNlIE9ic2VydmFibGUgZGVsYXllZCBieSB0aGUgY29tcHV0ZWQgZGVib3VuY2UgZHVyYXRpb24sXG4gKiB3aXRoIHRoZSBkdXJhdGlvbiBsZW5ndGhlbmVkIGlmIGEgbmV3IHNvdXJjZSBpdGVtIGFycml2ZXMgYmVmb3JlIHRoZSBkZWxheVxuICogZHVyYXRpb24gZW5kcy5cbiAqIEluIHByYWN0aWNlLCBmb3IgZWFjaCBpdGVtIGVtaXR0ZWQgb24gdGhlIHNvdXJjZSwgdGhpcyBvcGVyYXRvciBob2xkcyB0aGVcbiAqIGxhdGVzdCBpdGVtLCB3YWl0cyBmb3IgYSBzaWxlbmNlIGZvciB0aGUgYGR1ZVRpbWVgIGxlbmd0aCwgYW5kIG9ubHkgdGhlblxuICogZW1pdHMgdGhlIGxhdGVzdCBzb3VyY2UgaXRlbSBvbiB0aGUgcmVzdWx0IE9ic2VydmFibGUuXG4gKiBPcHRpb25hbGx5IHRha2VzIGEgc2NoZWR1bGVyIGZvciBtYW5naW5nIHRpbWVycy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkdWVUaW1lIHRoZSB0aW1lb3V0IHZhbHVlIGZvciB0aGUgd2luZG93IG9mIHRpbWUgcmVxdWlyZWQgdG8gbm90IGRyb3AgdGhlIGl0ZW0uXG4gKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gdGhlIFNjaGVkdWxlciB0byB1c2UgZm9yIG1hbmFnaW5nIHRoZSB0aW1lcnMgdGhhdCBoYW5kbGUgdGhlIHRpbWVvdXQgZm9yIGVhY2ggaXRlbS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IGFuIE9ic2VydmFibGUgdGhlIHNhbWUgYXMgc291cmNlIE9ic2VydmFibGUsIGJ1dCBkcm9wcyBpdGVtcy5cbiAqIEBtZXRob2QgZGVib3VuY2VUaW1lXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2VUaW1lPFQ+KGR1ZVRpbWU6IG51bWJlciwgc2NoZWR1bGVyOiBTY2hlZHVsZXIgPSBhc3luYyk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBEZWJvdW5jZVRpbWVPcGVyYXRvcihkdWVUaW1lLCBzY2hlZHVsZXIpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWJvdW5jZVRpbWVTaWduYXR1cmU8VD4ge1xuICAoZHVlVGltZTogbnVtYmVyLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQ+O1xufVxuXG5jbGFzcyBEZWJvdW5jZVRpbWVPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkdWVUaW1lOiBudW1iZXIsIHByaXZhdGUgc2NoZWR1bGVyOiBTY2hlZHVsZXIpIHtcbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPiwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgRGVib3VuY2VUaW1lU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmR1ZVRpbWUsIHRoaXMuc2NoZWR1bGVyKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIERlYm91bmNlVGltZVN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgcHJpdmF0ZSBkZWJvdW5jZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIHByaXZhdGUgbGFzdFZhbHVlOiBUID0gbnVsbDtcbiAgcHJpdmF0ZSBoYXNWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIGR1ZVRpbWU6IG51bWJlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzY2hlZHVsZXI6IFNjaGVkdWxlcikge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCkge1xuICAgIHRoaXMuY2xlYXJEZWJvdW5jZSgpO1xuICAgIHRoaXMubGFzdFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5oYXNWYWx1ZSA9IHRydWU7XG4gICAgdGhpcy5hZGQodGhpcy5kZWJvdW5jZWRTdWJzY3JpcHRpb24gPSB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaE5leHQsIHRoaXMuZHVlVGltZSwgdGhpcykpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpIHtcbiAgICB0aGlzLmRlYm91bmNlZE5leHQoKTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gIH1cblxuICBkZWJvdW5jZWROZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJEZWJvdW5jZSgpO1xuXG4gICAgaWYgKHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh0aGlzLmxhc3RWYWx1ZSk7XG4gICAgICB0aGlzLmxhc3RWYWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLmhhc1ZhbHVlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRlYm91bmNlKCk6IHZvaWQge1xuICAgIGNvbnN0IGRlYm91bmNlZFN1YnNjcmlwdGlvbiA9IHRoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uO1xuXG4gICAgaWYgKGRlYm91bmNlZFN1YnNjcmlwdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW1vdmUoZGVib3VuY2VkU3Vic2NyaXB0aW9uKTtcbiAgICAgIGRlYm91bmNlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kZWJvdW5jZWRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwYXRjaE5leHQoc3Vic2NyaWJlcjogRGVib3VuY2VUaW1lU3Vic2NyaWJlcjxhbnk+KSB7XG4gIHN1YnNjcmliZXIuZGVib3VuY2VkTmV4dCgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
