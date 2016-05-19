System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var PairwiseOperator, PairwiseSubscriber;
    /**
     * Returns a new observable that triggers on the second and following inputs.
     * An input that triggers an event will return an pair of [(N - 1)th, Nth].
     * The (N-1)th is stored in the internal state until Nth input occurs.
     *
     * <img src="./img/pairwise.png" width="100%">
     *
     * @return {Observable<R>} an observable of pairs of values.
     * @method pairwise
     * @owner Observable
     */
    function pairwise() {
        return this.lift(new PairwiseOperator());
    }
    exports_1("pairwise", pairwise);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            PairwiseOperator = (function () {
                function PairwiseOperator() {
                }
                PairwiseOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new PairwiseSubscriber(subscriber));
                };
                return PairwiseOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            PairwiseSubscriber = (function (_super) {
                __extends(PairwiseSubscriber, _super);
                function PairwiseSubscriber(destination) {
                    _super.call(this, destination);
                    this.hasPrev = false;
                }
                PairwiseSubscriber.prototype._next = function (value) {
                    if (this.hasPrev) {
                        this.destination.next([this.prev, value]);
                    }
                    else {
                        this.hasPrev = true;
                    }
                    this.prev = value;
                };
                return PairwiseSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3BhaXJ3aXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFJQTs7Ozs7Ozs7OztPQVVHO0lBQ0g7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRkQsK0JBRUMsQ0FBQTs7Ozs7OztZQU1EO2dCQUFBO2dCQUlBLENBQUM7Z0JBSEMsK0JBQUksR0FBSixVQUFLLFVBQThCLEVBQUUsTUFBVztvQkFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDO2dCQUNILHVCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQW9DLHNDQUFhO2dCQUkvQyw0QkFBWSxXQUErQjtvQkFDekMsa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBSGIsWUFBTyxHQUFZLEtBQUssQ0FBQztnQkFJakMsQ0FBQztnQkFFRCxrQ0FBSyxHQUFMLFVBQU0sS0FBUTtvQkFDWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzVDLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3RCLENBQUM7b0JBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ0gseUJBQUM7WUFBRCxDQWpCQSxBQWlCQyxDQWpCbUMsdUJBQVUsR0FpQjdDIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3BhaXJ3aXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBvYnNlcnZhYmxlIHRoYXQgdHJpZ2dlcnMgb24gdGhlIHNlY29uZCBhbmQgZm9sbG93aW5nIGlucHV0cy5cbiAqIEFuIGlucHV0IHRoYXQgdHJpZ2dlcnMgYW4gZXZlbnQgd2lsbCByZXR1cm4gYW4gcGFpciBvZiBbKE4gLSAxKXRoLCBOdGhdLlxuICogVGhlIChOLTEpdGggaXMgc3RvcmVkIGluIHRoZSBpbnRlcm5hbCBzdGF0ZSB1bnRpbCBOdGggaW5wdXQgb2NjdXJzLlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvcGFpcndpc2UucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxSPn0gYW4gb2JzZXJ2YWJsZSBvZiBwYWlycyBvZiB2YWx1ZXMuXG4gKiBAbWV0aG9kIHBhaXJ3aXNlXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFpcndpc2U8VD4oKTogT2JzZXJ2YWJsZTxbVCwgVF0+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgUGFpcndpc2VPcGVyYXRvcigpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWlyd2lzZVNpZ25hdHVyZTxUPiB7XG4gICgpOiBPYnNlcnZhYmxlPFtULCBUXT47XG59XG5cbmNsYXNzIFBhaXJ3aXNlT3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBbVCwgVF0+IHtcbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFtULCBUXT4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFBhaXJ3aXNlU3Vic2NyaWJlcihzdWJzY3JpYmVyKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIFBhaXJ3aXNlU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBwcml2YXRlIHByZXY6IFQ7XG4gIHByaXZhdGUgaGFzUHJldjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFtULCBUXT4pIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gIH1cblxuICBfbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmhhc1ByZXYpIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChbdGhpcy5wcmV2LCB2YWx1ZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhc1ByZXYgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMucHJldiA9IHZhbHVlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
