System.register(['./Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1;
    var AsyncSubject;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            /**
             * @class AsyncSubject<T>
             */
            AsyncSubject = (function (_super) {
                __extends(AsyncSubject, _super);
                function AsyncSubject() {
                    _super.apply(this, arguments);
                    this.value = null;
                    this.hasNext = false;
                }
                AsyncSubject.prototype._subscribe = function (subscriber) {
                    if (this.hasCompleted && this.hasNext) {
                        subscriber.next(this.value);
                    }
                    return _super.prototype._subscribe.call(this, subscriber);
                };
                AsyncSubject.prototype._next = function (value) {
                    this.value = value;
                    this.hasNext = true;
                };
                AsyncSubject.prototype._complete = function () {
                    var index = -1;
                    var observers = this.observers;
                    var len = observers.length;
                    // optimization to block our SubjectSubscriptions from
                    // splicing themselves out of the observers list one by one.
                    this.isUnsubscribed = true;
                    if (this.hasNext) {
                        while (++index < len) {
                            var o = observers[index];
                            o.next(this.value);
                            o.complete();
                        }
                    }
                    else {
                        while (++index < len) {
                            observers[index].complete();
                        }
                    }
                    this.isUnsubscribed = false;
                    this.unsubscribe();
                };
                return AsyncSubject;
            }(Subject_1.Subject));
            exports_1("AsyncSubject", AsyncSubject);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL0FzeW5jU3ViamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7O2VBRUc7WUFDSDtnQkFBcUMsZ0NBQVU7Z0JBQS9DO29CQUFxQyw4QkFBVTtvQkFDN0MsVUFBSyxHQUFNLElBQUksQ0FBQztvQkFDaEIsWUFBTyxHQUFZLEtBQUssQ0FBQztnQkF3QzNCLENBQUM7Z0JBdENXLGlDQUFVLEdBQXBCLFVBQXFCLFVBQTJCO29CQUM5QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztvQkFFRCxNQUFNLENBQUMsZ0JBQUssQ0FBQyxVQUFVLFlBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRVMsNEJBQUssR0FBZixVQUFnQixLQUFRO29CQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRVMsZ0NBQVMsR0FBbkI7b0JBQ0UsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDakMsSUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztvQkFFN0Isc0RBQXNEO29CQUN0RCw0REFBNEQ7b0JBQzVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUUzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDakIsT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQzs0QkFDckIsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDbkIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUNmLENBQUM7b0JBQ0gsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixPQUFPLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDOzRCQUNyQixTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQzlCLENBQUM7b0JBQ0gsQ0FBQztvQkFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztvQkFFNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQUNILG1CQUFDO1lBQUQsQ0ExQ0EsQUEwQ0MsQ0ExQ29DLGlCQUFPLEdBMEMzQztZQTFDRCx1Q0EwQ0MsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9Bc3luY1N1YmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N1YmplY3R9IGZyb20gJy4vU3ViamVjdCc7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQge1RlYXJkb3duTG9naWN9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcblxuLyoqXG4gKiBAY2xhc3MgQXN5bmNTdWJqZWN0PFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBBc3luY1N1YmplY3Q8VD4gZXh0ZW5kcyBTdWJqZWN0PFQ+IHtcbiAgdmFsdWU6IFQgPSBudWxsO1xuICBoYXNOZXh0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgaWYgKHRoaXMuaGFzQ29tcGxldGVkICYmIHRoaXMuaGFzTmV4dCkge1xuICAgICAgc3Vic2NyaWJlci5uZXh0KHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5fc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuaGFzTmV4dCA9IHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCk6IHZvaWQge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGNvbnN0IG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgIGNvbnN0IGxlbiA9IG9ic2VydmVycy5sZW5ndGg7XG5cbiAgICAvLyBvcHRpbWl6YXRpb24gdG8gYmxvY2sgb3VyIFN1YmplY3RTdWJzY3JpcHRpb25zIGZyb21cbiAgICAvLyBzcGxpY2luZyB0aGVtc2VsdmVzIG91dCBvZiB0aGUgb2JzZXJ2ZXJzIGxpc3Qgb25lIGJ5IG9uZS5cbiAgICB0aGlzLmlzVW5zdWJzY3JpYmVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmhhc05leHQpIHtcbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuKSB7XG4gICAgICAgIGxldCBvID0gb2JzZXJ2ZXJzW2luZGV4XTtcbiAgICAgICAgby5uZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICBvLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuKSB7XG4gICAgICAgIG9ic2VydmVyc1tpbmRleF0uY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmlzVW5zdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
