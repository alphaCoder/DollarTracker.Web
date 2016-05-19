System.register(['./Subject', './util/throwError', './util/ObjectUnsubscribedError'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1, throwError_1, ObjectUnsubscribedError_1;
    var BehaviorSubject;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (throwError_1_1) {
                throwError_1 = throwError_1_1;
            },
            function (ObjectUnsubscribedError_1_1) {
                ObjectUnsubscribedError_1 = ObjectUnsubscribedError_1_1;
            }],
        execute: function() {
            /**
             * @class BehaviorSubject<T>
             */
            BehaviorSubject = (function (_super) {
                __extends(BehaviorSubject, _super);
                function BehaviorSubject(_value) {
                    _super.call(this);
                    this._value = _value;
                }
                BehaviorSubject.prototype.getValue = function () {
                    if (this.hasErrored) {
                        throwError_1.throwError(this.errorValue);
                    }
                    else if (this.isUnsubscribed) {
                        throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
                    }
                    else {
                        return this._value;
                    }
                };
                Object.defineProperty(BehaviorSubject.prototype, "value", {
                    get: function () {
                        return this.getValue();
                    },
                    enumerable: true,
                    configurable: true
                });
                BehaviorSubject.prototype._subscribe = function (subscriber) {
                    var subscription = _super.prototype._subscribe.call(this, subscriber);
                    if (subscription && !subscription.isUnsubscribed) {
                        subscriber.next(this._value);
                    }
                    return subscription;
                };
                BehaviorSubject.prototype._next = function (value) {
                    _super.prototype._next.call(this, this._value = value);
                };
                BehaviorSubject.prototype._error = function (err) {
                    this.hasErrored = true;
                    _super.prototype._error.call(this, this.errorValue = err);
                };
                return BehaviorSubject;
            }(Subject_1.Subject));
            exports_1("BehaviorSubject", BehaviorSubject);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL0JlaGF2aW9yU3ViamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7O2VBRUc7WUFDSDtnQkFBd0MsbUNBQVU7Z0JBRWhELHlCQUFvQixNQUFTO29CQUMzQixpQkFBTyxDQUFDO29CQURVLFdBQU0sR0FBTixNQUFNLENBQUc7Z0JBRTdCLENBQUM7Z0JBRUQsa0NBQVEsR0FBUjtvQkFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsdUJBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzlCLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUMvQix1QkFBVSxDQUFDLElBQUksaURBQXVCLEVBQUUsQ0FBQyxDQUFDO29CQUM1QyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNyQixDQUFDO2dCQUNILENBQUM7Z0JBRUQsc0JBQUksa0NBQUs7eUJBQVQ7d0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDekIsQ0FBQzs7O21CQUFBO2dCQUVTLG9DQUFVLEdBQXBCLFVBQXFCLFVBQXlCO29CQUM1QyxJQUFNLFlBQVksR0FBRyxnQkFBSyxDQUFDLFVBQVUsWUFBQyxVQUFVLENBQUMsQ0FBQztvQkFDbEQsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLENBQWtCLFlBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUNuRSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDL0IsQ0FBQztvQkFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO2dCQUN0QixDQUFDO2dCQUVTLCtCQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsZ0JBQUssQ0FBQyxLQUFLLFlBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFFUyxnQ0FBTSxHQUFoQixVQUFpQixHQUFRO29CQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDdkIsZ0JBQUssQ0FBQyxNQUFNLFlBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFDSCxzQkFBQztZQUFELENBcENBLEFBb0NDLENBcEN1QyxpQkFBTyxHQW9DOUM7WUFwQ0QsNkNBb0NDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvQmVoYXZpb3JTdWJqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdWJqZWN0fSBmcm9tICcuL1N1YmplY3QnO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHtUZWFyZG93bkxvZ2ljLCBJU3Vic2NyaXB0aW9ufSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQge3Rocm93RXJyb3J9IGZyb20gJy4vdXRpbC90aHJvd0Vycm9yJztcbmltcG9ydCB7T2JqZWN0VW5zdWJzY3JpYmVkRXJyb3J9IGZyb20gJy4vdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG5cbi8qKlxuICogQGNsYXNzIEJlaGF2aW9yU3ViamVjdDxUPlxuICovXG5leHBvcnQgY2xhc3MgQmVoYXZpb3JTdWJqZWN0PFQ+IGV4dGVuZHMgU3ViamVjdDxUPiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmFsdWU6IFQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKTogVCB7XG4gICAgaWYgKHRoaXMuaGFzRXJyb3JlZCkge1xuICAgICAgdGhyb3dFcnJvcih0aGlzLmVycm9yVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgdGhyb3dFcnJvcihuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgdmFsdWUoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBzdXBlci5fc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIGlmIChzdWJzY3JpcHRpb24gJiYgISg8SVN1YnNjcmlwdGlvbj4gc3Vic2NyaXB0aW9uKS5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgc3Vic2NyaWJlci5uZXh0KHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHN1cGVyLl9uZXh0KHRoaXMuX3ZhbHVlID0gdmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9lcnJvcihlcnI6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaGFzRXJyb3JlZCA9IHRydWU7XG4gICAgc3VwZXIuX2Vycm9yKHRoaXMuZXJyb3JWYWx1ZSA9IGVycik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
