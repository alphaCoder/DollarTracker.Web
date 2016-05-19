System.register(['../observable/ArrayObservable', '../util/isArray', '../Subscriber', '../OuterSubscriber', '../util/subscribeToResult', '../symbol/iterator'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var ArrayObservable_1, isArray_1, Subscriber_1, OuterSubscriber_1, subscribeToResult_1, iterator_1;
    var ZipOperator, ZipSubscriber, StaticIterator, StaticArrayIterator, ZipBufferIterator;
    /**
     * @param observables
     * @return {Observable<R>}
     * @method zip
     * @owner Observable
     */
    function zipProto() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        observables.unshift(this);
        return zipStatic.apply(this, observables);
    }
    exports_1("zipProto", zipProto);
    /* tslint:enable:max-line-length */
    /**
     * @param observables
     * @return {Observable<R>}
     * @static true
     * @name zip
     * @owner Observable
     */
    function zipStatic() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        var project = observables[observables.length - 1];
        if (typeof project === 'function') {
            observables.pop();
        }
        return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
    }
    exports_1("zipStatic", zipStatic);
    return {
        setters:[
            function (ArrayObservable_1_1) {
                ArrayObservable_1 = ArrayObservable_1_1;
            },
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
            },
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            },
            function (iterator_1_1) {
                iterator_1 = iterator_1_1;
            }],
        execute: function() {
            ZipOperator = (function () {
                function ZipOperator(project) {
                    this.project = project;
                }
                ZipOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new ZipSubscriber(subscriber, this.project));
                };
                return ZipOperator;
            }());
            exports_1("ZipOperator", ZipOperator);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ZipSubscriber = (function (_super) {
                __extends(ZipSubscriber, _super);
                function ZipSubscriber(destination, project, values) {
                    if (values === void 0) { values = Object.create(null); }
                    _super.call(this, destination);
                    this.index = 0;
                    this.iterators = [];
                    this.active = 0;
                    this.project = (typeof project === 'function') ? project : null;
                    this.values = values;
                }
                ZipSubscriber.prototype._next = function (value) {
                    var iterators = this.iterators;
                    var index = this.index++;
                    if (isArray_1.isArray(value)) {
                        iterators.push(new StaticArrayIterator(value));
                    }
                    else if (typeof value[iterator_1.$$iterator] === 'function') {
                        iterators.push(new StaticIterator(value[iterator_1.$$iterator]()));
                    }
                    else {
                        iterators.push(new ZipBufferIterator(this.destination, this, value, index));
                    }
                };
                ZipSubscriber.prototype._complete = function () {
                    var iterators = this.iterators;
                    var len = iterators.length;
                    this.active = len;
                    for (var i = 0; i < len; i++) {
                        var iterator = iterators[i];
                        if (iterator.stillUnsubscribed) {
                            this.add(iterator.subscribe(iterator, i));
                        }
                        else {
                            this.active--; // not an observable
                        }
                    }
                };
                ZipSubscriber.prototype.notifyInactive = function () {
                    this.active--;
                    if (this.active === 0) {
                        this.destination.complete();
                    }
                };
                ZipSubscriber.prototype.checkIterators = function () {
                    var iterators = this.iterators;
                    var len = iterators.length;
                    var destination = this.destination;
                    // abort if not all of them have values
                    for (var i = 0; i < len; i++) {
                        var iterator = iterators[i];
                        if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                            return;
                        }
                    }
                    var shouldComplete = false;
                    var args = [];
                    for (var i = 0; i < len; i++) {
                        var iterator = iterators[i];
                        var result = iterator.next();
                        // check to see if it's completed now that you've gotten
                        // the next value.
                        if (iterator.hasCompleted()) {
                            shouldComplete = true;
                        }
                        if (result.done) {
                            destination.complete();
                            return;
                        }
                        args.push(result.value);
                    }
                    if (this.project) {
                        this._tryProject(args);
                    }
                    else {
                        destination.next(args);
                    }
                    if (shouldComplete) {
                        destination.complete();
                    }
                };
                ZipSubscriber.prototype._tryProject = function (args) {
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
                return ZipSubscriber;
            }(Subscriber_1.Subscriber));
            exports_1("ZipSubscriber", ZipSubscriber);
            StaticIterator = (function () {
                function StaticIterator(iterator) {
                    this.iterator = iterator;
                    this.nextResult = iterator.next();
                }
                StaticIterator.prototype.hasValue = function () {
                    return true;
                };
                StaticIterator.prototype.next = function () {
                    var result = this.nextResult;
                    this.nextResult = this.iterator.next();
                    return result;
                };
                StaticIterator.prototype.hasCompleted = function () {
                    var nextResult = this.nextResult;
                    return nextResult && nextResult.done;
                };
                return StaticIterator;
            }());
            StaticArrayIterator = (function () {
                function StaticArrayIterator(array) {
                    this.array = array;
                    this.index = 0;
                    this.length = 0;
                    this.length = array.length;
                }
                StaticArrayIterator.prototype[iterator_1.$$iterator] = function () {
                    return this;
                };
                StaticArrayIterator.prototype.next = function (value) {
                    var i = this.index++;
                    var array = this.array;
                    return i < this.length ? { value: array[i], done: false } : { done: true };
                };
                StaticArrayIterator.prototype.hasValue = function () {
                    return this.array.length > this.index;
                };
                StaticArrayIterator.prototype.hasCompleted = function () {
                    return this.array.length === this.index;
                };
                return StaticArrayIterator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ZipBufferIterator = (function (_super) {
                __extends(ZipBufferIterator, _super);
                function ZipBufferIterator(destination, parent, observable, index) {
                    _super.call(this, destination);
                    this.parent = parent;
                    this.observable = observable;
                    this.index = index;
                    this.stillUnsubscribed = true;
                    this.buffer = [];
                    this.isComplete = false;
                }
                ZipBufferIterator.prototype[iterator_1.$$iterator] = function () {
                    return this;
                };
                // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
                //    this is legit because `next()` will never be called by a subscription in this case.
                ZipBufferIterator.prototype.next = function () {
                    var buffer = this.buffer;
                    if (buffer.length === 0 && this.isComplete) {
                        return { done: true };
                    }
                    else {
                        return { value: buffer.shift(), done: false };
                    }
                };
                ZipBufferIterator.prototype.hasValue = function () {
                    return this.buffer.length > 0;
                };
                ZipBufferIterator.prototype.hasCompleted = function () {
                    return this.buffer.length === 0 && this.isComplete;
                };
                ZipBufferIterator.prototype.notifyComplete = function () {
                    if (this.buffer.length > 0) {
                        this.isComplete = true;
                        this.parent.notifyInactive();
                    }
                    else {
                        this.destination.complete();
                    }
                };
                ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.buffer.push(innerValue);
                    this.parent.checkIterators();
                };
                ZipBufferIterator.prototype.subscribe = function (value, index) {
                    return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
                };
                return ZipBufferIterator;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3ppcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBV0E7Ozs7O09BS0c7SUFDSDtRQUE0QixxQkFBNEU7YUFBNUUsV0FBNEUsQ0FBNUUsc0JBQTRFLENBQTVFLElBQTRFO1lBQTVFLG9DQUE0RTs7UUFDdEcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUhELCtCQUdDLENBQUE7SUF1Q0QsbUNBQW1DO0lBRW5DOzs7Ozs7T0FNRztJQUNIO1FBQWdDLHFCQUE0RTthQUE1RSxXQUE0RSxDQUE1RSxzQkFBNEUsQ0FBNUUsSUFBNEU7WUFBNUUsb0NBQTRFOztRQUMxRyxJQUFNLE9BQU8sR0FBZ0MsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakYsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNsQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLGlDQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQU5ELGlDQU1DLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFRDtnQkFJRSxxQkFBWSxPQUFzQztvQkFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsMEJBQUksR0FBSixVQUFLLFVBQXlCLEVBQUUsTUFBVztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMs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QUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNyRCxDQUFDO2dCQUVELDBDQUFjLEdBQWQ7b0JBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7d0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQy9CLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDOUIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELHNDQUFVLEdBQVYsVUFBVyxVQUFhLEVBQUUsVUFBZSxFQUM5QixVQUFrQixFQUFFLFVBQWtCLEVBQ3RDLFFBQStCO29CQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkFFRCxxQ0FBUyxHQUFULFVBQVUsS0FBVSxFQUFFLEtBQWE7b0JBQ2pDLE1BQU0sQ0FBQyxxQ0FBaUIsQ0FBVyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3pFLENBQUM7Z0JBQ0gsd0JBQUM7WUFBRCxDQXREQSxBQXNEQyxDQXREcUMsaUNBQWUsR0FzRHBEIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3ppcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZUlucHV0fSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7QXJyYXlPYnNlcnZhYmxlfSBmcm9tICcuLi9vYnNlcnZhYmxlL0FycmF5T2JzZXJ2YWJsZSc7XG5pbXBvcnQge2lzQXJyYXl9IGZyb20gJy4uL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1BhcnRpYWxPYnNlcnZlcn0gZnJvbSAnLi4vT2JzZXJ2ZXInO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7T3V0ZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHtJbm5lclN1YnNjcmliZXJ9IGZyb20gJy4uL0lubmVyU3Vic2NyaWJlcic7XG5pbXBvcnQge3N1YnNjcmliZVRvUmVzdWx0fSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcbmltcG9ydCB7JCRpdGVyYXRvcn0gZnJvbSAnLi4vc3ltYm9sL2l0ZXJhdG9yJztcblxuLyoqXG4gKiBAcGFyYW0gb2JzZXJ2YWJsZXNcbiAqIEByZXR1cm4ge09ic2VydmFibGU8Uj59XG4gKiBAbWV0aG9kIHppcFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHppcFByb3RvPFI+KC4uLm9ic2VydmFibGVzOiBBcnJheTxPYnNlcnZhYmxlSW5wdXQ8YW55PiB8ICgoLi4udmFsdWVzOiBBcnJheTxhbnk+KSA9PiBSKT4pOiBPYnNlcnZhYmxlPFI+IHtcbiAgb2JzZXJ2YWJsZXMudW5zaGlmdCh0aGlzKTtcbiAgcmV0dXJuIHppcFN0YXRpYy5hcHBseSh0aGlzLCBvYnNlcnZhYmxlcyk7XG59XG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuZXhwb3J0IGludGVyZmFjZSBaaXBTaWduYXR1cmU8VD4ge1xuICA8Uj4ocHJvamVjdDogKHYxOiBUKSA9PiBSKTogT2JzZXJ2YWJsZTxSPjtcbiAgPFQyLCBSPih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgcHJvamVjdDogKHYxOiBULCB2MjogVDIpID0+IFIpOiBPYnNlcnZhYmxlPFI+O1xuICA8VDIsIFQzLCBSPih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHByb2plY3Q6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMpID0+IFIpOiBPYnNlcnZhYmxlPFI+O1xuICA8VDIsIFQzLCBUNCwgUj4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgcHJvamVjdDogKHYxOiBULCB2MjogVDIsIHYzOiBUMywgdjQ6IFQ0KSA9PiBSKTogT2JzZXJ2YWJsZTxSPjtcbiAgPFQyLCBUMywgVDQsIFQ1LCBSPih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1PiwgcHJvamVjdDogKHYxOiBULCB2MjogVDIsIHYzOiBUMywgdjQ6IFQ0LCB2NTogVDUpID0+IFIpOiBPYnNlcnZhYmxlPFI+O1xuICA8VDIsIFQzLCBUNCwgVDUsIFQ2LCBSPih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1PiwgdjY6IE9ic2VydmFibGVJbnB1dDxUNj4sIHByb2plY3Q6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCwgdjU6IFQ1LCB2NjogVDYpID0+IFIpOiBPYnNlcnZhYmxlPFI+O1xuXG4gIDxUMj4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4pOiBPYnNlcnZhYmxlPFtULCBUMl0+O1xuICA8VDIsIFQzPih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4pOiBPYnNlcnZhYmxlPFtULCBUMiwgVDNdPjtcbiAgPFQyLCBUMywgVDQ+KHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4pOiBPYnNlcnZhYmxlPFtULCBUMiwgVDMsIFQ0XT47XG4gIDxUMiwgVDMsIFQ0LCBUNT4odjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgdjU6IE9ic2VydmFibGVJbnB1dDxUNT4pOiBPYnNlcnZhYmxlPFtULCBUMiwgVDMsIFQ0LCBUNV0+O1xuICA8VDIsIFQzLCBUNCwgVDUsIFQ2Pih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1PiwgdjY6IE9ic2VydmFibGVJbnB1dDxUNj4pOiBPYnNlcnZhYmxlPFtULCBUMiwgVDMsIFQ0LCBUNSwgVDZdPjtcblxuICA8Uj4oLi4ub2JzZXJ2YWJsZXM6IEFycmF5PE9ic2VydmFibGVJbnB1dDxhbnk+IHwgKCguLi52YWx1ZXM6IEFycmF5PGFueT4pID0+IFIpPik6IE9ic2VydmFibGU8Uj47XG4gIDxSPihhcnJheTogT2JzZXJ2YWJsZUlucHV0PGFueT5bXSk6IE9ic2VydmFibGU8Uj47XG4gIDxSPihhcnJheTogT2JzZXJ2YWJsZUlucHV0PGFueT5bXSwgcHJvamVjdDogKC4uLnZhbHVlczogQXJyYXk8YW55PikgPT4gUik6IE9ic2VydmFibGU8Uj47XG59XG4vKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbmV4cG9ydCBmdW5jdGlvbiB6aXBTdGF0aWM8VD4odjE6IE9ic2VydmFibGVJbnB1dDxUPik6IE9ic2VydmFibGU8W1RdPjtcbmV4cG9ydCBmdW5jdGlvbiB6aXBTdGF0aWM8VCwgVDI+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+KTogT2JzZXJ2YWJsZTxbVCwgVDJdPjtcbmV4cG9ydCBmdW5jdGlvbiB6aXBTdGF0aWM8VCwgVDIsIFQzPih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4pOiBPYnNlcnZhYmxlPFtULCBUMiwgVDNdPjtcbmV4cG9ydCBmdW5jdGlvbiB6aXBTdGF0aWM8VCwgVDIsIFQzLCBUND4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0Pik6IE9ic2VydmFibGU8W1QsIFQyLCBUMywgVDRdPjtcbmV4cG9ydCBmdW5jdGlvbiB6aXBTdGF0aWM8VCwgVDIsIFQzLCBUNCwgVDU+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4sIHY1OiBPYnNlcnZhYmxlSW5wdXQ8VDU+KTogT2JzZXJ2YWJsZTxbVCwgVDIsIFQzLCBUNCwgVDVdPjtcbmV4cG9ydCBmdW5jdGlvbiB6aXBTdGF0aWM8VCwgVDIsIFQzLCBUNCwgVDUsIFQ2Pih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1PiwgdjY6IE9ic2VydmFibGVJbnB1dDxUNj4pOiBPYnNlcnZhYmxlPFtULCBUMiwgVDMsIFQ0LCBUNSwgVDZdPjtcbmV4cG9ydCBmdW5jdGlvbiB6aXBTdGF0aWM8VCwgUj4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgcHJvamVjdDogKHYxOiBUKSA9PiBSKTogT2JzZXJ2YWJsZTxSPjtcbmV4cG9ydCBmdW5jdGlvbiB6aXBTdGF0aWM8VCwgVDIsIFI+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCBwcm9qZWN0OiAodjE6IFQsIHYyOiBUMikgPT4gUik6IE9ic2VydmFibGU8Uj47XG5leHBvcnQgZnVuY3Rpb24gemlwU3RhdGljPFQsIFQyLCBUMywgUj4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCBwcm9qZWN0OiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzKSA9PiBSKTogT2JzZXJ2YWJsZTxSPjtcbmV4cG9ydCBmdW5jdGlvbiB6aXBTdGF0aWM8VCwgVDIsIFQzLCBUNCwgUj4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgcHJvamVjdDogKHYxOiBULCB2MjogVDIsIHYzOiBUMywgdjQ6IFQ0KSA9PiBSKTogT2JzZXJ2YWJsZTxSPjtcbmV4cG9ydCBmdW5jdGlvbiB6aXBTdGF0aWM8VCwgVDIsIFQzLCBUNCwgVDUsIFI+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4sIHY1OiBPYnNlcnZhYmxlSW5wdXQ8VDU+LCBwcm9qZWN0OiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzLCB2NDogVDQsIHY1OiBUNSkgPT4gUik6IE9ic2VydmFibGU8Uj47XG5leHBvcnQgZnVuY3Rpb24gemlwU3RhdGljPFQsIFQyLCBUMywgVDQsIFQ1LCBUNiwgUj4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgdjU6IE9ic2VydmFibGVJbnB1dDxUNT4sIHY2OiBPYnNlcnZhYmxlSW5wdXQ8VDY+LCBwcm9qZWN0OiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzLCB2NDogVDQsIHY1OiBUNSwgdjY6IFQ2KSA9PiBSKTogT2JzZXJ2YWJsZTxSPjtcbmV4cG9ydCBmdW5jdGlvbiB6aXBTdGF0aWM8Uj4oLi4ub2JzZXJ2YWJsZXM6IEFycmF5PE9ic2VydmFibGVJbnB1dDxhbnk+IHwgKCguLi52YWx1ZXM6IEFycmF5PGFueT4pID0+IFIpPik6IE9ic2VydmFibGU8Uj47XG5leHBvcnQgZnVuY3Rpb24gemlwU3RhdGljPFI+KGFycmF5OiBPYnNlcnZhYmxlSW5wdXQ8YW55PltdKTogT2JzZXJ2YWJsZTxSPjtcbmV4cG9ydCBmdW5jdGlvbiB6aXBTdGF0aWM8Uj4oYXJyYXk6IE9ic2VydmFibGVJbnB1dDxhbnk+W10sIHByb2plY3Q6ICguLi52YWx1ZXM6IEFycmF5PGFueT4pID0+IFIpOiBPYnNlcnZhYmxlPFI+O1xuLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuLyoqXG4gKiBAcGFyYW0gb2JzZXJ2YWJsZXNcbiAqIEByZXR1cm4ge09ic2VydmFibGU8Uj59XG4gKiBAc3RhdGljIHRydWVcbiAqIEBuYW1lIHppcFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHppcFN0YXRpYzxULCBSPiguLi5vYnNlcnZhYmxlczogQXJyYXk8T2JzZXJ2YWJsZUlucHV0PGFueT4gfCAoKC4uLnZhbHVlczogQXJyYXk8YW55PikgPT4gUik+KTogT2JzZXJ2YWJsZTxSPiB7XG4gIGNvbnN0IHByb2plY3QgPSA8KCguLi55czogQXJyYXk8YW55PikgPT4gUik+IG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdO1xuICBpZiAodHlwZW9mIHByb2plY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvYnNlcnZhYmxlcy5wb3AoKTtcbiAgfVxuICByZXR1cm4gbmV3IEFycmF5T2JzZXJ2YWJsZShvYnNlcnZhYmxlcykubGlmdChuZXcgWmlwT3BlcmF0b3IocHJvamVjdCkpO1xufVxuXG5leHBvcnQgY2xhc3MgWmlwT3BlcmF0b3I8VCwgUj4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBSPiB7XG5cbiAgcHJvamVjdDogKC4uLnZhbHVlczogQXJyYXk8YW55PikgPT4gUjtcblxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0PzogKC4uLnZhbHVlczogQXJyYXk8YW55PikgPT4gUikge1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Uj4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFppcFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcm9qZWN0KSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmV4cG9ydCBjbGFzcyBaaXBTdWJzY3JpYmVyPFQsIFI+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIHByaXZhdGUgaW5kZXggPSAwO1xuICBwcml2YXRlIHZhbHVlczogYW55O1xuICBwcml2YXRlIHByb2plY3Q6ICguLi52YWx1ZXM6IEFycmF5PGFueT4pID0+IFI7XG4gIHByaXZhdGUgaXRlcmF0b3JzOiBMb29rQWhlYWRJdGVyYXRvcjxhbnk+W10gPSBbXTtcbiAgcHJpdmF0ZSBhY3RpdmUgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFI+LFxuICAgICAgICAgICAgICBwcm9qZWN0PzogKC4uLnZhbHVlczogQXJyYXk8YW55PikgPT4gUixcbiAgICAgICAgICAgICAgdmFsdWVzOiBhbnkgPSBPYmplY3QuY3JlYXRlKG51bGwpKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMucHJvamVjdCA9ICh0eXBlb2YgcHJvamVjdCA9PT0gJ2Z1bmN0aW9uJykgPyBwcm9qZWN0IDogbnVsbDtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgaXRlcmF0b3JzID0gdGhpcy5pdGVyYXRvcnM7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluZGV4Kys7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpdGVyYXRvcnMucHVzaChuZXcgU3RhdGljQXJyYXlJdGVyYXRvcih2YWx1ZSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlWyQkaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpdGVyYXRvcnMucHVzaChuZXcgU3RhdGljSXRlcmF0b3IodmFsdWVbJCRpdGVyYXRvcl0oKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRvcnMucHVzaChuZXcgWmlwQnVmZmVySXRlcmF0b3IodGhpcy5kZXN0aW5hdGlvbiwgdGhpcywgdmFsdWUsIGluZGV4KSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpIHtcbiAgICBjb25zdCBpdGVyYXRvcnMgPSB0aGlzLml0ZXJhdG9ycztcbiAgICBjb25zdCBsZW4gPSBpdGVyYXRvcnMubGVuZ3RoO1xuICAgIHRoaXMuYWN0aXZlID0gbGVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGxldCBpdGVyYXRvcjogWmlwQnVmZmVySXRlcmF0b3I8YW55LCBhbnk+ID0gPGFueT5pdGVyYXRvcnNbaV07XG4gICAgICBpZiAoaXRlcmF0b3Iuc3RpbGxVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgdGhpcy5hZGQoaXRlcmF0b3Iuc3Vic2NyaWJlKGl0ZXJhdG9yLCBpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2ZS0tOyAvLyBub3QgYW4gb2JzZXJ2YWJsZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeUluYWN0aXZlKCkge1xuICAgIHRoaXMuYWN0aXZlLS07XG4gICAgaWYgKHRoaXMuYWN0aXZlID09PSAwKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tJdGVyYXRvcnMoKSB7XG4gICAgY29uc3QgaXRlcmF0b3JzID0gdGhpcy5pdGVyYXRvcnM7XG4gICAgY29uc3QgbGVuID0gaXRlcmF0b3JzLmxlbmd0aDtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG5cbiAgICAvLyBhYm9ydCBpZiBub3QgYWxsIG9mIHRoZW0gaGF2ZSB2YWx1ZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSBpdGVyYXRvcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yLmhhc1ZhbHVlID09PSAnZnVuY3Rpb24nICYmICFpdGVyYXRvci5oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc2hvdWxkQ29tcGxldGUgPSBmYWxzZTtcbiAgICBjb25zdCBhcmdzOiBhbnlbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IGl0ZXJhdG9yc1tpXTtcbiAgICAgIGxldCByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiBpdCdzIGNvbXBsZXRlZCBub3cgdGhhdCB5b3UndmUgZ290dGVuXG4gICAgICAvLyB0aGUgbmV4dCB2YWx1ZS5cbiAgICAgIGlmIChpdGVyYXRvci5oYXNDb21wbGV0ZWQoKSkge1xuICAgICAgICBzaG91bGRDb21wbGV0ZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFyZ3MucHVzaChyZXN1bHQudmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb2plY3QpIHtcbiAgICAgIHRoaXMuX3RyeVByb2plY3QoYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3RpbmF0aW9uLm5leHQoYXJncyk7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZENvbXBsZXRlKSB7XG4gICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfdHJ5UHJvamVjdChhcmdzOiBhbnlbXSkge1xuICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5wcm9qZWN0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQocmVzdWx0KTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgTG9va0FoZWFkSXRlcmF0b3I8VD4gZXh0ZW5kcyBJdGVyYXRvcjxUPiB7XG4gIGhhc1ZhbHVlKCk6IGJvb2xlYW47XG4gIGhhc0NvbXBsZXRlZCgpOiBib29sZWFuO1xufVxuXG5jbGFzcyBTdGF0aWNJdGVyYXRvcjxUPiBpbXBsZW1lbnRzIExvb2tBaGVhZEl0ZXJhdG9yPFQ+IHtcbiAgcHJpdmF0ZSBuZXh0UmVzdWx0OiBJdGVyYXRvclJlc3VsdDxUPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZXJhdG9yOiBJdGVyYXRvcjxUPikge1xuICAgIHRoaXMubmV4dFJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgfVxuXG4gIGhhc1ZhbHVlKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbmV4dCgpOiBJdGVyYXRvclJlc3VsdDxUPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5uZXh0UmVzdWx0O1xuICAgIHRoaXMubmV4dFJlc3VsdCA9IHRoaXMuaXRlcmF0b3IubmV4dCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBoYXNDb21wbGV0ZWQoKSB7XG4gICAgY29uc3QgbmV4dFJlc3VsdCA9IHRoaXMubmV4dFJlc3VsdDtcbiAgICByZXR1cm4gbmV4dFJlc3VsdCAmJiBuZXh0UmVzdWx0LmRvbmU7XG4gIH1cbn1cblxuY2xhc3MgU3RhdGljQXJyYXlJdGVyYXRvcjxUPiBpbXBsZW1lbnRzIExvb2tBaGVhZEl0ZXJhdG9yPFQ+IHtcbiAgcHJpdmF0ZSBpbmRleCA9IDA7XG4gIHByaXZhdGUgbGVuZ3RoID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFycmF5OiBUW10pIHtcbiAgICB0aGlzLmxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgfVxuXG4gIFskJGl0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5leHQodmFsdWU/OiBhbnkpOiBJdGVyYXRvclJlc3VsdDxUPiB7XG4gICAgY29uc3QgaSA9IHRoaXMuaW5kZXgrKztcbiAgICBjb25zdCBhcnJheSA9IHRoaXMuYXJyYXk7XG4gICAgcmV0dXJuIGkgPCB0aGlzLmxlbmd0aCA/IHsgdmFsdWU6IGFycmF5W2ldLCBkb25lOiBmYWxzZSB9IDogeyBkb25lOiB0cnVlIH07XG4gIH1cblxuICBoYXNWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGggPiB0aGlzLmluZGV4O1xuICB9XG5cbiAgaGFzQ29tcGxldGVkKCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aCA9PT0gdGhpcy5pbmRleDtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgWmlwQnVmZmVySXRlcmF0b3I8VCwgUj4gZXh0ZW5kcyBPdXRlclN1YnNjcmliZXI8VCwgUj4gaW1wbGVtZW50cyBMb29rQWhlYWRJdGVyYXRvcjxUPiB7XG4gIHN0aWxsVW5zdWJzY3JpYmVkID0gdHJ1ZTtcbiAgYnVmZmVyOiBUW10gPSBbXTtcbiAgaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBQYXJ0aWFsT2JzZXJ2ZXI8VD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgcGFyZW50OiBaaXBTdWJzY3JpYmVyPFQsIFI+LFxuICAgICAgICAgICAgICBwcml2YXRlIG9ic2VydmFibGU6IE9ic2VydmFibGU8VD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgaW5kZXg6IG51bWJlcikge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIFskJGl0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIE5PVEU6IHRoZXJlIGlzIGFjdHVhbGx5IGEgbmFtZSBjb2xsaXNpb24gaGVyZSB3aXRoIFN1YnNjcmliZXIubmV4dCBhbmQgSXRlcmF0b3IubmV4dFxuICAvLyAgICB0aGlzIGlzIGxlZ2l0IGJlY2F1c2UgYG5leHQoKWAgd2lsbCBuZXZlciBiZSBjYWxsZWQgYnkgYSBzdWJzY3JpcHRpb24gaW4gdGhpcyBjYXNlLlxuICBuZXh0KCk6IEl0ZXJhdG9yUmVzdWx0PFQ+IHtcbiAgICBjb25zdCBidWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmlzQ29tcGxldGUpIHtcbiAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgdmFsdWU6IGJ1ZmZlci5zaGlmdCgpLCBkb25lOiBmYWxzZSB9O1xuICAgIH1cbiAgfVxuXG4gIGhhc1ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmJ1ZmZlci5sZW5ndGggPiAwO1xuICB9XG5cbiAgaGFzQ29tcGxldGVkKCkge1xuICAgIHJldHVybiB0aGlzLmJ1ZmZlci5sZW5ndGggPT09IDAgJiYgdGhpcy5pc0NvbXBsZXRlO1xuICB9XG5cbiAgbm90aWZ5Q29tcGxldGUoKSB7XG4gICAgaWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICB0aGlzLnBhcmVudC5ub3RpZnlJbmFjdGl2ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5TmV4dChvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBhbnksXG4gICAgICAgICAgICAgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIsXG4gICAgICAgICAgICAgaW5uZXJTdWI6IElubmVyU3Vic2NyaWJlcjxULCBSPik6IHZvaWQge1xuICAgIHRoaXMuYnVmZmVyLnB1c2goaW5uZXJWYWx1ZSk7XG4gICAgdGhpcy5wYXJlbnQuY2hlY2tJdGVyYXRvcnMoKTtcbiAgfVxuXG4gIHN1YnNjcmliZSh2YWx1ZTogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHN1YnNjcmliZVRvUmVzdWx0PGFueSwgYW55Pih0aGlzLCB0aGlzLm9ic2VydmFibGUsIHRoaXMsIGluZGV4KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
