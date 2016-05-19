System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var DefaultIfEmptyOperator, DefaultIfEmptySubscriber;
    /**
     * Returns an Observable that emits the elements of the source or a specified default value if empty.
     * @param {any} defaultValue the default value used if source is empty; defaults to null.
     * @return {Observable} an Observable of the items emitted by the where empty values are replaced by the specified default value or null.
     * @method defaultIfEmpty
     * @owner Observable
     */
    function defaultIfEmpty(defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return this.lift(new DefaultIfEmptyOperator(defaultValue));
    }
    exports_1("defaultIfEmpty", defaultIfEmpty);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            DefaultIfEmptyOperator = (function () {
                function DefaultIfEmptyOperator(defaultValue) {
                    this.defaultValue = defaultValue;
                }
                DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
                };
                return DefaultIfEmptyOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            DefaultIfEmptySubscriber = (function (_super) {
                __extends(DefaultIfEmptySubscriber, _super);
                function DefaultIfEmptySubscriber(destination, defaultValue) {
                    _super.call(this, destination);
                    this.defaultValue = defaultValue;
                    this.isEmpty = true;
                }
                DefaultIfEmptySubscriber.prototype._next = function (value) {
                    this.isEmpty = false;
                    this.destination.next(value);
                };
                DefaultIfEmptySubscriber.prototype._complete = function () {
                    if (this.isEmpty) {
                        this.destination.next(this.defaultValue);
                    }
                    this.destination.complete();
                };
                return DefaultIfEmptySubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2RlZmF1bHRJZkVtcHR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFJQTs7Ozs7O09BTUc7SUFDSCx3QkFBcUMsWUFBc0I7UUFBdEIsNEJBQXNCLEdBQXRCLG1CQUFzQjtRQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUZELDJDQUVDLENBQUE7Ozs7Ozs7WUFPRDtnQkFFRSxnQ0FBb0IsWUFBZTtvQkFBZixpQkFBWSxHQUFaLFlBQVksQ0FBRztnQkFDbkMsQ0FBQztnQkFFRCxxQ0FBSSxHQUFKLFVBQUssVUFBNkIsRUFBRSxNQUFXO29CQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLHdCQUF3QixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDeEYsQ0FBQztnQkFDSCw2QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUE2Qyw0Q0FBYTtnQkFHeEQsa0NBQVksV0FBOEIsRUFBVSxZQUFlO29CQUNqRSxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFEK0IsaUJBQVksR0FBWixZQUFZLENBQUc7b0JBRjNELFlBQU8sR0FBWSxJQUFJLENBQUM7Z0JBSWhDLENBQUM7Z0JBRVMsd0NBQUssR0FBZixVQUFnQixLQUFRO29CQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBRVMsNENBQVMsR0FBbkI7b0JBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDM0MsQ0FBQztvQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM5QixDQUFDO2dCQUNILCtCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsQ0FsQjRDLHVCQUFVLEdBa0J0RCIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9kZWZhdWx0SWZFbXB0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuXG4vKipcbiAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBlbGVtZW50cyBvZiB0aGUgc291cmNlIG9yIGEgc3BlY2lmaWVkIGRlZmF1bHQgdmFsdWUgaWYgZW1wdHkuXG4gKiBAcGFyYW0ge2FueX0gZGVmYXVsdFZhbHVlIHRoZSBkZWZhdWx0IHZhbHVlIHVzZWQgaWYgc291cmNlIGlzIGVtcHR5OyBkZWZhdWx0cyB0byBudWxsLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gYW4gT2JzZXJ2YWJsZSBvZiB0aGUgaXRlbXMgZW1pdHRlZCBieSB0aGUgd2hlcmUgZW1wdHkgdmFsdWVzIGFyZSByZXBsYWNlZCBieSB0aGUgc3BlY2lmaWVkIGRlZmF1bHQgdmFsdWUgb3IgbnVsbC5cbiAqIEBtZXRob2QgZGVmYXVsdElmRW1wdHlcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0SWZFbXB0eTxULCBSPihkZWZhdWx0VmFsdWU6IFIgPSBudWxsKTogT2JzZXJ2YWJsZTxUIHwgUj4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBEZWZhdWx0SWZFbXB0eU9wZXJhdG9yKGRlZmF1bHRWYWx1ZSkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRJZkVtcHR5U2lnbmF0dXJlPFQ+IHtcbiAgKGRlZmF1bHRWYWx1ZT86IFQpOiBPYnNlcnZhYmxlPFQ+O1xuICA8Uj4oZGVmYXVsdFZhbHVlPzogUik6IE9ic2VydmFibGU8VCB8IFI+O1xufVxuXG5jbGFzcyBEZWZhdWx0SWZFbXB0eU9wZXJhdG9yPFQsIFI+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgVCB8IFI+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlZmF1bHRWYWx1ZTogUikge1xuICB9XG5cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQgfCBSPiwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgRGVmYXVsdElmRW1wdHlTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuZGVmYXVsdFZhbHVlKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIERlZmF1bHRJZkVtcHR5U3Vic2NyaWJlcjxULCBSPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBwcml2YXRlIGlzRW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFQgfCBSPiwgcHJpdmF0ZSBkZWZhdWx0VmFsdWU6IFIpIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLmlzRW1wdHkgPSBmYWxzZTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodGhpcy5kZWZhdWx0VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
