System.register(['./Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1;
    var Notification;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            /**
             * Represents a push-based event or value that an {@link Observable} can emit.
             * This class is particularly useful for operators that manage notifications,
             * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
             * others. Besides wrapping the actual delivered value, it also annotates it
             * with metadata of, for instance, what type of push message it is (`next`,
             * `error`, or `complete`).
             *
             * @see {@link materialize}
             * @see {@link dematerialize}
             * @see {@link observeOn}
             *
             * @class Notification<T>
             */
            Notification = (function () {
                function Notification(kind, value, exception) {
                    this.kind = kind;
                    this.value = value;
                    this.exception = exception;
                    this.hasValue = kind === 'N';
                }
                /**
                 * Delivers to the given `observer` the value wrapped by this Notification.
                 * @param {Observer} observer
                 * @return
                 */
                Notification.prototype.observe = function (observer) {
                    switch (this.kind) {
                        case 'N':
                            return observer.next && observer.next(this.value);
                        case 'E':
                            return observer.error && observer.error(this.exception);
                        case 'C':
                            return observer.complete && observer.complete();
                    }
                };
                /**
                 * Given some {@link Observer} callbacks, deliver the value represented by the
                 * current Notification to the correctly corresponding callback.
                 * @param {function(value: T): void} next An Observer `next` callback.
                 * @param {function(err: any): void} [error] An Observer `error` callback.
                 * @param {function(): void} [complete] An Observer `complete` callback.
                 * @return {any}
                 */
                Notification.prototype.do = function (next, error, complete) {
                    var kind = this.kind;
                    switch (kind) {
                        case 'N':
                            return next && next(this.value);
                        case 'E':
                            return error && error(this.exception);
                        case 'C':
                            return complete && complete();
                    }
                };
                /**
                 * Takes an Observer or its individual callback functions, and calls `observe`
                 * or `do` methods accordingly.
                 * @param {Observer|function(value: T): void} nextOrObserver An Observer or
                 * the `next` callback.
                 * @param {function(err: any): void} [error] An Observer `error` callback.
                 * @param {function(): void} [complete] An Observer `complete` callback.
                 * @return {any}
                 */
                Notification.prototype.accept = function (nextOrObserver, error, complete) {
                    if (nextOrObserver && typeof nextOrObserver.next === 'function') {
                        return this.observe(nextOrObserver);
                    }
                    else {
                        return this.do(nextOrObserver, error, complete);
                    }
                };
                /**
                 * Returns a simple Observable that just delivers the notification represented
                 * by this Notification instance.
                 * @return {any}
                 */
                Notification.prototype.toObservable = function () {
                    var kind = this.kind;
                    switch (kind) {
                        case 'N':
                            return Observable_1.Observable.of(this.value);
                        case 'E':
                            return Observable_1.Observable.throw(this.exception);
                        case 'C':
                            return Observable_1.Observable.empty();
                    }
                };
                /**
                 * A shortcut to create a Notification instance of the type `next` from a
                 * given value.
                 * @param {T} value The `next` value.
                 * @return {Notification<T>} The "next" Notification representing the
                 * argument.
                 */
                Notification.createNext = function (value) {
                    if (typeof value !== 'undefined') {
                        return new Notification('N', value);
                    }
                    return this.undefinedValueNotification;
                };
                /**
                 * A shortcut to create a Notification instance of the type `error` from a
                 * given error.
                 * @param {any} [err] The `error` exception.
                 * @return {Notification<T>} The "error" Notification representing the
                 * argument.
                 */
                Notification.createError = function (err) {
                    return new Notification('E', undefined, err);
                };
                /**
                 * A shortcut to create a Notification instance of the type `complete`.
                 * @return {Notification<any>} The valueless "complete" Notification.
                 */
                Notification.createComplete = function () {
                    return this.completeNotification;
                };
                Notification.completeNotification = new Notification('C');
                Notification.undefinedValueNotification = new Notification('N', undefined);
                return Notification;
            }());
            exports_1("Notification", Notification);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL05vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUdBOzs7Ozs7Ozs7Ozs7O2VBYUc7WUFDSDtnQkFHRSxzQkFBbUIsSUFBWSxFQUFTLEtBQVMsRUFBUyxTQUFlO29CQUF0RCxTQUFJLEdBQUosSUFBSSxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQUk7b0JBQVMsY0FBUyxHQUFULFNBQVMsQ0FBTTtvQkFDdkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDO2dCQUMvQixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILDhCQUFPLEdBQVAsVUFBUSxRQUE0QjtvQkFDbEMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLEtBQUssR0FBRzs0QkFDTixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDcEQsS0FBSyxHQUFHOzRCQUNOLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUMxRCxLQUFLLEdBQUc7NEJBQ04sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNwRCxDQUFDO2dCQUNILENBQUM7Z0JBRUQ7Ozs7Ozs7bUJBT0c7Z0JBQ0gseUJBQUUsR0FBRixVQUFHLElBQXdCLEVBQUUsS0FBMEIsRUFBRSxRQUFxQjtvQkFDNUUsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDdkIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDYixLQUFLLEdBQUc7NEJBQ04sTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNsQyxLQUFLLEdBQUc7NEJBQ04sTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN4QyxLQUFLLEdBQUc7NEJBQ04sTUFBTSxDQUFDLFFBQVEsSUFBSSxRQUFRLEVBQUUsQ0FBQztvQkFDbEMsQ0FBQztnQkFDSCxDQUFDO2dCQUVEOzs7Ozs7OzttQkFRRztnQkFDSCw2QkFBTSxHQUFOLFVBQU8sY0FBeUQsRUFBRSxLQUEwQixFQUFFLFFBQXFCO29CQUNqSCxFQUFFLENBQUMsQ0FBQyxjQUFjLElBQUksT0FBNEIsY0FBZSxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN0RixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBcUIsY0FBYyxDQUFDLENBQUM7b0JBQzFELENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQXFCLGNBQWMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ3RFLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxtQ0FBWSxHQUFaO29CQUNFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ3ZCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2IsS0FBSyxHQUFHOzRCQUNOLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ25DLEtBQUssR0FBRzs0QkFDTixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUMxQyxLQUFLLEdBQUc7NEJBQ04sTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxFQUFLLENBQUM7b0JBQ2pDLENBQUM7Z0JBQ0gsQ0FBQztnQkFLRDs7Ozs7O21CQU1HO2dCQUNJLHVCQUFVLEdBQWpCLFVBQXFCLEtBQVE7b0JBQzNCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3RDLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQztnQkFDekMsQ0FBQztnQkFFRDs7Ozs7O21CQU1HO2dCQUNJLHdCQUFXLEdBQWxCLFVBQXNCLEdBQVM7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVEOzs7bUJBR0c7Z0JBQ0ksMkJBQWMsR0FBckI7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztnQkFDbkMsQ0FBQztnQkFsQ2MsaUNBQW9CLEdBQXNCLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRSx1Q0FBMEIsR0FBc0IsSUFBSSxZQUFZLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQWtDbEcsbUJBQUM7WUFBRCxDQWhIQSxBQWdIQyxJQUFBO1lBaEhELHVDQWdIQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL05vdGlmaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGFydGlhbE9ic2VydmVyfSBmcm9tICcuL09ic2VydmVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi9PYnNlcnZhYmxlJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcHVzaC1iYXNlZCBldmVudCBvciB2YWx1ZSB0aGF0IGFuIHtAbGluayBPYnNlcnZhYmxlfSBjYW4gZW1pdC5cbiAqIFRoaXMgY2xhc3MgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igb3BlcmF0b3JzIHRoYXQgbWFuYWdlIG5vdGlmaWNhdGlvbnMsXG4gKiBsaWtlIHtAbGluayBtYXRlcmlhbGl6ZX0sIHtAbGluayBkZW1hdGVyaWFsaXplfSwge0BsaW5rIG9ic2VydmVPbn0sIGFuZFxuICogb3RoZXJzLiBCZXNpZGVzIHdyYXBwaW5nIHRoZSBhY3R1YWwgZGVsaXZlcmVkIHZhbHVlLCBpdCBhbHNvIGFubm90YXRlcyBpdFxuICogd2l0aCBtZXRhZGF0YSBvZiwgZm9yIGluc3RhbmNlLCB3aGF0IHR5cGUgb2YgcHVzaCBtZXNzYWdlIGl0IGlzIChgbmV4dGAsXG4gKiBgZXJyb3JgLCBvciBgY29tcGxldGVgKS5cbiAqXG4gKiBAc2VlIHtAbGluayBtYXRlcmlhbGl6ZX1cbiAqIEBzZWUge0BsaW5rIGRlbWF0ZXJpYWxpemV9XG4gKiBAc2VlIHtAbGluayBvYnNlcnZlT259XG4gKlxuICogQGNsYXNzIE5vdGlmaWNhdGlvbjxUPlxuICovXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uPFQ+IHtcbiAgaGFzVmFsdWU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGtpbmQ6IHN0cmluZywgcHVibGljIHZhbHVlPzogVCwgcHVibGljIGV4Y2VwdGlvbj86IGFueSkge1xuICAgIHRoaXMuaGFzVmFsdWUgPSBraW5kID09PSAnTic7XG4gIH1cblxuICAvKipcbiAgICogRGVsaXZlcnMgdG8gdGhlIGdpdmVuIGBvYnNlcnZlcmAgdGhlIHZhbHVlIHdyYXBwZWQgYnkgdGhpcyBOb3RpZmljYXRpb24uXG4gICAqIEBwYXJhbSB7T2JzZXJ2ZXJ9IG9ic2VydmVyXG4gICAqIEByZXR1cm5cbiAgICovXG4gIG9ic2VydmUob2JzZXJ2ZXI6IFBhcnRpYWxPYnNlcnZlcjxUPik6IGFueSB7XG4gICAgc3dpdGNoICh0aGlzLmtpbmQpIHtcbiAgICAgIGNhc2UgJ04nOlxuICAgICAgICByZXR1cm4gb2JzZXJ2ZXIubmV4dCAmJiBvYnNlcnZlci5uZXh0KHRoaXMudmFsdWUpO1xuICAgICAgY2FzZSAnRSc6XG4gICAgICAgIHJldHVybiBvYnNlcnZlci5lcnJvciAmJiBvYnNlcnZlci5lcnJvcih0aGlzLmV4Y2VwdGlvbik7XG4gICAgICBjYXNlICdDJzpcbiAgICAgICAgcmV0dXJuIG9ic2VydmVyLmNvbXBsZXRlICYmIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHNvbWUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFja3MsIGRlbGl2ZXIgdGhlIHZhbHVlIHJlcHJlc2VudGVkIGJ5IHRoZVxuICAgKiBjdXJyZW50IE5vdGlmaWNhdGlvbiB0byB0aGUgY29ycmVjdGx5IGNvcnJlc3BvbmRpbmcgY2FsbGJhY2suXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24odmFsdWU6IFQpOiB2b2lkfSBuZXh0IEFuIE9ic2VydmVyIGBuZXh0YCBjYWxsYmFjay5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihlcnI6IGFueSk6IHZvaWR9IFtlcnJvcl0gQW4gT2JzZXJ2ZXIgYGVycm9yYCBjYWxsYmFjay5cbiAgICogQHBhcmFtIHtmdW5jdGlvbigpOiB2b2lkfSBbY29tcGxldGVdIEFuIE9ic2VydmVyIGBjb21wbGV0ZWAgY2FsbGJhY2suXG4gICAqIEByZXR1cm4ge2FueX1cbiAgICovXG4gIGRvKG5leHQ6ICh2YWx1ZTogVCkgPT4gdm9pZCwgZXJyb3I/OiAoZXJyOiBhbnkpID0+IHZvaWQsIGNvbXBsZXRlPzogKCkgPT4gdm9pZCk6IGFueSB7XG4gICAgY29uc3Qga2luZCA9IHRoaXMua2luZDtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgJ04nOlxuICAgICAgICByZXR1cm4gbmV4dCAmJiBuZXh0KHRoaXMudmFsdWUpO1xuICAgICAgY2FzZSAnRSc6XG4gICAgICAgIHJldHVybiBlcnJvciAmJiBlcnJvcih0aGlzLmV4Y2VwdGlvbik7XG4gICAgICBjYXNlICdDJzpcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlICYmIGNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIGFuIE9ic2VydmVyIG9yIGl0cyBpbmRpdmlkdWFsIGNhbGxiYWNrIGZ1bmN0aW9ucywgYW5kIGNhbGxzIGBvYnNlcnZlYFxuICAgKiBvciBgZG9gIG1ldGhvZHMgYWNjb3JkaW5nbHkuXG4gICAqIEBwYXJhbSB7T2JzZXJ2ZXJ8ZnVuY3Rpb24odmFsdWU6IFQpOiB2b2lkfSBuZXh0T3JPYnNlcnZlciBBbiBPYnNlcnZlciBvclxuICAgKiB0aGUgYG5leHRgIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGVycjogYW55KTogdm9pZH0gW2Vycm9yXSBBbiBPYnNlcnZlciBgZXJyb3JgIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCk6IHZvaWR9IFtjb21wbGV0ZV0gQW4gT2JzZXJ2ZXIgYGNvbXBsZXRlYCBjYWxsYmFjay5cbiAgICogQHJldHVybiB7YW55fVxuICAgKi9cbiAgYWNjZXB0KG5leHRPck9ic2VydmVyOiBQYXJ0aWFsT2JzZXJ2ZXI8VD4gfCAoKHZhbHVlOiBUKSA9PiB2b2lkKSwgZXJyb3I/OiAoZXJyOiBhbnkpID0+IHZvaWQsIGNvbXBsZXRlPzogKCkgPT4gdm9pZCkge1xuICAgIGlmIChuZXh0T3JPYnNlcnZlciAmJiB0eXBlb2YgKDxQYXJ0aWFsT2JzZXJ2ZXI8VD4+bmV4dE9yT2JzZXJ2ZXIpLm5leHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0aGlzLm9ic2VydmUoPFBhcnRpYWxPYnNlcnZlcjxUPj5uZXh0T3JPYnNlcnZlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRvKDwodmFsdWU6IFQpID0+IHZvaWQ+bmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzaW1wbGUgT2JzZXJ2YWJsZSB0aGF0IGp1c3QgZGVsaXZlcnMgdGhlIG5vdGlmaWNhdGlvbiByZXByZXNlbnRlZFxuICAgKiBieSB0aGlzIE5vdGlmaWNhdGlvbiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7YW55fVxuICAgKi9cbiAgdG9PYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IGtpbmQgPSB0aGlzLmtpbmQ7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlICdOJzpcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YodGhpcy52YWx1ZSk7XG4gICAgICBjYXNlICdFJzpcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3codGhpcy5leGNlcHRpb24pO1xuICAgICAgY2FzZSAnQyc6XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmVtcHR5PFQ+KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY29tcGxldGVOb3RpZmljYXRpb246IE5vdGlmaWNhdGlvbjxhbnk+ID0gbmV3IE5vdGlmaWNhdGlvbignQycpO1xuICBwcml2YXRlIHN0YXRpYyB1bmRlZmluZWRWYWx1ZU5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uPGFueT4gPSBuZXcgTm90aWZpY2F0aW9uKCdOJywgdW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogQSBzaG9ydGN1dCB0byBjcmVhdGUgYSBOb3RpZmljYXRpb24gaW5zdGFuY2Ugb2YgdGhlIHR5cGUgYG5leHRgIGZyb20gYVxuICAgKiBnaXZlbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtUfSB2YWx1ZSBUaGUgYG5leHRgIHZhbHVlLlxuICAgKiBAcmV0dXJuIHtOb3RpZmljYXRpb248VD59IFRoZSBcIm5leHRcIiBOb3RpZmljYXRpb24gcmVwcmVzZW50aW5nIHRoZVxuICAgKiBhcmd1bWVudC5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVOZXh0PFQ+KHZhbHVlOiBUKTogTm90aWZpY2F0aW9uPFQ+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG5ldyBOb3RpZmljYXRpb24oJ04nLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVuZGVmaW5lZFZhbHVlTm90aWZpY2F0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgc2hvcnRjdXQgdG8gY3JlYXRlIGEgTm90aWZpY2F0aW9uIGluc3RhbmNlIG9mIHRoZSB0eXBlIGBlcnJvcmAgZnJvbSBhXG4gICAqIGdpdmVuIGVycm9yLlxuICAgKiBAcGFyYW0ge2FueX0gW2Vycl0gVGhlIGBlcnJvcmAgZXhjZXB0aW9uLlxuICAgKiBAcmV0dXJuIHtOb3RpZmljYXRpb248VD59IFRoZSBcImVycm9yXCIgTm90aWZpY2F0aW9uIHJlcHJlc2VudGluZyB0aGVcbiAgICogYXJndW1lbnQuXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRXJyb3I8VD4oZXJyPzogYW55KTogTm90aWZpY2F0aW9uPFQ+IHtcbiAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbignRScsIHVuZGVmaW5lZCwgZXJyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNob3J0Y3V0IHRvIGNyZWF0ZSBhIE5vdGlmaWNhdGlvbiBpbnN0YW5jZSBvZiB0aGUgdHlwZSBgY29tcGxldGVgLlxuICAgKiBAcmV0dXJuIHtOb3RpZmljYXRpb248YW55Pn0gVGhlIHZhbHVlbGVzcyBcImNvbXBsZXRlXCIgTm90aWZpY2F0aW9uLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUNvbXBsZXRlKCk6IE5vdGlmaWNhdGlvbjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wbGV0ZU5vdGlmaWNhdGlvbjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
