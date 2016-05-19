System.register(['../Subscriber', '../Subscription', '../Observable', '../Subject', '../util/Map', '../util/FastMap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, Subscription_1, Observable_1, Subject_1, Map_1, FastMap_1;
    var GroupByOperator, GroupBySubscriber, GroupDurationSubscriber, GroupedObservable, InnerRefCountSubscription;
    /**
     * Groups the items emitted by an Observable according to a specified criterion,
     * and emits these grouped items as `GroupedObservables`, one
     * {@link GroupedObservable} per group.
     *
     * <img src="./img/groupBy.png" width="100%">
     *
     * @param {function(value: T): K} keySelector a function that extracts the key
     * for each item.
     * @param {function(value: T): R} [elementSelector] a function that extracts the
     * return element for each item.
     * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
     * a function that returns an Observable to determine how long each group should
     * exist.
     * @return {Observable<GroupedObservable<K,R>>} an Observable that emits
     * GroupedObservables, each of which corresponds to a unique key value and each
     * of which emits those items from the source Observable that share that key
     * value.
     * @method groupBy
     * @owner Observable
     */
    function groupBy(keySelector, elementSelector, durationSelector) {
        return this.lift(new GroupByOperator(this, keySelector, elementSelector, durationSelector));
    }
    exports_1("groupBy", groupBy);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (Map_1_1) {
                Map_1 = Map_1_1;
            },
            function (FastMap_1_1) {
                FastMap_1 = FastMap_1_1;
            }],
        execute: function() {
            GroupByOperator = (function () {
                function GroupByOperator(source, keySelector, elementSelector, durationSelector) {
                    this.source = source;
                    this.keySelector = keySelector;
                    this.elementSelector = elementSelector;
                    this.durationSelector = durationSelector;
                }
                GroupByOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector));
                };
                return GroupByOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            GroupBySubscriber = (function (_super) {
                __extends(GroupBySubscriber, _super);
                function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector) {
                    _super.call(this);
                    this.keySelector = keySelector;
                    this.elementSelector = elementSelector;
                    this.durationSelector = durationSelector;
                    this.groups = null;
                    this.attemptedToUnsubscribe = false;
                    this.count = 0;
                    this.destination = destination;
                    this.add(destination);
                }
                GroupBySubscriber.prototype._next = function (value) {
                    var key;
                    try {
                        key = this.keySelector(value);
                    }
                    catch (err) {
                        this.error(err);
                        return;
                    }
                    this._group(value, key);
                };
                GroupBySubscriber.prototype._group = function (value, key) {
                    var groups = this.groups;
                    if (!groups) {
                        groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
                    }
                    var group = groups.get(key);
                    if (!group) {
                        groups.set(key, group = new Subject_1.Subject());
                        var groupedObservable = new GroupedObservable(key, group, this);
                        if (this.durationSelector) {
                            this._selectDuration(key, group);
                        }
                        this.destination.next(groupedObservable);
                    }
                    if (this.elementSelector) {
                        this._selectElement(value, group);
                    }
                    else {
                        this.tryGroupNext(value, group);
                    }
                };
                GroupBySubscriber.prototype._selectElement = function (value, group) {
                    var result;
                    try {
                        result = this.elementSelector(value);
                    }
                    catch (err) {
                        this.error(err);
                        return;
                    }
                    this.tryGroupNext(result, group);
                };
                GroupBySubscriber.prototype._selectDuration = function (key, group) {
                    var duration;
                    try {
                        duration = this.durationSelector(new GroupedObservable(key, group));
                    }
                    catch (err) {
                        this.error(err);
                        return;
                    }
                    this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
                };
                GroupBySubscriber.prototype.tryGroupNext = function (value, group) {
                    if (!group.isUnsubscribed) {
                        group.next(value);
                    }
                };
                GroupBySubscriber.prototype._error = function (err) {
                    var groups = this.groups;
                    if (groups) {
                        groups.forEach(function (group, key) {
                            group.error(err);
                        });
                        groups.clear();
                    }
                    this.destination.error(err);
                };
                GroupBySubscriber.prototype._complete = function () {
                    var groups = this.groups;
                    if (groups) {
                        groups.forEach(function (group, key) {
                            group.complete();
                        });
                        groups.clear();
                    }
                    this.destination.complete();
                };
                GroupBySubscriber.prototype.removeGroup = function (key) {
                    this.groups.delete(key);
                };
                GroupBySubscriber.prototype.unsubscribe = function () {
                    if (!this.isUnsubscribed && !this.attemptedToUnsubscribe) {
                        this.attemptedToUnsubscribe = true;
                        if (this.count === 0) {
                            _super.prototype.unsubscribe.call(this);
                        }
                    }
                };
                return GroupBySubscriber;
            }(Subscriber_1.Subscriber));
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            GroupDurationSubscriber = (function (_super) {
                __extends(GroupDurationSubscriber, _super);
                function GroupDurationSubscriber(key, group, parent) {
                    _super.call(this);
                    this.key = key;
                    this.group = group;
                    this.parent = parent;
                }
                GroupDurationSubscriber.prototype._next = function (value) {
                    this.tryComplete();
                };
                GroupDurationSubscriber.prototype._error = function (err) {
                    this.tryError(err);
                };
                GroupDurationSubscriber.prototype._complete = function () {
                    this.tryComplete();
                };
                GroupDurationSubscriber.prototype.tryError = function (err) {
                    var group = this.group;
                    if (!group.isUnsubscribed) {
                        group.error(err);
                    }
                    this.parent.removeGroup(this.key);
                };
                GroupDurationSubscriber.prototype.tryComplete = function () {
                    var group = this.group;
                    if (!group.isUnsubscribed) {
                        group.complete();
                    }
                    this.parent.removeGroup(this.key);
                };
                return GroupDurationSubscriber;
            }(Subscriber_1.Subscriber));
            /**
             * An Observable representing values belonging to the same group represented by
             * a common key. The values emitted by a GroupedObservable come from the source
             * Observable. The common key is available as the field `key` on a
             * GroupedObservable instance.
             *
             * @class GroupedObservable<K, T>
             */
            GroupedObservable = (function (_super) {
                __extends(GroupedObservable, _super);
                function GroupedObservable(key, groupSubject, refCountSubscription) {
                    _super.call(this);
                    this.key = key;
                    this.groupSubject = groupSubject;
                    this.refCountSubscription = refCountSubscription;
                }
                GroupedObservable.prototype._subscribe = function (subscriber) {
                    var subscription = new Subscription_1.Subscription();
                    var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
                    if (refCountSubscription && !refCountSubscription.isUnsubscribed) {
                        subscription.add(new InnerRefCountSubscription(refCountSubscription));
                    }
                    subscription.add(groupSubject.subscribe(subscriber));
                    return subscription;
                };
                return GroupedObservable;
            }(Observable_1.Observable));
            exports_1("GroupedObservable", GroupedObservable);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            InnerRefCountSubscription = (function (_super) {
                __extends(InnerRefCountSubscription, _super);
                function InnerRefCountSubscription(parent) {
                    _super.call(this);
                    this.parent = parent;
                    parent.count++;
                }
                InnerRefCountSubscription.prototype.unsubscribe = function () {
                    var parent = this.parent;
                    if (!parent.isUnsubscribed && !this.isUnsubscribed) {
                        _super.prototype.unsubscribe.call(this);
                        parent.count -= 1;
                        if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                            parent.unsubscribe();
                        }
                    }
                };
                return InnerRefCountSubscription;
            }(Subscription_1.Subscription));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2dyb3VwQnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9CRztJQUNILGlCQUFpQyxXQUE0QixFQUM1QixlQUFpQyxFQUNqQyxnQkFBd0U7UUFDdkcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFlLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFKRCw2QkFJQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJEO2dCQUNFLHlCQUFtQixNQUFxQixFQUNwQixXQUE0QixFQUM1QixlQUFpQyxFQUNqQyxnQkFBd0U7b0JBSHpFLFdBQU0sR0FBTixNQUFNLENBQWU7b0JBQ3BCLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtvQkFDNUIsb0JBQWUsR0FBZixlQUFlLENBQWtCO29CQUNqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXdEO2dCQUM1RixDQUFDO2dCQUVELDhCQUFJLEdBQUosVUFBSyxVQUErQyxFQUFFLE1BQVc7b0JBQy9ELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksaUJBQWlCLENBQzVDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUMxRSxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFDSCxzQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUF5QyxxQ0FBYTtnQkFLcEQsMkJBQVksV0FBZ0QsRUFDeEMsV0FBNEIsRUFDNUIsZUFBaUMsRUFDakMsZ0JBQXdFO29CQUMxRixpQkFBTyxDQUFDO29CQUhVLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtvQkFDNUIsb0JBQWUsR0FBZixlQUFlLENBQWtCO29CQUNq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QkMsQ0FoQnVDLDJCQUFZLEdBZ0JuRCIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9ncm91cEJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAnLi4vU3ViamVjdCc7XG5pbXBvcnQge01hcH0gZnJvbSAnLi4vdXRpbC9NYXAnO1xuaW1wb3J0IHtGYXN0TWFwfSBmcm9tICcuLi91dGlsL0Zhc3RNYXAnO1xuXG4vKipcbiAqIEdyb3VwcyB0aGUgaXRlbXMgZW1pdHRlZCBieSBhbiBPYnNlcnZhYmxlIGFjY29yZGluZyB0byBhIHNwZWNpZmllZCBjcml0ZXJpb24sXG4gKiBhbmQgZW1pdHMgdGhlc2UgZ3JvdXBlZCBpdGVtcyBhcyBgR3JvdXBlZE9ic2VydmFibGVzYCwgb25lXG4gKiB7QGxpbmsgR3JvdXBlZE9ic2VydmFibGV9IHBlciBncm91cC5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL2dyb3VwQnkucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbih2YWx1ZTogVCk6IEt9IGtleVNlbGVjdG9yIGEgZnVuY3Rpb24gdGhhdCBleHRyYWN0cyB0aGUga2V5XG4gKiBmb3IgZWFjaCBpdGVtLlxuICogQHBhcmFtIHtmdW5jdGlvbih2YWx1ZTogVCk6IFJ9IFtlbGVtZW50U2VsZWN0b3JdIGEgZnVuY3Rpb24gdGhhdCBleHRyYWN0cyB0aGVcbiAqIHJldHVybiBlbGVtZW50IGZvciBlYWNoIGl0ZW0uXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKGdyb3VwZWQ6IEdyb3VwZWRPYnNlcnZhYmxlPEssUj4pOiBPYnNlcnZhYmxlPGFueT59IFtkdXJhdGlvblNlbGVjdG9yXVxuICogYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0byBkZXRlcm1pbmUgaG93IGxvbmcgZWFjaCBncm91cCBzaG91bGRcbiAqIGV4aXN0LlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxHcm91cGVkT2JzZXJ2YWJsZTxLLFI+Pn0gYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzXG4gKiBHcm91cGVkT2JzZXJ2YWJsZXMsIGVhY2ggb2Ygd2hpY2ggY29ycmVzcG9uZHMgdG8gYSB1bmlxdWUga2V5IHZhbHVlIGFuZCBlYWNoXG4gKiBvZiB3aGljaCBlbWl0cyB0aG9zZSBpdGVtcyBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB0aGF0IHNoYXJlIHRoYXQga2V5XG4gKiB2YWx1ZS5cbiAqIEBtZXRob2QgZ3JvdXBCeVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwQnk8VCwgSywgUj4oa2V5U2VsZWN0b3I6ICh2YWx1ZTogVCkgPT4gSyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRTZWxlY3Rvcj86ICh2YWx1ZTogVCkgPT4gUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uU2VsZWN0b3I/OiAoZ3JvdXBlZDogR3JvdXBlZE9ic2VydmFibGU8SywgUj4pID0+IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8R3JvdXBlZE9ic2VydmFibGU8SywgUj4+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgR3JvdXBCeU9wZXJhdG9yKHRoaXMsIGtleVNlbGVjdG9yLCBlbGVtZW50U2VsZWN0b3IsIGR1cmF0aW9uU2VsZWN0b3IpKTtcbn1cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwQnlTaWduYXR1cmU8VD4ge1xuICA8Sz4oa2V5U2VsZWN0b3I6ICh2YWx1ZTogVCkgPT4gSyk6IE9ic2VydmFibGU8R3JvdXBlZE9ic2VydmFibGU8SywgVD4+O1xuICA8Sz4oa2V5U2VsZWN0b3I6ICh2YWx1ZTogVCkgPT4gSywgZWxlbWVudFNlbGVjdG9yOiB2b2lkLCBkdXJhdGlvblNlbGVjdG9yOiAoZ3JvdXBlZDogR3JvdXBlZE9ic2VydmFibGU8SywgVD4pID0+IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8R3JvdXBlZE9ic2VydmFibGU8SywgVD4+O1xuICA8SywgUj4oa2V5U2VsZWN0b3I6ICh2YWx1ZTogVCkgPT4gSywgZWxlbWVudFNlbGVjdG9yPzogKHZhbHVlOiBUKSA9PiBSLCBkdXJhdGlvblNlbGVjdG9yPzogKGdyb3VwZWQ6IEdyb3VwZWRPYnNlcnZhYmxlPEssIFI+KSA9PiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPEdyb3VwZWRPYnNlcnZhYmxlPEssIFI+Pjtcbn1cbi8qIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVmQ291bnRTdWJzY3JpcHRpb24ge1xuICBjb3VudDogbnVtYmVyO1xuICB1bnN1YnNjcmliZTogKCkgPT4gdm9pZDtcbiAgaXNVbnN1YnNjcmliZWQ6IGJvb2xlYW47XG4gIGF0dGVtcHRlZFRvVW5zdWJzY3JpYmU6IGJvb2xlYW47XG59XG5cbmNsYXNzIEdyb3VwQnlPcGVyYXRvcjxULCBLLCBSPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIEdyb3VwZWRPYnNlcnZhYmxlPEssIFI+PiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzb3VyY2U6IE9ic2VydmFibGU8VD4sXG4gICAgICAgICAgICAgIHByaXZhdGUga2V5U2VsZWN0b3I6ICh2YWx1ZTogVCkgPT4gSyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50U2VsZWN0b3I/OiAodmFsdWU6IFQpID0+IFIsXG4gICAgICAgICAgICAgIHByaXZhdGUgZHVyYXRpb25TZWxlY3Rvcj86IChncm91cGVkOiBHcm91cGVkT2JzZXJ2YWJsZTxLLCBSPikgPT4gT2JzZXJ2YWJsZTxhbnk+KSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8R3JvdXBlZE9ic2VydmFibGU8SywgUj4+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBHcm91cEJ5U3Vic2NyaWJlcihcbiAgICAgIHN1YnNjcmliZXIsIHRoaXMua2V5U2VsZWN0b3IsIHRoaXMuZWxlbWVudFNlbGVjdG9yLCB0aGlzLmR1cmF0aW9uU2VsZWN0b3JcbiAgICApKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgR3JvdXBCeVN1YnNjcmliZXI8VCwgSywgUj4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IGltcGxlbWVudHMgUmVmQ291bnRTdWJzY3JpcHRpb24ge1xuICBwcml2YXRlIGdyb3VwczogTWFwPEssIFN1YmplY3Q8VHxSPj4gPSBudWxsO1xuICBwdWJsaWMgYXR0ZW1wdGVkVG9VbnN1YnNjcmliZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgY291bnQ6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8R3JvdXBlZE9ic2VydmFibGU8SywgUj4+LFxuICAgICAgICAgICAgICBwcml2YXRlIGtleVNlbGVjdG9yOiAodmFsdWU6IFQpID0+IEssXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudFNlbGVjdG9yPzogKHZhbHVlOiBUKSA9PiBSLFxuICAgICAgICAgICAgICBwcml2YXRlIGR1cmF0aW9uU2VsZWN0b3I/OiAoZ3JvdXBlZDogR3JvdXBlZE9ic2VydmFibGU8SywgUj4pID0+IE9ic2VydmFibGU8YW55Pikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgIHRoaXMuYWRkKGRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIGxldCBrZXk6IEs7XG4gICAgdHJ5IHtcbiAgICAgIGtleSA9IHRoaXMua2V5U2VsZWN0b3IodmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2dyb3VwKHZhbHVlLCBrZXkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ3JvdXAodmFsdWU6IFQsIGtleTogSykge1xuICAgIGxldCBncm91cHMgPSB0aGlzLmdyb3VwcztcblxuICAgIGlmICghZ3JvdXBzKSB7XG4gICAgICBncm91cHMgPSB0aGlzLmdyb3VwcyA9IHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnID8gbmV3IEZhc3RNYXAoKSA6IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBsZXQgZ3JvdXAgPSBncm91cHMuZ2V0KGtleSk7XG5cbiAgICBpZiAoIWdyb3VwKSB7XG4gICAgICBncm91cHMuc2V0KGtleSwgZ3JvdXAgPSBuZXcgU3ViamVjdDxSPigpKTtcbiAgICAgIGNvbnN0IGdyb3VwZWRPYnNlcnZhYmxlID0gbmV3IEdyb3VwZWRPYnNlcnZhYmxlKGtleSwgZ3JvdXAsIHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5kdXJhdGlvblNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdER1cmF0aW9uKGtleSwgZ3JvdXApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoZ3JvdXBlZE9ic2VydmFibGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgdGhpcy5fc2VsZWN0RWxlbWVudCh2YWx1ZSwgZ3JvdXApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyeUdyb3VwTmV4dCh2YWx1ZSwgZ3JvdXApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdEVsZW1lbnQodmFsdWU6IFQsIGdyb3VwOiBTdWJqZWN0PFQgfCBSPikge1xuICAgIGxldCByZXN1bHQ6IFI7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuZWxlbWVudFNlbGVjdG9yKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50cnlHcm91cE5leHQocmVzdWx0LCBncm91cCk7XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3REdXJhdGlvbihrZXk6IEssIGdyb3VwOiBhbnkpIHtcbiAgICBsZXQgZHVyYXRpb246IGFueTtcbiAgICB0cnkge1xuICAgICAgZHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uU2VsZWN0b3IobmV3IEdyb3VwZWRPYnNlcnZhYmxlPEssIFI+KGtleSwgZ3JvdXApKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hZGQoZHVyYXRpb24uc3Vic2NyaWJlKG5ldyBHcm91cER1cmF0aW9uU3Vic2NyaWJlcihrZXksIGdyb3VwLCB0aGlzKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlHcm91cE5leHQodmFsdWU6IFR8UiwgZ3JvdXA6IFN1YmplY3Q8VCB8IFI+KTogdm9pZCB7XG4gICAgaWYgKCFncm91cC5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgZ3JvdXAubmV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9lcnJvcihlcnI6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGdyb3VwcyA9IHRoaXMuZ3JvdXBzO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgIGdyb3Vwcy5mb3JFYWNoKChncm91cCwga2V5KSA9PiB7XG4gICAgICAgIGdyb3VwLmVycm9yKGVycik7XG4gICAgICB9KTtcblxuICAgICAgZ3JvdXBzLmNsZWFyKCk7XG4gICAgfVxuICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKTogdm9pZCB7XG4gICAgY29uc3QgZ3JvdXBzID0gdGhpcy5ncm91cHM7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgZ3JvdXBzLmZvckVhY2goKGdyb3VwLCBrZXkpID0+IHtcbiAgICAgICAgZ3JvdXAuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICBncm91cHMuY2xlYXIoKTtcbiAgICB9XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcmVtb3ZlR3JvdXAoa2V5OiBLKTogdm9pZCB7XG4gICAgdGhpcy5ncm91cHMuZGVsZXRlKGtleSk7XG4gIH1cblxuICB1bnN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNVbnN1YnNjcmliZWQgJiYgIXRoaXMuYXR0ZW1wdGVkVG9VbnN1YnNjcmliZSkge1xuICAgICAgdGhpcy5hdHRlbXB0ZWRUb1Vuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmNvdW50ID09PSAwKSB7XG4gICAgICAgIHN1cGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBHcm91cER1cmF0aW9uU3Vic2NyaWJlcjxLLCBUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGtleTogSyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBncm91cDogU3ViamVjdDxUPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwYXJlbnQ6IEdyb3VwQnlTdWJzY3JpYmVyPGFueSwgSywgVD4pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgdGhpcy50cnlDb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9lcnJvcihlcnI6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudHJ5RXJyb3IoZXJyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKTogdm9pZCB7XG4gICAgdGhpcy50cnlDb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlFcnJvcihlcnI6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5ncm91cDtcbiAgICBpZiAoIWdyb3VwLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICBncm91cC5lcnJvcihlcnIpO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudC5yZW1vdmVHcm91cCh0aGlzLmtleSk7XG4gIH1cblxuICBwcml2YXRlIHRyeUNvbXBsZXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5ncm91cDtcbiAgICBpZiAoIWdyb3VwLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICBncm91cC5jb21wbGV0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudC5yZW1vdmVHcm91cCh0aGlzLmtleSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBPYnNlcnZhYmxlIHJlcHJlc2VudGluZyB2YWx1ZXMgYmVsb25naW5nIHRvIHRoZSBzYW1lIGdyb3VwIHJlcHJlc2VudGVkIGJ5XG4gKiBhIGNvbW1vbiBrZXkuIFRoZSB2YWx1ZXMgZW1pdHRlZCBieSBhIEdyb3VwZWRPYnNlcnZhYmxlIGNvbWUgZnJvbSB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlLiBUaGUgY29tbW9uIGtleSBpcyBhdmFpbGFibGUgYXMgdGhlIGZpZWxkIGBrZXlgIG9uIGFcbiAqIEdyb3VwZWRPYnNlcnZhYmxlIGluc3RhbmNlLlxuICpcbiAqIEBjbGFzcyBHcm91cGVkT2JzZXJ2YWJsZTxLLCBUPlxuICovXG5leHBvcnQgY2xhc3MgR3JvdXBlZE9ic2VydmFibGU8SywgVD4gZXh0ZW5kcyBPYnNlcnZhYmxlPFQ+IHtcbiAgY29uc3RydWN0b3IocHVibGljIGtleTogSyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBncm91cFN1YmplY3Q6IFN1YmplY3Q8VD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVmQ291bnRTdWJzY3JpcHRpb24/OiBSZWZDb3VudFN1YnNjcmlwdGlvbikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgIGNvbnN0IHtyZWZDb3VudFN1YnNjcmlwdGlvbiwgZ3JvdXBTdWJqZWN0fSA9IHRoaXM7XG4gICAgaWYgKHJlZkNvdW50U3Vic2NyaXB0aW9uICYmICFyZWZDb3VudFN1YnNjcmlwdGlvbi5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgc3Vic2NyaXB0aW9uLmFkZChuZXcgSW5uZXJSZWZDb3VudFN1YnNjcmlwdGlvbihyZWZDb3VudFN1YnNjcmlwdGlvbikpO1xuICAgIH1cbiAgICBzdWJzY3JpcHRpb24uYWRkKGdyb3VwU3ViamVjdC5zdWJzY3JpYmUoc3Vic2NyaWJlcikpO1xuICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIElubmVyUmVmQ291bnRTdWJzY3JpcHRpb24gZXh0ZW5kcyBTdWJzY3JpcHRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmVudDogUmVmQ291bnRTdWJzY3JpcHRpb24pIHtcbiAgICBzdXBlcigpO1xuICAgIHBhcmVudC5jb3VudCsrO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG4gICAgaWYgKCFwYXJlbnQuaXNVbnN1YnNjcmliZWQgJiYgIXRoaXMuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgIHN1cGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICBwYXJlbnQuY291bnQgLT0gMTtcbiAgICAgIGlmIChwYXJlbnQuY291bnQgPT09IDAgJiYgcGFyZW50LmF0dGVtcHRlZFRvVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgcGFyZW50LnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
