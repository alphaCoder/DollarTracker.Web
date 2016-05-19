System.register(['../Subscriber', '../util/EmptyError'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, EmptyError_1;
    var LastOperator, LastSubscriber;
    /**
     * Returns an Observable that emits only the last item emitted by the source Observable.
     * It optionally takes a predicate function as a parameter, in which case, rather than emitting
     * the last item from the source Observable, the resulting Observable will emit the last item
     * from the source Observable that satisfies the predicate.
     *
     * <img src="./img/last.png" width="100%">
     *
     * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
     * callback if the Observable completes before any `next` notification was sent.
     * @param {function} predicate - the condition any source emitted item has to satisfy.
     * @return {Observable} an Observable that emits only the last item satisfying the given condition
     * from the source, or an NoSuchElementException if no such items are emitted.
     * @throws - Throws if no items that match the predicate are emitted by the source Observable.
     * @method last
     * @owner Observable
     */
    function last(predicate, resultSelector, defaultValue) {
        return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
    }
    exports_1("last", last);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (EmptyError_1_1) {
                EmptyError_1 = EmptyError_1_1;
            }],
        execute: function() {
            LastOperator = (function () {
                function LastOperator(predicate, resultSelector, defaultValue, source) {
                    this.predicate = predicate;
                    this.resultSelector = resultSelector;
                    this.defaultValue = defaultValue;
                    this.source = source;
                }
                LastOperator.prototype.call = function (observer, source) {
                    return source._subscribe(new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
                };
                return LastOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            LastSubscriber = (function (_super) {
                __extends(LastSubscriber, _super);
                function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
                    _super.call(this, destination);
                    this.predicate = predicate;
                    this.resultSelector = resultSelector;
                    this.defaultValue = defaultValue;
                    this.source = source;
                    this.hasValue = false;
                    this.index = 0;
                    if (typeof defaultValue !== 'undefined') {
                        this.lastValue = defaultValue;
                        this.hasValue = true;
                    }
                }
                LastSubscriber.prototype._next = function (value) {
                    var index = this.index++;
                    if (this.predicate) {
                        this._tryPredicate(value, index);
                    }
                    else {
                        if (this.resultSelector) {
                            this._tryResultSelector(value, index);
                            return;
                        }
                        this.lastValue = value;
                        this.hasValue = true;
                    }
                };
                LastSubscriber.prototype._tryPredicate = function (value, index) {
                    var result;
                    try {
                        result = this.predicate(value, index, this.source);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    if (result) {
                        if (this.resultSelector) {
                            this._tryResultSelector(value, index);
                            return;
                        }
                        this.lastValue = value;
                        this.hasValue = true;
                    }
                };
                LastSubscriber.prototype._tryResultSelector = function (value, index) {
                    var result;
                    try {
                        result = this.resultSelector(value, index);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    this.lastValue = result;
                    this.hasValue = true;
                };
                LastSubscriber.prototype._complete = function () {
                    var destination = this.destination;
                    if (this.hasValue) {
                        destination.next(this.lastValue);
                        destination.complete();
                    }
                    else {
                        destination.error(new EmptyError_1.EmptyError);
                    }
                };
                return LastSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2xhc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUtBOzs7Ozs7Ozs7Ozs7Ozs7O09BZ0JHO0lBQ0gsY0FBMkIsU0FBdUUsRUFDdkUsY0FBc0QsRUFDdEQsWUFBZ0I7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBSkQsdUJBSUMsQ0FBQTs7Ozs7Ozs7OztZQVNEO2dCQUNFLHNCQUFvQixTQUF1RSxFQUN2RSxjQUErQyxFQUMvQyxZQUFrQixFQUNsQixNQUFzQjtvQkFIdEIsY0FBUyxHQUFULFNBQVMsQ0FBOEQ7b0JBQ3ZFLG1CQUFjLEdBQWQsY0FBYyxDQUFpQztvQkFDL0MsaUJBQVksR0FBWixZQUFZLENBQU07b0JBQ2xCLFdBQU0sR0FBTixNQUFNLENBQWdCO2dCQUMxQyxDQUFDO2dCQUVELDJCQUFJLEdBQUosVUFBSyxRQUF1QixFQUFFLE1BQVc7b0JBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksY0FBYyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDOUgsQ0FBQztnQkFDSCxtQkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFtQyxrQ0FBYTtnQkFLOUMsd0JBQVksV0FBMEIsRUFDbEIsU0FBdUUsRUFDdkUsY0FBK0MsRUFDL0MsWUFBa0IsRUFDbEIsTUFBc0I7b0JBQ3hDLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQUpELGNBQVMsR0FBVCxTQUFTLENBQThEO29CQUN2RSxtQkFBYyxHQUFkLGNBQWMsQ0FBaUM7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QUMsUUFBUSxFQUFFLENBQUM7b0JBQ3pCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLHVCQUFVLENBQUMsQ0FBQztvQkFDcEMsQ0FBQztnQkFDSCxDQUFDO2dCQUNILHFCQUFDO1lBQUQsQ0F0RUEsQUFzRUMsQ0F0RWtDLHVCQUFVLEdBc0U1QyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9sYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge0VtcHR5RXJyb3J9IGZyb20gJy4uL3V0aWwvRW1wdHlFcnJvcic7XG5cbi8qKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgb25seSB0aGUgbGFzdCBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICogSXQgb3B0aW9uYWxseSB0YWtlcyBhIHByZWRpY2F0ZSBmdW5jdGlvbiBhcyBhIHBhcmFtZXRlciwgaW4gd2hpY2ggY2FzZSwgcmF0aGVyIHRoYW4gZW1pdHRpbmdcbiAqIHRoZSBsYXN0IGl0ZW0gZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUsIHRoZSByZXN1bHRpbmcgT2JzZXJ2YWJsZSB3aWxsIGVtaXQgdGhlIGxhc3QgaXRlbVxuICogZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUgdGhhdCBzYXRpc2ZpZXMgdGhlIHByZWRpY2F0ZS5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL2xhc3QucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQHRocm93cyB7RW1wdHlFcnJvcn0gRGVsaXZlcnMgYW4gRW1wdHlFcnJvciB0byB0aGUgT2JzZXJ2ZXIncyBgZXJyb3JgXG4gKiBjYWxsYmFjayBpZiB0aGUgT2JzZXJ2YWJsZSBjb21wbGV0ZXMgYmVmb3JlIGFueSBgbmV4dGAgbm90aWZpY2F0aW9uIHdhcyBzZW50LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gcHJlZGljYXRlIC0gdGhlIGNvbmRpdGlvbiBhbnkgc291cmNlIGVtaXR0ZWQgaXRlbSBoYXMgdG8gc2F0aXNmeS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBvbmx5IHRoZSBsYXN0IGl0ZW0gc2F0aXNmeWluZyB0aGUgZ2l2ZW4gY29uZGl0aW9uXG4gKiBmcm9tIHRoZSBzb3VyY2UsIG9yIGFuIE5vU3VjaEVsZW1lbnRFeGNlcHRpb24gaWYgbm8gc3VjaCBpdGVtcyBhcmUgZW1pdHRlZC5cbiAqIEB0aHJvd3MgLSBUaHJvd3MgaWYgbm8gaXRlbXMgdGhhdCBtYXRjaCB0aGUgcHJlZGljYXRlIGFyZSBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqIEBtZXRob2QgbGFzdFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxhc3Q8VCwgUj4ocHJlZGljYXRlPzogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTZWxlY3Rvcj86ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gUiB8IHZvaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU/OiBSKTogT2JzZXJ2YWJsZTxUIHwgUj4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBMYXN0T3BlcmF0b3IocHJlZGljYXRlLCByZXN1bHRTZWxlY3RvciwgZGVmYXVsdFZhbHVlLCB0aGlzKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFzdFNpZ25hdHVyZTxUPiB7XG4gIChwcmVkaWNhdGU/OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4gYm9vbGVhbik6IE9ic2VydmFibGU8VD47XG4gIChwcmVkaWNhdGU6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiBib29sZWFuLCByZXN1bHRTZWxlY3Rvcjogdm9pZCwgZGVmYXVsdFZhbHVlPzogVCk6IE9ic2VydmFibGU8VD47XG4gIDxSPihwcmVkaWNhdGU/OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4gYm9vbGVhbiwgcmVzdWx0U2VsZWN0b3I/OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IFIsXG4gICAgICBkZWZhdWx0VmFsdWU/OiBSKTogT2JzZXJ2YWJsZTxSPjtcbn1cblxuY2xhc3MgTGFzdE9wZXJhdG9yPFQsIFI+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgUj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByZWRpY2F0ZT86ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiBib29sZWFuLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlc3VsdFNlbGVjdG9yPzogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSLFxuICAgICAgICAgICAgICBwcml2YXRlIGRlZmF1bHRWYWx1ZT86IGFueSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzb3VyY2U/OiBPYnNlcnZhYmxlPFQ+KSB7XG4gIH1cblxuICBjYWxsKG9ic2VydmVyOiBTdWJzY3JpYmVyPFI+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBMYXN0U3Vic2NyaWJlcihvYnNlcnZlciwgdGhpcy5wcmVkaWNhdGUsIHRoaXMucmVzdWx0U2VsZWN0b3IsIHRoaXMuZGVmYXVsdFZhbHVlLCB0aGlzLnNvdXJjZSkpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBMYXN0U3Vic2NyaWJlcjxULCBSPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBwcml2YXRlIGxhc3RWYWx1ZTogVCB8IFI7XG4gIHByaXZhdGUgaGFzVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBpbmRleDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxSPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwcmVkaWNhdGU/OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4gYm9vbGVhbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZXN1bHRTZWxlY3Rvcj86ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gUixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkZWZhdWx0VmFsdWU/OiBhbnksXG4gICAgICAgICAgICAgIHByaXZhdGUgc291cmNlPzogT2JzZXJ2YWJsZTxUPikge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgICBpZiAodHlwZW9mIGRlZmF1bHRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubGFzdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgICAgdGhpcy5oYXNWYWx1ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluZGV4Kys7XG4gICAgaWYgKHRoaXMucHJlZGljYXRlKSB7XG4gICAgICB0aGlzLl90cnlQcmVkaWNhdGUodmFsdWUsIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5fdHJ5UmVzdWx0U2VsZWN0b3IodmFsdWUsIGluZGV4KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaGFzVmFsdWUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RyeVByZWRpY2F0ZSh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikge1xuICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5wcmVkaWNhdGUodmFsdWUsIGluZGV4LCB0aGlzLnNvdXJjZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGlmICh0aGlzLnJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuX3RyeVJlc3VsdFNlbGVjdG9yKHZhbHVlLCBpbmRleCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMubGFzdFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmhhc1ZhbHVlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90cnlSZXN1bHRTZWxlY3Rvcih2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikge1xuICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5yZXN1bHRTZWxlY3Rvcih2YWx1ZSwgaW5kZXgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmxhc3RWYWx1ZSA9IHJlc3VsdDtcbiAgICB0aGlzLmhhc1ZhbHVlID0gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKTogdm9pZCB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgIGlmICh0aGlzLmhhc1ZhbHVlKSB7XG4gICAgICBkZXN0aW5hdGlvbi5uZXh0KHRoaXMubGFzdFZhbHVlKTtcbiAgICAgIGRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3RpbmF0aW9uLmVycm9yKG5ldyBFbXB0eUVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
