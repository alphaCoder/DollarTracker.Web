System.register(['../Observable', '../scheduler/asap', '../util/isNumeric'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, asap_1, isNumeric_1;
    var SubscribeOnObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (asap_1_1) {
                asap_1 = asap_1_1;
            },
            function (isNumeric_1_1) {
                isNumeric_1 = isNumeric_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            SubscribeOnObservable = (function (_super) {
                __extends(SubscribeOnObservable, _super);
                function SubscribeOnObservable(source, delayTime, scheduler) {
                    if (delayTime === void 0) { delayTime = 0; }
                    if (scheduler === void 0) { scheduler = asap_1.asap; }
                    _super.call(this);
                    this.source = source;
                    this.delayTime = delayTime;
                    this.scheduler = scheduler;
                    if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
                        this.delayTime = 0;
                    }
                    if (!scheduler || typeof scheduler.schedule !== 'function') {
                        this.scheduler = asap_1.asap;
                    }
                }
                SubscribeOnObservable.create = function (source, delay, scheduler) {
                    if (delay === void 0) { delay = 0; }
                    if (scheduler === void 0) { scheduler = asap_1.asap; }
                    return new SubscribeOnObservable(source, delay, scheduler);
                };
                SubscribeOnObservable.dispatch = function (arg) {
                    var source = arg.source, subscriber = arg.subscriber;
                    return source.subscribe(subscriber);
                };
                SubscribeOnObservable.prototype._subscribe = function (subscriber) {
                    var delay = this.delayTime;
                    var source = this.source;
                    var scheduler = this.scheduler;
                    return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
                        source: source, subscriber: subscriber
                    });
                };
                return SubscribeOnObservable;
            }(Observable_1.Observable));
            exports_1("SubscribeOnObservable", SubscribeOnObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvU3Vic2NyaWJlT25PYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTs7OztlQUlHO1lBQ0g7Z0JBQThDLHlDQUFhO2dCQVV6RCwrQkFBbUIsTUFBcUIsRUFDcEIsU0FBcUIsRUFDckIsU0FBMkI7b0JBRG5DLHlCQUE2QixHQUE3QixhQUE2QjtvQkFDN0IseUJBQW1DLEdBQW5DLHVCQUFtQztvQkFDN0MsaUJBQU8sQ0FBQztvQkFIUyxXQUFNLEdBQU4sTUFBTSxDQUFlO29CQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFZO29CQUNyQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtvQkFFN0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztvQkFDckIsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFJLENBQUM7b0JBQ3hCLENBQUM7Z0JBQ0gsQ0FBQztnQkFuQk0sNEJBQU0sR0FBYixVQUFpQixNQUFxQixFQUFFLEtBQWlCLEVBQUUsU0FBMkI7b0JBQTlDLHFCQUFpQixHQUFqQixTQUFpQjtvQkFBRSx5QkFBMkIsR0FBM0IsdUJBQTJCO29CQUNwRixNQUFNLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUVNLDhCQUFRLEdBQWYsVUFBbUIsR0FBbUI7b0JBQzVCLHVCQUFNLEVBQUUsMkJBQVUsQ0FBUztvQkFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBY1MsMENBQVUsR0FBcEIsVUFBcUIsVUFBeUI7b0JBQzVDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQzdCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzNCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBRWpDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUU7d0JBQy9ELFFBQUEsTUFBTSxFQUFFLFlBQUEsVUFBVTtxQkFDbkIsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0gsNEJBQUM7WUFBRCxDQS9CQSxBQStCQyxDQS9CNkMsdUJBQVUsR0ErQnZEO1lBL0JELHlEQStCQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvU3Vic2NyaWJlT25PYnNlcnZhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHthc2FwfSBmcm9tICcuLi9zY2hlZHVsZXIvYXNhcCc7XG5pbXBvcnQge2lzTnVtZXJpY30gZnJvbSAnLi4vdXRpbC9pc051bWVyaWMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpc3BhdGNoQXJnPFQ+IHtcbiAgc291cmNlOiBPYnNlcnZhYmxlPFQ+O1xuICBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+O1xufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqIEBoaWRlIHRydWVcbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmliZU9uT2JzZXJ2YWJsZTxUPiBleHRlbmRzIE9ic2VydmFibGU8VD4ge1xuICBzdGF0aWMgY3JlYXRlPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxUPiwgZGVsYXk6IG51bWJlciA9IDAsIHNjaGVkdWxlcjogU2NoZWR1bGVyID0gYXNhcCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiBuZXcgU3Vic2NyaWJlT25PYnNlcnZhYmxlKHNvdXJjZSwgZGVsYXksIHNjaGVkdWxlcik7XG4gIH1cblxuICBzdGF0aWMgZGlzcGF0Y2g8VD4oYXJnOiBEaXNwYXRjaEFyZzxUPik6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3QgeyBzb3VyY2UsIHN1YnNjcmliZXIgfSA9IGFyZztcbiAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzb3VyY2U6IE9ic2VydmFibGU8VD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgZGVsYXlUaW1lOiBudW1iZXIgPSAwLFxuICAgICAgICAgICAgICBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyID0gYXNhcCkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKCFpc051bWVyaWMoZGVsYXlUaW1lKSB8fCBkZWxheVRpbWUgPCAwKSB7XG4gICAgICB0aGlzLmRlbGF5VGltZSA9IDA7XG4gICAgfVxuICAgIGlmICghc2NoZWR1bGVyIHx8IHR5cGVvZiBzY2hlZHVsZXIuc2NoZWR1bGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gYXNhcDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSB7XG4gICAgY29uc3QgZGVsYXkgPSB0aGlzLmRlbGF5VGltZTtcbiAgICBjb25zdCBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcblxuICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoU3Vic2NyaWJlT25PYnNlcnZhYmxlLmRpc3BhdGNoLCBkZWxheSwge1xuICAgICAgc291cmNlLCBzdWJzY3JpYmVyXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
