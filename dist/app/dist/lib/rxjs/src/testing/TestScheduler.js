System.register(['../Observable', '../scheduler/VirtualTimeScheduler', '../Notification', './ColdObservable', './HotObservable', './SubscriptionLog'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, VirtualTimeScheduler_1, Notification_1, ColdObservable_1, HotObservable_1, SubscriptionLog_1;
    var TestScheduler;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (VirtualTimeScheduler_1_1) {
                VirtualTimeScheduler_1 = VirtualTimeScheduler_1_1;
            },
            function (Notification_1_1) {
                Notification_1 = Notification_1_1;
            },
            function (ColdObservable_1_1) {
                ColdObservable_1 = ColdObservable_1_1;
            },
            function (HotObservable_1_1) {
                HotObservable_1 = HotObservable_1_1;
            },
            function (SubscriptionLog_1_1) {
                SubscriptionLog_1 = SubscriptionLog_1_1;
            }],
        execute: function() {
            TestScheduler = (function (_super) {
                __extends(TestScheduler, _super);
                function TestScheduler(assertDeepEqual) {
                    _super.call(this);
                    this.assertDeepEqual = assertDeepEqual;
                    this.hotObservables = [];
                    this.coldObservables = [];
                    this.flushTests = [];
                }
                TestScheduler.prototype.createTime = function (marbles) {
                    var indexOf = marbles.indexOf('|');
                    if (indexOf === -1) {
                        throw new Error('Marble diagram for time should have a completion marker "|"');
                    }
                    return indexOf * TestScheduler.frameTimeFactor;
                };
                TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
                    if (marbles.indexOf('^') !== -1) {
                        throw new Error('Cold observable cannot have subscription offset "^"');
                    }
                    if (marbles.indexOf('!') !== -1) {
                        throw new Error('Cold observable cannot have unsubscription marker "!"');
                    }
                    var messages = TestScheduler.parseMarbles(marbles, values, error);
                    var cold = new ColdObservable_1.ColdObservable(messages, this);
                    this.coldObservables.push(cold);
                    return cold;
                };
                TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
                    if (marbles.indexOf('!') !== -1) {
                        throw new Error('Hot observable cannot have unsubscription marker "!"');
                    }
                    var messages = TestScheduler.parseMarbles(marbles, values, error);
                    var subject = new HotObservable_1.HotObservable(messages, this);
                    this.hotObservables.push(subject);
                    return subject;
                };
                TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
                    var _this = this;
                    var messages = [];
                    observable.subscribe(function (value) {
                        messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createNext(value) });
                    }, function (err) {
                        messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createError(err) });
                    }, function () {
                        messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createComplete() });
                    });
                    return messages;
                };
                TestScheduler.prototype.expectObservable = function (observable, unsubscriptionMarbles) {
                    var _this = this;
                    if (unsubscriptionMarbles === void 0) { unsubscriptionMarbles = null; }
                    var actual = [];
                    var flushTest = { actual: actual, ready: false };
                    var unsubscriptionFrame = TestScheduler
                        .parseMarblesAsSubscriptions(unsubscriptionMarbles).unsubscribedFrame;
                    var subscription;
                    this.schedule(function () {
                        subscription = observable.subscribe(function (x) {
                            var value = x;
                            // Support Observable-of-Observables
                            if (x instanceof Observable_1.Observable) {
                                value = _this.materializeInnerObservable(value, _this.frame);
                            }
                            actual.push({ frame: _this.frame, notification: Notification_1.Notification.createNext(value) });
                        }, function (err) {
                            actual.push({ frame: _this.frame, notification: Notification_1.Notification.createError(err) });
                        }, function () {
                            actual.push({ frame: _this.frame, notification: Notification_1.Notification.createComplete() });
                        });
                    }, 0);
                    if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                        this.schedule(function () { return subscription.unsubscribe(); }, unsubscriptionFrame);
                    }
                    this.flushTests.push(flushTest);
                    return {
                        toBe: function (marbles, values, errorValue) {
                            flushTest.ready = true;
                            flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true);
                        }
                    };
                };
                TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
                    var flushTest = { actual: actualSubscriptionLogs, ready: false };
                    this.flushTests.push(flushTest);
                    return {
                        toBe: function (marbles) {
                            var marblesArray = (typeof marbles === 'string') ? [marbles] : marbles;
                            flushTest.ready = true;
                            flushTest.expected = marblesArray.map(function (marbles) {
                                return TestScheduler.parseMarblesAsSubscriptions(marbles);
                            });
                        }
                    };
                };
                TestScheduler.prototype.flush = function () {
                    var hotObservables = this.hotObservables;
                    while (hotObservables.length > 0) {
                        hotObservables.shift().setup();
                    }
                    _super.prototype.flush.call(this);
                    var readyFlushTests = this.flushTests.filter(function (test) { return test.ready; });
                    while (readyFlushTests.length > 0) {
                        var test = readyFlushTests.shift();
                        this.assertDeepEqual(test.actual, test.expected);
                    }
                };
                TestScheduler.parseMarblesAsSubscriptions = function (marbles) {
                    if (typeof marbles !== 'string') {
                        return new SubscriptionLog_1.SubscriptionLog(Number.POSITIVE_INFINITY);
                    }
                    var len = marbles.length;
                    var groupStart = -1;
                    var subscriptionFrame = Number.POSITIVE_INFINITY;
                    var unsubscriptionFrame = Number.POSITIVE_INFINITY;
                    for (var i = 0; i < len; i++) {
                        var frame = i * this.frameTimeFactor;
                        var c = marbles[i];
                        switch (c) {
                            case '-':
                            case ' ':
                                break;
                            case '(':
                                groupStart = frame;
                                break;
                            case ')':
                                groupStart = -1;
                                break;
                            case '^':
                                if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
                                    throw new Error('Found a second subscription point \'^\' in a ' +
                                        'subscription marble diagram. There can only be one.');
                                }
                                subscriptionFrame = groupStart > -1 ? groupStart : frame;
                                break;
                            case '!':
                                if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                                    throw new Error('Found a second subscription point \'^\' in a ' +
                                        'subscription marble diagram. There can only be one.');
                                }
                                unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
                                break;
                            default:
                                throw new Error('There can only be \'^\' and \'!\' markers in a ' +
                                    'subscription marble diagram. Found instead \'' + c + '\'.');
                        }
                    }
                    if (unsubscriptionFrame < 0) {
                        return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame);
                    }
                    else {
                        return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame, unsubscriptionFrame);
                    }
                };
                TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables) {
                    if (materializeInnerObservables === void 0) { materializeInnerObservables = false; }
                    if (marbles.indexOf('!') !== -1) {
                        throw new Error('Conventional marble diagrams cannot have the ' +
                            'unsubscription marker "!"');
                    }
                    var len = marbles.length;
                    var testMessages = [];
                    var subIndex = marbles.indexOf('^');
                    var frameOffset = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
                    var getValue = typeof values !== 'object' ?
                        function (x) { return x; } :
                        function (x) {
                            // Support Observable-of-Observables
                            if (materializeInnerObservables && values[x] instanceof ColdObservable_1.ColdObservable) {
                                return values[x].messages;
                            }
                            return values[x];
                        };
                    var groupStart = -1;
                    for (var i = 0; i < len; i++) {
                        var frame = i * this.frameTimeFactor + frameOffset;
                        var notification = void 0;
                        var c = marbles[i];
                        switch (c) {
                            case '-':
                            case ' ':
                                break;
                            case '(':
                                groupStart = frame;
                                break;
                            case ')':
                                groupStart = -1;
                                break;
                            case '|':
                                notification = Notification_1.Notification.createComplete();
                                break;
                            case '^':
                                break;
                            case '#':
                                notification = Notification_1.Notification.createError(errorValue || 'error');
                                break;
                            default:
                                notification = Notification_1.Notification.createNext(getValue(c));
                                break;
                        }
                        if (notification) {
                            testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification: notification });
                        }
                    }
                    return testMessages;
                };
                return TestScheduler;
            }(VirtualTimeScheduler_1.VirtualTimeScheduler));
            exports_1("TestScheduler", TestScheduler);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3Rlc3RpbmcvVGVzdFNjaGVkdWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUFtQyxpQ0FBb0I7Z0JBS3JELHVCQUFtQixlQUErRDtvQkFDaEYsaUJBQU8sQ0FBQztvQkFEUyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0Q7b0JBSjFFLG1CQUFjLEdBQXlCLEVBQUUsQ0FBQztvQkFDMUMsb0JBQWUsR0FBMEIsRUFBRSxDQUFDO29CQUM1QyxlQUFVLEdBQW9CLEVBQUUsQ0FBQztnQkFJekMsQ0FBQztnQkFFRCxrQ0FBVSxHQUFWLFVBQVcsT0FBZTtvQkFDeEIsSUFBTSxPQUFPLEdBQVcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDN0MsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO29CQUNqRixDQUFDO29CQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQztnQkFDakQsQ0FBQztnQkFFRCw0Q0FBb0IsR0FBcEIsVUFBd0IsT0FBZSxFQUFFLE1BQVksRUFBRSxLQUFXO29CQUNoRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO29CQUN6RSxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7b0JBQzNFLENBQUM7b0JBQ0QsSUFBTSxR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UixLQUFLLEdBQUc7Z0NBQ04sVUFBVSxHQUFHLEtBQUssQ0FBQztnQ0FDbkIsS0FBSyxDQUFDOzRCQUNSLEtBQUssR0FBRztnQ0FDTixVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQ2hCLEtBQUssQ0FBQzs0QkFDUixLQUFLLEdBQUc7Z0NBQ04sWUFBWSxHQUFHLDJCQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7Z0NBQzdDLEtBQUssQ0FBQzs0QkFDUixLQUFLLEdBQUc7Z0NBQ04sS0FBSyxDQUFDOzRCQUNSLEtBQUssR0FBRztnQ0FDTixZQUFZLEdBQUcsMkJBQVksQ0FBQyxXQUFXLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxDQUFDO2dDQUMvRCxLQUFLLENBQUM7NEJBQ1I7Z0NBQ0UsWUFBWSxHQUFHLDJCQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNwRCxLQUFLLENBQUM7d0JBQ1YsQ0FBQzt3QkFFRCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzRCQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsS0FBSyxFQUFFLGNBQUEsWUFBWSxFQUFFLENBQUMsQ0FBQzt3QkFDbkYsQ0FBQztvQkFDSCxDQUFDO29CQUNELE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0gsb0JBQUM7WUFBRCxDQS9OQSxBQStOQyxDQS9Oa0MsMkNBQW9CLEdBK050RDtZQS9ORCx5Q0ErTkMsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy90ZXN0aW5nL1Rlc3RTY2hlZHVsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtWaXJ0dWFsVGltZVNjaGVkdWxlcn0gZnJvbSAnLi4vc2NoZWR1bGVyL1ZpcnR1YWxUaW1lU2NoZWR1bGVyJztcbmltcG9ydCB7Tm90aWZpY2F0aW9ufSBmcm9tICcuLi9Ob3RpZmljYXRpb24nO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICcuLi9TdWJqZWN0JztcbmltcG9ydCB7Q29sZE9ic2VydmFibGV9IGZyb20gJy4vQ29sZE9ic2VydmFibGUnO1xuaW1wb3J0IHtIb3RPYnNlcnZhYmxlfSBmcm9tICcuL0hvdE9ic2VydmFibGUnO1xuaW1wb3J0IHtUZXN0TWVzc2FnZX0gZnJvbSAnLi9UZXN0TWVzc2FnZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbkxvZ30gZnJvbSAnLi9TdWJzY3JpcHRpb25Mb2cnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5cbmludGVyZmFjZSBGbHVzaGFibGVUZXN0IHtcbiAgcmVhZHk6IGJvb2xlYW47XG4gIGFjdHVhbD86IGFueVtdO1xuICBleHBlY3RlZD86IGFueVtdO1xufVxuXG5leHBvcnQgdHlwZSBvYnNlcnZhYmxlVG9CZUZuID0gKG1hcmJsZXM6IHN0cmluZywgdmFsdWVzPzogYW55LCBlcnJvclZhbHVlPzogYW55KSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgc3Vic2NyaXB0aW9uTG9nc1RvQmVGbiA9IChtYXJibGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIFRlc3RTY2hlZHVsZXIgZXh0ZW5kcyBWaXJ0dWFsVGltZVNjaGVkdWxlciB7XG4gIHByaXZhdGUgaG90T2JzZXJ2YWJsZXM6IEhvdE9ic2VydmFibGU8YW55PltdID0gW107XG4gIHByaXZhdGUgY29sZE9ic2VydmFibGVzOiBDb2xkT2JzZXJ2YWJsZTxhbnk+W10gPSBbXTtcbiAgcHJpdmF0ZSBmbHVzaFRlc3RzOiBGbHVzaGFibGVUZXN0W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXNzZXJ0RGVlcEVxdWFsOiAoYWN0dWFsOiBhbnksIGV4cGVjdGVkOiBhbnkpID0+IGJvb2xlYW4gfCB2b2lkKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGNyZWF0ZVRpbWUobWFyYmxlczogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBpbmRleE9mOiBudW1iZXIgPSBtYXJibGVzLmluZGV4T2YoJ3wnKTtcbiAgICBpZiAoaW5kZXhPZiA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFyYmxlIGRpYWdyYW0gZm9yIHRpbWUgc2hvdWxkIGhhdmUgYSBjb21wbGV0aW9uIG1hcmtlciBcInxcIicpO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXhPZiAqIFRlc3RTY2hlZHVsZXIuZnJhbWVUaW1lRmFjdG9yO1xuICB9XG5cbiAgY3JlYXRlQ29sZE9ic2VydmFibGU8VD4obWFyYmxlczogc3RyaW5nLCB2YWx1ZXM/OiBhbnksIGVycm9yPzogYW55KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgaWYgKG1hcmJsZXMuaW5kZXhPZignXicpICE9PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb2xkIG9ic2VydmFibGUgY2Fubm90IGhhdmUgc3Vic2NyaXB0aW9uIG9mZnNldCBcIl5cIicpO1xuICAgIH1cbiAgICBpZiAobWFyYmxlcy5pbmRleE9mKCchJykgIT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbGQgb2JzZXJ2YWJsZSBjYW5ub3QgaGF2ZSB1bnN1YnNjcmlwdGlvbiBtYXJrZXIgXCIhXCInKTtcbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZXMgPSBUZXN0U2NoZWR1bGVyLnBhcnNlTWFyYmxlcyhtYXJibGVzLCB2YWx1ZXMsIGVycm9yKTtcbiAgICBjb25zdCBjb2xkID0gbmV3IENvbGRPYnNlcnZhYmxlPFQ+KG1lc3NhZ2VzLCB0aGlzKTtcbiAgICB0aGlzLmNvbGRPYnNlcnZhYmxlcy5wdXNoKGNvbGQpO1xuICAgIHJldHVybiBjb2xkO1xuICB9XG5cbiAgY3JlYXRlSG90T2JzZXJ2YWJsZTxUPihtYXJibGVzOiBzdHJpbmcsIHZhbHVlcz86IGFueSwgZXJyb3I/OiBhbnkpOiBTdWJqZWN0PFQ+IHtcbiAgICBpZiAobWFyYmxlcy5pbmRleE9mKCchJykgIT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hvdCBvYnNlcnZhYmxlIGNhbm5vdCBoYXZlIHVuc3Vic2NyaXB0aW9uIG1hcmtlciBcIiFcIicpO1xuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlcyA9IFRlc3RTY2hlZHVsZXIucGFyc2VNYXJibGVzKG1hcmJsZXMsIHZhbHVlcywgZXJyb3IpO1xuICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgSG90T2JzZXJ2YWJsZTxUPihtZXNzYWdlcywgdGhpcyk7XG4gICAgdGhpcy5ob3RPYnNlcnZhYmxlcy5wdXNoKHN1YmplY3QpO1xuICAgIHJldHVybiBzdWJqZWN0O1xuICB9XG5cbiAgcHJpdmF0ZSBtYXRlcmlhbGl6ZUlubmVyT2JzZXJ2YWJsZShvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJGcmFtZTogbnVtYmVyKTogVGVzdE1lc3NhZ2VbXSB7XG4gICAgY29uc3QgbWVzc2FnZXM6IFRlc3RNZXNzYWdlW10gPSBbXTtcbiAgICBvYnNlcnZhYmxlLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgIG1lc3NhZ2VzLnB1c2goeyBmcmFtZTogdGhpcy5mcmFtZSAtIG91dGVyRnJhbWUsIG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uLmNyZWF0ZU5leHQodmFsdWUpIH0pO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIG1lc3NhZ2VzLnB1c2goeyBmcmFtZTogdGhpcy5mcmFtZSAtIG91dGVyRnJhbWUsIG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uLmNyZWF0ZUVycm9yKGVycikgfSk7XG4gICAgfSwgKCkgPT4ge1xuICAgICAgbWVzc2FnZXMucHVzaCh7IGZyYW1lOiB0aGlzLmZyYW1lIC0gb3V0ZXJGcmFtZSwgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24uY3JlYXRlQ29tcGxldGUoKSB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWVzc2FnZXM7XG4gIH1cblxuICBleHBlY3RPYnNlcnZhYmxlKG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PixcbiAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmlwdGlvbk1hcmJsZXM6IHN0cmluZyA9IG51bGwpOiAoeyB0b0JlOiBvYnNlcnZhYmxlVG9CZUZuIH0pIHtcbiAgICBjb25zdCBhY3R1YWw6IFRlc3RNZXNzYWdlW10gPSBbXTtcbiAgICBjb25zdCBmbHVzaFRlc3Q6IEZsdXNoYWJsZVRlc3QgPSB7IGFjdHVhbCwgcmVhZHk6IGZhbHNlIH07XG4gICAgY29uc3QgdW5zdWJzY3JpcHRpb25GcmFtZSA9IFRlc3RTY2hlZHVsZXJcbiAgICAgIC5wYXJzZU1hcmJsZXNBc1N1YnNjcmlwdGlvbnModW5zdWJzY3JpcHRpb25NYXJibGVzKS51bnN1YnNjcmliZWRGcmFtZTtcbiAgICBsZXQgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB4O1xuICAgICAgICAvLyBTdXBwb3J0IE9ic2VydmFibGUtb2YtT2JzZXJ2YWJsZXNcbiAgICAgICAgaWYgKHggaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICAgICAgdmFsdWUgPSB0aGlzLm1hdGVyaWFsaXplSW5uZXJPYnNlcnZhYmxlKHZhbHVlLCB0aGlzLmZyYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBhY3R1YWwucHVzaCh7IGZyYW1lOiB0aGlzLmZyYW1lLCBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbi5jcmVhdGVOZXh0KHZhbHVlKSB9KTtcbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgYWN0dWFsLnB1c2goeyBmcmFtZTogdGhpcy5mcmFtZSwgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24uY3JlYXRlRXJyb3IoZXJyKSB9KTtcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgYWN0dWFsLnB1c2goeyBmcmFtZTogdGhpcy5mcmFtZSwgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24uY3JlYXRlQ29tcGxldGUoKSB9KTtcbiAgICAgIH0pO1xuICAgIH0sIDApO1xuXG4gICAgaWYgKHVuc3Vic2NyaXB0aW9uRnJhbWUgIT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSkge1xuICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSwgdW5zdWJzY3JpcHRpb25GcmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5mbHVzaFRlc3RzLnB1c2goZmx1c2hUZXN0KTtcblxuICAgIHJldHVybiB7XG4gICAgICB0b0JlKG1hcmJsZXM6IHN0cmluZywgdmFsdWVzPzogYW55LCBlcnJvclZhbHVlPzogYW55KSB7XG4gICAgICAgIGZsdXNoVGVzdC5yZWFkeSA9IHRydWU7XG4gICAgICAgIGZsdXNoVGVzdC5leHBlY3RlZCA9IFRlc3RTY2hlZHVsZXIucGFyc2VNYXJibGVzKG1hcmJsZXMsIHZhbHVlcywgZXJyb3JWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGV4cGVjdFN1YnNjcmlwdGlvbnMoYWN0dWFsU3Vic2NyaXB0aW9uTG9nczogU3Vic2NyaXB0aW9uTG9nW10pOiAoeyB0b0JlOiBzdWJzY3JpcHRpb25Mb2dzVG9CZUZuIH0pIHtcbiAgICBjb25zdCBmbHVzaFRlc3Q6IEZsdXNoYWJsZVRlc3QgPSB7IGFjdHVhbDogYWN0dWFsU3Vic2NyaXB0aW9uTG9ncywgcmVhZHk6IGZhbHNlIH07XG4gICAgdGhpcy5mbHVzaFRlc3RzLnB1c2goZmx1c2hUZXN0KTtcbiAgICByZXR1cm4ge1xuICAgICAgdG9CZShtYXJibGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBtYXJibGVzQXJyYXk6IHN0cmluZ1tdID0gKHR5cGVvZiBtYXJibGVzID09PSAnc3RyaW5nJykgPyBbbWFyYmxlc10gOiBtYXJibGVzO1xuICAgICAgICBmbHVzaFRlc3QucmVhZHkgPSB0cnVlO1xuICAgICAgICBmbHVzaFRlc3QuZXhwZWN0ZWQgPSBtYXJibGVzQXJyYXkubWFwKG1hcmJsZXMgPT5cbiAgICAgICAgICBUZXN0U2NoZWR1bGVyLnBhcnNlTWFyYmxlc0FzU3Vic2NyaXB0aW9ucyhtYXJibGVzKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmbHVzaCgpIHtcbiAgICBjb25zdCBob3RPYnNlcnZhYmxlcyA9IHRoaXMuaG90T2JzZXJ2YWJsZXM7XG4gICAgd2hpbGUgKGhvdE9ic2VydmFibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGhvdE9ic2VydmFibGVzLnNoaWZ0KCkuc2V0dXAoKTtcbiAgICB9XG5cbiAgICBzdXBlci5mbHVzaCgpO1xuICAgIGNvbnN0IHJlYWR5Rmx1c2hUZXN0cyA9IHRoaXMuZmx1c2hUZXN0cy5maWx0ZXIodGVzdCA9PiB0ZXN0LnJlYWR5KTtcbiAgICB3aGlsZSAocmVhZHlGbHVzaFRlc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRlc3QgPSByZWFkeUZsdXNoVGVzdHMuc2hpZnQoKTtcbiAgICAgIHRoaXMuYXNzZXJ0RGVlcEVxdWFsKHRlc3QuYWN0dWFsLCB0ZXN0LmV4cGVjdGVkKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcGFyc2VNYXJibGVzQXNTdWJzY3JpcHRpb25zKG1hcmJsZXM6IHN0cmluZyk6IFN1YnNjcmlwdGlvbkxvZyB7XG4gICAgaWYgKHR5cGVvZiBtYXJibGVzICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb25Mb2coTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKTtcbiAgICB9XG4gICAgY29uc3QgbGVuID0gbWFyYmxlcy5sZW5ndGg7XG4gICAgbGV0IGdyb3VwU3RhcnQgPSAtMTtcbiAgICBsZXQgc3Vic2NyaXB0aW9uRnJhbWUgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgbGV0IHVuc3Vic2NyaXB0aW9uRnJhbWUgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBmcmFtZSA9IGkgKiB0aGlzLmZyYW1lVGltZUZhY3RvcjtcbiAgICAgIGNvbnN0IGMgPSBtYXJibGVzW2ldO1xuICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnKCc6XG4gICAgICAgICAgZ3JvdXBTdGFydCA9IGZyYW1lO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcpJzpcbiAgICAgICAgICBncm91cFN0YXJ0ID0gLTE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ14nOlxuICAgICAgICAgIGlmIChzdWJzY3JpcHRpb25GcmFtZSAhPT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIGEgc2Vjb25kIHN1YnNjcmlwdGlvbiBwb2ludCBcXCdeXFwnIGluIGEgJyArXG4gICAgICAgICAgICAgICdzdWJzY3JpcHRpb24gbWFyYmxlIGRpYWdyYW0uIFRoZXJlIGNhbiBvbmx5IGJlIG9uZS4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3Vic2NyaXB0aW9uRnJhbWUgPSBncm91cFN0YXJ0ID4gLTEgPyBncm91cFN0YXJ0IDogZnJhbWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyEnOlxuICAgICAgICAgIGlmICh1bnN1YnNjcmlwdGlvbkZyYW1lICE9PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgYSBzZWNvbmQgc3Vic2NyaXB0aW9uIHBvaW50IFxcJ15cXCcgaW4gYSAnICtcbiAgICAgICAgICAgICAgJ3N1YnNjcmlwdGlvbiBtYXJibGUgZGlhZ3JhbS4gVGhlcmUgY2FuIG9ubHkgYmUgb25lLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bnN1YnNjcmlwdGlvbkZyYW1lID0gZ3JvdXBTdGFydCA+IC0xID8gZ3JvdXBTdGFydCA6IGZyYW1lO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgY2FuIG9ubHkgYmUgXFwnXlxcJyBhbmQgXFwnIVxcJyBtYXJrZXJzIGluIGEgJyArXG4gICAgICAgICAgICAnc3Vic2NyaXB0aW9uIG1hcmJsZSBkaWFncmFtLiBGb3VuZCBpbnN0ZWFkIFxcJycgKyBjICsgJ1xcJy4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5zdWJzY3JpcHRpb25GcmFtZSA8IDApIHtcbiAgICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uTG9nKHN1YnNjcmlwdGlvbkZyYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb25Mb2coc3Vic2NyaXB0aW9uRnJhbWUsIHVuc3Vic2NyaXB0aW9uRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBwYXJzZU1hcmJsZXMobWFyYmxlczogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz86IGFueSxcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvclZhbHVlPzogYW55LFxuICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsaXplSW5uZXJPYnNlcnZhYmxlczogYm9vbGVhbiA9IGZhbHNlKTogVGVzdE1lc3NhZ2VbXSB7XG4gICAgaWYgKG1hcmJsZXMuaW5kZXhPZignIScpICE9PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb252ZW50aW9uYWwgbWFyYmxlIGRpYWdyYW1zIGNhbm5vdCBoYXZlIHRoZSAnICtcbiAgICAgICAgJ3Vuc3Vic2NyaXB0aW9uIG1hcmtlciBcIiFcIicpO1xuICAgIH1cbiAgICBjb25zdCBsZW4gPSBtYXJibGVzLmxlbmd0aDtcbiAgICBjb25zdCB0ZXN0TWVzc2FnZXM6IFRlc3RNZXNzYWdlW10gPSBbXTtcbiAgICBjb25zdCBzdWJJbmRleCA9IG1hcmJsZXMuaW5kZXhPZignXicpO1xuICAgIGNvbnN0IGZyYW1lT2Zmc2V0ID0gc3ViSW5kZXggPT09IC0xID8gMCA6IChzdWJJbmRleCAqIC10aGlzLmZyYW1lVGltZUZhY3Rvcik7XG4gICAgY29uc3QgZ2V0VmFsdWUgPSB0eXBlb2YgdmFsdWVzICE9PSAnb2JqZWN0JyA/XG4gICAgICAoeDogYW55KSA9PiB4IDpcbiAgICAgICh4OiBhbnkpID0+IHtcbiAgICAgICAgLy8gU3VwcG9ydCBPYnNlcnZhYmxlLW9mLU9ic2VydmFibGVzXG4gICAgICAgIGlmIChtYXRlcmlhbGl6ZUlubmVyT2JzZXJ2YWJsZXMgJiYgdmFsdWVzW3hdIGluc3RhbmNlb2YgQ29sZE9ic2VydmFibGUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVzW3hdLm1lc3NhZ2VzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZXNbeF07XG4gICAgICB9O1xuICAgIGxldCBncm91cFN0YXJ0ID0gLTE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBmcmFtZSA9IGkgKiB0aGlzLmZyYW1lVGltZUZhY3RvciArIGZyYW1lT2Zmc2V0O1xuICAgICAgbGV0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uPGFueT47XG4gICAgICBjb25zdCBjID0gbWFyYmxlc1tpXTtcbiAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJygnOlxuICAgICAgICAgIGdyb3VwU3RhcnQgPSBmcmFtZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnKSc6XG4gICAgICAgICAgZ3JvdXBTdGFydCA9IC0xO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd8JzpcbiAgICAgICAgICBub3RpZmljYXRpb24gPSBOb3RpZmljYXRpb24uY3JlYXRlQ29tcGxldGUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnXic6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyMnOlxuICAgICAgICAgIG5vdGlmaWNhdGlvbiA9IE5vdGlmaWNhdGlvbi5jcmVhdGVFcnJvcihlcnJvclZhbHVlIHx8ICdlcnJvcicpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIG5vdGlmaWNhdGlvbiA9IE5vdGlmaWNhdGlvbi5jcmVhdGVOZXh0KGdldFZhbHVlKGMpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKG5vdGlmaWNhdGlvbikge1xuICAgICAgICB0ZXN0TWVzc2FnZXMucHVzaCh7IGZyYW1lOiBncm91cFN0YXJ0ID4gLTEgPyBncm91cFN0YXJ0IDogZnJhbWUsIG5vdGlmaWNhdGlvbiB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRlc3RNZXNzYWdlcztcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
