System.register(['../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1, subscribeToResult_1;
    var SwitchFirstOperator, SwitchFirstSubscriber;
    /**
     * Converts a higher-order Observable into a first-order Observable by dropping
     * inner Observables while the previous inner Observable has not yet completed.
     *
     * <span class="informal">Flattens an Observable-of-Observables by dropping the
     * next inner Observables while the current inner is still executing.</span>
     *
     * <img src="./img/exhaust.png" width="100%">
     *
     * `exhaust` subscribes to an Observable that emits Observables, also known as a
     * higher-order Observable. Each time it observes one of these emitted inner
     * Observables, the output Observable begins emitting the items emitted by that
     * inner Observable. So far, it behaves like {@link mergeAll}. However,
     * `exhaust` ignores every new inner Observable if the previous Observable has
     * not yet completed. Once that one completes, it will accept and flatten the
     * next inner Observable and repeat this process.
     *
     * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
     * var result = higherOrder.exhaust();
     * result.subscribe(x => console.log(x));
     *
     * @see {@link combineAll}
     * @see {@link concatAll}
     * @see {@link switch}
     * @see {@link mergeAll}
     * @see {@link exhaustMap}
     * @see {@link zipAll}
     *
     * @return {Observable} Returns an Observable that takes a source of Observables
     * and propagates the first observable exclusively until it completes before
     * subscribing to the next.
     * @method exhaust
     * @owner Observable
     */
    function exhaust() {
        return this.lift(new SwitchFirstOperator());
    }
    exports_1("exhaust", exhaust);
    return {
        setters:[
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            SwitchFirstOperator = (function () {
                function SwitchFirstOperator() {
                }
                SwitchFirstOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new SwitchFirstSubscriber(subscriber));
                };
                return SwitchFirstOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SwitchFirstSubscriber = (function (_super) {
                __extends(SwitchFirstSubscriber, _super);
                function SwitchFirstSubscriber(destination) {
                    _super.call(this, destination);
                    this.hasCompleted = false;
                    this.hasSubscription = false;
                }
                SwitchFirstSubscriber.prototype._next = function (value) {
                    if (!this.hasSubscription) {
                        this.hasSubscription = true;
                        this.add(subscribeToResult_1.subscribeToResult(this, value));
                    }
                };
                SwitchFirstSubscriber.prototype._complete = function () {
                    this.hasCompleted = true;
                    if (!this.hasSubscription) {
                        this.destination.complete();
                    }
                };
                SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
                    this.remove(innerSub);
                    this.hasSubscription = false;
                    if (this.hasCompleted) {
                        this.destination.complete();
                    }
                };
                return SwitchFirstSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2V4aGF1c3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW1DRztJQUNIO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBbUIsRUFBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUZELDZCQUVDLENBQUE7Ozs7Ozs7Ozs7WUFNRDtnQkFBQTtnQkFJQSxDQUFDO2dCQUhDLGtDQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUkscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFDSCwwQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUF1Qyx5Q0FBcUI7Z0JBSTFELCtCQUFZLFdBQTBCO29CQUNwQyxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFKYixpQkFBWSxHQUFZLEtBQUssQ0FBQztvQkFDOUIsb0JBQWUsR0FBWSxLQUFLLENBQUM7Z0JBSXpDLENBQUM7Z0JBRVMscUNBQUssR0FBZixVQUFnQixLQUFRO29CQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsQ0FBQztnQkFDSCxDQUFDO2dCQUVTLHlDQUFTLEdBQW5CO29CQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUM5QixDQUFDO2dCQUNILENBQUM7Z0JBRUQsOENBQWMsR0FBZCxVQUFlLFFBQXNCO29CQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztvQkFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzlCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCw0QkFBQztZQUFELENBN0JBLEFBNkJDLENBN0JzQyxpQ0FBZSxHQTZCckQiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvZXhoYXVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQge091dGVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vT3V0ZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7c3Vic2NyaWJlVG9SZXN1bHR9IGZyb20gJy4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQnO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgaGlnaGVyLW9yZGVyIE9ic2VydmFibGUgaW50byBhIGZpcnN0LW9yZGVyIE9ic2VydmFibGUgYnkgZHJvcHBpbmdcbiAqIGlubmVyIE9ic2VydmFibGVzIHdoaWxlIHRoZSBwcmV2aW91cyBpbm5lciBPYnNlcnZhYmxlIGhhcyBub3QgeWV0IGNvbXBsZXRlZC5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+RmxhdHRlbnMgYW4gT2JzZXJ2YWJsZS1vZi1PYnNlcnZhYmxlcyBieSBkcm9wcGluZyB0aGVcbiAqIG5leHQgaW5uZXIgT2JzZXJ2YWJsZXMgd2hpbGUgdGhlIGN1cnJlbnQgaW5uZXIgaXMgc3RpbGwgZXhlY3V0aW5nLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL2V4aGF1c3QucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogYGV4aGF1c3RgIHN1YnNjcmliZXMgdG8gYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIE9ic2VydmFibGVzLCBhbHNvIGtub3duIGFzIGFcbiAqIGhpZ2hlci1vcmRlciBPYnNlcnZhYmxlLiBFYWNoIHRpbWUgaXQgb2JzZXJ2ZXMgb25lIG9mIHRoZXNlIGVtaXR0ZWQgaW5uZXJcbiAqIE9ic2VydmFibGVzLCB0aGUgb3V0cHV0IE9ic2VydmFibGUgYmVnaW5zIGVtaXR0aW5nIHRoZSBpdGVtcyBlbWl0dGVkIGJ5IHRoYXRcbiAqIGlubmVyIE9ic2VydmFibGUuIFNvIGZhciwgaXQgYmVoYXZlcyBsaWtlIHtAbGluayBtZXJnZUFsbH0uIEhvd2V2ZXIsXG4gKiBgZXhoYXVzdGAgaWdub3JlcyBldmVyeSBuZXcgaW5uZXIgT2JzZXJ2YWJsZSBpZiB0aGUgcHJldmlvdXMgT2JzZXJ2YWJsZSBoYXNcbiAqIG5vdCB5ZXQgY29tcGxldGVkLiBPbmNlIHRoYXQgb25lIGNvbXBsZXRlcywgaXQgd2lsbCBhY2NlcHQgYW5kIGZsYXR0ZW4gdGhlXG4gKiBuZXh0IGlubmVyIE9ic2VydmFibGUgYW5kIHJlcGVhdCB0aGlzIHByb2Nlc3MuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+UnVuIGEgZmluaXRlIHRpbWVyIGZvciBlYWNoIGNsaWNrLCBvbmx5IGlmIHRoZXJlIGlzIG5vIGN1cnJlbnRseSBhY3RpdmUgdGltZXI8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIGhpZ2hlck9yZGVyID0gY2xpY2tzLm1hcCgoZXYpID0+IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCkpO1xuICogdmFyIHJlc3VsdCA9IGhpZ2hlck9yZGVyLmV4aGF1c3QoKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgY29tYmluZUFsbH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdEFsbH1cbiAqIEBzZWUge0BsaW5rIHN3aXRjaH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlQWxsfVxuICogQHNlZSB7QGxpbmsgZXhoYXVzdE1hcH1cbiAqIEBzZWUge0BsaW5rIHppcEFsbH1cbiAqXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCB0YWtlcyBhIHNvdXJjZSBvZiBPYnNlcnZhYmxlc1xuICogYW5kIHByb3BhZ2F0ZXMgdGhlIGZpcnN0IG9ic2VydmFibGUgZXhjbHVzaXZlbHkgdW50aWwgaXQgY29tcGxldGVzIGJlZm9yZVxuICogc3Vic2NyaWJpbmcgdG8gdGhlIG5leHQuXG4gKiBAbWV0aG9kIGV4aGF1c3RcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGhhdXN0PFQ+KCk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBTd2l0Y2hGaXJzdE9wZXJhdG9yPFQ+KCkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXRjaEZpcnN0U2lnbmF0dXJlPFQ+IHtcbiAgKCk6IFQ7XG59XG5cbmNsYXNzIFN3aXRjaEZpcnN0T3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBUPiB7XG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPiwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgU3dpdGNoRmlyc3RTdWJzY3JpYmVyKHN1YnNjcmliZXIpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgU3dpdGNoRmlyc3RTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgT3V0ZXJTdWJzY3JpYmVyPFQsIFQ+IHtcbiAgcHJpdmF0ZSBoYXNDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBoYXNTdWJzY3JpcHRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxUPikge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuaGFzU3Vic2NyaXB0aW9uID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWRkKHN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgaWYgKCF0aGlzLmhhc1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5vdGlmeUNvbXBsZXRlKGlubmVyU3ViOiBTdWJzY3JpcHRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZShpbm5lclN1Yik7XG4gICAgdGhpcy5oYXNTdWJzY3JpcHRpb24gPSBmYWxzZTtcbiAgICBpZiAodGhpcy5oYXNDb21wbGV0ZWQpIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
