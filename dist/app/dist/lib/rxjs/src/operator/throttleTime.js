System.register(['../Subscriber', '../scheduler/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, async_1;
    var ThrottleTimeOperator, ThrottleTimeSubscriber;
    /**
     * @param delay
     * @param scheduler
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method throttleTime
     * @owner Observable
     */
    function throttleTime(delay, scheduler) {
        if (scheduler === void 0) { scheduler = async_1.async; }
        return this.lift(new ThrottleTimeOperator(delay, scheduler));
    }
    exports_1("throttleTime", throttleTime);
    function dispatchNext(arg) {
        var subscriber = arg.subscriber;
        subscriber.clearThrottle();
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
            ThrottleTimeOperator = (function () {
                function ThrottleTimeOperator(delay, scheduler) {
                    this.delay = delay;
                    this.scheduler = scheduler;
                }
                ThrottleTimeOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new ThrottleTimeSubscriber(subscriber, this.delay, this.scheduler));
                };
                return ThrottleTimeOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ThrottleTimeSubscriber = (function (_super) {
                __extends(ThrottleTimeSubscriber, _super);
                function ThrottleTimeSubscriber(destination, delay, scheduler) {
                    _super.call(this, destination);
                    this.delay = delay;
                    this.scheduler = scheduler;
                }
                ThrottleTimeSubscriber.prototype._next = function (value) {
                    if (!this.throttled) {
                        this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, { subscriber: this }));
                        this.destination.next(value);
                    }
                };
                ThrottleTimeSubscriber.prototype.clearThrottle = function () {
                    var throttled = this.throttled;
                    if (throttled) {
                        throttled.unsubscribe();
                        this.remove(throttled);
                        this.throttled = null;
                    }
                };
                return ThrottleTimeSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3Rocm90dGxlVGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBT0E7Ozs7OztPQU1HO0lBQ0gsc0JBQWdDLEtBQWEsRUFBRSxTQUE0QjtRQUE1Qix5QkFBNEIsR0FBNUIseUJBQTRCO1FBQ3pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksb0JBQW9CLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUZELHVDQUVDLENBQUE7SUFrREQsc0JBQXlCLEdBQW1CO1FBQ2xDLCtCQUFVLENBQVM7UUFDM0IsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7Ozs7WUEvQ0Q7Z0JBQ0UsOEJBQW9CLEtBQWEsRUFBVSxTQUFvQjtvQkFBM0MsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO2dCQUMvRCxDQUFDO2dCQUVELG1DQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksc0JBQXNCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9GLENBQUM7Z0JBQ0gsMkJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQUVEOzs7O2VBSUc7WUFDSDtnQkFBd0MsMENBQWE7Z0JBR25ELGdDQUFZLFdBQTBCLEVBQ2xCLEtBQWEsRUFDYixTQUFvQjtvQkFDdEMsa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBRkQsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFDYixjQUFTLEdBQVQsU0FBUyxDQUFXO2dCQUV4QyxDQUFDO2dCQUVTLHNDQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDbkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQy9CLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCw4Q0FBYSxHQUFiO29CQUNFLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ2QsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDeEIsQ0FBQztnQkFDSCxDQUFDO2dCQUNILDZCQUFDO1lBQUQsQ0F4QkEsQUF3QkMsQ0F4QnVDLHVCQUFVLEdBd0JqRCIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci90aHJvdHRsZVRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7YXN5bmN9IGZyb20gJy4uL3NjaGVkdWxlci9hc3luYyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuXG4vKipcbiAqIEBwYXJhbSBkZWxheVxuICogQHBhcmFtIHNjaGVkdWxlclxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxSPnxXZWJTb2NrZXRTdWJqZWN0PFQ+fE9ic2VydmFibGU8VD59XG4gKiBAbWV0aG9kIHRocm90dGxlVGltZVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlVGltZTxUPihkZWxheTogbnVtYmVyLCBzY2hlZHVsZXI6IFNjaGVkdWxlciA9IGFzeW5jKTogT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiB0aGlzLmxpZnQobmV3IFRocm90dGxlVGltZU9wZXJhdG9yKGRlbGF5LCBzY2hlZHVsZXIpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaHJvdHRsZVRpbWVTaWduYXR1cmU8VD4ge1xuICAoZHVlVGltZTogbnVtYmVyLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQ+O1xufVxuXG5jbGFzcyBUaHJvdHRsZVRpbWVPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWxheTogbnVtYmVyLCBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyKSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFRocm90dGxlVGltZVN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5kZWxheSwgdGhpcy5zY2hlZHVsZXIpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgVGhyb3R0bGVUaW1lU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBwcml2YXRlIHRocm90dGxlZDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIGRlbGF5OiBudW1iZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2NoZWR1bGVyOiBTY2hlZHVsZXIpIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpIHtcbiAgICBpZiAoIXRoaXMudGhyb3R0bGVkKSB7XG4gICAgICB0aGlzLmFkZCh0aGlzLnRocm90dGxlZCA9IHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoTmV4dCwgdGhpcy5kZWxheSwgeyBzdWJzY3JpYmVyOiB0aGlzIH0pKTtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJUaHJvdHRsZSgpIHtcbiAgICBjb25zdCB0aHJvdHRsZWQgPSB0aGlzLnRocm90dGxlZDtcbiAgICBpZiAodGhyb3R0bGVkKSB7XG4gICAgICB0aHJvdHRsZWQudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMucmVtb3ZlKHRocm90dGxlZCk7XG4gICAgICB0aGlzLnRocm90dGxlZCA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbmludGVyZmFjZSBEaXNwYXRjaEFyZzxUPiB7XG4gIHN1YnNjcmliZXI6IFRocm90dGxlVGltZVN1YnNjcmliZXI8VD47XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoTmV4dDxUPihhcmc6IERpc3BhdGNoQXJnPFQ+KSB7XG4gIGNvbnN0IHsgc3Vic2NyaWJlciB9ID0gYXJnO1xuICBzdWJzY3JpYmVyLmNsZWFyVGhyb3R0bGUoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
