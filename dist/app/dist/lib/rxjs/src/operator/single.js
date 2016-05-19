System.register(['../Subscriber', '../util/EmptyError'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, EmptyError_1;
    var SingleOperator, SingleSubscriber;
    /**
     * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
     * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
     * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
     *
     * <img src="./img/single.png" width="100%">
     *
     * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
     * callback if the Observable completes before any `next` notification was sent.
     * @param {Function} a predicate function to evaluate items emitted by the source Observable.
     * @return {Observable<T>} an Observable that emits the single item emitted by the source Observable that matches
     * the predicate.
     .
     * @method single
     * @owner Observable
     */
    function single(predicate) {
        return this.lift(new SingleOperator(predicate, this));
    }
    exports_1("single", single);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (EmptyError_1_1) {
                EmptyError_1 = EmptyError_1_1;
            }],
        execute: function() {
            SingleOperator = (function () {
                function SingleOperator(predicate, source) {
                    this.predicate = predicate;
                    this.source = source;
                }
                SingleOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
                };
                return SingleOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SingleSubscriber = (function (_super) {
                __extends(SingleSubscriber, _super);
                function SingleSubscriber(destination, predicate, source) {
                    _super.call(this, destination);
                    this.predicate = predicate;
                    this.source = source;
                    this.seenValue = false;
                    this.index = 0;
                }
                SingleSubscriber.prototype.applySingleValue = function (value) {
                    if (this.seenValue) {
                        this.destination.error('Sequence contains more than one element');
                    }
                    else {
                        this.seenValue = true;
                        this.singleValue = value;
                    }
                };
                SingleSubscriber.prototype._next = function (value) {
                    var predicate = this.predicate;
                    this.index++;
                    if (predicate) {
                        this.tryNext(value);
                    }
                    else {
                        this.applySingleValue(value);
                    }
                };
                SingleSubscriber.prototype.tryNext = function (value) {
                    try {
                        var result = this.predicate(value, this.index, this.source);
                        if (result) {
                            this.applySingleValue(value);
                        }
                    }
                    catch (err) {
                        this.destination.error(err);
                    }
                };
                SingleSubscriber.prototype._complete = function () {
                    var destination = this.destination;
                    if (this.index > 0) {
                        destination.next(this.seenValue ? this.singleValue : undefined);
                        destination.complete();
                    }
                    else {
                        destination.error(new EmptyError_1.EmptyError);
                    }
                };
                return SingleSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3NpbmdsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBTUE7Ozs7Ozs7Ozs7Ozs7OztPQWVHO0lBQ0gsZ0JBQTBCLFNBQXVFO1FBQy9GLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFGRCwyQkFFQyxDQUFBOzs7Ozs7Ozs7O1lBTUQ7Z0JBQ0Usd0JBQW9CLFNBQXVFLEVBQ3ZFLE1BQXNCO29CQUR0QixjQUFTLEdBQVQsU0FBUyxDQUE4RDtvQkFDdkUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7Z0JBQzFDLENBQUM7Z0JBRUQsNkJBQUksR0FBSixVQUFLLFVBQXlCLEVBQUUsTUFBVztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDMUYsQ0FBQztnQkFDSCxxQkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFrQyxvQ0FBYTtnQkFLN0MsMEJBQVksV0FBd0IsRUFDaEIsU0FBdUUsRUFDdkUsTUFBc0I7b0JBQ3hDLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQUZELGNBQVMsR0FBVCxTQUFTLENBQThEO29CQUN2RSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtvQkFObEMsY0FBUyxHQUFZLEtBQUssQ0FBQztvQkFFM0IsVUFBSyxHQUFXLENBQUMsQ0FBQztnQkFNMUIsQ0FBQztnQkFFTywyQ0FBZ0IsR0FBeEIsVUFBeUIsS0FBUTtvQkFDL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7b0JBQ3BFLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUMzQixDQUFDO2dCQUNILENBQUM7Z0JBRVMsZ0NBQUssR0FBZixVQUFnQixLQUFRO29CQUN0QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ2IsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDL0IsQ0FBQztnQkFDSCxDQUFDO2dCQUVPLGtDQUFPLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsSUFBSSxDQUFDO3dCQUNILElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUM5RCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDL0IsQ0FBQztvQkFDSCxDQUFFO29CQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFUyxvQ0FBUyxHQUFuQjtvQkFDRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUVyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ25CLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDO3dCQUNoRSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3pCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLHVCQUFVLENBQUMsQ0FBQztvQkFDcEMsQ0FBQztnQkFDSCxDQUFDO2dCQUNILHVCQUFDO1lBQUQsQ0FuREEsQUFtREMsQ0FuRGlDLHVCQUFVLEdBbUQzQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9zaW5nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gJy4uL09ic2VydmVyJztcbmltcG9ydCB7RW1wdHlFcnJvcn0gZnJvbSAnLi4vdXRpbC9FbXB0eUVycm9yJztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgc2luZ2xlIGl0ZW0gZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUgdGhhdCBtYXRjaGVzIGEgc3BlY2lmaWVkXG4gKiBwcmVkaWNhdGUsIGlmIHRoYXQgT2JzZXJ2YWJsZSBlbWl0cyBvbmUgc3VjaCBpdGVtLiBJZiB0aGUgc291cmNlIE9ic2VydmFibGUgZW1pdHMgbW9yZSB0aGFuIG9uZSBzdWNoIGl0ZW0gb3Igbm9cbiAqIHN1Y2ggaXRlbXMsIG5vdGlmeSBvZiBhbiBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24gb3IgTm9TdWNoRWxlbWVudEV4Y2VwdGlvbiByZXNwZWN0aXZlbHkuXG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9zaW5nbGUucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQHRocm93cyB7RW1wdHlFcnJvcn0gRGVsaXZlcnMgYW4gRW1wdHlFcnJvciB0byB0aGUgT2JzZXJ2ZXIncyBgZXJyb3JgXG4gKiBjYWxsYmFjayBpZiB0aGUgT2JzZXJ2YWJsZSBjb21wbGV0ZXMgYmVmb3JlIGFueSBgbmV4dGAgbm90aWZpY2F0aW9uIHdhcyBzZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gYSBwcmVkaWNhdGUgZnVuY3Rpb24gdG8gZXZhbHVhdGUgaXRlbXMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFQ+fSBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIHNpbmdsZSBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHRoYXQgbWF0Y2hlc1xuICogdGhlIHByZWRpY2F0ZS5cbiAuXG4gKiBAbWV0aG9kIHNpbmdsZVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZTxUPihwcmVkaWNhdGU/OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4gYm9vbGVhbik6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBTaW5nbGVPcGVyYXRvcihwcmVkaWNhdGUsIHRoaXMpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVTaWduYXR1cmU8VD4ge1xuICAocHJlZGljYXRlPzogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IGJvb2xlYW4pOiBPYnNlcnZhYmxlPFQ+O1xufVxuXG5jbGFzcyBTaW5nbGVPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcmVkaWNhdGU/OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4gYm9vbGVhbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzb3VyY2U/OiBPYnNlcnZhYmxlPFQ+KSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFNpbmdsZVN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcmVkaWNhdGUsIHRoaXMuc291cmNlKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIFNpbmdsZVN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgcHJpdmF0ZSBzZWVuVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzaW5nbGVWYWx1ZTogVDtcbiAgcHJpdmF0ZSBpbmRleDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogT2JzZXJ2ZXI8VD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgcHJlZGljYXRlPzogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IGJvb2xlYW4sXG4gICAgICAgICAgICAgIHByaXZhdGUgc291cmNlPzogT2JzZXJ2YWJsZTxUPikge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlTaW5nbGVWYWx1ZSh2YWx1ZTogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlZW5WYWx1ZSkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcignU2VxdWVuY2UgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBlbGVtZW50Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VlblZhbHVlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2luZ2xlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBjb25zdCBwcmVkaWNhdGUgPSB0aGlzLnByZWRpY2F0ZTtcbiAgICB0aGlzLmluZGV4Kys7XG4gICAgaWYgKHByZWRpY2F0ZSkge1xuICAgICAgdGhpcy50cnlOZXh0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hcHBseVNpbmdsZVZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyeU5leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wcmVkaWNhdGUodmFsdWUsIHRoaXMuaW5kZXgsIHRoaXMuc291cmNlKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5hcHBseVNpbmdsZVZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcblxuICAgIGlmICh0aGlzLmluZGV4ID4gMCkge1xuICAgICAgZGVzdGluYXRpb24ubmV4dCh0aGlzLnNlZW5WYWx1ZSA/IHRoaXMuc2luZ2xlVmFsdWUgOiB1bmRlZmluZWQpO1xuICAgICAgZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdGluYXRpb24uZXJyb3IobmV3IEVtcHR5RXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
