System.register(['../Subject', '../Subscription', '../util/tryCatch', '../util/errorObject', '../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1, Subscription_1, tryCatch_1, errorObject_1, OuterSubscriber_1, subscribeToResult_1;
    var WindowToggleOperator, WindowToggleSubscriber;
    /**
     * Branch out the source Observable values as a nested Observable starting from
     * an emission from `openings` and ending when the output of `closingSelector`
     * emits.
     *
     * <span class="informal">It's like {@link bufferToggle}, but emits a nested
     * Observable instead of an array.</span>
     *
     * <img src="./img/windowToggle.png" width="100%">
     *
     * Returns an Observable that emits windows of items it collects from the source
     * Observable. The output Observable emits windows that contain those items
     * emitted by the source Observable between the time when the `openings`
     * Observable emits an item and when the Observable returned by
     * `closingSelector` emits an item.
     *
     * @example <caption>Every other second, emit the click events from the next 500ms</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var openings = Rx.Observable.interval(1000);
     * var result = clicks.windowToggle(openings, i =>
     *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
     * ).mergeAll();
     * result.subscribe(x => console.log(x));
     *
     * @see {@link window}
     * @see {@link windowCount}
     * @see {@link windowTime}
     * @see {@link windowWhen}
     * @see {@link bufferToggle}
     *
     * @param {Observable<O>} openings An observable of notifications to start new
     * windows.
     * @param {function(value: O): Observable} closingSelector A function that takes
     * the value emitted by the `openings` observable and returns an Observable,
     * which, when it emits (either `next` or `complete`), signals that the
     * associated window should complete.
     * @return {Observable<Observable<T>>} An observable of windows, which in turn
     * are Observables.
     * @method windowToggle
     * @owner Observable
     */
    function windowToggle(openings, closingSelector) {
        return this.lift(new WindowToggleOperator(openings, closingSelector));
    }
    exports_1("windowToggle", windowToggle);
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            },
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            WindowToggleOperator = (function () {
                function WindowToggleOperator(openings, closingSelector) {
                    this.openings = openings;
                    this.closingSelector = closingSelector;
                }
                WindowToggleOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
                };
                return WindowToggleOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            WindowToggleSubscriber = (function (_super) {
                __extends(WindowToggleSubscriber, _super);
                function WindowToggleSubscriber(destination, openings, closingSelector) {
                    _super.call(this, destination);
                    this.openings = openings;
                    this.closingSelector = closingSelector;
                    this.contexts = [];
                    this.add(this.openSubscription = subscribeToResult_1.subscribeToResult(this, openings, openings));
                }
                WindowToggleSubscriber.prototype._next = function (value) {
                    var contexts = this.contexts;
                    if (contexts) {
                        var len = contexts.length;
                        for (var i = 0; i < len; i++) {
                            contexts[i].window.next(value);
                        }
                    }
                };
                WindowToggleSubscriber.prototype._error = function (err) {
                    var contexts = this.contexts;
                    this.contexts = null;
                    if (contexts) {
                        var len = contexts.length;
                        var index = -1;
                        while (++index < len) {
                            var context = contexts[index];
                            context.window.error(err);
                            context.subscription.unsubscribe();
                        }
                    }
                    _super.prototype._error.call(this, err);
                };
                WindowToggleSubscriber.prototype._complete = function () {
                    var contexts = this.contexts;
                    this.contexts = null;
                    if (contexts) {
                        var len = contexts.length;
                        var index = -1;
                        while (++index < len) {
                            var context = contexts[index];
                            context.window.complete();
                            context.subscription.unsubscribe();
                        }
                    }
                    _super.prototype._complete.call(this);
                };
                WindowToggleSubscriber.prototype._unsubscribe = function () {
                    var contexts = this.contexts;
                    this.contexts = null;
                    if (contexts) {
                        var len = contexts.length;
                        var index = -1;
                        while (++index < len) {
                            var context = contexts[index];
                            context.window.unsubscribe();
                            context.subscription.unsubscribe();
                        }
                    }
                };
                WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    if (outerValue === this.openings) {
                        var closingSelector = this.closingSelector;
                        var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
                        if (closingNotifier === errorObject_1.errorObject) {
                            return this.error(errorObject_1.errorObject.e);
                        }
                        else {
                            var window_1 = new Subject_1.Subject();
                            var subscription = new Subscription_1.Subscription();
                            var context = { window: window_1, subscription: subscription };
                            this.contexts.push(context);
                            var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
                            if (innerSubscription.isUnsubscribed) {
                                this.closeWindow(this.contexts.length - 1);
                            }
                            else {
                                innerSubscription.context = context;
                                subscription.add(innerSubscription);
                            }
                            this.destination.next(window_1);
                        }
                    }
                    else {
                        this.closeWindow(this.contexts.indexOf(outerValue));
                    }
                };
                WindowToggleSubscriber.prototype.notifyError = function (err) {
                    this.error(err);
                };
                WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
                    if (inner !== this.openSubscription) {
                        this.closeWindow(this.contexts.indexOf(inner.context));
                    }
                };
                WindowToggleSubscriber.prototype.closeWindow = function (index) {
                    if (index === -1) {
                        return;
                    }
                    var contexts = this.contexts;
                    var context = contexts[index];
                    var window = context.window, subscription = context.subscription;
                    contexts.splice(index, 1);
                    window.complete();
                    subscription.unsubscribe();
                };
                return WindowToggleSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3dpbmRvd1RvZ2dsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F3Q0c7SUFDSCxzQkFBbUMsUUFBdUIsRUFDdkIsZUFBa0Q7UUFDbkYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBb0IsQ0FBTyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBSEQsdUNBR0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1EO2dCQUVFLDhCQUFvQixRQUF1QixFQUN2QixlQUFrRDtvQkFEbEQsYUFBUSxHQUFSLFFBQVEsQ0FBZTtvQkFDdkIsb0JBQWUsR0FBZixlQUFlLENBQW1DO2dCQUN0RSxDQUFDO2dCQUVELG1DQUFJLEdBQUosVUFBSyxVQUFxQyxFQUFFLE1BQVc7b0JBQ3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksc0JBQXNCLENBQ2pELFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQ2hELENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUNILDJCQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFPRDs7OztlQUlHO1lBQ0g7Z0JBQTJDLDBDQUF1QjtnQkFJaEUsZ0NBQVksV0FBc0MsRUFDOUIsUUFBdUIsRUFDdkIsZUFBa0Q7b0JBQ3BFLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQUZELGFBQVEsR0FBUixRQUFRLENBQWU7b0JBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUFtQztvQkFMOUQsYUFBUSxHQUF1QixFQUFFLENBQUM7b0JBT3hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLHFDQUFpQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FB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QztnQkFFRCw0Q0FBVyxHQUFYLFVBQVksR0FBUTtvQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztnQkFFRCwrQ0FBYyxHQUFkLFVBQWUsS0FBbUI7b0JBQ2hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFRLEtBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxDQUFDO2dCQUNILENBQUM7Z0JBRU8sNENBQVcsR0FBbkIsVUFBb0IsS0FBYTtvQkFDL0IsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakIsTUFBTSxDQUFDO29CQUNULENBQUM7b0JBRU8sNEJBQVEsQ0FBVTtvQkFDMUIsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QiwyQkFBTSxFQUFFLG1DQUFZLENBQWE7b0JBQ3pDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMxQixNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2xCLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztnQkFDSCw2QkFBQztZQUFELENBNUhBLEFBNEhDLENBNUgwQyxpQ0FBZSxHQTRIekQiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3Ivd2luZG93VG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJy4uL1N1YmplY3QnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5cbmltcG9ydCB7dHJ5Q2F0Y2h9IGZyb20gJy4uL3V0aWwvdHJ5Q2F0Y2gnO1xuaW1wb3J0IHtlcnJvck9iamVjdH0gZnJvbSAnLi4vdXRpbC9lcnJvck9iamVjdCc7XG5cbmltcG9ydCB7T3V0ZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHtJbm5lclN1YnNjcmliZXJ9IGZyb20gJy4uL0lubmVyU3Vic2NyaWJlcic7XG5pbXBvcnQge3N1YnNjcmliZVRvUmVzdWx0fSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcblxuLyoqXG4gKiBCcmFuY2ggb3V0IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB2YWx1ZXMgYXMgYSBuZXN0ZWQgT2JzZXJ2YWJsZSBzdGFydGluZyBmcm9tXG4gKiBhbiBlbWlzc2lvbiBmcm9tIGBvcGVuaW5nc2AgYW5kIGVuZGluZyB3aGVuIHRoZSBvdXRwdXQgb2YgYGNsb3NpbmdTZWxlY3RvcmBcbiAqIGVtaXRzLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5JdCdzIGxpa2Uge0BsaW5rIGJ1ZmZlclRvZ2dsZX0sIGJ1dCBlbWl0cyBhIG5lc3RlZFxuICogT2JzZXJ2YWJsZSBpbnN0ZWFkIG9mIGFuIGFycmF5Ljwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3dpbmRvd1RvZ2dsZS5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB3aW5kb3dzIG9mIGl0ZW1zIGl0IGNvbGxlY3RzIGZyb20gdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZS4gVGhlIG91dHB1dCBPYnNlcnZhYmxlIGVtaXRzIHdpbmRvd3MgdGhhdCBjb250YWluIHRob3NlIGl0ZW1zXG4gKiBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBiZXR3ZWVuIHRoZSB0aW1lIHdoZW4gdGhlIGBvcGVuaW5nc2BcbiAqIE9ic2VydmFibGUgZW1pdHMgYW4gaXRlbSBhbmQgd2hlbiB0aGUgT2JzZXJ2YWJsZSByZXR1cm5lZCBieVxuICogYGNsb3NpbmdTZWxlY3RvcmAgZW1pdHMgYW4gaXRlbS5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5FdmVyeSBvdGhlciBzZWNvbmQsIGVtaXQgdGhlIGNsaWNrIGV2ZW50cyBmcm9tIHRoZSBuZXh0IDUwMG1zPC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciBvcGVuaW5ncyA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCk7XG4gKiB2YXIgcmVzdWx0ID0gY2xpY2tzLndpbmRvd1RvZ2dsZShvcGVuaW5ncywgaSA9PlxuICogICBpICUgMiA/IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoNTAwKSA6IFJ4Lk9ic2VydmFibGUuZW1wdHkoKVxuICogKS5tZXJnZUFsbCgpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayB3aW5kb3d9XG4gKiBAc2VlIHtAbGluayB3aW5kb3dDb3VudH1cbiAqIEBzZWUge0BsaW5rIHdpbmRvd1RpbWV9XG4gKiBAc2VlIHtAbGluayB3aW5kb3dXaGVufVxuICogQHNlZSB7QGxpbmsgYnVmZmVyVG9nZ2xlfVxuICpcbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZTxPPn0gb3BlbmluZ3MgQW4gb2JzZXJ2YWJsZSBvZiBub3RpZmljYXRpb25zIHRvIHN0YXJ0IG5ld1xuICogd2luZG93cy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24odmFsdWU6IE8pOiBPYnNlcnZhYmxlfSBjbG9zaW5nU2VsZWN0b3IgQSBmdW5jdGlvbiB0aGF0IHRha2VzXG4gKiB0aGUgdmFsdWUgZW1pdHRlZCBieSB0aGUgYG9wZW5pbmdzYCBvYnNlcnZhYmxlIGFuZCByZXR1cm5zIGFuIE9ic2VydmFibGUsXG4gKiB3aGljaCwgd2hlbiBpdCBlbWl0cyAoZWl0aGVyIGBuZXh0YCBvciBgY29tcGxldGVgKSwgc2lnbmFscyB0aGF0IHRoZVxuICogYXNzb2NpYXRlZCB3aW5kb3cgc2hvdWxkIGNvbXBsZXRlLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFQ+Pn0gQW4gb2JzZXJ2YWJsZSBvZiB3aW5kb3dzLCB3aGljaCBpbiB0dXJuXG4gKiBhcmUgT2JzZXJ2YWJsZXMuXG4gKiBAbWV0aG9kIHdpbmRvd1RvZ2dsZVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpbmRvd1RvZ2dsZTxULCBPPihvcGVuaW5nczogT2JzZXJ2YWJsZTxPPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2luZ1NlbGVjdG9yOiAob3BlblZhbHVlOiBPKSA9PiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8VD4+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgV2luZG93VG9nZ2xlT3BlcmF0b3I8VCwgTz4ob3BlbmluZ3MsIGNsb3NpbmdTZWxlY3RvcikpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd1RvZ2dsZVNpZ25hdHVyZTxUPiB7XG4gIDxPPihvcGVuaW5nczogT2JzZXJ2YWJsZTxPPiwgY2xvc2luZ1NlbGVjdG9yOiAob3BlblZhbHVlOiBPKSA9PiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8VD4+O1xufVxuXG5jbGFzcyBXaW5kb3dUb2dnbGVPcGVyYXRvcjxULCBPPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIE9ic2VydmFibGU8VD4+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wZW5pbmdzOiBPYnNlcnZhYmxlPE8+LFxuICAgICAgICAgICAgICBwcml2YXRlIGNsb3NpbmdTZWxlY3RvcjogKG9wZW5WYWx1ZTogTykgPT4gT2JzZXJ2YWJsZTxhbnk+KSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8T2JzZXJ2YWJsZTxUPj4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFdpbmRvd1RvZ2dsZVN1YnNjcmliZXIoXG4gICAgICBzdWJzY3JpYmVyLCB0aGlzLm9wZW5pbmdzLCB0aGlzLmNsb3NpbmdTZWxlY3RvclxuICAgICkpO1xuICB9XG59XG5cbmludGVyZmFjZSBXaW5kb3dDb250ZXh0PFQ+IHtcbiAgd2luZG93OiBTdWJqZWN0PFQ+O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIFdpbmRvd1RvZ2dsZVN1YnNjcmliZXI8VCwgTz4gZXh0ZW5kcyBPdXRlclN1YnNjcmliZXI8VCwgYW55PiB7XG4gIHByaXZhdGUgY29udGV4dHM6IFdpbmRvd0NvbnRleHQ8VD5bXSA9IFtdO1xuICBwcml2YXRlIG9wZW5TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxPYnNlcnZhYmxlPFQ+PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBvcGVuaW5nczogT2JzZXJ2YWJsZTxPPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjbG9zaW5nU2VsZWN0b3I6IChvcGVuVmFsdWU6IE8pID0+IE9ic2VydmFibGU8YW55Pikge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLmFkZCh0aGlzLm9wZW5TdWJzY3JpcHRpb24gPSBzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCBvcGVuaW5ncywgb3BlbmluZ3MpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCkge1xuICAgIGNvbnN0IHsgY29udGV4dHMgfSA9IHRoaXM7XG4gICAgaWYgKGNvbnRleHRzKSB7XG4gICAgICBjb25zdCBsZW4gPSBjb250ZXh0cy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnRleHRzW2ldLndpbmRvdy5uZXh0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX2Vycm9yKGVycjogYW55KSB7XG5cbiAgICBjb25zdCB7IGNvbnRleHRzIH0gPSB0aGlzO1xuICAgIHRoaXMuY29udGV4dHMgPSBudWxsO1xuXG4gICAgaWYgKGNvbnRleHRzKSB7XG4gICAgICBjb25zdCBsZW4gPSBjb250ZXh0cy5sZW5ndGg7XG4gICAgICBsZXQgaW5kZXggPSAtMTtcblxuICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW4pIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNvbnRleHRzW2luZGV4XTtcbiAgICAgICAgY29udGV4dC53aW5kb3cuZXJyb3IoZXJyKTtcbiAgICAgICAgY29udGV4dC5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdXBlci5fZXJyb3IoZXJyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKSB7XG4gICAgY29uc3QgeyBjb250ZXh0cyB9ID0gdGhpcztcbiAgICB0aGlzLmNvbnRleHRzID0gbnVsbDtcbiAgICBpZiAoY29udGV4dHMpIHtcbiAgICAgIGNvbnN0IGxlbiA9IGNvbnRleHRzLmxlbmd0aDtcbiAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW4pIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNvbnRleHRzW2luZGV4XTtcbiAgICAgICAgY29udGV4dC53aW5kb3cuY29tcGxldGUoKTtcbiAgICAgICAgY29udGV4dC5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3VwZXIuX2NvbXBsZXRlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3Vuc3Vic2NyaWJlKCkge1xuICAgIGNvbnN0IHsgY29udGV4dHMgfSA9IHRoaXM7XG4gICAgdGhpcy5jb250ZXh0cyA9IG51bGw7XG4gICAgaWYgKGNvbnRleHRzKSB7XG4gICAgICBjb25zdCBsZW4gPSBjb250ZXh0cy5sZW5ndGg7XG4gICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjb250ZXh0c1tpbmRleF07XG4gICAgICAgIGNvbnRleHQud2luZG93LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGNvbnRleHQuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5TmV4dChvdXRlclZhbHVlOiBhbnksIGlubmVyVmFsdWU6IGFueSxcbiAgICAgICAgICAgICBvdXRlckluZGV4OiBudW1iZXIsIGlubmVySW5kZXg6IG51bWJlcixcbiAgICAgICAgICAgICBpbm5lclN1YjogSW5uZXJTdWJzY3JpYmVyPFQsIGFueT4pOiB2b2lkIHtcblxuICAgIGlmIChvdXRlclZhbHVlID09PSB0aGlzLm9wZW5pbmdzKSB7XG5cbiAgICAgIGNvbnN0IHsgY2xvc2luZ1NlbGVjdG9yIH0gPSB0aGlzO1xuICAgICAgY29uc3QgY2xvc2luZ05vdGlmaWVyID0gdHJ5Q2F0Y2goY2xvc2luZ1NlbGVjdG9yKShpbm5lclZhbHVlKTtcblxuICAgICAgaWYgKGNsb3NpbmdOb3RpZmllciA9PT0gZXJyb3JPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoZXJyb3JPYmplY3QuZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB3aW5kb3cgPSBuZXcgU3ViamVjdDxUPigpO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB7IHdpbmRvdywgc3Vic2NyaXB0aW9uIH07XG4gICAgICAgIHRoaXMuY29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICAgICAgY29uc3QgaW5uZXJTdWJzY3JpcHRpb24gPSBzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCBjbG9zaW5nTm90aWZpZXIsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChpbm5lclN1YnNjcmlwdGlvbi5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgIHRoaXMuY2xvc2VXaW5kb3codGhpcy5jb250ZXh0cy5sZW5ndGggLSAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAoPGFueT4gaW5uZXJTdWJzY3JpcHRpb24pLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICAgIHN1YnNjcmlwdGlvbi5hZGQoaW5uZXJTdWJzY3JpcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHdpbmRvdyk7XG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZVdpbmRvdyh0aGlzLmNvbnRleHRzLmluZGV4T2Yob3V0ZXJWYWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIG5vdGlmeUVycm9yKGVycjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5lcnJvcihlcnIpO1xuICB9XG5cbiAgbm90aWZ5Q29tcGxldGUoaW5uZXI6IFN1YnNjcmlwdGlvbik6IHZvaWQge1xuICAgIGlmIChpbm5lciAhPT0gdGhpcy5vcGVuU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmNsb3NlV2luZG93KHRoaXMuY29udGV4dHMuaW5kZXhPZigoPGFueT4gaW5uZXIpLmNvbnRleHQpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsb3NlV2luZG93KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb250ZXh0cyB9ID0gdGhpcztcbiAgICBjb25zdCBjb250ZXh0ID0gY29udGV4dHNbaW5kZXhdO1xuICAgIGNvbnN0IHsgd2luZG93LCBzdWJzY3JpcHRpb24gfSA9IGNvbnRleHQ7XG4gICAgY29udGV4dHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB3aW5kb3cuY29tcGxldGUoKTtcbiAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
