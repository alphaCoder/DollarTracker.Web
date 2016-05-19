System.register(['../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1, subscribeToResult_1;
    var WithLatestFromOperator, WithLatestFromSubscriber;
    /**
     * Combines the source Observable with other Observables to create an Observable
     * whose values are calculated from the latest values of each, only when the
     * source emits.
     *
     * <span class="informal">Whenever the source Observable emits a value, it
     * computes a formula using that value plus the latest values from other input
     * Observables, then emits the output of that formula.</span>
     *
     * <img src="./img/withLatestFrom.png" width="100%">
     *
     * `withLatestFrom` combines each value from the source Observable (the
     * instance) with the latest values from the other input Observables only when
     * the source emits a value, optionally using a `project` function to determine
     * the value to be emitted on the output Observable. All input Observables must
     * emit at least one value before the output Observable will emit a value.
     *
     * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var timer = Rx.Observable.interval(1000);
     * var result = clicks.withLatestFrom(timer);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link combineLatest}
     *
     * @param {Observable} other An input Observable to combine with the source
     * Observable. More than one input Observables may be given as argument.
     * @param {Function} [project] Projection function for combining values
     * together. Receives all values in order of the Observables passed, where the
     * first parameter is a value from the source Observable. (e.g.
     * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
     * passed, arrays will be emitted on the output Observable.
     * @return {Observable} An Observable of projected values from the most recent
     * values from each input Observable, or an array of the most recent values from
     * each input Observable.
     * @method withLatestFrom
     * @owner Observable
     */
    function withLatestFrom() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var project;
        if (typeof args[args.length - 1] === 'function') {
            project = args.pop();
        }
        var observables = args;
        return this.lift(new WithLatestFromOperator(observables, project));
    }
    exports_1("withLatestFrom", withLatestFrom);
    return {
        setters:[
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            /* tslint:enable:max-line-length */
            WithLatestFromOperator = (function () {
                function WithLatestFromOperator(observables, project) {
                    this.observables = observables;
                    this.project = project;
                }
                WithLatestFromOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
                };
                return WithLatestFromOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            WithLatestFromSubscriber = (function (_super) {
                __extends(WithLatestFromSubscriber, _super);
                function WithLatestFromSubscriber(destination, observables, project) {
                    _super.call(this, destination);
                    this.observables = observables;
                    this.project = project;
                    this.toRespond = [];
                    var len = observables.length;
                    this.values = new Array(len);
                    for (var i = 0; i < len; i++) {
                        this.toRespond.push(i);
                    }
                    for (var i = 0; i < len; i++) {
                        var observable = observables[i];
                        this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
                    }
                }
                WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.values[outerIndex] = innerValue;
                    var toRespond = this.toRespond;
                    if (toRespond.length > 0) {
                        var found = toRespond.indexOf(outerIndex);
                        if (found !== -1) {
                            toRespond.splice(found, 1);
                        }
                    }
                };
                WithLatestFromSubscriber.prototype.notifyComplete = function () {
                    // noop
                };
                WithLatestFromSubscriber.prototype._next = function (value) {
                    if (this.toRespond.length === 0) {
                        var args = [value].concat(this.values);
                        if (this.project) {
                            this._tryProject(args);
                        }
                        else {
                            this.destination.next(args);
                        }
                    }
                };
                WithLatestFromSubscriber.prototype._tryProject = function (args) {
                    var result;
                    try {
                        result = this.project.apply(this, args);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    this.destination.next(result);
                };
                return WithLatestFromSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3dpdGhMYXRlc3RGcm9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXFDRztJQUNIO1FBQXFDLGNBQXFFO2FBQXJFLFdBQXFFLENBQXJFLHNCQUFxRSxDQUFyRSxJQUFxRTtZQUFyRSw2QkFBcUU7O1FBQ3hHLElBQUksT0FBWSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNoRCxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxJQUFNLFdBQVcsR0FBc0IsSUFBSSxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksc0JBQXNCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQVBELDJDQU9DLENBQUE7Ozs7Ozs7Ozs7WUFxQkQsbUNBQW1DO1lBRW5DO2dCQUNFLGdDQUFvQixXQUE4QixFQUM5QixPQUE2QztvQkFEN0MsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO29CQUM5QixZQUFPLEdBQVAsT0FBTyxDQUFzQztnQkFDakUsQ0FBQztnQkFFRCxxQ0FBSSxHQUFKLFVBQUssVUFBeUIsRUFBRSxNQUFXO29CQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLHdCQUF3QixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyRyxDQUFDO2dCQUNILDZCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQTZDLDRDQUFxQjtnQkFJaEUsa0NBQVksV0FBMEIs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Q0FBQztnQkFDSCwrQkFBQztZQUFELENBM0RBLEFBMkRDLENBM0Q0QyxpQ0FBZSxHQTJEM0QiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3Ivd2l0aExhdGVzdEZyb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZhYmxlSW5wdXR9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtPdXRlclN1YnNjcmliZXJ9IGZyb20gJy4uL091dGVyU3Vic2NyaWJlcic7XG5pbXBvcnQge0lubmVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vSW5uZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7c3Vic2NyaWJlVG9SZXN1bHR9IGZyb20gJy4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQnO1xuXG4vKipcbiAqIENvbWJpbmVzIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB3aXRoIG90aGVyIE9ic2VydmFibGVzIHRvIGNyZWF0ZSBhbiBPYnNlcnZhYmxlXG4gKiB3aG9zZSB2YWx1ZXMgYXJlIGNhbGN1bGF0ZWQgZnJvbSB0aGUgbGF0ZXN0IHZhbHVlcyBvZiBlYWNoLCBvbmx5IHdoZW4gdGhlXG4gKiBzb3VyY2UgZW1pdHMuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPldoZW5ldmVyIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBlbWl0cyBhIHZhbHVlLCBpdFxuICogY29tcHV0ZXMgYSBmb3JtdWxhIHVzaW5nIHRoYXQgdmFsdWUgcGx1cyB0aGUgbGF0ZXN0IHZhbHVlcyBmcm9tIG90aGVyIGlucHV0XG4gKiBPYnNlcnZhYmxlcywgdGhlbiBlbWl0cyB0aGUgb3V0cHV0IG9mIHRoYXQgZm9ybXVsYS48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy93aXRoTGF0ZXN0RnJvbS5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBgd2l0aExhdGVzdEZyb21gIGNvbWJpbmVzIGVhY2ggdmFsdWUgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUgKHRoZVxuICogaW5zdGFuY2UpIHdpdGggdGhlIGxhdGVzdCB2YWx1ZXMgZnJvbSB0aGUgb3RoZXIgaW5wdXQgT2JzZXJ2YWJsZXMgb25seSB3aGVuXG4gKiB0aGUgc291cmNlIGVtaXRzIGEgdmFsdWUsIG9wdGlvbmFsbHkgdXNpbmcgYSBgcHJvamVjdGAgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lXG4gKiB0aGUgdmFsdWUgdG8gYmUgZW1pdHRlZCBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUuIEFsbCBpbnB1dCBPYnNlcnZhYmxlcyBtdXN0XG4gKiBlbWl0IGF0IGxlYXN0IG9uZSB2YWx1ZSBiZWZvcmUgdGhlIG91dHB1dCBPYnNlcnZhYmxlIHdpbGwgZW1pdCBhIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk9uIGV2ZXJ5IGNsaWNrIGV2ZW50LCBlbWl0IGFuIGFycmF5IHdpdGggdGhlIGxhdGVzdCB0aW1lciBldmVudCBwbHVzIHRoZSBjbGljayBldmVudDwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgdGltZXIgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApO1xuICogdmFyIHJlc3VsdCA9IGNsaWNrcy53aXRoTGF0ZXN0RnJvbSh0aW1lcik7XG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBzZWUge0BsaW5rIGNvbWJpbmVMYXRlc3R9XG4gKlxuICogQHBhcmFtIHtPYnNlcnZhYmxlfSBvdGhlciBBbiBpbnB1dCBPYnNlcnZhYmxlIHRvIGNvbWJpbmUgd2l0aCB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlLiBNb3JlIHRoYW4gb25lIGlucHV0IE9ic2VydmFibGVzIG1heSBiZSBnaXZlbiBhcyBhcmd1bWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcm9qZWN0XSBQcm9qZWN0aW9uIGZ1bmN0aW9uIGZvciBjb21iaW5pbmcgdmFsdWVzXG4gKiB0b2dldGhlci4gUmVjZWl2ZXMgYWxsIHZhbHVlcyBpbiBvcmRlciBvZiB0aGUgT2JzZXJ2YWJsZXMgcGFzc2VkLCB3aGVyZSB0aGVcbiAqIGZpcnN0IHBhcmFtZXRlciBpcyBhIHZhbHVlIGZyb20gdGhlIHNvdXJjZSBPYnNlcnZhYmxlLiAoZS5nLlxuICogYGEud2l0aExhdGVzdEZyb20oYiwgYywgKGExLCBiMSwgYzEpID0+IGExICsgYjEgKyBjMSlgKS4gSWYgdGhpcyBpcyBub3RcbiAqIHBhc3NlZCwgYXJyYXlzIHdpbGwgYmUgZW1pdHRlZCBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIG9mIHByb2plY3RlZCB2YWx1ZXMgZnJvbSB0aGUgbW9zdCByZWNlbnRcbiAqIHZhbHVlcyBmcm9tIGVhY2ggaW5wdXQgT2JzZXJ2YWJsZSwgb3IgYW4gYXJyYXkgb2YgdGhlIG1vc3QgcmVjZW50IHZhbHVlcyBmcm9tXG4gKiBlYWNoIGlucHV0IE9ic2VydmFibGUuXG4gKiBAbWV0aG9kIHdpdGhMYXRlc3RGcm9tXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2l0aExhdGVzdEZyb208VCwgUj4oLi4uYXJnczogQXJyYXk8T2JzZXJ2YWJsZUlucHV0PGFueT4gfCAoKC4uLnZhbHVlczogQXJyYXk8YW55PikgPT4gUik+KTogT2JzZXJ2YWJsZTxSPiB7XG4gIGxldCBwcm9qZWN0OiBhbnk7XG4gIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvamVjdCA9IGFyZ3MucG9wKCk7XG4gIH1cbiAgY29uc3Qgb2JzZXJ2YWJsZXMgPSA8T2JzZXJ2YWJsZTxhbnk+W10+YXJncztcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgV2l0aExhdGVzdEZyb21PcGVyYXRvcihvYnNlcnZhYmxlcywgcHJvamVjdCkpO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbmV4cG9ydCBpbnRlcmZhY2UgV2l0aExhdGVzdEZyb21TaWduYXR1cmU8VD4ge1xuICA8Uj4ocHJvamVjdDogKHYxOiBUKSA9PiBSKTogT2JzZXJ2YWJsZTxSPjtcbiAgPFQyLCBSPih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgcHJvamVjdDogKHYxOiBULCB2MjogVDIpID0+IFIpOiBPYnNlcnZhYmxlPFI+O1xuICA8VDIsIFQzLCBSPih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHByb2plY3Q6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMpID0+IFIpOiBPYnNlcnZhYmxlPFI+O1xuICA8VDIsIFQzLCBUNCwgUj4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgcHJvamVjdDogKHYxOiBULCB2MjogVDIsIHYzOiBUMywgdjQ6IFQ0KSA9PiBSKTogT2JzZXJ2YWJsZTxSPjtcbiAgPFQyLCBUMywgVDQsIFQ1LCBSPih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1PiwgcHJvamVjdDogKHYxOiBULCB2MjogVDIsIHYzOiBUMywgdjQ6IFQ0LCB2NTogVDUpID0+IFIpOiBPYnNlcnZhYmxlPFI+O1xuICA8VDIsIFQzLCBUNCwgVDUsIFQ2LCBSPih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1PiwgdjY6IE9ic2VydmFibGVJbnB1dDxUNj4sIHByb2plY3Q6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCwgdjU6IFQ1LCB2NjogVDYpID0+IFIpOiBPYnNlcnZhYmxlPFI+O1xuXG4gIDxUMj4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4pOiBPYnNlcnZhYmxlPFtULCBUMl0+O1xuICA8VDIsIFQzPih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4pOiBPYnNlcnZhYmxlPFtULCBUMiwgVDNdPjtcbiAgPFQyLCBUMywgVDQ+KHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4pOiBPYnNlcnZhYmxlPFtULCBUMiwgVDMsIFQ0XT47XG4gIDxUMiwgVDMsIFQ0LCBUNT4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgdjU6IE9ic2VydmFibGVJbnB1dDxUNT4pOiBPYnNlcnZhYmxlPFtULCBUMiwgVDMsIFQ0LCBUNV0+O1xuICA8VDIsIFQzLCBUNCwgVDUsIFQ2Pih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1PiwgdjY6IE9ic2VydmFibGVJbnB1dDxUNj4pOiBPYnNlcnZhYmxlPFtULCBUMiwgVDMsIFQ0LCBUNSwgVDZdPjtcblxuICA8Uj4oLi4ub2JzZXJ2YWJsZXM6IEFycmF5PE9ic2VydmFibGVJbnB1dDxhbnk+IHwgKCguLi52YWx1ZXM6IEFycmF5PGFueT4pID0+IFIpPik6IE9ic2VydmFibGU8Uj47XG4gIDxSPihhcnJheTogT2JzZXJ2YWJsZUlucHV0PGFueT5bXSk6IE9ic2VydmFibGU8Uj47XG4gIDxSPihhcnJheTogT2JzZXJ2YWJsZUlucHV0PGFueT5bXSwgcHJvamVjdDogKC4uLnZhbHVlczogQXJyYXk8YW55PikgPT4gUik6IE9ic2VydmFibGU8Uj47XG59XG4vKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG5jbGFzcyBXaXRoTGF0ZXN0RnJvbU9wZXJhdG9yPFQsIFI+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgUj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9ic2VydmFibGVzOiBPYnNlcnZhYmxlPGFueT5bXSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwcm9qZWN0PzogKC4uLnZhbHVlczogYW55W10pID0+IE9ic2VydmFibGU8Uj4pIHtcbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxSPiwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgV2l0aExhdGVzdEZyb21TdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMub2JzZXJ2YWJsZXMsIHRoaXMucHJvamVjdCkpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBXaXRoTGF0ZXN0RnJvbVN1YnNjcmliZXI8VCwgUj4gZXh0ZW5kcyBPdXRlclN1YnNjcmliZXI8VCwgUj4ge1xuICBwcml2YXRlIHZhbHVlczogYW55W107XG4gIHByaXZhdGUgdG9SZXNwb25kOiBudW1iZXJbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFI+LFxuICAgICAgICAgICAgICBwcml2YXRlIG9ic2VydmFibGVzOiBPYnNlcnZhYmxlPGFueT5bXSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwcm9qZWN0PzogKC4uLnZhbHVlczogYW55W10pID0+IE9ic2VydmFibGU8Uj4pIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gICAgY29uc3QgbGVuID0gb2JzZXJ2YWJsZXMubGVuZ3RoO1xuICAgIHRoaXMudmFsdWVzID0gbmV3IEFycmF5KGxlbik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0aGlzLnRvUmVzcG9uZC5wdXNoKGkpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGxldCBvYnNlcnZhYmxlID0gb2JzZXJ2YWJsZXNbaV07XG4gICAgICB0aGlzLmFkZChzdWJzY3JpYmVUb1Jlc3VsdDxULCBSPih0aGlzLCBvYnNlcnZhYmxlLCA8YW55Pm9ic2VydmFibGUsIGkpKTtcbiAgICB9XG4gIH1cblxuICBub3RpZnlOZXh0KG91dGVyVmFsdWU6IFQsIGlubmVyVmFsdWU6IFIsXG4gICAgICAgICAgICAgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIsXG4gICAgICAgICAgICAgaW5uZXJTdWI6IElubmVyU3Vic2NyaWJlcjxULCBSPik6IHZvaWQge1xuICAgIHRoaXMudmFsdWVzW291dGVySW5kZXhdID0gaW5uZXJWYWx1ZTtcbiAgICBjb25zdCB0b1Jlc3BvbmQgPSB0aGlzLnRvUmVzcG9uZDtcbiAgICBpZiAodG9SZXNwb25kLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZvdW5kID0gdG9SZXNwb25kLmluZGV4T2Yob3V0ZXJJbmRleCk7XG4gICAgICBpZiAoZm91bmQgIT09IC0xKSB7XG4gICAgICAgIHRvUmVzcG9uZC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeUNvbXBsZXRlKCkge1xuICAgIC8vIG5vb3BcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCkge1xuICAgIGlmICh0aGlzLnRvUmVzcG9uZC5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbdmFsdWUsIC4uLnRoaXMudmFsdWVzXTtcbiAgICAgIGlmICh0aGlzLnByb2plY3QpIHtcbiAgICAgICAgdGhpcy5fdHJ5UHJvamVjdChhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90cnlQcm9qZWN0KGFyZ3M6IGFueVtdKSB7XG4gICAgbGV0IHJlc3VsdDogYW55O1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnByb2plY3QuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
