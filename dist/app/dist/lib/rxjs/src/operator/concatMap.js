System.register(['./mergeMap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mergeMap_1;
    /**
     * Projects each source value to an Observable which is merged in the output
     * Observable, in a serialized fashion waiting for each one to complete before
     * merging the next.
     *
     * <span class="informal">Maps each value to an Observable, then flattens all of
     * these inner Observables using {@link concatAll}.</span>
     *
     * <img src="./img/concatMap.png" width="100%">
     *
     * Returns an Observable that emits items based on applying a function that you
     * supply to each item emitted by the source Observable, where that function
     * returns an (so-called "inner") Observable. Each new inner Observable is
     * concatenated with the previous inner Observable.
     *
     * __Warning:__ if source values arrive endlessly and faster than their
     * corresponding inner Observables can complete, it will result in memory issues
     * as inner Observables amass in an unbounded buffer waiting for their turn to
     * be subscribed to.
     *
     * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
     * to `1`.
     *
     * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
     * result.subscribe(x => console.log(x));
     *
     * @see {@link concat}
     * @see {@link concatAll}
     * @see {@link concatMapTo}
     * @see {@link exhaustMap}
     * @see {@link mergeMap}
     * @see {@link switchMap}
     *
     * @param {function(value: T, ?index: number): Observable} project A function
     * that, when applied to an item emitted by the source Observable, returns an
     * Observable.
     * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
     * A function to produce the value on the output Observable based on the values
     * and the indices of the source (outer) emission and the inner Observable
     * emission. The arguments passed to this function are:
     * - `outerValue`: the value that came from the source
     * - `innerValue`: the value that came from the projected Observable
     * - `outerIndex`: the "index" of the value that came from the source
     * - `innerIndex`: the "index" of the value from the projected Observable
     * @return {Observable} an observable of values merged from the projected
     * Observables as they were subscribed to, one at a time. Optionally, these
     * values may have been projected from a passed `projectResult` argument.
     * @return {Observable} An Observable that emits the result of applying the
     * projection function (and the optional `resultSelector`) to each item emitted
     * by the source Observable and taking values from each projected inner
     * Observable sequentially.
     * @method concatMap
     * @owner Observable
     */
    function concatMap(project, resultSelector) {
        return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
    }
    exports_1("concatMap", concatMap);
    return {
        setters:[
            function (mergeMap_1_1) {
                mergeMap_1 = mergeMap_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2NvbmNhdE1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F1REc7SUFDSCxtQkFBbUMsT0FBeUQsRUFDekQsY0FBNEY7UUFDN0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUhELGlDQUdDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvY29uY2F0TWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZXJnZU1hcE9wZXJhdG9yfSBmcm9tICcuL21lcmdlTWFwJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZUlucHV0fSBmcm9tICcuLi9PYnNlcnZhYmxlJztcblxuLyoqXG4gKiBQcm9qZWN0cyBlYWNoIHNvdXJjZSB2YWx1ZSB0byBhbiBPYnNlcnZhYmxlIHdoaWNoIGlzIG1lcmdlZCBpbiB0aGUgb3V0cHV0XG4gKiBPYnNlcnZhYmxlLCBpbiBhIHNlcmlhbGl6ZWQgZmFzaGlvbiB3YWl0aW5nIGZvciBlYWNoIG9uZSB0byBjb21wbGV0ZSBiZWZvcmVcbiAqIG1lcmdpbmcgdGhlIG5leHQuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPk1hcHMgZWFjaCB2YWx1ZSB0byBhbiBPYnNlcnZhYmxlLCB0aGVuIGZsYXR0ZW5zIGFsbCBvZlxuICogdGhlc2UgaW5uZXIgT2JzZXJ2YWJsZXMgdXNpbmcge0BsaW5rIGNvbmNhdEFsbH0uPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvY29uY2F0TWFwLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGl0ZW1zIGJhc2VkIG9uIGFwcGx5aW5nIGEgZnVuY3Rpb24gdGhhdCB5b3VcbiAqIHN1cHBseSB0byBlYWNoIGl0ZW0gZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUsIHdoZXJlIHRoYXQgZnVuY3Rpb25cbiAqIHJldHVybnMgYW4gKHNvLWNhbGxlZCBcImlubmVyXCIpIE9ic2VydmFibGUuIEVhY2ggbmV3IGlubmVyIE9ic2VydmFibGUgaXNcbiAqIGNvbmNhdGVuYXRlZCB3aXRoIHRoZSBwcmV2aW91cyBpbm5lciBPYnNlcnZhYmxlLlxuICpcbiAqIF9fV2FybmluZzpfXyBpZiBzb3VyY2UgdmFsdWVzIGFycml2ZSBlbmRsZXNzbHkgYW5kIGZhc3RlciB0aGFuIHRoZWlyXG4gKiBjb3JyZXNwb25kaW5nIGlubmVyIE9ic2VydmFibGVzIGNhbiBjb21wbGV0ZSwgaXQgd2lsbCByZXN1bHQgaW4gbWVtb3J5IGlzc3Vlc1xuICogYXMgaW5uZXIgT2JzZXJ2YWJsZXMgYW1hc3MgaW4gYW4gdW5ib3VuZGVkIGJ1ZmZlciB3YWl0aW5nIGZvciB0aGVpciB0dXJuIHRvXG4gKiBiZSBzdWJzY3JpYmVkIHRvLlxuICpcbiAqIE5vdGU6IGBjb25jYXRNYXBgIGlzIGVxdWl2YWxlbnQgdG8gYG1lcmdlTWFwYCB3aXRoIGNvbmN1cnJlbmN5IHBhcmFtZXRlciBzZXRcbiAqIHRvIGAxYC5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Gb3IgZWFjaCBjbGljayBldmVudCwgdGljayBldmVyeSBzZWNvbmQgZnJvbSAwIHRvIDMsIHdpdGggbm8gY29uY3VycmVuY3k8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIHJlc3VsdCA9IGNsaWNrcy5jb25jYXRNYXAoZXYgPT4gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKS50YWtlKDQpKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgY29uY2F0fVxuICogQHNlZSB7QGxpbmsgY29uY2F0QWxsfVxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwVG99XG4gKiBAc2VlIHtAbGluayBleGhhdXN0TWFwfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VNYXB9XG4gKiBAc2VlIHtAbGluayBzd2l0Y2hNYXB9XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbih2YWx1ZTogVCwgP2luZGV4OiBudW1iZXIpOiBPYnNlcnZhYmxlfSBwcm9qZWN0IEEgZnVuY3Rpb25cbiAqIHRoYXQsIHdoZW4gYXBwbGllZCB0byBhbiBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCByZXR1cm5zIGFuXG4gKiBPYnNlcnZhYmxlLlxuICogQHBhcmFtIHtmdW5jdGlvbihvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBJLCBvdXRlckluZGV4OiBudW1iZXIsIGlubmVySW5kZXg6IG51bWJlcik6IGFueX0gW3Jlc3VsdFNlbGVjdG9yXVxuICogQSBmdW5jdGlvbiB0byBwcm9kdWNlIHRoZSB2YWx1ZSBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUgYmFzZWQgb24gdGhlIHZhbHVlc1xuICogYW5kIHRoZSBpbmRpY2VzIG9mIHRoZSBzb3VyY2UgKG91dGVyKSBlbWlzc2lvbiBhbmQgdGhlIGlubmVyIE9ic2VydmFibGVcbiAqIGVtaXNzaW9uLiBUaGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uIGFyZTpcbiAqIC0gYG91dGVyVmFsdWVgOiB0aGUgdmFsdWUgdGhhdCBjYW1lIGZyb20gdGhlIHNvdXJjZVxuICogLSBgaW5uZXJWYWx1ZWA6IHRoZSB2YWx1ZSB0aGF0IGNhbWUgZnJvbSB0aGUgcHJvamVjdGVkIE9ic2VydmFibGVcbiAqIC0gYG91dGVySW5kZXhgOiB0aGUgXCJpbmRleFwiIG9mIHRoZSB2YWx1ZSB0aGF0IGNhbWUgZnJvbSB0aGUgc291cmNlXG4gKiAtIGBpbm5lckluZGV4YDogdGhlIFwiaW5kZXhcIiBvZiB0aGUgdmFsdWUgZnJvbSB0aGUgcHJvamVjdGVkIE9ic2VydmFibGVcbiAqIEByZXR1cm4ge09ic2VydmFibGV9IGFuIG9ic2VydmFibGUgb2YgdmFsdWVzIG1lcmdlZCBmcm9tIHRoZSBwcm9qZWN0ZWRcbiAqIE9ic2VydmFibGVzIGFzIHRoZXkgd2VyZSBzdWJzY3JpYmVkIHRvLCBvbmUgYXQgYSB0aW1lLiBPcHRpb25hbGx5LCB0aGVzZVxuICogdmFsdWVzIG1heSBoYXZlIGJlZW4gcHJvamVjdGVkIGZyb20gYSBwYXNzZWQgYHByb2plY3RSZXN1bHRgIGFyZ3VtZW50LlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSByZXN1bHQgb2YgYXBwbHlpbmcgdGhlXG4gKiBwcm9qZWN0aW9uIGZ1bmN0aW9uIChhbmQgdGhlIG9wdGlvbmFsIGByZXN1bHRTZWxlY3RvcmApIHRvIGVhY2ggaXRlbSBlbWl0dGVkXG4gKiBieSB0aGUgc291cmNlIE9ic2VydmFibGUgYW5kIHRha2luZyB2YWx1ZXMgZnJvbSBlYWNoIHByb2plY3RlZCBpbm5lclxuICogT2JzZXJ2YWJsZSBzZXF1ZW50aWFsbHkuXG4gKiBAbWV0aG9kIGNvbmNhdE1hcFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdE1hcDxULCBJLCBSPihwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+ICBPYnNlcnZhYmxlSW5wdXQ8ST4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFNlbGVjdG9yPzogKG91dGVyVmFsdWU6IFQsIGlubmVyVmFsdWU6IEksIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyKSA9PiBSKSB7XG4gIHJldHVybiB0aGlzLmxpZnQobmV3IE1lcmdlTWFwT3BlcmF0b3IocHJvamVjdCwgcmVzdWx0U2VsZWN0b3IsIDEpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25jYXRNYXBTaWduYXR1cmU8VD4ge1xuICA8Uj4ocHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiAgT2JzZXJ2YWJsZUlucHV0PFI+KTogT2JzZXJ2YWJsZTxSPjtcbiAgPEksIFI+KHByb2plY3Q6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gIE9ic2VydmFibGVJbnB1dDxJPixcbiAgICAgICAgIHJlc3VsdFNlbGVjdG9yOiAob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogSSwgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIpID0+IFIpOiBPYnNlcnZhYmxlPFI+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
