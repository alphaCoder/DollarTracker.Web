System.register(['../Subscriber', '../util/ArgumentOutOfRangeError', '../observable/EmptyObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, ArgumentOutOfRangeError_1, EmptyObservable_1;
    var TakeOperator, TakeSubscriber;
    /**
     * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
     * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
     * @param total
     * @return {any}
     * @method take
     * @owner Observable
     */
    function take(total) {
        if (total === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        else {
            return this.lift(new TakeOperator(total));
        }
    }
    exports_1("take", take);
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
            TakeOperator = (function () {
                function TakeOperator(total) {
                    this.total = total;
                    if (this.total < 0) {
                        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
                    }
                }
                TakeOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new TakeSubscriber(subscriber, this.total));
                };
                return TakeOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            TakeSubscriber = (function (_super) {
                __extends(TakeSubscriber, _super);
                function TakeSubscriber(destination, total) {
                    _super.call(this, destination);
                    this.total = total;
                    this.count = 0;
                }
                TakeSubscriber.prototype._next = function (value) {
                    var total = this.total;
                    if (++this.count <= total) {
                        this.destination.next(value);
                        if (this.count === total) {
                            this.destination.complete();
                            this.unsubscribe();
                        }
                    }
                };
                return TakeSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3Rha2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQU1BOzs7Ozs7O09BT0c7SUFDSCxjQUF3QixLQUFhO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLGlDQUFlLEVBQUssQ0FBQztRQUNsQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUM7SUFDSCxDQUFDO0lBTkQsdUJBTUMsQ0FBQTs7Ozs7Ozs7Ozs7OztZQU1EO2dCQUNFLHNCQUFvQixLQUFhO29CQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQy9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsTUFBTSxJQUFJLGlEQUF1QixDQUFDO29CQUNwQyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsMkJBQUksR0FBSixVQUFLLFVBQXlCLEVBQUUsTUFBVztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxjQUFjLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxDQUFDO2dCQUNILG1CQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQWdDLGtDQUFhO2dCQUczQyx3QkFBWSxXQUEwQixFQUFVLEtBQWE7b0JBQzNELGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQUQyQixVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUZyRCxVQUFLLEdBQVcsQ0FBQyxDQUFDO2dCQUkxQixDQUFDO2dCQUVTLDhCQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDekIsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7NEJBQzVCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDckIsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBQ0gscUJBQUM7WUFBRCxDQWpCQSxBQWlCQyxDQWpCK0IsdUJBQVUsR0FpQnpDIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3Rha2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtBcmd1bWVudE91dE9mUmFuZ2VFcnJvcn0gZnJvbSAnLi4vdXRpbC9Bcmd1bWVudE91dE9mUmFuZ2VFcnJvcic7XG5pbXBvcnQge0VtcHR5T2JzZXJ2YWJsZX0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9FbXB0eU9ic2VydmFibGUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcblxuLyoqXG4gKiBAdGhyb3dzIHtBcmd1bWVudE91dE9mUmFuZ2VFcnJvcn0gV2hlbiB1c2luZyBgdGFrZShpKWAsIGl0IGRlbGl2ZXJzIGFuXG4gKiBBcmd1bWVudE91dE9yUmFuZ2VFcnJvciB0byB0aGUgT2JzZXJ2ZXIncyBgZXJyb3JgIGNhbGxiYWNrIGlmIGBpIDwgMGAuXG4gKiBAcGFyYW0gdG90YWxcbiAqIEByZXR1cm4ge2FueX1cbiAqIEBtZXRob2QgdGFrZVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRha2U8VD4odG90YWw6IG51bWJlcik6IE9ic2VydmFibGU8VD4ge1xuICBpZiAodG90YWwgPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEVtcHR5T2JzZXJ2YWJsZTxUPigpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLmxpZnQobmV3IFRha2VPcGVyYXRvcih0b3RhbCkpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFrZVNpZ25hdHVyZTxUPiB7XG4gICh0b3RhbDogbnVtYmVyKTogT2JzZXJ2YWJsZTxUPjtcbn1cblxuY2xhc3MgVGFrZU9wZXJhdG9yPFQ+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgVD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvdGFsOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy50b3RhbCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBBcmd1bWVudE91dE9mUmFuZ2VFcnJvcjtcbiAgICB9XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFRha2VTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMudG90YWwpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgVGFrZVN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgcHJpdmF0ZSBjb3VudDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxUPiwgcHJpdmF0ZSB0b3RhbDogbnVtYmVyKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgY29uc3QgdG90YWwgPSB0aGlzLnRvdGFsO1xuICAgIGlmICgrK3RoaXMuY291bnQgPD0gdG90YWwpIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5jb3VudCA9PT0gdG90YWwpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
