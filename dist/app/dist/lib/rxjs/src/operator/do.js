System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var DoOperator, DoSubscriber;
    /**
     * Perform a side effect for every emission on the source Observable, but return
     * an Observable that is identical to the source.
     *
     * <span class="informal">Intercepts each emission on the source and runs a
     * function, but returns an output which is identical to the source.</span>
     *
     * <img src="./img/do.png" width="100%">
     *
     * Returns a mirrored Observable of the source Observable, but modified so that
     * the provided Observer is called to perform a side effect for every value,
     * error, and completion emitted by the source. Any errors that are thrown in
     * the aforementioned Observer or handlers are safely sent down the error path
     * of the output Observable.
     *
     * This operator is useful for debugging your Observables for the correct values
     * or performing other side effects.
     *
     * Note: this is different to a `subscribe` on the Observable. If the Observable
     * returned by `do` is not subscribed, the side effects specified by the
     * Observer will never happen. `do` therefore simply spies on existing
     * execution, it does not trigger an execution to happen like `subscribe` does.
     *
     * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var positions = clicks
     *   .do(ev => console.log(ev))
     *   .map(ev => ev.clientX);
     * positions.subscribe(x => console.log(x));
     *
     * @see {@link map}
     * @see {@link subscribe}
     *
     * @param {Observer|function} [nextOrObserver] A normal Observer object or a
     * callback for `next`.
     * @param {function} [error] Callback for errors in the source.
     * @param {function} [complete] Callback for the completion of the source.
     * @return {Observable} An Observable identical to the source, but runs the
     * specified Observer or callback(s) for each item.
     * @method do
     * @name do
     * @owner Observable
     */
    function _do(nextOrObserver, error, complete) {
        return this.lift(new DoOperator(nextOrObserver, error, complete));
    }
    exports_1("_do", _do);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            DoOperator = (function () {
                function DoOperator(nextOrObserver, error, complete) {
                    this.nextOrObserver = nextOrObserver;
                    this.error = error;
                    this.complete = complete;
                }
                DoOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
                };
                return DoOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            DoSubscriber = (function (_super) {
                __extends(DoSubscriber, _super);
                function DoSubscriber(destination, nextOrObserver, error, complete) {
                    _super.call(this, destination);
                    var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
                    safeSubscriber.syncErrorThrowable = true;
                    this.add(safeSubscriber);
                    this.safeSubscriber = safeSubscriber;
                }
                DoSubscriber.prototype._next = function (value) {
                    var safeSubscriber = this.safeSubscriber;
                    safeSubscriber.next(value);
                    if (safeSubscriber.syncErrorThrown) {
                        this.destination.error(safeSubscriber.syncErrorValue);
                    }
                    else {
                        this.destination.next(value);
                    }
                };
                DoSubscriber.prototype._error = function (err) {
                    var safeSubscriber = this.safeSubscriber;
                    safeSubscriber.error(err);
                    if (safeSubscriber.syncErrorThrown) {
                        this.destination.error(safeSubscriber.syncErrorValue);
                    }
                    else {
                        this.destination.error(err);
                    }
                };
                DoSubscriber.prototype._complete = function () {
                    var safeSubscriber = this.safeSubscriber;
                    safeSubscriber.complete();
                    if (safeSubscriber.syncErrorThrown) {
                        this.destination.error(safeSubscriber.syncErrorValue);
                    }
                    else {
                        this.destination.complete();
                    }
                };
                return DoSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2RvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BMENHO0lBQ0gsYUFBdUIsY0FBc0QsRUFDdEQsS0FBd0IsRUFDeEIsUUFBcUI7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFKRCxxQkFJQyxDQUFBOzs7Ozs7O1lBT0Q7Z0JBQ0Usb0JBQW9CLGNBQXNELEVBQ3RELEtBQXdCLEVBQ3hCLFFBQXFCO29CQUZyQixtQkFBYyxHQUFkLGNBQWMsQ0FBd0M7b0JBQ3RELFVBQUssR0FBTCxLQUFLLENBQW1CO29CQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFhO2dCQUN6QyxDQUFDO2dCQUNELHlCQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pHLENBQUM7Z0JBQ0gsaUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQUVEOzs7O2VBSUc7WUFDSDtnQkFBOEIsZ0NBQWE7Z0JBSXpDLHNCQUFZLFdBQTBCLEVBQzFCLGNBQXNELEVBQ3RELEtBQXdCLEVBQ3hCLFFBQXFCO29CQUMvQixrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFFbkIsSUFBTSxjQUFjLEdBQUcsSUFBSSx1QkFBVSxDQUFJLGNBQWMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzFFLGNBQWMsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO2dCQUN2QyxDQUFDO2dCQUVTLDRCQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDZCx3Q0FBYyxDQUFVO29CQUNoQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMzQixFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUN4RCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMvQixDQUFDO2dCQUNILENBQUM7Z0JBRVMsNkJBQU0sR0FBaEIsVUFBaUIsR0FBUTtvQkFDZix3Q0FBYyxDQUFVO29CQUNoQyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMxQixFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUN4RCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixDQUFDO2dCQUNILENBQUM7Z0JBRVMsZ0NBQVMsR0FBbkI7b0JBQ1Usd0NBQWMsQ0FBVTtvQkFDaEMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUMxQixFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUN4RCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzlCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCxtQkFBQztZQUFELENBN0NBLEFBNkNDLENBN0M2Qix1QkFBVSxHQTZDdkMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvZG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7UGFydGlhbE9ic2VydmVyfSBmcm9tICcuLi9PYnNlcnZlcic7XG5cbi8qKlxuICogUGVyZm9ybSBhIHNpZGUgZWZmZWN0IGZvciBldmVyeSBlbWlzc2lvbiBvbiB0aGUgc291cmNlIE9ic2VydmFibGUsIGJ1dCByZXR1cm5cbiAqIGFuIE9ic2VydmFibGUgdGhhdCBpcyBpZGVudGljYWwgdG8gdGhlIHNvdXJjZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+SW50ZXJjZXB0cyBlYWNoIGVtaXNzaW9uIG9uIHRoZSBzb3VyY2UgYW5kIHJ1bnMgYVxuICogZnVuY3Rpb24sIGJ1dCByZXR1cm5zIGFuIG91dHB1dCB3aGljaCBpcyBpZGVudGljYWwgdG8gdGhlIHNvdXJjZS48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9kby5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBSZXR1cm5zIGEgbWlycm9yZWQgT2JzZXJ2YWJsZSBvZiB0aGUgc291cmNlIE9ic2VydmFibGUsIGJ1dCBtb2RpZmllZCBzbyB0aGF0XG4gKiB0aGUgcHJvdmlkZWQgT2JzZXJ2ZXIgaXMgY2FsbGVkIHRvIHBlcmZvcm0gYSBzaWRlIGVmZmVjdCBmb3IgZXZlcnkgdmFsdWUsXG4gKiBlcnJvciwgYW5kIGNvbXBsZXRpb24gZW1pdHRlZCBieSB0aGUgc291cmNlLiBBbnkgZXJyb3JzIHRoYXQgYXJlIHRocm93biBpblxuICogdGhlIGFmb3JlbWVudGlvbmVkIE9ic2VydmVyIG9yIGhhbmRsZXJzIGFyZSBzYWZlbHkgc2VudCBkb3duIHRoZSBlcnJvciBwYXRoXG4gKiBvZiB0aGUgb3V0cHV0IE9ic2VydmFibGUuXG4gKlxuICogVGhpcyBvcGVyYXRvciBpcyB1c2VmdWwgZm9yIGRlYnVnZ2luZyB5b3VyIE9ic2VydmFibGVzIGZvciB0aGUgY29ycmVjdCB2YWx1ZXNcbiAqIG9yIHBlcmZvcm1pbmcgb3RoZXIgc2lkZSBlZmZlY3RzLlxuICpcbiAqIE5vdGU6IHRoaXMgaXMgZGlmZmVyZW50IHRvIGEgYHN1YnNjcmliZWAgb24gdGhlIE9ic2VydmFibGUuIElmIHRoZSBPYnNlcnZhYmxlXG4gKiByZXR1cm5lZCBieSBgZG9gIGlzIG5vdCBzdWJzY3JpYmVkLCB0aGUgc2lkZSBlZmZlY3RzIHNwZWNpZmllZCBieSB0aGVcbiAqIE9ic2VydmVyIHdpbGwgbmV2ZXIgaGFwcGVuLiBgZG9gIHRoZXJlZm9yZSBzaW1wbHkgc3BpZXMgb24gZXhpc3RpbmdcbiAqIGV4ZWN1dGlvbiwgaXQgZG9lcyBub3QgdHJpZ2dlciBhbiBleGVjdXRpb24gdG8gaGFwcGVuIGxpa2UgYHN1YnNjcmliZWAgZG9lcy5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NYXAgZXZlcnkgZXZlcnkgY2xpY2sgdG8gdGhlIGNsaWVudFggcG9zaXRpb24gb2YgdGhhdCBjbGljaywgd2hpbGUgYWxzbyBsb2dnaW5nIHRoZSBjbGljayBldmVudDwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgcG9zaXRpb25zID0gY2xpY2tzXG4gKiAgIC5kbyhldiA9PiBjb25zb2xlLmxvZyhldikpXG4gKiAgIC5tYXAoZXYgPT4gZXYuY2xpZW50WCk7XG4gKiBwb3NpdGlvbnMuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBzZWUge0BsaW5rIG1hcH1cbiAqIEBzZWUge0BsaW5rIHN1YnNjcmliZX1cbiAqXG4gKiBAcGFyYW0ge09ic2VydmVyfGZ1bmN0aW9ufSBbbmV4dE9yT2JzZXJ2ZXJdIEEgbm9ybWFsIE9ic2VydmVyIG9iamVjdCBvciBhXG4gKiBjYWxsYmFjayBmb3IgYG5leHRgLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2Vycm9yXSBDYWxsYmFjayBmb3IgZXJyb3JzIGluIHRoZSBzb3VyY2UuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY29tcGxldGVdIENhbGxiYWNrIGZvciB0aGUgY29tcGxldGlvbiBvZiB0aGUgc291cmNlLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSBpZGVudGljYWwgdG8gdGhlIHNvdXJjZSwgYnV0IHJ1bnMgdGhlXG4gKiBzcGVjaWZpZWQgT2JzZXJ2ZXIgb3IgY2FsbGJhY2socykgZm9yIGVhY2ggaXRlbS5cbiAqIEBtZXRob2QgZG9cbiAqIEBuYW1lIGRvXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2RvPFQ+KG5leHRPck9ic2VydmVyPzogUGFydGlhbE9ic2VydmVyPFQ+IHwgKCh4OiBUKSA9PiB2b2lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I/OiAoZTogYW55KSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZT86ICgpID0+IHZvaWQpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgRG9PcGVyYXRvcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9TaWduYXR1cmU8VD4ge1xuICAobmV4dDogKHg6IFQpID0+IHZvaWQsIGVycm9yPzogKGU6IGFueSkgPT4gdm9pZCwgY29tcGxldGU/OiAoKSA9PiB2b2lkKTogT2JzZXJ2YWJsZTxUPjtcbiAgKG9ic2VydmVyOiBQYXJ0aWFsT2JzZXJ2ZXI8VD4pOiBPYnNlcnZhYmxlPFQ+O1xufVxuXG5jbGFzcyBEb09wZXJhdG9yPFQ+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgVD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5leHRPck9ic2VydmVyPzogUGFydGlhbE9ic2VydmVyPFQ+IHwgKCh4OiBUKSA9PiB2b2lkKSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvcj86IChlOiBhbnkpID0+IHZvaWQsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29tcGxldGU/OiAoKSA9PiB2b2lkKSB7XG4gIH1cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBEb1N1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5uZXh0T3JPYnNlcnZlciwgdGhpcy5lcnJvciwgdGhpcy5jb21wbGV0ZSkpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBEb1N1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcblxuICBwcml2YXRlIHNhZmVTdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFQ+LFxuICAgICAgICAgICAgICBuZXh0T3JPYnNlcnZlcj86IFBhcnRpYWxPYnNlcnZlcjxUPiB8ICgoeDogVCkgPT4gdm9pZCksXG4gICAgICAgICAgICAgIGVycm9yPzogKGU6IGFueSkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgY29tcGxldGU/OiAoKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuXG4gICAgY29uc3Qgc2FmZVN1YnNjcmliZXIgPSBuZXcgU3Vic2NyaWJlcjxUPihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICBzYWZlU3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUgPSB0cnVlO1xuICAgIHRoaXMuYWRkKHNhZmVTdWJzY3JpYmVyKTtcbiAgICB0aGlzLnNhZmVTdWJzY3JpYmVyID0gc2FmZVN1YnNjcmliZXI7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNhZmVTdWJzY3JpYmVyIH0gPSB0aGlzO1xuICAgIHNhZmVTdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgIGlmIChzYWZlU3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd24pIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3Ioc2FmZVN1YnNjcmliZXIuc3luY0Vycm9yVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfZXJyb3IoZXJyOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNhZmVTdWJzY3JpYmVyIH0gPSB0aGlzO1xuICAgIHNhZmVTdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgaWYgKHNhZmVTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93bikge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihzYWZlU3Vic2NyaWJlci5zeW5jRXJyb3JWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgc2FmZVN1YnNjcmliZXIgfSA9IHRoaXM7XG4gICAgc2FmZVN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICBpZiAoc2FmZVN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3duKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKHNhZmVTdWJzY3JpYmVyLnN5bmNFcnJvclZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
