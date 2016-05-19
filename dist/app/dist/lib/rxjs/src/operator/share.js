System.register(['./multicast', '../Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var multicast_1, Subject_1;
    function shareSubjectFactory() {
        return new Subject_1.Subject();
    }
    /**
     * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
     * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
     * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
     * This is an alias for .publish().refCount().
     *
     * <img src="./img/share.png" width="100%">
     *
     * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
     * @method share
     * @owner Observable
     */
    function share() {
        return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
    }
    exports_1("share", share);
    return {
        setters:[
            function (multicast_1_1) {
                multicast_1 = multicast_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3NoYXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFJQTtRQUNFLE1BQU0sQ0FBQyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSDtRQUNFLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRkQseUJBRUMsQ0FBQTs7Ozs7Ozs7OztZQUFBLENBQUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3Ivc2hhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHttdWx0aWNhc3R9IGZyb20gJy4vbXVsdGljYXN0JztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAnLi4vU3ViamVjdCc7XG5cbmZ1bmN0aW9uIHNoYXJlU3ViamVjdEZhY3RvcnkoKSB7XG4gIHJldHVybiBuZXcgU3ViamVjdCgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgT2JzZXJ2YWJsZSB0aGF0IG11bHRpY2FzdHMgKHNoYXJlcykgdGhlIG9yaWdpbmFsIE9ic2VydmFibGUuIEFzIGxvbmcgYXMgdGhlcmUgaXMgYXQgbGVhc3Qgb25lXG4gKiBTdWJzY3JpYmVyIHRoaXMgT2JzZXJ2YWJsZSB3aWxsIGJlIHN1YnNjcmliZWQgYW5kIGVtaXR0aW5nIGRhdGEuIFdoZW4gYWxsIHN1YnNjcmliZXJzIGhhdmUgdW5zdWJzY3JpYmVkIGl0IHdpbGxcbiAqIHVuc3Vic2NyaWJlIGZyb20gdGhlIHNvdXJjZSBPYnNlcnZhYmxlLiBCZWNhdXNlIHRoZSBPYnNlcnZhYmxlIGlzIG11bHRpY2FzdGluZyBpdCBtYWtlcyB0aGUgc3RyZWFtIGBob3RgLlxuICogVGhpcyBpcyBhbiBhbGlhcyBmb3IgLnB1Ymxpc2goKS5yZWZDb3VudCgpLlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvc2hhcmUucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxUPn0gYW4gT2JzZXJ2YWJsZSB0aGF0IHVwb24gY29ubmVjdGlvbiBjYXVzZXMgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHRvIGVtaXQgaXRlbXMgdG8gaXRzIE9ic2VydmVyc1xuICogQG1ldGhvZCBzaGFyZVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNoYXJlPFQ+KCk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gbXVsdGljYXN0LmNhbGwodGhpcywgc2hhcmVTdWJqZWN0RmFjdG9yeSkucmVmQ291bnQoKTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hhcmVTaWduYXR1cmU8VD4ge1xuICAoKTogT2JzZXJ2YWJsZTxUPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
