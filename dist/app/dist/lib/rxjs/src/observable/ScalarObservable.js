System.register(['../Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1;
    var ScalarObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            ScalarObservable = (function (_super) {
                __extends(ScalarObservable, _super);
                function ScalarObservable(value, scheduler) {
                    _super.call(this);
                    this.value = value;
                    this.scheduler = scheduler;
                    this._isScalar = true;
                }
                ScalarObservable.create = function (value, scheduler) {
                    return new ScalarObservable(value, scheduler);
                };
                ScalarObservable.dispatch = function (state) {
                    var done = state.done, value = state.value, subscriber = state.subscriber;
                    if (done) {
                        subscriber.complete();
                        return;
                    }
                    subscriber.next(value);
                    if (subscriber.isUnsubscribed) {
                        return;
                    }
                    state.done = true;
                    this.schedule(state);
                };
                ScalarObservable.prototype._subscribe = function (subscriber) {
                    var value = this.value;
                    var scheduler = this.scheduler;
                    if (scheduler) {
                        return scheduler.schedule(ScalarObservable.dispatch, 0, {
                            done: false, value: value, subscriber: subscriber
                        });
                    }
                    else {
                        subscriber.next(value);
                        if (!subscriber.isUnsubscribed) {
                            subscriber.complete();
                        }
                    }
                };
                return ScalarObservable;
            }(Observable_1.Observable));
            exports_1("ScalarObservable", ScalarObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvU2NhbGFyT2JzZXJ2YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Ozs7ZUFJRztZQUNIO2dCQUF5QyxvQ0FBYTtnQkF3QnBELDBCQUFtQixLQUFRLEVBQVUsU0FBcUI7b0JBQ3hELGlCQUFPLENBQUM7b0JBRFMsVUFBSyxHQUFMLEtBQUssQ0FBRztvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFZO29CQUYxRCxjQUFTLEdBQVksSUFBSSxDQUFDO2dCQUkxQixDQUFDO2dCQXpCTSx1QkFBTSxHQUFiLFVBQWlCLEtBQVEsRUFBRSxTQUFxQjtvQkFDOUMsTUFBTSxDQUFDLElBQUksZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVNLHlCQUFRLEdBQWYsVUFBZ0IsS0FBVTtvQkFDaEIscUJBQUksRUFBRSxtQkFBSyxFQUFFLDZCQUFVLENBQVc7b0JBRTFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ1QsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUN0QixNQUFNLENBQUM7b0JBQ1QsQ0FBQztvQkFFRCxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsTUFBTSxDQUFDO29CQUNULENBQUM7b0JBRUQsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ1gsSUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFRUyxxQ0FBVSxHQUFwQixVQUFxQixVQUF5QjtvQkFDNUMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDekIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFFakMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFOzRCQUN0RCxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQUEsS0FBSyxFQUFFLFlBQUEsVUFBVTt5QkFDL0IsQ0FBQyxDQUFDO29CQUNMLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzs0QkFDL0IsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUN4QixDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCx1QkFBQztZQUFELENBM0NBLEFBMkNDLENBM0N3Qyx1QkFBVSxHQTJDbEQ7WUEzQ0QsK0NBMkNDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb2JzZXJ2YWJsZS9TY2FsYXJPYnNlcnZhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7VGVhcmRvd25Mb2dpY30gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKiBAaGlkZSB0cnVlXG4gKi9cbmV4cG9ydCBjbGFzcyBTY2FsYXJPYnNlcnZhYmxlPFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiB7XG4gIHN0YXRpYyBjcmVhdGU8VD4odmFsdWU6IFQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IFNjYWxhck9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiBuZXcgU2NhbGFyT2JzZXJ2YWJsZSh2YWx1ZSwgc2NoZWR1bGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBkaXNwYXRjaChzdGF0ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgeyBkb25lLCB2YWx1ZSwgc3Vic2NyaWJlciB9ID0gc3RhdGU7XG5cbiAgICBpZiAoZG9uZSkge1xuICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgaWYgKHN1YnNjcmliZXIuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgICAoPGFueT4gdGhpcykuc2NoZWR1bGUoc3RhdGUpO1xuICB9XG5cbiAgX2lzU2NhbGFyOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IFQsIHByaXZhdGUgc2NoZWR1bGVyPzogU2NoZWR1bGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgY29uc3Qgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG5cbiAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKFNjYWxhck9ic2VydmFibGUuZGlzcGF0Y2gsIDAsIHtcbiAgICAgICAgZG9uZTogZmFsc2UsIHZhbHVlLCBzdWJzY3JpYmVyXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgIGlmICghc3Vic2NyaWJlci5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
