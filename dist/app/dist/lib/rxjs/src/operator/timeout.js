System.register(['../scheduler/async', '../util/isDate', '../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var async_1, isDate_1, Subscriber_1;
    var TimeoutOperator, TimeoutSubscriber;
    /**
     * @param due
     * @param errorToSend
     * @param scheduler
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method timeout
     * @owner Observable
     */
    function timeout(due, errorToSend, scheduler) {
        if (errorToSend === void 0) { errorToSend = null; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        var absoluteTimeout = isDate_1.isDate(due);
        var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
        return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler));
    }
    exports_1("timeout", timeout);
    return {
        setters:[
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (isDate_1_1) {
                isDate_1 = isDate_1_1;
            },
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            TimeoutOperator = (function () {
                function TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler) {
                    this.waitFor = waitFor;
                    this.absoluteTimeout = absoluteTimeout;
                    this.errorToSend = errorToSend;
                    this.scheduler = scheduler;
                }
                TimeoutOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.errorToSend, this.scheduler));
                };
                return TimeoutOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            TimeoutSubscriber = (function (_super) {
                __extends(TimeoutSubscriber, _super);
                function TimeoutSubscriber(destination, absoluteTimeout, waitFor, errorToSend, scheduler) {
                    _super.call(this, destination);
                    this.absoluteTimeout = absoluteTimeout;
                    this.waitFor = waitFor;
                    this.errorToSend = errorToSend;
                    this.scheduler = scheduler;
                    this.index = 0;
                    this._previousIndex = 0;
                    this._hasCompleted = false;
                    this.scheduleTimeout();
                }
                Object.defineProperty(TimeoutSubscriber.prototype, "previousIndex", {
                    get: function () {
                        return this._previousIndex;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeoutSubscriber.prototype, "hasCompleted", {
                    get: function () {
                        return this._hasCompleted;
                    },
                    enumerable: true,
                    configurable: true
                });
                TimeoutSubscriber.dispatchTimeout = function (state) {
                    var source = state.subscriber;
                    var currentIndex = state.index;
                    if (!source.hasCompleted && source.previousIndex === currentIndex) {
                        source.notifyTimeout();
                    }
                };
                TimeoutSubscriber.prototype.scheduleTimeout = function () {
                    var currentIndex = this.index;
                    this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, { subscriber: this, index: currentIndex });
                    this.index++;
                    this._previousIndex = currentIndex;
                };
                TimeoutSubscriber.prototype._next = function (value) {
                    this.destination.next(value);
                    if (!this.absoluteTimeout) {
                        this.scheduleTimeout();
                    }
                };
                TimeoutSubscriber.prototype._error = function (err) {
                    this.destination.error(err);
                    this._hasCompleted = true;
                };
                TimeoutSubscriber.prototype._complete = function () {
                    this.destination.complete();
                    this._hasCompleted = true;
                };
                TimeoutSubscriber.prototype.notifyTimeout = function () {
                    this.error(this.errorToSend || new Error('timeout'));
                };
                return TimeoutSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3RpbWVvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQU9BOzs7Ozs7O09BT0c7SUFDSCxpQkFBMkIsR0FBa0IsRUFDbEIsV0FBdUIsRUFDdkIsU0FBNEI7UUFENUIsMkJBQXVCLEdBQXZCLGtCQUF1QjtRQUN2Qix5QkFBNEIsR0FBNUIseUJBQTRCO1FBQ3JELElBQUksZUFBZSxHQUFHLGVBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLE9BQU8sR0FBRyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2pGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZUFBZSxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQU5ELDZCQU1DLENBQUE7Ozs7Ozs7Ozs7Ozs7WUFNRDtnQkFDRSx5QkFBb0IsT0FBZSxFQUNmLGVBQXdCLEVBQ3hCLFdBQWdCLEVBQ2hCLFNBQW9CO29CQUhwQixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFTO29CQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBSztvQkFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBVztnQkFDeEMsQ0FBQztnQkFFRCw4QkFBSSxHQUFKLFVBQUssVUFBeUIsRUFBRSxNQUFXO29CQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLGlCQUFpQixDQUM1QyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FDakYsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0gsc0JBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQUVEOzs7O2VBSUc7WUFDSDtnQkFBbUMscUNBQWE7Z0JBVzlDLDJCQUFZLFdBQTBCLEVBQ2xCLGVBQXdCLEVBQ3hCLE9BQWUsRUFDZixXQUFnQixFQUNoQixTQUFvQjtvQkFDdEMsa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBSkQsb0JBQWUsR0FBZixlQUFlLENBQVM7b0JBQ3hCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2YsZ0JBQVcsR0FBWCxXQUFXLENBQUs7b0JBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQVc7b0JBZGhDLFVBQUssR0FBVyxDQUFDLENBQUM7b0JBQ2xCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO29CQUkzQixrQkFBYSxHQUFZLEtBQUssQ0FBQztvQkFXckMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN6QixDQUFDO2dCQWZELHNCQUFJLDRDQUFhO3lCQUFqQjt3QkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztvQkFDN0IsQ0FBQzs7O21CQUFBO2dCQUVELHNCQUFJLDJDQUFZO3lCQUFoQjt3QkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztvQkFDNUIsQ0FBQzs7O21CQUFBO2dCQVdjLGlDQUFlLEdBQTlCLFVBQStCLEtBQVU7b0JBQ3ZDLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7b0JBQ2hDLElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7b0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQ2xFLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDekIsQ0FBQztnQkFDSCxDQUFDO2dCQUVPLDJDQUFlLEdBQXZCO29CQUNFLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztvQkFDcEgsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNiLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDO2dCQUNyQyxDQUFDO2dCQUVTLGlDQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRTdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDekIsQ0FBQztnQkFDSCxDQUFDO2dCQUVTLGtDQUFNLEdBQWhCLFVBQWlCLEdBQVE7b0JBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDNUIsQ0FBQztnQkFFUyxxQ0FBUyxHQUFuQjtvQkFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCx5Q0FBYSxHQUFiO29CQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUNILHdCQUFDO1lBQUQsQ0F4REEsQUF3REMsQ0F4RGtDLHVCQUFVLEdBd0Q1QyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci90aW1lb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3luY30gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcbmltcG9ydCB7aXNEYXRlfSBmcm9tICcuLi91dGlsL2lzRGF0ZSc7XG5pbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuXG4vKipcbiAqIEBwYXJhbSBkdWVcbiAqIEBwYXJhbSBlcnJvclRvU2VuZFxuICogQHBhcmFtIHNjaGVkdWxlclxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxSPnxXZWJTb2NrZXRTdWJqZWN0PFQ+fE9ic2VydmFibGU8VD59XG4gKiBAbWV0aG9kIHRpbWVvdXRcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lb3V0PFQ+KGR1ZTogbnVtYmVyIHwgRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yVG9TZW5kOiBhbnkgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVyOiBTY2hlZHVsZXIgPSBhc3luYyk6IE9ic2VydmFibGU8VD4ge1xuICBsZXQgYWJzb2x1dGVUaW1lb3V0ID0gaXNEYXRlKGR1ZSk7XG4gIGxldCB3YWl0Rm9yID0gYWJzb2x1dGVUaW1lb3V0ID8gKCtkdWUgLSBzY2hlZHVsZXIubm93KCkpIDogTWF0aC5hYnMoPG51bWJlcj5kdWUpO1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBUaW1lb3V0T3BlcmF0b3Iod2FpdEZvciwgYWJzb2x1dGVUaW1lb3V0LCBlcnJvclRvU2VuZCwgc2NoZWR1bGVyKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZW91dFNpZ25hdHVyZTxUPiB7XG4gIChkdWU6IG51bWJlciB8IERhdGUsIGVycm9yVG9TZW5kPzogYW55LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQ+O1xufVxuXG5jbGFzcyBUaW1lb3V0T3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2FpdEZvcjogbnVtYmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGFic29sdXRlVGltZW91dDogYm9vbGVhbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclRvU2VuZDogYW55LFxuICAgICAgICAgICAgICBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyKSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFRpbWVvdXRTdWJzY3JpYmVyPFQ+KFxuICAgICAgc3Vic2NyaWJlciwgdGhpcy5hYnNvbHV0ZVRpbWVvdXQsIHRoaXMud2FpdEZvciwgdGhpcy5lcnJvclRvU2VuZCwgdGhpcy5zY2hlZHVsZXJcbiAgICApKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgVGltZW91dFN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgcHJpdmF0ZSBpbmRleDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfcHJldmlvdXNJbmRleDogbnVtYmVyID0gMDtcbiAgZ2V0IHByZXZpb3VzSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcHJldmlvdXNJbmRleDtcbiAgfVxuICBwcml2YXRlIF9oYXNDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZ2V0IGhhc0NvbXBsZXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzQ29tcGxldGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8VD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgYWJzb2x1dGVUaW1lb3V0OiBib29sZWFuLFxuICAgICAgICAgICAgICBwcml2YXRlIHdhaXRGb3I6IG51bWJlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclRvU2VuZDogYW55LFxuICAgICAgICAgICAgICBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMuc2NoZWR1bGVUaW1lb3V0KCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBkaXNwYXRjaFRpbWVvdXQoc3RhdGU6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHNvdXJjZSA9IHN0YXRlLnN1YnNjcmliZXI7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc3RhdGUuaW5kZXg7XG4gICAgaWYgKCFzb3VyY2UuaGFzQ29tcGxldGVkICYmIHNvdXJjZS5wcmV2aW91c0luZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIHNvdXJjZS5ub3RpZnlUaW1lb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZVRpbWVvdXQoKTogdm9pZCB7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGUoVGltZW91dFN1YnNjcmliZXIuZGlzcGF0Y2hUaW1lb3V0LCB0aGlzLndhaXRGb3IsIHsgc3Vic2NyaWJlcjogdGhpcywgaW5kZXg6IGN1cnJlbnRJbmRleCB9KTtcbiAgICB0aGlzLmluZGV4Kys7XG4gICAgdGhpcy5fcHJldmlvdXNJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCkge1xuICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG5cbiAgICBpZiAoIXRoaXMuYWJzb2x1dGVUaW1lb3V0KSB7XG4gICAgICB0aGlzLnNjaGVkdWxlVGltZW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfZXJyb3IoZXJyOiBhbnkpIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgdGhpcy5faGFzQ29tcGxldGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKSB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2hhc0NvbXBsZXRlZCA9IHRydWU7XG4gIH1cblxuICBub3RpZnlUaW1lb3V0KCkge1xuICAgIHRoaXMuZXJyb3IodGhpcy5lcnJvclRvU2VuZCB8fCBuZXcgRXJyb3IoJ3RpbWVvdXQnKSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
