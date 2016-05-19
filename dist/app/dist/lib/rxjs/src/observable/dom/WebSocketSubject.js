System.register(['../../Subject', '../../Subscriber', '../../Observable', '../../Subscription', '../../util/root', '../../ReplaySubject', '../../util/tryCatch', '../../util/errorObject', '../../util/assign'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1, Subscriber_1, Observable_1, Subscription_1, root_1, ReplaySubject_1, tryCatch_1, errorObject_1, assign_1;
    var WebSocketSubject;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            },
            function (root_1_1) {
                root_1 = root_1_1;
            },
            function (ReplaySubject_1_1) {
                ReplaySubject_1 = ReplaySubject_1_1;
            },
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            },
            function (assign_1_1) {
                assign_1 = assign_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            WebSocketSubject = (function (_super) {
                __extends(WebSocketSubject, _super);
                function WebSocketSubject(urlConfigOrSource, destination) {
                    if (urlConfigOrSource instanceof Observable_1.Observable) {
                        _super.call(this, destination, urlConfigOrSource);
                    }
                    else {
                        _super.call(this);
                        this.WebSocketCtor = root_1.root.WebSocket;
                        if (typeof urlConfigOrSource === 'string') {
                            this.url = urlConfigOrSource;
                        }
                        else {
                            // WARNING: config object could override important members here.
                            assign_1.assign(this, urlConfigOrSource);
                        }
                        if (!this.WebSocketCtor) {
                            throw new Error('no WebSocket constructor can be found');
                        }
                        this.destination = new ReplaySubject_1.ReplaySubject();
                    }
                }
                WebSocketSubject.prototype.resultSelector = function (e) {
                    return JSON.parse(e.data);
                };
                /**
                 * @param urlConfigOrSource
                 * @return {WebSocketSubject}
                 * @static true
                 * @name webSocket
                 * @owner Observable
                 */
                WebSocketSubject.create = function (urlConfigOrSource) {
                    return new WebSocketSubject(urlConfigOrSource);
                };
                WebSocketSubject.prototype.lift = function (operator) {
                    var sock = new WebSocketSubject(this, this.destination);
                    sock.operator = operator;
                    return sock;
                };
                // TODO: factor this out to be a proper Operator/Subscriber implementation and eliminate closures
                WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
                    var self = this;
                    return new Observable_1.Observable(function (observer) {
                        var result = tryCatch_1.tryCatch(subMsg)();
                        if (result === errorObject_1.errorObject) {
                            observer.error(errorObject_1.errorObject.e);
                        }
                        else {
                            self.next(result);
                        }
                        var subscription = self.subscribe(function (x) {
                            var result = tryCatch_1.tryCatch(messageFilter)(x);
                            if (result === errorObject_1.errorObject) {
                                observer.error(errorObject_1.errorObject.e);
                            }
                            else if (result) {
                                observer.next(x);
                            }
                        }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
                        return function () {
                            var result = tryCatch_1.tryCatch(unsubMsg)();
                            if (result === errorObject_1.errorObject) {
                                observer.error(errorObject_1.errorObject.e);
                            }
                            else {
                                self.next(result);
                            }
                            subscription.unsubscribe();
                        };
                    });
                };
                WebSocketSubject.prototype._unsubscribe = function () {
                    this.socket = null;
                    this.source = null;
                    this.destination = new ReplaySubject_1.ReplaySubject();
                    this.isStopped = false;
                    this.hasErrored = false;
                    this.hasCompleted = false;
                    this.observers = null;
                    this.isUnsubscribed = false;
                };
                WebSocketSubject.prototype._subscribe = function (subscriber) {
                    var _this = this;
                    if (!this.observers) {
                        this.observers = [];
                    }
                    var subscription = _super.prototype._subscribe.call(this, subscriber);
                    // HACK: For some reason transpilation wasn't honoring this in arrow functions below
                    // Doesn't seem right, need to reinvestigate.
                    var self = this;
                    var WebSocket = this.WebSocketCtor;
                    if (self.source || !subscription || subscription.isUnsubscribed) {
                        return subscription;
                    }
                    if (self.url && !self.socket) {
                        var socket_1 = self.protocol ? new WebSocket(self.url, self.protocol) : new WebSocket(self.url);
                        self.socket = socket_1;
                        socket_1.onopen = function (e) {
                            var openObserver = self.openObserver;
                            if (openObserver) {
                                openObserver.next(e);
                            }
                            var queue = self.destination;
                            self.destination = Subscriber_1.Subscriber.create(function (x) { return socket_1.readyState === 1 && socket_1.send(x); }, function (e) {
                                var closingObserver = self.closingObserver;
                                if (closingObserver) {
                                    closingObserver.next(undefined);
                                }
                                if (e && e.code) {
                                    socket_1.close(e.code, e.reason);
                                }
                                else {
                                    self._finalError(new TypeError('WebSocketSubject.error must be called with an object with an error code, ' +
                                        'and an optional reason: { code: number, reason: string }'));
                                }
                            }, function () {
                                var closingObserver = self.closingObserver;
                                if (closingObserver) {
                                    closingObserver.next(undefined);
                                }
                                socket_1.close();
                            });
                            if (queue && queue instanceof ReplaySubject_1.ReplaySubject) {
                                subscription.add(queue.subscribe(self.destination));
                            }
                        };
                        socket_1.onerror = function (e) { return self.error(e); };
                        socket_1.onclose = function (e) {
                            var closeObserver = self.closeObserver;
                            if (closeObserver) {
                                closeObserver.next(e);
                            }
                            if (e.wasClean) {
                                self._finalComplete();
                            }
                            else {
                                self._finalError(e);
                            }
                        };
                        socket_1.onmessage = function (e) {
                            var result = tryCatch_1.tryCatch(self.resultSelector)(e);
                            if (result === errorObject_1.errorObject) {
                                self._finalError(errorObject_1.errorObject.e);
                            }
                            else {
                                self._finalNext(result);
                            }
                        };
                    }
                    return new Subscription_1.Subscription(function () {
                        subscription.unsubscribe();
                        if (!_this.observers || _this.observers.length === 0) {
                            var socket = _this.socket;
                            if (socket && socket.readyState < 2) {
                                socket.close();
                            }
                            _this.socket = undefined;
                            _this.source = undefined;
                            _this.destination = new ReplaySubject_1.ReplaySubject();
                        }
                    });
                };
                return WebSocketSubject;
            }(Subject_1.Subject));
            exports_1("WebSocketSubject", WebSocketSubject);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvZG9tL1dlYlNvY2tldFN1YmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTs7OztlQUlHO1lBQ0g7Z0JBQXlDLG9DQUFVO2dCQXdCakQsMEJBQVksaUJBQWtFLEVBQUUsV0FBeUI7b0JBQ3ZHLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixZQUFZLHVCQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUM1QyxrQkFBTSxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztvQkFDeEMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixpQkFBTyxDQUFDO3dCQUNSLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBSSxDQUFDLFNBQVMsQ0FBQzt3QkFFcEMsRUFBRSxDQUFDLENBQUMsT0FBTyxpQkFBaUIsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUMxQyxJQUFJLENBQUMsR0FBRyxHQUFHLGlCQUFpQixDQUFDO3dCQUMvQixDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLGdFQUFnRTs0QkFDaEUsZUFBTSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO3dCQUNsQyxDQUFDO3dCQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQzt3QkFDM0QsQ0FBQzt3QkFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO29CQUN6QyxDQUFDO2dCQUNILENBQUM7Z0JBbkNELHlDQUFjLEdBQWQsVUFBZSxDQUFlO29CQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQ7Ozs7OzttQkFNRztn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LENBQUMsS0FBSSxDQUFDLFNBQVMsSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMzQyx5QkFBTSxDQUFVOzRCQUN4QixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNwQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2pCLENBQUM7NEJBQ0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7NEJBQ3hCLEtBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDOzRCQUN4QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO3dCQUN6QyxDQUFDO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0gsdUJBQUM7WUFBRCxDQTdMQSxBQTZMQyxDQTdMd0MsaUJBQU8sR0E2TC9DO1lBN0xELCtDQTZMQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvZG9tL1dlYlNvY2tldFN1YmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N1YmplY3R9IGZyb20gJy4uLy4uL1N1YmplY3QnO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi8uLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi8uLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7cm9vdH0gZnJvbSAnLi4vLi4vdXRpbC9yb290JztcbmltcG9ydCB7UmVwbGF5U3ViamVjdH0gZnJvbSAnLi4vLi4vUmVwbGF5U3ViamVjdCc7XG5pbXBvcnQge09ic2VydmVyLCBOZXh0T2JzZXJ2ZXJ9IGZyb20gJy4uLy4uL09ic2VydmVyJztcbmltcG9ydCB7dHJ5Q2F0Y2h9IGZyb20gJy4uLy4uL3V0aWwvdHJ5Q2F0Y2gnO1xuaW1wb3J0IHtlcnJvck9iamVjdH0gZnJvbSAnLi4vLi4vdXRpbC9lcnJvck9iamVjdCc7XG5pbXBvcnQge2Fzc2lnbn0gZnJvbSAnLi4vLi4vdXRpbC9hc3NpZ24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldFN1YmplY3RDb25maWcge1xuICB1cmw6IHN0cmluZztcbiAgcHJvdG9jb2w/OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+O1xuICByZXN1bHRTZWxlY3Rvcj86IDxUPihlOiBNZXNzYWdlRXZlbnQpID0+IFQ7XG4gIG9wZW5PYnNlcnZlcj86IE5leHRPYnNlcnZlcjxFdmVudD47XG4gIGNsb3NlT2JzZXJ2ZXI/OiBOZXh0T2JzZXJ2ZXI8Q2xvc2VFdmVudD47XG4gIGNsb3NpbmdPYnNlcnZlcj86IE5leHRPYnNlcnZlcjx2b2lkPjtcbiAgV2ViU29ja2V0Q3Rvcj86IHsgbmV3KHVybDogc3RyaW5nLCBwcm90b2NvbD86IHN0cmluZ3xBcnJheTxzdHJpbmc+KTogV2ViU29ja2V0IH07XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG5leHBvcnQgY2xhc3MgV2ViU29ja2V0U3ViamVjdDxUPiBleHRlbmRzIFN1YmplY3Q8VD4ge1xuICB1cmw6IHN0cmluZztcbiAgcHJvdG9jb2w6IHN0cmluZ3xBcnJheTxzdHJpbmc+O1xuICBzb2NrZXQ6IFdlYlNvY2tldDtcbiAgb3Blbk9ic2VydmVyOiBOZXh0T2JzZXJ2ZXI8RXZlbnQ+O1xuICBjbG9zZU9ic2VydmVyOiBOZXh0T2JzZXJ2ZXI8Q2xvc2VFdmVudD47XG4gIGNsb3NpbmdPYnNlcnZlcjogTmV4dE9ic2VydmVyPHZvaWQ+O1xuICBXZWJTb2NrZXRDdG9yOiB7IG5ldyh1cmw6IHN0cmluZywgcHJvdG9jb2w/OiBzdHJpbmd8QXJyYXk8c3RyaW5nPik6IFdlYlNvY2tldCB9O1xuXG4gIHJlc3VsdFNlbGVjdG9yKGU6IE1lc3NhZ2VFdmVudCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGUuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHVybENvbmZpZ09yU291cmNlXG4gICAqIEByZXR1cm4ge1dlYlNvY2tldFN1YmplY3R9XG4gICAqIEBzdGF0aWMgdHJ1ZVxuICAgKiBAbmFtZSB3ZWJTb2NrZXRcbiAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICovXG4gIHN0YXRpYyBjcmVhdGU8VD4odXJsQ29uZmlnT3JTb3VyY2U6IHN0cmluZyB8IFdlYlNvY2tldFN1YmplY3RDb25maWcpOiBXZWJTb2NrZXRTdWJqZWN0PFQ+IHtcbiAgICByZXR1cm4gbmV3IFdlYlNvY2tldFN1YmplY3Q8VD4odXJsQ29uZmlnT3JTb3VyY2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IodXJsQ29uZmlnT3JTb3VyY2U6IHN0cmluZyB8IFdlYlNvY2tldFN1YmplY3RDb25maWcgfCBPYnNlcnZhYmxlPFQ+LCBkZXN0aW5hdGlvbj86IE9ic2VydmVyPFQ+KSB7XG4gICAgaWYgKHVybENvbmZpZ09yU291cmNlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgc3VwZXIoZGVzdGluYXRpb24sIHVybENvbmZpZ09yU291cmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuV2ViU29ja2V0Q3RvciA9IHJvb3QuV2ViU29ja2V0O1xuXG4gICAgICBpZiAodHlwZW9mIHVybENvbmZpZ09yU291cmNlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLnVybCA9IHVybENvbmZpZ09yU291cmNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gV0FSTklORzogY29uZmlnIG9iamVjdCBjb3VsZCBvdmVycmlkZSBpbXBvcnRhbnQgbWVtYmVycyBoZXJlLlxuICAgICAgICBhc3NpZ24odGhpcywgdXJsQ29uZmlnT3JTb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuV2ViU29ja2V0Q3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIFdlYlNvY2tldCBjb25zdHJ1Y3RvciBjYW4gYmUgZm91bmQnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBSZXBsYXlTdWJqZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgbGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8VCwgUj4pIHtcbiAgICBjb25zdCBzb2NrOiBXZWJTb2NrZXRTdWJqZWN0PFQ+ID0gbmV3IFdlYlNvY2tldFN1YmplY3QodGhpcywgdGhpcy5kZXN0aW5hdGlvbik7XG4gICAgc29jay5vcGVyYXRvciA9IDxhbnk+b3BlcmF0b3I7XG4gICAgcmV0dXJuIHNvY2s7XG4gIH1cblxuICAvLyBUT0RPOiBmYWN0b3IgdGhpcyBvdXQgdG8gYmUgYSBwcm9wZXIgT3BlcmF0b3IvU3Vic2NyaWJlciBpbXBsZW1lbnRhdGlvbiBhbmQgZWxpbWluYXRlIGNsb3N1cmVzXG4gIG11bHRpcGxleChzdWJNc2c6ICgpID0+IGFueSwgdW5zdWJNc2c6ICgpID0+IGFueSwgbWVzc2FnZUZpbHRlcjogKHZhbHVlOiBUKSA9PiBib29sZWFuKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdHJ5Q2F0Y2goc3ViTXNnKSgpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmplY3QpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3JPYmplY3QuZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLm5leHQocmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IHNlbGYuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0cnlDYXRjaChtZXNzYWdlRmlsdGVyKSh4KTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmplY3QpIHtcbiAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvck9iamVjdC5lKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgICBlcnIgPT4gb2JzZXJ2ZXIuZXJyb3IoZXJyKSxcbiAgICAgICAgKCkgPT4gb2JzZXJ2ZXIuY29tcGxldGUoKSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRyeUNhdGNoKHVuc3ViTXNnKSgpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iamVjdCkge1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yT2JqZWN0LmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYubmV4dChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfdW5zdWJzY3JpYmUoKSB7XG4gICAgdGhpcy5zb2NrZXQgPSBudWxsO1xuICAgIHRoaXMuc291cmNlID0gbnVsbDtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gbmV3IFJlcGxheVN1YmplY3QoKTtcbiAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzRXJyb3JlZCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5vYnNlcnZlcnMgPSBudWxsO1xuICAgIHRoaXMuaXNVbnN1YnNjcmliZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pIHtcbiAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IDxTdWJzY3JpcHRpb24+c3VwZXIuX3N1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAvLyBIQUNLOiBGb3Igc29tZSByZWFzb24gdHJhbnNwaWxhdGlvbiB3YXNuJ3QgaG9ub3JpbmcgdGhpcyBpbiBhcnJvdyBmdW5jdGlvbnMgYmVsb3dcbiAgICAvLyBEb2Vzbid0IHNlZW0gcmlnaHQsIG5lZWQgdG8gcmVpbnZlc3RpZ2F0ZS5cbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBXZWJTb2NrZXQgPSB0aGlzLldlYlNvY2tldEN0b3I7XG5cbiAgICBpZiAoc2VsZi5zb3VyY2UgfHwgIXN1YnNjcmlwdGlvbiB8fCAoPFN1YnNjcmlwdGlvbj5zdWJzY3JpcHRpb24pLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnVybCAmJiAhc2VsZi5zb2NrZXQpIHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IHNlbGYucHJvdG9jb2wgPyBuZXcgV2ViU29ja2V0KHNlbGYudXJsLCBzZWxmLnByb3RvY29sKSA6IG5ldyBXZWJTb2NrZXQoc2VsZi51cmwpO1xuICAgICAgc2VsZi5zb2NrZXQgPSBzb2NrZXQ7XG5cbiAgICAgIHNvY2tldC5vbm9wZW4gPSAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgb3Blbk9ic2VydmVyID0gc2VsZi5vcGVuT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChvcGVuT2JzZXJ2ZXIpIHtcbiAgICAgICAgICBvcGVuT2JzZXJ2ZXIubmV4dChlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHF1ZXVlID0gc2VsZi5kZXN0aW5hdGlvbjtcblxuICAgICAgICBzZWxmLmRlc3RpbmF0aW9uID0gU3Vic2NyaWJlci5jcmVhdGUoXG4gICAgICAgICAgKHgpID0+IHNvY2tldC5yZWFkeVN0YXRlID09PSAxICYmIHNvY2tldC5zZW5kKHgpLFxuICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9zaW5nT2JzZXJ2ZXIgPSBzZWxmLmNsb3NpbmdPYnNlcnZlcjtcbiAgICAgICAgICAgIGlmIChjbG9zaW5nT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgY2xvc2luZ09ic2VydmVyLm5leHQodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlICYmIGUuY29kZSkge1xuICAgICAgICAgICAgICBzb2NrZXQuY2xvc2UoZS5jb2RlLCBlLnJlYXNvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxmLl9maW5hbEVycm9yKG5ldyBUeXBlRXJyb3IoJ1dlYlNvY2tldFN1YmplY3QuZXJyb3IgbXVzdCBiZSBjYWxsZWQgd2l0aCBhbiBvYmplY3Qgd2l0aCBhbiBlcnJvciBjb2RlLCAnICtcbiAgICAgICAgICAgICAgICAnYW5kIGFuIG9wdGlvbmFsIHJlYXNvbjogeyBjb2RlOiBudW1iZXIsIHJlYXNvbjogc3RyaW5nIH0nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoICkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvc2luZ09ic2VydmVyID0gc2VsZi5jbG9zaW5nT2JzZXJ2ZXI7XG4gICAgICAgICAgICBpZiAoY2xvc2luZ09ic2VydmVyKSB7XG4gICAgICAgICAgICAgIGNsb3NpbmdPYnNlcnZlci5uZXh0KHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHF1ZXVlICYmIHF1ZXVlIGluc3RhbmNlb2YgUmVwbGF5U3ViamVjdCkge1xuICAgICAgICAgIHN1YnNjcmlwdGlvbi5hZGQoKDxSZXBsYXlTdWJqZWN0PFQ+PnF1ZXVlKS5zdWJzY3JpYmUoc2VsZi5kZXN0aW5hdGlvbikpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzb2NrZXQub25lcnJvciA9IChlOiBFdmVudCkgPT4gc2VsZi5lcnJvcihlKTtcblxuICAgICAgc29ja2V0Lm9uY2xvc2UgPSAoZTogQ2xvc2VFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjbG9zZU9ic2VydmVyID0gc2VsZi5jbG9zZU9ic2VydmVyO1xuICAgICAgICBpZiAoY2xvc2VPYnNlcnZlcikge1xuICAgICAgICAgIGNsb3NlT2JzZXJ2ZXIubmV4dChlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS53YXNDbGVhbikge1xuICAgICAgICAgIHNlbGYuX2ZpbmFsQ29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLl9maW5hbEVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzb2NrZXQub25tZXNzYWdlID0gKGU6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0cnlDYXRjaChzZWxmLnJlc3VsdFNlbGVjdG9yKShlKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmplY3QpIHtcbiAgICAgICAgICBzZWxmLl9maW5hbEVycm9yKGVycm9yT2JqZWN0LmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuX2ZpbmFsTmV4dChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKCgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKCF0aGlzLm9ic2VydmVycyB8fCB0aGlzLm9ic2VydmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgeyBzb2NrZXQgfSA9IHRoaXM7XG4gICAgICAgIGlmIChzb2NrZXQgJiYgc29ja2V0LnJlYWR5U3RhdGUgPCAyKSB7XG4gICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb2NrZXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc291cmNlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbmV3IFJlcGxheVN1YmplY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
