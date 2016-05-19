System.register(['./mergeAll'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mergeAll_1;
    /**
     * Converts a higher-order Observable into a first-order Observable by
     * concatenating the inner Observables in order.
     *
     * <span class="informal">Flattens an Observable-of-Observables by putting one
     * inner Observable after the other.</span>
     *
     * <img src="./img/concatAll.png" width="100%">
     *
     * Joins every Observable emitted by the source (a higher-order Observable), in
     * a serial fashion. It subscribes to each inner Observable only after the
     * previous inner Observable has completed, and merges all of their values into
     * the returned observable.
     *
     * __Warning:__ If the source Observable emits Observables quickly and
     * endlessly, and the inner Observables it emits generally complete slower than
     * the source emits, you can run into memory issues as the incoming Observables
     * collect in an unbounded buffer.
     *
     * Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
     * to `1`.
     *
     * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
     * var firstOrder = higherOrder.concatAll();
     * firstOrder.subscribe(x => console.log(x));
     *
     * @see {@link combineAll}
     * @see {@link concat}
     * @see {@link concatMap}
     * @see {@link concatMapTo}
     * @see {@link exhaust}
     * @see {@link mergeAll}
     * @see {@link switch}
     * @see {@link zipAll}
     *
     * @return {Observable} An Observable emitting values from all the inner
     * Observables concatenated.
     * @method concatAll
     * @owner Observable
     */
    function concatAll() {
        return this.lift(new mergeAll_1.MergeAllOperator(1));
    }
    exports_1("concatAll", concatAll);
    return {
        setters:[
            function (mergeAll_1_1) {
                mergeAll_1 = mergeAll_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2NvbmNhdEFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BeUNHO0lBQ0g7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLDJCQUFnQixDQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUZELGlDQUVDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvY29uY2F0QWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdWJzY3JpYmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtNZXJnZUFsbE9wZXJhdG9yfSBmcm9tICcuL21lcmdlQWxsJztcblxuLyoqXG4gKiBDb252ZXJ0cyBhIGhpZ2hlci1vcmRlciBPYnNlcnZhYmxlIGludG8gYSBmaXJzdC1vcmRlciBPYnNlcnZhYmxlIGJ5XG4gKiBjb25jYXRlbmF0aW5nIHRoZSBpbm5lciBPYnNlcnZhYmxlcyBpbiBvcmRlci5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+RmxhdHRlbnMgYW4gT2JzZXJ2YWJsZS1vZi1PYnNlcnZhYmxlcyBieSBwdXR0aW5nIG9uZVxuICogaW5uZXIgT2JzZXJ2YWJsZSBhZnRlciB0aGUgb3RoZXIuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvY29uY2F0QWxsLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIEpvaW5zIGV2ZXJ5IE9ic2VydmFibGUgZW1pdHRlZCBieSB0aGUgc291cmNlIChhIGhpZ2hlci1vcmRlciBPYnNlcnZhYmxlKSwgaW5cbiAqIGEgc2VyaWFsIGZhc2hpb24uIEl0IHN1YnNjcmliZXMgdG8gZWFjaCBpbm5lciBPYnNlcnZhYmxlIG9ubHkgYWZ0ZXIgdGhlXG4gKiBwcmV2aW91cyBpbm5lciBPYnNlcnZhYmxlIGhhcyBjb21wbGV0ZWQsIGFuZCBtZXJnZXMgYWxsIG9mIHRoZWlyIHZhbHVlcyBpbnRvXG4gKiB0aGUgcmV0dXJuZWQgb2JzZXJ2YWJsZS5cbiAqXG4gKiBfX1dhcm5pbmc6X18gSWYgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGVtaXRzIE9ic2VydmFibGVzIHF1aWNrbHkgYW5kXG4gKiBlbmRsZXNzbHksIGFuZCB0aGUgaW5uZXIgT2JzZXJ2YWJsZXMgaXQgZW1pdHMgZ2VuZXJhbGx5IGNvbXBsZXRlIHNsb3dlciB0aGFuXG4gKiB0aGUgc291cmNlIGVtaXRzLCB5b3UgY2FuIHJ1biBpbnRvIG1lbW9yeSBpc3N1ZXMgYXMgdGhlIGluY29taW5nIE9ic2VydmFibGVzXG4gKiBjb2xsZWN0IGluIGFuIHVuYm91bmRlZCBidWZmZXIuXG4gKlxuICogTm90ZTogYGNvbmNhdEFsbGAgaXMgZXF1aXZhbGVudCB0byBgbWVyZ2VBbGxgIHdpdGggY29uY3VycmVuY3kgcGFyYW1ldGVyIHNldFxuICogdG8gYDFgLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkZvciBlYWNoIGNsaWNrIGV2ZW50LCB0aWNrIGV2ZXJ5IHNlY29uZCBmcm9tIDAgdG8gMywgd2l0aCBubyBjb25jdXJyZW5jeTwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgaGlnaGVyT3JkZXIgPSBjbGlja3MubWFwKGV2ID0+IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCkudGFrZSg0KSk7XG4gKiB2YXIgZmlyc3RPcmRlciA9IGhpZ2hlck9yZGVyLmNvbmNhdEFsbCgpO1xuICogZmlyc3RPcmRlci5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgY29tYmluZUFsbH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdE1hcH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdE1hcFRvfVxuICogQHNlZSB7QGxpbmsgZXhoYXVzdH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlQWxsfVxuICogQHNlZSB7QGxpbmsgc3dpdGNofVxuICogQHNlZSB7QGxpbmsgemlwQWxsfVxuICpcbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgZW1pdHRpbmcgdmFsdWVzIGZyb20gYWxsIHRoZSBpbm5lclxuICogT2JzZXJ2YWJsZXMgY29uY2F0ZW5hdGVkLlxuICogQG1ldGhvZCBjb25jYXRBbGxcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRBbGw8VD4oKTogVCB7XG4gIHJldHVybiB0aGlzLmxpZnQobmV3IE1lcmdlQWxsT3BlcmF0b3I8VD4oMSkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmNhdEFsbFNpZ25hdHVyZTxUPiB7XG4gICgpOiBUO1xuICA8Uj4oKTogU3Vic2NyaWJhYmxlPFI+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
