System.register(['./distinct'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var distinct_1;
    /**
     * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items,
     * using a property accessed by using the key provided to check if the two items are distinct.
     * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
     * If a comparator function is not provided, an equality check is used by default.
     * As the internal HashSet of this operator grows larger and larger, care should be taken in the domain of inputs this operator may see.
     * An optional parameter is also provided such that an Observable can be provided to queue the internal HashSet to flush the values it holds.
     * @param {string} key string key for object property lookup on each item.
     * @param {function} [compare] optional comparison function called to test if an item is distinct from previous items in the source.
     * @param {Observable} [flushes] optional Observable for flushing the internal HashSet of the operator.
     * @return {Observable} an Observable that emits items from the source Observable with distinct values.
     * @method distinctKey
     * @owner Observable
     */
    function distinctKey(key, compare, flushes) {
        return distinct_1.distinct.call(this, function (x, y) {
            if (compare) {
                return compare(x[key], y[key]);
            }
            return x[key] === y[key];
        }, flushes);
    }
    exports_1("distinctKey", distinctKey);
    return {
        setters:[
            function (distinct_1_1) {
                distinct_1 = distinct_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2Rpc3RpbmN0S2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFHQTs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0gscUJBQStCLEdBQVcsRUFBRSxPQUFpQyxFQUFFLE9BQXlCO1FBQ3RHLE1BQU0sQ0FBQyxtQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBUyxDQUFJLEVBQUUsQ0FBSTtZQUM1QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNaLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBUEQscUNBT0MsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9kaXN0aW5jdEtleS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGlzdGluY3R9IGZyb20gJy4vZGlzdGluY3QnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBhbGwgaXRlbXMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUgdGhhdCBhcmUgZGlzdGluY3QgYnkgY29tcGFyaXNvbiBmcm9tIHByZXZpb3VzIGl0ZW1zLFxuICogdXNpbmcgYSBwcm9wZXJ0eSBhY2Nlc3NlZCBieSB1c2luZyB0aGUga2V5IHByb3ZpZGVkIHRvIGNoZWNrIGlmIHRoZSB0d28gaXRlbXMgYXJlIGRpc3RpbmN0LlxuICogSWYgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB0aGVuIGl0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGl0ZW0gdG8gdGVzdCBmb3Igd2hldGhlciBvciBub3QgdGhhdCB2YWx1ZSBzaG91bGQgYmUgZW1pdHRlZC5cbiAqIElmIGEgY29tcGFyYXRvciBmdW5jdGlvbiBpcyBub3QgcHJvdmlkZWQsIGFuIGVxdWFsaXR5IGNoZWNrIGlzIHVzZWQgYnkgZGVmYXVsdC5cbiAqIEFzIHRoZSBpbnRlcm5hbCBIYXNoU2V0IG9mIHRoaXMgb3BlcmF0b3IgZ3Jvd3MgbGFyZ2VyIGFuZCBsYXJnZXIsIGNhcmUgc2hvdWxkIGJlIHRha2VuIGluIHRoZSBkb21haW4gb2YgaW5wdXRzIHRoaXMgb3BlcmF0b3IgbWF5IHNlZS5cbiAqIEFuIG9wdGlvbmFsIHBhcmFtZXRlciBpcyBhbHNvIHByb3ZpZGVkIHN1Y2ggdGhhdCBhbiBPYnNlcnZhYmxlIGNhbiBiZSBwcm92aWRlZCB0byBxdWV1ZSB0aGUgaW50ZXJuYWwgSGFzaFNldCB0byBmbHVzaCB0aGUgdmFsdWVzIGl0IGhvbGRzLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBzdHJpbmcga2V5IGZvciBvYmplY3QgcHJvcGVydHkgbG9va3VwIG9uIGVhY2ggaXRlbS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjb21wYXJlXSBvcHRpb25hbCBjb21wYXJpc29uIGZ1bmN0aW9uIGNhbGxlZCB0byB0ZXN0IGlmIGFuIGl0ZW0gaXMgZGlzdGluY3QgZnJvbSBwcmV2aW91cyBpdGVtcyBpbiB0aGUgc291cmNlLlxuICogQHBhcmFtIHtPYnNlcnZhYmxlfSBbZmx1c2hlc10gb3B0aW9uYWwgT2JzZXJ2YWJsZSBmb3IgZmx1c2hpbmcgdGhlIGludGVybmFsIEhhc2hTZXQgb2YgdGhlIG9wZXJhdG9yLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGl0ZW1zIGZyb20gdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHdpdGggZGlzdGluY3QgdmFsdWVzLlxuICogQG1ldGhvZCBkaXN0aW5jdEtleVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RpbmN0S2V5PFQ+KGtleTogc3RyaW5nLCBjb21wYXJlPzogKHg6IFQsIHk6IFQpID0+IGJvb2xlYW4sIGZsdXNoZXM/OiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIGRpc3RpbmN0LmNhbGwodGhpcywgZnVuY3Rpb24oeDogVCwgeTogVCkge1xuICAgIGlmIChjb21wYXJlKSB7XG4gICAgICByZXR1cm4gY29tcGFyZSh4W2tleV0sIHlba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB4W2tleV0gPT09IHlba2V5XTtcbiAgfSwgZmx1c2hlcyk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlzdGluY3RLZXlTaWduYXR1cmU8VD4ge1xuICAoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+O1xuICA8Sz4oa2V5OiBzdHJpbmcsIGNvbXBhcmU6ICh4OiBLLCB5OiBLKSA9PiBib29sZWFuLCBmbHVzaGVzPzogT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxUPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
