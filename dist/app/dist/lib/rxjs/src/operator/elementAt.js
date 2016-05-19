System.register(['../Subscriber', '../util/ArgumentOutOfRangeError'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, ArgumentOutOfRangeError_1;
    var ElementAtOperator, ElementAtSubscriber;
    /**
     * Returns an Observable that emits the item at the specified index in the source Observable.
     * If default is given, missing indices will output this value on next; otherwise, outputs error.
     * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
     * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
     * Observable has completed before emitting the i-th `next` notification.
     * @param {number} index the index of the value to be retrieved.
     * @param {any} [defaultValue] the default value returned for missing indices.
     * @return {Observable} an Observable that emits a single item, if it is found. Otherwise, will emit the default value if given.
     * @method elementAt
     * @owner Observable
     */
    function elementAt(index, defaultValue) {
        return this.lift(new ElementAtOperator(index, defaultValue));
    }
    exports_1("elementAt", elementAt);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (ArgumentOutOfRangeError_1_1) {
                ArgumentOutOfRangeError_1 = ArgumentOutOfRangeError_1_1;
            }],
        execute: function() {
            ElementAtOperator = (function () {
                function ElementAtOperator(index, defaultValue) {
                    this.index = index;
                    this.defaultValue = defaultValue;
                    if (index < 0) {
                        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
                    }
                }
                ElementAtOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new ElementAtSubscriber(subscriber, this.index, this.defaultValue));
                };
                return ElementAtOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ElementAtSubscriber = (function (_super) {
                __extends(ElementAtSubscriber, _super);
                function ElementAtSubscriber(destination, index, defaultValue) {
                    _super.call(this, destination);
                    this.index = index;
                    this.defaultValue = defaultValue;
                }
                ElementAtSubscriber.prototype._next = function (x) {
                    if (this.index-- === 0) {
                        this.destination.next(x);
                        this.destination.complete();
                    }
                };
                ElementAtSubscriber.prototype._complete = function () {
                    var destination = this.destination;
                    if (this.index >= 0) {
                        if (typeof this.defaultValue !== 'undefined') {
                            destination.next(this.defaultValue);
                        }
                        else {
                            destination.error(new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError);
                        }
                    }
                    destination.complete();
                };
                return ElementAtSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2VsZW1lbnRBdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBS0E7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxtQkFBNkIsS0FBYSxFQUFFLFlBQWdCO1FBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUZELGlDQUVDLENBQUE7Ozs7Ozs7Ozs7WUFNRDtnQkFFRSwyQkFBb0IsS0FBYSxFQUFVLFlBQWdCO29CQUF2QyxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFJO29CQUN6RCxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxNQUFNLElBQUksaURBQXVCLENBQUM7b0JBQ3BDLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxnQ0FBSSxHQUFKLFVBQUssVUFBeUIsRUFBRSxNQUFXO29CQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUMvRixDQUFDO2dCQUNILHdCQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQXFDLHVDQUFhO2dCQUVoRCw2QkFBWSxXQUEwQixFQUFVLEtBQWEsRUFBVSxZQUFnQjtvQkFDckYsa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBRDJCLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQUk7Z0JBRXZGLENBQUM7Z0JBRVMsbUNBQUssR0FBZixVQUFnQixDQUFJO29CQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzlCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFUyx1Q0FBUyxHQUFuQjtvQkFDRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDOzRCQUM3QyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDdEMsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksaURBQXVCLENBQUMsQ0FBQzt3QkFDakQsQ0FBQztvQkFDSCxDQUFDO29CQUNELFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFDSCwwQkFBQztZQUFELENBeEJBLEFBd0JDLENBeEJvQyx1QkFBVSxHQXdCOUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvZWxlbWVudEF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7QXJndW1lbnRPdXRPZlJhbmdlRXJyb3J9IGZyb20gJy4uL3V0aWwvQXJndW1lbnRPdXRPZlJhbmdlRXJyb3InO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IGluIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqIElmIGRlZmF1bHQgaXMgZ2l2ZW4sIG1pc3NpbmcgaW5kaWNlcyB3aWxsIG91dHB1dCB0aGlzIHZhbHVlIG9uIG5leHQ7IG90aGVyd2lzZSwgb3V0cHV0cyBlcnJvci5cbiAqIEB0aHJvd3Mge0FyZ3VtZW50T3V0T2ZSYW5nZUVycm9yfSBXaGVuIHVzaW5nIGBlbGVtZW50QXQoaSlgLCBpdCBkZWxpdmVycyBhblxuICogQXJndW1lbnRPdXRPclJhbmdlRXJyb3IgdG8gdGhlIE9ic2VydmVyJ3MgYGVycm9yYCBjYWxsYmFjayBpZiBgaSA8IDBgIG9yIHRoZVxuICogT2JzZXJ2YWJsZSBoYXMgY29tcGxldGVkIGJlZm9yZSBlbWl0dGluZyB0aGUgaS10aCBgbmV4dGAgbm90aWZpY2F0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IHRoZSBpbmRleCBvZiB0aGUgdmFsdWUgdG8gYmUgcmV0cmlldmVkLlxuICogQHBhcmFtIHthbnl9IFtkZWZhdWx0VmFsdWVdIHRoZSBkZWZhdWx0IHZhbHVlIHJldHVybmVkIGZvciBtaXNzaW5nIGluZGljZXMuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgYSBzaW5nbGUgaXRlbSwgaWYgaXQgaXMgZm91bmQuIE90aGVyd2lzZSwgd2lsbCBlbWl0IHRoZSBkZWZhdWx0IHZhbHVlIGlmIGdpdmVuLlxuICogQG1ldGhvZCBlbGVtZW50QXRcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50QXQ8VD4oaW5kZXg6IG51bWJlciwgZGVmYXVsdFZhbHVlPzogVCk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBFbGVtZW50QXRPcGVyYXRvcihpbmRleCwgZGVmYXVsdFZhbHVlKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudEF0U2lnbmF0dXJlPFQ+IHtcbiAgKGluZGV4OiBudW1iZXIsIGRlZmF1bHRWYWx1ZT86IFQpOiBPYnNlcnZhYmxlPFQ+O1xufVxuXG5jbGFzcyBFbGVtZW50QXRPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFQ+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluZGV4OiBudW1iZXIsIHByaXZhdGUgZGVmYXVsdFZhbHVlPzogVCkge1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBBcmd1bWVudE91dE9mUmFuZ2VFcnJvcjtcbiAgICB9XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IEVsZW1lbnRBdFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5pbmRleCwgdGhpcy5kZWZhdWx0VmFsdWUpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgRWxlbWVudEF0U3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFQ+LCBwcml2YXRlIGluZGV4OiBudW1iZXIsIHByaXZhdGUgZGVmYXVsdFZhbHVlPzogVCkge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh4OiBUKSB7XG4gICAgaWYgKHRoaXMuaW5kZXgtLSA9PT0gMCkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHgpO1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKSB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgIGlmICh0aGlzLmluZGV4ID49IDApIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5kZWZhdWx0VmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uLm5leHQodGhpcy5kZWZhdWx0VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVzdGluYXRpb24uZXJyb3IobmV3IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
