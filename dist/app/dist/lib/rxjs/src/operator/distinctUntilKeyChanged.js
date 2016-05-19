System.register(['./distinctUntilChanged'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var distinctUntilChanged_1;
    /**
     * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
     * using a property accessed by using the key provided to check if the two items are distinct.
     * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
     * If a comparator function is not provided, an equality check is used by default.
     * @param {string} key string key for object property lookup on each item.
     * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
     * @return {Observable} an Observable that emits items from the source Observable with distinct values based on the key specified.
     * @method distinctUntilKeyChanged
     * @owner Observable
     */
    function distinctUntilKeyChanged(key, compare) {
        return distinctUntilChanged_1.distinctUntilChanged.call(this, function (x, y) {
            if (compare) {
                return compare(x[key], y[key]);
            }
            return x[key] === y[key];
        });
    }
    exports_1("distinctUntilKeyChanged", distinctUntilKeyChanged);
    return {
        setters:[
            function (distinctUntilChanged_1_1) {
                distinctUntilChanged_1 = distinctUntilChanged_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxLZXlDaGFuZ2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFHQTs7Ozs7Ozs7OztPQVVHO0lBQ0gsaUNBQTJDLEdBQVcsRUFBRSxPQUFpQztRQUN2RixNQUFNLENBQUMsMkNBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFTLENBQUksRUFBRSxDQUFJO1lBQ3hELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1osTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVBELDZEQU9DLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvZGlzdGluY3RVbnRpbEtleUNoYW5nZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkfSBmcm9tICcuL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgYWxsIGl0ZW1zIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHRoYXQgYXJlIGRpc3RpbmN0IGJ5IGNvbXBhcmlzb24gZnJvbSB0aGUgcHJldmlvdXMgaXRlbSxcbiAqIHVzaW5nIGEgcHJvcGVydHkgYWNjZXNzZWQgYnkgdXNpbmcgdGhlIGtleSBwcm92aWRlZCB0byBjaGVjayBpZiB0aGUgdHdvIGl0ZW1zIGFyZSBkaXN0aW5jdC5cbiAqIElmIGEgY29tcGFyYXRvciBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdGhlbiBpdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBpdGVtIHRvIHRlc3QgZm9yIHdoZXRoZXIgb3Igbm90IHRoYXQgdmFsdWUgc2hvdWxkIGJlIGVtaXR0ZWQuXG4gKiBJZiBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gaXMgbm90IHByb3ZpZGVkLCBhbiBlcXVhbGl0eSBjaGVjayBpcyB1c2VkIGJ5IGRlZmF1bHQuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHN0cmluZyBrZXkgZm9yIG9iamVjdCBwcm9wZXJ0eSBsb29rdXAgb24gZWFjaCBpdGVtLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2NvbXBhcmVdIG9wdGlvbmFsIGNvbXBhcmlzb24gZnVuY3Rpb24gY2FsbGVkIHRvIHRlc3QgaWYgYW4gaXRlbSBpcyBkaXN0aW5jdCBmcm9tIHRoZSBwcmV2aW91cyBpdGVtIGluIHRoZSBzb3VyY2UuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgaXRlbXMgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUgd2l0aCBkaXN0aW5jdCB2YWx1ZXMgYmFzZWQgb24gdGhlIGtleSBzcGVjaWZpZWQuXG4gKiBAbWV0aG9kIGRpc3RpbmN0VW50aWxLZXlDaGFuZ2VkXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGluY3RVbnRpbEtleUNoYW5nZWQ8VD4oa2V5OiBzdHJpbmcsIGNvbXBhcmU/OiAoeDogVCwgeTogVCkgPT4gYm9vbGVhbik6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gZGlzdGluY3RVbnRpbENoYW5nZWQuY2FsbCh0aGlzLCBmdW5jdGlvbih4OiBULCB5OiBUKSB7XG4gICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgIHJldHVybiBjb21wYXJlKHhba2V5XSwgeVtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHhba2V5XSA9PT0geVtrZXldO1xuICB9KTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXN0aW5jdFVudGlsS2V5Q2hhbmdlZFNpZ25hdHVyZTxUPiB7XG4gIChrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8VD47XG4gIDxLPihrZXk6IHN0cmluZywgY29tcGFyZTogKHg6IEssIHk6IEspID0+IGJvb2xlYW4pOiBPYnNlcnZhYmxlPFQ+O1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
