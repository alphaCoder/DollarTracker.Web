System.register(['../util/tryCatch', '../util/errorObject', '../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var tryCatch_1, errorObject_1, OuterSubscriber_1, subscribeToResult_1;
    var ExpandOperator, ExpandSubscriber;
    /**
     * Returns an Observable where for each item in the source Observable, the supplied function is applied to each item,
     * resulting in a new value to then be applied again with the function.
     * @param {function} project the function for projecting the next emitted item of the Observable.
     * @param {number} [concurrent] the max number of observables that can be created concurrently. defaults to infinity.
     * @param {Scheduler} [scheduler] The Scheduler to use for managing the expansions.
     * @return {Observable} an Observable containing the expansions of the source Observable.
     * @method expand
     * @owner Observable
     */
    function expand(project, concurrent, scheduler) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        if (scheduler === void 0) { scheduler = undefined; }
        concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
        return this.lift(new ExpandOperator(project, concurrent, scheduler));
    }
    exports_1("expand", expand);
    return {
        setters:[
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            ExpandOperator = (function () {
                function ExpandOperator(project, concurrent, scheduler) {
                    this.project = project;
                    this.concurrent = concurrent;
                    this.scheduler = scheduler;
                }
                ExpandOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
                };
                return ExpandOperator;
            }());
            exports_1("ExpandOperator", ExpandOperator);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ExpandSubscriber = (function (_super) {
                __extends(ExpandSubscriber, _super);
                function ExpandSubscriber(destination, project, concurrent, scheduler) {
                    _super.call(this, destination);
                    this.project = project;
                    this.concurrent = concurrent;
                    this.scheduler = scheduler;
                    this.index = 0;
                    this.active = 0;
                    this.hasCompleted = false;
                    if (concurrent < Number.POSITIVE_INFINITY) {
                        this.buffer = [];
                    }
                }
                ExpandSubscriber.dispatch = function (arg) {
                    var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
                    subscriber.subscribeToProjection(result, value, index);
                };
                ExpandSubscriber.prototype._next = function (value) {
                    var destination = this.destination;
                    if (destination.isUnsubscribed) {
                        this._complete();
                        return;
                    }
                    var index = this.index++;
                    if (this.active < this.concurrent) {
                        destination.next(value);
                        var result = tryCatch_1.tryCatch(this.project)(value, index);
                        if (result === errorObject_1.errorObject) {
                            destination.error(errorObject_1.errorObject.e);
                        }
                        else if (!this.scheduler) {
                            this.subscribeToProjection(result, value, index);
                        }
                        else {
                            var state = { subscriber: this, result: result, value: value, index: index };
                            this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
                        }
                    }
                    else {
                        this.buffer.push(value);
                    }
                };
                ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
                    this.active++;
                    this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
                };
                ExpandSubscriber.prototype._complete = function () {
                    this.hasCompleted = true;
                    if (this.hasCompleted && this.active === 0) {
                        this.destination.complete();
                    }
                };
                ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this._next(innerValue);
                };
                ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
                    var buffer = this.buffer;
                    this.remove(innerSub);
                    this.active--;
                    if (buffer && buffer.length > 0) {
                        this._next(buffer.shift());
                    }
                    if (this.hasCompleted && this.active === 0) {
                        this.destination.complete();
                    }
                };
                return ExpandSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
            exports_1("ExpandSubscriber", ExpandSubscriber);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2V4cGFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBV0E7Ozs7Ozs7OztPQVNHO0lBQ0gsZ0JBQTZCLE9BQW1ELEVBQ25ELFVBQTZDLEVBQzdDLFNBQWdDO1FBRGhDLDBCQUE2QyxHQUE3QyxhQUFxQixNQUFNLENBQUMsaUJBQWlCO1FBQzdDLHlCQUFnQyxHQUFoQyxxQkFBZ0M7UUFDM0QsVUFBVSxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDO1FBRTNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBTkQsMkJBTUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OztZQU9EO2dCQUNFLHdCQUFvQixPQUFtRCxFQUNuRCxVQUFrQixFQUNsQixTQUFvQjtvQkFGcEIsWUFBTyxHQUFQLE9BQU8sQ0FBNEM7b0JBQ25ELGVBQVUsR0FBVixVQUFVLENBQVE7b0JBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQVc7Z0JBQ3hDLENBQUM7Z0JBRUQsNkJBQUksR0FBSixVQUFLLFVBQXlCLEVBQUUsTUFBVztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM1RyxDQUFDO2dCQUNILHFCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCwyQ0FTQyxDQUFBO1lBU0Q7Ozs7ZUFJRztZQUNIO2dCQUE0QyxvQ0FBcUI7Z0JBTS9ELDBCQUFZLFdBQTBCLEVBQ2xCLE9BQW1ELEVBQ25ELFVBQWtCLEVBQ2xC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TSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzlCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxxQ0FBVSxHQUFWLFVBQVcsVUFBYSxFQUFFLFVBQWEsRUFDNUIsVUFBa0IsRUFBRSxVQUFrQixFQUN0QyxRQUErQjtvQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCx5Q0FBYyxHQUFkLFVBQWUsUUFBc0I7b0JBQ25DLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDZCxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUM3QixDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUM5QixDQUFDO2dCQUNILENBQUM7Z0JBQ0gsdUJBQUM7WUFBRCxDQTNFQSxBQTJFQyxDQTNFMkMsaUNBQWUsR0EyRTFEO1lBM0VELCtDQTJFQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2V4cGFuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1NjaGVkdWxlcn0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbmltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge3RyeUNhdGNofSBmcm9tICcuLi91dGlsL3RyeUNhdGNoJztcbmltcG9ydCB7ZXJyb3JPYmplY3R9IGZyb20gJy4uL3V0aWwvZXJyb3JPYmplY3QnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQge091dGVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vT3V0ZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7SW5uZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9Jbm5lclN1YnNjcmliZXInO1xuaW1wb3J0IHtzdWJzY3JpYmVUb1Jlc3VsdH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCc7XG5cbi8qKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHdoZXJlIGZvciBlYWNoIGl0ZW0gaW4gdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCB0aGUgc3VwcGxpZWQgZnVuY3Rpb24gaXMgYXBwbGllZCB0byBlYWNoIGl0ZW0sXG4gKiByZXN1bHRpbmcgaW4gYSBuZXcgdmFsdWUgdG8gdGhlbiBiZSBhcHBsaWVkIGFnYWluIHdpdGggdGhlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvamVjdCB0aGUgZnVuY3Rpb24gZm9yIHByb2plY3RpbmcgdGhlIG5leHQgZW1pdHRlZCBpdGVtIG9mIHRoZSBPYnNlcnZhYmxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtjb25jdXJyZW50XSB0aGUgbWF4IG51bWJlciBvZiBvYnNlcnZhYmxlcyB0aGF0IGNhbiBiZSBjcmVhdGVkIGNvbmN1cnJlbnRseS4gZGVmYXVsdHMgdG8gaW5maW5pdHkuXG4gKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gVGhlIFNjaGVkdWxlciB0byB1c2UgZm9yIG1hbmFnaW5nIHRoZSBleHBhbnNpb25zLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gYW4gT2JzZXJ2YWJsZSBjb250YWluaW5nIHRoZSBleHBhbnNpb25zIG9mIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqIEBtZXRob2QgZXhwYW5kXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kPFQsIFI+KHByb2plY3Q6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gT2JzZXJ2YWJsZTxSPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uY3VycmVudDogbnVtYmVyID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZXI6IFNjaGVkdWxlciA9IHVuZGVmaW5lZCk6IE9ic2VydmFibGU8Uj4ge1xuICBjb25jdXJyZW50ID0gKGNvbmN1cnJlbnQgfHwgMCkgPCAxID8gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZIDogY29uY3VycmVudDtcblxuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBFeHBhbmRPcGVyYXRvcihwcm9qZWN0LCBjb25jdXJyZW50LCBzY2hlZHVsZXIpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHBhbmRTaWduYXR1cmU8VD4ge1xuICAocHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBPYnNlcnZhYmxlPFQ+LCBjb25jdXJyZW50PzogbnVtYmVyLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQ+O1xuICA8Uj4ocHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBPYnNlcnZhYmxlPFI+LCBjb25jdXJyZW50PzogbnVtYmVyLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFI+O1xufVxuXG5leHBvcnQgY2xhc3MgRXhwYW5kT3BlcmF0b3I8VCwgUj4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBSPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBPYnNlcnZhYmxlPFI+LFxuICAgICAgICAgICAgICBwcml2YXRlIGNvbmN1cnJlbnQ6IG51bWJlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzY2hlZHVsZXI6IFNjaGVkdWxlcikge1xuICB9XG5cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFI+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBFeHBhbmRTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJvamVjdCwgdGhpcy5jb25jdXJyZW50LCB0aGlzLnNjaGVkdWxlcikpO1xuICB9XG59XG5cbmludGVyZmFjZSBEaXNwYXRjaEFyZzxULCBSPiB7XG4gIHN1YnNjcmliZXI6IEV4cGFuZFN1YnNjcmliZXI8VCwgUj47XG4gIHJlc3VsdDogT2JzZXJ2YWJsZTxSPjtcbiAgdmFsdWU6IGFueTtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmV4cG9ydCBjbGFzcyBFeHBhbmRTdWJzY3JpYmVyPFQsIFI+IGV4dGVuZHMgT3V0ZXJTdWJzY3JpYmVyPFQsIFI+IHtcbiAgcHJpdmF0ZSBpbmRleDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBhY3RpdmU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgaGFzQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgYnVmZmVyOiBhbnlbXTtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxSPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IE9ic2VydmFibGU8Uj4sXG4gICAgICAgICAgICAgIHByaXZhdGUgY29uY3VycmVudDogbnVtYmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIGlmIChjb25jdXJyZW50IDwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSB7XG4gICAgICB0aGlzLmJ1ZmZlciA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGRpc3BhdGNoPFQsIFI+KGFyZzogRGlzcGF0Y2hBcmc8VCwgUj4pOiB2b2lkIHtcbiAgICBjb25zdCB7c3Vic2NyaWJlciwgcmVzdWx0LCB2YWx1ZSwgaW5kZXh9ID0gYXJnO1xuICAgIHN1YnNjcmliZXIuc3Vic2NyaWJlVG9Qcm9qZWN0aW9uKHJlc3VsdCwgdmFsdWUsIGluZGV4KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuXG4gICAgaWYgKGRlc3RpbmF0aW9uLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICB0aGlzLl9jb21wbGV0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleCsrO1xuICAgIGlmICh0aGlzLmFjdGl2ZSA8IHRoaXMuY29uY3VycmVudCkge1xuICAgICAgZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgICBsZXQgcmVzdWx0ID0gdHJ5Q2F0Y2godGhpcy5wcm9qZWN0KSh2YWx1ZSwgaW5kZXgpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmplY3QpIHtcbiAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyb3JPYmplY3QuZSk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnNjaGVkdWxlcikge1xuICAgICAgICB0aGlzLnN1YnNjcmliZVRvUHJvamVjdGlvbihyZXN1bHQsIHZhbHVlLCBpbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGF0ZTogRGlzcGF0Y2hBcmc8VCwgUj4gPSB7IHN1YnNjcmliZXI6IHRoaXMsIHJlc3VsdCwgdmFsdWUsIGluZGV4IH07XG4gICAgICAgIHRoaXMuYWRkKHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlKEV4cGFuZFN1YnNjcmliZXIuZGlzcGF0Y2gsIDAsIHN0YXRlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVmZmVyLnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9Qcm9qZWN0aW9uKHJlc3VsdDogYW55LCB2YWx1ZTogVCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlKys7XG4gICAgdGhpcy5hZGQoc3Vic2NyaWJlVG9SZXN1bHQ8VCwgUj4odGhpcywgcmVzdWx0LCB2YWx1ZSwgaW5kZXgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKTogdm9pZCB7XG4gICAgdGhpcy5oYXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmhhc0NvbXBsZXRlZCAmJiB0aGlzLmFjdGl2ZSA9PT0gMCkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5vdGlmeU5leHQob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogUixcbiAgICAgICAgICAgICBvdXRlckluZGV4OiBudW1iZXIsIGlubmVySW5kZXg6IG51bWJlcixcbiAgICAgICAgICAgICBpbm5lclN1YjogSW5uZXJTdWJzY3JpYmVyPFQsIFI+KTogdm9pZCB7XG4gICAgdGhpcy5fbmV4dChpbm5lclZhbHVlKTtcbiAgfVxuXG4gIG5vdGlmeUNvbXBsZXRlKGlubmVyU3ViOiBTdWJzY3JpcHRpb24pOiB2b2lkIHtcbiAgICBjb25zdCBidWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICB0aGlzLnJlbW92ZShpbm5lclN1Yik7XG4gICAgdGhpcy5hY3RpdmUtLTtcbiAgICBpZiAoYnVmZmVyICYmIGJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9uZXh0KGJ1ZmZlci5zaGlmdCgpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGFzQ29tcGxldGVkICYmIHRoaXMuYWN0aXZlID09PSAwKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
