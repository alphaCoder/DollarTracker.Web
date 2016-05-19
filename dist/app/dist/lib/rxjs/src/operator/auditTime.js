System.register(['../scheduler/async', '../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var async_1, Subscriber_1;
    var AuditTimeOperator, AuditTimeSubscriber;
    /**
     * @param delay
     * @param scheduler
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method auditTime
     * @owner Observable
     */
    function auditTime(delay, scheduler) {
        if (scheduler === void 0) { scheduler = async_1.async; }
        return this.lift(new AuditTimeOperator(delay, scheduler));
    }
    exports_1("auditTime", auditTime);
    function dispatchNext(subscriber) {
        subscriber.clearThrottle();
    }
    return {
        setters:[
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            AuditTimeOperator = (function () {
                function AuditTimeOperator(delay, scheduler) {
                    this.delay = delay;
                    this.scheduler = scheduler;
                }
                AuditTimeOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new AuditTimeSubscriber(subscriber, this.delay, this.scheduler));
                };
                return AuditTimeOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            AuditTimeSubscriber = (function (_super) {
                __extends(AuditTimeSubscriber, _super);
                function AuditTimeSubscriber(destination, delay, scheduler) {
                    _super.call(this, destination);
                    this.delay = delay;
                    this.scheduler = scheduler;
                    this.hasValue = false;
                }
                AuditTimeSubscriber.prototype._next = function (value) {
                    this.value = value;
                    this.hasValue = true;
                    if (!this.throttled) {
                        this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, this));
                    }
                };
                AuditTimeSubscriber.prototype.clearThrottle = function () {
                    var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
                    if (throttled) {
                        this.remove(throttled);
                        this.throttled = null;
                        throttled.unsubscribe();
                    }
                    if (hasValue) {
                        this.value = null;
                        this.hasValue = false;
                        this.destination.next(value);
                    }
                };
                return AuditTimeSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2F1ZGl0VGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBT0E7Ozs7OztPQU1HO0lBQ0gsbUJBQTZCLEtBQWEsRUFBRSxTQUE0QjtRQUE1Qix5QkFBNEIsR0FBNUIseUJBQTRCO1FBQ3RFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUZELGlDQUVDLENBQUE7SUF1REQsc0JBQXlCLFVBQWtDO1FBQ3pELFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7Ozs7Ozs7O1lBbkREO2dCQUNFLDJCQUFvQixLQUFhLEVBQVUsU0FBb0I7b0JBQTNDLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztnQkFDL0QsQ0FBQztnQkFFRCxnQ0FBSSxHQUFKLFVBQUssVUFBeUIsRUFBRSxNQUFXO29CQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM1RixDQUFDO2dCQUNILHdCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQXFDLHVDQUFhO2dCQU1oRCw2QkFBWSxXQUEwQixFQUNsQixLQUFhLEVBQ2IsU0FBb0I7b0JBQ3RDLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQUZELFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQ2IsY0FBUyxHQUFULFNBQVMsQ0FBVztvQkFMaEMsYUFBUSxHQUFZLEtBQUssQ0FBQztnQkFPbEMsQ0FBQztnQkFFUyxtQ0FBSyxHQUFmLFVBQWdCLEtBQVE7b0JBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDckIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3JGLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCwyQ0FBYSxHQUFiO29CQUNFLElBQUEsU0FBMkMsRUFBbkMsZ0JBQUssRUFBRSxzQkFBUSxFQUFFLHdCQUFTLENBQVU7b0JBQzVDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7d0JBQ3RCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDMUIsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQy9CLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCwwQkFBQztZQUFELENBakNBLEFBaUNDLENBakNvQyx1QkFBVSxHQWlDOUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvYXVkaXRUaW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3luY30gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcbmltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7U2NoZWR1bGVyfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcblxuLyoqXG4gKiBAcGFyYW0gZGVsYXlcbiAqIEBwYXJhbSBzY2hlZHVsZXJcbiAqIEByZXR1cm4ge09ic2VydmFibGU8Uj58V2ViU29ja2V0U3ViamVjdDxUPnxPYnNlcnZhYmxlPFQ+fVxuICogQG1ldGhvZCBhdWRpdFRpbWVcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdWRpdFRpbWU8VD4oZGVsYXk6IG51bWJlciwgc2NoZWR1bGVyOiBTY2hlZHVsZXIgPSBhc3luYyk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBBdWRpdFRpbWVPcGVyYXRvcihkZWxheSwgc2NoZWR1bGVyKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVkaXRUaW1lU2lnbmF0dXJlPFQ+IHtcbiAgKGRlbGF5OiBudW1iZXIsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VD47XG59XG5cbmNsYXNzIEF1ZGl0VGltZU9wZXJhdG9yPFQ+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgVD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlbGF5OiBudW1iZXIsIHByaXZhdGUgc2NoZWR1bGVyOiBTY2hlZHVsZXIpIHtcbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPiwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgQXVkaXRUaW1lU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmRlbGF5LCB0aGlzLnNjaGVkdWxlcikpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBBdWRpdFRpbWVTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG5cbiAgcHJpdmF0ZSB2YWx1ZTogVDtcbiAgcHJpdmF0ZSBoYXNWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHRocm90dGxlZDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIGRlbGF5OiBudW1iZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2NoZWR1bGVyOiBTY2hlZHVsZXIpIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5oYXNWYWx1ZSA9IHRydWU7XG4gICAgaWYgKCF0aGlzLnRocm90dGxlZCkge1xuICAgICAgdGhpcy5hZGQodGhpcy50aHJvdHRsZWQgPSB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaE5leHQsIHRoaXMuZGVsYXksIHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclRocm90dGxlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdmFsdWUsIGhhc1ZhbHVlLCB0aHJvdHRsZWQgfSA9IHRoaXM7XG4gICAgaWYgKHRocm90dGxlZCkge1xuICAgICAgdGhpcy5yZW1vdmUodGhyb3R0bGVkKTtcbiAgICAgIHRoaXMudGhyb3R0bGVkID0gbnVsbDtcbiAgICAgIHRocm90dGxlZC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAoaGFzVmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5oYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hOZXh0PFQ+KHN1YnNjcmliZXI6IEF1ZGl0VGltZVN1YnNjcmliZXI8VD4pOiB2b2lkIHtcbiAgc3Vic2NyaWJlci5jbGVhclRocm90dGxlKCk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
