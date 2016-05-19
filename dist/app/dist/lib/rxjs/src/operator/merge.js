System.register(['../observable/ArrayObservable', './mergeAll', '../util/isScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ArrayObservable_1, mergeAll_1, isScheduler_1;
    /**
     * Creates an output Observable which concurrently emits all values from every
     * given input Observable.
     *
     * <span class="informal">Flattens multiple Observables together by blending
     * their values into one Observable.</span>
     *
     * <img src="./img/merge.png" width="100%">
     *
     * `merge` subscribes to each given input Observable (either the source or an
     * Observable given as argument), and simply forwards (without doing any
     * transformation) all the values from all the input Observables to the output
     * Observable. The output Observable only completes once all input Observables
     * have completed. Any error delivered by an input Observable will be immediately
     * emitted on the output Observable.
     *
     * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var timer = Rx.Observable.interval(1000);
     * var clicksOrTimer = clicks.merge(timer);
     * clicksOrTimer.subscribe(x => console.log(x));
     *
     * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
     * var timer1 = Rx.Observable.interval(1000).take(10);
     * var timer2 = Rx.Observable.interval(2000).take(6);
     * var timer3 = Rx.Observable.interval(500).take(10);
     * var concurrent = 2; // the argument
     * var merged = timer1.merge(timer2, timer3, concurrent);
     * merged.subscribe(x => console.log(x));
     *
     * @see {@link mergeAll}
     * @see {@link mergeMap}
     * @see {@link mergeMapTo}
     * @see {@link mergeScan}
     *
     * @param {Observable} other An input Observable to merge with the source
     * Observable. More than one input Observables may be given as argument.
     * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
     * Observables being subscribed to concurrently.
     * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
     * concurrency of input Observables.
     * @return {Observable} an Observable that emits items that are the result of
     * every input Observable.
     * @method merge
     * @owner Observable
     */
    function merge() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        observables.unshift(this);
        return mergeStatic.apply(this, observables);
    }
    exports_1("merge", merge);
    /* tslint:enable:max-line-length */
    /**
     * Creates an output Observable which concurrently emits all values from every
     * given input Observable.
     *
     * <span class="informal">Flattens multiple Observables together by blending
     * their values into one Observable.</span>
     *
     * <img src="./img/merge.png" width="100%">
     *
     * `merge` subscribes to each given input Observable (as arguments), and simply
     * forwards (without doing any transformation) all the values from all the input
     * Observables to the output Observable. The output Observable only completes
     * once all input Observables have completed. Any error delivered by an input
     * Observable will be immediately emitted on the output Observable.
     *
     * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var timer = Rx.Observable.interval(1000);
     * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
     * clicksOrTimer.subscribe(x => console.log(x));
     *
     * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
     * var timer1 = Rx.Observable.interval(1000).take(10);
     * var timer2 = Rx.Observable.interval(2000).take(6);
     * var timer3 = Rx.Observable.interval(500).take(10);
     * var concurrent = 2; // the argument
     * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
     * merged.subscribe(x => console.log(x));
     *
     * @see {@link mergeAll}
     * @see {@link mergeMap}
     * @see {@link mergeMapTo}
     * @see {@link mergeScan}
     *
     * @param {Observable} input1 An input Observable to merge with others.
     * @param {Observable} input2 An input Observable to merge with others.
     * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
     * Observables being subscribed to concurrently.
     * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
     * concurrency of input Observables.
     * @return {Observable} an Observable that emits items that are the result of
     * every input Observable.
     * @static true
     * @name merge
     * @owner Observable
     */
    function mergeStatic() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        var concurrent = Number.POSITIVE_INFINITY;
        var scheduler = null;
        var last = observables[observables.length - 1];
        if (isScheduler_1.isScheduler(last)) {
            scheduler = observables.pop();
            if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
                concurrent = observables.pop();
            }
        }
        else if (typeof last === 'number') {
            concurrent = observables.pop();
        }
        if (observables.length === 1) {
            return observables[0];
        }
        return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
    }
    exports_1("mergeStatic", mergeStatic);
    return {
        setters:[
            function (ArrayObservable_1_1) {
                ArrayObservable_1 = ArrayObservable_1_1;
            },
            function (mergeAll_1_1) {
                mergeAll_1 = mergeAll_1_1;
            },
            function (isScheduler_1_1) {
                isScheduler_1 = isScheduler_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL21lcmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BNkNHO0lBQ0g7UUFBNEIscUJBQWdFO2FBQWhFLFdBQWdFLENBQWhFLHNCQUFnRSxDQUFoRSxJQUFnRTtZQUFoRSxvQ0FBZ0U7O1FBQzFGLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFIRCx5QkFHQyxDQUFBO0lBb0NELG1DQUFtQztJQUNuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BNkNHO0lBQ0g7UUFBa0MscUJBQWdFO2FBQWhFLFdBQWdFLENBQWhFLHNCQUFnRSxDQUFoRSxJQUFnRTtZQUFoRSxvQ0FBZ0U7O1FBQ2pHLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUMxQyxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUM7UUFDL0IsSUFBSSxJQUFJLEdBQVEsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLENBQUMseUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsU0FBUyxHQUFjLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN6QyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLFVBQVUsR0FBVyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDekMsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQyxVQUFVLEdBQVcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFnQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLGlDQUFlLENBQU0sV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLDJCQUFnQixDQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQWxCRCxxQ0FrQkMsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9tZXJnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZUlucHV0fSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U2NoZWR1bGVyfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHtBcnJheU9ic2VydmFibGV9IGZyb20gJy4uL29ic2VydmFibGUvQXJyYXlPYnNlcnZhYmxlJztcbmltcG9ydCB7TWVyZ2VBbGxPcGVyYXRvcn0gZnJvbSAnLi9tZXJnZUFsbCc7XG5pbXBvcnQge2lzU2NoZWR1bGVyfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIG91dHB1dCBPYnNlcnZhYmxlIHdoaWNoIGNvbmN1cnJlbnRseSBlbWl0cyBhbGwgdmFsdWVzIGZyb20gZXZlcnlcbiAqIGdpdmVuIGlucHV0IE9ic2VydmFibGUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkZsYXR0ZW5zIG11bHRpcGxlIE9ic2VydmFibGVzIHRvZ2V0aGVyIGJ5IGJsZW5kaW5nXG4gKiB0aGVpciB2YWx1ZXMgaW50byBvbmUgT2JzZXJ2YWJsZS48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9tZXJnZS5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBgbWVyZ2VgIHN1YnNjcmliZXMgdG8gZWFjaCBnaXZlbiBpbnB1dCBPYnNlcnZhYmxlIChlaXRoZXIgdGhlIHNvdXJjZSBvciBhblxuICogT2JzZXJ2YWJsZSBnaXZlbiBhcyBhcmd1bWVudCksIGFuZCBzaW1wbHkgZm9yd2FyZHMgKHdpdGhvdXQgZG9pbmcgYW55XG4gKiB0cmFuc2Zvcm1hdGlvbikgYWxsIHRoZSB2YWx1ZXMgZnJvbSBhbGwgdGhlIGlucHV0IE9ic2VydmFibGVzIHRvIHRoZSBvdXRwdXRcbiAqIE9ic2VydmFibGUuIFRoZSBvdXRwdXQgT2JzZXJ2YWJsZSBvbmx5IGNvbXBsZXRlcyBvbmNlIGFsbCBpbnB1dCBPYnNlcnZhYmxlc1xuICogaGF2ZSBjb21wbGV0ZWQuIEFueSBlcnJvciBkZWxpdmVyZWQgYnkgYW4gaW5wdXQgT2JzZXJ2YWJsZSB3aWxsIGJlIGltbWVkaWF0ZWx5XG4gKiBlbWl0dGVkIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NZXJnZSB0b2dldGhlciB0d28gT2JzZXJ2YWJsZXM6IDFzIGludGVydmFsIGFuZCBjbGlja3M8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIHRpbWVyID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKTtcbiAqIHZhciBjbGlja3NPclRpbWVyID0gY2xpY2tzLm1lcmdlKHRpbWVyKTtcbiAqIGNsaWNrc09yVGltZXIuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk1lcmdlIHRvZ2V0aGVyIDMgT2JzZXJ2YWJsZXMsIGJ1dCBvbmx5IDIgcnVuIGNvbmN1cnJlbnRseTwvY2FwdGlvbj5cbiAqIHZhciB0aW1lcjEgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApLnRha2UoMTApO1xuICogdmFyIHRpbWVyMiA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMjAwMCkudGFrZSg2KTtcbiAqIHZhciB0aW1lcjMgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDUwMCkudGFrZSgxMCk7XG4gKiB2YXIgY29uY3VycmVudCA9IDI7IC8vIHRoZSBhcmd1bWVudFxuICogdmFyIG1lcmdlZCA9IHRpbWVyMS5tZXJnZSh0aW1lcjIsIHRpbWVyMywgY29uY3VycmVudCk7XG4gKiBtZXJnZWQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBzZWUge0BsaW5rIG1lcmdlQWxsfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VNYXB9XG4gKiBAc2VlIHtAbGluayBtZXJnZU1hcFRvfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VTY2FufVxuICpcbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZX0gb3RoZXIgQW4gaW5wdXQgT2JzZXJ2YWJsZSB0byBtZXJnZSB3aXRoIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUuIE1vcmUgdGhhbiBvbmUgaW5wdXQgT2JzZXJ2YWJsZXMgbWF5IGJlIGdpdmVuIGFzIGFyZ3VtZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IFtjb25jdXJyZW50PU51bWJlci5QT1NJVElWRV9JTkZJTklUWV0gTWF4aW11bSBudW1iZXIgb2YgaW5wdXRcbiAqIE9ic2VydmFibGVzIGJlaW5nIHN1YnNjcmliZWQgdG8gY29uY3VycmVudGx5LlxuICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXI9bnVsbF0gVGhlIFNjaGVkdWxlciB0byB1c2UgZm9yIG1hbmFnaW5nXG4gKiBjb25jdXJyZW5jeSBvZiBpbnB1dCBPYnNlcnZhYmxlcy5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBpdGVtcyB0aGF0IGFyZSB0aGUgcmVzdWx0IG9mXG4gKiBldmVyeSBpbnB1dCBPYnNlcnZhYmxlLlxuICogQG1ldGhvZCBtZXJnZVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlPFQsIFI+KC4uLm9ic2VydmFibGVzOiBBcnJheTxPYnNlcnZhYmxlSW5wdXQ8YW55PiB8IFNjaGVkdWxlciB8IG51bWJlcj4pOiBPYnNlcnZhYmxlPFI+IHtcbiAgb2JzZXJ2YWJsZXMudW5zaGlmdCh0aGlzKTtcbiAgcmV0dXJuIG1lcmdlU3RhdGljLmFwcGx5KHRoaXMsIG9ic2VydmFibGVzKTtcbn1cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5leHBvcnQgaW50ZXJmYWNlIE1lcmdlU2lnbmF0dXJlPFQ+IHtcbiAgKHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VD47XG4gIChjb25jdXJyZW50PzogbnVtYmVyLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQ+O1xuICA8VDI+KHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQgfCBUMj47XG4gIDxUMj4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIGNvbmN1cnJlbnQ/OiBudW1iZXIsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VCB8IFQyPjtcbiAgPFQyLCBUMz4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzPjtcbiAgPFQyLCBUMz4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCBjb25jdXJyZW50PzogbnVtYmVyLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzPjtcbiAgPFQyLCBUMywgVDQ+KHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4sIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VCB8IFQyIHwgVDMgfCBUND47XG4gIDxUMiwgVDMsIFQ0Pih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCBjb25jdXJyZW50PzogbnVtYmVyLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzIHwgVDQ+O1xuICA8VDIsIFQzLCBUNCwgVDU+KHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4sIHY1OiBPYnNlcnZhYmxlSW5wdXQ8VDU+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzIHwgVDQgfCBUNT47XG4gIDxUMiwgVDMsIFQ0LCBUNT4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgdjU6IE9ic2VydmFibGVJbnB1dDxUNT4sIGNvbmN1cnJlbnQ/OiBudW1iZXIsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VCB8IFQyIHwgVDMgfCBUNCB8IFQ1PjtcbiAgPFQyLCBUMywgVDQsIFQ1LCBUNj4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgdjU6IE9ic2VydmFibGVJbnB1dDxUNT4sIHY2OiBPYnNlcnZhYmxlSW5wdXQ8VDY+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzIHwgVDQgfCBUNSB8IFQ2PjtcbiAgPFQyLCBUMywgVDQsIFQ1LCBUNj4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgdjU6IE9ic2VydmFibGVJbnB1dDxUNT4sIHY2OiBPYnNlcnZhYmxlSW5wdXQ8VDY+LCBjb25jdXJyZW50PzogbnVtYmVyLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzIHwgVDQgfCBUNSB8IFQ2PjtcbiAgKC4uLm9ic2VydmFibGVzOiBBcnJheTxPYnNlcnZhYmxlSW5wdXQ8VD4gfCBTY2hlZHVsZXIgfCBudW1iZXI+KTogT2JzZXJ2YWJsZTxUPjtcbiAgPFI+KC4uLm9ic2VydmFibGVzOiBBcnJheTxPYnNlcnZhYmxlSW5wdXQ8YW55PiB8IFNjaGVkdWxlciB8IG51bWJlcj4pOiBPYnNlcnZhYmxlPFI+O1xufVxuLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdGF0aWM8VD4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUPjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0YXRpYzxUPih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCBjb25jdXJyZW50PzogbnVtYmVyLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3RhdGljPFQsIFQyPih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUIHwgVDI+O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3RhdGljPFQsIFQyPih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgY29uY3VycmVudD86IG51bWJlciwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUIHwgVDI+O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3RhdGljPFQsIFQyLCBUMz4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzPjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0YXRpYzxULCBUMiwgVDM+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgY29uY3VycmVudD86IG51bWJlciwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUIHwgVDIgfCBUMz47XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdGF0aWM8VCwgVDIsIFQzLCBUND4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0Piwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUIHwgVDIgfCBUMyB8IFQ0PjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0YXRpYzxULCBUMiwgVDMsIFQ0Pih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCBjb25jdXJyZW50PzogbnVtYmVyLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzIHwgVDQ+O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3RhdGljPFQsIFQyLCBUMywgVDQsIFQ1Pih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1Piwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUIHwgVDIgfCBUMyB8IFQ0IHwgVDU+O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3RhdGljPFQsIFQyLCBUMywgVDQsIFQ1Pih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1PiwgY29uY3VycmVudD86IG51bWJlciwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUIHwgVDIgfCBUMyB8IFQ0IHwgVDU+O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3RhdGljPFQsIFQyLCBUMywgVDQsIFQ1LCBUNj4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgdjU6IE9ic2VydmFibGVJbnB1dDxUNT4sIHY2OiBPYnNlcnZhYmxlSW5wdXQ8VDY+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzIHwgVDQgfCBUNSB8IFQ2PjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0YXRpYzxULCBUMiwgVDMsIFQ0LCBUNSwgVDY+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4sIHY1OiBPYnNlcnZhYmxlSW5wdXQ8VDU+LCB2NjogT2JzZXJ2YWJsZUlucHV0PFQ2PiwgY29uY3VycmVudD86IG51bWJlciwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUIHwgVDIgfCBUMyB8IFQ0IHwgVDUgfCBUNj47XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdGF0aWM8VD4oLi4ub2JzZXJ2YWJsZXM6IChPYnNlcnZhYmxlSW5wdXQ8VD4gfCBTY2hlZHVsZXIgfCBudW1iZXIpW10pOiBPYnNlcnZhYmxlPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3RhdGljPFQsIFI+KC4uLm9ic2VydmFibGVzOiAoT2JzZXJ2YWJsZUlucHV0PGFueT4gfCBTY2hlZHVsZXIgfCBudW1iZXIpW10pOiBPYnNlcnZhYmxlPFI+O1xuLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbi8qKlxuICogQ3JlYXRlcyBhbiBvdXRwdXQgT2JzZXJ2YWJsZSB3aGljaCBjb25jdXJyZW50bHkgZW1pdHMgYWxsIHZhbHVlcyBmcm9tIGV2ZXJ5XG4gKiBnaXZlbiBpbnB1dCBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5GbGF0dGVucyBtdWx0aXBsZSBPYnNlcnZhYmxlcyB0b2dldGhlciBieSBibGVuZGluZ1xuICogdGhlaXIgdmFsdWVzIGludG8gb25lIE9ic2VydmFibGUuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvbWVyZ2UucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogYG1lcmdlYCBzdWJzY3JpYmVzIHRvIGVhY2ggZ2l2ZW4gaW5wdXQgT2JzZXJ2YWJsZSAoYXMgYXJndW1lbnRzKSwgYW5kIHNpbXBseVxuICogZm9yd2FyZHMgKHdpdGhvdXQgZG9pbmcgYW55IHRyYW5zZm9ybWF0aW9uKSBhbGwgdGhlIHZhbHVlcyBmcm9tIGFsbCB0aGUgaW5wdXRcbiAqIE9ic2VydmFibGVzIHRvIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS4gVGhlIG91dHB1dCBPYnNlcnZhYmxlIG9ubHkgY29tcGxldGVzXG4gKiBvbmNlIGFsbCBpbnB1dCBPYnNlcnZhYmxlcyBoYXZlIGNvbXBsZXRlZC4gQW55IGVycm9yIGRlbGl2ZXJlZCBieSBhbiBpbnB1dFxuICogT2JzZXJ2YWJsZSB3aWxsIGJlIGltbWVkaWF0ZWx5IGVtaXR0ZWQgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk1lcmdlIHRvZ2V0aGVyIHR3byBPYnNlcnZhYmxlczogMXMgaW50ZXJ2YWwgYW5kIGNsaWNrczwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgdGltZXIgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApO1xuICogdmFyIGNsaWNrc09yVGltZXIgPSBSeC5PYnNlcnZhYmxlLm1lcmdlKGNsaWNrcywgdGltZXIpO1xuICogY2xpY2tzT3JUaW1lci5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+TWVyZ2UgdG9nZXRoZXIgMyBPYnNlcnZhYmxlcywgYnV0IG9ubHkgMiBydW4gY29uY3VycmVudGx5PC9jYXB0aW9uPlxuICogdmFyIHRpbWVyMSA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCkudGFrZSgxMCk7XG4gKiB2YXIgdGltZXIyID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgyMDAwKS50YWtlKDYpO1xuICogdmFyIHRpbWVyMyA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoNTAwKS50YWtlKDEwKTtcbiAqIHZhciBjb25jdXJyZW50ID0gMjsgLy8gdGhlIGFyZ3VtZW50XG4gKiB2YXIgbWVyZ2VkID0gUnguT2JzZXJ2YWJsZS5tZXJnZSh0aW1lcjEsIHRpbWVyMiwgdGltZXIzLCBjb25jdXJyZW50KTtcbiAqIG1lcmdlZC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgbWVyZ2VBbGx9XG4gKiBAc2VlIHtAbGluayBtZXJnZU1hcH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlTWFwVG99XG4gKiBAc2VlIHtAbGluayBtZXJnZVNjYW59XG4gKlxuICogQHBhcmFtIHtPYnNlcnZhYmxlfSBpbnB1dDEgQW4gaW5wdXQgT2JzZXJ2YWJsZSB0byBtZXJnZSB3aXRoIG90aGVycy5cbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZX0gaW5wdXQyIEFuIGlucHV0IE9ic2VydmFibGUgdG8gbWVyZ2Ugd2l0aCBvdGhlcnMuXG4gKiBAcGFyYW0ge251bWJlcn0gW2NvbmN1cnJlbnQ9TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXSBNYXhpbXVtIG51bWJlciBvZiBpbnB1dFxuICogT2JzZXJ2YWJsZXMgYmVpbmcgc3Vic2NyaWJlZCB0byBjb25jdXJyZW50bHkuXG4gKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcj1udWxsXSBUaGUgU2NoZWR1bGVyIHRvIHVzZSBmb3IgbWFuYWdpbmdcbiAqIGNvbmN1cnJlbmN5IG9mIGlucHV0IE9ic2VydmFibGVzLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGl0ZW1zIHRoYXQgYXJlIHRoZSByZXN1bHQgb2ZcbiAqIGV2ZXJ5IGlucHV0IE9ic2VydmFibGUuXG4gKiBAc3RhdGljIHRydWVcbiAqIEBuYW1lIG1lcmdlXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdGF0aWM8VCwgUj4oLi4ub2JzZXJ2YWJsZXM6IEFycmF5PE9ic2VydmFibGVJbnB1dDxhbnk+IHwgU2NoZWR1bGVyIHwgbnVtYmVyPik6IE9ic2VydmFibGU8Uj4ge1xuIGxldCBjb25jdXJyZW50ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuIGxldCBzY2hlZHVsZXI6IFNjaGVkdWxlciA9IG51bGw7XG4gIGxldCBsYXN0OiBhbnkgPSBvYnNlcnZhYmxlc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXTtcbiAgaWYgKGlzU2NoZWR1bGVyKGxhc3QpKSB7XG4gICAgc2NoZWR1bGVyID0gPFNjaGVkdWxlcj5vYnNlcnZhYmxlcy5wb3AoKTtcbiAgICBpZiAob2JzZXJ2YWJsZXMubGVuZ3RoID4gMSAmJiB0eXBlb2Ygb2JzZXJ2YWJsZXNbb2JzZXJ2YWJsZXMubGVuZ3RoIC0gMV0gPT09ICdudW1iZXInKSB7XG4gICAgICBjb25jdXJyZW50ID0gPG51bWJlcj5vYnNlcnZhYmxlcy5wb3AoKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGxhc3QgPT09ICdudW1iZXInKSB7XG4gICAgY29uY3VycmVudCA9IDxudW1iZXI+b2JzZXJ2YWJsZXMucG9wKCk7XG4gIH1cblxuICBpZiAob2JzZXJ2YWJsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIDxPYnNlcnZhYmxlPFI+Pm9ic2VydmFibGVzWzBdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBBcnJheU9ic2VydmFibGUoPGFueT5vYnNlcnZhYmxlcywgc2NoZWR1bGVyKS5saWZ0KG5ldyBNZXJnZUFsbE9wZXJhdG9yPFI+KGNvbmN1cnJlbnQpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
