System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var IsEmptyOperator, IsEmptySubscriber;
    /**
     * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
     *
     * <img src="./img/isEmpty.png" width="100%">
     *
     * @return {Observable} an Observable that emits a Boolean.
     * @method isEmpty
     * @owner Observable
     */
    function isEmpty() {
        return this.lift(new IsEmptyOperator());
    }
    exports_1("isEmpty", isEmpty);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            IsEmptyOperator = (function () {
                function IsEmptyOperator() {
                }
                IsEmptyOperator.prototype.call = function (observer, source) {
                    return source._subscribe(new IsEmptySubscriber(observer));
                };
                return IsEmptyOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            IsEmptySubscriber = (function (_super) {
                __extends(IsEmptySubscriber, _super);
                function IsEmptySubscriber(destination) {
                    _super.call(this, destination);
                }
                IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
                    var destination = this.destination;
                    destination.next(isEmpty);
                    destination.complete();
                };
                IsEmptySubscriber.prototype._next = function (value) {
                    this.notifyComplete(false);
                };
                IsEmptySubscriber.prototype._complete = function () {
                    this.notifyComplete(true);
                };
                return IsEmptySubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2lzRW1wdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUlBOzs7Ozs7OztPQVFHO0lBQ0g7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUZELDZCQUVDLENBQUE7Ozs7Ozs7WUFNRDtnQkFBQTtnQkFJQSxDQUFDO2dCQUhDLDhCQUFJLEdBQUosVUFBTSxRQUE2QixFQUFFLE1BQVc7b0JBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFDSCxzQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFnQyxxQ0FBZTtnQkFDN0MsMkJBQVksV0FBZ0M7b0JBQzFDLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO2dCQUNyQixDQUFDO2dCQUVPLDBDQUFjLEdBQXRCLFVBQXVCLE9BQWdCO29CQUNyQyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUVyQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMxQixXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRVMsaUNBQUssR0FBZixVQUFnQixLQUFjO29CQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQUVTLHFDQUFTLEdBQW5CO29CQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBQ0gsd0JBQUM7WUFBRCxDQW5CQSxBQW1CQyxDQW5CK0IsdUJBQVUsR0FtQnpDIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2lzRW1wdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcblxuLyoqXG4gKiBJZiB0aGUgc291cmNlIE9ic2VydmFibGUgaXMgZW1wdHkgaXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdHJ1ZSwgb3RoZXJ3aXNlIGl0IGVtaXRzIGZhbHNlLlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvaXNFbXB0eS5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgYSBCb29sZWFuLlxuICogQG1ldGhvZCBpc0VtcHR5XG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgSXNFbXB0eU9wZXJhdG9yKCkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElzRW1wdHlTaWduYXR1cmU8VD4ge1xuICAoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbn1cblxuY2xhc3MgSXNFbXB0eU9wZXJhdG9yIGltcGxlbWVudHMgT3BlcmF0b3I8YW55LCBib29sZWFuPiB7XG4gIGNhbGwgKG9ic2VydmVyOiBTdWJzY3JpYmVyPGJvb2xlYW4+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBJc0VtcHR5U3Vic2NyaWJlcihvYnNlcnZlcikpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBJc0VtcHR5U3Vic2NyaWJlciBleHRlbmRzIFN1YnNjcmliZXI8YW55PiB7XG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPGJvb2xlYW4+KSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlDb21wbGV0ZShpc0VtcHR5OiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuXG4gICAgZGVzdGluYXRpb24ubmV4dChpc0VtcHR5KTtcbiAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5ub3RpZnlDb21wbGV0ZShmYWxzZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCkge1xuICAgIHRoaXMubm90aWZ5Q29tcGxldGUodHJ1ZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
