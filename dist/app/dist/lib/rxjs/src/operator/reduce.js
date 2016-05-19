System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var ReduceOperator, ReduceSubscriber;
    /**
     * Returns an Observable that applies a specified accumulator function to the first item emitted by a source Observable,
     * then feeds the result of that function along with the second item emitted by the source Observable into the same
     * function, and so on until all items have been emitted by the source Observable, and emits the final result from
     * the final call to your function as its sole item.
     * This technique, which is called "reduce" here, is sometimes called "aggregate," "fold," "accumulate," "compress," or
     * "inject" in other programming contexts.
     *
     * <img src="./img/reduce.png" width="100%">
     *
     * @param {initialValue} the initial (seed) accumulator value
     * @param {accumulator} an accumulator function to be invoked on each item emitted by the source Observable, the
     * result of which will be used in the next accumulator call.
     * @return {Observable} an Observable that emits a single item that is the result of accumulating the output from the
     * items emitted by the source Observable.
     * @method reduce
     * @owner Observable
     */
    function reduce(project, seed) {
        return this.lift(new ReduceOperator(project, seed));
    }
    exports_1("reduce", reduce);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            ReduceOperator = (function () {
                function ReduceOperator(project, seed) {
                    this.project = project;
                    this.seed = seed;
                }
                ReduceOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new ReduceSubscriber(subscriber, this.project, this.seed));
                };
                return ReduceOperator;
            }());
            exports_1("ReduceOperator", ReduceOperator);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ReduceSubscriber = (function (_super) {
                __extends(ReduceSubscriber, _super);
                function ReduceSubscriber(destination, project, seed) {
                    _super.call(this, destination);
                    this.hasValue = false;
                    this.acc = seed;
                    this.project = project;
                    this.hasSeed = typeof seed !== 'undefined';
                }
                ReduceSubscriber.prototype._next = function (value) {
                    if (this.hasValue || (this.hasValue = this.hasSeed)) {
                        this._tryReduce(value);
                    }
                    else {
                        this.acc = value;
                        this.hasValue = true;
                    }
                };
                ReduceSubscriber.prototype._tryReduce = function (value) {
                    var result;
                    try {
                        result = this.project(this.acc, value);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    this.acc = result;
                };
                ReduceSubscriber.prototype._complete = function () {
                    if (this.hasValue || this.hasSeed) {
                        this.destination.next(this.acc);
                    }
                    this.destination.complete();
                };
                return ReduceSubscriber;
            }(Subscriber_1.Subscriber));
            exports_1("ReduceSubscriber", ReduceSubscriber);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3JlZHVjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O09BaUJHO0lBQ0gsZ0JBQTZCLE9BQWdDLEVBQUUsSUFBUTtRQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRkQsMkJBRUMsQ0FBQTs7Ozs7OztZQU1EO2dCQUVFLHdCQUFvQixPQUFnQyxFQUFVLElBQVE7b0JBQWxELFlBQU8sR0FBUCxPQUFPLENBQXlCO29CQUFVLFNBQUksR0FBSixJQUFJLENBQUk7Z0JBQ3RFLENBQUM7Z0JBRUQsNkJBQUksR0FBSixVQUFLLFVBQXlCLEVBQUUsTUFBVztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdEYsQ0FBQztnQkFDSCxxQkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsMkNBUUMsQ0FBQTtZQUVEOzs7O2VBSUc7WUFDSDtnQkFBNEMsb0NBQWE7Z0JBT3ZELDBCQUFZLFdBQTBCLEVBQUUsT0FBZ0MsRUFBRSxJQUFRO29CQUNoRixrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFKckIsYUFBUSxHQUFZLEtBQUssQ0FBQztvQkFLeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQztnQkFDN0MsQ0FBQztnQkFFUyxnQ0FBSyxHQUFmLFVBQWdCLEtBQVE7b0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN2QixDQUFDO2dCQUNILENBQUM7Z0JBRU8scUNBQVUsR0FBbEIsVUFBbUIsS0FBUTtvQkFDekIsSUFBSSxNQUFXLENBQUM7b0JBQ2hCLElBQUksQ0FBQzt3QkFDSCxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUM1QyxDQUFFO29CQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzVCLE1BQU0sQ0FBQztvQkFDVCxDQUFDO29CQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO2dCQUNwQixDQUFDO2dCQUVTLG9DQUFTLEdBQW5CO29CQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEMsQ0FBQztvQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM5QixDQUFDO2dCQUNILHVCQUFDO1lBQUQsQ0F4Q0EsQUF3Q0MsQ0F4QzJDLHVCQUFVLEdBd0NyRDtZQXhDRCwrQ0F3Q0MsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9yZWR1Y2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBhcHBsaWVzIGEgc3BlY2lmaWVkIGFjY3VtdWxhdG9yIGZ1bmN0aW9uIHRvIHRoZSBmaXJzdCBpdGVtIGVtaXR0ZWQgYnkgYSBzb3VyY2UgT2JzZXJ2YWJsZSxcbiAqIHRoZW4gZmVlZHMgdGhlIHJlc3VsdCBvZiB0aGF0IGZ1bmN0aW9uIGFsb25nIHdpdGggdGhlIHNlY29uZCBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGludG8gdGhlIHNhbWVcbiAqIGZ1bmN0aW9uLCBhbmQgc28gb24gdW50aWwgYWxsIGl0ZW1zIGhhdmUgYmVlbiBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgYW5kIGVtaXRzIHRoZSBmaW5hbCByZXN1bHQgZnJvbVxuICogdGhlIGZpbmFsIGNhbGwgdG8geW91ciBmdW5jdGlvbiBhcyBpdHMgc29sZSBpdGVtLlxuICogVGhpcyB0ZWNobmlxdWUsIHdoaWNoIGlzIGNhbGxlZCBcInJlZHVjZVwiIGhlcmUsIGlzIHNvbWV0aW1lcyBjYWxsZWQgXCJhZ2dyZWdhdGUsXCIgXCJmb2xkLFwiIFwiYWNjdW11bGF0ZSxcIiBcImNvbXByZXNzLFwiIG9yXG4gKiBcImluamVjdFwiIGluIG90aGVyIHByb2dyYW1taW5nIGNvbnRleHRzLlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvcmVkdWNlLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIEBwYXJhbSB7aW5pdGlhbFZhbHVlfSB0aGUgaW5pdGlhbCAoc2VlZCkgYWNjdW11bGF0b3IgdmFsdWVcbiAqIEBwYXJhbSB7YWNjdW11bGF0b3J9IGFuIGFjY3VtdWxhdG9yIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb24gZWFjaCBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCB0aGVcbiAqIHJlc3VsdCBvZiB3aGljaCB3aWxsIGJlIHVzZWQgaW4gdGhlIG5leHQgYWNjdW11bGF0b3IgY2FsbC5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBhIHNpbmdsZSBpdGVtIHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBhY2N1bXVsYXRpbmcgdGhlIG91dHB1dCBmcm9tIHRoZVxuICogaXRlbXMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUuXG4gKiBAbWV0aG9kIHJlZHVjZVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZTxULCBSPihwcm9qZWN0OiAoYWNjOiBSLCB2YWx1ZTogVCkgPT4gUiwgc2VlZD86IFIpOiBPYnNlcnZhYmxlPFI+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgUmVkdWNlT3BlcmF0b3IocHJvamVjdCwgc2VlZCkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlZHVjZVNpZ25hdHVyZTxUPiB7XG4gIDxSPihwcm9qZWN0OiAoYWNjOiBSLCB2YWx1ZTogVCkgPT4gUiwgc2VlZD86IFIpOiBPYnNlcnZhYmxlPFI+O1xufVxuXG5leHBvcnQgY2xhc3MgUmVkdWNlT3BlcmF0b3I8VCwgUj4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBSPiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9qZWN0OiAoYWNjOiBSLCB2YWx1ZTogVCkgPT4gUiwgcHJpdmF0ZSBzZWVkPzogUikge1xuICB9XG5cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFI+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBSZWR1Y2VTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJvamVjdCwgdGhpcy5zZWVkKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmV4cG9ydCBjbGFzcyBSZWR1Y2VTdWJzY3JpYmVyPFQsIFI+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG5cbiAgYWNjOiBUIHwgUjtcbiAgaGFzU2VlZDogYm9vbGVhbjtcbiAgaGFzVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJvamVjdDogKGFjYzogUiwgdmFsdWU6IFQpID0+IFI7XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8Uj4sIHByb2plY3Q6IChhY2M6IFIsIHZhbHVlOiBUKSA9PiBSLCBzZWVkPzogUikge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLmFjYyA9IHNlZWQ7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmhhc1NlZWQgPSB0eXBlb2Ygc2VlZCAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpIHtcbiAgICBpZiAodGhpcy5oYXNWYWx1ZSB8fCAodGhpcy5oYXNWYWx1ZSA9IHRoaXMuaGFzU2VlZCkpIHtcbiAgICAgIHRoaXMuX3RyeVJlZHVjZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWNjID0gdmFsdWU7XG4gICAgICB0aGlzLmhhc1ZhbHVlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90cnlSZWR1Y2UodmFsdWU6IFQpIHtcbiAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IHRoaXMucHJvamVjdCg8Uj50aGlzLmFjYywgdmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmFjYyA9IHJlc3VsdDtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKSB7XG4gICAgaWYgKHRoaXMuaGFzVmFsdWUgfHwgdGhpcy5oYXNTZWVkKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodGhpcy5hY2MpO1xuICAgIH1cbiAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
