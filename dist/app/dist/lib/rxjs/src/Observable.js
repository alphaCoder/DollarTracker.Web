System.register(['./util/root', './symbol/observable', './util/toSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1, observable_1, toSubscriber_1;
    var Observable;
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            },
            function (observable_1_1) {
                observable_1 = observable_1_1;
            },
            function (toSubscriber_1_1) {
                toSubscriber_1 = toSubscriber_1_1;
            }],
        execute: function() {
            /**
             * A representation of any set of values over any amount of time. This the most basic building block
             * of RxJS.
             *
             * @class Observable<T>
             */
            Observable = (function () {
                /**
                 * @constructor
                 * @param {Function} subscribe the function that is  called when the Observable is
                 * initially subscribed to. This function is given a Subscriber, to which new values
                 * can be `next`ed, or an `error` method can be called to raise an error, or
                 * `complete` can be called to notify of a successful completion.
                 */
                function Observable(subscribe) {
                    this._isScalar = false;
                    if (subscribe) {
                        this._subscribe = subscribe;
                    }
                }
                /**
                 * Creates a new Observable, with this Observable as the source, and the passed
                 * operator defined as the new observable's operator.
                 * @method lift
                 * @param {Operator} operator the operator defining the operation to take on the observable
                 * @return {Observable} a new observable with the Operator applied
                 */
                Observable.prototype.lift = function (operator) {
                    var observable = new Observable();
                    observable.source = this;
                    observable.operator = operator;
                    return observable;
                };
                /**
                 * Registers handlers for handling emitted values, error and completions from the observable, and
                 *  executes the observable's subscriber function, which will take action to set up the underlying data stream
                 * @method subscribe
                 * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
                 *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
                 * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
                 *  the error will be thrown as unhandled
                 * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
                 * @return {ISubscription} a subscription reference to the registered handlers
                 */
                Observable.prototype.subscribe = function (observerOrNext, error, complete) {
                    var operator = this.operator;
                    var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
                    sink.add(operator ? operator.call(sink, this) : this._subscribe(sink));
                    if (sink.syncErrorThrowable) {
                        sink.syncErrorThrowable = false;
                        if (sink.syncErrorThrown) {
                            throw sink.syncErrorValue;
                        }
                    }
                    return sink;
                };
                /**
                 * @method forEach
                 * @param {Function} next a handler for each value emitted by the observable
                 * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
                 * @return {Promise} a promise that either resolves on observable completion or
                 *  rejects with the handled error
                 */
                Observable.prototype.forEach = function (next, PromiseCtor) {
                    var _this = this;
                    if (!PromiseCtor) {
                        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                            PromiseCtor = root_1.root.Rx.config.Promise;
                        }
                        else if (root_1.root.Promise) {
                            PromiseCtor = root_1.root.Promise;
                        }
                    }
                    if (!PromiseCtor) {
                        throw new Error('no Promise impl found');
                    }
                    return new PromiseCtor(function (resolve, reject) {
                        var subscription = _this.subscribe(function (value) {
                            if (subscription) {
                                // if there is a subscription, then we can surmise
                                // the next handling is asynchronous. Any errors thrown
                                // need to be rejected explicitly and unsubscribe must be
                                // called manually
                                try {
                                    next(value);
                                }
                                catch (err) {
                                    reject(err);
                                    subscription.unsubscribe();
                                }
                            }
                            else {
                                // if there is NO subscription, then we're getting a nexted
                                // value synchronously during subscription. We can just call it.
                                // If it errors, Observable's `subscribe` imple will ensure the
                                // unsubscription logic is called, then synchronously rethrow the error.
                                // After that, Promise will trap the error and send it
                                // down the rejection path.
                                next(value);
                            }
                        }, reject, resolve);
                    });
                };
                Observable.prototype._subscribe = function (subscriber) {
                    return this.source.subscribe(subscriber);
                };
                /**
                 * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
                 * @method Symbol.observable
                 * @return {Observable} this instance of the observable
                 */
                Observable.prototype[observable_1.$$observable] = function () {
                    return this;
                };
                // HACK: Since TypeScript inherits static properties too, we have to
                // fight against TypeScript here so Subject can have a different static create signature
                /**
                 * Creates a new cold Observable by calling the Observable constructor
                 * @static true
                 * @owner Observable
                 * @method create
                 * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
                 * @return {Observable} a new cold observable
                 */
                Observable.create = function (subscribe) {
                    return new Observable(subscribe);
                };
                return Observable;
            }());
            exports_1("Observable", Observable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL09ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Ozs7O2VBS0c7WUFDSDtnQkFPRTs7Ozs7O21CQU1HO2dCQUNILG9CQUFZLFNBQTJEO29CQVpoRSxjQUFTLEdBQVksS0FBSyxDQUFDO29CQWFoQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO29CQUM5QixDQUFDO2dCQUNILENBQUM7Z0JBZ0JEOzs7Ozs7bUJBTUc7Z0JBQ0gseUJBQUksR0FBSixVQUFRLFFBQXdCO29CQUM5QixJQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBSyxDQUFDO29CQUN2QyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDekIsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQy9CLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRUQ7Ozs7Ozs7Ozs7bUJBVUc7Z0JBQ0gsOEJBQVMsR0FBVCxVQUFVLGNBQTBELEVBQzFELEtBQTRCLEVBQzVCLFFBQXFCO29CQUVyQiw0QkFBUSxDQUFVO29CQUMxQixJQUFNLElBQUksR0FBRywyQkFBWSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBRTNELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFFdkUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQzt3QkFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQzt3QkFDNUIsQ0FBQztvQkFDSCxDQUFDO29CQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRDs7Ozs7O21CQU1HO2dCQUNILDRCQUFPLEdBQVAsVUFBUSxJQUF3QixFQUFFLFdBQTRCO29CQUE5RCxpQkFxQ0M7b0JBcENDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDakIsRUFBRSxDQUFDLENBQUMsV0FBSSxDQUFDLEVBQUUsSUFBSSxXQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxXQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUN4RCxXQUFXLEdBQUcsV0FBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO3dCQUN2QyxDQUFDO3dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDeEIsV0FBVyxHQUFHLFdBQUksQ0FBQyxPQUFPLENBQUM7d0JBQzdCLENBQUM7b0JBQ0gsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztvQkFDM0MsQ0FBQztvQkFFRCxNQUFNLENBQUMsSUFBSSxXQUFXLENBQU8sVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDM0MsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUs7NEJBQ3hDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0NBQ2pCLGtEQUFrRDtnQ0FDbEQsdURBQXVEO2dDQUN2RCx5REFBeUQ7Z0NBQ3pELGtCQUFrQjtnQ0FDbEIsSUFBSSxDQUFDO29DQUNILElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQ0FDZCxDQUFFO2dDQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0NBQ2IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29DQUNaLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQ0FDN0IsQ0FBQzs0QkFDSCxDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNOLDJEQUEyRDtnQ0FDM0QsZ0VBQWdFO2dDQUNoRSwrREFBK0Q7Z0NBQy9ELHdFQUF3RTtnQ0FDeEUsc0RBQXNEO2dDQUN0RCwyQkFBMkI7Z0NBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDZCxDQUFDO3dCQUNILENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3RCLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBRVMsK0JBQVUsR0FBcEIsVUFBcUIsVUFBMkI7b0JBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkFNRDs7OzttQkFJRztnQkFDSCxxQkFBQyx5QkFBWSxDQUFDLEdBQWQ7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQXZIRCxvRUFBb0U7Z0JBQ3BFLHdGQUF3RjtnQkFDeEY7Ozs7Ozs7bUJBT0c7Z0JBQ0ksaUJBQU0sR0FBYSxVQUFJLFNBQTJEO29CQUN2RixNQUFNLENBQUMsSUFBSSxVQUFVLENBQUksU0FBUyxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQztnQkE0R0osaUJBQUM7WUFBRCxDQTVJQSxBQTRJQyxJQUFBO1lBNUlELG1DQTRJQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL09ic2VydmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BhcnRpYWxPYnNlcnZlcn0gZnJvbSAnLi9PYnNlcnZlcic7XG5pbXBvcnQge09wZXJhdG9yfSBmcm9tICcuL09wZXJhdG9yJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7U3Vic2NyaXB0aW9uLCBBbm9ueW1vdXNTdWJzY3JpcHRpb24sIFRlYXJkb3duTG9naWN9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7cm9vdH0gZnJvbSAnLi91dGlsL3Jvb3QnO1xuaW1wb3J0IHskJG9ic2VydmFibGV9IGZyb20gJy4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHt0b1N1YnNjcmliZXJ9IGZyb20gJy4vdXRpbC90b1N1YnNjcmliZXInO1xuXG5pbXBvcnQge0lmT2JzZXJ2YWJsZX0gZnJvbSAnLi9vYnNlcnZhYmxlL0lmT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0Vycm9yT2JzZXJ2YWJsZX0gZnJvbSAnLi9vYnNlcnZhYmxlL0Vycm9yT2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Vic2NyaWJhYmxlPFQ+IHtcbiAgc3Vic2NyaWJlKG9ic2VydmVyT3JOZXh0PzogUGFydGlhbE9ic2VydmVyPFQ+IHwgKCh2YWx1ZTogVCkgPT4gdm9pZCksXG4gICAgICAgICAgICBlcnJvcj86IChlcnJvcjogYW55KSA9PiB2b2lkLFxuICAgICAgICAgICAgY29tcGxldGU/OiAoKSA9PiB2b2lkKTogQW5vbnltb3VzU3Vic2NyaXB0aW9uO1xufVxuXG5leHBvcnQgdHlwZSBTdWJzY3JpYmFibGVPclByb21pc2U8VD4gPSBTdWJzY3JpYmFibGU8VD4gfCBQcm9taXNlPFQ+O1xuZXhwb3J0IHR5cGUgT2JzZXJ2YWJsZUlucHV0PFQ+ID0gU3Vic2NyaWJhYmxlT3JQcm9taXNlPFQ+IHwgQXJyYXlMaWtlPFQ+O1xuXG4vKipcbiAqIEEgcmVwcmVzZW50YXRpb24gb2YgYW55IHNldCBvZiB2YWx1ZXMgb3ZlciBhbnkgYW1vdW50IG9mIHRpbWUuIFRoaXMgdGhlIG1vc3QgYmFzaWMgYnVpbGRpbmcgYmxvY2tcbiAqIG9mIFJ4SlMuXG4gKlxuICogQGNsYXNzIE9ic2VydmFibGU8VD5cbiAqL1xuZXhwb3J0IGNsYXNzIE9ic2VydmFibGU8VD4gaW1wbGVtZW50cyBTdWJzY3JpYmFibGU8VD4ge1xuXG4gIHB1YmxpYyBfaXNTY2FsYXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgc291cmNlOiBPYnNlcnZhYmxlPGFueT47XG4gIHByb3RlY3RlZCBvcGVyYXRvcjogT3BlcmF0b3I8YW55LCBUPjtcblxuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YnNjcmliZSB0aGUgZnVuY3Rpb24gdGhhdCBpcyAgY2FsbGVkIHdoZW4gdGhlIE9ic2VydmFibGUgaXNcbiAgICogaW5pdGlhbGx5IHN1YnNjcmliZWQgdG8uIFRoaXMgZnVuY3Rpb24gaXMgZ2l2ZW4gYSBTdWJzY3JpYmVyLCB0byB3aGljaCBuZXcgdmFsdWVzXG4gICAqIGNhbiBiZSBgbmV4dGBlZCwgb3IgYW4gYGVycm9yYCBtZXRob2QgY2FuIGJlIGNhbGxlZCB0byByYWlzZSBhbiBlcnJvciwgb3JcbiAgICogYGNvbXBsZXRlYCBjYW4gYmUgY2FsbGVkIHRvIG5vdGlmeSBvZiBhIHN1Y2Nlc3NmdWwgY29tcGxldGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHN1YnNjcmliZT86IDxSPihzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFI+KSA9PiBUZWFyZG93bkxvZ2ljKSB7XG4gICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhBQ0s6IFNpbmNlIFR5cGVTY3JpcHQgaW5oZXJpdHMgc3RhdGljIHByb3BlcnRpZXMgdG9vLCB3ZSBoYXZlIHRvXG4gIC8vIGZpZ2h0IGFnYWluc3QgVHlwZVNjcmlwdCBoZXJlIHNvIFN1YmplY3QgY2FuIGhhdmUgYSBkaWZmZXJlbnQgc3RhdGljIGNyZWF0ZSBzaWduYXR1cmVcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgY29sZCBPYnNlcnZhYmxlIGJ5IGNhbGxpbmcgdGhlIE9ic2VydmFibGUgY29uc3RydWN0b3JcbiAgICogQHN0YXRpYyB0cnVlXG4gICAqIEBvd25lciBPYnNlcnZhYmxlXG4gICAqIEBtZXRob2QgY3JlYXRlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YnNjcmliZT8gdGhlIHN1YnNjcmliZXIgZnVuY3Rpb24gdG8gYmUgcGFzc2VkIHRvIHRoZSBPYnNlcnZhYmxlIGNvbnN0cnVjdG9yXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IGEgbmV3IGNvbGQgb2JzZXJ2YWJsZVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTogRnVuY3Rpb24gPSA8VD4oc3Vic2NyaWJlPzogPFI+KHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Uj4pID0+IFRlYXJkb3duTG9naWMpID0+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oc3Vic2NyaWJlKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBPYnNlcnZhYmxlLCB3aXRoIHRoaXMgT2JzZXJ2YWJsZSBhcyB0aGUgc291cmNlLCBhbmQgdGhlIHBhc3NlZFxuICAgKiBvcGVyYXRvciBkZWZpbmVkIGFzIHRoZSBuZXcgb2JzZXJ2YWJsZSdzIG9wZXJhdG9yLlxuICAgKiBAbWV0aG9kIGxpZnRcbiAgICogQHBhcmFtIHtPcGVyYXRvcn0gb3BlcmF0b3IgdGhlIG9wZXJhdG9yIGRlZmluaW5nIHRoZSBvcGVyYXRpb24gdG8gdGFrZSBvbiB0aGUgb2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhIG5ldyBvYnNlcnZhYmxlIHdpdGggdGhlIE9wZXJhdG9yIGFwcGxpZWRcbiAgICovXG4gIGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPFQsIFI+KTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPFI+KCk7XG4gICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgIG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgaGFuZGxlcnMgZm9yIGhhbmRsaW5nIGVtaXR0ZWQgdmFsdWVzLCBlcnJvciBhbmQgY29tcGxldGlvbnMgZnJvbSB0aGUgb2JzZXJ2YWJsZSwgYW5kXG4gICAqICBleGVjdXRlcyB0aGUgb2JzZXJ2YWJsZSdzIHN1YnNjcmliZXIgZnVuY3Rpb24sIHdoaWNoIHdpbGwgdGFrZSBhY3Rpb24gdG8gc2V0IHVwIHRoZSB1bmRlcmx5aW5nIGRhdGEgc3RyZWFtXG4gICAqIEBtZXRob2Qgc3Vic2NyaWJlXG4gICAqIEBwYXJhbSB7UGFydGlhbE9ic2VydmVyfEZ1bmN0aW9ufSBvYnNlcnZlck9yTmV4dCAob3B0aW9uYWwpIGVpdGhlciBhbiBvYnNlcnZlciBkZWZpbmluZyBhbGwgZnVuY3Rpb25zIHRvIGJlIGNhbGxlZCxcbiAgICogIG9yIHRoZSBmaXJzdCBvZiB0aHJlZSBwb3NzaWJsZSBoYW5kbGVycywgd2hpY2ggaXMgdGhlIGhhbmRsZXIgZm9yIGVhY2ggdmFsdWUgZW1pdHRlZCBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcnJvciAob3B0aW9uYWwpIGEgaGFuZGxlciBmb3IgYSB0ZXJtaW5hbCBldmVudCByZXN1bHRpbmcgZnJvbSBhbiBlcnJvci4gSWYgbm8gZXJyb3IgaGFuZGxlciBpcyBwcm92aWRlZCxcbiAgICogIHRoZSBlcnJvciB3aWxsIGJlIHRocm93biBhcyB1bmhhbmRsZWRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGxldGUgKG9wdGlvbmFsKSBhIGhhbmRsZXIgZm9yIGEgdGVybWluYWwgZXZlbnQgcmVzdWx0aW5nIGZyb20gc3VjY2Vzc2Z1bCBjb21wbGV0aW9uLlxuICAgKiBAcmV0dXJuIHtJU3Vic2NyaXB0aW9ufSBhIHN1YnNjcmlwdGlvbiByZWZlcmVuY2UgdG8gdGhlIHJlZ2lzdGVyZWQgaGFuZGxlcnNcbiAgICovXG4gIHN1YnNjcmliZShvYnNlcnZlck9yTmV4dD86IFBhcnRpYWxPYnNlcnZlcjxUPiB8ICgodmFsdWU6IFQpID0+IHZvaWQpLFxuICAgICAgICAgICAgZXJyb3I/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCxcbiAgICAgICAgICAgIGNvbXBsZXRlPzogKCkgPT4gdm9pZCk6IFN1YnNjcmlwdGlvbiB7XG5cbiAgICBjb25zdCB7IG9wZXJhdG9yIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNpbmsgPSB0b1N1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG5cbiAgICBzaW5rLmFkZChvcGVyYXRvciA/IG9wZXJhdG9yLmNhbGwoc2luaywgdGhpcykgOiB0aGlzLl9zdWJzY3JpYmUoc2luaykpO1xuXG4gICAgaWYgKHNpbmsuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICBzaW5rLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgaWYgKHNpbmsuc3luY0Vycm9yVGhyb3duKSB7XG4gICAgICAgIHRocm93IHNpbmsuc3luY0Vycm9yVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbms7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBmb3JFYWNoXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHQgYSBoYW5kbGVyIGZvciBlYWNoIHZhbHVlIGVtaXR0ZWQgYnkgdGhlIG9ic2VydmFibGVcbiAgICogQHBhcmFtIHtQcm9taXNlQ29uc3RydWN0b3J9IFtQcm9taXNlQ3Rvcl0gYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB1c2VkIHRvIGluc3RhbnRpYXRlIHRoZSBQcm9taXNlXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSB0aGF0IGVpdGhlciByZXNvbHZlcyBvbiBvYnNlcnZhYmxlIGNvbXBsZXRpb24gb3JcbiAgICogIHJlamVjdHMgd2l0aCB0aGUgaGFuZGxlZCBlcnJvclxuICAgKi9cbiAgZm9yRWFjaChuZXh0OiAodmFsdWU6IFQpID0+IHZvaWQsIFByb21pc2VDdG9yPzogdHlwZW9mIFByb21pc2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIVByb21pc2VDdG9yKSB7XG4gICAgICBpZiAocm9vdC5SeCAmJiByb290LlJ4LmNvbmZpZyAmJiByb290LlJ4LmNvbmZpZy5Qcm9taXNlKSB7XG4gICAgICAgIFByb21pc2VDdG9yID0gcm9vdC5SeC5jb25maWcuUHJvbWlzZTtcbiAgICAgIH0gZWxzZSBpZiAocm9vdC5Qcm9taXNlKSB7XG4gICAgICAgIFByb21pc2VDdG9yID0gcm9vdC5Qcm9taXNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghUHJvbWlzZUN0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm8gUHJvbWlzZSBpbXBsIGZvdW5kJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQ3Rvcjx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgc3Vic2NyaXB0aW9uLCB0aGVuIHdlIGNhbiBzdXJtaXNlXG4gICAgICAgICAgLy8gdGhlIG5leHQgaGFuZGxpbmcgaXMgYXN5bmNocm9ub3VzLiBBbnkgZXJyb3JzIHRocm93blxuICAgICAgICAgIC8vIG5lZWQgdG8gYmUgcmVqZWN0ZWQgZXhwbGljaXRseSBhbmQgdW5zdWJzY3JpYmUgbXVzdCBiZVxuICAgICAgICAgIC8vIGNhbGxlZCBtYW51YWxseVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXh0KHZhbHVlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIE5PIHN1YnNjcmlwdGlvbiwgdGhlbiB3ZSdyZSBnZXR0aW5nIGEgbmV4dGVkXG4gICAgICAgICAgLy8gdmFsdWUgc3luY2hyb25vdXNseSBkdXJpbmcgc3Vic2NyaXB0aW9uLiBXZSBjYW4ganVzdCBjYWxsIGl0LlxuICAgICAgICAgIC8vIElmIGl0IGVycm9ycywgT2JzZXJ2YWJsZSdzIGBzdWJzY3JpYmVgIGltcGxlIHdpbGwgZW5zdXJlIHRoZVxuICAgICAgICAgIC8vIHVuc3Vic2NyaXB0aW9uIGxvZ2ljIGlzIGNhbGxlZCwgdGhlbiBzeW5jaHJvbm91c2x5IHJldGhyb3cgdGhlIGVycm9yLlxuICAgICAgICAgIC8vIEFmdGVyIHRoYXQsIFByb21pc2Ugd2lsbCB0cmFwIHRoZSBlcnJvciBhbmQgc2VuZCBpdFxuICAgICAgICAgIC8vIGRvd24gdGhlIHJlamVjdGlvbiBwYXRoLlxuICAgICAgICAgIG5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LCByZWplY3QsIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIC8vIGBpZmAgYW5kIGB0aHJvd2AgYXJlIHNwZWNpYWwgc25vdyBmbGFrZXMsIHRoZSBjb21waWxlciBzZWVzIHRoZW0gYXMgcmVzZXJ2ZWQgd29yZHNcbiAgc3RhdGljIGlmOiB0eXBlb2YgSWZPYnNlcnZhYmxlLmNyZWF0ZTtcbiAgc3RhdGljIHRocm93OiB0eXBlb2YgRXJyb3JPYnNlcnZhYmxlLmNyZWF0ZTtcblxuICAvKipcbiAgICogQW4gaW50ZXJvcCBwb2ludCBkZWZpbmVkIGJ5IHRoZSBlczctb2JzZXJ2YWJsZSBzcGVjIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5wYXJzaW5nL2VzLW9ic2VydmFibGVcbiAgICogQG1ldGhvZCBTeW1ib2wub2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSB0aGlzIGluc3RhbmNlIG9mIHRoZSBvYnNlcnZhYmxlXG4gICAqL1xuICBbJCRvYnNlcnZhYmxlXSgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
