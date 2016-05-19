System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var SkipWhileOperator, SkipWhileSubscriber;
    /**
     * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
     * true, but emits all further source items as soon as the condition becomes false.
     *
     * <img src="./img/skipWhile.png" width="100%">
     *
     * @param {Function} predicate - a function to test each item emitted from the source Observable.
     * @return {Observable<T>} an Observable that begins emitting items emitted by the source Observable when the
     * specified predicate becomes false.
     * @method skipWhile
     * @owner Observable
     */
    function skipWhile(predicate) {
        return this.lift(new SkipWhileOperator(predicate));
    }
    exports_1("skipWhile", skipWhile);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            SkipWhileOperator = (function () {
                function SkipWhileOperator(predicate) {
                    this.predicate = predicate;
                }
                SkipWhileOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
                };
                return SkipWhileOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SkipWhileSubscriber = (function (_super) {
                __extends(SkipWhileSubscriber, _super);
                function SkipWhileSubscriber(destination, predicate) {
                    _super.call(this, destination);
                    this.predicate = predicate;
                    this.skipping = true;
                    this.index = 0;
                }
                SkipWhileSubscriber.prototype._next = function (value) {
                    var destination = this.destination;
                    if (this.skipping) {
                        this.tryCallPredicate(value);
                    }
                    if (!this.skipping) {
                        destination.next(value);
                    }
                };
                SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
                    try {
                        var result = this.predicate(value, this.index++);
                        this.skipping = Boolean(result);
                    }
                    catch (err) {
                        this.destination.error(err);
                    }
                };
                return SkipWhileSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3NraXBXaGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBSUE7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxtQkFBNkIsU0FBK0M7UUFDMUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFGRCxpQ0FFQyxDQUFBOzs7Ozs7O1lBTUQ7Z0JBQ0UsMkJBQW9CLFNBQStDO29CQUEvQyxjQUFTLEdBQVQsU0FBUyxDQUFzQztnQkFDbkUsQ0FBQztnQkFFRCxnQ0FBSSxHQUFKLFVBQUssVUFBeUIsRUFBRSxNQUFXO29CQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDaEYsQ0FBQztnQkFDSCx3QkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFxQyx1Q0FBYTtnQkFJaEQsNkJBQVksV0FBMEIsRUFDbEIsU0FBK0M7b0JBQ2pFLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQURELGNBQVMsR0FBVCxTQUFTLENBQXNDO29CQUozRCxhQUFRLEdBQVksSUFBSSxDQUFDO29CQUN6QixVQUFLLEdBQVcsQ0FBQyxDQUFDO2dCQUsxQixDQUFDO2dCQUVTLG1DQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDL0IsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMxQixDQUFDO2dCQUNILENBQUM7Z0JBRU8sOENBQWdCLEdBQXhCLFVBQXlCLEtBQVE7b0JBQy9CLElBQUksQ0FBQzt3QkFDSCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzt3QkFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2xDLENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDYixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztnQkFDSCxDQUFDO2dCQUNILDBCQUFDO1lBQUQsQ0E1QkEsQUE0QkMsQ0E1Qm9DLHVCQUFVLEdBNEI5QyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9za2lwV2hpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBza2lwcyBhbGwgaXRlbXMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUgYXMgbG9uZyBhcyBhIHNwZWNpZmllZCBjb25kaXRpb24gaG9sZHNcbiAqIHRydWUsIGJ1dCBlbWl0cyBhbGwgZnVydGhlciBzb3VyY2UgaXRlbXMgYXMgc29vbiBhcyB0aGUgY29uZGl0aW9uIGJlY29tZXMgZmFsc2UuXG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9za2lwV2hpbGUucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIC0gYSBmdW5jdGlvbiB0byB0ZXN0IGVhY2ggaXRlbSBlbWl0dGVkIGZyb20gdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxUPn0gYW4gT2JzZXJ2YWJsZSB0aGF0IGJlZ2lucyBlbWl0dGluZyBpdGVtcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB3aGVuIHRoZVxuICogc3BlY2lmaWVkIHByZWRpY2F0ZSBiZWNvbWVzIGZhbHNlLlxuICogQG1ldGhvZCBza2lwV2hpbGVcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBza2lwV2hpbGU8VD4ocHJlZGljYXRlOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IGJvb2xlYW4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgU2tpcFdoaWxlT3BlcmF0b3IocHJlZGljYXRlKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2tpcFdoaWxlU2lnbmF0dXJlPFQ+IHtcbiAgKHByZWRpY2F0ZTogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBib29sZWFuKTogT2JzZXJ2YWJsZTxUPjtcbn1cblxuY2xhc3MgU2tpcFdoaWxlT3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJlZGljYXRlOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IGJvb2xlYW4pIHtcbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPiwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgU2tpcFdoaWxlU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnByZWRpY2F0ZSkpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBTa2lwV2hpbGVTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIHByaXZhdGUgc2tpcHBpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIHByZWRpY2F0ZTogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBib29sZWFuKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgIGlmICh0aGlzLnNraXBwaW5nKSB7XG4gICAgICB0aGlzLnRyeUNhbGxQcmVkaWNhdGUodmFsdWUpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5za2lwcGluZykge1xuICAgICAgZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cnlDYWxsUHJlZGljYXRlKHZhbHVlOiBUKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucHJlZGljYXRlKHZhbHVlLCB0aGlzLmluZGV4KyspO1xuICAgICAgdGhpcy5za2lwcGluZyA9IEJvb2xlYW4ocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
