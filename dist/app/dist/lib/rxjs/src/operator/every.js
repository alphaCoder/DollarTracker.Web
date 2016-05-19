System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var EveryOperator, EverySubscriber;
    /**
     * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
     * @param {function} predicate a function for determining if an item meets a specified condition.
     * @param {any} [thisArg] optional object to use for `this` in the callback
     * @return {Observable} an Observable of booleans that determines if all items of the source Observable meet the condition specified.
     * @method every
     * @owner Observable
     */
    function every(predicate, thisArg) {
        var source = this;
        return source.lift(new EveryOperator(predicate, thisArg, source));
    }
    exports_1("every", every);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            EveryOperator = (function () {
                function EveryOperator(predicate, thisArg, source) {
                    this.predicate = predicate;
                    this.thisArg = thisArg;
                    this.source = source;
                }
                EveryOperator.prototype.call = function (observer, source) {
                    return source._subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
                };
                return EveryOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            EverySubscriber = (function (_super) {
                __extends(EverySubscriber, _super);
                function EverySubscriber(destination, predicate, thisArg, source) {
                    _super.call(this, destination);
                    this.predicate = predicate;
                    this.thisArg = thisArg;
                    this.source = source;
                    this.index = 0;
                    this.thisArg = thisArg || this;
                }
                EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
                    this.destination.next(everyValueMatch);
                    this.destination.complete();
                };
                EverySubscriber.prototype._next = function (value) {
                    var result = false;
                    try {
                        result = this.predicate.call(this.thisArg, value, this.index++, this.source);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    if (!result) {
                        this.notifyComplete(false);
                    }
                };
                EverySubscriber.prototype._complete = function () {
                    this.notifyComplete(true);
                };
                return EverySubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2V2ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFLQTs7Ozs7OztPQU9HO0lBQ0gsZUFBeUIsU0FBc0UsRUFDdEUsT0FBYTtRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFKRCx5QkFJQyxDQUFBOzs7Ozs7O1lBTUQ7Z0JBQ0UsdUJBQW9CLFNBQXNFLEVBQ3RFLE9BQWEsRUFDYixNQUFzQjtvQkFGdEIsY0FBUyxHQUFULFNBQVMsQ0FBNkQ7b0JBQ3RFLFlBQU8sR0FBUCxPQUFPLENBQU07b0JBQ2IsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7Z0JBQzFDLENBQUM7Z0JBRUQsNEJBQUksR0FBSixVQUFLLFFBQTZCLEVBQUUsTUFBVztvQkFDN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxlQUFlLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDckcsQ0FBQztnQkFDSCxvQkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFpQyxtQ0FBYTtnQkFHNUMseUJBQVksV0FBOEIsRUFDdEIsU0FBc0UsRUFDdEUsT0FBWSxFQUNaLE1BQXNCO29CQUN4QyxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFIRCxjQUFTLEdBQVQsU0FBUyxDQUE2RDtvQkFDdEUsWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFDWixXQUFNLEdBQU4sTUFBTSxDQUFnQjtvQkFMbEMsVUFBSyxHQUFXLENBQUMsQ0FBQztvQkFPeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksSUFBSSxDQUFDO2dCQUNqQyxDQUFDO2dCQUVPLHdDQUFjLEdBQXRCLFVBQXVCLGVBQXdCO29CQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQztnQkFFUywrQkFBSyxHQUFmLFVBQWdCLEtBQVE7b0JBQ3RCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDO3dCQUNILE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMvRSxDQUFFO29CQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzVCLE1BQU0sQ0FBQztvQkFDVCxDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDWixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM3QixDQUFDO2dCQUNILENBQUM7Z0JBRVMsbUNBQVMsR0FBbkI7b0JBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFDSCxzQkFBQztZQUFELENBakNBLEFBaUNDLENBakNnQyx1QkFBVSxHQWlDMUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvZXZlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge09ic2VydmVyfSBmcm9tICcuLi9PYnNlcnZlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGV0aGVyIG9yIG5vdCBldmVyeSBpdGVtIG9mIHRoZSBzb3VyY2Ugc2F0aXNmaWVzIHRoZSBjb25kaXRpb24gc3BlY2lmaWVkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gcHJlZGljYXRlIGEgZnVuY3Rpb24gZm9yIGRldGVybWluaW5nIGlmIGFuIGl0ZW0gbWVldHMgYSBzcGVjaWZpZWQgY29uZGl0aW9uLlxuICogQHBhcmFtIHthbnl9IFt0aGlzQXJnXSBvcHRpb25hbCBvYmplY3QgdG8gdXNlIGZvciBgdGhpc2AgaW4gdGhlIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhbiBPYnNlcnZhYmxlIG9mIGJvb2xlYW5zIHRoYXQgZGV0ZXJtaW5lcyBpZiBhbGwgaXRlbXMgb2YgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIG1lZXQgdGhlIGNvbmRpdGlvbiBzcGVjaWZpZWQuXG4gKiBAbWV0aG9kIGV2ZXJ5XG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZlcnk8VD4ocHJlZGljYXRlOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4gYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzQXJnPzogYW55KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gIGNvbnN0IHNvdXJjZSA9IHRoaXM7XG4gIHJldHVybiBzb3VyY2UubGlmdChuZXcgRXZlcnlPcGVyYXRvcihwcmVkaWNhdGUsIHRoaXNBcmcsIHNvdXJjZSkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZXJ5U2lnbmF0dXJlPFQ+IHtcbiAgKHByZWRpY2F0ZTogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IGJvb2xlYW4sIHRoaXNBcmc/OiBhbnkpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xufVxuXG5jbGFzcyBFdmVyeU9wZXJhdG9yPFQ+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgYm9vbGVhbj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByZWRpY2F0ZTogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IGJvb2xlYW4sXG4gICAgICAgICAgICAgIHByaXZhdGUgdGhpc0FyZz86IGFueSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzb3VyY2U/OiBPYnNlcnZhYmxlPFQ+KSB7XG4gIH1cblxuICBjYWxsKG9ic2VydmVyOiBTdWJzY3JpYmVyPGJvb2xlYW4+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBFdmVyeVN1YnNjcmliZXIob2JzZXJ2ZXIsIHRoaXMucHJlZGljYXRlLCB0aGlzLnRoaXNBcmcsIHRoaXMuc291cmNlKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIEV2ZXJ5U3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBPYnNlcnZlcjxib29sZWFuPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwcmVkaWNhdGU6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiBib29sZWFuLFxuICAgICAgICAgICAgICBwcml2YXRlIHRoaXNBcmc6IGFueSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzb3VyY2U/OiBPYnNlcnZhYmxlPFQ+KSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMudGhpc0FyZyA9IHRoaXNBcmcgfHwgdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5Q29tcGxldGUoZXZlcnlWYWx1ZU1hdGNoOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGV2ZXJ5VmFsdWVNYXRjaCk7XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnByZWRpY2F0ZS5jYWxsKHRoaXMudGhpc0FyZywgdmFsdWUsIHRoaXMuaW5kZXgrKywgdGhpcy5zb3VyY2UpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICB0aGlzLm5vdGlmeUNvbXBsZXRlKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMubm90aWZ5Q29tcGxldGUodHJ1ZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
