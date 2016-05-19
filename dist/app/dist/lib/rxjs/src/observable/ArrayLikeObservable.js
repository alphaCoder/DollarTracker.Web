System.register(['../Observable', './ScalarObservable', './EmptyObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, ScalarObservable_1, EmptyObservable_1;
    var ArrayLikeObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (ScalarObservable_1_1) {
                ScalarObservable_1 = ScalarObservable_1_1;
            },
            function (EmptyObservable_1_1) {
                EmptyObservable_1 = EmptyObservable_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            ArrayLikeObservable = (function (_super) {
                __extends(ArrayLikeObservable, _super);
                function ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler) {
                    _super.call(this);
                    this.arrayLike = arrayLike;
                    this.scheduler = scheduler;
                    if (!mapFn && !scheduler && arrayLike.length === 1) {
                        this._isScalar = true;
                        this.value = arrayLike[0];
                    }
                    if (mapFn) {
                        this.mapFn = mapFn.bind(thisArg);
                    }
                }
                ArrayLikeObservable.create = function (arrayLike, mapFn, thisArg, scheduler) {
                    var length = arrayLike.length;
                    if (length === 0) {
                        return new EmptyObservable_1.EmptyObservable();
                    }
                    else if (length === 1 && !mapFn) {
                        return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
                    }
                    else {
                        return new ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler);
                    }
                };
                ArrayLikeObservable.dispatch = function (state) {
                    var arrayLike = state.arrayLike, index = state.index, length = state.length, mapFn = state.mapFn, subscriber = state.subscriber;
                    if (subscriber.isUnsubscribed) {
                        return;
                    }
                    if (index >= length) {
                        subscriber.complete();
                        return;
                    }
                    var result = mapFn ? mapFn(arrayLike[index], index) : arrayLike[index];
                    subscriber.next(result);
                    state.index = index + 1;
                    this.schedule(state);
                };
                ArrayLikeObservable.prototype._subscribe = function (subscriber) {
                    var index = 0;
                    var _a = this, arrayLike = _a.arrayLike, mapFn = _a.mapFn, scheduler = _a.scheduler;
                    var length = arrayLike.length;
                    if (scheduler) {
                        return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
                            arrayLike: arrayLike, index: index, length: length, mapFn: mapFn, subscriber: subscriber
                        });
                    }
                    else {
                        for (var i = 0; i < length && !subscriber.isUnsubscribed; i++) {
                            var result = mapFn ? mapFn(arrayLike[i], i) : arrayLike[i];
                            subscriber.next(result);
                        }
                        subscriber.complete();
                    }
                };
                return ArrayLikeObservable;
            }(Observable_1.Observable));
            exports_1("ArrayLikeObservable", ArrayLikeObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvQXJyYXlMaWtlT2JzZXJ2YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Ozs7ZUFJRztZQUNIO2dCQUE0Qyx1Q0FBYTtnQkFzQ3ZELDZCQUFvQixTQUF1QixFQUFFLEtBQTZCLEVBQUUsT0FBWSxFQUFVLFNBQXFCO29CQUNySCxpQkFBTyxDQUFDO29CQURVLGNBQVMsR0FBVCxTQUFTLENBQWM7b0JBQXVELGNBQVMsR0FBVCxTQUFTLENBQVk7b0JBRXJILEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QixDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNuQyxDQUFDO2dCQUNILENBQUM7Z0JBM0NNLDBCQUFNLEdBQWIsVUFBaUIsU0FBdUIsRUFBRSxLQUE2QixFQUFFLE9BQVksRUFBRSxTQUFxQjtvQkFDMUcsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLGlDQUFlLEVBQUssQ0FBQztvQkFDbEMsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLG1DQUFnQixDQUFTLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDL0QsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDdkUsQ0FBQztnQkFDSCxDQUFDO2dCQUVNLDRCQUFRLEdBQWYsVUFBZ0IsS0FBVTtvQkFDaEIsK0JBQVMsRUFBRSxtQkFBSyxFQUFFLHFCQUFNLEVBQUUsbUJBQUssRUFBRSw2QkFBVSxDQUFXO29CQUU5RCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsTUFBTSxDQUFDO29CQUNULENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDdEIsTUFBTSxDQUFDO29CQUNULENBQUM7b0JBRUQsSUFBTSxNQUFNLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6RSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUV4QixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBRWpCLElBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBZ0JTLHdDQUFVLEdBQXBCLFVBQXFCLFVBQXlCO29CQUM1QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ2QsSUFBQSxTQUE0QyxFQUFwQyx3QkFBUyxFQUFFLGdCQUFLLEVBQUUsd0JBQVMsQ0FBVTtvQkFDN0MsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztvQkFFaEMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFOzRCQUN6RCxXQUFBLFNBQVMsRUFBRSxPQUFBLEtBQUssRUFBRSxRQUFBLE1BQU0sRUFBRSxPQUFBLEtBQUssRUFBRSxZQUFBLFVBQVU7eUJBQzVDLENBQUMsQ0FBQztvQkFDTCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUM5RCxJQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzdELFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzFCLENBQUM7d0JBQ0QsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN4QixDQUFDO2dCQUNILENBQUM7Z0JBQ0gsMEJBQUM7WUFBRCxDQWxFQSxBQWtFQyxDQWxFMkMsdUJBQVUsR0FrRXJEO1lBbEVELHFEQWtFQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvQXJyYXlMaWtlT2JzZXJ2YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NoZWR1bGVyfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U2NhbGFyT2JzZXJ2YWJsZX0gZnJvbSAnLi9TY2FsYXJPYnNlcnZhYmxlJztcbmltcG9ydCB7RW1wdHlPYnNlcnZhYmxlfSBmcm9tICcuL0VtcHR5T2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtUZWFyZG93bkxvZ2ljfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqIEBoaWRlIHRydWVcbiAqL1xuZXhwb3J0IGNsYXNzIEFycmF5TGlrZU9ic2VydmFibGU8VD4gZXh0ZW5kcyBPYnNlcnZhYmxlPFQ+IHtcblxuICBwcml2YXRlIG1hcEZuOiAoeDogVCwgeTogbnVtYmVyKSA9PiBUO1xuXG4gIHN0YXRpYyBjcmVhdGU8VD4oYXJyYXlMaWtlOiBBcnJheUxpa2U8VD4sIG1hcEZuOiAoeDogVCwgeTogbnVtYmVyKSA9PiBULCB0aGlzQXJnOiBhbnksIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGFycmF5TGlrZS5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBFbXB0eU9ic2VydmFibGU8VD4oKTtcbiAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMSAmJiAhbWFwRm4pIHtcbiAgICAgIHJldHVybiBuZXcgU2NhbGFyT2JzZXJ2YWJsZTxUPig8YW55PmFycmF5TGlrZVswXSwgc2NoZWR1bGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBBcnJheUxpa2VPYnNlcnZhYmxlKGFycmF5TGlrZSwgbWFwRm4sIHRoaXNBcmcsIHNjaGVkdWxlcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRpc3BhdGNoKHN0YXRlOiBhbnkpIHtcbiAgICBjb25zdCB7IGFycmF5TGlrZSwgaW5kZXgsIGxlbmd0aCwgbWFwRm4sIHN1YnNjcmliZXIgfSA9IHN0YXRlO1xuXG4gICAgaWYgKHN1YnNjcmliZXIuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gbWFwRm4gPyBtYXBGbihhcnJheUxpa2VbaW5kZXhdLCBpbmRleCkgOiBhcnJheUxpa2VbaW5kZXhdO1xuICAgIHN1YnNjcmliZXIubmV4dChyZXN1bHQpO1xuXG4gICAgc3RhdGUuaW5kZXggPSBpbmRleCArIDE7XG5cbiAgICAoPGFueT4gdGhpcykuc2NoZWR1bGUoc3RhdGUpO1xuICB9XG5cbiAgLy8gdmFsdWUgdXNlZCBpZiBBcnJheSBoYXMgb25lIHZhbHVlIGFuZCBfaXNTY2FsYXJcbiAgcHJpdmF0ZSB2YWx1ZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXJyYXlMaWtlOiBBcnJheUxpa2U8VD4sIG1hcEZuOiAoeDogVCwgeTogbnVtYmVyKSA9PiBULCB0aGlzQXJnOiBhbnksIHByaXZhdGUgc2NoZWR1bGVyPzogU2NoZWR1bGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoIW1hcEZuICYmICFzY2hlZHVsZXIgJiYgYXJyYXlMaWtlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5faXNTY2FsYXIgPSB0cnVlO1xuICAgICAgdGhpcy52YWx1ZSA9IGFycmF5TGlrZVswXTtcbiAgICB9XG4gICAgaWYgKG1hcEZuKSB7XG4gICAgICB0aGlzLm1hcEZuID0gbWFwRm4uYmluZCh0aGlzQXJnKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBjb25zdCB7IGFycmF5TGlrZSwgbWFwRm4sIHNjaGVkdWxlciB9ID0gdGhpcztcbiAgICBjb25zdCBsZW5ndGggPSBhcnJheUxpa2UubGVuZ3RoO1xuXG4gICAgaWYgKHNjaGVkdWxlcikge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShBcnJheUxpa2VPYnNlcnZhYmxlLmRpc3BhdGNoLCAwLCB7XG4gICAgICAgIGFycmF5TGlrZSwgaW5kZXgsIGxlbmd0aCwgbWFwRm4sIHN1YnNjcmliZXJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAmJiAhc3Vic2NyaWJlci5pc1Vuc3Vic2NyaWJlZDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG1hcEZuID8gbWFwRm4oYXJyYXlMaWtlW2ldLCBpKSA6IGFycmF5TGlrZVtpXTtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KHJlc3VsdCk7XG4gICAgICB9XG4gICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
