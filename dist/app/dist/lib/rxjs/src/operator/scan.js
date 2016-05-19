System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var ScanOperator, ScanSubscriber;
    /**
     * Applies an accumulation function over the source Observable, and returns each
     * intermediate result, with an optional seed value.
     *
     * <span class="informal">It's like {@link reduce}, but emits the current
     * accumulation whenever the source emits a value.</span>
     *
     * <img src="./img/scan.png" width="100%">
     *
     * Combines together all values emitted on the source, using an accumulator
     * function that knows how to join a new source value into the accumulation from
     * the past. Is similar to {@link reduce}, but emits the intermediate
     * accumulations.
     *
     * Returns an Observable that applies a specified `accumulator` function to each
     * item emitted by the source Observable. If a `seed` value is specified, then
     * that value will be used as the initial value for the accumulator. If no seed
     * value is specified, the first item of the source is used as the seed.
     *
     * @example <caption>Count the number of click events</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var ones = clicks.mapTo(1);
     * var seed = 0;
     * var count = ones.scan((acc, one) => acc + one, seed);
     * count.subscribe(x => console.log(x));
     *
     * @see {@link expand}
     * @see {@link mergeScan}
     * @see {@link reduce}
     *
     * @param {function(acc: R, value: T): R} accumulator The accumulator function
     * called on each source value.
     * @param {T|R} [seed] The initial accumulation value.
     * @return {Observable<R>} An observable of the accumulated values.
     * @method scan
     * @owner Observable
     */
    function scan(accumulator, seed) {
        return this.lift(new ScanOperator(accumulator, seed));
    }
    exports_1("scan", scan);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            ScanOperator = (function () {
                function ScanOperator(accumulator, seed) {
                    this.accumulator = accumulator;
                    this.seed = seed;
                }
                ScanOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed));
                };
                return ScanOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ScanSubscriber = (function (_super) {
                __extends(ScanSubscriber, _super);
                function ScanSubscriber(destination, accumulator, seed) {
                    _super.call(this, destination);
                    this.accumulator = accumulator;
                    this.accumulatorSet = false;
                    this.seed = seed;
                    this.accumulator = accumulator;
                    this.accumulatorSet = typeof seed !== 'undefined';
                }
                Object.defineProperty(ScanSubscriber.prototype, "seed", {
                    get: function () {
                        return this._seed;
                    },
                    set: function (value) {
                        this.accumulatorSet = true;
                        this._seed = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                ScanSubscriber.prototype._next = function (value) {
                    if (!this.accumulatorSet) {
                        this.seed = value;
                        this.destination.next(value);
                    }
                    else {
                        return this._tryNext(value);
                    }
                };
                ScanSubscriber.prototype._tryNext = function (value) {
                    var result;
                    try {
                        result = this.accumulator(this.seed, value);
                    }
                    catch (err) {
                        this.destination.error(err);
                    }
                    this.seed = result;
                    this.destination.next(result);
                };
                return ScanSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3NjYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FvQ0c7SUFDSCxjQUEyQixXQUFvQyxFQUFFLElBQVk7UUFDM0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUZELHVCQUVDLENBQUE7Ozs7Ozs7WUFNRDtnQkFDRSxzQkFBb0IsV0FBb0MsRUFBVSxJQUFZO29CQUExRCxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7b0JBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtnQkFDOUUsQ0FBQztnQkFFRCwyQkFBSSxHQUFKLFVBQUssVUFBeUIsRUFBRSxNQUFXO29CQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDeEYsQ0FBQztnQkFDSCxtQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFtQyxrQ0FBYTtnQkFjOUMsd0JBQVksV0FBMEIsRUFBVSxXQUFvQyxFQUFFLElBQVU7b0JBQzlGLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQUQyQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7b0JBRjVFLG1CQUFjLEdBQVksS0FBSyxDQUFDO29CQUl0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7b0JBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxJQUFJLEtBQUssV0FBVyxDQUFDO2dCQUNwRCxDQUFDO2dCQWhCRCxzQkFBSSxnQ0FBSTt5QkFBUjt3QkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDcEIsQ0FBQzt5QkFFRCxVQUFTLEtBQVk7d0JBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO3dCQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDckIsQ0FBQzs7O21CQUxBO2dCQWdCUyw4QkFBSyxHQUFmLFVBQWdCLEtBQVE7b0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO3dCQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDL0IsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztnQkFDSCxDQUFDO2dCQUVPLGlDQUFRLEdBQWhCLFVBQWlCLEtBQVE7b0JBQ3ZCLElBQUksTUFBVyxDQUFDO29CQUNoQixJQUFJLENBQUM7d0JBQ0gsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDakQsQ0FBRTtvQkFBQSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixDQUFDO29CQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO29CQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFDSCxxQkFBQztZQUFELENBeENBLEFBd0NDLENBeENrQyx1QkFBVSxHQXdDNUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3Ivc2Nhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuXG4vKipcbiAqIEFwcGxpZXMgYW4gYWNjdW11bGF0aW9uIGZ1bmN0aW9uIG92ZXIgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCBhbmQgcmV0dXJucyBlYWNoXG4gKiBpbnRlcm1lZGlhdGUgcmVzdWx0LCB3aXRoIGFuIG9wdGlvbmFsIHNlZWQgdmFsdWUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkl0J3MgbGlrZSB7QGxpbmsgcmVkdWNlfSwgYnV0IGVtaXRzIHRoZSBjdXJyZW50XG4gKiBhY2N1bXVsYXRpb24gd2hlbmV2ZXIgdGhlIHNvdXJjZSBlbWl0cyBhIHZhbHVlLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3NjYW4ucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQ29tYmluZXMgdG9nZXRoZXIgYWxsIHZhbHVlcyBlbWl0dGVkIG9uIHRoZSBzb3VyY2UsIHVzaW5nIGFuIGFjY3VtdWxhdG9yXG4gKiBmdW5jdGlvbiB0aGF0IGtub3dzIGhvdyB0byBqb2luIGEgbmV3IHNvdXJjZSB2YWx1ZSBpbnRvIHRoZSBhY2N1bXVsYXRpb24gZnJvbVxuICogdGhlIHBhc3QuIElzIHNpbWlsYXIgdG8ge0BsaW5rIHJlZHVjZX0sIGJ1dCBlbWl0cyB0aGUgaW50ZXJtZWRpYXRlXG4gKiBhY2N1bXVsYXRpb25zLlxuICpcbiAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGFwcGxpZXMgYSBzcGVjaWZpZWQgYGFjY3VtdWxhdG9yYCBmdW5jdGlvbiB0byBlYWNoXG4gKiBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLiBJZiBhIGBzZWVkYCB2YWx1ZSBpcyBzcGVjaWZpZWQsIHRoZW5cbiAqIHRoYXQgdmFsdWUgd2lsbCBiZSB1c2VkIGFzIHRoZSBpbml0aWFsIHZhbHVlIGZvciB0aGUgYWNjdW11bGF0b3IuIElmIG5vIHNlZWRcbiAqIHZhbHVlIGlzIHNwZWNpZmllZCwgdGhlIGZpcnN0IGl0ZW0gb2YgdGhlIHNvdXJjZSBpcyB1c2VkIGFzIHRoZSBzZWVkLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNvdW50IHRoZSBudW1iZXIgb2YgY2xpY2sgZXZlbnRzPC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciBvbmVzID0gY2xpY2tzLm1hcFRvKDEpO1xuICogdmFyIHNlZWQgPSAwO1xuICogdmFyIGNvdW50ID0gb25lcy5zY2FuKChhY2MsIG9uZSkgPT4gYWNjICsgb25lLCBzZWVkKTtcbiAqIGNvdW50LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBleHBhbmR9XG4gKiBAc2VlIHtAbGluayBtZXJnZVNjYW59XG4gKiBAc2VlIHtAbGluayByZWR1Y2V9XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbihhY2M6IFIsIHZhbHVlOiBUKTogUn0gYWNjdW11bGF0b3IgVGhlIGFjY3VtdWxhdG9yIGZ1bmN0aW9uXG4gKiBjYWxsZWQgb24gZWFjaCBzb3VyY2UgdmFsdWUuXG4gKiBAcGFyYW0ge1R8Un0gW3NlZWRdIFRoZSBpbml0aWFsIGFjY3VtdWxhdGlvbiB2YWx1ZS5cbiAqIEByZXR1cm4ge09ic2VydmFibGU8Uj59IEFuIG9ic2VydmFibGUgb2YgdGhlIGFjY3VtdWxhdGVkIHZhbHVlcy5cbiAqIEBtZXRob2Qgc2NhblxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYW48VCwgUj4oYWNjdW11bGF0b3I6IChhY2M6IFIsIHZhbHVlOiBUKSA9PiBSLCBzZWVkPzogVCB8IFIpOiBPYnNlcnZhYmxlPFI+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgU2Nhbk9wZXJhdG9yKGFjY3VtdWxhdG9yLCBzZWVkKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NhblNpZ25hdHVyZTxUPiB7XG4gIDxSPihhY2N1bXVsYXRvcjogKGFjYzogUiwgdmFsdWU6IFQpID0+IFIsIHNlZWQ/OiBUIHwgUik6IE9ic2VydmFibGU8Uj47XG59XG5cbmNsYXNzIFNjYW5PcGVyYXRvcjxULCBSPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFI+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY2N1bXVsYXRvcjogKGFjYzogUiwgdmFsdWU6IFQpID0+IFIsIHByaXZhdGUgc2VlZD86IFQgfCBSKSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Uj4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFNjYW5TdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuYWNjdW11bGF0b3IsIHRoaXMuc2VlZCkpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBTY2FuU3Vic2NyaWJlcjxULCBSPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBwcml2YXRlIF9zZWVkOiBUIHwgUjtcblxuICBnZXQgc2VlZCgpOiBUIHwgUiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlZWQ7XG4gIH1cblxuICBzZXQgc2VlZCh2YWx1ZTogVCB8IFIpIHtcbiAgICB0aGlzLmFjY3VtdWxhdG9yU2V0ID0gdHJ1ZTtcbiAgICB0aGlzLl9zZWVkID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFjY3VtdWxhdG9yU2V0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8Uj4sIHByaXZhdGUgYWNjdW11bGF0b3I6IChhY2M6IFIsIHZhbHVlOiBUKSA9PiBSLCBzZWVkPzogVHxSKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMuc2VlZCA9IHNlZWQ7XG4gICAgdGhpcy5hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yO1xuICAgIHRoaXMuYWNjdW11bGF0b3JTZXQgPSB0eXBlb2Ygc2VlZCAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWNjdW11bGF0b3JTZXQpIHtcbiAgICAgIHRoaXMuc2VlZCA9IHZhbHVlO1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX3RyeU5leHQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RyeU5leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuYWNjdW11bGF0b3IoPFI+dGhpcy5zZWVkLCB2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgfVxuICAgIHRoaXMuc2VlZCA9IHJlc3VsdDtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQocmVzdWx0KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
