System.register(['../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1, subscribeToResult_1;
    var SwitchOperator, SwitchSubscriber;
    /**
     * Converts a higher-order Observable into a first-order Observable by
     * subscribing to only the most recently emitted of those inner Observables.
     *
     * <span class="informal">Flattens an Observable-of-Observables by dropping the
     * previous inner Observable once a new one appears.</span>
     *
     * <img src="./img/switch.png" width="100%">
     *
     * `switch` subscribes to an Observable that emits Observables, also known as a
     * higher-order Observable. Each time it observes one of these emitted inner
     * Observables, the output Observable subscribes to the inner Observable and
     * begins emitting the items emitted by that. So far, it behaves
     * like {@link mergeAll}. However, when a new inner Observable is emitted,
     * `switch` unsubscribes from the earlier-emitted inner Observable and
     * subscribes to the new inner Observable and begins emitting items from it. It
     * continues to behave like this for subsequent inner Observables.
     *
     * @example <caption>Rerun an interval Observable on every click event</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * // Each click event is mapped to an Observable that ticks every second
     * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
     * var switched = higherOrder.switch();
     * // The outcome is that `switched` is essentially a timer that restarts
     * // on every click. The interval Observables from older clicks do not merge
     * // with the current interval Observable.
     * switched.subscribe(x => console.log(x));
     *
     * @see {@link combineAll}
     * @see {@link concatAll}
     * @see {@link exhaust}
     * @see {@link mergeAll}
     * @see {@link switchMap}
     * @see {@link switchMapTo}
     * @see {@link zipAll}
     *
     * @return {Observable<T>} An Observable that emits the items emitted by the
     * Observable most recently emitted by the source Observable.
     * @method switch
     * @name switch
     * @owner Observable
     */
    function _switch() {
        return this.lift(new SwitchOperator());
    }
    exports_1("_switch", _switch);
    return {
        setters:[
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            SwitchOperator = (function () {
                function SwitchOperator() {
                }
                SwitchOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new SwitchSubscriber(subscriber));
                };
                return SwitchOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SwitchSubscriber = (function (_super) {
                __extends(SwitchSubscriber, _super);
                function SwitchSubscriber(destination) {
                    _super.call(this, destination);
                    this.active = 0;
                    this.hasCompleted = false;
                }
                SwitchSubscriber.prototype._next = function (value) {
                    this.unsubscribeInner();
                    this.active++;
                    this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, value));
                };
                SwitchSubscriber.prototype._complete = function () {
                    this.hasCompleted = true;
                    if (this.active === 0) {
                        this.destination.complete();
                    }
                };
                SwitchSubscriber.prototype.unsubscribeInner = function () {
                    this.active = this.active > 0 ? this.active - 1 : 0;
                    var innerSubscription = this.innerSubscription;
                    if (innerSubscription) {
                        innerSubscription.unsubscribe();
                        this.remove(innerSubscription);
                    }
                };
                SwitchSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.destination.next(innerValue);
                };
                SwitchSubscriber.prototype.notifyError = function (err) {
                    this.destination.error(err);
                };
                SwitchSubscriber.prototype.notifyComplete = function () {
                    this.unsubscribeInner();
                    if (this.hasCompleted && this.active === 0) {
                        this.destination.complete();
                    }
                };
                return SwitchSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3N3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BeUNHO0lBQ0g7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUZELDZCQUVDLENBQUE7Ozs7Ozs7Ozs7WUFNRDtnQkFBQTtnQkFJQSxDQUFDO2dCQUhDLDZCQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFDSCxxQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFxQyxvQ0FBcUI7Z0JBS3hELDBCQUFZLFdBQTBCO29CQUNwQyxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFMYixXQUFNLEdBQVcsQ0FBQyxDQUFDO29CQUNuQixpQkFBWSxHQUFZLEtBQUssQ0FBQztnQkFLdEMsQ0FBQztnQkFFUyxnQ0FBSyxHQUFmLFVBQWdCLEtBQVE7b0JBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcscUNBQWlCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLENBQUM7Z0JBRVMsb0NBQVMsR0FBbkI7b0JBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDOUIsQ0FBQztnQkFDSCxDQUFDO2dCQUVPLDJDQUFnQixHQUF4QjtvQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDcEQsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pELEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQzt3QkFDdEIsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDakMsQ0FBQztnQkFDSCxDQUFDO2dCQUVELHFDQUFVLEdBQVYsVUFBVyxVQUFhLEVBQUUsVUFBYSxFQUM1QixVQUFrQixFQUFFLFVBQWtCLEVBQ3RDLFFBQStCO29CQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCxzQ0FBVyxHQUFYLFVBQVksR0FBUTtvQkFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQseUNBQWMsR0FBZDtvQkFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzlCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCx1QkFBQztZQUFELENBL0NBLEFBK0NDLENBL0NvQyxpQ0FBZSxHQStDbkQiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3Ivc3dpdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHtPdXRlclN1YnNjcmliZXJ9IGZyb20gJy4uL091dGVyU3Vic2NyaWJlcic7XG5pbXBvcnQge0lubmVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vSW5uZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7c3Vic2NyaWJlVG9SZXN1bHR9IGZyb20gJy4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQnO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgaGlnaGVyLW9yZGVyIE9ic2VydmFibGUgaW50byBhIGZpcnN0LW9yZGVyIE9ic2VydmFibGUgYnlcbiAqIHN1YnNjcmliaW5nIHRvIG9ubHkgdGhlIG1vc3QgcmVjZW50bHkgZW1pdHRlZCBvZiB0aG9zZSBpbm5lciBPYnNlcnZhYmxlcy5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+RmxhdHRlbnMgYW4gT2JzZXJ2YWJsZS1vZi1PYnNlcnZhYmxlcyBieSBkcm9wcGluZyB0aGVcbiAqIHByZXZpb3VzIGlubmVyIE9ic2VydmFibGUgb25jZSBhIG5ldyBvbmUgYXBwZWFycy48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9zd2l0Y2gucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogYHN3aXRjaGAgc3Vic2NyaWJlcyB0byBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgT2JzZXJ2YWJsZXMsIGFsc28ga25vd24gYXMgYVxuICogaGlnaGVyLW9yZGVyIE9ic2VydmFibGUuIEVhY2ggdGltZSBpdCBvYnNlcnZlcyBvbmUgb2YgdGhlc2UgZW1pdHRlZCBpbm5lclxuICogT2JzZXJ2YWJsZXMsIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZSBzdWJzY3JpYmVzIHRvIHRoZSBpbm5lciBPYnNlcnZhYmxlIGFuZFxuICogYmVnaW5zIGVtaXR0aW5nIHRoZSBpdGVtcyBlbWl0dGVkIGJ5IHRoYXQuIFNvIGZhciwgaXQgYmVoYXZlc1xuICogbGlrZSB7QGxpbmsgbWVyZ2VBbGx9LiBIb3dldmVyLCB3aGVuIGEgbmV3IGlubmVyIE9ic2VydmFibGUgaXMgZW1pdHRlZCxcbiAqIGBzd2l0Y2hgIHVuc3Vic2NyaWJlcyBmcm9tIHRoZSBlYXJsaWVyLWVtaXR0ZWQgaW5uZXIgT2JzZXJ2YWJsZSBhbmRcbiAqIHN1YnNjcmliZXMgdG8gdGhlIG5ldyBpbm5lciBPYnNlcnZhYmxlIGFuZCBiZWdpbnMgZW1pdHRpbmcgaXRlbXMgZnJvbSBpdC4gSXRcbiAqIGNvbnRpbnVlcyB0byBiZWhhdmUgbGlrZSB0aGlzIGZvciBzdWJzZXF1ZW50IGlubmVyIE9ic2VydmFibGVzLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlJlcnVuIGFuIGludGVydmFsIE9ic2VydmFibGUgb24gZXZlcnkgY2xpY2sgZXZlbnQ8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogLy8gRWFjaCBjbGljayBldmVudCBpcyBtYXBwZWQgdG8gYW4gT2JzZXJ2YWJsZSB0aGF0IHRpY2tzIGV2ZXJ5IHNlY29uZFxuICogdmFyIGhpZ2hlck9yZGVyID0gY2xpY2tzLm1hcCgoZXYpID0+IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCkpO1xuICogdmFyIHN3aXRjaGVkID0gaGlnaGVyT3JkZXIuc3dpdGNoKCk7XG4gKiAvLyBUaGUgb3V0Y29tZSBpcyB0aGF0IGBzd2l0Y2hlZGAgaXMgZXNzZW50aWFsbHkgYSB0aW1lciB0aGF0IHJlc3RhcnRzXG4gKiAvLyBvbiBldmVyeSBjbGljay4gVGhlIGludGVydmFsIE9ic2VydmFibGVzIGZyb20gb2xkZXIgY2xpY2tzIGRvIG5vdCBtZXJnZVxuICogLy8gd2l0aCB0aGUgY3VycmVudCBpbnRlcnZhbCBPYnNlcnZhYmxlLlxuICogc3dpdGNoZWQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBzZWUge0BsaW5rIGNvbWJpbmVBbGx9XG4gKiBAc2VlIHtAbGluayBjb25jYXRBbGx9XG4gKiBAc2VlIHtAbGluayBleGhhdXN0fVxuICogQHNlZSB7QGxpbmsgbWVyZ2VBbGx9XG4gKiBAc2VlIHtAbGluayBzd2l0Y2hNYXB9XG4gKiBAc2VlIHtAbGluayBzd2l0Y2hNYXBUb31cbiAqIEBzZWUge0BsaW5rIHppcEFsbH1cbiAqXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFQ+fSBBbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIGl0ZW1zIGVtaXR0ZWQgYnkgdGhlXG4gKiBPYnNlcnZhYmxlIG1vc3QgcmVjZW50bHkgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUuXG4gKiBAbWV0aG9kIHN3aXRjaFxuICogQG5hbWUgc3dpdGNoXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX3N3aXRjaDxUPigpOiBUIHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgU3dpdGNoT3BlcmF0b3IoKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdGNoU2lnbmF0dXJlPFQ+IHtcbiAgKCk6IFQ7XG59XG5cbmNsYXNzIFN3aXRjaE9wZXJhdG9yPFQsIFI+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgUj4ge1xuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Uj4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFN3aXRjaFN1YnNjcmliZXIoc3Vic2NyaWJlcikpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBTd2l0Y2hTdWJzY3JpYmVyPFQsIFI+IGV4dGVuZHMgT3V0ZXJTdWJzY3JpYmVyPFQsIFI+IHtcbiAgcHJpdmF0ZSBhY3RpdmU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgaGFzQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGlubmVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8Uj4pIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlSW5uZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSsrO1xuICAgIHRoaXMuYWRkKHRoaXMuaW5uZXJTdWJzY3JpcHRpb24gPSBzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCB2YWx1ZSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuYWN0aXZlID09PSAwKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUlubmVyKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy5hY3RpdmUgPiAwID8gdGhpcy5hY3RpdmUgLSAxIDogMDtcbiAgICBjb25zdCBpbm5lclN1YnNjcmlwdGlvbiA9IHRoaXMuaW5uZXJTdWJzY3JpcHRpb247XG4gICAgaWYgKGlubmVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICBpbm5lclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5yZW1vdmUoaW5uZXJTdWJzY3JpcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIG5vdGlmeU5leHQob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogUixcbiAgICAgICAgICAgICBvdXRlckluZGV4OiBudW1iZXIsIGlubmVySW5kZXg6IG51bWJlcixcbiAgICAgICAgICAgICBpbm5lclN1YjogSW5uZXJTdWJzY3JpYmVyPFQsIFI+KTogdm9pZCB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGlubmVyVmFsdWUpO1xuICB9XG5cbiAgbm90aWZ5RXJyb3IoZXJyOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gIH1cblxuICBub3RpZnlDb21wbGV0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlSW5uZXIoKTtcbiAgICBpZiAodGhpcy5oYXNDb21wbGV0ZWQgJiYgdGhpcy5hY3RpdmUgPT09IDApIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
