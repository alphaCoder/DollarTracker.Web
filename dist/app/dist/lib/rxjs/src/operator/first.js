System.register(['../Subscriber', '../util/EmptyError'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, EmptyError_1;
    var FirstOperator, FirstSubscriber;
    /**
     * Emits only the first value (or the first value that meets some condition)
     * emitted by the source Observable.
     *
     * <span class="informal">Emits only the first value. Or emits only the first
     * value that passes some test.</span>
     *
     * <img src="./img/first.png" width="100%">
     *
     * If called with no arguments, `first` emits the first value of the source
     * Observable, then completes. If called with a `predicate` function, `first`
     * emits the first value of the source that matches the specified condition. It
     * may also take a `resultSelector` function to produce the output value from
     * the input value, and a `defaultValue` to emit in case the source completes
     * before it is able to emit a valid value. Throws an error if `defaultValue`
     * was not provided and a matching element is not found.
     *
     * @example <caption>Emit only the first click that happens on the DOM</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.first();
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Emits the first click that happens on a DIV</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.first(ev => ev.target.tagName === 'DIV');
     * result.subscribe(x => console.log(x));
     *
     * @see {@link filter}
     * @see {@link find}
     * @see {@link take}
     *
     * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
     * callback if the Observable completes before any `next` notification was sent.
     *
     * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
     * An optional function called with each item to test for condition matching.
     * @param {function(value: T, index: number): R} [resultSelector] A function to
     * produce the value on the output Observable based on the values
     * and the indices of the source Observable. The arguments passed to this
     * function are:
     * - `value`: the value that was emitted on the source.
     * - `index`: the "index" of the value from the source.
     * @param {R} [defaultValue] The default value emitted in case no valid value
     * was found on the source.
     * @return {Observable<T|R>} an Observable of the first item that matches the
     * condition.
     * @method first
     * @owner Observable
     */
    function first(predicate, resultSelector, defaultValue) {
        return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
    }
    exports_1("first", first);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (EmptyError_1_1) {
                EmptyError_1 = EmptyError_1_1;
            }],
        execute: function() {
            FirstOperator = (function () {
                function FirstOperator(predicate, resultSelector, defaultValue, source) {
                    this.predicate = predicate;
                    this.resultSelector = resultSelector;
                    this.defaultValue = defaultValue;
                    this.source = source;
                }
                FirstOperator.prototype.call = function (observer, source) {
                    return source._subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
                };
                return FirstOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            FirstSubscriber = (function (_super) {
                __extends(FirstSubscriber, _super);
                function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
                    _super.call(this, destination);
                    this.predicate = predicate;
                    this.resultSelector = resultSelector;
                    this.defaultValue = defaultValue;
                    this.source = source;
                    this.index = 0;
                    this.hasCompleted = false;
                }
                FirstSubscriber.prototype._next = function (value) {
                    var index = this.index++;
                    if (this.predicate) {
                        this._tryPredicate(value, index);
                    }
                    else {
                        this._emit(value, index);
                    }
                };
                FirstSubscriber.prototype._tryPredicate = function (value, index) {
                    var result;
                    try {
                        result = this.predicate(value, index, this.source);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    if (result) {
                        this._emit(value, index);
                    }
                };
                FirstSubscriber.prototype._emit = function (value, index) {
                    if (this.resultSelector) {
                        this._tryResultSelector(value, index);
                        return;
                    }
                    this._emitFinal(value);
                };
                FirstSubscriber.prototype._tryResultSelector = function (value, index) {
                    var result;
                    try {
                        result = this.resultSelector(value, index);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    this._emitFinal(result);
                };
                FirstSubscriber.prototype._emitFinal = function (value) {
                    var destination = this.destination;
                    destination.next(value);
                    destination.complete();
                    this.hasCompleted = true;
                };
                FirstSubscriber.prototype._complete = function () {
                    var destination = this.destination;
                    if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
                        destination.next(this.defaultValue);
                        destination.complete();
                    }
                    else if (!this.hasCompleted) {
                        destination.error(new EmptyError_1.EmptyError);
                    }
                };
                return FirstSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2ZpcnN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BZ0RHO0lBQ0gsZUFBNEIsU0FBdUUsRUFDdkUsY0FBK0MsRUFDL0MsWUFBZ0I7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBSkQseUJBSUMsQ0FBQTs7Ozs7Ozs7OztZQVNEO2dCQUNFLHVCQUFvQixTQUF1RSxFQUN2RSxjQUErQyxFQUMvQyxZQUFrQixFQUNsQixNQUFzQjtvQkFIdEIsY0FBUyxHQUFULFNBQVMsQ0FBOEQ7b0JBQ3ZFLG1CQUFjLEdBQWQsY0FBYyxDQUFpQztvQkFDL0MsaUJBQVksR0FBWixZQUFZLENBQU07b0JBQ2xCLFdBQU0sR0FBTixNQUFNLENBQWdCO2dCQUMxQyxDQUFDO2dCQUVELDRCQUFJLEdBQUosVUFBSyxRQUF1QixFQUFFLE1BQVc7b0JBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksZUFBZSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0gsQ0FBQztnQkFDSCxvQkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFvQyxtQ0FBYTtnQkFJL0MseUJBQVksV0FBMEIsRUFDbEIsU0FBdUUsRUFDdkUsY0FBK0MsRUFDL0MsWUFBa0IsRUFDbEIsTUFBc0I7b0JBQ3hDLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQUpELGNBQVMsR0FBVCxTQUFTLENB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LFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDekIsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLHVCQUFVLENBQUMsQ0FBQztvQkFDcEMsQ0FBQztnQkFDSCxDQUFDO2dCQUNILHNCQUFDO1lBQUQsQ0FyRUEsQUFxRUMsQ0FyRW1DLHVCQUFVLEdBcUU3QyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9maXJzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtFbXB0eUVycm9yfSBmcm9tICcuLi91dGlsL0VtcHR5RXJyb3InO1xuXG4vKipcbiAqIEVtaXRzIG9ubHkgdGhlIGZpcnN0IHZhbHVlIChvciB0aGUgZmlyc3QgdmFsdWUgdGhhdCBtZWV0cyBzb21lIGNvbmRpdGlvbilcbiAqIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5FbWl0cyBvbmx5IHRoZSBmaXJzdCB2YWx1ZS4gT3IgZW1pdHMgb25seSB0aGUgZmlyc3RcbiAqIHZhbHVlIHRoYXQgcGFzc2VzIHNvbWUgdGVzdC48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9maXJzdC5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBJZiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudHMsIGBmaXJzdGAgZW1pdHMgdGhlIGZpcnN0IHZhbHVlIG9mIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUsIHRoZW4gY29tcGxldGVzLiBJZiBjYWxsZWQgd2l0aCBhIGBwcmVkaWNhdGVgIGZ1bmN0aW9uLCBgZmlyc3RgXG4gKiBlbWl0cyB0aGUgZmlyc3QgdmFsdWUgb2YgdGhlIHNvdXJjZSB0aGF0IG1hdGNoZXMgdGhlIHNwZWNpZmllZCBjb25kaXRpb24uIEl0XG4gKiBtYXkgYWxzbyB0YWtlIGEgYHJlc3VsdFNlbGVjdG9yYCBmdW5jdGlvbiB0byBwcm9kdWNlIHRoZSBvdXRwdXQgdmFsdWUgZnJvbVxuICogdGhlIGlucHV0IHZhbHVlLCBhbmQgYSBgZGVmYXVsdFZhbHVlYCB0byBlbWl0IGluIGNhc2UgdGhlIHNvdXJjZSBjb21wbGV0ZXNcbiAqIGJlZm9yZSBpdCBpcyBhYmxlIHRvIGVtaXQgYSB2YWxpZCB2YWx1ZS4gVGhyb3dzIGFuIGVycm9yIGlmIGBkZWZhdWx0VmFsdWVgXG4gKiB3YXMgbm90IHByb3ZpZGVkIGFuZCBhIG1hdGNoaW5nIGVsZW1lbnQgaXMgbm90IGZvdW5kLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkVtaXQgb25seSB0aGUgZmlyc3QgY2xpY2sgdGhhdCBoYXBwZW5zIG9uIHRoZSBET008L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIHJlc3VsdCA9IGNsaWNrcy5maXJzdCgpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5FbWl0cyB0aGUgZmlyc3QgY2xpY2sgdGhhdCBoYXBwZW5zIG9uIGEgRElWPC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciByZXN1bHQgPSBjbGlja3MuZmlyc3QoZXYgPT4gZXYudGFyZ2V0LnRhZ05hbWUgPT09ICdESVYnKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgZmlsdGVyfVxuICogQHNlZSB7QGxpbmsgZmluZH1cbiAqIEBzZWUge0BsaW5rIHRha2V9XG4gKlxuICogQHRocm93cyB7RW1wdHlFcnJvcn0gRGVsaXZlcnMgYW4gRW1wdHlFcnJvciB0byB0aGUgT2JzZXJ2ZXIncyBgZXJyb3JgXG4gKiBjYWxsYmFjayBpZiB0aGUgT2JzZXJ2YWJsZSBjb21wbGV0ZXMgYmVmb3JlIGFueSBgbmV4dGAgbm90aWZpY2F0aW9uIHdhcyBzZW50LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24odmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIHNvdXJjZTogT2JzZXJ2YWJsZTxUPik6IGJvb2xlYW59IFtwcmVkaWNhdGVdXG4gKiBBbiBvcHRpb25hbCBmdW5jdGlvbiBjYWxsZWQgd2l0aCBlYWNoIGl0ZW0gdG8gdGVzdCBmb3IgY29uZGl0aW9uIG1hdGNoaW5nLlxuICogQHBhcmFtIHtmdW5jdGlvbih2YWx1ZTogVCwgaW5kZXg6IG51bWJlcik6IFJ9IFtyZXN1bHRTZWxlY3Rvcl0gQSBmdW5jdGlvbiB0b1xuICogcHJvZHVjZSB0aGUgdmFsdWUgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlIGJhc2VkIG9uIHRoZSB2YWx1ZXNcbiAqIGFuZCB0aGUgaW5kaWNlcyBvZiB0aGUgc291cmNlIE9ic2VydmFibGUuIFRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoaXNcbiAqIGZ1bmN0aW9uIGFyZTpcbiAqIC0gYHZhbHVlYDogdGhlIHZhbHVlIHRoYXQgd2FzIGVtaXR0ZWQgb24gdGhlIHNvdXJjZS5cbiAqIC0gYGluZGV4YDogdGhlIFwiaW5kZXhcIiBvZiB0aGUgdmFsdWUgZnJvbSB0aGUgc291cmNlLlxuICogQHBhcmFtIHtSfSBbZGVmYXVsdFZhbHVlXSBUaGUgZGVmYXVsdCB2YWx1ZSBlbWl0dGVkIGluIGNhc2Ugbm8gdmFsaWQgdmFsdWVcbiAqIHdhcyBmb3VuZCBvbiB0aGUgc291cmNlLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxUfFI+fSBhbiBPYnNlcnZhYmxlIG9mIHRoZSBmaXJzdCBpdGVtIHRoYXQgbWF0Y2hlcyB0aGVcbiAqIGNvbmRpdGlvbi5cbiAqIEBtZXRob2QgZmlyc3RcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdDxULCBSPihwcmVkaWNhdGU/OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4gYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTZWxlY3Rvcj86ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU/OiBSKTogT2JzZXJ2YWJsZTxUIHwgUj4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBGaXJzdE9wZXJhdG9yKHByZWRpY2F0ZSwgcmVzdWx0U2VsZWN0b3IsIGRlZmF1bHRWYWx1ZSwgdGhpcykpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpcnN0U2lnbmF0dXJlPFQ+IHtcbiAgKHByZWRpY2F0ZT86ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiBib29sZWFuKTogT2JzZXJ2YWJsZTxUPjtcbiAgKHByZWRpY2F0ZTogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IGJvb2xlYW4sIHJlc3VsdFNlbGVjdG9yOiB2b2lkLCBkZWZhdWx0VmFsdWU/OiBUKTogT2JzZXJ2YWJsZTxUPjtcbiAgPFI+KHByZWRpY2F0ZT86ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiBib29sZWFuLCByZXN1bHRTZWxlY3Rvcj86ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gUixcbiAgICAgIGRlZmF1bHRWYWx1ZT86IFIpOiBPYnNlcnZhYmxlPFI+O1xufVxuXG5jbGFzcyBGaXJzdE9wZXJhdG9yPFQsIFI+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgUj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByZWRpY2F0ZT86ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiBib29sZWFuLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlc3VsdFNlbGVjdG9yPzogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSLFxuICAgICAgICAgICAgICBwcml2YXRlIGRlZmF1bHRWYWx1ZT86IGFueSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzb3VyY2U/OiBPYnNlcnZhYmxlPFQ+KSB7XG4gIH1cblxuICBjYWxsKG9ic2VydmVyOiBTdWJzY3JpYmVyPFI+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBGaXJzdFN1YnNjcmliZXIob2JzZXJ2ZXIsIHRoaXMucHJlZGljYXRlLCB0aGlzLnJlc3VsdFNlbGVjdG9yLCB0aGlzLmRlZmF1bHRWYWx1ZSwgdGhpcy5zb3VyY2UpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgRmlyc3RTdWJzY3JpYmVyPFQsIFI+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIHByaXZhdGUgaW5kZXg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgaGFzQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8Uj4sXG4gICAgICAgICAgICAgIHByaXZhdGUgcHJlZGljYXRlPzogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IGJvb2xlYW4sXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVzdWx0U2VsZWN0b3I/OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IFIsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGVmYXVsdFZhbHVlPzogYW55LFxuICAgICAgICAgICAgICBwcml2YXRlIHNvdXJjZT86IE9ic2VydmFibGU8VD4pIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5kZXgrKztcbiAgICBpZiAodGhpcy5wcmVkaWNhdGUpIHtcbiAgICAgIHRoaXMuX3RyeVByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lbWl0KHZhbHVlLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHJ5UHJlZGljYXRlKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSB7XG4gICAgbGV0IHJlc3VsdDogYW55O1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIHRoaXMuc291cmNlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5fZW1pdCh2YWx1ZSwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2VtaXQodmFsdWU6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICB0aGlzLl90cnlSZXN1bHRTZWxlY3Rvcih2YWx1ZSwgaW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9lbWl0RmluYWwodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHJ5UmVzdWx0U2VsZWN0b3IodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpIHtcbiAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IHRoaXMucmVzdWx0U2VsZWN0b3IodmFsdWUsIGluZGV4KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZW1pdEZpbmFsKHJlc3VsdCk7XG4gIH1cblxuICBwcml2YXRlIF9lbWl0RmluYWwodmFsdWU6IGFueSkge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICBkZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIHRoaXMuaGFzQ29tcGxldGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKTogdm9pZCB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgIGlmICghdGhpcy5oYXNDb21wbGV0ZWQgJiYgdHlwZW9mIHRoaXMuZGVmYXVsdFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZGVzdGluYXRpb24ubmV4dCh0aGlzLmRlZmF1bHRWYWx1ZSk7XG4gICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuaGFzQ29tcGxldGVkKSB7XG4gICAgICBkZXN0aW5hdGlvbi5lcnJvcihuZXcgRW1wdHlFcnJvcik7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
