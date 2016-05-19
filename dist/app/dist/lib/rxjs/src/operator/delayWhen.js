System.register(['../Subscriber', '../Observable', '../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, Observable_1, OuterSubscriber_1, subscribeToResult_1;
    var DelayWhenOperator, DelayWhenSubscriber, SubscriptionDelayObservable, SubscriptionDelaySubscriber;
    /**
     * Returns an Observable that delays the emission of items from the source Observable
     * by a subscription delay and a delay selector function for each element.
     * @param {Function} selector function to retrieve a sequence indicating the delay for each given element.
     * @param {Observable} sequence indicating the delay for the subscription to the source.
     * @return {Observable} an Observable that delays the emissions of the source Observable by the specified timeout or Date.
     * @method delayWhen
     * @owner Observable
     */
    function delayWhen(delayDurationSelector, subscriptionDelay) {
        if (subscriptionDelay) {
            return new SubscriptionDelayObservable(this, subscriptionDelay)
                .lift(new DelayWhenOperator(delayDurationSelector));
        }
        return this.lift(new DelayWhenOperator(delayDurationSelector));
    }
    exports_1("delayWhen", delayWhen);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            DelayWhenOperator = (function () {
                function DelayWhenOperator(delayDurationSelector) {
                    this.delayDurationSelector = delayDurationSelector;
                }
                DelayWhenOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
                };
                return DelayWhenOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            DelayWhenSubscriber = (function (_super) {
                __extends(DelayWhenSubscriber, _super);
                function DelayWhenSubscriber(destination, delayDurationSelector) {
                    _super.call(this, destination);
                    this.delayDurationSelector = delayDurationSelector;
                    this.completed = false;
                    this.delayNotifierSubscriptions = [];
                    this.values = [];
                }
                DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.destination.next(outerValue);
                    this.removeSubscription(innerSub);
                    this.tryComplete();
                };
                DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
                    this._error(error);
                };
                DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
                    var value = this.removeSubscription(innerSub);
                    if (value) {
                        this.destination.next(value);
                    }
                    this.tryComplete();
                };
                DelayWhenSubscriber.prototype._next = function (value) {
                    try {
                        var delayNotifier = this.delayDurationSelector(value);
                        if (delayNotifier) {
                            this.tryDelay(delayNotifier, value);
                        }
                    }
                    catch (err) {
                        this.destination.error(err);
                    }
                };
                DelayWhenSubscriber.prototype._complete = function () {
                    this.completed = true;
                    this.tryComplete();
                };
                DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
                    subscription.unsubscribe();
                    var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
                    var value = null;
                    if (subscriptionIdx !== -1) {
                        value = this.values[subscriptionIdx];
                        this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
                        this.values.splice(subscriptionIdx, 1);
                    }
                    return value;
                };
                DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
                    var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);
                    this.add(notifierSubscription);
                    this.delayNotifierSubscriptions.push(notifierSubscription);
                    this.values.push(value);
                };
                DelayWhenSubscriber.prototype.tryComplete = function () {
                    if (this.completed && this.delayNotifierSubscriptions.length === 0) {
                        this.destination.complete();
                    }
                };
                return DelayWhenSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SubscriptionDelayObservable = (function (_super) {
                __extends(SubscriptionDelayObservable, _super);
                function SubscriptionDelayObservable(source, subscriptionDelay) {
                    _super.call(this);
                    this.source = source;
                    this.subscriptionDelay = subscriptionDelay;
                }
                SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
                    this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
                };
                return SubscriptionDelayObservable;
            }(Observable_1.Observable));
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SubscriptionDelaySubscriber = (function (_super) {
                __extends(SubscriptionDelaySubscriber, _super);
                function SubscriptionDelaySubscriber(parent, source) {
                    _super.call(this);
                    this.parent = parent;
                    this.source = source;
                    this.sourceSubscribed = false;
                }
                SubscriptionDelaySubscriber.prototype._next = function (unused) {
                    this.subscribeToSource();
                };
                SubscriptionDelaySubscriber.prototype._error = function (err) {
                    this.unsubscribe();
                    this.parent.error(err);
                };
                SubscriptionDelaySubscriber.prototype._complete = function () {
                    this.subscribeToSource();
                };
                SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
                    if (!this.sourceSubscribed) {
                        this.sourceSubscribed = true;
                        this.unsubscribe();
                        this.source.subscribe(this.parent);
                    }
                };
                return SubscriptionDelaySubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2RlbGF5V2hlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBU0E7Ozs7Ozs7O09BUUc7SUFDSCxtQkFBNkIscUJBQW9ELEVBQ3BELGlCQUFtQztRQUM5RCxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLElBQUksMkJBQTJCLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDO2lCQUN0RCxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFQRCxpQ0FPQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7O1lBTUQ7Z0JBQ0UsMkJBQW9CLHFCQUFvRDtvQkFBcEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUErQjtnQkFDeEUsQ0FBQztnQkFFRCxnQ0FBSSxHQUFKLFVBQUssVUFBeUIsRUFBRSxNQUFXO29CQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO2dCQUM1RixDQUFDO2dCQUNILHdCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQXdDLHVDQUFxQjtnQkFLM0QsNkJBQVksV0FBMEIsRUFDbEIscUJBQW9EO29CQUN0RSxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFERCwwQkFBcUIsR0FBckIscUJBQXFCLENBQStCO29CQUxoRSxjQUFTLEdBQVksS0FBSyxDQUFDO29CQUMzQiwrQkFBMEIsR0FBd0IsRUFBRSxDQUFDO29CQUNyRCxXQUFNLEdBQWEsRUFBRSxDQUFDO2dCQUs5QixDQUFDO2dC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R0FBekI7b0JBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO3dCQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDckMsQ0FBQztnQkFDSCxDQUFDO2dCQUNILGtDQUFDO1lBQUQsQ0EzQkEsQUEyQkMsQ0EzQjRDLHVCQUFVLEdBMkJ0RCIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9kZWxheVdoZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuXG5pbXBvcnQge091dGVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vT3V0ZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7SW5uZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9Jbm5lclN1YnNjcmliZXInO1xuaW1wb3J0IHtzdWJzY3JpYmVUb1Jlc3VsdH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCc7XG5cbi8qKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZGVsYXlzIHRoZSBlbWlzc2lvbiBvZiBpdGVtcyBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZVxuICogYnkgYSBzdWJzY3JpcHRpb24gZGVsYXkgYW5kIGEgZGVsYXkgc2VsZWN0b3IgZnVuY3Rpb24gZm9yIGVhY2ggZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNlbGVjdG9yIGZ1bmN0aW9uIHRvIHJldHJpZXZlIGEgc2VxdWVuY2UgaW5kaWNhdGluZyB0aGUgZGVsYXkgZm9yIGVhY2ggZ2l2ZW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZX0gc2VxdWVuY2UgaW5kaWNhdGluZyB0aGUgZGVsYXkgZm9yIHRoZSBzdWJzY3JpcHRpb24gdG8gdGhlIHNvdXJjZS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IGFuIE9ic2VydmFibGUgdGhhdCBkZWxheXMgdGhlIGVtaXNzaW9ucyBvZiB0aGUgc291cmNlIE9ic2VydmFibGUgYnkgdGhlIHNwZWNpZmllZCB0aW1lb3V0IG9yIERhdGUuXG4gKiBAbWV0aG9kIGRlbGF5V2hlblxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5V2hlbjxUPihkZWxheUR1cmF0aW9uU2VsZWN0b3I6ICh2YWx1ZTogVCkgPT4gT2JzZXJ2YWJsZTxhbnk+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25EZWxheT86IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8VD4ge1xuICBpZiAoc3Vic2NyaXB0aW9uRGVsYXkpIHtcbiAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbkRlbGF5T2JzZXJ2YWJsZSh0aGlzLCBzdWJzY3JpcHRpb25EZWxheSlcbiAgICAgICAgICAgIC5saWZ0KG5ldyBEZWxheVdoZW5PcGVyYXRvcihkZWxheUR1cmF0aW9uU2VsZWN0b3IpKTtcbiAgfVxuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBEZWxheVdoZW5PcGVyYXRvcihkZWxheUR1cmF0aW9uU2VsZWN0b3IpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxheVdoZW5TaWduYXR1cmU8VD4ge1xuICAoZGVsYXlEdXJhdGlvblNlbGVjdG9yOiAodmFsdWU6IFQpID0+IE9ic2VydmFibGU8YW55Piwgc3Vic2NyaXB0aW9uRGVsYXk/OiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPFQ+O1xufVxuXG5jbGFzcyBEZWxheVdoZW5PcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWxheUR1cmF0aW9uU2VsZWN0b3I6ICh2YWx1ZTogVCkgPT4gT2JzZXJ2YWJsZTxhbnk+KSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IERlbGF5V2hlblN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5kZWxheUR1cmF0aW9uU2VsZWN0b3IpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgRGVsYXlXaGVuU3Vic2NyaWJlcjxULCBSPiBleHRlbmRzIE91dGVyU3Vic2NyaWJlcjxULCBSPiB7XG4gIHByaXZhdGUgY29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgZGVsYXlOb3RpZmllclN1YnNjcmlwdGlvbnM6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBbXTtcbiAgcHJpdmF0ZSB2YWx1ZXM6IEFycmF5PFQ+ID0gW107XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8VD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgZGVsYXlEdXJhdGlvblNlbGVjdG9yOiAodmFsdWU6IFQpID0+IE9ic2VydmFibGU8YW55Pikge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIG5vdGlmeU5leHQob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogYW55LFxuICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgIGlubmVyU3ViOiBJbm5lclN1YnNjcmliZXI8VCwgUj4pOiB2b2lkIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQob3V0ZXJWYWx1ZSk7XG4gICAgdGhpcy5yZW1vdmVTdWJzY3JpcHRpb24oaW5uZXJTdWIpO1xuICAgIHRoaXMudHJ5Q29tcGxldGUoKTtcbiAgfVxuXG4gIG5vdGlmeUVycm9yKGVycm9yOiBhbnksIGlubmVyU3ViOiBJbm5lclN1YnNjcmliZXI8VCwgUj4pOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcihlcnJvcik7XG4gIH1cblxuICBub3RpZnlDb21wbGV0ZShpbm5lclN1YjogSW5uZXJTdWJzY3JpYmVyPFQsIFI+KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnJlbW92ZVN1YnNjcmlwdGlvbihpbm5lclN1Yik7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnRyeUNvbXBsZXRlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGVsYXlOb3RpZmllciA9IHRoaXMuZGVsYXlEdXJhdGlvblNlbGVjdG9yKHZhbHVlKTtcbiAgICAgIGlmIChkZWxheU5vdGlmaWVyKSB7XG4gICAgICAgIHRoaXMudHJ5RGVsYXkoZGVsYXlOb3RpZmllciwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgdGhpcy50cnlDb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uOiBJbm5lclN1YnNjcmliZXI8VCwgUj4pOiBUIHtcbiAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbklkeCA9IHRoaXMuZGVsYXlOb3RpZmllclN1YnNjcmlwdGlvbnMuaW5kZXhPZihzdWJzY3JpcHRpb24pO1xuICAgIGxldCB2YWx1ZTogVCA9IG51bGw7XG5cbiAgICBpZiAoc3Vic2NyaXB0aW9uSWR4ICE9PSAtMSkge1xuICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlc1tzdWJzY3JpcHRpb25JZHhdO1xuICAgICAgdGhpcy5kZWxheU5vdGlmaWVyU3Vic2NyaXB0aW9ucy5zcGxpY2Uoc3Vic2NyaXB0aW9uSWR4LCAxKTtcbiAgICAgIHRoaXMudmFsdWVzLnNwbGljZShzdWJzY3JpcHRpb25JZHgsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5RGVsYXkoZGVsYXlOb3RpZmllcjogT2JzZXJ2YWJsZTxhbnk+LCB2YWx1ZTogVCk6IHZvaWQge1xuICAgIGNvbnN0IG5vdGlmaWVyU3Vic2NyaXB0aW9uID0gc3Vic2NyaWJlVG9SZXN1bHQodGhpcywgZGVsYXlOb3RpZmllciwgdmFsdWUpO1xuICAgIHRoaXMuYWRkKG5vdGlmaWVyU3Vic2NyaXB0aW9uKTtcblxuICAgIHRoaXMuZGVsYXlOb3RpZmllclN1YnNjcmlwdGlvbnMucHVzaChub3RpZmllclN1YnNjcmlwdGlvbik7XG4gICAgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHRyeUNvbXBsZXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbXBsZXRlZCAmJiB0aGlzLmRlbGF5Tm90aWZpZXJTdWJzY3JpcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgU3Vic2NyaXB0aW9uRGVsYXlPYnNlcnZhYmxlPFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzb3VyY2U6IE9ic2VydmFibGU8VD4sIHByaXZhdGUgc3Vic2NyaXB0aW9uRGVsYXk6IE9ic2VydmFibGU8YW55Pikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25EZWxheS5zdWJzY3JpYmUobmV3IFN1YnNjcmlwdGlvbkRlbGF5U3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnNvdXJjZSkpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBTdWJzY3JpcHRpb25EZWxheVN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgcHJpdmF0ZSBzb3VyY2VTdWJzY3JpYmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJlbnQ6IFN1YnNjcmliZXI8VD4sIHByaXZhdGUgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh1bnVzZWQ6IGFueSkge1xuICAgIHRoaXMuc3Vic2NyaWJlVG9Tb3VyY2UoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZXJyb3IoZXJyOiBhbnkpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5wYXJlbnQuZXJyb3IoZXJyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVUb1NvdXJjZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1NvdXJjZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc291cmNlU3Vic2NyaWJlZCkge1xuICAgICAgdGhpcy5zb3VyY2VTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc291cmNlLnN1YnNjcmliZSh0aGlzLnBhcmVudCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
