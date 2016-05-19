System.register(['../util/tryCatch', '../util/errorObject', '../util/subscribeToResult', '../OuterSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var tryCatch_1, errorObject_1, subscribeToResult_1, OuterSubscriber_1;
    var MergeScanOperator, MergeScanSubscriber;
    /**
     * @param project
     * @param seed
     * @param concurrent
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method mergeScan
     * @owner Observable
     */
    function mergeScan(project, seed, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        return this.lift(new MergeScanOperator(project, seed, concurrent));
    }
    exports_1("mergeScan", mergeScan);
    return {
        setters:[
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            }],
        execute: function() {
            MergeScanOperator = (function () {
                function MergeScanOperator(project, seed, concurrent) {
                    this.project = project;
                    this.seed = seed;
                    this.concurrent = concurrent;
                }
                MergeScanOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new MergeScanSubscriber(subscriber, this.project, this.seed, this.concurrent));
                };
                return MergeScanOperator;
            }());
            exports_1("MergeScanOperator", MergeScanOperator);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            MergeScanSubscriber = (function (_super) {
                __extends(MergeScanSubscriber, _super);
                function MergeScanSubscriber(destination, project, acc, concurrent) {
                    _super.call(this, destination);
                    this.project = project;
                    this.acc = acc;
                    this.concurrent = concurrent;
                    this.hasValue = false;
                    this.hasCompleted = false;
                    this.buffer = [];
                    this.active = 0;
                    this.index = 0;
                }
                MergeScanSubscriber.prototype._next = function (value) {
                    if (this.active < this.concurrent) {
                        var index = this.index++;
                        var ish = tryCatch_1.tryCatch(this.project)(this.acc, value);
                        var destination = this.destination;
                        if (ish === errorObject_1.errorObject) {
                            destination.error(errorObject_1.errorObject.e);
                        }
                        else {
                            this.active++;
                            this._innerSub(ish, value, index);
                        }
                    }
                    else {
                        this.buffer.push(value);
                    }
                };
                MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
                    this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
                };
                MergeScanSubscriber.prototype._complete = function () {
                    this.hasCompleted = true;
                    if (this.active === 0 && this.buffer.length === 0) {
                        if (this.hasValue === false) {
                            this.destination.next(this.acc);
                        }
                        this.destination.complete();
                    }
                };
                MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    var destination = this.destination;
                    this.acc = innerValue;
                    this.hasValue = true;
                    destination.next(innerValue);
                };
                MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
                    var buffer = this.buffer;
                    this.remove(innerSub);
                    this.active--;
                    if (buffer.length > 0) {
                        this._next(buffer.shift());
                    }
                    else if (this.active === 0 && this.hasCompleted) {
                        if (this.hasValue === false) {
                            this.destination.next(this.acc);
                        }
                        this.destination.complete();
                    }
                };
                return MergeScanSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
            exports_1("MergeScanSubscriber", MergeScanSubscriber);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL21lcmdlU2Nhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBVUE7Ozs7Ozs7T0FPRztJQUNILG1CQUFnQyxPQUE0QyxFQUM1QyxJQUFPLEVBQ1AsVUFBNkM7UUFBN0MsMEJBQTZDLEdBQTdDLGFBQXFCLE1BQU0sQ0FBQyxpQkFBaUI7UUFDM0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUpELGlDQUlDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNRDtnQkFDRSwyQkFBb0IsT0FBNEMsRUFDNUMsSUFBTyxFQUNQLFVBQWtCO29CQUZsQixZQUFPLEdBQVAsT0FBTyxDQUFxQztvQkFDNUMsU0FBSSxHQUFKLElBQUksQ0FBRztvQkFDUCxlQUFVLEdBQVYsVUFBVSxDQUFRO2dCQUN0QyxDQUFDO2dCQUVELGdDQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksbUJBQW1CLENBQzlDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FDckQsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0gsd0JBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELGlEQVdDLENBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQStDLHVDQUFxQjtnQkFPbEUsNkJBQVksV0FBMEIsRUFDbEIsT0FBNEMsRUFDNUMsR0FBTSxFQUNOLFVBQWtCO29CQUNwQyxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFIRCxZQUFPLEdBQVAsT0FBTyxDQUFxQztvQkFDNUMsUUFBRyxHQUFILEdBQUcsQ0FBRztvQkFDTixlQUFVLEdBQVYsVUFBVSxDQUFRO29C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QyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3dCQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDbEMsQ0FBQzt3QkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUM5QixDQUFDO2dCQUNILENBQUM7Z0JBQ0gsMEJBQUM7WUFBRCxDQWxFQSxBQWtFQyxDQWxFOEMsaUNBQWUsR0FrRTdEO1lBbEVELHFEQWtFQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL21lcmdlU2Nhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQge3RyeUNhdGNofSBmcm9tICcuLi91dGlsL3RyeUNhdGNoJztcbmltcG9ydCB7ZXJyb3JPYmplY3R9IGZyb20gJy4uL3V0aWwvZXJyb3JPYmplY3QnO1xuaW1wb3J0IHtzdWJzY3JpYmVUb1Jlc3VsdH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCc7XG5pbXBvcnQge091dGVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vT3V0ZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7SW5uZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9Jbm5lclN1YnNjcmliZXInO1xuXG4vKipcbiAqIEBwYXJhbSBwcm9qZWN0XG4gKiBAcGFyYW0gc2VlZFxuICogQHBhcmFtIGNvbmN1cnJlbnRcbiAqIEByZXR1cm4ge09ic2VydmFibGU8Uj58V2ViU29ja2V0U3ViamVjdDxUPnxPYnNlcnZhYmxlPFQ+fVxuICogQG1ldGhvZCBtZXJnZVNjYW5cbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVNjYW48VCwgUj4ocHJvamVjdDogKGFjYzogUiwgdmFsdWU6IFQpID0+IE9ic2VydmFibGU8Uj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZWQ6IFIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmN1cnJlbnQ6IG51bWJlciA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSk6IE9ic2VydmFibGU8Uj4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBNZXJnZVNjYW5PcGVyYXRvcihwcm9qZWN0LCBzZWVkLCBjb25jdXJyZW50KSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVyZ2VTY2FuU2lnbmF0dXJlPFQ+IHtcbiAgPFI+KHByb2plY3Q6IChhY2M6IFIsIHZhbHVlOiBUKSA9PiBPYnNlcnZhYmxlPFI+LCBzZWVkOiBSLCBjb25jdXJyZW50PzogbnVtYmVyKTogT2JzZXJ2YWJsZTxSPjtcbn1cblxuZXhwb3J0IGNsYXNzIE1lcmdlU2Nhbk9wZXJhdG9yPFQsIFI+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgUj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2plY3Q6IChhY2M6IFIsIHZhbHVlOiBUKSA9PiBPYnNlcnZhYmxlPFI+LFxuICAgICAgICAgICAgICBwcml2YXRlIHNlZWQ6IFIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29uY3VycmVudDogbnVtYmVyKSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Uj4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IE1lcmdlU2NhblN1YnNjcmliZXIoXG4gICAgICBzdWJzY3JpYmVyLCB0aGlzLnByb2plY3QsIHRoaXMuc2VlZCwgdGhpcy5jb25jdXJyZW50XG4gICAgKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmV4cG9ydCBjbGFzcyBNZXJnZVNjYW5TdWJzY3JpYmVyPFQsIFI+IGV4dGVuZHMgT3V0ZXJTdWJzY3JpYmVyPFQsIFI+IHtcbiAgcHJpdmF0ZSBoYXNWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGhhc0NvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGJ1ZmZlcjogT2JzZXJ2YWJsZTxhbnk+W10gPSBbXTtcbiAgcHJpdmF0ZSBhY3RpdmU6IG51bWJlciA9IDA7XG4gIHByb3RlY3RlZCBpbmRleDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxSPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwcm9qZWN0OiAoYWNjOiBSLCB2YWx1ZTogVCkgPT4gT2JzZXJ2YWJsZTxSPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhY2M6IFIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29uY3VycmVudDogbnVtYmVyKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmUgPCB0aGlzLmNvbmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleCsrO1xuICAgICAgY29uc3QgaXNoID0gdHJ5Q2F0Y2godGhpcy5wcm9qZWN0KSh0aGlzLmFjYywgdmFsdWUpO1xuICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgaWYgKGlzaCA9PT0gZXJyb3JPYmplY3QpIHtcbiAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyb3JPYmplY3QuZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2ZSsrO1xuICAgICAgICB0aGlzLl9pbm5lclN1Yihpc2gsIHZhbHVlLCBpbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVmZmVyLnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lubmVyU3ViKGlzaDogYW55LCB2YWx1ZTogVCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWRkKHN1YnNjcmliZVRvUmVzdWx0PFQsIFI+KHRoaXMsIGlzaCwgdmFsdWUsIGluZGV4KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMuaGFzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5hY3RpdmUgPT09IDAgJiYgdGhpcy5idWZmZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAodGhpcy5oYXNWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHRoaXMuYWNjKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBub3RpZnlOZXh0KG91dGVyVmFsdWU6IFQsIGlubmVyVmFsdWU6IFIsXG4gICAgICAgICAgICAgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIsXG4gICAgICAgICAgICAgaW5uZXJTdWI6IElubmVyU3Vic2NyaWJlcjxULCBSPik6IHZvaWQge1xuICAgIGNvbnN0IHsgZGVzdGluYXRpb24gfSA9IHRoaXM7XG4gICAgdGhpcy5hY2MgPSBpbm5lclZhbHVlO1xuICAgIHRoaXMuaGFzVmFsdWUgPSB0cnVlO1xuICAgIGRlc3RpbmF0aW9uLm5leHQoaW5uZXJWYWx1ZSk7XG4gIH1cblxuICBub3RpZnlDb21wbGV0ZShpbm5lclN1YjogU3Vic2NyaXB0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgdGhpcy5yZW1vdmUoaW5uZXJTdWIpO1xuICAgIHRoaXMuYWN0aXZlLS07XG4gICAgaWYgKGJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9uZXh0KGJ1ZmZlci5zaGlmdCgpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlID09PSAwICYmIHRoaXMuaGFzQ29tcGxldGVkKSB7XG4gICAgICBpZiAodGhpcy5oYXNWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHRoaXMuYWNjKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
