System.register(['../Subscriber', '../scheduler/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, async_1;
    var TimeInterval, TimeIntervalOperator, TimeIntervalSubscriber;
    /**
     * @param scheduler
     * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
     * @method timeInterval
     * @owner Observable
     */
    function timeInterval(scheduler) {
        if (scheduler === void 0) { scheduler = async_1.async; }
        return this.lift(new TimeIntervalOperator(scheduler));
    }
    exports_1("timeInterval", timeInterval);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            TimeInterval = (function () {
                function TimeInterval(value, interval) {
                    this.value = value;
                    this.interval = interval;
                }
                return TimeInterval;
            }());
            exports_1("TimeInterval", TimeInterval);
            ;
            TimeIntervalOperator = (function () {
                function TimeIntervalOperator(scheduler) {
                    this.scheduler = scheduler;
                }
                TimeIntervalOperator.prototype.call = function (observer, source) {
                    return source._subscribe(new TimeIntervalSubscriber(observer, this.scheduler));
                };
                return TimeIntervalOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            TimeIntervalSubscriber = (function (_super) {
                __extends(TimeIntervalSubscriber, _super);
                function TimeIntervalSubscriber(destination, scheduler) {
                    _super.call(this, destination);
                    this.scheduler = scheduler;
                    this.lastTime = 0;
                    this.lastTime = scheduler.now();
                }
                TimeIntervalSubscriber.prototype._next = function (value) {
                    var now = this.scheduler.now();
                    var span = now - this.lastTime;
                    this.lastTime = now;
                    this.destination.next(new TimeInterval(value, span));
                };
                return TimeIntervalSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3RpbWVJbnRlcnZhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBTUE7Ozs7O09BS0c7SUFDSCxzQkFBZ0MsU0FBNEI7UUFBNUIseUJBQTRCLEdBQTVCLHlCQUE0QjtRQUMxRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUZELHVDQUVDLENBQUE7Ozs7Ozs7Ozs7WUFNRDtnQkFDRSxzQkFBbUIsS0FBUSxFQUFTLFFBQWdCO29CQUFqQyxVQUFLLEdBQUwsS0FBSyxDQUFHO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7Z0JBRXBELENBQUM7Z0JBQ0gsbUJBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELHVDQUlDLENBQUE7WUFBQSxDQUFDO1lBRUY7Z0JBQ0UsOEJBQW9CLFNBQW9CO29CQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO2dCQUV4QyxDQUFDO2dCQUVELG1DQUFJLEdBQUosVUFBSyxRQUFxQyxFQUFFLE1BQVc7b0JBQ3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksc0JBQXNCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNqRixDQUFDO2dCQUNILDJCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQXdDLDBDQUFhO2dCQUduRCxnQ0FBWSxXQUF3QyxFQUFVLFNBQW9CO29CQUNoRixrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFEeUMsY0FBUyxHQUFULFNBQVMsQ0FBVztvQkFGMUUsYUFBUSxHQUFXLENBQUMsQ0FBQztvQkFLM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2xDLENBQUM7Z0JBRVMsc0NBQUssR0FBZixVQUFnQixLQUFRO29CQUN0QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUMvQixJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7b0JBRXBCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUNILDZCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsQ0FoQnVDLHVCQUFVLEdBZ0JqRCIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci90aW1lSW50ZXJ2YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7U2NoZWR1bGVyfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHthc3luY30gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcblxuLyoqXG4gKiBAcGFyYW0gc2NoZWR1bGVyXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFRpbWVJbnRlcnZhbDxhbnk+PnxXZWJTb2NrZXRTdWJqZWN0PFQ+fE9ic2VydmFibGU8VD59XG4gKiBAbWV0aG9kIHRpbWVJbnRlcnZhbFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVJbnRlcnZhbDxUPihzY2hlZHVsZXI6IFNjaGVkdWxlciA9IGFzeW5jKTogT2JzZXJ2YWJsZTxUaW1lSW50ZXJ2YWw8VD4+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgVGltZUludGVydmFsT3BlcmF0b3Ioc2NoZWR1bGVyKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZUludGVydmFsU2lnbmF0dXJlPFQ+IHtcbiAgKHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VGltZUludGVydmFsPFQ+Pjtcbn1cblxuZXhwb3J0IGNsYXNzIFRpbWVJbnRlcnZhbDxUPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogVCwgcHVibGljIGludGVydmFsOiBudW1iZXIpIHtcblxuICB9XG59O1xuXG5jbGFzcyBUaW1lSW50ZXJ2YWxPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFRpbWVJbnRlcnZhbDxUPj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyKSB7XG5cbiAgfVxuXG4gIGNhbGwob2JzZXJ2ZXI6IFN1YnNjcmliZXI8VGltZUludGVydmFsPFQ+Piwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgVGltZUludGVydmFsU3Vic2NyaWJlcihvYnNlcnZlciwgdGhpcy5zY2hlZHVsZXIpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgVGltZUludGVydmFsU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBwcml2YXRlIGxhc3RUaW1lOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFRpbWVJbnRlcnZhbDxUPj4sIHByaXZhdGUgc2NoZWR1bGVyOiBTY2hlZHVsZXIpIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gc2NoZWR1bGVyLm5vdygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKSB7XG4gICAgbGV0IG5vdyA9IHRoaXMuc2NoZWR1bGVyLm5vdygpO1xuICAgIGxldCBzcGFuID0gbm93IC0gdGhpcy5sYXN0VGltZTtcbiAgICB0aGlzLmxhc3RUaW1lID0gbm93O1xuXG4gICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KG5ldyBUaW1lSW50ZXJ2YWwodmFsdWUsIHNwYW4pKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
