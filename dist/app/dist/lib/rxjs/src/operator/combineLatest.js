System.register(['../observable/ArrayObservable', '../util/isArray', '../util/isScheduler', '../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var ArrayObservable_1, isArray_1, isScheduler_1, OuterSubscriber_1, subscribeToResult_1;
    var CombineLatestOperator, CombineLatestSubscriber;
    /**
     * Combines multiple Observables to create an Observable whose values are
     * calculated from the latest values of each of its input Observables.
     *
     * <span class="informal">Whenever any input Observable emits a value, it
     * computes a formula using the latest values from all the inputs, then emits
     * the output of that formula.</span>
     *
     * <img src="./img/combineLatest.png" width="100%">
     *
     * `combineLatest` combines the values from this Observable with values from
     * Observables passed as arguments. This is done by subscribing to each
     * Observable, in order, and collecting an array of each of the most recent
     * values any time any of the input Observables emits, then either taking that
     * array and passing it as arguments to an optional `project` function and
     * emitting the return value of that, or just emitting the array of recent
     * values directly if there is no `project` function.
     *
     * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
     * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
     * var height = Rx.Observable.of(1.76, 1.77, 1.78);
     * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
     * bmi.subscribe(x => console.log('BMI is ' + x));
     *
     * @see {@link combineAll}
     * @see {@link merge}
     * @see {@link withLatestFrom}
     *
     * @param {Observable} other An input Observable to combine with the source
     * Observable. More than one input Observables may be given as argument.
     * @param {function} [project] An optional function to project the values from
     * the combined latest values into a new value on the output Observable.
     * @return {Observable} An Observable of projected values from the most recent
     * values from each input Observable, or an array of the most recent values from
     * each input Observable.
     * @method combineLatest
     * @owner Observable
     */
    function combineLatest() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        var project = null;
        if (typeof observables[observables.length - 1] === 'function') {
            project = observables.pop();
        }
        // if the first and only other argument besides the resultSelector is an array
        // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
        if (observables.length === 1 && isArray_1.isArray(observables[0])) {
            observables = observables[0];
        }
        observables.unshift(this);
        return new ArrayObservable_1.ArrayObservable(observables).lift(new CombineLatestOperator(project));
    }
    exports_1("combineLatest", combineLatest);
    /* tslint:enable:max-line-length */
    /**
     * Combines the values from observables passed as arguments. This is done by subscribing
     * to each observable, in order, and collecting an array of each of the most recent values any time any of the observables
     * emits, then either taking that array and passing it as arguments to an option `project` function and emitting the return
     * value of that, or just emitting the array of recent values directly if there is no `project` function.
     * @param {...Observable} observables the observables to combine
     * @param {function} [project] an optional function to project the values from the combined recent values into a new value for emission.
     * @return {Observable} an observable of other projected values from the most recent values from each observable, or an array of each of
     * the most recent values from each observable.
     * @static true
     * @name combineLatest
     * @owner Observable
     */
    function combineLatestStatic() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        var project = null;
        var scheduler = null;
        if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
            scheduler = observables.pop();
        }
        if (typeof observables[observables.length - 1] === 'function') {
            project = observables.pop();
        }
        // if the first and only other argument besides the resultSelector is an array
        // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
        if (observables.length === 1 && isArray_1.isArray(observables[0])) {
            observables = observables[0];
        }
        return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new CombineLatestOperator(project));
    }
    exports_1("combineLatestStatic", combineLatestStatic);
    return {
        setters:[
            function (ArrayObservable_1_1) {
                ArrayObservable_1 = ArrayObservable_1_1;
            },
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
            },
            function (isScheduler_1_1) {
                isScheduler_1 = isScheduler_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            CombineLatestOperator = (function () {
                function CombineLatestOperator(project) {
                    this.project = project;
                }
                CombineLatestOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new CombineLatestSubscriber(subscriber, this.project));
                };
                return CombineLatestOperator;
            }());
            exports_1("CombineLatestOperator", CombineLatestOperator);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            CombineLatestSubscriber = (function (_super) {
                __extends(CombineLatestSubscriber, _super);
                function CombineLatestSubscriber(destination, project) {
                    _super.call(this, destination);
                    this.project = project;
                    this.active = 0;
                    this.values = [];
                    this.observables = [];
                    this.toRespond = [];
                }
                CombineLatestSubscriber.prototype._next = function (observable) {
                    var toRespond = this.toRespond;
                    toRespond.push(toRespond.length);
                    this.observables.push(observable);
                };
                CombineLatestSubscriber.prototype._complete = function () {
                    var observables = this.observables;
                    var len = observables.length;
                    if (len === 0) {
                        this.destination.complete();
                    }
                    else {
                        this.active = len;
                        for (var i = 0; i < len; i++) {
                            var observable = observables[i];
                            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
                        }
                    }
                };
                CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
                    if ((this.active -= 1) === 0) {
                        this.destination.complete();
                    }
                };
                CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    var values = this.values;
                    values[outerIndex] = innerValue;
                    var toRespond = this.toRespond;
                    if (toRespond.length > 0) {
                        var found = toRespond.indexOf(outerIndex);
                        if (found !== -1) {
                            toRespond.splice(found, 1);
                        }
                    }
                    if (toRespond.length === 0) {
                        if (this.project) {
                            this._tryProject(values);
                        }
                        else {
                            this.destination.next(values);
                        }
                    }
                };
                CombineLatestSubscriber.prototype._tryProject = function (values) {
                    var result;
                    try {
                        result = this.project.apply(this, values);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    this.destination.next(result);
                };
                return CombineLatestSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
            exports_1("CombineLatestSubscriber", CombineLatestSubscriber);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2NvbWJpbmVMYXRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BcUNHO0lBQ0g7UUFBb0MscUJBRWtEO2FBRmxELFdBRWtELENBRmxELHNCQUVrRCxDQUZsRCxJQUVrRDtZQUZsRCxvQ0FFa0Q7O1FBQ3BGLElBQUksT0FBTyxHQUFpQyxJQUFJLENBQUM7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzlELE9BQU8sR0FBaUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVELENBQUM7UUFFRCw4RUFBOEU7UUFDOUUsNEVBQTRFO1FBQzVFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELFdBQVcsR0FBUSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUVELFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUIsTUFBTSxDQUFDLElBQUksaUNBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFqQkQseUNBaUJDLENBQUE7SUF1Q0QsbUNBQW1DO0lBRW5DOzs7Ozs7Ozs7Ozs7T0FZRztJQUNIO1FBQTBDLHFCQUdvQjthQUhwQixXQUdvQixDQUhwQixzQkFHb0IsQ0FIcEIsSUFHb0I7WUFIcEIsb0NBR29COztRQUM1RCxJQUFJLE9BQU8sR0FBa0MsSUFBSSxDQUFDO1FBQ2xELElBQUksU0FBUyxHQUFjLElBQUks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QUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFTyw2Q0FBVyxHQUFuQixVQUFvQixNQUFhO29CQUMvQixJQUFJLE1BQVcsQ0FBQztvQkFDaEIsSUFBSSxDQUFDO3dCQUNILE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzVDLENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDYixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDNUIsTUFBTSxDQUFDO29CQUNULENBQUM7b0JBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBQ0gsOEJBQUM7WUFBRCxDQXJFQSxBQXFFQyxDQXJFa0QsaUNBQWUsR0FxRWpFO1lBckVELDZEQXFFQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2NvbWJpbmVMYXRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIE9ic2VydmFibGVJbnB1dH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0FycmF5T2JzZXJ2YWJsZX0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9BcnJheU9ic2VydmFibGUnO1xuaW1wb3J0IHtpc0FycmF5fSBmcm9tICcuLi91dGlsL2lzQXJyYXknO1xuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge2lzU2NoZWR1bGVyfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge091dGVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vT3V0ZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7SW5uZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9Jbm5lclN1YnNjcmliZXInO1xuaW1wb3J0IHtzdWJzY3JpYmVUb1Jlc3VsdH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCc7XG5cbi8qKlxuICogQ29tYmluZXMgbXVsdGlwbGUgT2JzZXJ2YWJsZXMgdG8gY3JlYXRlIGFuIE9ic2VydmFibGUgd2hvc2UgdmFsdWVzIGFyZVxuICogY2FsY3VsYXRlZCBmcm9tIHRoZSBsYXRlc3QgdmFsdWVzIG9mIGVhY2ggb2YgaXRzIGlucHV0IE9ic2VydmFibGVzLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5XaGVuZXZlciBhbnkgaW5wdXQgT2JzZXJ2YWJsZSBlbWl0cyBhIHZhbHVlLCBpdFxuICogY29tcHV0ZXMgYSBmb3JtdWxhIHVzaW5nIHRoZSBsYXRlc3QgdmFsdWVzIGZyb20gYWxsIHRoZSBpbnB1dHMsIHRoZW4gZW1pdHNcbiAqIHRoZSBvdXRwdXQgb2YgdGhhdCBmb3JtdWxhLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL2NvbWJpbmVMYXRlc3QucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogYGNvbWJpbmVMYXRlc3RgIGNvbWJpbmVzIHRoZSB2YWx1ZXMgZnJvbSB0aGlzIE9ic2VydmFibGUgd2l0aCB2YWx1ZXMgZnJvbVxuICogT2JzZXJ2YWJsZXMgcGFzc2VkIGFzIGFyZ3VtZW50cy4gVGhpcyBpcyBkb25lIGJ5IHN1YnNjcmliaW5nIHRvIGVhY2hcbiAqIE9ic2VydmFibGUsIGluIG9yZGVyLCBhbmQgY29sbGVjdGluZyBhbiBhcnJheSBvZiBlYWNoIG9mIHRoZSBtb3N0IHJlY2VudFxuICogdmFsdWVzIGFueSB0aW1lIGFueSBvZiB0aGUgaW5wdXQgT2JzZXJ2YWJsZXMgZW1pdHMsIHRoZW4gZWl0aGVyIHRha2luZyB0aGF0XG4gKiBhcnJheSBhbmQgcGFzc2luZyBpdCBhcyBhcmd1bWVudHMgdG8gYW4gb3B0aW9uYWwgYHByb2plY3RgIGZ1bmN0aW9uIGFuZFxuICogZW1pdHRpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGF0LCBvciBqdXN0IGVtaXR0aW5nIHRoZSBhcnJheSBvZiByZWNlbnRcbiAqIHZhbHVlcyBkaXJlY3RseSBpZiB0aGVyZSBpcyBubyBgcHJvamVjdGAgZnVuY3Rpb24uXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+RHluYW1pY2FsbHkgY2FsY3VsYXRlIHRoZSBCb2R5LU1hc3MgSW5kZXggZnJvbSBhbiBPYnNlcnZhYmxlIG9mIHdlaWdodCBhbmQgb25lIGZvciBoZWlnaHQ8L2NhcHRpb24+XG4gKiB2YXIgd2VpZ2h0ID0gUnguT2JzZXJ2YWJsZS5vZig3MCwgNzIsIDc2LCA3OSwgNzUpO1xuICogdmFyIGhlaWdodCA9IFJ4Lk9ic2VydmFibGUub2YoMS43NiwgMS43NywgMS43OCk7XG4gKiB2YXIgYm1pID0gd2VpZ2h0LmNvbWJpbmVMYXRlc3QoaGVpZ2h0LCAodywgaCkgPT4gdyAvIChoICogaCkpO1xuICogYm1pLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKCdCTUkgaXMgJyArIHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBjb21iaW5lQWxsfVxuICogQHNlZSB7QGxpbmsgbWVyZ2V9XG4gKiBAc2VlIHtAbGluayB3aXRoTGF0ZXN0RnJvbX1cbiAqXG4gKiBAcGFyYW0ge09ic2VydmFibGV9IG90aGVyIEFuIGlucHV0IE9ic2VydmFibGUgdG8gY29tYmluZSB3aXRoIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUuIE1vcmUgdGhhbiBvbmUgaW5wdXQgT2JzZXJ2YWJsZXMgbWF5IGJlIGdpdmVuIGFzIGFyZ3VtZW50LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW3Byb2plY3RdIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIHByb2plY3QgdGhlIHZhbHVlcyBmcm9tXG4gKiB0aGUgY29tYmluZWQgbGF0ZXN0IHZhbHVlcyBpbnRvIGEgbmV3IHZhbHVlIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgb2YgcHJvamVjdGVkIHZhbHVlcyBmcm9tIHRoZSBtb3N0IHJlY2VudFxuICogdmFsdWVzIGZyb20gZWFjaCBpbnB1dCBPYnNlcnZhYmxlLCBvciBhbiBhcnJheSBvZiB0aGUgbW9zdCByZWNlbnQgdmFsdWVzIGZyb21cbiAqIGVhY2ggaW5wdXQgT2JzZXJ2YWJsZS5cbiAqIEBtZXRob2QgY29tYmluZUxhdGVzdFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8VCwgUj4oLi4ub2JzZXJ2YWJsZXM6IEFycmF5PE9ic2VydmFibGVJbnB1dDxhbnk+IHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheTxPYnNlcnZhYmxlSW5wdXQ8YW55Pj4gfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoLi4udmFsdWVzOiBBcnJheTxhbnk+KSA9PiBSKT4pOiBPYnNlcnZhYmxlPFI+IHtcbiAgbGV0IHByb2plY3Q6ICguLi52YWx1ZXM6IEFycmF5PGFueT4pID0+IFIgPSBudWxsO1xuICBpZiAodHlwZW9mIG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvamVjdCA9IDwoLi4udmFsdWVzOiBBcnJheTxhbnk+KSA9PiBSPm9ic2VydmFibGVzLnBvcCgpO1xuICB9XG5cbiAgLy8gaWYgdGhlIGZpcnN0IGFuZCBvbmx5IG90aGVyIGFyZ3VtZW50IGJlc2lkZXMgdGhlIHJlc3VsdFNlbGVjdG9yIGlzIGFuIGFycmF5XG4gIC8vIGFzc3VtZSBpdCdzIGJlZW4gY2FsbGVkIHdpdGggYGNvbWJpbmVMYXRlc3QoW29iczEsIG9iczIsIG9iczNdLCBwcm9qZWN0KWBcbiAgaWYgKG9ic2VydmFibGVzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KG9ic2VydmFibGVzWzBdKSkge1xuICAgIG9ic2VydmFibGVzID0gPGFueT5vYnNlcnZhYmxlc1swXTtcbiAgfVxuXG4gIG9ic2VydmFibGVzLnVuc2hpZnQodGhpcyk7XG5cbiAgcmV0dXJuIG5ldyBBcnJheU9ic2VydmFibGUob2JzZXJ2YWJsZXMpLmxpZnQobmV3IENvbWJpbmVMYXRlc3RPcGVyYXRvcihwcm9qZWN0KSk7XG59XG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21iaW5lTGF0ZXN0U2lnbmF0dXJlPFQ+IHtcbiAgPFI+KHByb2plY3Q6ICh2MTogVCkgPT4gUik6IE9ic2VydmFibGU8Uj47XG4gIDxUMiwgUj4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHByb2plY3Q6ICh2MTogVCwgdjI6IFQyKSA9PiBSKTogT2JzZXJ2YWJsZTxSPjtcbiAgPFQyLCBUMywgUj4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCBwcm9qZWN0OiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzKSA9PiBSKTogT2JzZXJ2YWJsZTxSPjtcbiAgPFQyLCBUMywgVDQsIFI+KHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4sIHByb2plY3Q6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCkgPT4gUik6IE9ic2VydmFibGU8Uj47XG4gIDxUMiwgVDMsIFQ0LCBUNSwgUj4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgdjU6IE9ic2VydmFibGVJbnB1dDxUNT4sIHByb2plY3Q6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCwgdjU6IFQ1KSA9PiBSKTogT2JzZXJ2YWJsZTxSPjtcbiAgPFQyLCBUMywgVDQsIFQ1LCBUNiwgUj4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgdjU6IE9ic2VydmFibGVJbnB1dDxUNT4sIHY2OiBPYnNlcnZhYmxlSW5wdXQ8VDY+LCBwcm9qZWN0OiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzLCB2NDogVDQsIHY1OiBUNSwgdjY6IFQ2KSA9PiBSKTogT2JzZXJ2YWJsZTxSPjtcblxuICA8VDI+KHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+KTogT2JzZXJ2YWJsZTxbVCwgVDJdPjtcbiAgPFQyLCBUMz4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+KTogT2JzZXJ2YWJsZTxbVCwgVDIsIFQzXT47XG4gIDxUMiwgVDMsIFQ0Pih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+KTogT2JzZXJ2YWJsZTxbVCwgVDIsIFQzLCBUNF0+O1xuICA8VDIsIFQzLCBUNCwgVDU+KHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4sIHY1OiBPYnNlcnZhYmxlSW5wdXQ8VDU+KTogT2JzZXJ2YWJsZTxbVCwgVDIsIFQzLCBUNCwgVDVdPjtcbiAgPFQyLCBUMywgVDQsIFQ1LCBUNj4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgdjU6IE9ic2VydmFibGVJbnB1dDxUNT4sIHY2OiBPYnNlcnZhYmxlSW5wdXQ8VDY+KTogT2JzZXJ2YWJsZTxbVCwgVDIsIFQzLCBUNCwgVDUsIFQ2XT47XG5cbiAgPFI+KC4uLm9ic2VydmFibGVzOiBBcnJheTxPYnNlcnZhYmxlSW5wdXQ8YW55PiB8ICgoLi4udmFsdWVzOiBBcnJheTxhbnk+KSA9PiBSKT4pOiBPYnNlcnZhYmxlPFI+O1xuICA8Uj4oYXJyYXk6IE9ic2VydmFibGVJbnB1dDxhbnk+W10pOiBPYnNlcnZhYmxlPFI+O1xuICA8Uj4oYXJyYXk6IE9ic2VydmFibGVJbnB1dDxhbnk+W10sIHByb2plY3Q6ICguLi52YWx1ZXM6IEFycmF5PGFueT4pID0+IFIpOiBPYnNlcnZhYmxlPFI+O1xufVxuLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdFN0YXRpYzxUPih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFtUXT47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdFN0YXRpYzxULCBUMj4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8W1QsIFQyXT47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdFN0YXRpYzxULCBUMiwgVDM+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxbVCwgVDIsIFQzXT47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdFN0YXRpYzxULCBUMiwgVDMsIFQ0Pih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFtULCBUMiwgVDMsIFQ0XT47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdFN0YXRpYzxULCBUMiwgVDMsIFQ0LCBUNT4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgdjU6IE9ic2VydmFibGVJbnB1dDxUNT4sIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8W1QsIFQyLCBUMywgVDQsIFQ1XT47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdFN0YXRpYzxULCBUMiwgVDMsIFQ0LCBUNSwgVDY+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4sIHY1OiBPYnNlcnZhYmxlSW5wdXQ8VDU+LCB2NjogT2JzZXJ2YWJsZUlucHV0PFQ2Piwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxbVCwgVDIsIFQzLCBUNCwgVDUsIFQ2XT47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdFN0YXRpYzxULCBSPih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCBwcm9qZWN0OiAodjE6IFQpID0+IFIsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8Uj47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdFN0YXRpYzxULCBUMiwgUj4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHByb2plY3Q6ICh2MTogVCwgdjI6IFQyKSA9PiBSLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFI+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3RTdGF0aWM8VCwgVDIsIFQzLCBSPih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHByb2plY3Q6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMpID0+IFIsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8Uj47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdFN0YXRpYzxULCBUMiwgVDMsIFQ0LCBSPih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCBwcm9qZWN0OiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzLCB2NDogVDQpID0+IFIsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8Uj47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdFN0YXRpYzxULCBUMiwgVDMsIFQ0LCBUNSwgUj4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgdjU6IE9ic2VydmFibGVJbnB1dDxUNT4sIHByb2plY3Q6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCwgdjU6IFQ1KSA9PiBSLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFI+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3RTdGF0aWM8VCwgVDIsIFQzLCBUNCwgVDUsIFQ2LCBSPih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1PiwgdjY6IE9ic2VydmFibGVJbnB1dDxUNj4sIHByb2plY3Q6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCwgdjU6IFQ1LCB2NjogVDYpID0+IFIsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8Uj47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdFN0YXRpYzxSPiguLi5vYnNlcnZhYmxlczogQXJyYXk8T2JzZXJ2YWJsZUlucHV0PGFueT4gfCAoKC4uLnZhbHVlczogQXJyYXk8YW55PikgPT4gUikgfCBTY2hlZHVsZXI+KTogT2JzZXJ2YWJsZTxSPjtcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0U3RhdGljPFI+KGFycmF5OiBPYnNlcnZhYmxlSW5wdXQ8YW55PltdLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFI+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3RTdGF0aWM8Uj4oYXJyYXk6IE9ic2VydmFibGVJbnB1dDxhbnk+W10sIHByb2plY3Q6ICguLi52YWx1ZXM6IEFycmF5PGFueT4pID0+IFIsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8Uj47XG4vKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG4vKipcbiAqIENvbWJpbmVzIHRoZSB2YWx1ZXMgZnJvbSBvYnNlcnZhYmxlcyBwYXNzZWQgYXMgYXJndW1lbnRzLiBUaGlzIGlzIGRvbmUgYnkgc3Vic2NyaWJpbmdcbiAqIHRvIGVhY2ggb2JzZXJ2YWJsZSwgaW4gb3JkZXIsIGFuZCBjb2xsZWN0aW5nIGFuIGFycmF5IG9mIGVhY2ggb2YgdGhlIG1vc3QgcmVjZW50IHZhbHVlcyBhbnkgdGltZSBhbnkgb2YgdGhlIG9ic2VydmFibGVzXG4gKiBlbWl0cywgdGhlbiBlaXRoZXIgdGFraW5nIHRoYXQgYXJyYXkgYW5kIHBhc3NpbmcgaXQgYXMgYXJndW1lbnRzIHRvIGFuIG9wdGlvbiBgcHJvamVjdGAgZnVuY3Rpb24gYW5kIGVtaXR0aW5nIHRoZSByZXR1cm5cbiAqIHZhbHVlIG9mIHRoYXQsIG9yIGp1c3QgZW1pdHRpbmcgdGhlIGFycmF5IG9mIHJlY2VudCB2YWx1ZXMgZGlyZWN0bHkgaWYgdGhlcmUgaXMgbm8gYHByb2plY3RgIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsuLi5PYnNlcnZhYmxlfSBvYnNlcnZhYmxlcyB0aGUgb2JzZXJ2YWJsZXMgdG8gY29tYmluZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gW3Byb2plY3RdIGFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIHByb2plY3QgdGhlIHZhbHVlcyBmcm9tIHRoZSBjb21iaW5lZCByZWNlbnQgdmFsdWVzIGludG8gYSBuZXcgdmFsdWUgZm9yIGVtaXNzaW9uLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gYW4gb2JzZXJ2YWJsZSBvZiBvdGhlciBwcm9qZWN0ZWQgdmFsdWVzIGZyb20gdGhlIG1vc3QgcmVjZW50IHZhbHVlcyBmcm9tIGVhY2ggb2JzZXJ2YWJsZSwgb3IgYW4gYXJyYXkgb2YgZWFjaCBvZlxuICogdGhlIG1vc3QgcmVjZW50IHZhbHVlcyBmcm9tIGVhY2ggb2JzZXJ2YWJsZS5cbiAqIEBzdGF0aWMgdHJ1ZVxuICogQG5hbWUgY29tYmluZUxhdGVzdFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3RTdGF0aWM8VCwgUj4oLi4ub2JzZXJ2YWJsZXM6IEFycmF5PGFueSB8IE9ic2VydmFibGVJbnB1dDxhbnk+IHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheTxPYnNlcnZhYmxlSW5wdXQ8YW55Pj4gfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoKC4uLnZhbHVlczogQXJyYXk8YW55PikgPT4gUikpIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTY2hlZHVsZXI+KTogT2JzZXJ2YWJsZTxSPiB7XG4gIGxldCBwcm9qZWN0OiAoLi4udmFsdWVzOiBBcnJheTxhbnk+KSA9PiBSID0gIG51bGw7XG4gIGxldCBzY2hlZHVsZXI6IFNjaGVkdWxlciA9IG51bGw7XG5cbiAgaWYgKGlzU2NoZWR1bGVyKG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdKSkge1xuICAgIHNjaGVkdWxlciA9IDxTY2hlZHVsZXI+b2JzZXJ2YWJsZXMucG9wKCk7XG4gIH1cblxuICBpZiAodHlwZW9mIG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvamVjdCA9IDwoLi4udmFsdWVzOiBBcnJheTxhbnk+KSA9PiBSPm9ic2VydmFibGVzLnBvcCgpO1xuICB9XG5cbiAgLy8gaWYgdGhlIGZpcnN0IGFuZCBvbmx5IG90aGVyIGFyZ3VtZW50IGJlc2lkZXMgdGhlIHJlc3VsdFNlbGVjdG9yIGlzIGFuIGFycmF5XG4gIC8vIGFzc3VtZSBpdCdzIGJlZW4gY2FsbGVkIHdpdGggYGNvbWJpbmVMYXRlc3QoW29iczEsIG9iczIsIG9iczNdLCBwcm9qZWN0KWBcbiAgaWYgKG9ic2VydmFibGVzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KG9ic2VydmFibGVzWzBdKSkge1xuICAgIG9ic2VydmFibGVzID0gPEFycmF5PE9ic2VydmFibGU8YW55Pj4+b2JzZXJ2YWJsZXNbMF07XG4gIH1cblxuICByZXR1cm4gbmV3IEFycmF5T2JzZXJ2YWJsZShvYnNlcnZhYmxlcywgc2NoZWR1bGVyKS5saWZ0KG5ldyBDb21iaW5lTGF0ZXN0T3BlcmF0b3I8VCwgUj4ocHJvamVjdCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29tYmluZUxhdGVzdE9wZXJhdG9yPFQsIFI+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgUj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2plY3Q/OiAoLi4udmFsdWVzOiBBcnJheTxhbnk+KSA9PiBSKSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Uj4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJvamVjdCkpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5leHBvcnQgY2xhc3MgQ29tYmluZUxhdGVzdFN1YnNjcmliZXI8VCwgUj4gZXh0ZW5kcyBPdXRlclN1YnNjcmliZXI8VCwgUj4ge1xuICBwcml2YXRlIGFjdGl2ZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSB2YWx1ZXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgb2JzZXJ2YWJsZXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgdG9SZXNwb25kOiBudW1iZXJbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFI+LCBwcml2YXRlIHByb2plY3Q/OiAoLi4udmFsdWVzOiBBcnJheTxhbnk+KSA9PiBSKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KG9ic2VydmFibGU6IGFueSkge1xuICAgIGNvbnN0IHRvUmVzcG9uZCA9IHRoaXMudG9SZXNwb25kO1xuICAgIHRvUmVzcG9uZC5wdXNoKHRvUmVzcG9uZC5sZW5ndGgpO1xuICAgIHRoaXMub2JzZXJ2YWJsZXMucHVzaChvYnNlcnZhYmxlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKSB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZXMgPSB0aGlzLm9ic2VydmFibGVzO1xuICAgIGNvbnN0IGxlbiA9IG9ic2VydmFibGVzLmxlbmd0aDtcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gbGVuO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gb2JzZXJ2YWJsZXNbaV07XG4gICAgICAgIHRoaXMuYWRkKHN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIG9ic2VydmFibGUsIG9ic2VydmFibGUsIGkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBub3RpZnlDb21wbGV0ZSh1bnVzZWQ6IFN1YnNjcmliZXI8Uj4pOiB2b2lkIHtcbiAgICBpZiAoKHRoaXMuYWN0aXZlIC09IDEpID09PSAwKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5TmV4dChvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBSLFxuICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgIGlubmVyU3ViOiBJbm5lclN1YnNjcmliZXI8VCwgUj4pOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICB2YWx1ZXNbb3V0ZXJJbmRleF0gPSBpbm5lclZhbHVlO1xuICAgIGNvbnN0IHRvUmVzcG9uZCA9IHRoaXMudG9SZXNwb25kO1xuXG4gICAgaWYgKHRvUmVzcG9uZC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmb3VuZCA9IHRvUmVzcG9uZC5pbmRleE9mKG91dGVySW5kZXgpO1xuICAgICAgaWYgKGZvdW5kICE9PSAtMSkge1xuICAgICAgICB0b1Jlc3BvbmQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9SZXNwb25kLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHRoaXMucHJvamVjdCkge1xuICAgICAgICB0aGlzLl90cnlQcm9qZWN0KHZhbHVlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90cnlQcm9qZWN0KHZhbHVlczogYW55W10pIHtcbiAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IHRoaXMucHJvamVjdC5hcHBseSh0aGlzLCB2YWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQocmVzdWx0KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
