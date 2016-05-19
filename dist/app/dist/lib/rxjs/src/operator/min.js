System.register(['./reduce'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var reduce_1;
    /**
     * The Min operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
     * and when source Observable completes it emits a single item: the item with the smallest number.
     *
     * <img src="./img/min.png" width="100%">
     *
     * @param {Function} optional comparer function that it will use instead of its default to compare the value of two items.
     * @return {Observable<R>} an Observable that emits item with the smallest number.
     * @method min
     * @owner Observable
     */
    function min(comparer) {
        var min = (typeof comparer === 'function')
            ? comparer
            : function (x, y) { return x < y ? x : y; };
        return this.lift(new reduce_1.ReduceOperator(min));
    }
    exports_1("min", min);
    return {
        setters:[
            function (reduce_1_1) {
                reduce_1 = reduce_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL21pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBR0E7Ozs7Ozs7Ozs7T0FVRztJQUNILGFBQXVCLFFBQTRCO1FBQ2pELElBQU0sR0FBRyxHQUFvQixDQUFDLE9BQU8sUUFBUSxLQUFLLFVBQVUsQ0FBQztjQUN6RCxRQUFRO2NBQ1IsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFiLENBQWEsQ0FBQztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBTEQscUJBS0MsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9taW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtSZWR1Y2VPcGVyYXRvcn0gZnJvbSAnLi9yZWR1Y2UnO1xuXG4vKipcbiAqIFRoZSBNaW4gb3BlcmF0b3Igb3BlcmF0ZXMgb24gYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG51bWJlcnMgKG9yIGl0ZW1zIHRoYXQgY2FuIGJlIGV2YWx1YXRlZCBhcyBudW1iZXJzKSxcbiAqIGFuZCB3aGVuIHNvdXJjZSBPYnNlcnZhYmxlIGNvbXBsZXRlcyBpdCBlbWl0cyBhIHNpbmdsZSBpdGVtOiB0aGUgaXRlbSB3aXRoIHRoZSBzbWFsbGVzdCBudW1iZXIuXG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9taW4ucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9uYWwgY29tcGFyZXIgZnVuY3Rpb24gdGhhdCBpdCB3aWxsIHVzZSBpbnN0ZWFkIG9mIGl0cyBkZWZhdWx0IHRvIGNvbXBhcmUgdGhlIHZhbHVlIG9mIHR3byBpdGVtcy5cbiAqIEByZXR1cm4ge09ic2VydmFibGU8Uj59IGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBpdGVtIHdpdGggdGhlIHNtYWxsZXN0IG51bWJlci5cbiAqIEBtZXRob2QgbWluXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWluPFQ+KGNvbXBhcmVyPzogKHg6IFQsIHk6IFQpID0+IFQpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgY29uc3QgbWluOiB0eXBlb2YgY29tcGFyZXIgPSAodHlwZW9mIGNvbXBhcmVyID09PSAnZnVuY3Rpb24nKVxuICAgID8gY29tcGFyZXJcbiAgICA6ICh4LCB5KSA9PiB4IDwgeSA/IHggOiB5O1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBSZWR1Y2VPcGVyYXRvcihtaW4pKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNaW5TaWduYXR1cmU8VD4ge1xuICAoY29tcGFyZXI/OiAoeDogVCwgeTogVCkgPT4gVCk6IE9ic2VydmFibGU8VD47XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
