System.register(['../BehaviorSubject', './multicast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BehaviorSubject_1, multicast_1;
    /**
     * @param value
     * @return {ConnectableObservable<T>}
     * @method publishBehavior
     * @owner Observable
     */
    function publishBehavior(value) {
        return multicast_1.multicast.call(this, new BehaviorSubject_1.BehaviorSubject(value));
    }
    exports_1("publishBehavior", publishBehavior);
    return {
        setters:[
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            },
            function (multicast_1_1) {
                multicast_1 = multicast_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3B1Ymxpc2hCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBSUE7Ozs7O09BS0c7SUFDSCx5QkFBbUMsS0FBUTtRQUN6QyxNQUFNLENBQUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksaUNBQWUsQ0FBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFGRCw2Q0FFQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3B1Ymxpc2hCZWhhdmlvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICcuLi9CZWhhdmlvclN1YmplY3QnO1xuaW1wb3J0IHttdWx0aWNhc3R9IGZyb20gJy4vbXVsdGljYXN0JztcbmltcG9ydCB7Q29ubmVjdGFibGVPYnNlcnZhYmxlfSBmcm9tICcuLi9vYnNlcnZhYmxlL0Nvbm5lY3RhYmxlT2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJuIHtDb25uZWN0YWJsZU9ic2VydmFibGU8VD59XG4gKiBAbWV0aG9kIHB1Ymxpc2hCZWhhdmlvclxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1Ymxpc2hCZWhhdmlvcjxUPih2YWx1ZTogVCk6IENvbm5lY3RhYmxlT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiBtdWx0aWNhc3QuY2FsbCh0aGlzLCBuZXcgQmVoYXZpb3JTdWJqZWN0PFQ+KHZhbHVlKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVibGlzaEJlaGF2aW9yU2lnbmF0dXJlPFQ+IHtcbiAgKHZhbHVlOiBUKTogQ29ubmVjdGFibGVPYnNlcnZhYmxlPFQ+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
