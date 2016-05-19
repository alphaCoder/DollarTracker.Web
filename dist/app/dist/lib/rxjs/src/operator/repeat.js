System.register(['../Subscriber', '../observable/EmptyObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, EmptyObservable_1;
    var RepeatOperator, RepeatSubscriber;
    /**
     * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times,
     * on a particular Scheduler.
     *
     * <img src="./img/repeat.png" width="100%">
     *
     * @param {Scheduler} [scheduler] the Scheduler to emit the items on.
     * @param {number} [count] the number of times the source Observable items are repeated, a count of 0 will yield
     * an empty Observable.
     * @return {Observable} an Observable that repeats the stream of items emitted by the source Observable at most
     * count times.
     * @method repeat
     * @owner Observable
     */
    function repeat(count) {
        if (count === void 0) { count = -1; }
        if (count === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        else if (count < 0) {
            return this.lift(new RepeatOperator(-1, this));
        }
        else {
            return this.lift(new RepeatOperator(count - 1, this));
        }
    }
    exports_1("repeat", repeat);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (EmptyObservable_1_1) {
                EmptyObservable_1 = EmptyObservable_1_1;
            }],
        execute: function() {
            RepeatOperator = (function () {
                function RepeatOperator(count, source) {
                    this.count = count;
                    this.source = source;
                }
                RepeatOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
                };
                return RepeatOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            RepeatSubscriber = (function (_super) {
                __extends(RepeatSubscriber, _super);
                function RepeatSubscriber(destination, count, source) {
                    _super.call(this, destination);
                    this.count = count;
                    this.source = source;
                }
                RepeatSubscriber.prototype.complete = function () {
                    if (!this.isStopped) {
                        var _a = this, source = _a.source, count = _a.count;
                        if (count === 0) {
                            return _super.prototype.complete.call(this);
                        }
                        else if (count > -1) {
                            this.count = count - 1;
                        }
                        this.unsubscribe();
                        this.isStopped = false;
                        this.isUnsubscribed = false;
                        source.subscribe(this);
                    }
                };
                return RepeatSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3JlcGVhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBS0E7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNILGdCQUEwQixLQUFrQjtRQUFsQixxQkFBa0IsR0FBbEIsU0FBaUIsQ0FBQztRQUMxQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMsSUFBSSxpQ0FBZSxFQUFLLENBQUM7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDO0lBQ0gsQ0FBQztJQVJELDJCQVFDLENBQUE7Ozs7Ozs7Ozs7WUFNRDtnQkFDRSx3QkFBb0IsS0FBYSxFQUNiLE1BQXFCO29CQURyQixVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUNiLFdBQU0sR0FBTixNQUFNLENBQWU7Z0JBQ3pDLENBQUM7Z0JBQ0QsNkJBQUksR0FBSixVQUFLLFVBQXlCLEVBQUUsTUFBVztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDdEYsQ0FBQztnQkFDSCxxQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFrQyxvQ0FBYTtnQkFDN0MsMEJBQVksV0FBNEIsRUFDcEIsS0FBYSxFQUNiLE1BQXFCO29CQUN2QyxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFGRCxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUNiLFdBQU0sR0FBTixNQUFNLENBQWU7Z0JBRXpDLENBQUM7Z0JBQ0QsbUNBQVEsR0FBUjtvQkFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixJQUFBLFNBQThCLEVBQXRCLGtCQUFNLEVBQUUsZ0JBQUssQ0FBVTt3QkFDL0IsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2hCLE1BQU0sQ0FBQyxnQkFBSyxDQUFDLFFBQVEsV0FBRSxDQUFDO3dCQUMxQixDQUFDO3dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ3pCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7d0JBQzVCLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCx1QkFBQztZQUFELENBcEJBLEFBb0JDLENBcEJpQyx1QkFBVSxHQW9CM0MiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvcmVwZWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0VtcHR5T2JzZXJ2YWJsZX0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9FbXB0eU9ic2VydmFibGUnO1xuXG4vKipcbiAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IHJlcGVhdHMgdGhlIHN0cmVhbSBvZiBpdGVtcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBhdCBtb3N0IGNvdW50IHRpbWVzLFxuICogb24gYSBwYXJ0aWN1bGFyIFNjaGVkdWxlci5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3JlcGVhdC5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gdGhlIFNjaGVkdWxlciB0byBlbWl0IHRoZSBpdGVtcyBvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbY291bnRdIHRoZSBudW1iZXIgb2YgdGltZXMgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGl0ZW1zIGFyZSByZXBlYXRlZCwgYSBjb3VudCBvZiAwIHdpbGwgeWllbGRcbiAqIGFuIGVtcHR5IE9ic2VydmFibGUuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhbiBPYnNlcnZhYmxlIHRoYXQgcmVwZWF0cyB0aGUgc3RyZWFtIG9mIGl0ZW1zIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGF0IG1vc3RcbiAqIGNvdW50IHRpbWVzLlxuICogQG1ldGhvZCByZXBlYXRcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQ8VD4oY291bnQ6IG51bWJlciA9IC0xKTogT2JzZXJ2YWJsZTxUPiB7XG4gIGlmIChjb3VudCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgRW1wdHlPYnNlcnZhYmxlPFQ+KCk7XG4gIH0gZWxzZSBpZiAoY291bnQgPCAwKSB7XG4gICAgcmV0dXJuIHRoaXMubGlmdChuZXcgUmVwZWF0T3BlcmF0b3IoLTEsIHRoaXMpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5saWZ0KG5ldyBSZXBlYXRPcGVyYXRvcihjb3VudCAtIDEsIHRoaXMpKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcGVhdFNpZ25hdHVyZTxUPiB7XG4gIChjb3VudD86IG51bWJlcik6IE9ic2VydmFibGU8VD47XG59XG5cbmNsYXNzIFJlcGVhdE9wZXJhdG9yPFQ+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgVD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvdW50OiBudW1iZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSB7XG4gIH1cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBSZXBlYXRTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuY291bnQsIHRoaXMuc291cmNlKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIFJlcGVhdFN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8YW55PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb3VudDogbnVtYmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHNvdXJjZTogT2JzZXJ2YWJsZTxUPikge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgfVxuICBjb21wbGV0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICBjb25zdCB7IHNvdXJjZSwgY291bnQgfSA9IHRoaXM7XG4gICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNvbXBsZXRlKCk7XG4gICAgICB9IGVsc2UgaWYgKGNvdW50ID4gLTEpIHtcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50IC0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmlzVW5zdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICBzb3VyY2Uuc3Vic2NyaWJlKHRoaXMpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
