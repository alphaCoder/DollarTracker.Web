System.register(['./zip'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var zip_1;
    /**
     * @param project
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method zipAll
     * @owner Observable
     */
    function zipAll(project) {
        return this.lift(new zip_1.ZipOperator(project));
    }
    exports_1("zipAll", zipAll);
    return {
        setters:[
            function (zip_1_1) {
                zip_1 = zip_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3ppcEFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBR0E7Ozs7O09BS0c7SUFDSCxnQkFBNkIsT0FBc0M7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUZELDJCQUVDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvemlwQWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtaaXBPcGVyYXRvcn0gZnJvbSAnLi96aXAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcblxuLyoqXG4gKiBAcGFyYW0gcHJvamVjdFxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxSPnxXZWJTb2NrZXRTdWJqZWN0PFQ+fE9ic2VydmFibGU8VD59XG4gKiBAbWV0aG9kIHppcEFsbFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHppcEFsbDxULCBSPihwcm9qZWN0PzogKC4uLnZhbHVlczogQXJyYXk8YW55PikgPT4gUik6IE9ic2VydmFibGU8Uj4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBaaXBPcGVyYXRvcihwcm9qZWN0KSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWmlwQWxsU2lnbmF0dXJlPFQ+IHtcbiAgKCk6IE9ic2VydmFibGU8VFtdPjtcbiAgPFI+KHByb2plY3Q/OiAoLi4udmFsdWVzOiBBcnJheTxUPikgPT4gUik6IE9ic2VydmFibGU8Uj47XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
