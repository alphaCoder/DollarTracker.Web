System.register(['./combineLatest'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var combineLatest_1;
    /**
     * Converts a higher-order Observable into a first-order Observable by waiting
     * for the outer Observable to complete, then applying {@link combineLatest}.
     *
     * <span class="informal">Flattens an Observable-of-Observables by applying
     * {@link combineLatest} when the Observable-of-Observables completes.</span>
     *
     * <img src="./img/combineAll.png" width="100%">
     *
     * Takes an Observable of Observables, and collects all Observables from it.
     * Once the outer Observable completes, it subscribes to all collected
     * Observables and combines their values using the {@link combineLatest}
     * strategy, such that:
     * - Every time an inner Observable emits, the output Observable emits.
     * - When the returned observable emits, it emits all of the latest values by:
     *   - If a `project` function is provided, it is called with each recent value
     *     from each inner Observable in whatever order they arrived, and the result
     *     of the `project` function is what is emitted by the output Observable.
     *   - If there is no `project` function, an array of all of the most recent
     *     values is emitted by the output Observable.
     *
     * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var higherOrder = clicks.map(ev =>
     *   Rx.Observable.interval(Math.random()*2000).take(3)
     * ).take(2);
     * var result = higherOrder.combineAll();
     * result.subscribe(x => console.log(x));
     *
     * @see {@link combineLatest}
     * @see {@link mergeAll}
     *
     * @param {function} [project] An optional function to map the most recent
     * values from each inner Observable into a new result. Takes each of the most
     * recent values from each collected inner Observable as arguments, in order.
     * @return {Observable} An Observable of projected results or arrays of recent
     * values.
     * @method combineAll
     * @owner Observable
     */
    function combineAll(project) {
        return this.lift(new combineLatest_1.CombineLatestOperator(project));
    }
    exports_1("combineAll", combineAll);
    return {
        setters:[
            function (combineLatest_1_1) {
                combineLatest_1 = combineLatest_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2NvbWJpbmVBbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F1Q0c7SUFDSCxvQkFBOEIsT0FBc0M7UUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxxQ0FBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFGRCxtQ0FFQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2NvbWJpbmVBbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbWJpbmVMYXRlc3RPcGVyYXRvcn0gZnJvbSAnLi9jb21iaW5lTGF0ZXN0JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogQ29udmVydHMgYSBoaWdoZXItb3JkZXIgT2JzZXJ2YWJsZSBpbnRvIGEgZmlyc3Qtb3JkZXIgT2JzZXJ2YWJsZSBieSB3YWl0aW5nXG4gKiBmb3IgdGhlIG91dGVyIE9ic2VydmFibGUgdG8gY29tcGxldGUsIHRoZW4gYXBwbHlpbmcge0BsaW5rIGNvbWJpbmVMYXRlc3R9LlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5GbGF0dGVucyBhbiBPYnNlcnZhYmxlLW9mLU9ic2VydmFibGVzIGJ5IGFwcGx5aW5nXG4gKiB7QGxpbmsgY29tYmluZUxhdGVzdH0gd2hlbiB0aGUgT2JzZXJ2YWJsZS1vZi1PYnNlcnZhYmxlcyBjb21wbGV0ZXMuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvY29tYmluZUFsbC5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBUYWtlcyBhbiBPYnNlcnZhYmxlIG9mIE9ic2VydmFibGVzLCBhbmQgY29sbGVjdHMgYWxsIE9ic2VydmFibGVzIGZyb20gaXQuXG4gKiBPbmNlIHRoZSBvdXRlciBPYnNlcnZhYmxlIGNvbXBsZXRlcywgaXQgc3Vic2NyaWJlcyB0byBhbGwgY29sbGVjdGVkXG4gKiBPYnNlcnZhYmxlcyBhbmQgY29tYmluZXMgdGhlaXIgdmFsdWVzIHVzaW5nIHRoZSB7QGxpbmsgY29tYmluZUxhdGVzdH1cbiAqIHN0cmF0ZWd5LCBzdWNoIHRoYXQ6XG4gKiAtIEV2ZXJ5IHRpbWUgYW4gaW5uZXIgT2JzZXJ2YWJsZSBlbWl0cywgdGhlIG91dHB1dCBPYnNlcnZhYmxlIGVtaXRzLlxuICogLSBXaGVuIHRoZSByZXR1cm5lZCBvYnNlcnZhYmxlIGVtaXRzLCBpdCBlbWl0cyBhbGwgb2YgdGhlIGxhdGVzdCB2YWx1ZXMgYnk6XG4gKiAgIC0gSWYgYSBgcHJvamVjdGAgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIGl0IGlzIGNhbGxlZCB3aXRoIGVhY2ggcmVjZW50IHZhbHVlXG4gKiAgICAgZnJvbSBlYWNoIGlubmVyIE9ic2VydmFibGUgaW4gd2hhdGV2ZXIgb3JkZXIgdGhleSBhcnJpdmVkLCBhbmQgdGhlIHJlc3VsdFxuICogICAgIG9mIHRoZSBgcHJvamVjdGAgZnVuY3Rpb24gaXMgd2hhdCBpcyBlbWl0dGVkIGJ5IHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqICAgLSBJZiB0aGVyZSBpcyBubyBgcHJvamVjdGAgZnVuY3Rpb24sIGFuIGFycmF5IG9mIGFsbCBvZiB0aGUgbW9zdCByZWNlbnRcbiAqICAgICB2YWx1ZXMgaXMgZW1pdHRlZCBieSB0aGUgb3V0cHV0IE9ic2VydmFibGUuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+TWFwIHR3byBjbGljayBldmVudHMgdG8gYSBmaW5pdGUgaW50ZXJ2YWwgT2JzZXJ2YWJsZSwgdGhlbiBhcHBseSBjb21iaW5lQWxsPC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciBoaWdoZXJPcmRlciA9IGNsaWNrcy5tYXAoZXYgPT5cbiAqICAgUnguT2JzZXJ2YWJsZS5pbnRlcnZhbChNYXRoLnJhbmRvbSgpKjIwMDApLnRha2UoMylcbiAqICkudGFrZSgyKTtcbiAqIHZhciByZXN1bHQgPSBoaWdoZXJPcmRlci5jb21iaW5lQWxsKCk7XG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBzZWUge0BsaW5rIGNvbWJpbmVMYXRlc3R9XG4gKiBAc2VlIHtAbGluayBtZXJnZUFsbH1cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbcHJvamVjdF0gQW4gb3B0aW9uYWwgZnVuY3Rpb24gdG8gbWFwIHRoZSBtb3N0IHJlY2VudFxuICogdmFsdWVzIGZyb20gZWFjaCBpbm5lciBPYnNlcnZhYmxlIGludG8gYSBuZXcgcmVzdWx0LiBUYWtlcyBlYWNoIG9mIHRoZSBtb3N0XG4gKiByZWNlbnQgdmFsdWVzIGZyb20gZWFjaCBjb2xsZWN0ZWQgaW5uZXIgT2JzZXJ2YWJsZSBhcyBhcmd1bWVudHMsIGluIG9yZGVyLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSBvZiBwcm9qZWN0ZWQgcmVzdWx0cyBvciBhcnJheXMgb2YgcmVjZW50XG4gKiB2YWx1ZXMuXG4gKiBAbWV0aG9kIGNvbWJpbmVBbGxcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lQWxsPFI+KHByb2plY3Q/OiAoLi4udmFsdWVzOiBBcnJheTxhbnk+KSA9PiBSKTogT2JzZXJ2YWJsZTxSPiB7XG4gIHJldHVybiB0aGlzLmxpZnQobmV3IENvbWJpbmVMYXRlc3RPcGVyYXRvcihwcm9qZWN0KSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tYmluZUFsbFNpZ25hdHVyZTxUPiB7XG4gICgpOiBPYnNlcnZhYmxlPFRbXT47XG4gIDxSPihwcm9qZWN0PzogKC4uLnZhbHVlczogQXJyYXk8VD4pID0+IFIpOiBPYnNlcnZhYmxlPFI+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
