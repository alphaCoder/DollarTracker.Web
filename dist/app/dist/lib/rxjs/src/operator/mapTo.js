System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var MapToOperator, MapToSubscriber;
    /**
     * Emits the given constant value on the output Observable every time the source
     * Observable emits a value.
     *
     * <span class="informal">Like {@link map}, but it maps every source value to
     * the same output value every time.</span>
     *
     * <img src="./img/mapTo.png" width="100%">
     *
     * Takes a constant `value` as argument, and emits that whenever the source
     * Observable emits a value. In other words, ignores the actual source value,
     * and simply uses the emission moment to know when to emit the given `value`.
     *
     * @example <caption>Map every every click to the string 'Hi'</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var greetings = clicks.mapTo('Hi');
     * greetings.subscribe(x => console.log(x));
     *
     * @see {@link map}
     *
     * @param {any} value The value to map each source value to.
     * @return {Observable} An Observable that emits the given `value` every time
     * the source Observable emits something.
     * @method mapTo
     * @owner Observable
     */
    function mapTo(value) {
        return this.lift(new MapToOperator(value));
    }
    exports_1("mapTo", mapTo);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            MapToOperator = (function () {
                function MapToOperator(value) {
                    this.value = value;
                }
                MapToOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new MapToSubscriber(subscriber, this.value));
                };
                return MapToOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            MapToSubscriber = (function (_super) {
                __extends(MapToSubscriber, _super);
                function MapToSubscriber(destination, value) {
                    _super.call(this, destination);
                    this.value = value;
                }
                MapToSubscriber.prototype._next = function (x) {
                    this.destination.next(this.value);
                };
                return MapToSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL21hcFRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXlCRztJQUNILGVBQTRCLEtBQVE7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRkQseUJBRUMsQ0FBQTs7Ozs7OztZQU1EO2dCQUlFLHVCQUFZLEtBQVE7b0JBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixDQUFDO2dCQUVELDRCQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksZUFBZSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDeEUsQ0FBQztnQkFDSCxvQkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFvQyxtQ0FBYTtnQkFJL0MseUJBQVksV0FBMEIsRUFBRSxLQUFRO29CQUM5QyxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRVMsK0JBQUssR0FBZixVQUFnQixDQUFJO29CQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0gsc0JBQUM7WUFBRCxDQVpBLEFBWUMsQ0FabUMsdUJBQVUsR0FZN0MiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvbWFwVG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcblxuLyoqXG4gKiBFbWl0cyB0aGUgZ2l2ZW4gY29uc3RhbnQgdmFsdWUgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlIGV2ZXJ5IHRpbWUgdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZSBlbWl0cyBhIHZhbHVlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5MaWtlIHtAbGluayBtYXB9LCBidXQgaXQgbWFwcyBldmVyeSBzb3VyY2UgdmFsdWUgdG9cbiAqIHRoZSBzYW1lIG91dHB1dCB2YWx1ZSBldmVyeSB0aW1lLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL21hcFRvLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIFRha2VzIGEgY29uc3RhbnQgYHZhbHVlYCBhcyBhcmd1bWVudCwgYW5kIGVtaXRzIHRoYXQgd2hlbmV2ZXIgdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZSBlbWl0cyBhIHZhbHVlLiBJbiBvdGhlciB3b3JkcywgaWdub3JlcyB0aGUgYWN0dWFsIHNvdXJjZSB2YWx1ZSxcbiAqIGFuZCBzaW1wbHkgdXNlcyB0aGUgZW1pc3Npb24gbW9tZW50IHRvIGtub3cgd2hlbiB0byBlbWl0IHRoZSBnaXZlbiBgdmFsdWVgLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk1hcCBldmVyeSBldmVyeSBjbGljayB0byB0aGUgc3RyaW5nICdIaSc8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIGdyZWV0aW5ncyA9IGNsaWNrcy5tYXBUbygnSGknKTtcbiAqIGdyZWV0aW5ncy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgbWFwfVxuICpcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgdmFsdWUgdG8gbWFwIGVhY2ggc291cmNlIHZhbHVlIHRvLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBnaXZlbiBgdmFsdWVgIGV2ZXJ5IHRpbWVcbiAqIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBlbWl0cyBzb21ldGhpbmcuXG4gKiBAbWV0aG9kIG1hcFRvXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwVG88VCwgUj4odmFsdWU6IFIpOiBPYnNlcnZhYmxlPFI+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgTWFwVG9PcGVyYXRvcih2YWx1ZSkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcFRvU2lnbmF0dXJlPFQ+IHtcbiAgPFI+KHZhbHVlOiBSKTogT2JzZXJ2YWJsZTxSPjtcbn1cblxuY2xhc3MgTWFwVG9PcGVyYXRvcjxULCBSPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFI+IHtcblxuICB2YWx1ZTogUjtcblxuICBjb25zdHJ1Y3Rvcih2YWx1ZTogUikge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxSPiwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgTWFwVG9TdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMudmFsdWUpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgTWFwVG9TdWJzY3JpYmVyPFQsIFI+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG5cbiAgdmFsdWU6IFI7XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8Uj4sIHZhbHVlOiBSKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh4OiBUKSB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHRoaXMudmFsdWUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
