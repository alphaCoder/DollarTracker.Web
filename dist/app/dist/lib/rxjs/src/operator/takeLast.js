System.register(['../Subscriber', '../util/ArgumentOutOfRangeError', '../observable/EmptyObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, ArgumentOutOfRangeError_1, EmptyObservable_1;
    var TakeLastOperator, TakeLastSubscriber;
    /**
     * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
     * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
     * @param total
     * @return {any}
     * @method takeLast
     * @owner Observable
     */
    function takeLast(total) {
        if (total === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        else {
            return this.lift(new TakeLastOperator(total));
        }
    }
    exports_1("takeLast", takeLast);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (ArgumentOutOfRangeError_1_1) {
                ArgumentOutOfRangeError_1 = ArgumentOutOfRangeError_1_1;
            },
            function (EmptyObservable_1_1) {
                EmptyObservable_1 = EmptyObservable_1_1;
            }],
        execute: function() {
            TakeLastOperator = (function () {
                function TakeLastOperator(total) {
                    this.total = total;
                    if (this.total < 0) {
                        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
                    }
                }
                TakeLastOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new TakeLastSubscriber(subscriber, this.total));
                };
                return TakeLastOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            TakeLastSubscriber = (function (_super) {
                __extends(TakeLastSubscriber, _super);
                function TakeLastSubscriber(destination, total) {
                    _super.call(this, destination);
                    this.total = total;
                    this.ring = new Array();
                    this.count = 0;
                }
                TakeLastSubscriber.prototype._next = function (value) {
                    var ring = this.ring;
                    var total = this.total;
                    var count = this.count++;
                    if (ring.length < total) {
                        ring.push(value);
                    }
                    else {
                        var index = count % total;
                        ring[index] = value;
                    }
                };
                TakeLastSubscriber.prototype._complete = function () {
                    var destination = this.destination;
                    var count = this.count;
                    if (count > 0) {
                        var total = this.count >= this.total ? this.total : this.count;
                        var ring = this.ring;
                        for (var i = 0; i < total; i++) {
                            var idx = (count++) % total;
                            destination.next(ring[idx]);
                        }
                    }
                    destination.complete();
                };
                return TakeLastSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3Rha2VMYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFNQTs7Ozs7OztPQU9HO0lBQ0gsa0JBQTRCLEtBQWE7UUFDdkMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLElBQUksaUNBQWUsRUFBSyxDQUFDO1FBQ2xDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQztJQU5ELCtCQU1DLENBQUE7Ozs7Ozs7Ozs7Ozs7WUFNRDtnQkFDRSwwQkFBb0IsS0FBYTtvQkFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ25CLE1BQU0sSUFBSSxpREFBdUIsQ0FBQztvQkFDcEMsQ0FBQztnQkFDSCxDQUFDO2dCQUVELCtCQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksa0JBQWtCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxDQUFDO2dCQUNILHVCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQW9DLHNDQUFhO2dCQUkvQyw0QkFBWSxXQUEwQixFQUFVLEtBQWE7b0JBQzNELGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQUQyQixVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUhyRCxTQUFJLEdBQWEsSUFBSSxLQUFLLEVBQUUsQ0FBQztvQkFDN0IsVUFBSyxHQUFXLENBQUMsQ0FBQztnQkFJMUIsQ0FBQztnQkFFUyxrQ0FBSyxHQUFmLFVBQWdCLEtBQVE7b0JBQ3RCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ3ZCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQ3pCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFFM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQU0sS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7d0JBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFUyxzQ0FBUyxHQUFuQjtvQkFDRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNyQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUV2QixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO3dCQUNqRSxJQUFNLElBQUksR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUV4QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUMvQixJQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDOzRCQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixDQUFDO29CQUNILENBQUM7b0JBRUQsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN6QixDQUFDO2dCQUNILHlCQUFDO1lBQUQsQ0FyQ0EsQUFxQ0MsQ0FyQ21DLHVCQUFVLEdBcUM3QyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci90YWtlTGFzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge0FyZ3VtZW50T3V0T2ZSYW5nZUVycm9yfSBmcm9tICcuLi91dGlsL0FyZ3VtZW50T3V0T2ZSYW5nZUVycm9yJztcbmltcG9ydCB7RW1wdHlPYnNlcnZhYmxlfSBmcm9tICcuLi9vYnNlcnZhYmxlL0VtcHR5T2JzZXJ2YWJsZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuXG4vKipcbiAqIEB0aHJvd3Mge0FyZ3VtZW50T3V0T2ZSYW5nZUVycm9yfSBXaGVuIHVzaW5nIGB0YWtlTGFzdChpKWAsIGl0IGRlbGl2ZXJzIGFuXG4gKiBBcmd1bWVudE91dE9yUmFuZ2VFcnJvciB0byB0aGUgT2JzZXJ2ZXIncyBgZXJyb3JgIGNhbGxiYWNrIGlmIGBpIDwgMGAuXG4gKiBAcGFyYW0gdG90YWxcbiAqIEByZXR1cm4ge2FueX1cbiAqIEBtZXRob2QgdGFrZUxhc3RcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWtlTGFzdDxUPih0b3RhbDogbnVtYmVyKTogT2JzZXJ2YWJsZTxUPiB7XG4gIGlmICh0b3RhbCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgRW1wdHlPYnNlcnZhYmxlPFQ+KCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMubGlmdChuZXcgVGFrZUxhc3RPcGVyYXRvcih0b3RhbCkpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFrZUxhc3RTaWduYXR1cmU8VD4ge1xuICAodG90YWw6IG51bWJlcik6IE9ic2VydmFibGU8VD47XG59XG5cbmNsYXNzIFRha2VMYXN0T3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG90YWw6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnRvdGFsIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPiwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgVGFrZUxhc3RTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMudG90YWwpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgVGFrZUxhc3RTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIHByaXZhdGUgcmluZzogQXJyYXk8VD4gPSBuZXcgQXJyYXkoKTtcbiAgcHJpdmF0ZSBjb3VudDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxUPiwgcHJpdmF0ZSB0b3RhbDogbnVtYmVyKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgY29uc3QgcmluZyA9IHRoaXMucmluZztcbiAgICBjb25zdCB0b3RhbCA9IHRoaXMudG90YWw7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmNvdW50Kys7XG5cbiAgICBpZiAocmluZy5sZW5ndGggPCB0b3RhbCkge1xuICAgICAgcmluZy5wdXNoKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCAlIHRvdGFsO1xuICAgICAgcmluZ1tpbmRleF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICBsZXQgY291bnQgPSB0aGlzLmNvdW50O1xuXG4gICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmNvdW50ID49IHRoaXMudG90YWwgPyB0aGlzLnRvdGFsIDogdGhpcy5jb3VudDtcbiAgICAgIGNvbnN0IHJpbmcgID0gdGhpcy5yaW5nO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICAgICAgY29uc3QgaWR4ID0gKGNvdW50KyspICUgdG90YWw7XG4gICAgICAgIGRlc3RpbmF0aW9uLm5leHQocmluZ1tpZHhdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
