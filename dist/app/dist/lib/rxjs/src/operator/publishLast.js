System.register(['../AsyncSubject', './multicast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AsyncSubject_1, multicast_1;
    /**
     * @return {ConnectableObservable<T>}
     * @method publishLast
     * @owner Observable
     */
    function publishLast() {
        return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
    }
    exports_1("publishLast", publishLast);
    return {
        setters:[
            function (AsyncSubject_1_1) {
                AsyncSubject_1 = AsyncSubject_1_1;
            },
            function (multicast_1_1) {
                multicast_1 = multicast_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3B1Ymxpc2hMYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFJQTs7OztPQUlHO0lBQ0g7UUFDRSxNQUFNLENBQUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksMkJBQVksRUFBSyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUZELHFDQUVDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvcHVibGlzaExhc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FzeW5jU3ViamVjdH0gZnJvbSAnLi4vQXN5bmNTdWJqZWN0JztcbmltcG9ydCB7bXVsdGljYXN0fSBmcm9tICcuL211bHRpY2FzdCc7XG5pbXBvcnQge0Nvbm5lY3RhYmxlT2JzZXJ2YWJsZX0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9Db25uZWN0YWJsZU9ic2VydmFibGUnO1xuXG4vKipcbiAqIEByZXR1cm4ge0Nvbm5lY3RhYmxlT2JzZXJ2YWJsZTxUPn1cbiAqIEBtZXRob2QgcHVibGlzaExhc3RcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdWJsaXNoTGFzdDxUPigpOiBDb25uZWN0YWJsZU9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gbXVsdGljYXN0LmNhbGwodGhpcywgbmV3IEFzeW5jU3ViamVjdDxUPigpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQdWJsaXNoTGFzdFNpZ25hdHVyZTxUPiB7XG4gICgpOiBDb25uZWN0YWJsZU9ic2VydmFibGU8VD47XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
