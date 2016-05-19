System.register(['../Subject', './multicast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Subject_1, multicast_1;
    /**
     * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
     * before it begins emitting items to those Observers that have subscribed to it.
     *
     * <img src="./img/publish.png" width="100%">
     *
     * @return a ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
     * @method publish
     * @owner Observable
     */
    function publish() {
        return multicast_1.multicast.call(this, new Subject_1.Subject());
    }
    exports_1("publish", publish);
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (multicast_1_1) {
                multicast_1 = multicast_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3B1Ymxpc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQUlBOzs7Ozs7Ozs7T0FTRztJQUNIO1FBQ0UsTUFBTSxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLGlCQUFPLEVBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFGRCw2QkFFQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3B1Ymxpc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N1YmplY3R9IGZyb20gJy4uL1N1YmplY3QnO1xuaW1wb3J0IHttdWx0aWNhc3R9IGZyb20gJy4vbXVsdGljYXN0JztcbmltcG9ydCB7Q29ubmVjdGFibGVPYnNlcnZhYmxlfSBmcm9tICcuLi9vYnNlcnZhYmxlL0Nvbm5lY3RhYmxlT2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogUmV0dXJucyBhIENvbm5lY3RhYmxlT2JzZXJ2YWJsZSwgd2hpY2ggaXMgYSB2YXJpZXR5IG9mIE9ic2VydmFibGUgdGhhdCB3YWl0cyB1bnRpbCBpdHMgY29ubmVjdCBtZXRob2QgaXMgY2FsbGVkXG4gKiBiZWZvcmUgaXQgYmVnaW5zIGVtaXR0aW5nIGl0ZW1zIHRvIHRob3NlIE9ic2VydmVycyB0aGF0IGhhdmUgc3Vic2NyaWJlZCB0byBpdC5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3B1Ymxpc2gucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQHJldHVybiBhIENvbm5lY3RhYmxlT2JzZXJ2YWJsZSB0aGF0IHVwb24gY29ubmVjdGlvbiBjYXVzZXMgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHRvIGVtaXQgaXRlbXMgdG8gaXRzIE9ic2VydmVycy5cbiAqIEBtZXRob2QgcHVibGlzaFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1Ymxpc2g8VD4oKTogQ29ubmVjdGFibGVPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIG11bHRpY2FzdC5jYWxsKHRoaXMsIG5ldyBTdWJqZWN0PFQ+KCkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFB1Ymxpc2hTaWduYXR1cmU8VD4ge1xuICAoKTogQ29ubmVjdGFibGVPYnNlcnZhYmxlPFQ+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
