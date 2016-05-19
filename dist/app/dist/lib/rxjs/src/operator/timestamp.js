System.register(['../Subscriber', '../scheduler/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, async_1;
    var Timestamp, TimestampOperator, TimestampSubscriber;
    /**
     * @param scheduler
     * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
     * @method timestamp
     * @owner Observable
     */
    function timestamp(scheduler) {
        if (scheduler === void 0) { scheduler = async_1.async; }
        return this.lift(new TimestampOperator(scheduler));
    }
    exports_1("timestamp", timestamp);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            Timestamp = (function () {
                function Timestamp(value, timestamp) {
                    this.value = value;
                    this.timestamp = timestamp;
                }
                return Timestamp;
            }());
            exports_1("Timestamp", Timestamp);
            ;
            TimestampOperator = (function () {
                function TimestampOperator(scheduler) {
                    this.scheduler = scheduler;
                }
                TimestampOperator.prototype.call = function (observer, source) {
                    return source._subscribe(new TimestampSubscriber(observer, this.scheduler));
                };
                return TimestampOperator;
            }());
            TimestampSubscriber = (function (_super) {
                __extends(TimestampSubscriber, _super);
                function TimestampSubscriber(destination, scheduler) {
                    _super.call(this, destination);
                    this.scheduler = scheduler;
                }
                TimestampSubscriber.prototype._next = function (value) {
                    var now = this.scheduler.now();
                    this.destination.next(new Timestamp(value, now));
                };
                return TimestampSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3RpbWVzdGFtcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBTUE7Ozs7O09BS0c7SUFDSCxtQkFBNkIsU0FBNEI7UUFBNUIseUJBQTRCLEdBQTVCLHlCQUE0QjtRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUZELGlDQUVDLENBQUE7Ozs7Ozs7Ozs7WUFNRDtnQkFDRSxtQkFBbUIsS0FBUSxFQUFTLFNBQWlCO29CQUFsQyxVQUFLLEdBQUwsS0FBSyxDQUFHO29CQUFTLGNBQVMsR0FBVCxTQUFTLENBQVE7Z0JBQ3JELENBQUM7Z0JBQ0gsZ0JBQUM7WUFBRCxDQUhBLEFBR0MsSUFBQTtZQUhELGlDQUdDLENBQUE7WUFBQSxDQUFDO1lBRUY7Z0JBQ0UsMkJBQW9CLFNBQW9CO29CQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO2dCQUN4QyxDQUFDO2dCQUVELGdDQUFJLEdBQUosVUFBSyxRQUFrQyxFQUFFLE1BQVc7b0JBQ2xELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM5RSxDQUFDO2dCQUNILHdCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFFRDtnQkFBcUMsdUNBQWE7Z0JBQ2hELDZCQUFZLFdBQXFDLEVBQVUsU0FBb0I7b0JBQzdFLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQURzQyxjQUFTLEdBQVQsU0FBUyxDQUFXO2dCQUUvRSxDQUFDO2dCQUVTLG1DQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFFakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELENBQUM7Z0JBQ0gsMEJBQUM7WUFBRCxDQVZBLEFBVUMsQ0FWb0MsdUJBQVUsR0FVOUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvdGltZXN0YW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xyXG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xyXG5pbXBvcnQge1NjaGVkdWxlcn0gZnJvbSAnLi4vU2NoZWR1bGVyJztcclxuaW1wb3J0IHthc3luY30gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gc2NoZWR1bGVyXHJcbiAqIEByZXR1cm4ge09ic2VydmFibGU8VGltZXN0YW1wPGFueT4+fFdlYlNvY2tldFN1YmplY3Q8VD58T2JzZXJ2YWJsZTxUPn1cclxuICogQG1ldGhvZCB0aW1lc3RhbXBcclxuICogQG93bmVyIE9ic2VydmFibGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0aW1lc3RhbXA8VD4oc2NoZWR1bGVyOiBTY2hlZHVsZXIgPSBhc3luYyk6IE9ic2VydmFibGU8VGltZXN0YW1wPFQ+PiB7XHJcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgVGltZXN0YW1wT3BlcmF0b3Ioc2NoZWR1bGVyKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZXN0YW1wU2lnbmF0dXJlPFQ+IHtcclxuICAoc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUaW1lc3RhbXA8VD4+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZXN0YW1wPFQ+IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IFQsIHB1YmxpYyB0aW1lc3RhbXA6IG51bWJlcikge1xyXG4gIH1cclxufTtcclxuXHJcbmNsYXNzIFRpbWVzdGFtcE9wZXJhdG9yPFQ+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgVGltZXN0YW1wPFQ+PiB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzY2hlZHVsZXI6IFNjaGVkdWxlcikge1xyXG4gIH1cclxuXHJcbiAgY2FsbChvYnNlcnZlcjogU3Vic2NyaWJlcjxUaW1lc3RhbXA8VD4+LCBzb3VyY2U6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFRpbWVzdGFtcFN1YnNjcmliZXIob2JzZXJ2ZXIsIHRoaXMuc2NoZWR1bGVyKSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBUaW1lc3RhbXBTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XHJcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8VGltZXN0YW1wPFQ+PiwgcHJpdmF0ZSBzY2hlZHVsZXI6IFNjaGVkdWxlcikge1xyXG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICBjb25zdCBub3cgPSB0aGlzLnNjaGVkdWxlci5ub3coKTtcclxuXHJcbiAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQobmV3IFRpbWVzdGFtcCh2YWx1ZSwgbm93KSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
