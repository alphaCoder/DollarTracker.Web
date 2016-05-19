System.register(['../Subscriber', '../scheduler/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, async_1;
    var SampleTimeOperator, SampleTimeSubscriber;
    /**
     * @param delay
     * @param scheduler
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method sampleTime
     * @owner Observable
     */
    function sampleTime(delay, scheduler) {
        if (scheduler === void 0) { scheduler = async_1.async; }
        return this.lift(new SampleTimeOperator(delay, scheduler));
    }
    exports_1("sampleTime", sampleTime);
    function dispatchNotification(state) {
        var subscriber = state.subscriber, delay = state.delay;
        subscriber.notifyNext();
        this.schedule(state, delay);
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
            SampleTimeOperator = (function () {
                function SampleTimeOperator(delay, scheduler) {
                    this.delay = delay;
                    this.scheduler = scheduler;
                }
                SampleTimeOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new SampleTimeSubscriber(subscriber, this.delay, this.scheduler));
                };
                return SampleTimeOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SampleTimeSubscriber = (function (_super) {
                __extends(SampleTimeSubscriber, _super);
                function SampleTimeSubscriber(destination, delay, scheduler) {
                    _super.call(this, destination);
                    this.delay = delay;
                    this.scheduler = scheduler;
                    this.hasValue = false;
                    this.add(scheduler.schedule(dispatchNotification, delay, { subscriber: this, delay: delay }));
                }
                SampleTimeSubscriber.prototype._next = function (value) {
                    this.lastValue = value;
                    this.hasValue = true;
                };
                SampleTimeSubscriber.prototype.notifyNext = function () {
                    if (this.hasValue) {
                        this.hasValue = false;
                        this.destination.next(this.lastValue);
                    }
                };
                return SampleTimeSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3NhbXBsZVRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQU1BOzs7Ozs7T0FNRztJQUNILG9CQUE4QixLQUFhLEVBQUUsU0FBNEI7UUFBNUIseUJBQTRCLEdBQTVCLHlCQUE0QjtRQUN2RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFGRCxtQ0FFQyxDQUFBO0lBMENELDhCQUFpQyxLQUFVO1FBQ25DLGlDQUFVLEVBQUUsbUJBQUssQ0FBVztRQUNsQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7Ozs7OztZQXhDRDtnQkFDRSw0QkFBb0IsS0FBYSxFQUFVLFNBQW9CO29CQUEzQyxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7Z0JBQy9ELENBQUM7Z0JBRUQsaUNBQUksR0FBSixVQUFLLFVBQXlCLEVBQUUsTUFBVztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDN0YsQ0FBQztnQkFDSCx5QkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFzQyx3Q0FBYTtnQkFJakQsOEJBQVksV0FBMEIsRUFBVSxLQUFhLEVBQVUsU0FBb0I7b0JBQ3pGLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQUQyQixVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7b0JBRjNGLGFBQVEsR0FBWSxLQUFLLENBQUM7b0JBSXhCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQUEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6RixDQUFDO2dCQUVTLG9DQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELHlDQUFVLEdBQVY7b0JBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3hDLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCwyQkFBQztZQUFELENBcEJBLEFBb0JDLENBcEJxQyx1QkFBVSxHQW9CL0MiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3Ivc2FtcGxlVGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge2FzeW5jfSBmcm9tICcuLi9zY2hlZHVsZXIvYXN5bmMnO1xuXG4vKipcbiAqIEBwYXJhbSBkZWxheVxuICogQHBhcmFtIHNjaGVkdWxlclxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxSPnxXZWJTb2NrZXRTdWJqZWN0PFQ+fE9ic2VydmFibGU8VD59XG4gKiBAbWV0aG9kIHNhbXBsZVRpbWVcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYW1wbGVUaW1lPFQ+KGRlbGF5OiBudW1iZXIsIHNjaGVkdWxlcjogU2NoZWR1bGVyID0gYXN5bmMpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgU2FtcGxlVGltZU9wZXJhdG9yKGRlbGF5LCBzY2hlZHVsZXIpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTYW1wbGVUaW1lU2lnbmF0dXJlPFQ+IHtcbiAgKGRlbGF5OiBudW1iZXIsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VD47XG59XG5cbmNsYXNzIFNhbXBsZVRpbWVPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWxheTogbnVtYmVyLCBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyKSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFNhbXBsZVRpbWVTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuZGVsYXksIHRoaXMuc2NoZWR1bGVyKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIFNhbXBsZVRpbWVTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIGxhc3RWYWx1ZTogVDtcbiAgaGFzVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxUPiwgcHJpdmF0ZSBkZWxheTogbnVtYmVyLCBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaE5vdGlmaWNhdGlvbiwgZGVsYXksIHsgc3Vic2NyaWJlcjogdGhpcywgZGVsYXkgfSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKSB7XG4gICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmhhc1ZhbHVlID0gdHJ1ZTtcbiAgfVxuXG4gIG5vdGlmeU5leHQoKSB7XG4gICAgaWYgKHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgIHRoaXMuaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh0aGlzLmxhc3RWYWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoTm90aWZpY2F0aW9uPFQ+KHN0YXRlOiBhbnkpIHtcbiAgbGV0IHsgc3Vic2NyaWJlciwgZGVsYXkgfSA9IHN0YXRlO1xuICBzdWJzY3JpYmVyLm5vdGlmeU5leHQoKTtcbiAgKDxhbnk+dGhpcykuc2NoZWR1bGUoc3RhdGUsIGRlbGF5KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
