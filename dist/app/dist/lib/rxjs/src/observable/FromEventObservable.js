System.register(['../Observable', '../util/tryCatch', '../util/errorObject', '../Subscription'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, tryCatch_1, errorObject_1, Subscription_1;
    var FromEventObservable;
    function isNodeStyleEventEmmitter(sourceObj) {
        return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
    }
    function isJQueryStyleEventEmitter(sourceObj) {
        return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
    }
    function isNodeList(sourceObj) {
        return !!sourceObj && sourceObj.toString() === '[object NodeList]';
    }
    function isHTMLCollection(sourceObj) {
        return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
    }
    function isEventTarget(sourceObj) {
        return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
    }
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            FromEventObservable = (function (_super) {
                __extends(FromEventObservable, _super);
                function FromEventObservable(sourceObj, eventName, selector) {
                    _super.call(this);
                    this.sourceObj = sourceObj;
                    this.eventName = eventName;
                    this.selector = selector;
                }
                /**
                 * @param sourceObj
                 * @param eventName
                 * @param selector
                 * @return {FromEventObservable}
                 * @static true
                 * @name fromEvent
                 * @owner Observable
                 */
                FromEventObservable.create = function (sourceObj, eventName, selector) {
                    return new FromEventObservable(sourceObj, eventName, selector);
                };
                FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber) {
                    var unsubscribe;
                    if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
                        for (var i = 0, len = sourceObj.length; i < len; i++) {
                            FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
                        }
                    }
                    else if (isEventTarget(sourceObj)) {
                        sourceObj.addEventListener(eventName, handler);
                        unsubscribe = function () { return sourceObj.removeEventListener(eventName, handler); };
                    }
                    else if (isJQueryStyleEventEmitter(sourceObj)) {
                        sourceObj.on(eventName, handler);
                        unsubscribe = function () { return sourceObj.off(eventName, handler); };
                    }
                    else if (isNodeStyleEventEmmitter(sourceObj)) {
                        sourceObj.addListener(eventName, handler);
                        unsubscribe = function () { return sourceObj.removeListener(eventName, handler); };
                    }
                    subscriber.add(new Subscription_1.Subscription(unsubscribe));
                };
                FromEventObservable.prototype._subscribe = function (subscriber) {
                    var sourceObj = this.sourceObj;
                    var eventName = this.eventName;
                    var selector = this.selector;
                    var handler = selector ? function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i - 0] = arguments[_i];
                        }
                        var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
                        if (result === errorObject_1.errorObject) {
                            subscriber.error(errorObject_1.errorObject.e);
                        }
                        else {
                            subscriber.next(result);
                        }
                    } : function (e) { return subscriber.next(e); };
                    FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
                };
                return FromEventObservable;
            }(Observable_1.Observable));
            exports_1("FromEventObservable", FromEventObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvRnJvbUV2ZW50T2JzZXJ2YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBVUEsa0NBQWtDLFNBQWM7UUFDOUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksT0FBTyxTQUFTLENBQUMsV0FBVyxLQUFLLFVBQVUsSUFBSSxPQUFPLFNBQVMsQ0FBQyxjQUFjLEtBQUssVUFBVSxDQUFDO0lBQ3RILENBQUM7SUFNRCxtQ0FBbUMsU0FBYztRQUMvQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxFQUFFLEtBQUssVUFBVSxJQUFJLE9BQU8sU0FBUyxDQUFDLEdBQUcsS0FBSyxVQUFVLENBQUM7SUFDbEcsQ0FBQztJQUVELG9CQUFvQixTQUFjO1FBQ2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxtQkFBbUIsQ0FBQztJQUNyRSxDQUFDO0lBRUQsMEJBQTBCLFNBQWM7UUFDdEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLHlCQUF5QixDQUFDO0lBQzNFLENBQUM7SUFFRCx1QkFBdUIsU0FBYztRQUNuQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxnQkFBZ0IsS0FBSyxVQUFVLElBQUksT0FBTyxTQUFTLENBQUMsbUJBQW1CLEtBQUssVUFBVSxDQUFDO0lBQ2hJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJRDs7OztlQUlHO1lBQ0g7Z0JBQStDLHVDQUFhO2dCQWUxRCw2QkFBb0IsU0FBMEIsRUFBVSxTQUFpQixFQUFVLFFBQXFDO29CQUN0SCxpQkFBTyxDQUFDO29CQURVLGNBQVMsR0FBVCxTQUFTLENBQWlCO29CQUFVLGNBQVMsR0FBVCxTQUFTLENBQVE7b0JBQVUsYUFBUSxHQUFSLFFBQVEs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SCxDQUFDLEdBQUcsVUFBQyxDQUFNLElBQUssT0FBQSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFsQixDQUFrQixDQUFDO29CQUVuQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFDSCwwQkFBQztZQUFELENBdERBLEFBc0RDLENBdEQ4Qyx1QkFBVSxHQXNEeEQ7WUF0REQscURBc0RDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb2JzZXJ2YWJsZS9Gcm9tRXZlbnRPYnNlcnZhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7dHJ5Q2F0Y2h9IGZyb20gJy4uL3V0aWwvdHJ5Q2F0Y2gnO1xuaW1wb3J0IHtlcnJvck9iamVjdH0gZnJvbSAnLi4vdXRpbC9lcnJvck9iamVjdCc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5cbmV4cG9ydCB0eXBlIE5vZGVTdHlsZUV2ZW50RW1taXR0ZXIgPSB7XG4gIGFkZExpc3RlbmVyOiAoZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKSA9PiB2b2lkO1xuICByZW1vdmVMaXN0ZW5lcjogKGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbikgPT4gdm9pZDtcbn07XG5mdW5jdGlvbiBpc05vZGVTdHlsZUV2ZW50RW1taXR0ZXIoc291cmNlT2JqOiBhbnkpOiBzb3VyY2VPYmogaXMgTm9kZVN0eWxlRXZlbnRFbW1pdHRlciB7XG4gIHJldHVybiAhIXNvdXJjZU9iaiAmJiB0eXBlb2Ygc291cmNlT2JqLmFkZExpc3RlbmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBzb3VyY2VPYmoucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbic7XG59XG5cbmV4cG9ydCB0eXBlIEpRdWVyeVN0eWxlRXZlbnRFbWl0dGVyID0ge1xuICBvbjogKGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbikgPT4gdm9pZDtcbiAgb2ZmOiAoZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKSA9PiB2b2lkO1xufTtcbmZ1bmN0aW9uIGlzSlF1ZXJ5U3R5bGVFdmVudEVtaXR0ZXIoc291cmNlT2JqOiBhbnkpOiBzb3VyY2VPYmogaXMgSlF1ZXJ5U3R5bGVFdmVudEVtaXR0ZXIge1xuICByZXR1cm4gISFzb3VyY2VPYmogJiYgdHlwZW9mIHNvdXJjZU9iai5vbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygc291cmNlT2JqLm9mZiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOb2RlTGlzdChzb3VyY2VPYmo6IGFueSk6IHNvdXJjZU9iaiBpcyBOb2RlTGlzdCB7XG4gIHJldHVybiAhIXNvdXJjZU9iaiAmJiBzb3VyY2VPYmoudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgTm9kZUxpc3RdJztcbn1cblxuZnVuY3Rpb24gaXNIVE1MQ29sbGVjdGlvbihzb3VyY2VPYmo6IGFueSk6IHNvdXJjZU9iaiBpcyBIVE1MQ29sbGVjdGlvbiB7XG4gIHJldHVybiAhIXNvdXJjZU9iaiAmJiBzb3VyY2VPYmoudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJztcbn1cblxuZnVuY3Rpb24gaXNFdmVudFRhcmdldChzb3VyY2VPYmo6IGFueSk6IHNvdXJjZU9iaiBpcyBFdmVudFRhcmdldCB7XG4gIHJldHVybiAhIXNvdXJjZU9iaiAmJiB0eXBlb2Ygc291cmNlT2JqLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHNvdXJjZU9iai5yZW1vdmVFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgdHlwZSBFdmVudFRhcmdldExpa2UgPSBFdmVudFRhcmdldCB8IE5vZGVTdHlsZUV2ZW50RW1taXR0ZXIgfCBKUXVlcnlTdHlsZUV2ZW50RW1pdHRlciB8IE5vZGVMaXN0IHwgSFRNTENvbGxlY3Rpb247XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG5leHBvcnQgY2xhc3MgRnJvbUV2ZW50T2JzZXJ2YWJsZTxULCBSPiBleHRlbmRzIE9ic2VydmFibGU8VD4ge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gc291cmNlT2JqXG4gICAqIEBwYXJhbSBldmVudE5hbWVcbiAgICogQHBhcmFtIHNlbGVjdG9yXG4gICAqIEByZXR1cm4ge0Zyb21FdmVudE9ic2VydmFibGV9XG4gICAqIEBzdGF0aWMgdHJ1ZVxuICAgKiBAbmFtZSBmcm9tRXZlbnRcbiAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICovXG4gIHN0YXRpYyBjcmVhdGU8VD4oc291cmNlT2JqOiBFdmVudFRhcmdldExpa2UsIGV2ZW50TmFtZTogc3RyaW5nLCBzZWxlY3Rvcj86ICguLi5hcmdzOiBBcnJheTxhbnk+KSA9PiBUKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBGcm9tRXZlbnRPYnNlcnZhYmxlKHNvdXJjZU9iaiwgZXZlbnROYW1lLCBzZWxlY3Rvcik7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNvdXJjZU9iajogRXZlbnRUYXJnZXRMaWtlLCBwcml2YXRlIGV2ZW50TmFtZTogc3RyaW5nLCBwcml2YXRlIHNlbGVjdG9yPzogKC4uLmFyZ3M6IEFycmF5PGFueT4pID0+IFQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2V0dXBTdWJzY3JpcHRpb248VD4oc291cmNlT2JqOiBFdmVudFRhcmdldExpa2UsIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbiwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikge1xuICAgIGxldCB1bnN1YnNjcmliZTogKCkgPT4gdm9pZDtcbiAgICBpZiAoaXNOb2RlTGlzdChzb3VyY2VPYmopIHx8IGlzSFRNTENvbGxlY3Rpb24oc291cmNlT2JqKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNvdXJjZU9iai5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBGcm9tRXZlbnRPYnNlcnZhYmxlLnNldHVwU3Vic2NyaXB0aW9uKHNvdXJjZU9ialtpXSwgZXZlbnROYW1lLCBoYW5kbGVyLCBzdWJzY3JpYmVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzRXZlbnRUYXJnZXQoc291cmNlT2JqKSkge1xuICAgICAgc291cmNlT2JqLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCA8RXZlbnRMaXN0ZW5lcj5oYW5kbGVyKTtcbiAgICAgIHVuc3Vic2NyaWJlID0gKCkgPT4gc291cmNlT2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCA8RXZlbnRMaXN0ZW5lcj5oYW5kbGVyKTtcbiAgICB9IGVsc2UgaWYgKGlzSlF1ZXJ5U3R5bGVFdmVudEVtaXR0ZXIoc291cmNlT2JqKSkge1xuICAgICAgc291cmNlT2JqLm9uKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICB1bnN1YnNjcmliZSA9ICgpID0+IHNvdXJjZU9iai5vZmYoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICB9IGVsc2UgaWYgKGlzTm9kZVN0eWxlRXZlbnRFbW1pdHRlcihzb3VyY2VPYmopKSB7XG4gICAgICBzb3VyY2VPYmouYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgIHVuc3Vic2NyaWJlID0gKCkgPT4gc291cmNlT2JqLnJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlci5hZGQobmV3IFN1YnNjcmlwdGlvbih1bnN1YnNjcmliZSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikge1xuICAgIGNvbnN0IHNvdXJjZU9iaiA9IHRoaXMuc291cmNlT2JqO1xuICAgIGNvbnN0IGV2ZW50TmFtZSA9IHRoaXMuZXZlbnROYW1lO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcjtcbiAgICBsZXQgaGFuZGxlciA9IHNlbGVjdG9yID8gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gdHJ5Q2F0Y2goc2VsZWN0b3IpKC4uLmFyZ3MpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmplY3QpIHtcbiAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnJvck9iamVjdC5lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnNjcmliZXIubmV4dChyZXN1bHQpO1xuICAgICAgfVxuICAgIH0gOiAoZTogYW55KSA9PiBzdWJzY3JpYmVyLm5leHQoZSk7XG5cbiAgICBGcm9tRXZlbnRPYnNlcnZhYmxlLnNldHVwU3Vic2NyaXB0aW9uKHNvdXJjZU9iaiwgZXZlbnROYW1lLCBoYW5kbGVyLCBzdWJzY3JpYmVyKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
