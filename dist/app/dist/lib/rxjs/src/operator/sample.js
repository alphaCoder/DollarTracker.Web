System.register(['../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1, subscribeToResult_1;
    var SampleOperator, SampleSubscriber;
    /**
     * Returns an Observable that, when the specified sampler Observable emits an item or completes, it then emits the most
     * recently emitted item (if any) emitted by the source Observable since the previous emission from the sampler
     * Observable.
     *
     * <img src="./img/sample.png" width="100%">
     *
     * @param {Observable} sampler - the Observable to use for sampling the source Observable.
     * @return {Observable<T>} an Observable that emits the results of sampling the items emitted by this Observable
     * whenever the sampler Observable emits an item or completes.
     * @method sample
     * @owner Observable
     */
    function sample(notifier) {
        return this.lift(new SampleOperator(notifier));
    }
    exports_1("sample", sample);
    return {
        setters:[
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            SampleOperator = (function () {
                function SampleOperator(notifier) {
                    this.notifier = notifier;
                }
                SampleOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new SampleSubscriber(subscriber, this.notifier));
                };
                return SampleOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SampleSubscriber = (function (_super) {
                __extends(SampleSubscriber, _super);
                function SampleSubscriber(destination, notifier) {
                    _super.call(this, destination);
                    this.hasValue = false;
                    this.add(subscribeToResult_1.subscribeToResult(this, notifier));
                }
                SampleSubscriber.prototype._next = function (value) {
                    this.value = value;
                    this.hasValue = true;
                };
                SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.emitValue();
                };
                SampleSubscriber.prototype.notifyComplete = function () {
                    this.emitValue();
                };
                SampleSubscriber.prototype.emitValue = function () {
                    if (this.hasValue) {
                        this.hasValue = false;
                        this.destination.next(this.value);
                    }
                };
                return SampleSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3NhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBUUE7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0gsZ0JBQTBCLFFBQXlCO1FBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUZELDJCQUVDLENBQUE7Ozs7Ozs7Ozs7WUFNRDtnQkFDRSx3QkFBb0IsUUFBeUI7b0JBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO2dCQUM3QyxDQUFDO2dCQUVELDZCQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM1RSxDQUFDO2dCQUNILHFCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQXFDLG9DQUFxQjtnQkFJeEQsMEJBQVksV0FBNEIsRUFBRSxRQUF5QjtvQkFDakUsa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBSGIsYUFBUSxHQUFZLEtBQUssQ0FBQztvQkFJaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFUyxnQ0FBSyxHQUFmLFVBQWdCLEtBQVE7b0JBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCxxQ0FBVSxHQUFWLFVBQVcsVUFBYSxFQUFFLFVBQWEsRUFDNUIsVUFBa0IsRUFBRSxVQUFrQixFQUN0QyxRQUErQjtvQkFDeEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNuQixDQUFDO2dCQUVELHlDQUFjLEdBQWQ7b0JBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNuQixDQUFDO2dCQUVELG9DQUFTLEdBQVQ7b0JBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3BDLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCx1QkFBQztZQUFELENBOUJBLEFBOEJDLENBOUJvQyxpQ0FBZSxHQThCbkQiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3Ivc2FtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5cbmltcG9ydCB7T3V0ZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHtJbm5lclN1YnNjcmliZXJ9IGZyb20gJy4uL0lubmVyU3Vic2NyaWJlcic7XG5pbXBvcnQge3N1YnNjcmliZVRvUmVzdWx0fSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCwgd2hlbiB0aGUgc3BlY2lmaWVkIHNhbXBsZXIgT2JzZXJ2YWJsZSBlbWl0cyBhbiBpdGVtIG9yIGNvbXBsZXRlcywgaXQgdGhlbiBlbWl0cyB0aGUgbW9zdFxuICogcmVjZW50bHkgZW1pdHRlZCBpdGVtIChpZiBhbnkpIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHNpbmNlIHRoZSBwcmV2aW91cyBlbWlzc2lvbiBmcm9tIHRoZSBzYW1wbGVyXG4gKiBPYnNlcnZhYmxlLlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvc2FtcGxlLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZX0gc2FtcGxlciAtIHRoZSBPYnNlcnZhYmxlIHRvIHVzZSBmb3Igc2FtcGxpbmcgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxUPn0gYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSByZXN1bHRzIG9mIHNhbXBsaW5nIHRoZSBpdGVtcyBlbWl0dGVkIGJ5IHRoaXMgT2JzZXJ2YWJsZVxuICogd2hlbmV2ZXIgdGhlIHNhbXBsZXIgT2JzZXJ2YWJsZSBlbWl0cyBhbiBpdGVtIG9yIGNvbXBsZXRlcy5cbiAqIEBtZXRob2Qgc2FtcGxlXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2FtcGxlPFQ+KG5vdGlmaWVyOiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgU2FtcGxlT3BlcmF0b3Iobm90aWZpZXIpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTYW1wbGVTaWduYXR1cmU8VD4ge1xuICAobm90aWZpZXI6IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8VD47XG59XG5cbmNsYXNzIFNhbXBsZU9wZXJhdG9yPFQ+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgVD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWVyOiBPYnNlcnZhYmxlPGFueT4pIHtcbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPiwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgU2FtcGxlU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLm5vdGlmaWVyKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIFNhbXBsZVN1YnNjcmliZXI8VCwgUj4gZXh0ZW5kcyBPdXRlclN1YnNjcmliZXI8VCwgUj4ge1xuICBwcml2YXRlIHZhbHVlOiBUO1xuICBwcml2YXRlIGhhc1ZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8YW55Piwgbm90aWZpZXI6IE9ic2VydmFibGU8YW55Pikge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLmFkZChzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCBub3RpZmllcikpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuaGFzVmFsdWUgPSB0cnVlO1xuICB9XG5cbiAgbm90aWZ5TmV4dChvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBSLFxuICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgIGlubmVyU3ViOiBJbm5lclN1YnNjcmliZXI8VCwgUj4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRWYWx1ZSgpO1xuICB9XG5cbiAgbm90aWZ5Q29tcGxldGUoKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0VmFsdWUoKTtcbiAgfVxuXG4gIGVtaXRWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5oYXNWYWx1ZSkge1xuICAgICAgdGhpcy5oYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
