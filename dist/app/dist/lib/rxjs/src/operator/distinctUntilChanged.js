System.register(['../Subscriber', '../util/tryCatch', '../util/errorObject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, tryCatch_1, errorObject_1;
    var DistinctUntilChangedOperator, DistinctUntilChangedSubscriber;
    /**
     * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
     * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
     * If a comparator function is not provided, an equality check is used by default.
     * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
     * @return {Observable} an Observable that emits items from the source Observable with distinct values.
     * @method distinctUntilChanged
     * @owner Observable
     */
    function distinctUntilChanged(compare, keySelector) {
        return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
    }
    exports_1("distinctUntilChanged", distinctUntilChanged);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            }],
        execute: function() {
            DistinctUntilChangedOperator = (function () {
                function DistinctUntilChangedOperator(compare, keySelector) {
                    this.compare = compare;
                    this.keySelector = keySelector;
                }
                DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
                };
                return DistinctUntilChangedOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            DistinctUntilChangedSubscriber = (function (_super) {
                __extends(DistinctUntilChangedSubscriber, _super);
                function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
                    _super.call(this, destination);
                    this.keySelector = keySelector;
                    this.hasKey = false;
                    if (typeof compare === 'function') {
                        this.compare = compare;
                    }
                }
                DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
                    return x === y;
                };
                DistinctUntilChangedSubscriber.prototype._next = function (value) {
                    var keySelector = this.keySelector;
                    var key = value;
                    if (keySelector) {
                        key = tryCatch_1.tryCatch(this.keySelector)(value);
                        if (key === errorObject_1.errorObject) {
                            return this.destination.error(errorObject_1.errorObject.e);
                        }
                    }
                    var result = false;
                    if (this.hasKey) {
                        result = tryCatch_1.tryCatch(this.compare)(this.key, key);
                        if (result === errorObject_1.errorObject) {
                            return this.destination.error(errorObject_1.errorObject.e);
                        }
                    }
                    else {
                        this.hasKey = true;
                    }
                    if (Boolean(result) === false) {
                        this.key = key;
                        this.destination.next(value);
                    }
                };
                return DistinctUntilChangedSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFNQTs7Ozs7Ozs7T0FRRztJQUNILDhCQUEyQyxPQUFpQyxFQUFFLFdBQXlCO1FBQ3JHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksNEJBQTRCLENBQU8sT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUZELHVEQUVDLENBQUE7Ozs7Ozs7Ozs7Ozs7WUFPRDtnQkFDRSxzQ0FBb0IsT0FBZ0MsRUFDaEMsV0FBd0I7b0JBRHhCLFlBQU8sR0FBUCxPQUFPLENBQXlCO29CQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtnQkFDNUMsQ0FBQztnQkFFRCwyQ0FBSSxHQUFKLFVBQUssVUFBeUIsRUFBRSxNQUFXO29CQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLDhCQUE4QixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUMzRyxDQUFDO2dCQUNILG1DQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQW1ELGtEQUFhO2dCQUk5RCx3Q0FBWSxXQUEwQixFQUMxQixPQUFnQyxFQUN4QixXQUF3QjtvQkFDMUMsa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBREQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBSnBDLFdBQU0sR0FBWSxLQUFLLENBQUM7b0JBTTlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN6QixDQUFDO2dCQUNILENBQUM7Z0JBRU8sZ0RBQU8sR0FBZixVQUFnQixDQUFNLEVBQUUsQ0FBTTtvQkFDNUIsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRVMsOENBQUssR0FBZixVQUFnQixLQUFRO29CQUV0QixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNyQyxJQUFJLEdBQUcsR0FBUSxLQUFLLENBQUM7b0JBRXJCLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLEdBQUcsR0FBRyxtQkFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDeEMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzRCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMseUJBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0MsQ0FBQztvQkFDSCxDQUFDO29CQUVELElBQUksTUFBTSxHQUFRLEtBQUssQ0FBQztvQkFFeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLE1BQU0sR0FBRyxtQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUMvQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUsseUJBQVcsQ0FBQyxDQUFDLENBQUM7NEJBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyx5QkFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQyxDQUFDO29CQUNILENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ3JCLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzlCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO3dCQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMvQixDQUFDO2dCQUNILENBQUM7Z0JBQ0gscUNBQUM7WUFBRCxDQTdDQSxBQTZDQyxDQTdDa0QsdUJBQVUsR0E2QzVEIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7dHJ5Q2F0Y2h9IGZyb20gJy4uL3V0aWwvdHJ5Q2F0Y2gnO1xuaW1wb3J0IHtlcnJvck9iamVjdH0gZnJvbSAnLi4vdXRpbC9lcnJvck9iamVjdCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuXG4vKipcbiAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGFsbCBpdGVtcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB0aGF0IGFyZSBkaXN0aW5jdCBieSBjb21wYXJpc29uIGZyb20gdGhlIHByZXZpb3VzIGl0ZW0uXG4gKiBJZiBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHRoZW4gaXQgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2ggaXRlbSB0byB0ZXN0IGZvciB3aGV0aGVyIG9yIG5vdCB0aGF0IHZhbHVlIHNob3VsZCBiZSBlbWl0dGVkLlxuICogSWYgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIGlzIG5vdCBwcm92aWRlZCwgYW4gZXF1YWxpdHkgY2hlY2sgaXMgdXNlZCBieSBkZWZhdWx0LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2NvbXBhcmVdIG9wdGlvbmFsIGNvbXBhcmlzb24gZnVuY3Rpb24gY2FsbGVkIHRvIHRlc3QgaWYgYW4gaXRlbSBpcyBkaXN0aW5jdCBmcm9tIHRoZSBwcmV2aW91cyBpdGVtIGluIHRoZSBzb3VyY2UuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgaXRlbXMgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUgd2l0aCBkaXN0aW5jdCB2YWx1ZXMuXG4gKiBAbWV0aG9kIGRpc3RpbmN0VW50aWxDaGFuZ2VkXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGluY3RVbnRpbENoYW5nZWQ8VCwgSz4oY29tcGFyZT86ICh4OiBLLCB5OiBLKSA9PiBib29sZWFuLCBrZXlTZWxlY3Rvcj86ICh4OiBUKSA9PiBLKTogT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiB0aGlzLmxpZnQobmV3IERpc3RpbmN0VW50aWxDaGFuZ2VkT3BlcmF0b3I8VCwgSz4oY29tcGFyZSwga2V5U2VsZWN0b3IpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXN0aW5jdFVudGlsQ2hhbmdlZFNpZ25hdHVyZTxUPiB7XG4gKGNvbXBhcmU/OiAoeDogVCwgeTogVCkgPT4gYm9vbGVhbik6IE9ic2VydmFibGU8VD47XG4gPEs+KGNvbXBhcmU6ICh4OiBLLCB5OiBLKSA9PiBib29sZWFuLCBrZXlTZWxlY3RvcjogKHg6IFQpID0+IEspOiBPYnNlcnZhYmxlPFQ+O1xufVxuXG5jbGFzcyBEaXN0aW5jdFVudGlsQ2hhbmdlZE9wZXJhdG9yPFQsIEs+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgVD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBhcmU6ICh4OiBLLCB5OiBLKSA9PiBib29sZWFuLFxuICAgICAgICAgICAgICBwcml2YXRlIGtleVNlbGVjdG9yOiAoeDogVCkgPT4gSykge1xuICB9XG5cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBEaXN0aW5jdFVudGlsQ2hhbmdlZFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5jb21wYXJlLCB0aGlzLmtleVNlbGVjdG9yKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIERpc3RpbmN0VW50aWxDaGFuZ2VkU3Vic2NyaWJlcjxULCBLPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBwcml2YXRlIGtleTogSztcbiAgcHJpdmF0ZSBoYXNLZXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxUPixcbiAgICAgICAgICAgICAgY29tcGFyZTogKHg6IEssIHk6IEspID0+IGJvb2xlYW4sXG4gICAgICAgICAgICAgIHByaXZhdGUga2V5U2VsZWN0b3I6ICh4OiBUKSA9PiBLKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIGlmICh0eXBlb2YgY29tcGFyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5jb21wYXJlID0gY29tcGFyZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbXBhcmUoeDogYW55LCB5OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4geCA9PT0geTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuXG4gICAgY29uc3Qga2V5U2VsZWN0b3IgPSB0aGlzLmtleVNlbGVjdG9yO1xuICAgIGxldCBrZXk6IGFueSA9IHZhbHVlO1xuXG4gICAgaWYgKGtleVNlbGVjdG9yKSB7XG4gICAgICBrZXkgPSB0cnlDYXRjaCh0aGlzLmtleVNlbGVjdG9yKSh2YWx1ZSk7XG4gICAgICBpZiAoa2V5ID09PSBlcnJvck9iamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnJvck9iamVjdC5lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0OiBhbnkgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmhhc0tleSkge1xuICAgICAgcmVzdWx0ID0gdHJ5Q2F0Y2godGhpcy5jb21wYXJlKSh0aGlzLmtleSwga2V5KTtcbiAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycm9yT2JqZWN0LmUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhc0tleSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKEJvb2xlYW4ocmVzdWx0KSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
