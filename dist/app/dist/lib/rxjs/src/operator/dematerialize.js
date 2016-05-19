System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var DeMaterializeOperator, DeMaterializeSubscriber;
    /**
     * Returns an Observable that transforms Notification objects into the items or notifications they represent.
     *
     * @see {@link Notification}
     *
     * @return {Observable} an Observable that emits items and notifications embedded in Notification objects emitted by the source Observable.
     * @method dematerialize
     * @owner Observable
     */
    function dematerialize() {
        return this.lift(new DeMaterializeOperator());
    }
    exports_1("dematerialize", dematerialize);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            DeMaterializeOperator = (function () {
                function DeMaterializeOperator() {
                }
                DeMaterializeOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new DeMaterializeSubscriber(subscriber));
                };
                return DeMaterializeOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            DeMaterializeSubscriber = (function (_super) {
                __extends(DeMaterializeSubscriber, _super);
                function DeMaterializeSubscriber(destination) {
                    _super.call(this, destination);
                }
                DeMaterializeSubscriber.prototype._next = function (value) {
                    value.observe(this.destination);
                };
                return DeMaterializeSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2RlbWF0ZXJpYWxpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUtBOzs7Ozs7OztPQVFHO0lBQ0g7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFxQixFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRkQseUNBRUMsQ0FBQTs7Ozs7OztZQU1EO2dCQUFBO2dCQUlBLENBQUM7Z0JBSEMsb0NBQUksR0FBSixVQUFLLFVBQTJCLEVBQUUsTUFBVztvQkFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNwRSxDQUFDO2dCQUNILDRCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQW1FLDJDQUFhO2dCQUM5RSxpQ0FBWSxXQUE0QjtvQkFDdEMsa0JBQU0sV0FBVyxDQUFDLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRVMsdUNBQUssR0FBZixVQUFnQixLQUFRO29CQUN0QixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDSCw4QkFBQztZQUFELENBUkEsQUFRQyxDQVJrRSx1QkFBVSxHQVE1RSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9kZW1hdGVyaWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge05vdGlmaWNhdGlvbn0gZnJvbSAnLi4vTm90aWZpY2F0aW9uJztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCB0cmFuc2Zvcm1zIE5vdGlmaWNhdGlvbiBvYmplY3RzIGludG8gdGhlIGl0ZW1zIG9yIG5vdGlmaWNhdGlvbnMgdGhleSByZXByZXNlbnQuXG4gKlxuICogQHNlZSB7QGxpbmsgTm90aWZpY2F0aW9ufVxuICpcbiAqIEByZXR1cm4ge09ic2VydmFibGV9IGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBpdGVtcyBhbmQgbm90aWZpY2F0aW9ucyBlbWJlZGRlZCBpbiBOb3RpZmljYXRpb24gb2JqZWN0cyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqIEBtZXRob2QgZGVtYXRlcmlhbGl6ZVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbWF0ZXJpYWxpemU8VD4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgRGVNYXRlcmlhbGl6ZU9wZXJhdG9yKCkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlbWF0ZXJpYWxpemVTaWduYXR1cmU8VD4ge1xuICA8Uj4oKTogT2JzZXJ2YWJsZTxSPjtcbn1cblxuY2xhc3MgRGVNYXRlcmlhbGl6ZU9wZXJhdG9yPFQgZXh0ZW5kcyBOb3RpZmljYXRpb248YW55PiwgUj4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBSPiB7XG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBEZU1hdGVyaWFsaXplU3Vic2NyaWJlcihzdWJzY3JpYmVyKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIERlTWF0ZXJpYWxpemVTdWJzY3JpYmVyPFQgZXh0ZW5kcyBOb3RpZmljYXRpb248YW55Pj4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8YW55Pikge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCkge1xuICAgIHZhbHVlLm9ic2VydmUodGhpcy5kZXN0aW5hdGlvbik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
