System.register(['../util/isScheduler', '../observable/ArrayObservable', './mergeAll'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var isScheduler_1, ArrayObservable_1, mergeAll_1;
    /**
     * Creates an output Observable which sequentially emits all values from every
     * given input Observable after the current Observable.
     *
     * <span class="informal">Concatenates multiple Observables together by
     * sequentially emitting their values, one Observable after the other.</span>
     *
     * <img src="./img/concat.png" width="100%">
     *
     * Joins this Observable with multiple other Observables by subscribing to them
     * one at a time, starting with the source, and merging their results into the
     * output Observable. Will wait for each Observable to complete before moving
     * on to the next.
     *
     * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
     * var timer = Rx.Observable.interval(1000).take(4);
     * var sequence = Rx.Observable.range(1, 10);
     * var result = timer.concat(sequence);
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Concatenate 3 Observables</caption>
     * var timer1 = Rx.Observable.interval(1000).take(10);
     * var timer2 = Rx.Observable.interval(2000).take(6);
     * var timer3 = Rx.Observable.interval(500).take(10);
     * var result = timer1.concat(timer2, timer3);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link concatAll}
     * @see {@link concatMap}
     * @see {@link concatMapTo}
     *
     * @param {Observable} other An input Observable to concatenate after the source
     * Observable. More than one input Observables may be given as argument.
     * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
     * Observable subscription on.
     * @return {Observable} All values of each passed Observable merged into a
     * single Observable, in order, in serial fashion.
     * @method concat
     * @owner Observable
     */
    function concat() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        return concatStatic.apply(void 0, [this].concat(observables));
    }
    exports_1("concat", concat);
    /* tslint:enable:max-line-length */
    /**
     * Creates an output Observable which sequentially emits all values from every
     * given input Observable after the current Observable.
     *
     * <span class="informal">Concatenates multiple Observables together by
     * sequentially emitting their values, one Observable after the other.</span>
     *
     * <img src="./img/concat.png" width="100%">
     *
     * Joins multiple Observables together by subscribing to them one at a time and
     * merging their results into the output Observable. Will wait for each
     * Observable to complete before moving on to the next.
     *
     * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
     * var timer = Rx.Observable.interval(1000).take(4);
     * var sequence = Rx.Observable.range(1, 10);
     * var result = Rx.Observable.concat(timer, sequence);
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Concatenate 3 Observables</caption>
     * var timer1 = Rx.Observable.interval(1000).take(10);
     * var timer2 = Rx.Observable.interval(2000).take(6);
     * var timer3 = Rx.Observable.interval(500).take(10);
     * var result = Rx.Observable.concat(timer1, timer2, timer3);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link concatAll}
     * @see {@link concatMap}
     * @see {@link concatMapTo}
     *
     * @param {Observable} input1 An input Observable to concatenate with others.
     * @param {Observable} input2 An input Observable to concatenate with others.
     * More than one input Observables may be given as argument.
     * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
     * Observable subscription on.
     * @return {Observable} All values of each passed Observable merged into a
     * single Observable, in order, in serial fashion.
     * @static true
     * @name concat
     * @owner Observable
     */
    function concatStatic() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        var scheduler = null;
        var args = observables;
        if (isScheduler_1.isScheduler(args[observables.length - 1])) {
            scheduler = args.pop();
        }
        return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
    }
    exports_1("concatStatic", concatStatic);
    return {
        setters:[
            function (isScheduler_1_1) {
                isScheduler_1 = isScheduler_1_1;
            },
            function (ArrayObservable_1_1) {
                ArrayObservable_1 = ArrayObservable_1_1;
            },
            function (mergeAll_1_1) {
                mergeAll_1 = mergeAll_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2NvbmNhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXVDRztJQUNIO1FBQTZCLHFCQUF1RDthQUF2RCxXQUF1RCxDQUF2RCxzQkFBdUQsQ0FBdkQsSUFBdUQ7WUFBdkQsb0NBQXVEOztRQUNsRixNQUFNLENBQUMsWUFBWSxnQkFBTyxJQUFJLFNBQUssV0FBVyxFQUFDLENBQUM7SUFDbEQsQ0FBQztJQUZELDJCQUVDLENBQUE7SUF3QkQsbUNBQW1DO0lBQ25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bd0NHO0lBQ0g7UUFBbUMscUJBQXVEO2FBQXZELFdBQXVELENBQXZELHNCQUF1RCxDQUF2RCxJQUF1RDtZQUF2RCxvQ0FBdUQ7O1FBQ3hGLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQztRQUNoQyxJQUFJLElBQUksR0FBVSxXQUFXLENBQUM7UUFDOUIsRUFBRSxDQUFDLENBQUMseUJBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBZ0IsQ0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFSRCx1Q0FRQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2NvbmNhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZUlucHV0fSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U2NoZWR1bGVyfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHtpc1NjaGVkdWxlcn0gZnJvbSAnLi4vdXRpbC9pc1NjaGVkdWxlcic7XG5pbXBvcnQge0FycmF5T2JzZXJ2YWJsZX0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9BcnJheU9ic2VydmFibGUnO1xuaW1wb3J0IHtNZXJnZUFsbE9wZXJhdG9yfSBmcm9tICcuL21lcmdlQWxsJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIG91dHB1dCBPYnNlcnZhYmxlIHdoaWNoIHNlcXVlbnRpYWxseSBlbWl0cyBhbGwgdmFsdWVzIGZyb20gZXZlcnlcbiAqIGdpdmVuIGlucHV0IE9ic2VydmFibGUgYWZ0ZXIgdGhlIGN1cnJlbnQgT2JzZXJ2YWJsZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+Q29uY2F0ZW5hdGVzIG11bHRpcGxlIE9ic2VydmFibGVzIHRvZ2V0aGVyIGJ5XG4gKiBzZXF1ZW50aWFsbHkgZW1pdHRpbmcgdGhlaXIgdmFsdWVzLCBvbmUgT2JzZXJ2YWJsZSBhZnRlciB0aGUgb3RoZXIuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvY29uY2F0LnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIEpvaW5zIHRoaXMgT2JzZXJ2YWJsZSB3aXRoIG11bHRpcGxlIG90aGVyIE9ic2VydmFibGVzIGJ5IHN1YnNjcmliaW5nIHRvIHRoZW1cbiAqIG9uZSBhdCBhIHRpbWUsIHN0YXJ0aW5nIHdpdGggdGhlIHNvdXJjZSwgYW5kIG1lcmdpbmcgdGhlaXIgcmVzdWx0cyBpbnRvIHRoZVxuICogb3V0cHV0IE9ic2VydmFibGUuIFdpbGwgd2FpdCBmb3IgZWFjaCBPYnNlcnZhYmxlIHRvIGNvbXBsZXRlIGJlZm9yZSBtb3ZpbmdcbiAqIG9uIHRvIHRoZSBuZXh0LlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNvbmNhdGVuYXRlIGEgdGltZXIgY291bnRpbmcgZnJvbSAwIHRvIDMgd2l0aCBhIHN5bmNocm9ub3VzIHNlcXVlbmNlIGZyb20gMSB0byAxMDwvY2FwdGlvbj5cbiAqIHZhciB0aW1lciA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCkudGFrZSg0KTtcbiAqIHZhciBzZXF1ZW5jZSA9IFJ4Lk9ic2VydmFibGUucmFuZ2UoMSwgMTApO1xuICogdmFyIHJlc3VsdCA9IHRpbWVyLmNvbmNhdChzZXF1ZW5jZSk7XG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNvbmNhdGVuYXRlIDMgT2JzZXJ2YWJsZXM8L2NhcHRpb24+XG4gKiB2YXIgdGltZXIxID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKS50YWtlKDEwKTtcbiAqIHZhciB0aW1lcjIgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDIwMDApLnRha2UoNik7XG4gKiB2YXIgdGltZXIzID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCg1MDApLnRha2UoMTApO1xuICogdmFyIHJlc3VsdCA9IHRpbWVyMS5jb25jYXQodGltZXIyLCB0aW1lcjMpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBjb25jYXRBbGx9XG4gKiBAc2VlIHtAbGluayBjb25jYXRNYXB9XG4gKiBAc2VlIHtAbGluayBjb25jYXRNYXBUb31cbiAqXG4gKiBAcGFyYW0ge09ic2VydmFibGV9IG90aGVyIEFuIGlucHV0IE9ic2VydmFibGUgdG8gY29uY2F0ZW5hdGUgYWZ0ZXIgdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZS4gTW9yZSB0aGFuIG9uZSBpbnB1dCBPYnNlcnZhYmxlcyBtYXkgYmUgZ2l2ZW4gYXMgYXJndW1lbnQuXG4gKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcj1udWxsXSBBbiBvcHRpb25hbCBTY2hlZHVsZXIgdG8gc2NoZWR1bGUgZWFjaFxuICogT2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gb24uXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbGwgdmFsdWVzIG9mIGVhY2ggcGFzc2VkIE9ic2VydmFibGUgbWVyZ2VkIGludG8gYVxuICogc2luZ2xlIE9ic2VydmFibGUsIGluIG9yZGVyLCBpbiBzZXJpYWwgZmFzaGlvbi5cbiAqIEBtZXRob2QgY29uY2F0XG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0PFQsIFI+KC4uLm9ic2VydmFibGVzOiBBcnJheTxPYnNlcnZhYmxlSW5wdXQ8YW55PiB8IFNjaGVkdWxlcj4pOiBPYnNlcnZhYmxlPFI+IHtcbiAgcmV0dXJuIGNvbmNhdFN0YXRpYzxULCBSPih0aGlzLCAuLi5vYnNlcnZhYmxlcyk7XG59XG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuZXhwb3J0IGludGVyZmFjZSBDb25jYXRTaWduYXR1cmU8VD4ge1xuICAoc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUPjtcbiAgPFQyPih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUIHwgVDI+O1xuICA8VDIsIFQzPih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VCB8IFQyIHwgVDM+O1xuICA8VDIsIFQzLCBUND4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0Piwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUIHwgVDIgfCBUMyB8IFQ0PjtcbiAgPFQyLCBUMywgVDQsIFQ1Pih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1Piwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUIHwgVDIgfCBUMyB8IFQ0IHwgVDU+O1xuICA8VDIsIFQzLCBUNCwgVDUsIFQ2Pih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1PiwgdjY6IE9ic2VydmFibGVJbnB1dDxUNj4sIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VCB8IFQyIHwgVDMgfCBUNCB8IFQ1IHwgVDY+O1xuICAoLi4ub2JzZXJ2YWJsZXM6IEFycmF5PE9ic2VydmFibGVJbnB1dDxUPiB8IFNjaGVkdWxlcj4pOiBPYnNlcnZhYmxlPFQ+O1xuICA8Uj4oLi4ub2JzZXJ2YWJsZXM6IEFycmF5PE9ic2VydmFibGVJbnB1dDxhbnk+IHwgU2NoZWR1bGVyPik6IE9ic2VydmFibGU8Uj47XG59XG4vKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRTdGF0aWM8VD4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUPjtcbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRTdGF0aWM8VCwgVDI+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQgfCBUMj47XG5leHBvcnQgZnVuY3Rpb24gY29uY2F0U3RhdGljPFQsIFQyLCBUMz4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzPjtcbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRTdGF0aWM8VCwgVDIsIFQzLCBUND4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0Piwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUIHwgVDIgfCBUMyB8IFQ0PjtcbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRTdGF0aWM8VCwgVDIsIFQzLCBUNCwgVDU+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4sIHY1OiBPYnNlcnZhYmxlSW5wdXQ8VDU+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzIHwgVDQgfCBUNT47XG5leHBvcnQgZnVuY3Rpb24gY29uY2F0U3RhdGljPFQsIFQyLCBUMywgVDQsIFQ1LCBUNj4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgdjU6IE9ic2VydmFibGVJbnB1dDxUNT4sIHY2OiBPYnNlcnZhYmxlSW5wdXQ8VDY+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzIHwgVDQgfCBUNSB8IFQ2PjtcbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRTdGF0aWM8VD4oLi4ub2JzZXJ2YWJsZXM6IChPYnNlcnZhYmxlSW5wdXQ8VD4gfCBTY2hlZHVsZXIpW10pOiBPYnNlcnZhYmxlPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdFN0YXRpYzxULCBSPiguLi5vYnNlcnZhYmxlczogKE9ic2VydmFibGVJbnB1dDxhbnk+IHwgU2NoZWR1bGVyKVtdKTogT2JzZXJ2YWJsZTxSPjtcbi8qIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoICovXG4vKipcbiAqIENyZWF0ZXMgYW4gb3V0cHV0IE9ic2VydmFibGUgd2hpY2ggc2VxdWVudGlhbGx5IGVtaXRzIGFsbCB2YWx1ZXMgZnJvbSBldmVyeVxuICogZ2l2ZW4gaW5wdXQgT2JzZXJ2YWJsZSBhZnRlciB0aGUgY3VycmVudCBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5Db25jYXRlbmF0ZXMgbXVsdGlwbGUgT2JzZXJ2YWJsZXMgdG9nZXRoZXIgYnlcbiAqIHNlcXVlbnRpYWxseSBlbWl0dGluZyB0aGVpciB2YWx1ZXMsIG9uZSBPYnNlcnZhYmxlIGFmdGVyIHRoZSBvdGhlci48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9jb25jYXQucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogSm9pbnMgbXVsdGlwbGUgT2JzZXJ2YWJsZXMgdG9nZXRoZXIgYnkgc3Vic2NyaWJpbmcgdG8gdGhlbSBvbmUgYXQgYSB0aW1lIGFuZFxuICogbWVyZ2luZyB0aGVpciByZXN1bHRzIGludG8gdGhlIG91dHB1dCBPYnNlcnZhYmxlLiBXaWxsIHdhaXQgZm9yIGVhY2hcbiAqIE9ic2VydmFibGUgdG8gY29tcGxldGUgYmVmb3JlIG1vdmluZyBvbiB0byB0aGUgbmV4dC5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Db25jYXRlbmF0ZSBhIHRpbWVyIGNvdW50aW5nIGZyb20gMCB0byAzIHdpdGggYSBzeW5jaHJvbm91cyBzZXF1ZW5jZSBmcm9tIDEgdG8gMTA8L2NhcHRpb24+XG4gKiB2YXIgdGltZXIgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApLnRha2UoNCk7XG4gKiB2YXIgc2VxdWVuY2UgPSBSeC5PYnNlcnZhYmxlLnJhbmdlKDEsIDEwKTtcbiAqIHZhciByZXN1bHQgPSBSeC5PYnNlcnZhYmxlLmNvbmNhdCh0aW1lciwgc2VxdWVuY2UpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Db25jYXRlbmF0ZSAzIE9ic2VydmFibGVzPC9jYXB0aW9uPlxuICogdmFyIHRpbWVyMSA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCkudGFrZSgxMCk7XG4gKiB2YXIgdGltZXIyID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgyMDAwKS50YWtlKDYpO1xuICogdmFyIHRpbWVyMyA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoNTAwKS50YWtlKDEwKTtcbiAqIHZhciByZXN1bHQgPSBSeC5PYnNlcnZhYmxlLmNvbmNhdCh0aW1lcjEsIHRpbWVyMiwgdGltZXIzKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgY29uY2F0QWxsfVxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwfVxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwVG99XG4gKlxuICogQHBhcmFtIHtPYnNlcnZhYmxlfSBpbnB1dDEgQW4gaW5wdXQgT2JzZXJ2YWJsZSB0byBjb25jYXRlbmF0ZSB3aXRoIG90aGVycy5cbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZX0gaW5wdXQyIEFuIGlucHV0IE9ic2VydmFibGUgdG8gY29uY2F0ZW5hdGUgd2l0aCBvdGhlcnMuXG4gKiBNb3JlIHRoYW4gb25lIGlucHV0IE9ic2VydmFibGVzIG1heSBiZSBnaXZlbiBhcyBhcmd1bWVudC5cbiAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyPW51bGxdIEFuIG9wdGlvbmFsIFNjaGVkdWxlciB0byBzY2hlZHVsZSBlYWNoXG4gKiBPYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBvbi5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFsbCB2YWx1ZXMgb2YgZWFjaCBwYXNzZWQgT2JzZXJ2YWJsZSBtZXJnZWQgaW50byBhXG4gKiBzaW5nbGUgT2JzZXJ2YWJsZSwgaW4gb3JkZXIsIGluIHNlcmlhbCBmYXNoaW9uLlxuICogQHN0YXRpYyB0cnVlXG4gKiBAbmFtZSBjb25jYXRcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRTdGF0aWM8VCwgUj4oLi4ub2JzZXJ2YWJsZXM6IEFycmF5PE9ic2VydmFibGVJbnB1dDxhbnk+IHwgU2NoZWR1bGVyPik6IE9ic2VydmFibGU8Uj4ge1xuICBsZXQgc2NoZWR1bGVyOiBTY2hlZHVsZXIgPSBudWxsO1xuICBsZXQgYXJncyA9IDxhbnlbXT5vYnNlcnZhYmxlcztcbiAgaWYgKGlzU2NoZWR1bGVyKGFyZ3Nbb2JzZXJ2YWJsZXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgc2NoZWR1bGVyID0gYXJncy5wb3AoKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgQXJyYXlPYnNlcnZhYmxlKG9ic2VydmFibGVzLCBzY2hlZHVsZXIpLmxpZnQobmV3IE1lcmdlQWxsT3BlcmF0b3I8Uj4oMSkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
