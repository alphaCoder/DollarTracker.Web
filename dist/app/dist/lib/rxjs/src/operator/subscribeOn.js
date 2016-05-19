System.register(['../observable/SubscribeOnObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SubscribeOnObservable_1;
    /**
     * Asynchronously subscribes Observers to this Observable on the specified Scheduler.
     *
     * <img src="./img/subscribeOn.png" width="100%">
     *
     * @param {Scheduler} the Scheduler to perform subscription actions on.
     * @return {Observable<T>} the source Observable modified so that its subscriptions happen on the specified Scheduler
     .
     * @method subscribeOn
     * @owner Observable
     */
    function subscribeOn(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        return new SubscribeOnObservable_1.SubscribeOnObservable(this, delay, scheduler);
    }
    exports_1("subscribeOn", subscribeOn);
    return {
        setters:[
            function (SubscribeOnObservable_1_1) {
                SubscribeOnObservable_1 = SubscribeOnObservable_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3N1YnNjcmliZU9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFJQTs7Ozs7Ozs7OztPQVVHO0lBQ0gscUJBQStCLFNBQW9CLEVBQUUsS0FBaUI7UUFBakIscUJBQWlCLEdBQWpCLFNBQWlCO1FBQ3BFLE1BQU0sQ0FBQyxJQUFJLDZDQUFxQixDQUFJLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUZELHFDQUVDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3Ivc3Vic2NyaWJlT24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjaGVkdWxlcn0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YnNjcmliZU9uT2JzZXJ2YWJsZX0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9TdWJzY3JpYmVPbk9ic2VydmFibGUnO1xuXG4vKipcbiAqIEFzeW5jaHJvbm91c2x5IHN1YnNjcmliZXMgT2JzZXJ2ZXJzIHRvIHRoaXMgT2JzZXJ2YWJsZSBvbiB0aGUgc3BlY2lmaWVkIFNjaGVkdWxlci5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3N1YnNjcmliZU9uLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIEBwYXJhbSB7U2NoZWR1bGVyfSB0aGUgU2NoZWR1bGVyIHRvIHBlcmZvcm0gc3Vic2NyaXB0aW9uIGFjdGlvbnMgb24uXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFQ+fSB0aGUgc291cmNlIE9ic2VydmFibGUgbW9kaWZpZWQgc28gdGhhdCBpdHMgc3Vic2NyaXB0aW9ucyBoYXBwZW4gb24gdGhlIHNwZWNpZmllZCBTY2hlZHVsZXJcbiAuXG4gKiBAbWV0aG9kIHN1YnNjcmliZU9uXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlT248VD4oc2NoZWR1bGVyOiBTY2hlZHVsZXIsIGRlbGF5OiBudW1iZXIgPSAwKTogT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiBuZXcgU3Vic2NyaWJlT25PYnNlcnZhYmxlPFQ+KHRoaXMsIGRlbGF5LCBzY2hlZHVsZXIpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmliZU9uU2lnbmF0dXJlPFQ+IHtcbiAgKHNjaGVkdWxlcjogU2NoZWR1bGVyLCBkZWxheT86IG51bWJlcik6IE9ic2VydmFibGU8VD47XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
