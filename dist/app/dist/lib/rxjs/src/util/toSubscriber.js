System.register(['../Subscriber', '../symbol/rxSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Subscriber_1, rxSubscriber_1;
    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver === 'object') {
            if (nextOrObserver instanceof Subscriber_1.Subscriber) {
                return nextOrObserver;
            }
            else if (typeof nextOrObserver[rxSubscriber_1.$$rxSubscriber] === 'function') {
                return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
            }
        }
        return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }
    exports_1("toSubscriber", toSubscriber);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (rxSubscriber_1_1) {
                rxSubscriber_1 = rxSubscriber_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3V0aWwvdG9TdWJzY3JpYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFJQSxzQkFDRSxjQUEwRCxFQUMxRCxLQUE0QixFQUM1QixRQUFxQjtRQUVyQixFQUFFLENBQUMsQ0FBQyxjQUFjLElBQUksT0FBTyxjQUFjLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN6RCxFQUFFLENBQUMsQ0FBQyxjQUFjLFlBQVksdUJBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLE1BQU0sQ0FBa0IsY0FBZSxDQUFDO1lBQzFDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxjQUFjLENBQUMsNkJBQWMsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLE1BQU0sQ0FBQyxjQUFjLENBQUMsNkJBQWMsQ0FBQyxFQUFFLENBQUM7WUFDMUMsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSx1QkFBVSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQWRELHVDQWNDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvdXRpbC90b1N1YnNjcmliZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BhcnRpYWxPYnNlcnZlcn0gZnJvbSAnLi4vT2JzZXJ2ZXInO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7JCRyeFN1YnNjcmliZXJ9IGZyb20gJy4uL3N5bWJvbC9yeFN1YnNjcmliZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9TdWJzY3JpYmVyPFQ+KFxuICBuZXh0T3JPYnNlcnZlcj86IFBhcnRpYWxPYnNlcnZlcjxUPiB8ICgodmFsdWU6IFQpID0+IHZvaWQpLFxuICBlcnJvcj86IChlcnJvcjogYW55KSA9PiB2b2lkLFxuICBjb21wbGV0ZT86ICgpID0+IHZvaWQpOiBTdWJzY3JpYmVyPFQ+IHtcblxuICBpZiAobmV4dE9yT2JzZXJ2ZXIgJiYgdHlwZW9mIG5leHRPck9ic2VydmVyID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChuZXh0T3JPYnNlcnZlciBpbnN0YW5jZW9mIFN1YnNjcmliZXIpIHtcbiAgICAgIHJldHVybiAoPFN1YnNjcmliZXI8VD4+IG5leHRPck9ic2VydmVyKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBuZXh0T3JPYnNlcnZlclskJHJ4U3Vic2NyaWJlcl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBuZXh0T3JPYnNlcnZlclskJHJ4U3Vic2NyaWJlcl0oKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFN1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
