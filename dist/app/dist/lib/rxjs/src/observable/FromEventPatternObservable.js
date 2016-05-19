System.register(['../Observable', '../Subscription', '../util/tryCatch', '../util/errorObject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, Subscription_1, tryCatch_1, errorObject_1;
    var FromEventPatternObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            },
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            FromEventPatternObservable = (function (_super) {
                __extends(FromEventPatternObservable, _super);
                function FromEventPatternObservable(addHandler, removeHandler, selector) {
                    _super.call(this);
                    this.addHandler = addHandler;
                    this.removeHandler = removeHandler;
                    this.selector = selector;
                }
                /**
                 * @param addHandler
                 * @param removeHandler
                 * @param selector
                 * @return {FromEventPatternObservable}
                 * @static true
                 * @name fromEventPattern
                 * @owner Observable
                 */
                FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
                    return new FromEventPatternObservable(addHandler, removeHandler, selector);
                };
                FromEventPatternObservable.prototype._subscribe = function (subscriber) {
                    var addHandler = this.addHandler;
                    var removeHandler = this.removeHandler;
                    var selector = this.selector;
                    var handler = selector ? function (e) {
                        var result = tryCatch_1.tryCatch(selector).apply(null, arguments);
                        if (result === errorObject_1.errorObject) {
                            subscriber.error(result.e);
                        }
                        else {
                            subscriber.next(result);
                        }
                    } : function (e) { subscriber.next(e); };
                    var result = tryCatch_1.tryCatch(addHandler)(handler);
                    if (result === errorObject_1.errorObject) {
                        subscriber.error(result.e);
                    }
                    subscriber.add(new Subscription_1.Subscription(function () {
                        //TODO: determine whether or not to forward to error handler
                        removeHandler(handler);
                    }));
                };
                return FromEventPatternObservable;
            }(Observable_1.Observable));
            exports_1("FromEventPatternObservable", FromEventPatternObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvRnJvbUV2ZW50UGF0dGVybk9ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BOzs7O2VBSUc7WUFDSDtnQkFBc0QsOENBQWE7Z0JBaUJqRSxvQ0FBb0IsVUFBc0MsRUFDdEMsYUFBMEMsRUFDMUMsUUFBcUM7b0JBQ3ZELGlCQUFPLENBQUM7b0JBSFUsZUFBVSxHQUFWLFVBQVUsQ0FBNEI7b0JBQ3RDLGtCQUFhLEdBQWIsYUFBYSxDQUE2QjtvQkFDMUMsYUFBUSxHQUFSLFFBQVEsQ0FBNkI7Z0JBRXpELENBQUM7Z0JBbkJEOzs7Ozs7OzttQkFRRztnQkFDSSxpQ0FBTSxHQUFiLFVBQWlCLFVBQXNDLEVBQ3RDLGFBQTBDLEVBQzFDLFFBQXFDO29CQUNwRCxNQUFNLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDO2dCQVFTLCtDQUFVLEdBQXBCLFVBQXFCLFVBQXlCO29CQUM1QyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUNuQyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUN6QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUUvQixJQUFNLE9BQU8sR0FBRyxRQUFRLEdBQUcsVUFBUyxDQUFNO3dCQUN4QyxJQUFJLE1BQU0sR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQ3ZELEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyx5QkFBVyxDQUFDLENBQUMsQ0FBQzs0QkFDM0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDMUIsQ0FBQztvQkFDSCxDQUFDLEdBQUcsVUFBUyxDQUFNLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFN0MsSUFBSSxNQUFNLEdBQUcsbUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDM0MsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLHlCQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsQ0FBQztvQkFDRCxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksMkJBQVksQ0FBQzt3QkFDOUIsNERBQTREO3dCQUM1RCxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sQ0FBQztnQkFDSCxpQ0FBQztZQUFELENBOUNBLEFBOENDLENBOUNxRCx1QkFBVSxHQThDL0Q7WUE5Q0QsbUVBOENDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb2JzZXJ2YWJsZS9Gcm9tRXZlbnRQYXR0ZXJuT2JzZXJ2YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7dHJ5Q2F0Y2h9IGZyb20gJy4uL3V0aWwvdHJ5Q2F0Y2gnO1xuaW1wb3J0IHtlcnJvck9iamVjdH0gZnJvbSAnLi4vdXRpbC9lcnJvck9iamVjdCc7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqIEBoaWRlIHRydWVcbiAqL1xuZXhwb3J0IGNsYXNzIEZyb21FdmVudFBhdHRlcm5PYnNlcnZhYmxlPFQsIFI+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBhZGRIYW5kbGVyXG4gICAqIEBwYXJhbSByZW1vdmVIYW5kbGVyXG4gICAqIEBwYXJhbSBzZWxlY3RvclxuICAgKiBAcmV0dXJuIHtGcm9tRXZlbnRQYXR0ZXJuT2JzZXJ2YWJsZX1cbiAgICogQHN0YXRpYyB0cnVlXG4gICAqIEBuYW1lIGZyb21FdmVudFBhdHRlcm5cbiAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICovXG4gIHN0YXRpYyBjcmVhdGU8VD4oYWRkSGFuZGxlcjogKGhhbmRsZXI6IEZ1bmN0aW9uKSA9PiBhbnksXG4gICAgICAgICAgICAgICAgICAgcmVtb3ZlSGFuZGxlcjogKGhhbmRsZXI6IEZ1bmN0aW9uKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yPzogKC4uLmFyZ3M6IEFycmF5PGFueT4pID0+IFQpIHtcbiAgICByZXR1cm4gbmV3IEZyb21FdmVudFBhdHRlcm5PYnNlcnZhYmxlKGFkZEhhbmRsZXIsIHJlbW92ZUhhbmRsZXIsIHNlbGVjdG9yKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRkSGFuZGxlcjogKGhhbmRsZXI6IEZ1bmN0aW9uKSA9PiBhbnksXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVtb3ZlSGFuZGxlcjogKGhhbmRsZXI6IEZ1bmN0aW9uKSA9PiB2b2lkLFxuICAgICAgICAgICAgICBwcml2YXRlIHNlbGVjdG9yPzogKC4uLmFyZ3M6IEFycmF5PGFueT4pID0+IFQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikge1xuICAgIGNvbnN0IGFkZEhhbmRsZXIgPSB0aGlzLmFkZEhhbmRsZXI7XG4gICAgY29uc3QgcmVtb3ZlSGFuZGxlciA9IHRoaXMucmVtb3ZlSGFuZGxlcjtcbiAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuc2VsZWN0b3I7XG5cbiAgICBjb25zdCBoYW5kbGVyID0gc2VsZWN0b3IgPyBmdW5jdGlvbihlOiBhbnkpIHtcbiAgICAgIGxldCByZXN1bHQgPSB0cnlDYXRjaChzZWxlY3RvcikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqZWN0KSB7XG4gICAgICAgIHN1YnNjcmliZXIuZXJyb3IocmVzdWx0LmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KHJlc3VsdCk7XG4gICAgICB9XG4gICAgfSA6IGZ1bmN0aW9uKGU6IGFueSkgeyBzdWJzY3JpYmVyLm5leHQoZSk7IH07XG5cbiAgICBsZXQgcmVzdWx0ID0gdHJ5Q2F0Y2goYWRkSGFuZGxlcikoaGFuZGxlcik7XG4gICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmplY3QpIHtcbiAgICAgIHN1YnNjcmliZXIuZXJyb3IocmVzdWx0LmUpO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyLmFkZChuZXcgU3Vic2NyaXB0aW9uKCgpID0+IHtcbiAgICAgIC8vVE9ETzogZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRvIGZvcndhcmQgdG8gZXJyb3IgaGFuZGxlclxuICAgICAgcmVtb3ZlSGFuZGxlcihoYW5kbGVyKTtcbiAgICB9KSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
