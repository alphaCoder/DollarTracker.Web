System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var FilterOperator, FilterSubscriber;
    /**
     * Filter items emitted by the source Observable by only emitting those that
     * satisfy a specified predicate.
     *
     * <span class="informal">Like
     * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
     * it only emits a value from the source if it passes a criterion function.</span>
     *
     * <img src="./img/filter.png" width="100%">
     *
     * Similar to the well-known `Array.prototype.filter` method, this operator
     * takes values from the source Observable, passes them through a `predicate`
     * function and only emits those values that yielded `true`.
     *
     * @example <caption>Emit only click events whose target was a DIV element</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
     * clicksOnDivs.subscribe(x => console.log(x));
     *
     * @see {@link distinct}
     * @see {@link distinctKey}
     * @see {@link distinctUntilChanged}
     * @see {@link distinctUntilKeyChanged}
     * @see {@link ignoreElements}
     * @see {@link partition}
     * @see {@link skip}
     *
     * @param {function(value: T, index: number): boolean} predicate A function that
     * evaluates each value emitted by the source Observable. If it returns `true`,
     * the value is emitted, if `false` the value is not passed to the output
     * Observable. The `index` parameter is the number `i` for the i-th source
     * emission that has happened since the subscription, starting from the number
     * `0`.
     * @param {any} [thisArg] An optional argument to determine the value of `this`
     * in the `predicate` function.
     * @return {Observable} An Observable of values from the source that were
     * allowed by the `predicate` function.
     * @method filter
     * @owner Observable
     */
    function filter(predicate, thisArg) {
        return this.lift(new FilterOperator(predicate, thisArg));
    }
    exports_1("filter", filter);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            FilterOperator = (function () {
                function FilterOperator(predicate, thisArg) {
                    this.predicate = predicate;
                    this.thisArg = thisArg;
                }
                FilterOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
                };
                return FilterOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            FilterSubscriber = (function (_super) {
                __extends(FilterSubscriber, _super);
                function FilterSubscriber(destination, predicate, thisArg) {
                    _super.call(this, destination);
                    this.predicate = predicate;
                    this.thisArg = thisArg;
                    this.count = 0;
                    this.predicate = predicate;
                }
                // the try catch block below is left specifically for
                // optimization and perf reasons. a tryCatcher is not necessary here.
                FilterSubscriber.prototype._next = function (value) {
                    var result;
                    try {
                        result = this.predicate.call(this.thisArg, value, this.count++);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    if (result) {
                        this.destination.next(value);
                    }
                };
                return FilterSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2ZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXVDRztJQUNILGdCQUEwQixTQUErQyxFQUMvQyxPQUFhO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFIRCwyQkFHQyxDQUFBOzs7Ozs7O1lBTUQ7Z0JBQ0Usd0JBQW9CLFNBQStDLEVBQy9DLE9BQWE7b0JBRGIsY0FBUyxHQUFULFNBQVMsQ0FBc0M7b0JBQy9DLFlBQU8sR0FBUCxPQUFPLENBQU07Z0JBQ2pDLENBQUM7Z0JBRUQsNkJBQUksR0FBSixVQUFLLFVBQXlCLEVBQUUsTUFBVztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDM0YsQ0FBQztnQkFDSCxxQkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFrQyxvQ0FBYTtnQkFJN0MsMEJBQVksV0FBMEIsRUFDbEIsU0FBK0MsRUFDL0MsT0FBWTtvQkFDOUIsa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBRkQsY0FBUyxHQUFULFNBQVMsQ0FBc0M7b0JBQy9DLFlBQU8sR0FBUCxPQUFPLENBQUs7b0JBSmhDLFVBQUssR0FBVyxDQUFDLENBQUM7b0JBTWhCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO2dCQUM3QixDQUFDO2dCQUVELHFEQUFxRDtnQkFDckQscUVBQXFFO2dCQUMzRCxnQ0FBSyxHQUFmLFVBQWdCLEtBQVE7b0JBQ3RCLElBQUksTUFBVyxDQUFDO29CQUNoQixJQUFJLENBQUM7d0JBQ0gsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNsRSxDQUFFO29CQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzVCLE1BQU0sQ0FBQztvQkFDVCxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQy9CLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCx1QkFBQztZQUFELENBekJBLEFBeUJDLENBekJpQyx1QkFBVSxHQXlCM0MiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvZmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogRmlsdGVyIGl0ZW1zIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGJ5IG9ubHkgZW1pdHRpbmcgdGhvc2UgdGhhdFxuICogc2F0aXNmeSBhIHNwZWNpZmllZCBwcmVkaWNhdGUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkxpa2VcbiAqIFtBcnJheS5wcm90b3R5cGUuZmlsdGVyKCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZpbHRlciksXG4gKiBpdCBvbmx5IGVtaXRzIGEgdmFsdWUgZnJvbSB0aGUgc291cmNlIGlmIGl0IHBhc3NlcyBhIGNyaXRlcmlvbiBmdW5jdGlvbi48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9maWx0ZXIucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogU2ltaWxhciB0byB0aGUgd2VsbC1rbm93biBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kLCB0aGlzIG9wZXJhdG9yXG4gKiB0YWtlcyB2YWx1ZXMgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUsIHBhc3NlcyB0aGVtIHRocm91Z2ggYSBgcHJlZGljYXRlYFxuICogZnVuY3Rpb24gYW5kIG9ubHkgZW1pdHMgdGhvc2UgdmFsdWVzIHRoYXQgeWllbGRlZCBgdHJ1ZWAuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+RW1pdCBvbmx5IGNsaWNrIGV2ZW50cyB3aG9zZSB0YXJnZXQgd2FzIGEgRElWIGVsZW1lbnQ8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIGNsaWNrc09uRGl2cyA9IGNsaWNrcy5maWx0ZXIoZXYgPT4gZXYudGFyZ2V0LnRhZ05hbWUgPT09ICdESVYnKTtcbiAqIGNsaWNrc09uRGl2cy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgZGlzdGluY3R9XG4gKiBAc2VlIHtAbGluayBkaXN0aW5jdEtleX1cbiAqIEBzZWUge0BsaW5rIGRpc3RpbmN0VW50aWxDaGFuZ2VkfVxuICogQHNlZSB7QGxpbmsgZGlzdGluY3RVbnRpbEtleUNoYW5nZWR9XG4gKiBAc2VlIHtAbGluayBpZ25vcmVFbGVtZW50c31cbiAqIEBzZWUge0BsaW5rIHBhcnRpdGlvbn1cbiAqIEBzZWUge0BsaW5rIHNraXB9XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbih2YWx1ZTogVCwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW59IHByZWRpY2F0ZSBBIGZ1bmN0aW9uIHRoYXRcbiAqIGV2YWx1YXRlcyBlYWNoIHZhbHVlIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLiBJZiBpdCByZXR1cm5zIGB0cnVlYCxcbiAqIHRoZSB2YWx1ZSBpcyBlbWl0dGVkLCBpZiBgZmFsc2VgIHRoZSB2YWx1ZSBpcyBub3QgcGFzc2VkIHRvIHRoZSBvdXRwdXRcbiAqIE9ic2VydmFibGUuIFRoZSBgaW5kZXhgIHBhcmFtZXRlciBpcyB0aGUgbnVtYmVyIGBpYCBmb3IgdGhlIGktdGggc291cmNlXG4gKiBlbWlzc2lvbiB0aGF0IGhhcyBoYXBwZW5lZCBzaW5jZSB0aGUgc3Vic2NyaXB0aW9uLCBzdGFydGluZyBmcm9tIHRoZSBudW1iZXJcbiAqIGAwYC5cbiAqIEBwYXJhbSB7YW55fSBbdGhpc0FyZ10gQW4gb3B0aW9uYWwgYXJndW1lbnQgdG8gZGV0ZXJtaW5lIHRoZSB2YWx1ZSBvZiBgdGhpc2BcbiAqIGluIHRoZSBgcHJlZGljYXRlYCBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgb2YgdmFsdWVzIGZyb20gdGhlIHNvdXJjZSB0aGF0IHdlcmVcbiAqIGFsbG93ZWQgYnkgdGhlIGBwcmVkaWNhdGVgIGZ1bmN0aW9uLlxuICogQG1ldGhvZCBmaWx0ZXJcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXI8VD4ocHJlZGljYXRlOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNBcmc/OiBhbnkpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgRmlsdGVyT3BlcmF0b3IocHJlZGljYXRlLCB0aGlzQXJnKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyU2lnbmF0dXJlPFQ+IHtcbiAgKHByZWRpY2F0ZTogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBib29sZWFuLCB0aGlzQXJnPzogYW55KTogT2JzZXJ2YWJsZTxUPjtcbn1cblxuY2xhc3MgRmlsdGVyT3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJlZGljYXRlOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IGJvb2xlYW4sXG4gICAgICAgICAgICAgIHByaXZhdGUgdGhpc0FyZz86IGFueSkge1xuICB9XG5cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBGaWx0ZXJTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJlZGljYXRlLCB0aGlzLnRoaXNBcmcpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgRmlsdGVyU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuXG4gIGNvdW50OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIHByZWRpY2F0ZTogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBib29sZWFuLFxuICAgICAgICAgICAgICBwcml2YXRlIHRoaXNBcmc6IGFueSkge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLnByZWRpY2F0ZSA9IHByZWRpY2F0ZTtcbiAgfVxuXG4gIC8vIHRoZSB0cnkgY2F0Y2ggYmxvY2sgYmVsb3cgaXMgbGVmdCBzcGVjaWZpY2FsbHkgZm9yXG4gIC8vIG9wdGltaXphdGlvbiBhbmQgcGVyZiByZWFzb25zLiBhIHRyeUNhdGNoZXIgaXMgbm90IG5lY2Vzc2FyeSBoZXJlLlxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpIHtcbiAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IHRoaXMucHJlZGljYXRlLmNhbGwodGhpcy50aGlzQXJnLCB2YWx1ZSwgdGhpcy5jb3VudCsrKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
