System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var RetryOperator, RetrySubscriber;
    /**
     * Returns an Observable that mirrors the source Observable, resubscribing to it if it calls `error` and the
     * predicate returns true for that specific exception and retry count.
     * If the source Observable calls `error`, this method will resubscribe to the source Observable for a maximum of
     * count resubscriptions (given as a number parameter) rather than propagating the `error` call.
     *
     * <img src="./img/retry.png" width="100%">
     *
     * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
     * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
     * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
     * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
     * @param {number} number of retry attempts before failing.
     * @return {Observable} the source Observable modified with the retry logic.
     * @method retry
     * @owner Observable
     */
    function retry(count) {
        if (count === void 0) { count = -1; }
        return this.lift(new RetryOperator(count, this));
    }
    exports_1("retry", retry);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            RetryOperator = (function () {
                function RetryOperator(count, source) {
                    this.count = count;
                    this.source = source;
                }
                RetryOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new RetrySubscriber(subscriber, this.count, this.source));
                };
                return RetryOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            RetrySubscriber = (function (_super) {
                __extends(RetrySubscriber, _super);
                function RetrySubscriber(destination, count, source) {
                    _super.call(this, destination);
                    this.count = count;
                    this.source = source;
                }
                RetrySubscriber.prototype.error = function (err) {
                    if (!this.isStopped) {
                        var _a = this, source = _a.source, count = _a.count;
                        if (count === 0) {
                            return _super.prototype.error.call(this, err);
                        }
                        else if (count > -1) {
                            this.count = count - 1;
                        }
                        this.unsubscribe();
                        this.isStopped = false;
                        this.isUnsubscribed = false;
                        source.subscribe(this);
                    }
                };
                return RetrySubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3JldHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFJQTs7Ozs7Ozs7Ozs7Ozs7OztPQWdCRztJQUNILGVBQXlCLEtBQWtCO1FBQWxCLHFCQUFrQixHQUFsQixTQUFpQixDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFGRCx5QkFFQyxDQUFBOzs7Ozs7O1lBTUQ7Z0JBQ0UsdUJBQW9CLEtBQWEsRUFDYixNQUFxQjtvQkFEckIsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFDYixXQUFNLEdBQU4sTUFBTSxDQUFlO2dCQUN6QyxDQUFDO2dCQUVELDRCQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksZUFBZSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNyRixDQUFDO2dCQUNILG9CQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQWlDLG1DQUFhO2dCQUM1Qyx5QkFBWSxXQUE0QixFQUNwQixLQUFhLEVBQ2IsTUFBcUI7b0JBQ3ZDLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQUZELFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQ2IsV0FBTSxHQUFOLE1BQU0sQ0FBZTtnQkFFekMsQ0FBQztnQkFDRCwrQkFBSyxHQUFMLFVBQU0sR0FBUTtvQkFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixJQUFBLFNBQThCLEVBQXRCLGtCQUFNLEVBQUUsZ0JBQUssQ0FBVTt3QkFDL0IsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2hCLE1BQU0sQ0FBQyxnQkFBSyxDQUFDLEtBQUssWUFBQyxHQUFHLENBQUMsQ0FBQzt3QkFDMUIsQ0FBQzt3QkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dCQUN6QixDQUFDO3dCQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO3dCQUM1QixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QixDQUFDO2dCQUNILENBQUM7Z0JBQ0gsc0JBQUM7WUFBRCxDQXBCQSxBQW9CQyxDQXBCZ0MsdUJBQVUsR0FvQjFDIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3JldHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbWlycm9ycyB0aGUgc291cmNlIE9ic2VydmFibGUsIHJlc3Vic2NyaWJpbmcgdG8gaXQgaWYgaXQgY2FsbHMgYGVycm9yYCBhbmQgdGhlXG4gKiBwcmVkaWNhdGUgcmV0dXJucyB0cnVlIGZvciB0aGF0IHNwZWNpZmljIGV4Y2VwdGlvbiBhbmQgcmV0cnkgY291bnQuXG4gKiBJZiB0aGUgc291cmNlIE9ic2VydmFibGUgY2FsbHMgYGVycm9yYCwgdGhpcyBtZXRob2Qgd2lsbCByZXN1YnNjcmliZSB0byB0aGUgc291cmNlIE9ic2VydmFibGUgZm9yIGEgbWF4aW11bSBvZlxuICogY291bnQgcmVzdWJzY3JpcHRpb25zIChnaXZlbiBhcyBhIG51bWJlciBwYXJhbWV0ZXIpIHJhdGhlciB0aGFuIHByb3BhZ2F0aW5nIHRoZSBgZXJyb3JgIGNhbGwuXG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9yZXRyeS5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBBbnkgYW5kIGFsbCBpdGVtcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB3aWxsIGJlIGVtaXR0ZWQgYnkgdGhlIHJlc3VsdGluZyBPYnNlcnZhYmxlLCBldmVuIHRob3NlIGVtaXR0ZWRcbiAqIGR1cmluZyBmYWlsZWQgc3Vic2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIGlmIGFuIE9ic2VydmFibGUgZmFpbHMgYXQgZmlyc3QgYnV0IGVtaXRzIFsxLCAyXSB0aGVuIHN1Y2NlZWRzIHRoZSBzZWNvbmRcbiAqIHRpbWUgYW5kIGVtaXRzOiBbMSwgMiwgMywgNCwgNV0gdGhlbiB0aGUgY29tcGxldGUgc3RyZWFtIG9mIGVtaXNzaW9ucyBhbmQgbm90aWZpY2F0aW9uc1xuICogd291bGQgYmU6IFsxLCAyLCAxLCAyLCAzLCA0LCA1LCBgY29tcGxldGVgXS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgb2YgcmV0cnkgYXR0ZW1wdHMgYmVmb3JlIGZhaWxpbmcuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSB0aGUgc291cmNlIE9ic2VydmFibGUgbW9kaWZpZWQgd2l0aCB0aGUgcmV0cnkgbG9naWMuXG4gKiBAbWV0aG9kIHJldHJ5XG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmV0cnk8VD4oY291bnQ6IG51bWJlciA9IC0xKTogT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiB0aGlzLmxpZnQobmV3IFJldHJ5T3BlcmF0b3IoY291bnQsIHRoaXMpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXRyeVNpZ25hdHVyZTxUPiB7XG4gIChjb3VudD86IG51bWJlcik6IE9ic2VydmFibGU8VD47XG59XG5cbmNsYXNzIFJldHJ5T3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY291bnQ6IG51bWJlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzb3VyY2U6IE9ic2VydmFibGU8VD4pIHtcbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPiwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgUmV0cnlTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuY291bnQsIHRoaXMuc291cmNlKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIFJldHJ5U3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxhbnk+LFxuICAgICAgICAgICAgICBwcml2YXRlIGNvdW50OiBudW1iZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICB9XG4gIGVycm9yKGVycjogYW55KSB7XG4gICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgY29uc3QgeyBzb3VyY2UsIGNvdW50IH0gPSB0aGlzO1xuICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5lcnJvcihlcnIpO1xuICAgICAgfSBlbHNlIGlmIChjb3VudCA+IC0xKSB7XG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudCAtIDE7XG4gICAgICB9XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1Vuc3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgc291cmNlLnN1YnNjcmliZSh0aGlzKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
