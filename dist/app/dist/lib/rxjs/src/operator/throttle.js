System.register(['../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1, subscribeToResult_1;
    var ThrottleOperator, ThrottleSubscriber;
    /**
     * @param durationSelector
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method throttle
     * @owner Observable
     */
    function throttle(durationSelector) {
        return this.lift(new ThrottleOperator(durationSelector));
    }
    exports_1("throttle", throttle);
    return {
        setters:[
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            ThrottleOperator = (function () {
                function ThrottleOperator(durationSelector) {
                    this.durationSelector = durationSelector;
                }
                ThrottleOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new ThrottleSubscriber(subscriber, this.durationSelector));
                };
                return ThrottleOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ThrottleSubscriber = (function (_super) {
                __extends(ThrottleSubscriber, _super);
                function ThrottleSubscriber(destination, durationSelector) {
                    _super.call(this, destination);
                    this.destination = destination;
                    this.durationSelector = durationSelector;
                }
                ThrottleSubscriber.prototype._next = function (value) {
                    if (!this.throttled) {
                        this.tryDurationSelector(value);
                    }
                };
                ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
                    var duration = null;
                    try {
                        duration = this.durationSelector(value);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    this.emitAndThrottle(value, duration);
                };
                ThrottleSubscriber.prototype.emitAndThrottle = function (value, duration) {
                    this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
                    this.destination.next(value);
                };
                ThrottleSubscriber.prototype._unsubscribe = function () {
                    var throttled = this.throttled;
                    if (throttled) {
                        this.remove(throttled);
                        this.throttled = null;
                        throttled.unsubscribe();
                    }
                };
                ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this._unsubscribe();
                };
                ThrottleSubscriber.prototype.notifyComplete = function () {
                    this._unsubscribe();
                };
                return ThrottleSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3Rocm90dGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFTQTs7Ozs7T0FLRztJQUNILGtCQUE0QixnQkFBNkQ7UUFDdkYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUZELCtCQUVDLENBQUE7Ozs7Ozs7Ozs7WUFNRDtnQkFDRSwwQkFBb0IsZ0JBQTZEO29CQUE3RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTZDO2dCQUNqRixDQUFDO2dCQUVELCtCQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksa0JBQWtCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLENBQUM7Z0JBQ0gsdUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQUVEOzs7O2VBSUc7WUFDSDtnQkFBdUMsc0NBQXFCO2dCQUcxRCw0QkFBc0IsV0FBMEIsRUFDNUIsZ0JBQTZEO29CQUMvRSxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFGQyxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtvQkFDNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUE2QztnQkFFakYsQ0FBQztnQkFFUyxrQ0FBSyxHQUFmLFVBQWdCLEtBQVE7b0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbEMsQ0FBQztnQkFDSCxDQUFDO2dCQUVPLGdEQUFtQixHQUEzQixVQUE0QixLQUFRO29CQUNsQyxJQUFJLFFBQVEsR0FBa0MsSUFBSSxDQUFDO29CQUNuRCxJQUFJLENBQUM7d0JBQ0gsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUMsQ0FBRTtvQkFBQSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUM1QixNQUFNLENBQUM7b0JBQ1QsQ0FBQztvQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFFTyw0Q0FBZSxHQUF2QixVQUF3QixLQUFRLEVBQUUsUUFBdUM7b0JBQ3ZFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBRVMseUNBQVksR0FBdEI7b0JBQ0UsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDakMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzt3QkFDdEIsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUMxQixDQUFDO2dCQUNILENBQUM7Z0JBRUQsdUNBQVUsR0FBVixVQUFXLFVBQWEsRUFBRSxVQUFhLEVBQzVCLFVBQWtCLEVBQUUsVUFBa0IsRUFDdEMsUUFBK0I7b0JBQ3hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztnQkFFRCwyQ0FBYyxHQUFkO29CQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztnQkFDSCx5QkFBQztZQUFELENBaERBLEFBZ0RDLENBaERzQyxpQ0FBZSxHQWdEckQiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvdGhyb3R0bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmliYWJsZU9yUHJvbWlzZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5cbmltcG9ydCB7T3V0ZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHtJbm5lclN1YnNjcmliZXJ9IGZyb20gJy4uL0lubmVyU3Vic2NyaWJlcic7XG5pbXBvcnQge3N1YnNjcmliZVRvUmVzdWx0fSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcblxuLyoqXG4gKiBAcGFyYW0gZHVyYXRpb25TZWxlY3RvclxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxSPnxXZWJTb2NrZXRTdWJqZWN0PFQ+fE9ic2VydmFibGU8VD59XG4gKiBAbWV0aG9kIHRocm90dGxlXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGU8VD4oZHVyYXRpb25TZWxlY3RvcjogKHZhbHVlOiBUKSA9PiBTdWJzY3JpYmFibGVPclByb21pc2U8bnVtYmVyPik6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBUaHJvdHRsZU9wZXJhdG9yKGR1cmF0aW9uU2VsZWN0b3IpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaHJvdHRsZVNpZ25hdHVyZTxUPiB7XG4gIChkdXJhdGlvblNlbGVjdG9yOiAodmFsdWU6IFQpID0+IFN1YnNjcmliYWJsZU9yUHJvbWlzZTxudW1iZXI+KTogT2JzZXJ2YWJsZTxUPjtcbn1cblxuY2xhc3MgVGhyb3R0bGVPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkdXJhdGlvblNlbGVjdG9yOiAodmFsdWU6IFQpID0+IFN1YnNjcmliYWJsZU9yUHJvbWlzZTxudW1iZXI+KSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFRocm90dGxlU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmR1cmF0aW9uU2VsZWN0b3IpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgVGhyb3R0bGVTdWJzY3JpYmVyPFQsIFI+IGV4dGVuZHMgT3V0ZXJTdWJzY3JpYmVyPFQsIFI+IHtcbiAgcHJpdmF0ZSB0aHJvdHRsZWQ6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGVzdGluYXRpb246IFN1YnNjcmliZXI8VD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgZHVyYXRpb25TZWxlY3RvcjogKHZhbHVlOiBUKSA9PiBTdWJzY3JpYmFibGVPclByb21pc2U8bnVtYmVyPikge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50aHJvdHRsZWQpIHtcbiAgICAgIHRoaXMudHJ5RHVyYXRpb25TZWxlY3Rvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cnlEdXJhdGlvblNlbGVjdG9yKHZhbHVlOiBUKTogdm9pZCB7XG4gICAgbGV0IGR1cmF0aW9uOiBTdWJzY3JpYmFibGVPclByb21pc2U8bnVtYmVyPiA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGR1cmF0aW9uID0gdGhpcy5kdXJhdGlvblNlbGVjdG9yKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbWl0QW5kVGhyb3R0bGUodmFsdWUsIGR1cmF0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdEFuZFRocm90dGxlKHZhbHVlOiBULCBkdXJhdGlvbjogU3Vic2NyaWJhYmxlT3JQcm9taXNlPG51bWJlcj4pIHtcbiAgICB0aGlzLmFkZCh0aGlzLnRocm90dGxlZCA9IHN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIGR1cmF0aW9uKSk7XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfdW5zdWJzY3JpYmUoKSB7XG4gICAgY29uc3QgdGhyb3R0bGVkID0gdGhpcy50aHJvdHRsZWQ7XG4gICAgaWYgKHRocm90dGxlZCkge1xuICAgICAgdGhpcy5yZW1vdmUodGhyb3R0bGVkKTtcbiAgICAgIHRoaXMudGhyb3R0bGVkID0gbnVsbDtcbiAgICAgIHRocm90dGxlZC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5vdGlmeU5leHQob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogUixcbiAgICAgICAgICAgICBvdXRlckluZGV4OiBudW1iZXIsIGlubmVySW5kZXg6IG51bWJlcixcbiAgICAgICAgICAgICBpbm5lclN1YjogSW5uZXJTdWJzY3JpYmVyPFQsIFI+KTogdm9pZCB7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5vdGlmeUNvbXBsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
