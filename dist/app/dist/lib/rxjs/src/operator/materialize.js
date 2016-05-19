System.register(['../Subscriber', '../Notification'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, Notification_1;
    var MaterializeOperator, MaterializeSubscriber;
    /**
     * Returns an Observable that represents all of the emissions and notifications
     * from the source Observable into emissions marked with their original types
     * within a `Notification` objects.
     *
     * <img src="./img/materialize.png" width="100%">
     *
     * @see {@link Notification}
     *
     * @scheduler materialize does not operate by default on a particular Scheduler.
     * @return {Observable<Notification<T>>} an Observable that emits items that are the result of
     * materializing the items and notifications of the source Observable.
     * @method materialize
     * @owner Observable
     */
    function materialize() {
        return this.lift(new MaterializeOperator());
    }
    exports_1("materialize", materialize);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (Notification_1_1) {
                Notification_1 = Notification_1_1;
            }],
        execute: function() {
            MaterializeOperator = (function () {
                function MaterializeOperator() {
                }
                MaterializeOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new MaterializeSubscriber(subscriber));
                };
                return MaterializeOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            MaterializeSubscriber = (function (_super) {
                __extends(MaterializeSubscriber, _super);
                function MaterializeSubscriber(destination) {
                    _super.call(this, destination);
                }
                MaterializeSubscriber.prototype._next = function (value) {
                    this.destination.next(Notification_1.Notification.createNext(value));
                };
                MaterializeSubscriber.prototype._error = function (err) {
                    var destination = this.destination;
                    destination.next(Notification_1.Notification.createError(err));
                    destination.complete();
                };
                MaterializeSubscriber.prototype._complete = function () {
                    var destination = this.destination;
                    destination.next(Notification_1.Notification.createComplete());
                    destination.complete();
                };
                return MaterializeSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL21hdGVyaWFsaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFLQTs7Ozs7Ozs7Ozs7Ozs7T0FjRztJQUNIO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUZELHFDQUVDLENBQUE7Ozs7Ozs7Ozs7WUFNRDtnQkFBQTtnQkFJQSxDQUFDO2dCQUhDLGtDQUFJLEdBQUosVUFBSyxVQUF1QyxFQUFFLE1BQVc7b0JBQ3ZELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUkscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFDSCwwQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUF1Qyx5Q0FBYTtnQkFDbEQsK0JBQVksV0FBd0M7b0JBQ2xELGtCQUFNLFdBQVcsQ0FBQyxDQUFDO2dCQUNyQixDQUFDO2dCQUVTLHFDQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQztnQkFFUyxzQ0FBTSxHQUFoQixVQUFpQixHQUFRO29CQUN2QixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNyQyxXQUFXLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2hELFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFFUyx5Q0FBUyxHQUFuQjtvQkFDRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNyQyxXQUFXLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDaEQsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN6QixDQUFDO2dCQUNILDRCQUFDO1lBQUQsQ0FwQkEsQUFvQkMsQ0FwQnNDLHVCQUFVLEdBb0JoRCIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9tYXRlcmlhbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtOb3RpZmljYXRpb259IGZyb20gJy4uL05vdGlmaWNhdGlvbic7XG5cbi8qKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgcmVwcmVzZW50cyBhbGwgb2YgdGhlIGVtaXNzaW9ucyBhbmQgbm90aWZpY2F0aW9uc1xuICogZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUgaW50byBlbWlzc2lvbnMgbWFya2VkIHdpdGggdGhlaXIgb3JpZ2luYWwgdHlwZXNcbiAqIHdpdGhpbiBhIGBOb3RpZmljYXRpb25gIG9iamVjdHMuXG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9tYXRlcmlhbGl6ZS5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBAc2VlIHtAbGluayBOb3RpZmljYXRpb259XG4gKlxuICogQHNjaGVkdWxlciBtYXRlcmlhbGl6ZSBkb2VzIG5vdCBvcGVyYXRlIGJ5IGRlZmF1bHQgb24gYSBwYXJ0aWN1bGFyIFNjaGVkdWxlci5cbiAqIEByZXR1cm4ge09ic2VydmFibGU8Tm90aWZpY2F0aW9uPFQ+Pn0gYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGl0ZW1zIHRoYXQgYXJlIHRoZSByZXN1bHQgb2ZcbiAqIG1hdGVyaWFsaXppbmcgdGhlIGl0ZW1zIGFuZCBub3RpZmljYXRpb25zIG9mIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqIEBtZXRob2QgbWF0ZXJpYWxpemVcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXRlcmlhbGl6ZTxUPigpOiBPYnNlcnZhYmxlPE5vdGlmaWNhdGlvbjxUPj4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBNYXRlcmlhbGl6ZU9wZXJhdG9yKCkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hdGVyaWFsaXplU2lnbmF0dXJlPFQ+IHtcbiAgKCk6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uPFQ+Pjtcbn1cblxuY2xhc3MgTWF0ZXJpYWxpemVPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIE5vdGlmaWNhdGlvbjxUPj4ge1xuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Tm90aWZpY2F0aW9uPFQ+Piwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgTWF0ZXJpYWxpemVTdWJzY3JpYmVyKHN1YnNjcmliZXIpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgTWF0ZXJpYWxpemVTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPE5vdGlmaWNhdGlvbjxUPj4pIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoTm90aWZpY2F0aW9uLmNyZWF0ZU5leHQodmFsdWUpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZXJyb3IoZXJyOiBhbnkpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgZGVzdGluYXRpb24ubmV4dChOb3RpZmljYXRpb24uY3JlYXRlRXJyb3IoZXJyKSk7XG4gICAgZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKSB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgIGRlc3RpbmF0aW9uLm5leHQoTm90aWZpY2F0aW9uLmNyZWF0ZUNvbXBsZXRlKCkpO1xuICAgIGRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
