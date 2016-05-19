System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var SkipOperator, SkipSubscriber;
    /**
     * Returns an Observable that skips `n` items emitted by an Observable.
     *
     * <img src="./img/skip.png" width="100%">
     *
     * @param {Number} the `n` of times, items emitted by source Observable should be skipped.
     * @return {Observable} an Observable that skips values emitted by the source Observable.
     *
     * @method skip
     * @owner Observable
     */
    function skip(total) {
        return this.lift(new SkipOperator(total));
    }
    exports_1("skip", skip);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            SkipOperator = (function () {
                function SkipOperator(total) {
                    this.total = total;
                }
                SkipOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new SkipSubscriber(subscriber, this.total));
                };
                return SkipOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SkipSubscriber = (function (_super) {
                __extends(SkipSubscriber, _super);
                function SkipSubscriber(destination, total) {
                    _super.call(this, destination);
                    this.total = total;
                    this.count = 0;
                }
                SkipSubscriber.prototype._next = function (x) {
                    if (++this.count > this.total) {
                        this.destination.next(x);
                    }
                };
                return SkipSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3NraXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUlBOzs7Ozs7Ozs7O09BVUc7SUFDSCxjQUF3QixLQUFhO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUZELHVCQUVDLENBQUE7Ozs7Ozs7WUFNRDtnQkFDRSxzQkFBb0IsS0FBYTtvQkFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO2dCQUNqQyxDQUFDO2dCQUVELDJCQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksY0FBYyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDdkUsQ0FBQztnQkFDSCxtQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFnQyxrQ0FBYTtnQkFHM0Msd0JBQVksV0FBMEIsRUFBVSxLQUFhO29CQUMzRCxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFEMkIsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFGN0QsVUFBSyxHQUFXLENBQUMsQ0FBQztnQkFJbEIsQ0FBQztnQkFFUyw4QkFBSyxHQUFmLFVBQWdCLENBQUk7b0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCxxQkFBQztZQUFELENBWkEsQUFZQyxDQVorQix1QkFBVSxHQVl6QyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9za2lwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgc2tpcHMgYG5gIGl0ZW1zIGVtaXR0ZWQgYnkgYW4gT2JzZXJ2YWJsZS5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3NraXAucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHRoZSBgbmAgb2YgdGltZXMsIGl0ZW1zIGVtaXR0ZWQgYnkgc291cmNlIE9ic2VydmFibGUgc2hvdWxkIGJlIHNraXBwZWQuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhbiBPYnNlcnZhYmxlIHRoYXQgc2tpcHMgdmFsdWVzIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICpcbiAqIEBtZXRob2Qgc2tpcFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNraXA8VD4odG90YWw6IG51bWJlcik6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBTa2lwT3BlcmF0b3IodG90YWwpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTa2lwU2lnbmF0dXJlPFQ+IHtcbiAgKHRvdGFsOiBudW1iZXIpOiBPYnNlcnZhYmxlPFQ+O1xufVxuXG5jbGFzcyBTa2lwT3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG90YWw6IG51bWJlcikge1xuICB9XG5cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBTa2lwU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnRvdGFsKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIFNraXBTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIGNvdW50OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFQ+LCBwcml2YXRlIHRvdGFsOiBudW1iZXIpIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQoeDogVCkge1xuICAgIGlmICgrK3RoaXMuY291bnQgPiB0aGlzLnRvdGFsKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoeCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
