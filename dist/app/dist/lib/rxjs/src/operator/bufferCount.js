System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var BufferCountOperator, BufferCountSubscriber;
    /**
     * Buffers the source Observable values until the size hits the maximum
     * `bufferSize` given.
     *
     * <span class="informal">Collects values from the past as an array, and emits
     * that array only when its size reaches `bufferSize`.</span>
     *
     * <img src="./img/bufferCount.png" width="100%">
     *
     * Buffers a number of values from the source Observable by `bufferSize` then
     * emits the buffer and clears it, and starts a new buffer each
     * `startBufferEvery` values. If `startBufferEvery` is not provided or is
     * `null`, then new buffers are started immediately at the start of the source
     * and when each buffer closes and is emitted.
     *
     * @example <caption>Emit the last two click events as an array</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var buffered = clicks.bufferCount(2);
     * buffered.subscribe(x => console.log(x));
     *
     * @example <caption>On every click, emit the last two click events as an array</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var buffered = clicks.bufferCount(2, 1);
     * buffered.subscribe(x => console.log(x));
     *
     * @see {@link buffer}
     * @see {@link bufferTime}
     * @see {@link bufferToggle}
     * @see {@link bufferWhen}
     * @see {@link windowCount}
     *
     * @param {number} bufferSize The maximum size of the buffer emitted.
     * @param {number} [startBufferEvery] Interval at which to start a new buffer.
     * For example if `startBufferEvery` is `2`, then a new buffer will be started
     * on every other value from the source. A new buffer is started at the
     * beginning of the source by default.
     * @return {Observable<T[]>} An Observable of arrays of buffered values.
     * @method bufferCount
     * @owner Observable
     */
    function bufferCount(bufferSize, startBufferEvery) {
        if (startBufferEvery === void 0) { startBufferEvery = null; }
        return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
    }
    exports_1("bufferCount", bufferCount);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            BufferCountOperator = (function () {
                function BufferCountOperator(bufferSize, startBufferEvery) {
                    this.bufferSize = bufferSize;
                    this.startBufferEvery = startBufferEvery;
                }
                BufferCountOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery));
                };
                return BufferCountOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            BufferCountSubscriber = (function (_super) {
                __extends(BufferCountSubscriber, _super);
                function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
                    _super.call(this, destination);
                    this.bufferSize = bufferSize;
                    this.startBufferEvery = startBufferEvery;
                    this.buffers = [[]];
                    this.count = 0;
                }
                BufferCountSubscriber.prototype._next = function (value) {
                    var count = (this.count += 1);
                    var destination = this.destination;
                    var bufferSize = this.bufferSize;
                    var startBufferEvery = (this.startBufferEvery == null) ? bufferSize : this.startBufferEvery;
                    var buffers = this.buffers;
                    var len = buffers.length;
                    var remove = -1;
                    if (count % startBufferEvery === 0) {
                        buffers.push([]);
                    }
                    for (var i = 0; i < len; i++) {
                        var buffer = buffers[i];
                        buffer.push(value);
                        if (buffer.length === bufferSize) {
                            remove = i;
                            destination.next(buffer);
                        }
                    }
                    if (remove !== -1) {
                        buffers.splice(remove, 1);
                    }
                };
                BufferCountSubscriber.prototype._complete = function () {
                    var destination = this.destination;
                    var buffers = this.buffers;
                    while (buffers.length > 0) {
                        var buffer = buffers.shift();
                        if (buffer.length > 0) {
                            destination.next(buffer);
                        }
                    }
                    _super.prototype._complete.call(this);
                };
                return BufferCountSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2J1ZmZlckNvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BdUNHO0lBQ0gscUJBQStCLFVBQWtCLEVBQUUsZ0JBQStCO1FBQS9CLGdDQUErQixHQUEvQix1QkFBK0I7UUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBbUIsQ0FBSSxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFGRCxxQ0FFQyxDQUFBOzs7Ozs7O1lBTUQ7Z0JBQ0UsNkJBQW9CLFVBQWtCLEVBQVUsZ0JBQXdCO29CQUFwRCxlQUFVLEdBQVYsVUFBVSxDQUFRO29CQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtnQkFDeEUsQ0FBQztnQkFFRCxrQ0FBSSxHQUFKLFVBQUssVUFBMkIsRUFBRSxNQUFXO29CQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzFHLENBQUM7Z0JBQ0gsMEJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQUVEOzs7O2VBSUc7WUFDSDtnQkFBdUMseUNBQWE7Z0JBSWxELCtCQUFZLFdBQTRCLEVBQVUsVUFBa0IsRUFBVSxnQkFBd0I7b0JBQ3BHLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQUQ2QixlQUFVLEdBQVYsVUFBVSxDQUFRO29CQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtvQkFIOUYsWUFBTyxHQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzNCLFVBQUssR0FBVyxDQUFDLENBQUM7Z0JBSTFCLENBQUM7Z0JBRVMscUNBQUssR0FBZixVQUFnQixLQUFRO29CQUN0QixJQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ3JDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ25DLElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDOUYsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDN0IsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDM0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBRWhCLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNuQixDQUFDO29CQUVELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzdCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbkIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUNqQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzRCQUNYLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzNCLENBQUM7b0JBQ0gsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztnQkFDSCxDQUFDO2dCQUVTLHlDQUFTLEdBQW5CO29CQUNFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ3JDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQzdCLE9BQU8sT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzt3QkFDMUIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUM3QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3RCLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzNCLENBQUM7b0JBQ0gsQ0FBQztvQkFDRCxnQkFBSyxDQUFDLFNBQVMsV0FBRSxDQUFDO2dCQUNwQixDQUFDO2dCQUNILDRCQUFDO1lBQUQsQ0E5Q0EsQUE4Q0MsQ0E5Q3NDLHVCQUFVLEdBOENoRCIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9idWZmZXJDb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuXG4vKipcbiAqIEJ1ZmZlcnMgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHZhbHVlcyB1bnRpbCB0aGUgc2l6ZSBoaXRzIHRoZSBtYXhpbXVtXG4gKiBgYnVmZmVyU2l6ZWAgZ2l2ZW4uXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkNvbGxlY3RzIHZhbHVlcyBmcm9tIHRoZSBwYXN0IGFzIGFuIGFycmF5LCBhbmQgZW1pdHNcbiAqIHRoYXQgYXJyYXkgb25seSB3aGVuIGl0cyBzaXplIHJlYWNoZXMgYGJ1ZmZlclNpemVgLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL2J1ZmZlckNvdW50LnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIEJ1ZmZlcnMgYSBudW1iZXIgb2YgdmFsdWVzIGZyb20gdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGJ5IGBidWZmZXJTaXplYCB0aGVuXG4gKiBlbWl0cyB0aGUgYnVmZmVyIGFuZCBjbGVhcnMgaXQsIGFuZCBzdGFydHMgYSBuZXcgYnVmZmVyIGVhY2hcbiAqIGBzdGFydEJ1ZmZlckV2ZXJ5YCB2YWx1ZXMuIElmIGBzdGFydEJ1ZmZlckV2ZXJ5YCBpcyBub3QgcHJvdmlkZWQgb3IgaXNcbiAqIGBudWxsYCwgdGhlbiBuZXcgYnVmZmVycyBhcmUgc3RhcnRlZCBpbW1lZGlhdGVseSBhdCB0aGUgc3RhcnQgb2YgdGhlIHNvdXJjZVxuICogYW5kIHdoZW4gZWFjaCBidWZmZXIgY2xvc2VzIGFuZCBpcyBlbWl0dGVkLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkVtaXQgdGhlIGxhc3QgdHdvIGNsaWNrIGV2ZW50cyBhcyBhbiBhcnJheTwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgYnVmZmVyZWQgPSBjbGlja3MuYnVmZmVyQ291bnQoMik7XG4gKiBidWZmZXJlZC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+T24gZXZlcnkgY2xpY2ssIGVtaXQgdGhlIGxhc3QgdHdvIGNsaWNrIGV2ZW50cyBhcyBhbiBhcnJheTwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgYnVmZmVyZWQgPSBjbGlja3MuYnVmZmVyQ291bnQoMiwgMSk7XG4gKiBidWZmZXJlZC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgYnVmZmVyfVxuICogQHNlZSB7QGxpbmsgYnVmZmVyVGltZX1cbiAqIEBzZWUge0BsaW5rIGJ1ZmZlclRvZ2dsZX1cbiAqIEBzZWUge0BsaW5rIGJ1ZmZlcldoZW59XG4gKiBAc2VlIHtAbGluayB3aW5kb3dDb3VudH1cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gYnVmZmVyU2l6ZSBUaGUgbWF4aW11bSBzaXplIG9mIHRoZSBidWZmZXIgZW1pdHRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRCdWZmZXJFdmVyeV0gSW50ZXJ2YWwgYXQgd2hpY2ggdG8gc3RhcnQgYSBuZXcgYnVmZmVyLlxuICogRm9yIGV4YW1wbGUgaWYgYHN0YXJ0QnVmZmVyRXZlcnlgIGlzIGAyYCwgdGhlbiBhIG5ldyBidWZmZXIgd2lsbCBiZSBzdGFydGVkXG4gKiBvbiBldmVyeSBvdGhlciB2YWx1ZSBmcm9tIHRoZSBzb3VyY2UuIEEgbmV3IGJ1ZmZlciBpcyBzdGFydGVkIGF0IHRoZVxuICogYmVnaW5uaW5nIG9mIHRoZSBzb3VyY2UgYnkgZGVmYXVsdC5cbiAqIEByZXR1cm4ge09ic2VydmFibGU8VFtdPn0gQW4gT2JzZXJ2YWJsZSBvZiBhcnJheXMgb2YgYnVmZmVyZWQgdmFsdWVzLlxuICogQG1ldGhvZCBidWZmZXJDb3VudFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1ZmZlckNvdW50PFQ+KGJ1ZmZlclNpemU6IG51bWJlciwgc3RhcnRCdWZmZXJFdmVyeTogbnVtYmVyID0gbnVsbCk6IE9ic2VydmFibGU8VFtdPiB7XG4gIHJldHVybiB0aGlzLmxpZnQobmV3IEJ1ZmZlckNvdW50T3BlcmF0b3I8VD4oYnVmZmVyU2l6ZSwgc3RhcnRCdWZmZXJFdmVyeSkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1ZmZlckNvdW50U2lnbmF0dXJlPFQ+IHtcbiAgKGJ1ZmZlclNpemU6IG51bWJlciwgc3RhcnRCdWZmZXJFdmVyeT86IG51bWJlcik6IE9ic2VydmFibGU8VFtdPjtcbn1cblxuY2xhc3MgQnVmZmVyQ291bnRPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFRbXT4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJ1ZmZlclNpemU6IG51bWJlciwgcHJpdmF0ZSBzdGFydEJ1ZmZlckV2ZXJ5OiBudW1iZXIpIHtcbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUW10+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBCdWZmZXJDb3VudFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5idWZmZXJTaXplLCB0aGlzLnN0YXJ0QnVmZmVyRXZlcnkpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgQnVmZmVyQ291bnRTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIHByaXZhdGUgYnVmZmVyczogQXJyYXk8VFtdPiA9IFtbXV07XG4gIHByaXZhdGUgY291bnQ6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8VFtdPiwgcHJpdmF0ZSBidWZmZXJTaXplOiBudW1iZXIsIHByaXZhdGUgc3RhcnRCdWZmZXJFdmVyeTogbnVtYmVyKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKSB7XG4gICAgY29uc3QgY291bnQgPSAodGhpcy5jb3VudCArPSAxKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgY29uc3QgYnVmZmVyU2l6ZSA9IHRoaXMuYnVmZmVyU2l6ZTtcbiAgICBjb25zdCBzdGFydEJ1ZmZlckV2ZXJ5ID0gKHRoaXMuc3RhcnRCdWZmZXJFdmVyeSA9PSBudWxsKSA/IGJ1ZmZlclNpemUgOiB0aGlzLnN0YXJ0QnVmZmVyRXZlcnk7XG4gICAgY29uc3QgYnVmZmVycyA9IHRoaXMuYnVmZmVycztcbiAgICBjb25zdCBsZW4gPSBidWZmZXJzLmxlbmd0aDtcbiAgICBsZXQgcmVtb3ZlID0gLTE7XG5cbiAgICBpZiAoY291bnQgJSBzdGFydEJ1ZmZlckV2ZXJ5ID09PSAwKSB7XG4gICAgICBidWZmZXJzLnB1c2goW10pO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IGJ1ZmZlcnNbaV07XG4gICAgICBidWZmZXIucHVzaCh2YWx1ZSk7XG4gICAgICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gYnVmZmVyU2l6ZSkge1xuICAgICAgICByZW1vdmUgPSBpO1xuICAgICAgICBkZXN0aW5hdGlvbi5uZXh0KGJ1ZmZlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbW92ZSAhPT0gLTEpIHtcbiAgICAgIGJ1ZmZlcnMuc3BsaWNlKHJlbW92ZSwgMSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgY29uc3QgYnVmZmVycyA9IHRoaXMuYnVmZmVycztcbiAgICB3aGlsZSAoYnVmZmVycy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgYnVmZmVyID0gYnVmZmVycy5zaGlmdCgpO1xuICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uLm5leHQoYnVmZmVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3VwZXIuX2NvbXBsZXRlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
