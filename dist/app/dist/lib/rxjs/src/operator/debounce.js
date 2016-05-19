System.register(['../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1, subscribeToResult_1;
    var DebounceOperator, DebounceSubscriber;
    /**
     * Returns the source Observable delayed by the computed debounce duration,
     * with the duration lengthened if a new source item arrives before the delay
     * duration ends.
     * In practice, for each item emitted on the source, this operator holds the
     * latest item, waits for a silence as long as the `durationSelector` specifies,
     * and only then emits the latest source item on the result Observable.
     * @param {function} durationSelector function for computing the timeout duration for each item.
     * @return {Observable} an Observable the same as source Observable, but drops items.
     * @method debounce
     * @owner Observable
     */
    function debounce(durationSelector) {
        return this.lift(new DebounceOperator(durationSelector));
    }
    exports_1("debounce", debounce);
    return {
        setters:[
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            DebounceOperator = (function () {
                function DebounceOperator(durationSelector) {
                    this.durationSelector = durationSelector;
                }
                DebounceOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
                };
                return DebounceOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            DebounceSubscriber = (function (_super) {
                __extends(DebounceSubscriber, _super);
                function DebounceSubscriber(destination, durationSelector) {
                    _super.call(this, destination);
                    this.durationSelector = durationSelector;
                    this.hasValue = false;
                    this.durationSubscription = null;
                }
                DebounceSubscriber.prototype._next = function (value) {
                    try {
                        var result = this.durationSelector.call(this, value);
                        if (result) {
                            this._tryNext(value, result);
                        }
                    }
                    catch (err) {
                        this.destination.error(err);
                    }
                };
                DebounceSubscriber.prototype._complete = function () {
                    this.emitValue();
                    this.destination.complete();
                };
                DebounceSubscriber.prototype._tryNext = function (value, duration) {
                    var subscription = this.durationSubscription;
                    this.value = value;
                    this.hasValue = true;
                    if (subscription) {
                        subscription.unsubscribe();
                        this.remove(subscription);
                    }
                    subscription = subscribeToResult_1.subscribeToResult(this, duration);
                    if (!subscription.isUnsubscribed) {
                        this.add(this.durationSubscription = subscription);
                    }
                };
                DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.emitValue();
                };
                DebounceSubscriber.prototype.notifyComplete = function () {
                    this.emitValue();
                };
                DebounceSubscriber.prototype.emitValue = function () {
                    if (this.hasValue) {
                        var value = this.value;
                        var subscription = this.durationSubscription;
                        if (subscription) {
                            this.durationSubscription = null;
                            subscription.unsubscribe();
                            this.remove(subscription);
                        }
                        this.value = null;
                        this.hasValue = false;
                        _super.prototype._next.call(this, value);
                    }
                };
                return DebounceSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2RlYm91bmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFTQTs7Ozs7Ozs7Ozs7T0FXRztJQUNILGtCQUE0QixnQkFBNkQ7UUFDdkYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUZELCtCQUVDLENBQUE7Ozs7Ozs7Ozs7WUFNRDtnQkFDRSwwQkFBb0IsZ0JBQTZEO29CQUE3RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTZDO2dCQUNqRixDQUFDO2dCQUVELCtCQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksa0JBQWtCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLENBQUM7Z0JBQ0gsdUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQUVEOzs7O2VBSUc7WUFDSDtnQkFBdUMsc0NBQXFCO2dCQUsxRCw0QkFBWSxXQUEwQixFQUNsQixnQkFBNkQ7b0JBQy9FLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQURELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkM7b0JBSnpFLGFBQVEsR0FBWSxLQUFLLENBQUM7b0JBQzFCLHlCQUFvQixHQUFpQixJQUFJLENBQUM7Z0JBS2xELENBQUM7Z0JBRVMsa0NBQUssR0FBZixVQUFnQixLQUFRO29CQUN0QixJQUFJLENBQUM7d0JBQ0gsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBRXZELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQy9CLENBQUM7b0JBQ0gsQ0FBRTtvQkFBQSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixDQUFDO2dCQUNILENBQUM7Z0JBRVMsc0NBQVMsR0FBbkI7b0JBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM5QixDQUFDO2dCQUVPLHFDQUFRLEdBQWhCLFVBQWlCLEtBQVEsRUFBRSxRQUF1QztvQkFDaEUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO29CQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztvQkFFRCxZQUFZLEdBQUcscUNBQWlCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUNqRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxZQUFZLENBQUMsQ0FBQztvQkFDckQsQ0FBQztnQkFDSCxDQUFDO2dCQUVELHVDQUFVLEdBQVYsVUFBVyxVQUFhLEVBQUUsVUFBYSxFQUM1QixVQUFrQixFQUFFLFVBQWtCLEVBQ3RDLFFBQStCO29CQUN4QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsMkNBQWMsR0FBZDtvQkFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsc0NBQVMsR0FBVDtvQkFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDekIsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO3dCQUMvQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzRCQUNqQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDOzRCQUNqQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7NEJBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQzVCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixnQkFBSyxDQUFDLEtBQUssWUFBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsQ0FBQztnQkFDSCxDQUFDO2dCQUNILHlCQUFDO1lBQUQsQ0FsRUEsQUFrRUMsQ0FsRXNDLGlDQUFlLEdBa0VyRCIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9kZWJvdW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaWJhYmxlT3JQcm9taXNlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcblxuaW1wb3J0IHtPdXRlclN1YnNjcmliZXJ9IGZyb20gJy4uL091dGVyU3Vic2NyaWJlcic7XG5pbXBvcnQge0lubmVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vSW5uZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7c3Vic2NyaWJlVG9SZXN1bHR9IGZyb20gJy4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQnO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGRlbGF5ZWQgYnkgdGhlIGNvbXB1dGVkIGRlYm91bmNlIGR1cmF0aW9uLFxuICogd2l0aCB0aGUgZHVyYXRpb24gbGVuZ3RoZW5lZCBpZiBhIG5ldyBzb3VyY2UgaXRlbSBhcnJpdmVzIGJlZm9yZSB0aGUgZGVsYXlcbiAqIGR1cmF0aW9uIGVuZHMuXG4gKiBJbiBwcmFjdGljZSwgZm9yIGVhY2ggaXRlbSBlbWl0dGVkIG9uIHRoZSBzb3VyY2UsIHRoaXMgb3BlcmF0b3IgaG9sZHMgdGhlXG4gKiBsYXRlc3QgaXRlbSwgd2FpdHMgZm9yIGEgc2lsZW5jZSBhcyBsb25nIGFzIHRoZSBgZHVyYXRpb25TZWxlY3RvcmAgc3BlY2lmaWVzLFxuICogYW5kIG9ubHkgdGhlbiBlbWl0cyB0aGUgbGF0ZXN0IHNvdXJjZSBpdGVtIG9uIHRoZSByZXN1bHQgT2JzZXJ2YWJsZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGR1cmF0aW9uU2VsZWN0b3IgZnVuY3Rpb24gZm9yIGNvbXB1dGluZyB0aGUgdGltZW91dCBkdXJhdGlvbiBmb3IgZWFjaCBpdGVtLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gYW4gT2JzZXJ2YWJsZSB0aGUgc2FtZSBhcyBzb3VyY2UgT2JzZXJ2YWJsZSwgYnV0IGRyb3BzIGl0ZW1zLlxuICogQG1ldGhvZCBkZWJvdW5jZVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlPFQ+KGR1cmF0aW9uU2VsZWN0b3I6ICh2YWx1ZTogVCkgPT4gU3Vic2NyaWJhYmxlT3JQcm9taXNlPG51bWJlcj4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgRGVib3VuY2VPcGVyYXRvcihkdXJhdGlvblNlbGVjdG9yKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVib3VuY2VTaWduYXR1cmU8VD4ge1xuICAoZHVyYXRpb25TZWxlY3RvcjogKHZhbHVlOiBUKSA9PiBTdWJzY3JpYmFibGVPclByb21pc2U8bnVtYmVyPik6IE9ic2VydmFibGU8VD47XG59XG5cbmNsYXNzIERlYm91bmNlT3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHVyYXRpb25TZWxlY3RvcjogKHZhbHVlOiBUKSA9PiBTdWJzY3JpYmFibGVPclByb21pc2U8bnVtYmVyPikge1xuICB9XG5cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBEZWJvdW5jZVN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5kdXJhdGlvblNlbGVjdG9yKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIERlYm91bmNlU3Vic2NyaWJlcjxULCBSPiBleHRlbmRzIE91dGVyU3Vic2NyaWJlcjxULCBSPiB7XG4gIHByaXZhdGUgdmFsdWU6IFQ7XG4gIHByaXZhdGUgaGFzVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBkdXJhdGlvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxSPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkdXJhdGlvblNlbGVjdG9yOiAodmFsdWU6IFQpID0+IFN1YnNjcmliYWJsZU9yUHJvbWlzZTxudW1iZXI+KSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZHVyYXRpb25TZWxlY3Rvci5jYWxsKHRoaXMsIHZhbHVlKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLl90cnlOZXh0KHZhbHVlLCByZXN1bHQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0VmFsdWUoKTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIF90cnlOZXh0KHZhbHVlOiBULCBkdXJhdGlvbjogU3Vic2NyaWJhYmxlT3JQcm9taXNlPG51bWJlcj4pOiB2b2lkIHtcbiAgICBsZXQgc3Vic2NyaXB0aW9uID0gdGhpcy5kdXJhdGlvblN1YnNjcmlwdGlvbjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5oYXNWYWx1ZSA9IHRydWU7XG4gICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnJlbW92ZShzdWJzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIHN1YnNjcmlwdGlvbiA9IHN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIGR1cmF0aW9uKTtcbiAgICBpZiAoIXN1YnNjcmlwdGlvbi5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgdGhpcy5hZGQodGhpcy5kdXJhdGlvblN1YnNjcmlwdGlvbiA9IHN1YnNjcmlwdGlvbik7XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5TmV4dChvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBSLFxuICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgIGlubmVyU3ViOiBJbm5lclN1YnNjcmliZXI8VCwgUj4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRWYWx1ZSgpO1xuICB9XG5cbiAgbm90aWZ5Q29tcGxldGUoKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0VmFsdWUoKTtcbiAgfVxuXG4gIGVtaXRWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oYXNWYWx1ZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5kdXJhdGlvblN1YnNjcmlwdGlvbjtcbiAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kdXJhdGlvblN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnJlbW92ZShzdWJzY3JpcHRpb24pO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLmhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICBzdXBlci5fbmV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
