System.register(['../scheduler/async', '../util/isDate', '../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var async_1, isDate_1, OuterSubscriber_1, subscribeToResult_1;
    var TimeoutWithOperator, TimeoutWithSubscriber;
    /**
     * @param due
     * @param withObservable
     * @param scheduler
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method timeoutWith
     * @owner Observable
     */
    function timeoutWith(due, withObservable, scheduler) {
        if (scheduler === void 0) { scheduler = async_1.async; }
        var absoluteTimeout = isDate_1.isDate(due);
        var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
        return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
    }
    exports_1("timeoutWith", timeoutWith);
    return {
        setters:[
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (isDate_1_1) {
                isDate_1 = isDate_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            TimeoutWithOperator = (function () {
                function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
                    this.waitFor = waitFor;
                    this.absoluteTimeout = absoluteTimeout;
                    this.withObservable = withObservable;
                    this.scheduler = scheduler;
                }
                TimeoutWithOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
                };
                return TimeoutWithOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            TimeoutWithSubscriber = (function (_super) {
                __extends(TimeoutWithSubscriber, _super);
                function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
                    _super.call(this);
                    this.destination = destination;
                    this.absoluteTimeout = absoluteTimeout;
                    this.waitFor = waitFor;
                    this.withObservable = withObservable;
                    this.scheduler = scheduler;
                    this.timeoutSubscription = undefined;
                    this.index = 0;
                    this._previousIndex = 0;
                    this._hasCompleted = false;
                    destination.add(this);
                    this.scheduleTimeout();
                }
                Object.defineProperty(TimeoutWithSubscriber.prototype, "previousIndex", {
                    get: function () {
                        return this._previousIndex;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeoutWithSubscriber.prototype, "hasCompleted", {
                    get: function () {
                        return this._hasCompleted;
                    },
                    enumerable: true,
                    configurable: true
                });
                TimeoutWithSubscriber.dispatchTimeout = function (state) {
                    var source = state.subscriber;
                    var currentIndex = state.index;
                    if (!source.hasCompleted && source.previousIndex === currentIndex) {
                        source.handleTimeout();
                    }
                };
                TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
                    var currentIndex = this.index;
                    var timeoutState = { subscriber: this, index: currentIndex };
                    this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, timeoutState);
                    this.index++;
                    this._previousIndex = currentIndex;
                };
                TimeoutWithSubscriber.prototype._next = function (value) {
                    this.destination.next(value);
                    if (!this.absoluteTimeout) {
                        this.scheduleTimeout();
                    }
                };
                TimeoutWithSubscriber.prototype._error = function (err) {
                    this.destination.error(err);
                    this._hasCompleted = true;
                };
                TimeoutWithSubscriber.prototype._complete = function () {
                    this.destination.complete();
                    this._hasCompleted = true;
                };
                TimeoutWithSubscriber.prototype.handleTimeout = function () {
                    if (!this.isUnsubscribed) {
                        var withObservable = this.withObservable;
                        this.unsubscribe();
                        this.destination.add(this.timeoutSubscription = subscribeToResult_1.subscribeToResult(this, withObservable));
                    }
                };
                return TimeoutWithSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3RpbWVvdXRXaXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFVQTs7Ozs7OztPQU9HO0lBQ0gscUJBQWtDLEdBQWtCLEVBQ2xCLGNBQTZCLEVBQzdCLFNBQTRCO1FBQTVCLHlCQUE0QixHQUE1Qix5QkFBNEI7UUFDNUQsSUFBSSxlQUFlLEdBQUcsZUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksT0FBTyxHQUFHLGVBQWUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQVMsR0FBRyxDQUFDLENBQUM7UUFDakYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFORCxxQ0FNQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7O1lBT0Q7Z0JBQ0UsNkJBQW9CLE9BQWUsRUFDZixlQUF3QixFQUN4QixjQUErQixFQUMvQixTQUFvQjtvQkFIcEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFDZixvQkFBZSxHQUFmLGVBQWUsQ0FBUztvQkFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWlCO29CQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFXO2dCQUN4QyxDQUFDO2dCQUVELGtDQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUkscUJBQXFCLENBQ2hELFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUNwRixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFDSCwwQkFBQztZQUFELENBWkEs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QUFJLENBQUMsbUJBQW1CLEdBQUcscUNBQWlCLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQzNGLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCw0QkFBQztZQUFELENBOURBLEFBOERDLENBOUR5QyxpQ0FBZSxHQThEeEQiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvdGltZW91dFdpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge2FzeW5jfSBmcm9tICcuLi9zY2hlZHVsZXIvYXN5bmMnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtpc0RhdGV9IGZyb20gJy4uL3V0aWwvaXNEYXRlJztcbmltcG9ydCB7T3V0ZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHtzdWJzY3JpYmVUb1Jlc3VsdH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCc7XG5cbi8qKlxuICogQHBhcmFtIGR1ZVxuICogQHBhcmFtIHdpdGhPYnNlcnZhYmxlXG4gKiBAcGFyYW0gc2NoZWR1bGVyXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFI+fFdlYlNvY2tldFN1YmplY3Q8VD58T2JzZXJ2YWJsZTxUPn1cbiAqIEBtZXRob2QgdGltZW91dFdpdGhcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lb3V0V2l0aDxULCBSPihkdWU6IG51bWJlciB8IERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aE9ic2VydmFibGU6IE9ic2VydmFibGU8Uj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVyOiBTY2hlZHVsZXIgPSBhc3luYyk6IE9ic2VydmFibGU8VCB8IFI+IHtcbiAgbGV0IGFic29sdXRlVGltZW91dCA9IGlzRGF0ZShkdWUpO1xuICBsZXQgd2FpdEZvciA9IGFic29sdXRlVGltZW91dCA/ICgrZHVlIC0gc2NoZWR1bGVyLm5vdygpKSA6IE1hdGguYWJzKDxudW1iZXI+ZHVlKTtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgVGltZW91dFdpdGhPcGVyYXRvcih3YWl0Rm9yLCBhYnNvbHV0ZVRpbWVvdXQsIHdpdGhPYnNlcnZhYmxlLCBzY2hlZHVsZXIpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lb3V0V2l0aFNpZ25hdHVyZTxUPiB7XG4gIChkdWU6IG51bWJlciB8IERhdGUsIHdpdGhPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFQ+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQ+O1xuICA8Uj4oZHVlOiBudW1iZXIgfCBEYXRlLCB3aXRoT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxSPiwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUIHwgUj47XG59XG5cbmNsYXNzIFRpbWVvdXRXaXRoT3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2FpdEZvcjogbnVtYmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGFic29sdXRlVGltZW91dDogYm9vbGVhbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB3aXRoT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+LFxuICAgICAgICAgICAgICBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyKSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFRpbWVvdXRXaXRoU3Vic2NyaWJlcihcbiAgICAgIHN1YnNjcmliZXIsIHRoaXMuYWJzb2x1dGVUaW1lb3V0LCB0aGlzLndhaXRGb3IsIHRoaXMud2l0aE9ic2VydmFibGUsIHRoaXMuc2NoZWR1bGVyXG4gICAgKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIFRpbWVvdXRXaXRoU3Vic2NyaWJlcjxULCBSPiBleHRlbmRzIE91dGVyU3Vic2NyaWJlcjxULCBSPiB7XG4gIHByaXZhdGUgdGltZW91dFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9wcmV2aW91c0luZGV4OiBudW1iZXIgPSAwO1xuICBnZXQgcHJldmlvdXNJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wcmV2aW91c0luZGV4O1xuICB9XG4gIHByaXZhdGUgX2hhc0NvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBnZXQgaGFzQ29tcGxldGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oYXNDb21wbGV0ZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGVzdGluYXRpb246IFN1YnNjcmliZXI8VD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgYWJzb2x1dGVUaW1lb3V0OiBib29sZWFuLFxuICAgICAgICAgICAgICBwcml2YXRlIHdhaXRGb3I6IG51bWJlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB3aXRoT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+LFxuICAgICAgICAgICAgICBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICBkZXN0aW5hdGlvbi5hZGQodGhpcyk7XG4gICAgdGhpcy5zY2hlZHVsZVRpbWVvdXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGRpc3BhdGNoVGltZW91dChzdGF0ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3Qgc291cmNlID0gc3RhdGUuc3Vic2NyaWJlcjtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzdGF0ZS5pbmRleDtcbiAgICBpZiAoIXNvdXJjZS5oYXNDb21wbGV0ZWQgJiYgc291cmNlLnByZXZpb3VzSW5kZXggPT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgc291cmNlLmhhbmRsZVRpbWVvdXQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNjaGVkdWxlVGltZW91dCgpOiB2b2lkIHtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5pbmRleDtcbiAgICBjb25zdCB0aW1lb3V0U3RhdGUgPSB7IHN1YnNjcmliZXI6IHRoaXMsIGluZGV4OiBjdXJyZW50SW5kZXggfTtcbiAgICB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZShUaW1lb3V0V2l0aFN1YnNjcmliZXIuZGlzcGF0Y2hUaW1lb3V0LCB0aGlzLndhaXRGb3IsIHRpbWVvdXRTdGF0ZSk7XG4gICAgdGhpcy5pbmRleCsrO1xuICAgIHRoaXMuX3ByZXZpb3VzSW5kZXggPSBjdXJyZW50SW5kZXg7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIGlmICghdGhpcy5hYnNvbHV0ZVRpbWVvdXQpIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVUaW1lb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9lcnJvcihlcnI6IGFueSkge1xuICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICB0aGlzLl9oYXNDb21wbGV0ZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5faGFzQ29tcGxldGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGhhbmRsZVRpbWVvdXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICBjb25zdCB3aXRoT2JzZXJ2YWJsZSA9IHRoaXMud2l0aE9ic2VydmFibGU7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmFkZCh0aGlzLnRpbWVvdXRTdWJzY3JpcHRpb24gPSBzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCB3aXRoT2JzZXJ2YWJsZSkpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
