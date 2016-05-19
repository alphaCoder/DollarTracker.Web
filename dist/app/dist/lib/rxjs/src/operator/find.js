System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var FindValueOperator, FindValueSubscriber;
    /**
     * Emits only the first value emitted by the source Observable that meets some
     * condition.
     *
     * <span class="informal">Finds the first value that passes some test and emits
     * that.</span>
     *
     * <img src="./img/find.png" width="100%">
     *
     * `find` searches for the first item in the source Observable that matches the
     * specified condition embodied by the `predicate`, and returns the first
     * occurrence in the source. Unlike {@link first}, the `predicate` is required
     * in `find`, and does not emit an error if a valid value is not found.
     *
     * @example <caption>Find and emit the first click that happens on a DIV element</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.find(ev => ev.target.tagName === 'DIV');
     * result.subscribe(x => console.log(x));
     *
     * @see {@link filter}
     * @see {@link first}
     * @see {@link findIndex}
     * @see {@link take}
     *
     * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
     * A function called with each item to test for condition matching.
     * @param {any} [thisArg] An optional argument to determine the value of `this`
     * in the `predicate` function.
     * @return {Observable<T>} An Observable of the first item that matches the
     * condition.
     * @method find
     * @owner Observable
     */
    function find(predicate, thisArg) {
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate is not a function');
        }
        return this.lift(new FindValueOperator(predicate, this, false, thisArg));
    }
    exports_1("find", find);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            FindValueOperator = (function () {
                function FindValueOperator(predicate, source, yieldIndex, thisArg) {
                    this.predicate = predicate;
                    this.source = source;
                    this.yieldIndex = yieldIndex;
                    this.thisArg = thisArg;
                }
                FindValueOperator.prototype.call = function (observer, source) {
                    return source._subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
                };
                return FindValueOperator;
            }());
            exports_1("FindValueOperator", FindValueOperator);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            FindValueSubscriber = (function (_super) {
                __extends(FindValueSubscriber, _super);
                function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
                    _super.call(this, destination);
                    this.predicate = predicate;
                    this.source = source;
                    this.yieldIndex = yieldIndex;
                    this.thisArg = thisArg;
                    this.index = 0;
                }
                FindValueSubscriber.prototype.notifyComplete = function (value) {
                    var destination = this.destination;
                    destination.next(value);
                    destination.complete();
                };
                FindValueSubscriber.prototype._next = function (value) {
                    var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
                    var index = this.index++;
                    try {
                        var result = predicate.call(thisArg || this, value, index, this.source);
                        if (result) {
                            this.notifyComplete(this.yieldIndex ? index : value);
                        }
                    }
                    catch (err) {
                        this.destination.error(err);
                    }
                };
                FindValueSubscriber.prototype._complete = function () {
                    this.notifyComplete(this.yieldIndex ? -1 : undefined);
                };
                return FindValueSubscriber;
            }(Subscriber_1.Subscriber));
            exports_1("FindValueSubscriber", FindValueSubscriber);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2ZpbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWdDRztJQUNILGNBQXdCLFNBQXNFLEVBQ3RFLE9BQWE7UUFDbkMsRUFBRSxDQUFDLENBQUMsT0FBTyxTQUFTLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNwQyxNQUFNLElBQUksU0FBUyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBTkQsdUJBTUMsQ0FBQTs7Ozs7OztZQU1EO2dCQUNFLDJCQUFvQixTQUFzRSxFQUN0RSxNQUFxQixFQUNyQixVQUFtQixFQUNuQixPQUFhO29CQUhiLGNBQVMsR0FBVCxTQUFTLENBQTZEO29CQUN0RSxXQUFNLEdBQU4sTUFBTSxDQUFlO29CQUNyQixlQUFVLEdBQVYsVUFBVSxDQUFTO29CQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFNO2dCQUNqQyxDQUFDO2dCQUVELGdDQUFJLEdBQUosVUFBSyxRQUF1QixFQUFFLE1BQVc7b0JBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUMxSCxDQUFDO2dCQUNILHdCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCxpREFVQyxDQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUE0Qyx1Q0FBYTtnQkFHdkQsNkJBQVksV0FBMEIsRUFDbEIsU0FBc0UsRUFDdEUsTUFBcUIsRUFDckIsVUFBbUIsRUFDbkIsT0FBYTtvQkFDL0Isa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBSkQsY0FBUyxHQUFULFNBQVMsQ0FBNkQ7b0JBQ3RFLFdBQU0sR0FBTixNQUFNLENBQWU7b0JBQ3JCLGVBQVUsR0FBVixVQUFVLENBQVM7b0JBQ25CLFlBQU8sR0FBUCxPQUFPLENBQU07b0JBTnpCLFVBQUssR0FBVyxDQUFDLENBQUM7Z0JBUTFCLENBQUM7Z0JBRU8sNENBQWMsR0FBdEIsVUFBdUIsS0FBVTtvQkFDL0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFFckMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN6QixDQUFDO2dCQUVTLG1DQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsSUFBQSxTQUFtQyxFQUEzQix3QkFBUyxFQUFFLG9CQUFPLENBQVU7b0JBQ3BDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxDQUFDO3dCQUNILElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDMUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO3dCQUN2RCxDQUFDO29CQUNILENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDYixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztnQkFDSCxDQUFDO2dCQUVTLHVDQUFTLEdBQW5CO29CQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztnQkFDeEQsQ0FBQztnQkFDSCwwQkFBQztZQUFELENBbENBLEFBa0NDLENBbEMyQyx1QkFBVSxHQWtDckQ7WUFsQ0QscURBa0NDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvZmluZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuXG4vKipcbiAqIEVtaXRzIG9ubHkgdGhlIGZpcnN0IHZhbHVlIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHRoYXQgbWVldHMgc29tZVxuICogY29uZGl0aW9uLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5GaW5kcyB0aGUgZmlyc3QgdmFsdWUgdGhhdCBwYXNzZXMgc29tZSB0ZXN0IGFuZCBlbWl0c1xuICogdGhhdC48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9maW5kLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIGBmaW5kYCBzZWFyY2hlcyBmb3IgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHRoYXQgbWF0Y2hlcyB0aGVcbiAqIHNwZWNpZmllZCBjb25kaXRpb24gZW1ib2RpZWQgYnkgdGhlIGBwcmVkaWNhdGVgLCBhbmQgcmV0dXJucyB0aGUgZmlyc3RcbiAqIG9jY3VycmVuY2UgaW4gdGhlIHNvdXJjZS4gVW5saWtlIHtAbGluayBmaXJzdH0sIHRoZSBgcHJlZGljYXRlYCBpcyByZXF1aXJlZFxuICogaW4gYGZpbmRgLCBhbmQgZG9lcyBub3QgZW1pdCBhbiBlcnJvciBpZiBhIHZhbGlkIHZhbHVlIGlzIG5vdCBmb3VuZC5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5GaW5kIGFuZCBlbWl0IHRoZSBmaXJzdCBjbGljayB0aGF0IGhhcHBlbnMgb24gYSBESVYgZWxlbWVudDwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgcmVzdWx0ID0gY2xpY2tzLmZpbmQoZXYgPT4gZXYudGFyZ2V0LnRhZ05hbWUgPT09ICdESVYnKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgZmlsdGVyfVxuICogQHNlZSB7QGxpbmsgZmlyc3R9XG4gKiBAc2VlIHtAbGluayBmaW5kSW5kZXh9XG4gKiBAc2VlIHtAbGluayB0YWtlfVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24odmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIHNvdXJjZTogT2JzZXJ2YWJsZTxUPik6IGJvb2xlYW59IHByZWRpY2F0ZVxuICogQSBmdW5jdGlvbiBjYWxsZWQgd2l0aCBlYWNoIGl0ZW0gdG8gdGVzdCBmb3IgY29uZGl0aW9uIG1hdGNoaW5nLlxuICogQHBhcmFtIHthbnl9IFt0aGlzQXJnXSBBbiBvcHRpb25hbCBhcmd1bWVudCB0byBkZXRlcm1pbmUgdGhlIHZhbHVlIG9mIGB0aGlzYFxuICogaW4gdGhlIGBwcmVkaWNhdGVgIGZ1bmN0aW9uLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxUPn0gQW4gT2JzZXJ2YWJsZSBvZiB0aGUgZmlyc3QgaXRlbSB0aGF0IG1hdGNoZXMgdGhlXG4gKiBjb25kaXRpb24uXG4gKiBAbWV0aG9kIGZpbmRcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kPFQ+KHByZWRpY2F0ZTogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzQXJnPzogYW55KTogT2JzZXJ2YWJsZTxUPiB7XG4gIGlmICh0eXBlb2YgcHJlZGljYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJlZGljYXRlIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgRmluZFZhbHVlT3BlcmF0b3IocHJlZGljYXRlLCB0aGlzLCBmYWxzZSwgdGhpc0FyZykpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRTaWduYXR1cmU8VD4ge1xuICAocHJlZGljYXRlOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4gYm9vbGVhbiwgdGhpc0FyZz86IGFueSk6IE9ic2VydmFibGU8VD47XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kVmFsdWVPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcmVkaWNhdGU6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiBib29sZWFuLFxuICAgICAgICAgICAgICBwcml2YXRlIHNvdXJjZTogT2JzZXJ2YWJsZTxUPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB5aWVsZEluZGV4OiBib29sZWFuLFxuICAgICAgICAgICAgICBwcml2YXRlIHRoaXNBcmc/OiBhbnkpIHtcbiAgfVxuXG4gIGNhbGwob2JzZXJ2ZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IEZpbmRWYWx1ZVN1YnNjcmliZXIob2JzZXJ2ZXIsIHRoaXMucHJlZGljYXRlLCB0aGlzLnNvdXJjZSwgdGhpcy55aWVsZEluZGV4LCB0aGlzLnRoaXNBcmcpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuZXhwb3J0IGNsYXNzIEZpbmRWYWx1ZVN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgcHJpdmF0ZSBpbmRleDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxUPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwcmVkaWNhdGU6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiBib29sZWFuLFxuICAgICAgICAgICAgICBwcml2YXRlIHNvdXJjZTogT2JzZXJ2YWJsZTxUPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB5aWVsZEluZGV4OiBib29sZWFuLFxuICAgICAgICAgICAgICBwcml2YXRlIHRoaXNBcmc/OiBhbnkpIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUNvbXBsZXRlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG5cbiAgICBkZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgY29uc3QgeyBwcmVkaWNhdGUsIHRoaXNBcmcgfSA9IHRoaXM7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluZGV4Kys7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHByZWRpY2F0ZS5jYWxsKHRoaXNBcmcgfHwgdGhpcywgdmFsdWUsIGluZGV4LCB0aGlzLnNvdXJjZSk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMubm90aWZ5Q29tcGxldGUodGhpcy55aWVsZEluZGV4ID8gaW5kZXggOiB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmeUNvbXBsZXRlKHRoaXMueWllbGRJbmRleCA/IC0xIDogdW5kZWZpbmVkKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
