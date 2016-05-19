System.register(['../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1, subscribeToResult_1;
    var SkipUntilOperator, SkipUntilSubscriber;
    /**
     * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
     *
     * <img src="./img/skipUntil.png" width="100%">
     *
     * @param {Observable} the second Observable that has to emit an item before the source Observable's elements begin to
     * be mirrored by the resulting Observable.
     * @return {Observable<T>} an Observable that skips items from the source Observable until the second Observable emits
     * an item, then emits the remaining items.
     * @method skipUntil
     * @owner Observable
     */
    function skipUntil(notifier) {
        return this.lift(new SkipUntilOperator(notifier));
    }
    exports_1("skipUntil", skipUntil);
    return {
        setters:[
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            SkipUntilOperator = (function () {
                function SkipUntilOperator(notifier) {
                    this.notifier = notifier;
                }
                SkipUntilOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
                };
                return SkipUntilOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SkipUntilSubscriber = (function (_super) {
                __extends(SkipUntilSubscriber, _super);
                function SkipUntilSubscriber(destination, notifier) {
                    _super.call(this, destination);
                    this.hasValue = false;
                    this.isInnerStopped = false;
                    this.add(subscribeToResult_1.subscribeToResult(this, notifier));
                }
                SkipUntilSubscriber.prototype._next = function (value) {
                    if (this.hasValue) {
                        _super.prototype._next.call(this, value);
                    }
                };
                SkipUntilSubscriber.prototype._complete = function () {
                    if (this.isInnerStopped) {
                        _super.prototype._complete.call(this);
                    }
                    else {
                        this.unsubscribe();
                    }
                };
                SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.hasValue = true;
                };
                SkipUntilSubscriber.prototype.notifyComplete = function () {
                    this.isInnerStopped = true;
                    if (this.isStopped) {
                        _super.prototype._complete.call(this);
                    }
                };
                return SkipUntilSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3NraXBVbnRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBUUE7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxtQkFBNkIsUUFBeUI7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFGRCxpQ0FFQyxDQUFBOzs7Ozs7Ozs7O1lBTUQ7Z0JBQ0UsMkJBQW9CLFFBQXlCO29CQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtnQkFDN0MsQ0FBQztnQkFFRCxnQ0FBSSxHQUFKLFVBQUssVUFBeUIsRUFBRSxNQUFXO29CQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDL0UsQ0FBQztnQkFDSCx3QkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUF3Qyx1Q0FBcUI7Z0JBSzNELDZCQUFZLFdBQTRCLEVBQzVCLFFBQXlCO29CQUNuQyxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFMYixhQUFRLEdBQVksS0FBSyxDQUFDO29CQUMxQixtQkFBYyxHQUFZLEtBQUssQ0FBQztvQkFLdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFUyxtQ0FBSyxHQUFmLFVBQWdCLEtBQVE7b0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixnQkFBSyxDQUFDLEtBQUssWUFBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsQ0FBQztnQkFDSCxDQUFDO2dCQUVTLHVDQUFTLEdBQW5CO29CQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixnQkFBSyxDQUFDLFNBQVMsV0FBRSxDQUFDO29CQUNwQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDckIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELHdDQUFVLEdBQVYsVUFBVyxVQUFhLEVBQUUsVUFBYSxFQUM1QixVQUFrQixFQUFFLFVBQWtCLEVBQ3RDLFFBQStCO29CQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCw0Q0FBYyxHQUFkO29CQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsZ0JBQUssQ0FBQyxTQUFTLFdBQUUsQ0FBQztvQkFDcEIsQ0FBQztnQkFDSCxDQUFDO2dCQUNILDBCQUFDO1lBQUQsQ0FyQ0EsQUFxQ0MsQ0FyQ3VDLGlDQUFlLEdBcUN0RCIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9za2lwVW50aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcblxuaW1wb3J0IHtPdXRlclN1YnNjcmliZXJ9IGZyb20gJy4uL091dGVyU3Vic2NyaWJlcic7XG5pbXBvcnQge0lubmVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vSW5uZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7c3Vic2NyaWJlVG9SZXN1bHR9IGZyb20gJy4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQnO1xuXG4vKipcbiAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IHNraXBzIGl0ZW1zIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHVudGlsIGEgc2Vjb25kIE9ic2VydmFibGUgZW1pdHMgYW4gaXRlbS5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3NraXBVbnRpbC5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBAcGFyYW0ge09ic2VydmFibGV9IHRoZSBzZWNvbmQgT2JzZXJ2YWJsZSB0aGF0IGhhcyB0byBlbWl0IGFuIGl0ZW0gYmVmb3JlIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSdzIGVsZW1lbnRzIGJlZ2luIHRvXG4gKiBiZSBtaXJyb3JlZCBieSB0aGUgcmVzdWx0aW5nIE9ic2VydmFibGUuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFQ+fSBhbiBPYnNlcnZhYmxlIHRoYXQgc2tpcHMgaXRlbXMgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUgdW50aWwgdGhlIHNlY29uZCBPYnNlcnZhYmxlIGVtaXRzXG4gKiBhbiBpdGVtLCB0aGVuIGVtaXRzIHRoZSByZW1haW5pbmcgaXRlbXMuXG4gKiBAbWV0aG9kIHNraXBVbnRpbFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNraXBVbnRpbDxUPihub3RpZmllcjogT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiB0aGlzLmxpZnQobmV3IFNraXBVbnRpbE9wZXJhdG9yKG5vdGlmaWVyKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2tpcFVudGlsU2lnbmF0dXJlPFQ+IHtcbiAgKG5vdGlmaWVyOiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPFQ+O1xufVxuXG5jbGFzcyBTa2lwVW50aWxPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmllcjogT2JzZXJ2YWJsZTxhbnk+KSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFNraXBVbnRpbFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5ub3RpZmllcikpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBTa2lwVW50aWxTdWJzY3JpYmVyPFQsIFI+IGV4dGVuZHMgT3V0ZXJTdWJzY3JpYmVyPFQsIFI+IHtcblxuICBwcml2YXRlIGhhc1ZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgaXNJbm5lclN0b3BwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxhbnk+LFxuICAgICAgICAgICAgICBub3RpZmllcjogT2JzZXJ2YWJsZTxhbnk+KSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMuYWRkKHN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIG5vdGlmaWVyKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpIHtcbiAgICBpZiAodGhpcy5oYXNWYWx1ZSkge1xuICAgICAgc3VwZXIuX25leHQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKSB7XG4gICAgaWYgKHRoaXMuaXNJbm5lclN0b3BwZWQpIHtcbiAgICAgIHN1cGVyLl9jb21wbGV0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5TmV4dChvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBSLFxuICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgIGlubmVyU3ViOiBJbm5lclN1YnNjcmliZXI8VCwgUj4pOiB2b2lkIHtcbiAgICB0aGlzLmhhc1ZhbHVlID0gdHJ1ZTtcbiAgfVxuXG4gIG5vdGlmeUNvbXBsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMuaXNJbm5lclN0b3BwZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgc3VwZXIuX2NvbXBsZXRlKCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
