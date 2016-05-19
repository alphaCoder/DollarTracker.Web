System.register(['../observable/ConnectableObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ConnectableObservable_1;
    /**
     * Returns an Observable that emits the results of invoking a specified selector on items
     * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
     *
     * <img src="./img/multicast.png" width="100%">
     *
     * @param {Function} selector - a function that can use the multicasted source stream
     * as many times as needed, without causing multiple subscriptions to the source stream.
     * Subscribers to the given source will receive all notifications of the source from the
     * time of the subscription forward.
     * @return {Observable} an Observable that emits the results of invoking the selector
     * on the items emitted by a `ConnectableObservable` that shares a single subscription to
     * the underlying stream.
     * @method multicast
     * @owner Observable
     */
    function multicast(subjectOrSubjectFactory) {
        var subjectFactory;
        if (typeof subjectOrSubjectFactory === 'function') {
            subjectFactory = subjectOrSubjectFactory;
        }
        else {
            subjectFactory = function subjectFactory() {
                return subjectOrSubjectFactory;
            };
        }
        return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
    }
    exports_1("multicast", multicast);
    return {
        setters:[
            function (ConnectableObservable_1_1) {
                ConnectableObservable_1 = ConnectableObservable_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL211bHRpY2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBR0E7Ozs7Ozs7Ozs7Ozs7OztPQWVHO0lBQ0gsbUJBQTZCLHVCQUF3RDtRQUNuRixJQUFJLGNBQWdDLENBQUM7UUFDckMsRUFBRSxDQUFDLENBQUMsT0FBTyx1QkFBdUIsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xELGNBQWMsR0FBcUIsdUJBQXVCLENBQUM7UUFDN0QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sY0FBYyxHQUFHO2dCQUNmLE1BQU0sQ0FBYSx1QkFBdUIsQ0FBQztZQUM3QyxDQUFDLENBQUM7UUFDSixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksNkNBQXFCLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFWRCxpQ0FVQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL211bHRpY2FzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3ViamVjdH0gZnJvbSAnLi4vU3ViamVjdCc7XG5pbXBvcnQge0Nvbm5lY3RhYmxlT2JzZXJ2YWJsZX0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9Db25uZWN0YWJsZU9ic2VydmFibGUnO1xuXG4vKipcbiAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSByZXN1bHRzIG9mIGludm9raW5nIGEgc3BlY2lmaWVkIHNlbGVjdG9yIG9uIGl0ZW1zXG4gKiBlbWl0dGVkIGJ5IGEgQ29ubmVjdGFibGVPYnNlcnZhYmxlIHRoYXQgc2hhcmVzIGEgc2luZ2xlIHN1YnNjcmlwdGlvbiB0byB0aGUgdW5kZXJseWluZyBzdHJlYW0uXG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9tdWx0aWNhc3QucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2VsZWN0b3IgLSBhIGZ1bmN0aW9uIHRoYXQgY2FuIHVzZSB0aGUgbXVsdGljYXN0ZWQgc291cmNlIHN0cmVhbVxuICogYXMgbWFueSB0aW1lcyBhcyBuZWVkZWQsIHdpdGhvdXQgY2F1c2luZyBtdWx0aXBsZSBzdWJzY3JpcHRpb25zIHRvIHRoZSBzb3VyY2Ugc3RyZWFtLlxuICogU3Vic2NyaWJlcnMgdG8gdGhlIGdpdmVuIHNvdXJjZSB3aWxsIHJlY2VpdmUgYWxsIG5vdGlmaWNhdGlvbnMgb2YgdGhlIHNvdXJjZSBmcm9tIHRoZVxuICogdGltZSBvZiB0aGUgc3Vic2NyaXB0aW9uIGZvcndhcmQuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIHJlc3VsdHMgb2YgaW52b2tpbmcgdGhlIHNlbGVjdG9yXG4gKiBvbiB0aGUgaXRlbXMgZW1pdHRlZCBieSBhIGBDb25uZWN0YWJsZU9ic2VydmFibGVgIHRoYXQgc2hhcmVzIGEgc2luZ2xlIHN1YnNjcmlwdGlvbiB0b1xuICogdGhlIHVuZGVybHlpbmcgc3RyZWFtLlxuICogQG1ldGhvZCBtdWx0aWNhc3RcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aWNhc3Q8VD4oc3ViamVjdE9yU3ViamVjdEZhY3Rvcnk6IFN1YmplY3Q8VD4gfCAoKCkgPT4gU3ViamVjdDxUPikpOiBDb25uZWN0YWJsZU9ic2VydmFibGU8VD4ge1xuICBsZXQgc3ViamVjdEZhY3Rvcnk6ICgpID0+IFN1YmplY3Q8VD47XG4gIGlmICh0eXBlb2Ygc3ViamVjdE9yU3ViamVjdEZhY3RvcnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzdWJqZWN0RmFjdG9yeSA9IDwoKSA9PiBTdWJqZWN0PFQ+PnN1YmplY3RPclN1YmplY3RGYWN0b3J5O1xuICB9IGVsc2Uge1xuICAgIHN1YmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gc3ViamVjdEZhY3RvcnkoKSB7XG4gICAgICByZXR1cm4gPFN1YmplY3Q8VD4+c3ViamVjdE9yU3ViamVjdEZhY3Rvcnk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gbmV3IENvbm5lY3RhYmxlT2JzZXJ2YWJsZSh0aGlzLCBzdWJqZWN0RmFjdG9yeSk7XG59XG5cbmV4cG9ydCB0eXBlIGZhY3RvcnlPclZhbHVlPFQ+ID0gVCB8ICgoKSA9PiBUKTtcblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aWNhc3RTaWduYXR1cmU8VD4ge1xuICAoc3ViamVjdE9yU3ViamVjdEZhY3Rvcnk6IGZhY3RvcnlPclZhbHVlPFN1YmplY3Q8VD4+KTogQ29ubmVjdGFibGVPYnNlcnZhYmxlPFQ+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
