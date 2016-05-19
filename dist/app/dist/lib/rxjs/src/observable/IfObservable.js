System.register(['../Observable', '../util/subscribeToResult', '../OuterSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, subscribeToResult_1, OuterSubscriber_1;
    var IfObservable, IfSubscriber;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            IfObservable = (function (_super) {
                __extends(IfObservable, _super);
                function IfObservable(condition, thenSource, elseSource) {
                    _super.call(this);
                    this.condition = condition;
                    this.thenSource = thenSource;
                    this.elseSource = elseSource;
                }
                IfObservable.create = function (condition, thenSource, elseSource) {
                    return new IfObservable(condition, thenSource, elseSource);
                };
                IfObservable.prototype._subscribe = function (subscriber) {
                    var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
                    return new IfSubscriber(subscriber, condition, thenSource, elseSource);
                };
                return IfObservable;
            }(Observable_1.Observable));
            exports_1("IfObservable", IfObservable);
            IfSubscriber = (function (_super) {
                __extends(IfSubscriber, _super);
                function IfSubscriber(destination, condition, thenSource, elseSource) {
                    _super.call(this, destination);
                    this.condition = condition;
                    this.thenSource = thenSource;
                    this.elseSource = elseSource;
                    this.tryIf();
                }
                IfSubscriber.prototype.tryIf = function () {
                    var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
                    var result;
                    try {
                        result = condition();
                        var source = result ? thenSource : elseSource;
                        if (source) {
                            this.add(subscribeToResult_1.subscribeToResult(this, source));
                        }
                        else {
                            this._complete();
                        }
                    }
                    catch (err) {
                        this._error(err);
                    }
                };
                return IfSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvSWZPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTs7OztlQUlHO1lBQ0g7Z0JBQXdDLGdDQUFhO2dCQVFuRCxzQkFBb0IsU0FBK0IsRUFDL0IsVUFBNEMsRUFDNUMsVUFBNEM7b0JBQzlELGlCQUFPLENBQUM7b0JBSFUsY0FBUyxHQUFULFNBQVMsQ0FBc0I7b0JBQy9CLGVBQVUsR0FBVixVQUFVLENBQWtDO29CQUM1QyxlQUFVLEdBQVYsVUFBVSxDQUFrQztnQkFFaEUsQ0FBQztnQkFWTSxtQkFBTSxHQUFiLFVBQW9CLFNBQStCLEVBQy9CLFVBQTRDLEVBQzVDLFVBQTRDO29CQUM5RCxNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFRUyxpQ0FBVSxHQUFwQixVQUFxQixVQUEyQjtvQkFDOUMsSUFBQSxTQUFrRCxFQUExQyx3QkFBUyxFQUFFLDBCQUFVLEVBQUUsMEJBQVUsQ0FBVTtvQkFFbkQsTUFBTSxDQUFDLElBQUksWUFBWSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUN6RSxDQUFDO2dCQUNILG1CQUFDO1lBQUQsQ0FuQkEsQUFtQkMsQ0FuQnVDLHVCQUFVLEdBbUJqRDtZQW5CRCx1Q0FtQkMsQ0FBQTtZQUVEO2dCQUFpQyxnQ0FBcUI7Z0JBQ3BELHNCQUFZLFdBQTBCLEVBQ2xCLFNBQStCLEVBQy9CLFVBQTRDLEVBQzVDLFVBQTRDO29CQUM5RCxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFIRCxjQUFTLEdBQVQsU0FBUyxDQUFzQjtvQkFDL0IsZUFBVSxHQUFWLFVBQVUsQ0FBa0M7b0JBQzVDLGVBQVUsR0FBVixVQUFVLENBQWtDO29CQUU5RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2YsQ0FBQztnQkFFTyw0QkFBSyxHQUFiO29CQUNFLElBQUEsU0FBa0QsRUFBMUMsd0JBQVMsRUFBRSwwQkFBVSxFQUFFLDBCQUFVLENBQVU7b0JBRW5ELElBQUksTUFBZSxDQUFDO29CQUNwQixJQUFJLENBQUM7d0JBQ0gsTUFBTSxHQUFZLFNBQVMsRUFBRSxDQUFDO3dCQUM5QixJQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQzt3QkFFaEQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLHFDQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUM1QyxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDbkIsQ0FBQztvQkFDSCxDQUFFO29CQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkIsQ0FBQztnQkFDSCxDQUFDO2dCQUNILG1CQUFDO1lBQUQsQ0ExQkEsQUEwQkMsQ0ExQmdDLGlDQUFlLEdBMEIvQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vYnNlcnZhYmxlL0lmT2JzZXJ2YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaWJhYmxlT3JQcm9taXNlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge1RlYXJkb3duTG9naWN9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5cbmltcG9ydCB7c3Vic2NyaWJlVG9SZXN1bHR9IGZyb20gJy4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQnO1xuaW1wb3J0IHtPdXRlclN1YnNjcmliZXJ9IGZyb20gJy4uL091dGVyU3Vic2NyaWJlcic7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqIEBoaWRlIHRydWVcbiAqL1xuZXhwb3J0IGNsYXNzIElmT2JzZXJ2YWJsZTxULCBSPiBleHRlbmRzIE9ic2VydmFibGU8VD4ge1xuXG4gIHN0YXRpYyBjcmVhdGU8VCwgUj4oY29uZGl0aW9uOiAoKSA9PiBib29sZWFuIHwgdm9pZCxcbiAgICAgICAgICAgICAgICAgICAgICB0aGVuU291cmNlPzogU3Vic2NyaWJhYmxlT3JQcm9taXNlPFQ+IHwgdm9pZCxcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlU291cmNlPzogU3Vic2NyaWJhYmxlT3JQcm9taXNlPFI+IHwgdm9pZCk6IE9ic2VydmFibGU8VHxSPiB7XG4gICAgcmV0dXJuIG5ldyBJZk9ic2VydmFibGUoY29uZGl0aW9uLCB0aGVuU291cmNlLCBlbHNlU291cmNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZGl0aW9uOiAoKSA9PiBib29sZWFuIHwgdm9pZCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0aGVuU291cmNlPzogU3Vic2NyaWJhYmxlT3JQcm9taXNlPFQ+IHwgdm9pZCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbHNlU291cmNlPzogU3Vic2NyaWJhYmxlT3JQcm9taXNlPFI+IHwgdm9pZCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFR8Uj4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICBjb25zdCB7IGNvbmRpdGlvbiwgdGhlblNvdXJjZSwgZWxzZVNvdXJjZSB9ID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgSWZTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGNvbmRpdGlvbiwgdGhlblNvdXJjZSwgZWxzZVNvdXJjZSk7XG4gIH1cbn1cblxuY2xhc3MgSWZTdWJzY3JpYmVyPFQsIFI+IGV4dGVuZHMgT3V0ZXJTdWJzY3JpYmVyPFQsIFQ+IHtcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8VD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgY29uZGl0aW9uOiAoKSA9PiBib29sZWFuIHwgdm9pZCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0aGVuU291cmNlPzogU3Vic2NyaWJhYmxlT3JQcm9taXNlPFQ+IHwgdm9pZCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbHNlU291cmNlPzogU3Vic2NyaWJhYmxlT3JQcm9taXNlPFI+IHwgdm9pZCkge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLnRyeUlmKCk7XG4gIH1cblxuICBwcml2YXRlIHRyeUlmKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29uZGl0aW9uLCB0aGVuU291cmNlLCBlbHNlU291cmNlIH0gPSB0aGlzO1xuXG4gICAgbGV0IHJlc3VsdDogYm9vbGVhbjtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gPGJvb2xlYW4+Y29uZGl0aW9uKCk7XG4gICAgICBjb25zdCBzb3VyY2UgPSByZXN1bHQgPyB0aGVuU291cmNlIDogZWxzZVNvdXJjZTtcblxuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICB0aGlzLmFkZChzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCBzb3VyY2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
