System.register(['./mergeMapTo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mergeMapTo_1;
    /**
     * Projects each source value to the same Observable which is merged multiple
     * times in a serialized fashion on the output Observable.
     *
     * <span class="informal">It's like {@link concatMap}, but maps each value
     * always to the same inner Observable.</span>
     *
     * <img src="./img/concatMapTo.png" width="100%">
     *
     * Maps each source value to the given Observable `innerObservable` regardless
     * of the source value, and then flattens those resulting Observables into one
     * single Observable, which is the output Observable. Each new `innerObservable`
     * instance emitted on the output Observable is concatenated with the previous
     * `innerObservable` instance.
     *
     * __Warning:__ if source values arrive endlessly and faster than their
     * corresponding inner Observables can complete, it will result in memory issues
     * as inner Observables amass in an unbounded buffer waiting for their turn to
     * be subscribed to.
     *
     * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
     * set to `1`.
     *
     * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
     * result.subscribe(x => console.log(x));
     *
     * @see {@link concat}
     * @see {@link concatAll}
     * @see {@link concatMap}
     * @see {@link mergeMapTo}
     * @see {@link switchMapTo}
     *
     * @param {Observable} innerObservable An Observable to replace each value from
     * the source Observable.
     * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
     * A function to produce the value on the output Observable based on the values
     * and the indices of the source (outer) emission and the inner Observable
     * emission. The arguments passed to this function are:
     * - `outerValue`: the value that came from the source
     * - `innerValue`: the value that came from the projected Observable
     * - `outerIndex`: the "index" of the value that came from the source
     * - `innerIndex`: the "index" of the value from the projected Observable
     * @return {Observable} An observable of values merged together by joining the
     * passed observable with itself, one after the other, for each value emitted
     * from the source.
     * @method concatMapTo
     * @owner Observable
     */
    function concatMapTo(innerObservable, resultSelector) {
        return this.lift(new mergeMapTo_1.MergeMapToOperator(innerObservable, resultSelector, 1));
    }
    exports_1("concatMapTo", concatMapTo);
    return {
        setters:[
            function (mergeMapTo_1_1) {
                mergeMapTo_1 = mergeMapTo_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2NvbmNhdE1hcFRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWlERztJQUNILHFCQUFxQyxlQUE4QixFQUM5QixjQUE0RjtRQUMvSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFrQixDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBSEQscUNBR0MsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9jb25jYXRNYXBUby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZUlucHV0fSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7TWVyZ2VNYXBUb09wZXJhdG9yfSBmcm9tICcuL21lcmdlTWFwVG8nO1xuXG4vKipcbiAqIFByb2plY3RzIGVhY2ggc291cmNlIHZhbHVlIHRvIHRoZSBzYW1lIE9ic2VydmFibGUgd2hpY2ggaXMgbWVyZ2VkIG11bHRpcGxlXG4gKiB0aW1lcyBpbiBhIHNlcmlhbGl6ZWQgZmFzaGlvbiBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkl0J3MgbGlrZSB7QGxpbmsgY29uY2F0TWFwfSwgYnV0IG1hcHMgZWFjaCB2YWx1ZVxuICogYWx3YXlzIHRvIHRoZSBzYW1lIGlubmVyIE9ic2VydmFibGUuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvY29uY2F0TWFwVG8ucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogTWFwcyBlYWNoIHNvdXJjZSB2YWx1ZSB0byB0aGUgZ2l2ZW4gT2JzZXJ2YWJsZSBgaW5uZXJPYnNlcnZhYmxlYCByZWdhcmRsZXNzXG4gKiBvZiB0aGUgc291cmNlIHZhbHVlLCBhbmQgdGhlbiBmbGF0dGVucyB0aG9zZSByZXN1bHRpbmcgT2JzZXJ2YWJsZXMgaW50byBvbmVcbiAqIHNpbmdsZSBPYnNlcnZhYmxlLCB3aGljaCBpcyB0aGUgb3V0cHV0IE9ic2VydmFibGUuIEVhY2ggbmV3IGBpbm5lck9ic2VydmFibGVgXG4gKiBpbnN0YW5jZSBlbWl0dGVkIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZSBpcyBjb25jYXRlbmF0ZWQgd2l0aCB0aGUgcHJldmlvdXNcbiAqIGBpbm5lck9ic2VydmFibGVgIGluc3RhbmNlLlxuICpcbiAqIF9fV2FybmluZzpfXyBpZiBzb3VyY2UgdmFsdWVzIGFycml2ZSBlbmRsZXNzbHkgYW5kIGZhc3RlciB0aGFuIHRoZWlyXG4gKiBjb3JyZXNwb25kaW5nIGlubmVyIE9ic2VydmFibGVzIGNhbiBjb21wbGV0ZSwgaXQgd2lsbCByZXN1bHQgaW4gbWVtb3J5IGlzc3Vlc1xuICogYXMgaW5uZXIgT2JzZXJ2YWJsZXMgYW1hc3MgaW4gYW4gdW5ib3VuZGVkIGJ1ZmZlciB3YWl0aW5nIGZvciB0aGVpciB0dXJuIHRvXG4gKiBiZSBzdWJzY3JpYmVkIHRvLlxuICpcbiAqIE5vdGU6IGBjb25jYXRNYXBUb2AgaXMgZXF1aXZhbGVudCB0byBgbWVyZ2VNYXBUb2Agd2l0aCBjb25jdXJyZW5jeSBwYXJhbWV0ZXJcbiAqIHNldCB0byBgMWAuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+Rm9yIGVhY2ggY2xpY2sgZXZlbnQsIHRpY2sgZXZlcnkgc2Vjb25kIGZyb20gMCB0byAzLCB3aXRoIG5vIGNvbmN1cnJlbmN5PC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciByZXN1bHQgPSBjbGlja3MuY29uY2F0TWFwVG8oUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKS50YWtlKDQpKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgY29uY2F0fVxuICogQHNlZSB7QGxpbmsgY29uY2F0QWxsfVxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VNYXBUb31cbiAqIEBzZWUge0BsaW5rIHN3aXRjaE1hcFRvfVxuICpcbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZX0gaW5uZXJPYnNlcnZhYmxlIEFuIE9ic2VydmFibGUgdG8gcmVwbGFjZSBlYWNoIHZhbHVlIGZyb21cbiAqIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24ob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogSSwgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIpOiBhbnl9IFtyZXN1bHRTZWxlY3Rvcl1cbiAqIEEgZnVuY3Rpb24gdG8gcHJvZHVjZSB0aGUgdmFsdWUgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlIGJhc2VkIG9uIHRoZSB2YWx1ZXNcbiAqIGFuZCB0aGUgaW5kaWNlcyBvZiB0aGUgc291cmNlIChvdXRlcikgZW1pc3Npb24gYW5kIHRoZSBpbm5lciBPYnNlcnZhYmxlXG4gKiBlbWlzc2lvbi4gVGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiBhcmU6XG4gKiAtIGBvdXRlclZhbHVlYDogdGhlIHZhbHVlIHRoYXQgY2FtZSBmcm9tIHRoZSBzb3VyY2VcbiAqIC0gYGlubmVyVmFsdWVgOiB0aGUgdmFsdWUgdGhhdCBjYW1lIGZyb20gdGhlIHByb2plY3RlZCBPYnNlcnZhYmxlXG4gKiAtIGBvdXRlckluZGV4YDogdGhlIFwiaW5kZXhcIiBvZiB0aGUgdmFsdWUgdGhhdCBjYW1lIGZyb20gdGhlIHNvdXJjZVxuICogLSBgaW5uZXJJbmRleGA6IHRoZSBcImluZGV4XCIgb2YgdGhlIHZhbHVlIGZyb20gdGhlIHByb2plY3RlZCBPYnNlcnZhYmxlXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIG9mIHZhbHVlcyBtZXJnZWQgdG9nZXRoZXIgYnkgam9pbmluZyB0aGVcbiAqIHBhc3NlZCBvYnNlcnZhYmxlIHdpdGggaXRzZWxmLCBvbmUgYWZ0ZXIgdGhlIG90aGVyLCBmb3IgZWFjaCB2YWx1ZSBlbWl0dGVkXG4gKiBmcm9tIHRoZSBzb3VyY2UuXG4gKiBAbWV0aG9kIGNvbmNhdE1hcFRvXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0TWFwVG88VCwgSSwgUj4oaW5uZXJPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPEk+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFNlbGVjdG9yPzogKG91dGVyVmFsdWU6IFQsIGlubmVyVmFsdWU6IEksIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyKSA9PiBSKTogT2JzZXJ2YWJsZTxSPiB7XG4gIHJldHVybiB0aGlzLmxpZnQobmV3IE1lcmdlTWFwVG9PcGVyYXRvcihpbm5lck9ic2VydmFibGUsIHJlc3VsdFNlbGVjdG9yLCAxKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uY2F0TWFwVG9TaWduYXR1cmU8VD4ge1xuICA8Uj4ob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZUlucHV0PFI+KTogT2JzZXJ2YWJsZTxSPjtcbiAgPEksIFI+KG9ic2VydmFibGU6IE9ic2VydmFibGVJbnB1dDxJPixcbiAgICAgICAgIHJlc3VsdFNlbGVjdG9yOiAob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogSSwgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIpID0+IFIpOiBPYnNlcnZhYmxlPFI+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
