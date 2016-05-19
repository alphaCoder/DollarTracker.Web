System.register(['./reduce'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var reduce_1;
    /**
     * The Max operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
     * and when source Observable completes it emits a single item: the item with the largest number.
     *
     * <img src="./img/max.png" width="100%">
     *
     * @param {Function} optional comparer function that it will use instead of its default to compare the value of two
     * items.
     * @return {Observable} an Observable that emits item with the largest number.
     * @method max
     * @owner Observable
     */
    function max(comparer) {
        var max = (typeof comparer === 'function')
            ? comparer
            : function (x, y) { return x > y ? x : y; };
        return this.lift(new reduce_1.ReduceOperator(max));
    }
    exports_1("max", max);
    return {
        setters:[
            function (reduce_1_1) {
                reduce_1 = reduce_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL21heC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBR0E7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxhQUF1QixRQUE0QjtRQUNqRCxJQUFNLEdBQUcsR0FBb0IsQ0FBQyxPQUFPLFFBQVEsS0FBSyxVQUFVLENBQUM7Y0FDekQsUUFBUTtjQUNSLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBYixDQUFhLENBQUM7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUxELHFCQUtDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvbWF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7UmVkdWNlT3BlcmF0b3J9IGZyb20gJy4vcmVkdWNlJztcblxuLyoqXG4gKiBUaGUgTWF4IG9wZXJhdG9yIG9wZXJhdGVzIG9uIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBudW1iZXJzIChvciBpdGVtcyB0aGF0IGNhbiBiZSBldmFsdWF0ZWQgYXMgbnVtYmVycyksXG4gKiBhbmQgd2hlbiBzb3VyY2UgT2JzZXJ2YWJsZSBjb21wbGV0ZXMgaXQgZW1pdHMgYSBzaW5nbGUgaXRlbTogdGhlIGl0ZW0gd2l0aCB0aGUgbGFyZ2VzdCBudW1iZXIuXG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9tYXgucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9uYWwgY29tcGFyZXIgZnVuY3Rpb24gdGhhdCBpdCB3aWxsIHVzZSBpbnN0ZWFkIG9mIGl0cyBkZWZhdWx0IHRvIGNvbXBhcmUgdGhlIHZhbHVlIG9mIHR3b1xuICogaXRlbXMuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgaXRlbSB3aXRoIHRoZSBsYXJnZXN0IG51bWJlci5cbiAqIEBtZXRob2QgbWF4XG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4PFQ+KGNvbXBhcmVyPzogKHg6IFQsIHk6IFQpID0+IFQpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgY29uc3QgbWF4OiB0eXBlb2YgY29tcGFyZXIgPSAodHlwZW9mIGNvbXBhcmVyID09PSAnZnVuY3Rpb24nKVxuICAgID8gY29tcGFyZXJcbiAgICA6ICh4LCB5KSA9PiB4ID4geSA/IHggOiB5O1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBSZWR1Y2VPcGVyYXRvcihtYXgpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXhTaWduYXR1cmU8VD4ge1xuICAoY29tcGFyZXI/OiAoeDogVCwgeTogVCkgPT4gVCk6IE9ic2VydmFibGU8VD47XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
