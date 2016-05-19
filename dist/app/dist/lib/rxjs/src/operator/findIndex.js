System.register(['./find'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var find_1;
    /**
     * Emits only the index of the first value emitted by the source Observable that
     * meets some condition.
     *
     * <span class="informal">It's like {@link find}, but emits the index of the
     * found value, not the value itself.</span>
     *
     * <img src="./img/findIndex.png" width="100%">
     *
     * `findIndex` searches for the first item in the source Observable that matches
     * the specified condition embodied by the `predicate`, and returns the
     * (zero-based) index of the first occurrence in the source. Unlike
     * {@link first}, the `predicate` is required in `findIndex`, and does not emit
     * an error if a valid value is not found.
     *
     * @example <caption>Emit the index of first click that happens on a DIV element</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
     * result.subscribe(x => console.log(x));
     *
     * @see {@link filter}
     * @see {@link find}
     * @see {@link first}
     * @see {@link take}
     *
     * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
     * A function called with each item to test for condition matching.
     * @param {any} [thisArg] An optional argument to determine the value of `this`
     * in the `predicate` function.
     * @return {Observable} An Observable of the index of the first item that
     * matches the condition.
     * @method find
     * @owner Observable
     */
    function findIndex(predicate, thisArg) {
        return this.lift(new find_1.FindValueOperator(predicate, this, true, thisArg));
    }
    exports_1("findIndex", findIndex);
    return {
        setters:[
            function (find_1_1) {
                find_1 = find_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2ZpbmRJbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWlDRztJQUNILG1CQUE2QixTQUFzRSxFQUN0RSxPQUFhO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksd0JBQWlCLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBSEQsaUNBR0MsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9maW5kSW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtGaW5kVmFsdWVPcGVyYXRvcn0gZnJvbSAnLi9maW5kJztcblxuLyoqXG4gKiBFbWl0cyBvbmx5IHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgdmFsdWUgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUgdGhhdFxuICogbWVldHMgc29tZSBjb25kaXRpb24uXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkl0J3MgbGlrZSB7QGxpbmsgZmluZH0sIGJ1dCBlbWl0cyB0aGUgaW5kZXggb2YgdGhlXG4gKiBmb3VuZCB2YWx1ZSwgbm90IHRoZSB2YWx1ZSBpdHNlbGYuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvZmluZEluZGV4LnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIGBmaW5kSW5kZXhgIHNlYXJjaGVzIGZvciB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgc291cmNlIE9ic2VydmFibGUgdGhhdCBtYXRjaGVzXG4gKiB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbiBlbWJvZGllZCBieSB0aGUgYHByZWRpY2F0ZWAsIGFuZCByZXR1cm5zIHRoZVxuICogKHplcm8tYmFzZWQpIGluZGV4IG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIGluIHRoZSBzb3VyY2UuIFVubGlrZVxuICoge0BsaW5rIGZpcnN0fSwgdGhlIGBwcmVkaWNhdGVgIGlzIHJlcXVpcmVkIGluIGBmaW5kSW5kZXhgLCBhbmQgZG9lcyBub3QgZW1pdFxuICogYW4gZXJyb3IgaWYgYSB2YWxpZCB2YWx1ZSBpcyBub3QgZm91bmQuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+RW1pdCB0aGUgaW5kZXggb2YgZmlyc3QgY2xpY2sgdGhhdCBoYXBwZW5zIG9uIGEgRElWIGVsZW1lbnQ8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIHJlc3VsdCA9IGNsaWNrcy5maW5kSW5kZXgoZXYgPT4gZXYudGFyZ2V0LnRhZ05hbWUgPT09ICdESVYnKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgZmlsdGVyfVxuICogQHNlZSB7QGxpbmsgZmluZH1cbiAqIEBzZWUge0BsaW5rIGZpcnN0fVxuICogQHNlZSB7QGxpbmsgdGFrZX1cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBzb3VyY2U6IE9ic2VydmFibGU8VD4pOiBib29sZWFufSBwcmVkaWNhdGVcbiAqIEEgZnVuY3Rpb24gY2FsbGVkIHdpdGggZWFjaCBpdGVtIHRvIHRlc3QgZm9yIGNvbmRpdGlvbiBtYXRjaGluZy5cbiAqIEBwYXJhbSB7YW55fSBbdGhpc0FyZ10gQW4gb3B0aW9uYWwgYXJndW1lbnQgdG8gZGV0ZXJtaW5lIHRoZSB2YWx1ZSBvZiBgdGhpc2BcbiAqIGluIHRoZSBgcHJlZGljYXRlYCBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgb2YgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpdGVtIHRoYXRcbiAqIG1hdGNoZXMgdGhlIGNvbmRpdGlvbi5cbiAqIEBtZXRob2QgZmluZFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbmRleDxUPihwcmVkaWNhdGU6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzQXJnPzogYW55KTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgRmluZFZhbHVlT3BlcmF0b3IocHJlZGljYXRlLCB0aGlzLCB0cnVlLCB0aGlzQXJnKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZEluZGV4U2lnbmF0dXJlPFQ+IHtcbiAgKHByZWRpY2F0ZTogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IGJvb2xlYW4sIHRoaXNBcmc/OiBhbnkpOiBPYnNlcnZhYmxlPG51bWJlcj47XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
