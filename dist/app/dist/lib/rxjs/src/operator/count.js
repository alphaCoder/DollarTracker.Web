System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var CountOperator, CountSubscriber;
    /**
     * Counts the number of emissions on the source and emits that number when the
     * source completes.
     *
     * <span class="informal">Tells how many values were emitted, when the source
     * completes.</span>
     *
     * <img src="./img/count.png" width="100%">
     *
     * `count` transforms an Observable that emits values into an Observable that
     * emits a single value that represents the number of values emitted by the
     * source Observable. If the source Observable terminates with an error, `count`
     * will pass this error notification along without emitting an value first. If
     * the source Observable does not terminate at all, `count` will neither emit
     * a value nor terminate. This operator takes an optional `predicate` function
     * as argument, in which case the output emission will represent the number of
     * source values that matched `true` with the `predicate`.
     *
     * @example <caption>Counts how many seconds have passed before the first click happened</caption>
     * var seconds = Rx.Observable.interval(1000);
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var secondsBeforeClick = seconds.takeUntil(clicks);
     * var result = secondsBeforeClick.count();
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
     * var numbers = Rx.Observable.range(1, 7);
     * var result = numbers.count(i => i % 2 === 1);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link max}
     * @see {@link min}
     * @see {@link reduce}
     *
     * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
     * boolean function to select what values are to be counted. It is provided with
     * arguments of:
     * - `value`: the value from the source Observable.
     * - `index`: the (zero-based) "index" of the value from the source Observable.
     * - `source`: the source Observable instance itself.
     * @return {Observable} An Observable of one number that represents the count as
     * described above.
     * @method count
     * @owner Observable
     */
    function count(predicate) {
        return this.lift(new CountOperator(predicate, this));
    }
    exports_1("count", count);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            CountOperator = (function () {
                function CountOperator(predicate, source) {
                    this.predicate = predicate;
                    this.source = source;
                }
                CountOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
                };
                return CountOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            CountSubscriber = (function (_super) {
                __extends(CountSubscriber, _super);
                function CountSubscriber(destination, predicate, source) {
                    _super.call(this, destination);
                    this.predicate = predicate;
                    this.source = source;
                    this.count = 0;
                    this.index = 0;
                }
                CountSubscriber.prototype._next = function (value) {
                    if (this.predicate) {
                        this._tryPredicate(value);
                    }
                    else {
                        this.count++;
                    }
                };
                CountSubscriber.prototype._tryPredicate = function (value) {
                    var result;
                    try {
                        result = this.predicate(value, this.index++, this.source);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    if (result) {
                        this.count++;
                    }
                };
                CountSubscriber.prototype._complete = function () {
                    this.destination.next(this.count);
                    this.destination.complete();
                };
                return CountSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E0Q0c7SUFDSCxlQUF5QixTQUF1RTtRQUM5RixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRkQseUJBRUMsQ0FBQTs7Ozs7OztZQU1EO2dCQUNFLHVCQUFvQixTQUF1RSxFQUN2RSxNQUFzQjtvQkFEdEIsY0FBUyxHQUFULFNBQVMsQ0FBOEQ7b0JBQ3ZFLFdBQU0sR0FBTixNQUFNLENBQWdCO2dCQUMxQyxDQUFDO2dCQUVELDRCQUFJLEdBQUosVUFBSyxVQUE4QixFQUFFLE1BQVc7b0JBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksZUFBZSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6RixDQUFDO2dCQUNILG9CQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQWlDLG1DQUFhO2dCQUk1Qyx5QkFBWSxXQUE2QixFQUNyQixTQUF1RSxFQUN2RSxNQUFzQjtvQkFDeEMsa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBRkQsY0FBUyxHQUFULFNBQVMsQ0FBOEQ7b0JBQ3ZFLFdBQU0sR0FBTixNQUFNLENBQWdCO29CQUxsQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO29CQUNsQixVQUFLLEdBQVcsQ0FBQyxDQUFDO2dCQU0xQixDQUFDO2dCQUVTLCtCQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNmLENBQUM7Z0JBQ0gsQ0FBQztnQkFFTyx1Q0FBYSxHQUFyQixVQUFzQixLQUFRO29CQUM1QixJQUFJLE1BQVcsQ0FBQztvQkFFaEIsSUFBSSxDQUFDO3dCQUNILE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM1RCxDQUFFO29CQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzVCLE1BQU0sQ0FBQztvQkFDVCxDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ1gsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNmLENBQUM7Z0JBQ0gsQ0FBQztnQkFFUyxtQ0FBUyxHQUFuQjtvQkFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzlCLENBQUM7Z0JBQ0gsc0JBQUM7WUFBRCxDQXJDQSxBQXFDQyxDQXJDZ0MsdUJBQVUsR0FxQzFDIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gJy4uL09ic2VydmVyJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5cbi8qKlxuICogQ291bnRzIHRoZSBudW1iZXIgb2YgZW1pc3Npb25zIG9uIHRoZSBzb3VyY2UgYW5kIGVtaXRzIHRoYXQgbnVtYmVyIHdoZW4gdGhlXG4gKiBzb3VyY2UgY29tcGxldGVzLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5UZWxscyBob3cgbWFueSB2YWx1ZXMgd2VyZSBlbWl0dGVkLCB3aGVuIHRoZSBzb3VyY2VcbiAqIGNvbXBsZXRlcy48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9jb3VudC5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBgY291bnRgIHRyYW5zZm9ybXMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHZhbHVlcyBpbnRvIGFuIE9ic2VydmFibGUgdGhhdFxuICogZW1pdHMgYSBzaW5nbGUgdmFsdWUgdGhhdCByZXByZXNlbnRzIHRoZSBudW1iZXIgb2YgdmFsdWVzIGVtaXR0ZWQgYnkgdGhlXG4gKiBzb3VyY2UgT2JzZXJ2YWJsZS4gSWYgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHRlcm1pbmF0ZXMgd2l0aCBhbiBlcnJvciwgYGNvdW50YFxuICogd2lsbCBwYXNzIHRoaXMgZXJyb3Igbm90aWZpY2F0aW9uIGFsb25nIHdpdGhvdXQgZW1pdHRpbmcgYW4gdmFsdWUgZmlyc3QuIElmXG4gKiB0aGUgc291cmNlIE9ic2VydmFibGUgZG9lcyBub3QgdGVybWluYXRlIGF0IGFsbCwgYGNvdW50YCB3aWxsIG5laXRoZXIgZW1pdFxuICogYSB2YWx1ZSBub3IgdGVybWluYXRlLiBUaGlzIG9wZXJhdG9yIHRha2VzIGFuIG9wdGlvbmFsIGBwcmVkaWNhdGVgIGZ1bmN0aW9uXG4gKiBhcyBhcmd1bWVudCwgaW4gd2hpY2ggY2FzZSB0aGUgb3V0cHV0IGVtaXNzaW9uIHdpbGwgcmVwcmVzZW50IHRoZSBudW1iZXIgb2ZcbiAqIHNvdXJjZSB2YWx1ZXMgdGhhdCBtYXRjaGVkIGB0cnVlYCB3aXRoIHRoZSBgcHJlZGljYXRlYC5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Db3VudHMgaG93IG1hbnkgc2Vjb25kcyBoYXZlIHBhc3NlZCBiZWZvcmUgdGhlIGZpcnN0IGNsaWNrIGhhcHBlbmVkPC9jYXB0aW9uPlxuICogdmFyIHNlY29uZHMgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApO1xuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciBzZWNvbmRzQmVmb3JlQ2xpY2sgPSBzZWNvbmRzLnRha2VVbnRpbChjbGlja3MpO1xuICogdmFyIHJlc3VsdCA9IHNlY29uZHNCZWZvcmVDbGljay5jb3VudCgpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Db3VudHMgaG93IG1hbnkgb2RkIG51bWJlcnMgYXJlIHRoZXJlIGJldHdlZW4gMSBhbmQgNzwvY2FwdGlvbj5cbiAqIHZhciBudW1iZXJzID0gUnguT2JzZXJ2YWJsZS5yYW5nZSgxLCA3KTtcbiAqIHZhciByZXN1bHQgPSBudW1iZXJzLmNvdW50KGkgPT4gaSAlIDIgPT09IDEpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBtYXh9XG4gKiBAc2VlIHtAbGluayBtaW59XG4gKiBAc2VlIHtAbGluayByZWR1Y2V9XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbih2YWx1ZTogVCwgaTogbnVtYmVyLCBzb3VyY2U6IE9ic2VydmFibGU8VD4pOiBib29sZWFufSBbcHJlZGljYXRlXSBBXG4gKiBib29sZWFuIGZ1bmN0aW9uIHRvIHNlbGVjdCB3aGF0IHZhbHVlcyBhcmUgdG8gYmUgY291bnRlZC4gSXQgaXMgcHJvdmlkZWQgd2l0aFxuICogYXJndW1lbnRzIG9mOlxuICogLSBgdmFsdWVgOiB0aGUgdmFsdWUgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUuXG4gKiAtIGBpbmRleGA6IHRoZSAoemVyby1iYXNlZCkgXCJpbmRleFwiIG9mIHRoZSB2YWx1ZSBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqIC0gYHNvdXJjZWA6IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBpbnN0YW5jZSBpdHNlbGYuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIG9mIG9uZSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBjb3VudCBhc1xuICogZGVzY3JpYmVkIGFib3ZlLlxuICogQG1ldGhvZCBjb3VudFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvdW50PFQ+KHByZWRpY2F0ZT86ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiBib29sZWFuKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgQ291bnRPcGVyYXRvcihwcmVkaWNhdGUsIHRoaXMpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb3VudFNpZ25hdHVyZTxUPiB7XG4gIChwcmVkaWNhdGU/OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4gYm9vbGVhbik6IE9ic2VydmFibGU8bnVtYmVyPjtcbn1cblxuY2xhc3MgQ291bnRPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIG51bWJlcj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByZWRpY2F0ZT86ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiBib29sZWFuLFxuICAgICAgICAgICAgICBwcml2YXRlIHNvdXJjZT86IE9ic2VydmFibGU8VD4pIHtcbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxudW1iZXI+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBDb3VudFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcmVkaWNhdGUsIHRoaXMuc291cmNlKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIENvdW50U3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBwcml2YXRlIGNvdW50OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBPYnNlcnZlcjxudW1iZXI+LFxuICAgICAgICAgICAgICBwcml2YXRlIHByZWRpY2F0ZT86ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiBib29sZWFuLFxuICAgICAgICAgICAgICBwcml2YXRlIHNvdXJjZT86IE9ic2VydmFibGU8VD4pIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmVkaWNhdGUpIHtcbiAgICAgIHRoaXMuX3RyeVByZWRpY2F0ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY291bnQrKztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90cnlQcmVkaWNhdGUodmFsdWU6IFQpIHtcbiAgICBsZXQgcmVzdWx0OiBhbnk7XG5cbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5wcmVkaWNhdGUodmFsdWUsIHRoaXMuaW5kZXgrKywgdGhpcy5zb3VyY2UpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHRoaXMuY291bnQrKztcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh0aGlzLmNvdW50KTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
