System.register(['../util/isArray', '../observable/ArrayObservable', '../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isArray_1, ArrayObservable_1, OuterSubscriber_1, subscribeToResult_1;
    var RaceOperator, RaceSubscriber;
    /**
     * Returns an Observable that mirrors the first source Observable to emit an item
     * from the combination of this Observable and supplied Observables
     * @param {...Observables} ...observables sources used to race for which Observable emits first.
     * @return {Observable} an Observable that mirrors the output of the first Observable to emit an item.
     * @method race
     * @owner Observable
     */
    function race() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        // if the only argument is an array, it was most likely called with
        // `pair([obs1, obs2, ...])`
        if (observables.length === 1 && isArray_1.isArray(observables[0])) {
            observables = observables[0];
        }
        observables.unshift(this);
        return raceStatic.apply(this, observables);
    }
    exports_1("race", race);
    function raceStatic() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        // if the only argument is an array, it was most likely called with
        // `pair([obs1, obs2, ...])`
        if (observables.length === 1) {
            if (isArray_1.isArray(observables[0])) {
                observables = observables[0];
            }
            else {
                return observables[0];
            }
        }
        return new ArrayObservable_1.ArrayObservable(observables).lift(new RaceOperator());
    }
    exports_1("raceStatic", raceStatic);
    return {
        setters:[
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
            },
            function (ArrayObservable_1_1) {
                ArrayObservable_1 = ArrayObservable_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            RaceOperator = (function () {
                function RaceOperator() {
                }
                RaceOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new RaceSubscriber(subscriber));
                };
                return RaceOperator;
            }());
            exports_1("RaceOperator", RaceOperator);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            RaceSubscriber = (function (_super) {
                __extends(RaceSubscriber, _super);
                function RaceSubscriber(destination) {
                    _super.call(this, destination);
                    this.hasFirst = false;
                    this.observables = [];
                    this.subscriptions = [];
                }
                RaceSubscriber.prototype._next = function (observable) {
                    this.observables.push(observable);
                };
                RaceSubscriber.prototype._complete = function () {
                    var observables = this.observables;
                    var len = observables.length;
                    if (len === 0) {
                        this.destination.complete();
                    }
                    else {
                        for (var i = 0; i < len; i++) {
                            var observable = observables[i];
                            var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
                            this.subscriptions.push(subscription);
                            this.add(subscription);
                        }
                        this.observables = null;
                    }
                };
                RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    if (!this.hasFirst) {
                        this.hasFirst = true;
                        for (var i = 0; i < this.subscriptions.length; i++) {
                            if (i !== outerIndex) {
                                var subscription = this.subscriptions[i];
                                subscription.unsubscribe();
                                this.remove(subscription);
                            }
                        }
                        this.subscriptions = null;
                    }
                    this.destination.next(innerValue);
                };
                return RaceSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
            exports_1("RaceSubscriber", RaceSubscriber);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3JhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQVVBOzs7Ozs7O09BT0c7SUFDSDtRQUF3QixxQkFBMkQ7YUFBM0QsV0FBMkQsQ0FBM0Qsc0JBQTJELENBQTNELElBQTJEO1lBQTNELG9DQUEyRDs7UUFDakYsbUVBQW1FO1FBQ25FLDRCQUE0QjtRQUM1QixFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxXQUFXLEdBQXlCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRUQsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQVRELHVCQVNDLENBQUE7SUFnQkQ7UUFBOEIscUJBQStEO2FBQS9ELFdBQStELENBQS9ELHNCQUErRCxDQUEvRCxJQUErRDtZQUEvRCxvQ0FBK0Q7O1FBQzNGLG1FQUFtRTtRQUNuRSw0QkFBNEI7UUFDNUIsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxDQUFDLGlCQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixXQUFXLEdBQTJCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFrQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxpQ0FBZSxDQUFTLFdBQVcsQ0FBQyxDQUFD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ZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3JhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtpc0FycmF5fSBmcm9tICcuLi91dGlsL2lzQXJyYXknO1xuaW1wb3J0IHtBcnJheU9ic2VydmFibGV9IGZyb20gJy4uL29ic2VydmFibGUvQXJyYXlPYnNlcnZhYmxlJztcbmltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7T3V0ZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHtJbm5lclN1YnNjcmliZXJ9IGZyb20gJy4uL0lubmVyU3Vic2NyaWJlcic7XG5pbXBvcnQge3N1YnNjcmliZVRvUmVzdWx0fSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBtaXJyb3JzIHRoZSBmaXJzdCBzb3VyY2UgT2JzZXJ2YWJsZSB0byBlbWl0IGFuIGl0ZW1cbiAqIGZyb20gdGhlIGNvbWJpbmF0aW9uIG9mIHRoaXMgT2JzZXJ2YWJsZSBhbmQgc3VwcGxpZWQgT2JzZXJ2YWJsZXNcbiAqIEBwYXJhbSB7Li4uT2JzZXJ2YWJsZXN9IC4uLm9ic2VydmFibGVzIHNvdXJjZXMgdXNlZCB0byByYWNlIGZvciB3aGljaCBPYnNlcnZhYmxlIGVtaXRzIGZpcnN0LlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gYW4gT2JzZXJ2YWJsZSB0aGF0IG1pcnJvcnMgdGhlIG91dHB1dCBvZiB0aGUgZmlyc3QgT2JzZXJ2YWJsZSB0byBlbWl0IGFuIGl0ZW0uXG4gKiBAbWV0aG9kIHJhY2VcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYWNlPFQ+KC4uLm9ic2VydmFibGVzOiBBcnJheTxPYnNlcnZhYmxlPFQ+IHwgQXJyYXk8T2JzZXJ2YWJsZTxUPj4+KTogT2JzZXJ2YWJsZTxUPiB7XG4gIC8vIGlmIHRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIGFycmF5LCBpdCB3YXMgbW9zdCBsaWtlbHkgY2FsbGVkIHdpdGhcbiAgLy8gYHBhaXIoW29iczEsIG9iczIsIC4uLl0pYFxuICBpZiAob2JzZXJ2YWJsZXMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkob2JzZXJ2YWJsZXNbMF0pKSB7XG4gICAgb2JzZXJ2YWJsZXMgPSA8QXJyYXk8T2JzZXJ2YWJsZTxUPj4+b2JzZXJ2YWJsZXNbMF07XG4gIH1cblxuICBvYnNlcnZhYmxlcy51bnNoaWZ0KHRoaXMpO1xuICByZXR1cm4gcmFjZVN0YXRpYy5hcHBseSh0aGlzLCBvYnNlcnZhYmxlcyk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFjZVNpZ25hdHVyZTxUPiB7XG4gICguLi5vYnNlcnZhYmxlczogQXJyYXk8T2JzZXJ2YWJsZTxUPiB8IEFycmF5PE9ic2VydmFibGU8VD4+Pik6IE9ic2VydmFibGU8VD47XG4gIDxSPiguLi5vYnNlcnZhYmxlczogQXJyYXk8T2JzZXJ2YWJsZTxhbnk+IHwgQXJyYXk8T2JzZXJ2YWJsZTxUPj4+KTogT2JzZXJ2YWJsZTxSPjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBtaXJyb3JzIHRoZSBmaXJzdCBzb3VyY2UgT2JzZXJ2YWJsZSB0byBlbWl0IGFuIGl0ZW0uXG4gKiBAcGFyYW0gey4uLk9ic2VydmFibGVzfSAuLi5vYnNlcnZhYmxlcyBzb3VyY2VzIHVzZWQgdG8gcmFjZSBmb3Igd2hpY2ggT2JzZXJ2YWJsZSBlbWl0cyBmaXJzdC5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IGFuIE9ic2VydmFibGUgdGhhdCBtaXJyb3JzIHRoZSBvdXRwdXQgb2YgdGhlIGZpcnN0IE9ic2VydmFibGUgdG8gZW1pdCBhbiBpdGVtLlxuICogQHN0YXRpYyB0cnVlXG4gKiBAbmFtZSByYWNlXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFjZVN0YXRpYzxUPiguLi5vYnNlcnZhYmxlczogQXJyYXk8T2JzZXJ2YWJsZTxUPiB8IEFycmF5PE9ic2VydmFibGU8VD4+Pik6IE9ic2VydmFibGU8VD47XG5leHBvcnQgZnVuY3Rpb24gcmFjZVN0YXRpYzxUPiguLi5vYnNlcnZhYmxlczogQXJyYXk8T2JzZXJ2YWJsZTxhbnk+IHwgQXJyYXk8T2JzZXJ2YWJsZTxhbnk+Pj4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgLy8gaWYgdGhlIG9ubHkgYXJndW1lbnQgaXMgYW4gYXJyYXksIGl0IHdhcyBtb3N0IGxpa2VseSBjYWxsZWQgd2l0aFxuICAvLyBgcGFpcihbb2JzMSwgb2JzMiwgLi4uXSlgXG4gIGlmIChvYnNlcnZhYmxlcy5sZW5ndGggPT09IDEpIHtcbiAgICBpZiAoaXNBcnJheShvYnNlcnZhYmxlc1swXSkpIHtcbiAgICAgIG9ic2VydmFibGVzID0gPEFycmF5PE9ic2VydmFibGU8YW55Pj4+b2JzZXJ2YWJsZXNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8T2JzZXJ2YWJsZTxhbnk+Pm9ic2VydmFibGVzWzBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgQXJyYXlPYnNlcnZhYmxlPFQ+KDxhbnk+b2JzZXJ2YWJsZXMpLmxpZnQobmV3IFJhY2VPcGVyYXRvcjxUPigpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFJhY2VPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFQ+IHtcbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBSYWNlU3Vic2NyaWJlcihzdWJzY3JpYmVyKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmV4cG9ydCBjbGFzcyBSYWNlU3Vic2NyaWJlcjxUPiBleHRlbmRzIE91dGVyU3Vic2NyaWJlcjxULCBUPiB7XG4gIHByaXZhdGUgaGFzRmlyc3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBvYnNlcnZhYmxlczogT2JzZXJ2YWJsZTxhbnk+W10gPSBbXTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFQ+KSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KG9ic2VydmFibGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMub2JzZXJ2YWJsZXMucHVzaChvYnNlcnZhYmxlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKSB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZXMgPSB0aGlzLm9ic2VydmFibGVzO1xuICAgIGNvbnN0IGxlbiA9IG9ic2VydmFibGVzLmxlbmd0aDtcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IG9ic2VydmFibGUgPSBvYnNlcnZhYmxlc1tpXTtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IHN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIG9ic2VydmFibGUsIG9ic2VydmFibGUsIGkpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMuYWRkKHN1YnNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgICB0aGlzLm9ic2VydmFibGVzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBub3RpZnlOZXh0KG91dGVyVmFsdWU6IFQsIGlubmVyVmFsdWU6IFQsXG4gICAgICAgICAgICAgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIsXG4gICAgICAgICAgICAgaW5uZXJTdWI6IElubmVyU3Vic2NyaWJlcjxULCBUPik6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNGaXJzdCkge1xuICAgICAgdGhpcy5oYXNGaXJzdCA9IHRydWU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdWJzY3JpcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpICE9PSBvdXRlckluZGV4KSB7XG4gICAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaXB0aW9uc1tpXTtcblxuICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIHRoaXMucmVtb3ZlKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoaW5uZXJWYWx1ZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
