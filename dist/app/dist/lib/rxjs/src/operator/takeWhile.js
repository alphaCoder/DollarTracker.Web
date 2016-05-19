System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var TakeWhileOperator, TakeWhileSubscriber;
    /**
     * @param predicate
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method takeWhile
     * @owner Observable
     */
    function takeWhile(predicate) {
        return this.lift(new TakeWhileOperator(predicate));
    }
    exports_1("takeWhile", takeWhile);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            TakeWhileOperator = (function () {
                function TakeWhileOperator(predicate) {
                    this.predicate = predicate;
                }
                TakeWhileOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
                };
                return TakeWhileOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            TakeWhileSubscriber = (function (_super) {
                __extends(TakeWhileSubscriber, _super);
                function TakeWhileSubscriber(destination, predicate) {
                    _super.call(this, destination);
                    this.predicate = predicate;
                    this.index = 0;
                }
                TakeWhileSubscriber.prototype._next = function (value) {
                    var destination = this.destination;
                    var result;
                    try {
                        result = this.predicate(value, this.index++);
                    }
                    catch (err) {
                        destination.error(err);
                        return;
                    }
                    this.nextOrComplete(value, result);
                };
                TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
                    var destination = this.destination;
                    if (Boolean(predicateResult)) {
                        destination.next(value);
                    }
                    else {
                        destination.complete();
                    }
                };
                return TakeWhileSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3Rha2VXaGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBSUE7Ozs7O09BS0c7SUFDSCxtQkFBNkIsU0FBK0M7UUFDMUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFGRCxpQ0FFQyxDQUFBOzs7Ozs7O1lBTUQ7Z0JBQ0UsMkJBQW9CLFNBQStDO29CQUEvQyxjQUFTLEdBQVQsU0FBUyxDQUFzQztnQkFDbkUsQ0FBQztnQkFFRCxnQ0FBSSxHQUFKLFVBQUssVUFBeUIsRUFBRSxNQUFXO29CQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDaEYsQ0FBQztnQkFDSCx3QkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFxQyx1Q0FBYTtnQkFHaEQsNkJBQVksV0FBMEIsRUFDbEIsU0FBK0M7b0JBQ2pFLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQURELGNBQVMsR0FBVCxTQUFTLENBQXNDO29CQUgzRCxVQUFLLEdBQVcsQ0FBQyxDQUFDO2dCQUsxQixDQUFDO2dCQUVTLG1DQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFDckMsSUFBSSxNQUFlLENBQUM7b0JBQ3BCLElBQUksQ0FBQzt3QkFDSCxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQy9DLENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDYixXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN2QixNQUFNLENBQUM7b0JBQ1QsQ0FBQztvQkFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFFTyw0Q0FBYyxHQUF0QixVQUF1QixLQUFRLEVBQUUsZUFBd0I7b0JBQ3ZELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN6QixDQUFDO2dCQUNILENBQUM7Z0JBQ0gsMEJBQUM7WUFBRCxDQTVCQSxBQTRCQyxDQTVCb0MsdUJBQVUsR0E0QjlDIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3Rha2VXaGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuXG4vKipcbiAqIEBwYXJhbSBwcmVkaWNhdGVcbiAqIEByZXR1cm4ge09ic2VydmFibGU8Uj58V2ViU29ja2V0U3ViamVjdDxUPnxPYnNlcnZhYmxlPFQ+fVxuICogQG1ldGhvZCB0YWtlV2hpbGVcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWtlV2hpbGU8VD4ocHJlZGljYXRlOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IGJvb2xlYW4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgVGFrZVdoaWxlT3BlcmF0b3IocHJlZGljYXRlKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFrZVdoaWxlU2lnbmF0dXJlPFQ+IHtcbiAgKHByZWRpY2F0ZTogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBib29sZWFuKTogT2JzZXJ2YWJsZTxUPjtcbn1cblxuY2xhc3MgVGFrZVdoaWxlT3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJlZGljYXRlOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IGJvb2xlYW4pIHtcbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPiwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgVGFrZVdoaWxlU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnByZWRpY2F0ZSkpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBUYWtlV2hpbGVTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIHByaXZhdGUgaW5kZXg6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8VD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgcHJlZGljYXRlOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IGJvb2xlYW4pIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgbGV0IHJlc3VsdDogYm9vbGVhbjtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5wcmVkaWNhdGUodmFsdWUsIHRoaXMuaW5kZXgrKyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5leHRPckNvbXBsZXRlKHZhbHVlLCByZXN1bHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBuZXh0T3JDb21wbGV0ZSh2YWx1ZTogVCwgcHJlZGljYXRlUmVzdWx0OiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgIGlmIChCb29sZWFuKHByZWRpY2F0ZVJlc3VsdCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
