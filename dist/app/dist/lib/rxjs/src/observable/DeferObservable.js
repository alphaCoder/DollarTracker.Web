System.register(['../Observable', '../util/subscribeToResult', '../OuterSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, subscribeToResult_1, OuterSubscriber_1;
    var DeferObservable, DeferSubscriber;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            DeferObservable = (function (_super) {
                __extends(DeferObservable, _super);
                function DeferObservable(observableFactory) {
                    _super.call(this);
                    this.observableFactory = observableFactory;
                }
                /**
                 * Creates an Observable that, on subscribe, calls an Observable factory to
                 * make an Observable for each new Observer.
                 *
                 * <span class="informal">Creates the Observable lazily, that is, only when it
                 * is subscribed.
                 * </span>
                 *
                 * <img src="./img/defer.png" width="100%">
                 *
                 * `defer` allows you to create the Observable only when the Observer
                 * subscribes, and create a fresh Observable for each Observer. It waits until
                 * an Observer subscribes to it, and then it generates an Observable,
                 * typically with an Observable factory function. It does this afresh for each
                 * subscriber, so although each subscriber may think it is subscribing to the
                 * same Observable, in fact each subscriber gets its own individual
                 * Observable.
                 *
                 * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
                 * var clicksOrInterval = Rx.Observable.defer(function () {
                 *   if (Math.random() > 0.5) {
                 *     return Rx.Observable.fromEvent(document, 'click');
                 *   } else {
                 *     return Rx.Observable.interval(1000);
                 *   }
                 * });
                 * clicksOrInterval.subscribe(x => console.log(x));
                 *
                 * @see {@link create}
                 *
                 * @param {function(): Observable|Promise} observableFactory The Observable
                 * factory function to invoke for each Observer that subscribes to the output
                 * Observable. May also return a Promise, which will be converted on the fly
                 * to an Observable.
                 * @return {Observable} An Observable whose Observers' subscriptions trigger
                 * an invocation of the given Observable factory function.
                 * @static true
                 * @name defer
                 * @owner Observable
                 */
                DeferObservable.create = function (observableFactory) {
                    return new DeferObservable(observableFactory);
                };
                DeferObservable.prototype._subscribe = function (subscriber) {
                    return new DeferSubscriber(subscriber, this.observableFactory);
                };
                return DeferObservable;
            }(Observable_1.Observable));
            exports_1("DeferObservable", DeferObservable);
            DeferSubscriber = (function (_super) {
                __extends(DeferSubscriber, _super);
                function DeferSubscriber(destination, factory) {
                    _super.call(this, destination);
                    this.factory = factory;
                    this.tryDefer();
                }
                DeferSubscriber.prototype.tryDefer = function () {
                    try {
                        this._callFactory();
                    }
                    catch (err) {
                        this._error(err);
                    }
                };
                DeferSubscriber.prototype._callFactory = function () {
                    var result = this.factory();
                    if (result) {
                        this.add(subscribeToResult_1.subscribeToResult(this, result));
                    }
                };
                return DeferSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvRGVmZXJPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTs7OztlQUlHO1lBQ0g7Z0JBQXdDLG1DQUFhO2dCQThDbkQseUJBQW9CLGlCQUF3RDtvQkFDMUUsaUJBQU8sQ0FBQztvQkFEVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXVDO2dCQUU1RSxDQUFDO2dCQTlDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQXVDRztnQkFDSSxzQkFBTSxHQUFiLFVBQWlCLGlCQUF3RDtvQkFDdkUsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBTVMsb0NBQVUsR0FBcEIsVUFBcUIsVUFBeUI7b0JBQzVDLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2pFLENBQUM7Z0JBQ0gsc0JBQUM7WUFBRCxDQXJEQSxBQXFEQyxDQXJEdUMsdUJBQVUsR0FxRGpEO1lBckRELDZDQXFEQyxDQUFBO1lBRUQ7Z0JBQWlDLG1DQUFxQjtnQkFDcEQseUJBQVksV0FBMEIsRUFDbEIsT0FBOEM7b0JBQ2hFLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQURELFlBQU8sR0FBUCxPQUFPLENBQXVDO29CQUVoRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2xCLENBQUM7Z0JBRU8sa0NBQVEsR0FBaEI7b0JBQ0UsSUFBSSxDQUFDO3dCQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDdEIsQ0FBRTtvQkFBQSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLENBQUM7Z0JBQ0gsQ0FBQztnQkFFTyxzQ0FBWSxHQUFwQjtvQkFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzlCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDNUMsQ0FBQztnQkFDSCxDQUFDO2dCQUNILHNCQUFDO1lBQUQsQ0FyQkEsQUFxQkMsQ0FyQmdDLGlDQUFlLEdBcUIvQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vYnNlcnZhYmxlL0RlZmVyT2JzZXJ2YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaWJhYmxlT3JQcm9taXNlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcblxuaW1wb3J0IHtzdWJzY3JpYmVUb1Jlc3VsdH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCc7XG5pbXBvcnQge091dGVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vT3V0ZXJTdWJzY3JpYmVyJztcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG5leHBvcnQgY2xhc3MgRGVmZXJPYnNlcnZhYmxlPFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gT2JzZXJ2YWJsZSB0aGF0LCBvbiBzdWJzY3JpYmUsIGNhbGxzIGFuIE9ic2VydmFibGUgZmFjdG9yeSB0b1xuICAgKiBtYWtlIGFuIE9ic2VydmFibGUgZm9yIGVhY2ggbmV3IE9ic2VydmVyLlxuICAgKlxuICAgKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+Q3JlYXRlcyB0aGUgT2JzZXJ2YWJsZSBsYXppbHksIHRoYXQgaXMsIG9ubHkgd2hlbiBpdFxuICAgKiBpcyBzdWJzY3JpYmVkLlxuICAgKiA8L3NwYW4+XG4gICAqXG4gICAqIDxpbWcgc3JjPVwiLi9pbWcvZGVmZXIucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAqXG4gICAqIGBkZWZlcmAgYWxsb3dzIHlvdSB0byBjcmVhdGUgdGhlIE9ic2VydmFibGUgb25seSB3aGVuIHRoZSBPYnNlcnZlclxuICAgKiBzdWJzY3JpYmVzLCBhbmQgY3JlYXRlIGEgZnJlc2ggT2JzZXJ2YWJsZSBmb3IgZWFjaCBPYnNlcnZlci4gSXQgd2FpdHMgdW50aWxcbiAgICogYW4gT2JzZXJ2ZXIgc3Vic2NyaWJlcyB0byBpdCwgYW5kIHRoZW4gaXQgZ2VuZXJhdGVzIGFuIE9ic2VydmFibGUsXG4gICAqIHR5cGljYWxseSB3aXRoIGFuIE9ic2VydmFibGUgZmFjdG9yeSBmdW5jdGlvbi4gSXQgZG9lcyB0aGlzIGFmcmVzaCBmb3IgZWFjaFxuICAgKiBzdWJzY3JpYmVyLCBzbyBhbHRob3VnaCBlYWNoIHN1YnNjcmliZXIgbWF5IHRoaW5rIGl0IGlzIHN1YnNjcmliaW5nIHRvIHRoZVxuICAgKiBzYW1lIE9ic2VydmFibGUsIGluIGZhY3QgZWFjaCBzdWJzY3JpYmVyIGdldHMgaXRzIG93biBpbmRpdmlkdWFsXG4gICAqIE9ic2VydmFibGUuXG4gICAqXG4gICAqIEBleGFtcGxlIDxjYXB0aW9uPlN1YnNjcmliZSB0byBlaXRoZXIgYW4gT2JzZXJ2YWJsZSBvZiBjbGlja3Mgb3IgYW4gT2JzZXJ2YWJsZSBvZiBpbnRlcnZhbCwgYXQgcmFuZG9tPC9jYXB0aW9uPlxuICAgKiB2YXIgY2xpY2tzT3JJbnRlcnZhbCA9IFJ4Lk9ic2VydmFibGUuZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgKiAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAqICAgICByZXR1cm4gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICAgKiAgIH0gZWxzZSB7XG4gICAqICAgICByZXR1cm4gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKTtcbiAgICogICB9XG4gICAqIH0pO1xuICAgKiBjbGlja3NPckludGVydmFsLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICpcbiAgICogQHNlZSB7QGxpbmsgY3JlYXRlfVxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCk6IE9ic2VydmFibGV8UHJvbWlzZX0gb2JzZXJ2YWJsZUZhY3RvcnkgVGhlIE9ic2VydmFibGVcbiAgICogZmFjdG9yeSBmdW5jdGlvbiB0byBpbnZva2UgZm9yIGVhY2ggT2JzZXJ2ZXIgdGhhdCBzdWJzY3JpYmVzIHRvIHRoZSBvdXRwdXRcbiAgICogT2JzZXJ2YWJsZS4gTWF5IGFsc28gcmV0dXJuIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBiZSBjb252ZXJ0ZWQgb24gdGhlIGZseVxuICAgKiB0byBhbiBPYnNlcnZhYmxlLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIHdob3NlIE9ic2VydmVycycgc3Vic2NyaXB0aW9ucyB0cmlnZ2VyXG4gICAqIGFuIGludm9jYXRpb24gb2YgdGhlIGdpdmVuIE9ic2VydmFibGUgZmFjdG9yeSBmdW5jdGlvbi5cbiAgICogQHN0YXRpYyB0cnVlXG4gICAqIEBuYW1lIGRlZmVyXG4gICAqIEBvd25lciBPYnNlcnZhYmxlXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlPFQ+KG9ic2VydmFibGVGYWN0b3J5OiAoKSA9PiBTdWJzY3JpYmFibGVPclByb21pc2U8VD4gfCB2b2lkKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBEZWZlck9ic2VydmFibGUob2JzZXJ2YWJsZUZhY3RvcnkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvYnNlcnZhYmxlRmFjdG9yeTogKCkgPT4gU3Vic2NyaWJhYmxlT3JQcm9taXNlPFQ+IHwgdm9pZCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gbmV3IERlZmVyU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLm9ic2VydmFibGVGYWN0b3J5KTtcbiAgfVxufVxuXG5jbGFzcyBEZWZlclN1YnNjcmliZXI8VD4gZXh0ZW5kcyBPdXRlclN1YnNjcmliZXI8VCwgVD4ge1xuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxUPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmYWN0b3J5OiAoKSA9PiBTdWJzY3JpYmFibGVPclByb21pc2U8VD4gfCB2b2lkKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMudHJ5RGVmZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5RGVmZXIoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2NhbGxGYWN0b3J5KCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NhbGxGYWN0b3J5KCk6IHZvaWQge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZmFjdG9yeSgpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHRoaXMuYWRkKHN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIHJlc3VsdCkpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
