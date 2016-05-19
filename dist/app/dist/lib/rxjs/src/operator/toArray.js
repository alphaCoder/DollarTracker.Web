System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var ToArrayOperator, ToArraySubscriber;
    /**
     * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
     * @method toArray
     * @owner Observable
     */
    function toArray() {
        return this.lift(new ToArrayOperator());
    }
    exports_1("toArray", toArray);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            ToArrayOperator = (function () {
                function ToArrayOperator() {
                }
                ToArrayOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new ToArraySubscriber(subscriber));
                };
                return ToArrayOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ToArraySubscriber = (function (_super) {
                __extends(ToArraySubscriber, _super);
                function ToArraySubscriber(destination) {
                    _super.call(this, destination);
                    this.array = [];
                }
                ToArraySubscriber.prototype._next = function (x) {
                    this.array.push(x);
                };
                ToArraySubscriber.prototype._complete = function () {
                    this.destination.next(this.array);
                    this.destination.complete();
                };
                return ToArraySubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3RvQXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUlBOzs7O09BSUc7SUFDSDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRkQsNkJBRUMsQ0FBQTs7Ozs7OztZQU1EO2dCQUFBO2dCQUlBLENBQUM7Z0JBSEMsOEJBQUksR0FBSixVQUFLLFVBQTJCLEVBQUUsTUFBVztvQkFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQUNILHNCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQW1DLHFDQUFhO2dCQUk5QywyQkFBWSxXQUE0QjtvQkFDdEMsa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBSGIsVUFBSyxHQUFRLEVBQUUsQ0FBQztnQkFJeEIsQ0FBQztnQkFFUyxpQ0FBSyxHQUFmLFVBQWdCLENBQUk7b0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixDQUFDO2dCQUVTLHFDQUFTLEdBQW5CO29CQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQztnQkFDSCx3QkFBQztZQUFELENBaEJBLEFBZ0JDLENBaEJrQyx1QkFBVSxHQWdCNUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvdG9BcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuXG4vKipcbiAqIEByZXR1cm4ge09ic2VydmFibGU8YW55W10+fFdlYlNvY2tldFN1YmplY3Q8VD58T2JzZXJ2YWJsZTxUPn1cbiAqIEBtZXRob2QgdG9BcnJheVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXk8VD4oKTogT2JzZXJ2YWJsZTxUW10+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgVG9BcnJheU9wZXJhdG9yKCkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvQXJyYXlTaWduYXR1cmU8VD4ge1xuICAoKTogT2JzZXJ2YWJsZTxUW10+O1xufVxuXG5jbGFzcyBUb0FycmF5T3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBUW10+IHtcbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFRbXT4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFRvQXJyYXlTdWJzY3JpYmVyKHN1YnNjcmliZXIpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgVG9BcnJheVN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcblxuICBwcml2YXRlIGFycmF5OiBUW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxUW10+KSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHg6IFQpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goeCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCkge1xuICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh0aGlzLmFycmF5KTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
