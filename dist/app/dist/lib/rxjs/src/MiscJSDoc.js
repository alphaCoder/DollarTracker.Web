System.register(['./Observable', './scheduler/MiscJSDoc', './observable/dom/MiscJSDoc'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1;
    var ObservableDoc, ObserverDoc, SchedulerDoc;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            ObservableDoc = (function () {
                function ObservableDoc() {
                }
                /**
                 * Creates a new Observable that will execute the specified function when a
                 * {@link Subscriber} subscribes to it.
                 *
                 * <span class="informal">Creates an Observable with custom logic given in
                 * the `subscribe` function.</span>
                 *
                 * <img src="./img/create.png" width="100%">
                 *
                 * `create` converts a `subscribe` function to an actual Observable. This is
                 * equivalent to calling the Observable constructor. Write the `subscribe`
                 * function so that it behaves as an Observable: It should invoke the
                 * Subscriber's `next`, `error`, and `complete` methods following the
                 * *Observable Contract*. A well-formed Observable must invoke either the
                 * Subscriber's `complete` method exactly once or its `error` method exactly
                 * once, and invoke nothing else thereafter.
                 *
                 * Most of the times you should not need to use `create` because existing
                 * creation operators (together with instance combination operators) allow you
                 * to create an Observable for most of the use cases. However, `create` is
                 * low-level and is able to create any Observable.
                 *
                 * @example <caption>Emit three random numbers, then complete.</caption>
                 * var result = Rx.Observable.create(function (subscriber) {
                 *   subscriber.next(Math.random());
                 *   subscriber.next(Math.random());
                 *   subscriber.next(Math.random());
                 *   subscriber.complete();
                 * });
                 * result.subscribe(x => console.log(x));
                 *
                 * @see {@link empty}
                 * @see {@link never}
                 * @see {@link of}
                 * @see {@link throw}
                 *
                 * @param {function(subscriber: Subscriber): TeardownLogic} [subscribe] A
                 * function that accepts a {@link Subscriber}, and invokes its `next`,
                 * `error`, and `complete` methods as appropriate, and should return some
                 * logic for tear down, either as a {@link Subscription} or as a function.
                 * @return {Observable} An Observable that, when subscribed, will execute the
                 * specified function.
                 * @static true
                 * @name create
                 * @owner Observable
                 */
                ObservableDoc.create = function (subscribe) {
                    return new Observable_1.Observable(subscribe);
                };
                ;
                return ObservableDoc;
            }());
            exports_1("ObservableDoc", ObservableDoc);
            /**
             * An interface for a consumer of push-based notifications delivered by an
             * {@link Observable}.
             *
             * ```ts
             * interface Observer<T> {
             *   isUnsubscribed?: boolean;
             *   next: (value: T) => void;
             *   error: (err: any) => void;
             *   complete: () => void;
             * }
             * ```
             *
             * An object conforming to the Observer interface is usually
             * given to the `observable.subscribe(observer)` method, and the Observable will
             * call the Observer's `next(value)` method to provide notifications. A
             * well-behaved Observable will call an Observer's `complete()` method exactly
             * once or the Observer's `error(err)` method exactly once, as the last
             * notification delivered.
             *
             * @interface
             * @name Observer
             * @noimport true
             */
            ObserverDoc = (function () {
                function ObserverDoc() {
                    /**
                     * An optional flag to indicate whether this Observer, when used as a
                     * subscriber, has already been unsubscribed from its Observable.
                     * @type {boolean}
                     */
                    this.isUnsubscribed = false;
                }
                /**
                 * The callback to receive notifications of type `next` from the Observable,
                 * with a value. The Observable may call this method 0 or more times.
                 * @param {T} value The `next` value.
                 * @return {void}
                 */
                ObserverDoc.prototype.next = function (value) {
                    return void 0;
                };
                /**
                 * The callback to receive notifications of type `error` from the Observable,
                 * with an attached {@link Error}. Notifies the Observer that the Observable
                 * has experienced an error condition.
                 * @param {any} err The `error` exception.
                 * @return {void}
                 */
                ObserverDoc.prototype.error = function (err) {
                    return void 0;
                };
                /**
                 * The callback to receive a valueless notification of type `complete` from
                 * the Observable. Notifies the Observer that the Observable has finished
                 * sending push-based notifications.
                 * @return {void}
                 */
                ObserverDoc.prototype.complete = function () {
                    return void 0;
                };
                return ObserverDoc;
            }());
            exports_1("ObserverDoc", ObserverDoc);
            /**
             * An execution context and a data structure to order tasks and schedule their
             * execution. Provides a notion of (potentially virtual) time, through the
             * `now()` getter method.
             *
             * Each unit of work in a Scheduler is called an {@link Action}.
             *
             * ```ts
             * interface Scheduler {
             *   now(): number;
             *   schedule(work, delay?, state?): Subscription;
             *   flush(): void;
             *   active: boolean;
             *   actions: Action[];
             *   scheduledId: number;
             * }
             * ```
             *
             * @interface
             * @name Scheduler
             * @noimport true
             */
            SchedulerDoc = (function () {
                function SchedulerDoc() {
                    /**
                     * A flag to indicate whether the Scheduler is currently executing a batch of
                     * queued actions.
                     * @type {boolean}
                     */
                    this.active = false;
                    /**
                     * The queue of scheduled actions as an array.
                     * @type {Action[]}
                     */
                    this.actions = [];
                    /**
                     * An internal ID used to track the latest asynchronous task such as those
                     * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
                     * others.
                     * @type {number}
                     */
                    this.scheduledId = 0;
                }
                /**
                 * A getter method that returns a number representing the current time
                 * (at the time this function was called) according to the scheduler's own
                 * internal clock.
                 * @return {number} A number that represents the current time. May or may not
                 * have a relation to wall-clock time. May or may not refer to a time unit
                 * (e.g. milliseconds).
                 */
                SchedulerDoc.prototype.now = function () {
                    return 0;
                };
                /**
                 * Schedules a function, `work`, for execution. May happen at some point in
                 * the future, according to the `delay` parameter, if specified. May be passed
                 * some context object, `state`, which will be passed to the `work` function.
                 *
                 * The given arguments will be processed an stored as an Action object in a
                 * queue of actions.
                 *
                 * @param {function(state: ?T): ?Subscription} work A function representing a
                 * task, or some unit of work to be executed by the Scheduler.
                 * @param {number} [delay] Time to wait before executing the work, where the
                 * time unit is implicit and defined by the Scheduler itself.
                 * @param {T} [state] Some contextual data that the `work` function uses when
                 * called by the Scheduler.
                 * @return {Subscription} A subscription in order to be able to unsubscribe
                 * the scheduled work.
                 */
                SchedulerDoc.prototype.schedule = function (work, delay, state) {
                    return void 0;
                };
                /**
                 * Prompt the Scheduler to execute all of its queued actions, therefore
                 * clearing its queue.
                 * @return {void}
                 */
                SchedulerDoc.prototype.flush = function () {
                    return void 0;
                };
                return SchedulerDoc;
            }());
            exports_1("SchedulerDoc", SchedulerDoc);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL01pc2NKU0RvYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1lBZUE7Ozs7ZUFJRztZQUNIO2dCQUFBO2dCQWtEQSxDQUFDO2dCQWpEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQTZDRztnQkFDSSxvQkFBTSxHQUFiLFVBQWlCLFNBQTJEO29CQUMxRSxNQUFNLENBQUMsSUFBSSx1QkFBVSxDQUFJLFNBQVMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDOztnQkFDSCxvQkFBQztZQUFELENBbERBLEFBa0RDLElBQUE7WUFsREQseUNBa0RDLENBQUE7WUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUF1Qkc7WUFDSDtnQkFBQTtvQkFDRTs7Ozt1QkFJRztvQkFDSCxtQkFBYyxHQUFZLEtBQUssQ0FBQztnQkE2QmxDLENBQUM7Z0JBNUJDOzs7OzttQkFLRztnQkFDSCwwQkFBSSxHQUFKLFVBQUssS0FBUTtvQkFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0Q7Ozs7OzttQkFNRztnQkFDSCwyQkFBSyxHQUFMLFVBQU0sR0FBUTtvQkFDWixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0Q7Ozs7O21CQUtHO2dCQUNILDhCQUFRLEdBQVI7b0JBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQixDQUFDO2dCQUNILGtCQUFDO1lBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtZQW5DRCxxQ0FtQ0MsQ0FBQTtZQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFxQkc7WUFDSDtnQkFBQTtvQkEyQ0U7Ozs7dUJBSUc7b0JBQ0gsV0FBTSxHQUFZLEtBQUssQ0FBQztvQkFFeEI7Ozt1QkFHRztvQkFDSCxZQUFPLEdBQWtCLEVBQUUsQ0FBQztvQkFFNUI7Ozs7O3VCQUtHO29CQUNILGdCQUFXLEdBQVcsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQTlEQzs7Ozs7OzttQkFPRztnQkFDSCwwQkFBRyxHQUFIO29CQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFFRDs7Ozs7Ozs7Ozs7Ozs7OzttQkFnQkc7Z0JBQ0gsK0JBQVEsR0FBUixVQUFZLElBQXdDLEVBQUUsS0FBYyxFQUFFLEtBQVM7b0JBQzdFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCw0QkFBSyxHQUFMO29CQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkFzQkgsbUJBQUM7WUFBRCxDQS9EQSxBQStEQyxJQUFBO1lBL0RELHVDQStEQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL01pc2NKU0RvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgYW5kIGl0cyBkZWZpbml0aW9ucyBhcmUgbmVlZGVkIGp1c3Qgc28gdGhhdCBFU0RvYyBzZWVzIHRoZXNlXG4gKiBKU0RvYyBkb2N1bWVudGF0aW9uIGNvbW1lbnRzLiBPcmlnaW5hbGx5IHRoZXkgd2VyZSBtZWFudCBmb3Igc29tZSBUeXBlU2NyaXB0XG4gKiBpbnRlcmZhY2VzLCBidXQgVHlwZVNjcmlwdCBzdHJpcHMgYXdheSBKU0RvYyBjb21tZW50cyBuZWFyIGludGVyZmFjZXMuIEhlbmNlLFxuICogd2UgbmVlZCB0aGVzZSBib2d1cyBjbGFzc2VzLCB3aGljaCBhcmUgbm90IHN0cmlwcGVkIGF3YXkuIFRoaXMgZmlsZSBvbiB0aGVcbiAqIG90aGVyIGhhbmQsIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgcmVsZWFzZSBidW5kbGUuXG4gKi9cbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7VGVhcmRvd25Mb2dpY30gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuL09ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7QWN0aW9ufSBmcm9tICcuL3NjaGVkdWxlci9BY3Rpb24nO1xuaW1wb3J0ICcuL3NjaGVkdWxlci9NaXNjSlNEb2MnO1xuaW1wb3J0ICcuL29ic2VydmFibGUvZG9tL01pc2NKU0RvYyc7XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZURvYyB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IE9ic2VydmFibGUgdGhhdCB3aWxsIGV4ZWN1dGUgdGhlIHNwZWNpZmllZCBmdW5jdGlvbiB3aGVuIGFcbiAgICoge0BsaW5rIFN1YnNjcmliZXJ9IHN1YnNjcmliZXMgdG8gaXQuXG4gICAqXG4gICAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5DcmVhdGVzIGFuIE9ic2VydmFibGUgd2l0aCBjdXN0b20gbG9naWMgZ2l2ZW4gaW5cbiAgICogdGhlIGBzdWJzY3JpYmVgIGZ1bmN0aW9uLjwvc3Bhbj5cbiAgICpcbiAgICogPGltZyBzcmM9XCIuL2ltZy9jcmVhdGUucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAqXG4gICAqIGBjcmVhdGVgIGNvbnZlcnRzIGEgYHN1YnNjcmliZWAgZnVuY3Rpb24gdG8gYW4gYWN0dWFsIE9ic2VydmFibGUuIFRoaXMgaXNcbiAgICogZXF1aXZhbGVudCB0byBjYWxsaW5nIHRoZSBPYnNlcnZhYmxlIGNvbnN0cnVjdG9yLiBXcml0ZSB0aGUgYHN1YnNjcmliZWBcbiAgICogZnVuY3Rpb24gc28gdGhhdCBpdCBiZWhhdmVzIGFzIGFuIE9ic2VydmFibGU6IEl0IHNob3VsZCBpbnZva2UgdGhlXG4gICAqIFN1YnNjcmliZXIncyBgbmV4dGAsIGBlcnJvcmAsIGFuZCBgY29tcGxldGVgIG1ldGhvZHMgZm9sbG93aW5nIHRoZVxuICAgKiAqT2JzZXJ2YWJsZSBDb250cmFjdCouIEEgd2VsbC1mb3JtZWQgT2JzZXJ2YWJsZSBtdXN0IGludm9rZSBlaXRoZXIgdGhlXG4gICAqIFN1YnNjcmliZXIncyBgY29tcGxldGVgIG1ldGhvZCBleGFjdGx5IG9uY2Ugb3IgaXRzIGBlcnJvcmAgbWV0aG9kIGV4YWN0bHlcbiAgICogb25jZSwgYW5kIGludm9rZSBub3RoaW5nIGVsc2UgdGhlcmVhZnRlci5cbiAgICpcbiAgICogTW9zdCBvZiB0aGUgdGltZXMgeW91IHNob3VsZCBub3QgbmVlZCB0byB1c2UgYGNyZWF0ZWAgYmVjYXVzZSBleGlzdGluZ1xuICAgKiBjcmVhdGlvbiBvcGVyYXRvcnMgKHRvZ2V0aGVyIHdpdGggaW5zdGFuY2UgY29tYmluYXRpb24gb3BlcmF0b3JzKSBhbGxvdyB5b3VcbiAgICogdG8gY3JlYXRlIGFuIE9ic2VydmFibGUgZm9yIG1vc3Qgb2YgdGhlIHVzZSBjYXNlcy4gSG93ZXZlciwgYGNyZWF0ZWAgaXNcbiAgICogbG93LWxldmVsIGFuZCBpcyBhYmxlIHRvIGNyZWF0ZSBhbnkgT2JzZXJ2YWJsZS5cbiAgICpcbiAgICogQGV4YW1wbGUgPGNhcHRpb24+RW1pdCB0aHJlZSByYW5kb20gbnVtYmVycywgdGhlbiBjb21wbGV0ZS48L2NhcHRpb24+XG4gICAqIHZhciByZXN1bHQgPSBSeC5PYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgKiAgIHN1YnNjcmliZXIubmV4dChNYXRoLnJhbmRvbSgpKTtcbiAgICogICBzdWJzY3JpYmVyLm5leHQoTWF0aC5yYW5kb20oKSk7XG4gICAqICAgc3Vic2NyaWJlci5uZXh0KE1hdGgucmFuZG9tKCkpO1xuICAgKiAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICogfSk7XG4gICAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gICAqXG4gICAqIEBzZWUge0BsaW5rIGVtcHR5fVxuICAgKiBAc2VlIHtAbGluayBuZXZlcn1cbiAgICogQHNlZSB7QGxpbmsgb2Z9XG4gICAqIEBzZWUge0BsaW5rIHRocm93fVxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKHN1YnNjcmliZXI6IFN1YnNjcmliZXIpOiBUZWFyZG93bkxvZ2ljfSBbc3Vic2NyaWJlXSBBXG4gICAqIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHtAbGluayBTdWJzY3JpYmVyfSwgYW5kIGludm9rZXMgaXRzIGBuZXh0YCxcbiAgICogYGVycm9yYCwgYW5kIGBjb21wbGV0ZWAgbWV0aG9kcyBhcyBhcHByb3ByaWF0ZSwgYW5kIHNob3VsZCByZXR1cm4gc29tZVxuICAgKiBsb2dpYyBmb3IgdGVhciBkb3duLCBlaXRoZXIgYXMgYSB7QGxpbmsgU3Vic2NyaXB0aW9ufSBvciBhcyBhIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIHRoYXQsIHdoZW4gc3Vic2NyaWJlZCwgd2lsbCBleGVjdXRlIHRoZVxuICAgKiBzcGVjaWZpZWQgZnVuY3Rpb24uXG4gICAqIEBzdGF0aWMgdHJ1ZVxuICAgKiBAbmFtZSBjcmVhdGVcbiAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICovXG4gIHN0YXRpYyBjcmVhdGU8VD4oc3Vic2NyaWJlPzogPFI+KHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Uj4pID0+IFRlYXJkb3duTG9naWMpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oc3Vic2NyaWJlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBBbiBpbnRlcmZhY2UgZm9yIGEgY29uc3VtZXIgb2YgcHVzaC1iYXNlZCBub3RpZmljYXRpb25zIGRlbGl2ZXJlZCBieSBhblxuICoge0BsaW5rIE9ic2VydmFibGV9LlxuICpcbiAqIGBgYHRzXG4gKiBpbnRlcmZhY2UgT2JzZXJ2ZXI8VD4ge1xuICogICBpc1Vuc3Vic2NyaWJlZD86IGJvb2xlYW47XG4gKiAgIG5leHQ6ICh2YWx1ZTogVCkgPT4gdm9pZDtcbiAqICAgZXJyb3I6IChlcnI6IGFueSkgPT4gdm9pZDtcbiAqICAgY29tcGxldGU6ICgpID0+IHZvaWQ7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBBbiBvYmplY3QgY29uZm9ybWluZyB0byB0aGUgT2JzZXJ2ZXIgaW50ZXJmYWNlIGlzIHVzdWFsbHlcbiAqIGdpdmVuIHRvIHRoZSBgb2JzZXJ2YWJsZS5zdWJzY3JpYmUob2JzZXJ2ZXIpYCBtZXRob2QsIGFuZCB0aGUgT2JzZXJ2YWJsZSB3aWxsXG4gKiBjYWxsIHRoZSBPYnNlcnZlcidzIGBuZXh0KHZhbHVlKWAgbWV0aG9kIHRvIHByb3ZpZGUgbm90aWZpY2F0aW9ucy4gQVxuICogd2VsbC1iZWhhdmVkIE9ic2VydmFibGUgd2lsbCBjYWxsIGFuIE9ic2VydmVyJ3MgYGNvbXBsZXRlKClgIG1ldGhvZCBleGFjdGx5XG4gKiBvbmNlIG9yIHRoZSBPYnNlcnZlcidzIGBlcnJvcihlcnIpYCBtZXRob2QgZXhhY3RseSBvbmNlLCBhcyB0aGUgbGFzdFxuICogbm90aWZpY2F0aW9uIGRlbGl2ZXJlZC5cbiAqXG4gKiBAaW50ZXJmYWNlXG4gKiBAbmFtZSBPYnNlcnZlclxuICogQG5vaW1wb3J0IHRydWVcbiAqL1xuZXhwb3J0IGNsYXNzIE9ic2VydmVyRG9jPFQ+IHtcbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciB0aGlzIE9ic2VydmVyLCB3aGVuIHVzZWQgYXMgYVxuICAgKiBzdWJzY3JpYmVyLCBoYXMgYWxyZWFkeSBiZWVuIHVuc3Vic2NyaWJlZCBmcm9tIGl0cyBPYnNlcnZhYmxlLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGlzVW5zdWJzY3JpYmVkOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBUaGUgY2FsbGJhY2sgdG8gcmVjZWl2ZSBub3RpZmljYXRpb25zIG9mIHR5cGUgYG5leHRgIGZyb20gdGhlIE9ic2VydmFibGUsXG4gICAqIHdpdGggYSB2YWx1ZS4gVGhlIE9ic2VydmFibGUgbWF5IGNhbGwgdGhpcyBtZXRob2QgMCBvciBtb3JlIHRpbWVzLlxuICAgKiBAcGFyYW0ge1R9IHZhbHVlIFRoZSBgbmV4dGAgdmFsdWUuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBuZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuICAvKipcbiAgICogVGhlIGNhbGxiYWNrIHRvIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBvZiB0eXBlIGBlcnJvcmAgZnJvbSB0aGUgT2JzZXJ2YWJsZSxcbiAgICogd2l0aCBhbiBhdHRhY2hlZCB7QGxpbmsgRXJyb3J9LiBOb3RpZmllcyB0aGUgT2JzZXJ2ZXIgdGhhdCB0aGUgT2JzZXJ2YWJsZVxuICAgKiBoYXMgZXhwZXJpZW5jZWQgYW4gZXJyb3IgY29uZGl0aW9uLlxuICAgKiBAcGFyYW0ge2FueX0gZXJyIFRoZSBgZXJyb3JgIGV4Y2VwdGlvbi5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGVycm9yKGVycjogYW55KTogdm9pZCB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuICAvKipcbiAgICogVGhlIGNhbGxiYWNrIHRvIHJlY2VpdmUgYSB2YWx1ZWxlc3Mgbm90aWZpY2F0aW9uIG9mIHR5cGUgYGNvbXBsZXRlYCBmcm9tXG4gICAqIHRoZSBPYnNlcnZhYmxlLiBOb3RpZmllcyB0aGUgT2JzZXJ2ZXIgdGhhdCB0aGUgT2JzZXJ2YWJsZSBoYXMgZmluaXNoZWRcbiAgICogc2VuZGluZyBwdXNoLWJhc2VkIG5vdGlmaWNhdGlvbnMuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjb21wbGV0ZSgpOiB2b2lkIHtcbiAgICByZXR1cm4gdm9pZCAwO1xuICB9XG59XG5cbi8qKlxuICogQW4gZXhlY3V0aW9uIGNvbnRleHQgYW5kIGEgZGF0YSBzdHJ1Y3R1cmUgdG8gb3JkZXIgdGFza3MgYW5kIHNjaGVkdWxlIHRoZWlyXG4gKiBleGVjdXRpb24uIFByb3ZpZGVzIGEgbm90aW9uIG9mIChwb3RlbnRpYWxseSB2aXJ0dWFsKSB0aW1lLCB0aHJvdWdoIHRoZVxuICogYG5vdygpYCBnZXR0ZXIgbWV0aG9kLlxuICpcbiAqIEVhY2ggdW5pdCBvZiB3b3JrIGluIGEgU2NoZWR1bGVyIGlzIGNhbGxlZCBhbiB7QGxpbmsgQWN0aW9ufS5cbiAqXG4gKiBgYGB0c1xuICogaW50ZXJmYWNlIFNjaGVkdWxlciB7XG4gKiAgIG5vdygpOiBudW1iZXI7XG4gKiAgIHNjaGVkdWxlKHdvcmssIGRlbGF5Pywgc3RhdGU/KTogU3Vic2NyaXB0aW9uO1xuICogICBmbHVzaCgpOiB2b2lkO1xuICogICBhY3RpdmU6IGJvb2xlYW47XG4gKiAgIGFjdGlvbnM6IEFjdGlvbltdO1xuICogICBzY2hlZHVsZWRJZDogbnVtYmVyO1xuICogfVxuICogYGBgXG4gKlxuICogQGludGVyZmFjZVxuICogQG5hbWUgU2NoZWR1bGVyXG4gKiBAbm9pbXBvcnQgdHJ1ZVxuICovXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVyRG9jIHtcbiAgLyoqXG4gICAqIEEgZ2V0dGVyIG1ldGhvZCB0aGF0IHJldHVybnMgYSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHRpbWVcbiAgICogKGF0IHRoZSB0aW1lIHRoaXMgZnVuY3Rpb24gd2FzIGNhbGxlZCkgYWNjb3JkaW5nIHRvIHRoZSBzY2hlZHVsZXIncyBvd25cbiAgICogaW50ZXJuYWwgY2xvY2suXG4gICAqIEByZXR1cm4ge251bWJlcn0gQSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IHRpbWUuIE1heSBvciBtYXkgbm90XG4gICAqIGhhdmUgYSByZWxhdGlvbiB0byB3YWxsLWNsb2NrIHRpbWUuIE1heSBvciBtYXkgbm90IHJlZmVyIHRvIGEgdGltZSB1bml0XG4gICAqIChlLmcuIG1pbGxpc2Vjb25kcykuXG4gICAqL1xuICBub3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY2hlZHVsZXMgYSBmdW5jdGlvbiwgYHdvcmtgLCBmb3IgZXhlY3V0aW9uLiBNYXkgaGFwcGVuIGF0IHNvbWUgcG9pbnQgaW5cbiAgICogdGhlIGZ1dHVyZSwgYWNjb3JkaW5nIHRvIHRoZSBgZGVsYXlgIHBhcmFtZXRlciwgaWYgc3BlY2lmaWVkLiBNYXkgYmUgcGFzc2VkXG4gICAqIHNvbWUgY29udGV4dCBvYmplY3QsIGBzdGF0ZWAsIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBgd29ya2AgZnVuY3Rpb24uXG4gICAqXG4gICAqIFRoZSBnaXZlbiBhcmd1bWVudHMgd2lsbCBiZSBwcm9jZXNzZWQgYW4gc3RvcmVkIGFzIGFuIEFjdGlvbiBvYmplY3QgaW4gYVxuICAgKiBxdWV1ZSBvZiBhY3Rpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKHN0YXRlOiA/VCk6ID9TdWJzY3JpcHRpb259IHdvcmsgQSBmdW5jdGlvbiByZXByZXNlbnRpbmcgYVxuICAgKiB0YXNrLCBvciBzb21lIHVuaXQgb2Ygd29yayB0byBiZSBleGVjdXRlZCBieSB0aGUgU2NoZWR1bGVyLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5XSBUaW1lIHRvIHdhaXQgYmVmb3JlIGV4ZWN1dGluZyB0aGUgd29yaywgd2hlcmUgdGhlXG4gICAqIHRpbWUgdW5pdCBpcyBpbXBsaWNpdCBhbmQgZGVmaW5lZCBieSB0aGUgU2NoZWR1bGVyIGl0c2VsZi5cbiAgICogQHBhcmFtIHtUfSBbc3RhdGVdIFNvbWUgY29udGV4dHVhbCBkYXRhIHRoYXQgdGhlIGB3b3JrYCBmdW5jdGlvbiB1c2VzIHdoZW5cbiAgICogY2FsbGVkIGJ5IHRoZSBTY2hlZHVsZXIuXG4gICAqIEByZXR1cm4ge1N1YnNjcmlwdGlvbn0gQSBzdWJzY3JpcHRpb24gaW4gb3JkZXIgdG8gYmUgYWJsZSB0byB1bnN1YnNjcmliZVxuICAgKiB0aGUgc2NoZWR1bGVkIHdvcmsuXG4gICAqL1xuICBzY2hlZHVsZTxUPih3b3JrOiAoc3RhdGU/OiBUKSA9PiBTdWJzY3JpcHRpb24gfCB2b2lkLCBkZWxheT86IG51bWJlciwgc3RhdGU/OiBUKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdm9pZCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb21wdCB0aGUgU2NoZWR1bGVyIHRvIGV4ZWN1dGUgYWxsIG9mIGl0cyBxdWV1ZWQgYWN0aW9ucywgdGhlcmVmb3JlXG4gICAqIGNsZWFyaW5nIGl0cyBxdWV1ZS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZsdXNoKCk6IHZvaWQge1xuICAgIHJldHVybiB2b2lkIDA7XG4gIH1cblxuICAvKipcbiAgICogQSBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIFNjaGVkdWxlciBpcyBjdXJyZW50bHkgZXhlY3V0aW5nIGEgYmF0Y2ggb2ZcbiAgICogcXVldWVkIGFjdGlvbnMuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBxdWV1ZSBvZiBzY2hlZHVsZWQgYWN0aW9ucyBhcyBhbiBhcnJheS5cbiAgICogQHR5cGUge0FjdGlvbltdfVxuICAgKi9cbiAgYWN0aW9uczogQWN0aW9uPGFueT5bXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBBbiBpbnRlcm5hbCBJRCB1c2VkIHRvIHRyYWNrIHRoZSBsYXRlc3QgYXN5bmNocm9ub3VzIHRhc2sgc3VjaCBhcyB0aG9zZVxuICAgKiBjb21pbmcgZnJvbSBgc2V0VGltZW91dGAsIGBzZXRJbnRlcnZhbGAsIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgLCBhbmRcbiAgICogb3RoZXJzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgc2NoZWR1bGVkSWQ6IG51bWJlciA9IDA7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
