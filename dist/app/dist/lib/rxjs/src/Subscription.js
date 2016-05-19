System.register(['./util/isArray', './util/isObject', './util/isFunction', './util/tryCatch', './util/errorObject', './util/UnsubscriptionError'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var isArray_1, isObject_1, isFunction_1, tryCatch_1, errorObject_1, UnsubscriptionError_1;
    var Subscription;
    return {
        setters:[
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
            },
            function (isObject_1_1) {
                isObject_1 = isObject_1_1;
            },
            function (isFunction_1_1) {
                isFunction_1 = isFunction_1_1;
            },
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            },
            function (UnsubscriptionError_1_1) {
                UnsubscriptionError_1 = UnsubscriptionError_1_1;
            }],
        execute: function() {
            /**
             * Represents a disposable resource, such as the execution of an Observable. A
             * Subscription has one important method, `unsubscribe`, that takes no argument
             * and just disposes the resource held by the subscription.
             *
             * Additionally, subscriptions may be grouped together through the `add()`
             * method, which will attach a child Subscription to the current Subscription.
             * When a Subscription is unsubscribed, all its children (and its grandchildren)
             * will be unsubscribed as well.
             *
             * @class Subscription
             */
            Subscription = (function () {
                /**
                 * @param {function(): void} [unsubscribe] A function describing how to
                 * perform the disposal of resources when the `unsubscribe` method is called.
                 */
                function Subscription(unsubscribe) {
                    /**
                     * A flag to indicate whether this Subscription has already been unsubscribed.
                     * @type {boolean}
                     */
                    this.isUnsubscribed = false;
                    if (unsubscribe) {
                        this._unsubscribe = unsubscribe;
                    }
                }
                /**
                 * Disposes the resources held by the subscription. May, for instance, cancel
                 * an ongoing Observable execution or cancel any other type of work that
                 * started when the Subscription was created.
                 * @return {void}
                 */
                Subscription.prototype.unsubscribe = function () {
                    var hasErrors = false;
                    var errors;
                    if (this.isUnsubscribed) {
                        return;
                    }
                    this.isUnsubscribed = true;
                    var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
                    this._subscriptions = null;
                    if (isFunction_1.isFunction(_unsubscribe)) {
                        var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
                        if (trial === errorObject_1.errorObject) {
                            hasErrors = true;
                            (errors = errors || []).push(errorObject_1.errorObject.e);
                        }
                    }
                    if (isArray_1.isArray(_subscriptions)) {
                        var index = -1;
                        var len = _subscriptions.length;
                        while (++index < len) {
                            var sub = _subscriptions[index];
                            if (isObject_1.isObject(sub)) {
                                var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                                if (trial === errorObject_1.errorObject) {
                                    hasErrors = true;
                                    errors = errors || [];
                                    var err = errorObject_1.errorObject.e;
                                    if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                                        errors = errors.concat(err.errors);
                                    }
                                    else {
                                        errors.push(err);
                                    }
                                }
                            }
                        }
                    }
                    if (hasErrors) {
                        throw new UnsubscriptionError_1.UnsubscriptionError(errors);
                    }
                };
                /**
                 * Adds a tear down to be called during the unsubscribe() of this
                 * Subscription.
                 *
                 * If the tear down being added is a subscription that is already
                 * unsubscribed, is the same reference `add` is being called on, or is
                 * `Subscription.EMPTY`, it will not be added.
                 *
                 * If this subscription is already in an `isUnsubscribed` state, the passed
                 * tear down logic will be executed immediately.
                 *
                 * @param {TeardownLogic} teardown The additional logic to execute on
                 * teardown.
                 * @return {Subscription} Returns the Subscription used or created to be
                 * added to the inner subscriptions list. This Subscription can be used with
                 * `remove()` to remove the passed teardown logic from the inner subscriptions
                 * list.
                 */
                Subscription.prototype.add = function (teardown) {
                    if (!teardown || (teardown === this) || (teardown === Subscription.EMPTY)) {
                        return;
                    }
                    var sub = teardown;
                    switch (typeof teardown) {
                        case 'function':
                            sub = new Subscription(teardown);
                        case 'object':
                            if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
                                break;
                            }
                            else if (this.isUnsubscribed) {
                                sub.unsubscribe();
                            }
                            else {
                                (this._subscriptions || (this._subscriptions = [])).push(sub);
                            }
                            break;
                        default:
                            throw new Error('Unrecognized teardown ' + teardown + ' added to Subscription.');
                    }
                    return sub;
                };
                /**
                 * Removes a Subscription from the internal list of subscriptions that will
                 * unsubscribe during the unsubscribe process of this Subscription.
                 * @param {Subscription} subscription The subscription to remove.
                 * @return {void}
                 */
                Subscription.prototype.remove = function (subscription) {
                    // HACK: This might be redundant because of the logic in `add()`
                    if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
                        return;
                    }
                    var subscriptions = this._subscriptions;
                    if (subscriptions) {
                        var subscriptionIndex = subscriptions.indexOf(subscription);
                        if (subscriptionIndex !== -1) {
                            subscriptions.splice(subscriptionIndex, 1);
                        }
                    }
                };
                Subscription.EMPTY = (function (empty) {
                    empty.isUnsubscribed = true;
                    return empty;
                }(new Subscription()));
                return Subscription;
            }());
            exports_1("Subscription", Subscription);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL1N1YnNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CQTs7Ozs7Ozs7Ozs7ZUFXRztZQUNIO2dCQVlFOzs7bUJBR0c7Z0JBQ0gsc0JBQVksV0FBd0I7b0JBVnBDOzs7dUJBR0c7b0JBQ0ksbUJBQWMsR0FBWSxLQUFLLENBQUM7b0JBT3JDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ1QsSUFBSyxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7b0JBQzFDLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRDs7Ozs7bUJBS0c7Z0JBQ0gsa0NBQVcsR0FBWDtvQkFDRSxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLElBQUksTUFBYSxDQUFDO29CQUVsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsTUFBTSxDQUFDO29CQUNULENBQUM7b0JBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBRTNCLElBQUEsU0FBcUQsRUFBN0MsOEJBQVksRUFBRSxrQ0FBYyxDQUFrQjtvQkFFL0MsSUFBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBRW5DLEVBQUUsQ0FBQyxDQUFDLHVCQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixJQUFJLEtBQUssR0FBRyxtQkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDOUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzRCQUMxQixTQUFTLEdBQUcsSUFBSSxDQUFDOzRCQUNqQixDQUFDLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlDLENB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RTtvQkFDaEUsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLElBQUksSUFBTSxDQUMxQixZQUFZLEtBQUssSUFBSSxDQUFDLElBQUksQ0FDMUIsWUFBWSxLQUFLLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pDLE1BQU0sQ0FBQztvQkFDVCxDQUFDO29CQUVELElBQU0sYUFBYSxHQUFVLElBQUssQ0FBQyxjQUFjLENBQUM7b0JBRWxELEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLElBQU0saUJBQWlCLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDOUQsRUFBRSxDQUFDLENBQUMsaUJBQWlCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM3QixhQUFhLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUM3QyxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFsSmEsa0JBQUssR0FBaUIsQ0FBQyxVQUFTLEtBQVU7b0JBQ3RELEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFnSnpCLG1CQUFDO1lBQUQsQ0FwSkEsQUFvSkMsSUFBQTtZQXBKRCx1Q0FvSkMsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9TdWJzY3JpcHRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzQXJyYXl9IGZyb20gJy4vdXRpbC9pc0FycmF5JztcbmltcG9ydCB7aXNPYmplY3R9IGZyb20gJy4vdXRpbC9pc09iamVjdCc7XG5pbXBvcnQge2lzRnVuY3Rpb259IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7dHJ5Q2F0Y2h9IGZyb20gJy4vdXRpbC90cnlDYXRjaCc7XG5pbXBvcnQge2Vycm9yT2JqZWN0fSBmcm9tICcuL3V0aWwvZXJyb3JPYmplY3QnO1xuaW1wb3J0IHtVbnN1YnNjcmlwdGlvbkVycm9yfSBmcm9tICcuL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5vbnltb3VzU3Vic2NyaXB0aW9uIHtcbiAgdW5zdWJzY3JpYmUoKTogdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgVGVhcmRvd25Mb2dpYyA9IEFub255bW91c1N1YnNjcmlwdGlvbiB8IEZ1bmN0aW9uIHwgdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaXB0aW9uIGV4dGVuZHMgQW5vbnltb3VzU3Vic2NyaXB0aW9uIHtcbiAgdW5zdWJzY3JpYmUoKTogdm9pZDtcbiAgaXNVbnN1YnNjcmliZWQ6IGJvb2xlYW47XG4gIGFkZCh0ZWFyZG93bjogVGVhcmRvd25Mb2dpYyk6IElTdWJzY3JpcHRpb247XG4gIHJlbW92ZShzdWI6IElTdWJzY3JpcHRpb24pOiB2b2lkO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBkaXNwb3NhYmxlIHJlc291cmNlLCBzdWNoIGFzIHRoZSBleGVjdXRpb24gb2YgYW4gT2JzZXJ2YWJsZS4gQVxuICogU3Vic2NyaXB0aW9uIGhhcyBvbmUgaW1wb3J0YW50IG1ldGhvZCwgYHVuc3Vic2NyaWJlYCwgdGhhdCB0YWtlcyBubyBhcmd1bWVudFxuICogYW5kIGp1c3QgZGlzcG9zZXMgdGhlIHJlc291cmNlIGhlbGQgYnkgdGhlIHN1YnNjcmlwdGlvbi5cbiAqXG4gKiBBZGRpdGlvbmFsbHksIHN1YnNjcmlwdGlvbnMgbWF5IGJlIGdyb3VwZWQgdG9nZXRoZXIgdGhyb3VnaCB0aGUgYGFkZCgpYFxuICogbWV0aG9kLCB3aGljaCB3aWxsIGF0dGFjaCBhIGNoaWxkIFN1YnNjcmlwdGlvbiB0byB0aGUgY3VycmVudCBTdWJzY3JpcHRpb24uXG4gKiBXaGVuIGEgU3Vic2NyaXB0aW9uIGlzIHVuc3Vic2NyaWJlZCwgYWxsIGl0cyBjaGlsZHJlbiAoYW5kIGl0cyBncmFuZGNoaWxkcmVuKVxuICogd2lsbCBiZSB1bnN1YnNjcmliZWQgYXMgd2VsbC5cbiAqXG4gKiBAY2xhc3MgU3Vic2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb24gaW1wbGVtZW50cyBJU3Vic2NyaXB0aW9uIHtcbiAgcHVibGljIHN0YXRpYyBFTVBUWTogU3Vic2NyaXB0aW9uID0gKGZ1bmN0aW9uKGVtcHR5OiBhbnkpe1xuICAgIGVtcHR5LmlzVW5zdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZW1wdHk7XG4gIH0obmV3IFN1YnNjcmlwdGlvbigpKSk7XG5cbiAgLyoqXG4gICAqIEEgZmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoaXMgU3Vic2NyaXB0aW9uIGhhcyBhbHJlYWR5IGJlZW4gdW5zdWJzY3JpYmVkLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHB1YmxpYyBpc1Vuc3Vic2NyaWJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCk6IHZvaWR9IFt1bnN1YnNjcmliZV0gQSBmdW5jdGlvbiBkZXNjcmliaW5nIGhvdyB0b1xuICAgKiBwZXJmb3JtIHRoZSBkaXNwb3NhbCBvZiByZXNvdXJjZXMgd2hlbiB0aGUgYHVuc3Vic2NyaWJlYCBtZXRob2QgaXMgY2FsbGVkLlxuICAgKi9cbiAgY29uc3RydWN0b3IodW5zdWJzY3JpYmU/OiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHVuc3Vic2NyaWJlKSB7XG4gICAgICAoPGFueT4gdGhpcykuX3Vuc3Vic2NyaWJlID0gdW5zdWJzY3JpYmU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3Bvc2VzIHRoZSByZXNvdXJjZXMgaGVsZCBieSB0aGUgc3Vic2NyaXB0aW9uLiBNYXksIGZvciBpbnN0YW5jZSwgY2FuY2VsXG4gICAqIGFuIG9uZ29pbmcgT2JzZXJ2YWJsZSBleGVjdXRpb24gb3IgY2FuY2VsIGFueSBvdGhlciB0eXBlIG9mIHdvcmsgdGhhdFxuICAgKiBzdGFydGVkIHdoZW4gdGhlIFN1YnNjcmlwdGlvbiB3YXMgY3JlYXRlZC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIGxldCBoYXNFcnJvcnMgPSBmYWxzZTtcbiAgICBsZXQgZXJyb3JzOiBhbnlbXTtcblxuICAgIGlmICh0aGlzLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc1Vuc3Vic2NyaWJlZCA9IHRydWU7XG5cbiAgICBjb25zdCB7IF91bnN1YnNjcmliZSwgX3N1YnNjcmlwdGlvbnMgfSA9ICg8YW55PiB0aGlzKTtcblxuICAgICg8YW55PiB0aGlzKS5fc3Vic2NyaXB0aW9ucyA9IG51bGw7XG5cbiAgICBpZiAoaXNGdW5jdGlvbihfdW5zdWJzY3JpYmUpKSB7XG4gICAgICBsZXQgdHJpYWwgPSB0cnlDYXRjaChfdW5zdWJzY3JpYmUpLmNhbGwodGhpcyk7XG4gICAgICBpZiAodHJpYWwgPT09IGVycm9yT2JqZWN0KSB7XG4gICAgICAgIGhhc0Vycm9ycyA9IHRydWU7XG4gICAgICAgIChlcnJvcnMgPSBlcnJvcnMgfHwgW10pLnB1c2goZXJyb3JPYmplY3QuZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkoX3N1YnNjcmlwdGlvbnMpKSB7XG5cbiAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgY29uc3QgbGVuID0gX3N1YnNjcmlwdGlvbnMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoKytpbmRleCA8IGxlbikge1xuICAgICAgICBjb25zdCBzdWIgPSBfc3Vic2NyaXB0aW9uc1tpbmRleF07XG4gICAgICAgIGlmIChpc09iamVjdChzdWIpKSB7XG4gICAgICAgICAgbGV0IHRyaWFsID0gdHJ5Q2F0Y2goc3ViLnVuc3Vic2NyaWJlKS5jYWxsKHN1Yik7XG4gICAgICAgICAgaWYgKHRyaWFsID09PSBlcnJvck9iamVjdCkge1xuICAgICAgICAgICAgaGFzRXJyb3JzID0gdHJ1ZTtcbiAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycyB8fCBbXTtcbiAgICAgICAgICAgIGxldCBlcnIgPSBlcnJvck9iamVjdC5lO1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdChlcnIuZXJyb3JzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc0Vycm9ycykge1xuICAgICAgdGhyb3cgbmV3IFVuc3Vic2NyaXB0aW9uRXJyb3IoZXJyb3JzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHRlYXIgZG93biB0byBiZSBjYWxsZWQgZHVyaW5nIHRoZSB1bnN1YnNjcmliZSgpIG9mIHRoaXNcbiAgICogU3Vic2NyaXB0aW9uLlxuICAgKlxuICAgKiBJZiB0aGUgdGVhciBkb3duIGJlaW5nIGFkZGVkIGlzIGEgc3Vic2NyaXB0aW9uIHRoYXQgaXMgYWxyZWFkeVxuICAgKiB1bnN1YnNjcmliZWQsIGlzIHRoZSBzYW1lIHJlZmVyZW5jZSBgYWRkYCBpcyBiZWluZyBjYWxsZWQgb24sIG9yIGlzXG4gICAqIGBTdWJzY3JpcHRpb24uRU1QVFlgLCBpdCB3aWxsIG5vdCBiZSBhZGRlZC5cbiAgICpcbiAgICogSWYgdGhpcyBzdWJzY3JpcHRpb24gaXMgYWxyZWFkeSBpbiBhbiBgaXNVbnN1YnNjcmliZWRgIHN0YXRlLCB0aGUgcGFzc2VkXG4gICAqIHRlYXIgZG93biBsb2dpYyB3aWxsIGJlIGV4ZWN1dGVkIGltbWVkaWF0ZWx5LlxuICAgKlxuICAgKiBAcGFyYW0ge1RlYXJkb3duTG9naWN9IHRlYXJkb3duIFRoZSBhZGRpdGlvbmFsIGxvZ2ljIHRvIGV4ZWN1dGUgb25cbiAgICogdGVhcmRvd24uXG4gICAqIEByZXR1cm4ge1N1YnNjcmlwdGlvbn0gUmV0dXJucyB0aGUgU3Vic2NyaXB0aW9uIHVzZWQgb3IgY3JlYXRlZCB0byBiZVxuICAgKiBhZGRlZCB0byB0aGUgaW5uZXIgc3Vic2NyaXB0aW9ucyBsaXN0LiBUaGlzIFN1YnNjcmlwdGlvbiBjYW4gYmUgdXNlZCB3aXRoXG4gICAqIGByZW1vdmUoKWAgdG8gcmVtb3ZlIHRoZSBwYXNzZWQgdGVhcmRvd24gbG9naWMgZnJvbSB0aGUgaW5uZXIgc3Vic2NyaXB0aW9uc1xuICAgKiBsaXN0LlxuICAgKi9cbiAgYWRkKHRlYXJkb3duOiBUZWFyZG93bkxvZ2ljKTogU3Vic2NyaXB0aW9uIHtcbiAgICBpZiAoIXRlYXJkb3duIHx8IChcbiAgICAgICAgdGVhcmRvd24gPT09IHRoaXMpIHx8IChcbiAgICAgICAgdGVhcmRvd24gPT09IFN1YnNjcmlwdGlvbi5FTVBUWSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc3ViID0gKDxTdWJzY3JpcHRpb24+IHRlYXJkb3duKTtcblxuICAgIHN3aXRjaCAodHlwZW9mIHRlYXJkb3duKSB7XG4gICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24oPCgoKSA9PiB2b2lkKSA+IHRlYXJkb3duKTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChzdWIuaXNVbnN1YnNjcmliZWQgfHwgdHlwZW9mIHN1Yi51bnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAoKDxhbnk+IHRoaXMpLl9zdWJzY3JpcHRpb25zIHx8ICgoPGFueT4gdGhpcykuX3N1YnNjcmlwdGlvbnMgPSBbXSkpLnB1c2goc3ViKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5yZWNvZ25pemVkIHRlYXJkb3duICcgKyB0ZWFyZG93biArICcgYWRkZWQgdG8gU3Vic2NyaXB0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWI7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIFN1YnNjcmlwdGlvbiBmcm9tIHRoZSBpbnRlcm5hbCBsaXN0IG9mIHN1YnNjcmlwdGlvbnMgdGhhdCB3aWxsXG4gICAqIHVuc3Vic2NyaWJlIGR1cmluZyB0aGUgdW5zdWJzY3JpYmUgcHJvY2VzcyBvZiB0aGlzIFN1YnNjcmlwdGlvbi5cbiAgICogQHBhcmFtIHtTdWJzY3JpcHRpb259IHN1YnNjcmlwdGlvbiBUaGUgc3Vic2NyaXB0aW9uIHRvIHJlbW92ZS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlbW92ZShzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbik6IHZvaWQge1xuXG4gICAgLy8gSEFDSzogVGhpcyBtaWdodCBiZSByZWR1bmRhbnQgYmVjYXVzZSBvZiB0aGUgbG9naWMgaW4gYGFkZCgpYFxuICAgIGlmIChzdWJzY3JpcHRpb24gPT0gbnVsbCAgIHx8IChcbiAgICAgICAgc3Vic2NyaXB0aW9uID09PSB0aGlzKSB8fCAoXG4gICAgICAgIHN1YnNjcmlwdGlvbiA9PT0gU3Vic2NyaXB0aW9uLkVNUFRZKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbnMgPSAoPGFueT4gdGhpcykuX3N1YnNjcmlwdGlvbnM7XG5cbiAgICBpZiAoc3Vic2NyaXB0aW9ucykge1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uSW5kZXggPSBzdWJzY3JpcHRpb25zLmluZGV4T2Yoc3Vic2NyaXB0aW9uKTtcbiAgICAgIGlmIChzdWJzY3JpcHRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgc3Vic2NyaXB0aW9ucy5zcGxpY2Uoc3Vic2NyaXB0aW9uSW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
