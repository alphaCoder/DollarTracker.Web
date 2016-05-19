System.register(['../Subscription'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscription_1;
    var ActionDoc;
    return {
        setters:[
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            }],
        execute: function() {
            /**
             * A unit of work to be executed in a {@link Scheduler}. An action is typically
             * created from within a Scheduler and an RxJS user does not need to concern
             * themselves about creating and manipulating an Action.
             *
             * ```ts
             * interface Action extends Subscription {
             *   work: (state?: any) => void|Subscription;
             *   state?: any;
             *   delay?: number;
             *   schedule(state?: any, delay?: number): void;
             *   execute(): void;
             *   scheduler: Scheduler;
             *   error: any;
             * }
             * ```
             *
             * @interface
             * @name Action
             * @noimport true
             */
            ActionDoc = (function (_super) {
                __extends(ActionDoc, _super);
                function ActionDoc() {
                    _super.apply(this, arguments);
                    /**
                     * The current state. This is the object that will be given to the `work`
                     * method.
                     * @type {any}
                     */
                    this.state = void 0;
                    /**
                     * Represents the time (relative to the Scheduler's own clock) when this
                     * action should be executed.
                     * @type {number}
                     */
                    this.delay = 0;
                    /**
                     * The Scheduler which owns this action.
                     * @type {Scheduler}
                     */
                    this.scheduler = null;
                }
                /**
                 * The function that represents the raw work to be executed on a Scheduler.
                 * @param {any} [state] Some contextual data that the `work` function uses
                 * when called by the Scheduler.
                 * @return {?Subscription} A subscription in order to be able to unsubscribe
                 * the scheduled work.
                 */
                ActionDoc.prototype.work = function (state) {
                    return void 0;
                };
                /**
                 * Schedules this action on its parent Scheduler for execution. May be passed
                 * some context object, `state`. May happen at some point in the future,
                 * according to the `delay` parameter, if specified.
                 * @param {any} [state] Some contextual data that the `work` function uses when
                 * called by the Scheduler.
                 * @param {number} [delay] Time to wait before executing the work, where the
                 * time unit is implicit and defined by the Scheduler.
                 * @return {void}
                 */
                ActionDoc.prototype.schedule = function (state, delay) {
                    return void 0;
                };
                /**
                 * Immediately executes this action and the `work` it contains.
                 * @return {any}
                 */
                ActionDoc.prototype.execute = function () {
                    return void 0;
                };
                return ActionDoc;
            }(Subscription_1.Subscription));
            exports_1("ActionDoc", ActionDoc);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9NaXNjSlNEb2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQW9CRztZQUNIO2dCQUErQiw2QkFBWTtnQkFBM0M7b0JBQStCLDhCQUFZO29CQVl6Qzs7Ozt1QkFJRztvQkFDSCxVQUFLLEdBQVEsS0FBSyxDQUFDLENBQUM7b0JBRXBCOzs7O3VCQUlHO29CQUNILFVBQUssR0FBVyxDQUFDLENBQUM7b0JBd0JsQjs7O3VCQUdHO29CQUNILGNBQVMsR0FBYyxJQUFJLENBQUM7Z0JBUTlCLENBQUM7Z0JBM0RDOzs7Ozs7bUJBTUc7Z0JBQ0gsd0JBQUksR0FBSixVQUFLLEtBQVc7b0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQixDQUFDO2dCQWdCRDs7Ozs7Ozs7O21CQVNHO2dCQUNILDRCQUFRLEdBQVIsVUFBUyxLQUFXLEVBQUUsS0FBYztvQkFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQixDQUFDO2dCQUVEOzs7bUJBR0c7Z0JBQ0gsMkJBQU8sR0FBUDtvQkFDRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBY0gsZ0JBQUM7WUFBRCxDQTVEQSxBQTREQyxDQTVEOEIsMkJBQVksR0E0RDFDO1lBNURELGlDQTREQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9NaXNjSlNEb2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7U2NoZWR1bGVyfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuXG4vKipcbiAqIEEgdW5pdCBvZiB3b3JrIHRvIGJlIGV4ZWN1dGVkIGluIGEge0BsaW5rIFNjaGVkdWxlcn0uIEFuIGFjdGlvbiBpcyB0eXBpY2FsbHlcbiAqIGNyZWF0ZWQgZnJvbSB3aXRoaW4gYSBTY2hlZHVsZXIgYW5kIGFuIFJ4SlMgdXNlciBkb2VzIG5vdCBuZWVkIHRvIGNvbmNlcm5cbiAqIHRoZW1zZWx2ZXMgYWJvdXQgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBhbiBBY3Rpb24uXG4gKlxuICogYGBgdHNcbiAqIGludGVyZmFjZSBBY3Rpb24gZXh0ZW5kcyBTdWJzY3JpcHRpb24ge1xuICogICB3b3JrOiAoc3RhdGU/OiBhbnkpID0+IHZvaWR8U3Vic2NyaXB0aW9uO1xuICogICBzdGF0ZT86IGFueTtcbiAqICAgZGVsYXk/OiBudW1iZXI7XG4gKiAgIHNjaGVkdWxlKHN0YXRlPzogYW55LCBkZWxheT86IG51bWJlcik6IHZvaWQ7XG4gKiAgIGV4ZWN1dGUoKTogdm9pZDtcbiAqICAgc2NoZWR1bGVyOiBTY2hlZHVsZXI7XG4gKiAgIGVycm9yOiBhbnk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlXG4gKiBAbmFtZSBBY3Rpb25cbiAqIEBub2ltcG9ydCB0cnVlXG4gKi9cbmV4cG9ydCBjbGFzcyBBY3Rpb25Eb2MgZXh0ZW5kcyBTdWJzY3JpcHRpb24ge1xuICAvKipcbiAgICogVGhlIGZ1bmN0aW9uIHRoYXQgcmVwcmVzZW50cyB0aGUgcmF3IHdvcmsgdG8gYmUgZXhlY3V0ZWQgb24gYSBTY2hlZHVsZXIuXG4gICAqIEBwYXJhbSB7YW55fSBbc3RhdGVdIFNvbWUgY29udGV4dHVhbCBkYXRhIHRoYXQgdGhlIGB3b3JrYCBmdW5jdGlvbiB1c2VzXG4gICAqIHdoZW4gY2FsbGVkIGJ5IHRoZSBTY2hlZHVsZXIuXG4gICAqIEByZXR1cm4gez9TdWJzY3JpcHRpb259IEEgc3Vic2NyaXB0aW9uIGluIG9yZGVyIHRvIGJlIGFibGUgdG8gdW5zdWJzY3JpYmVcbiAgICogdGhlIHNjaGVkdWxlZCB3b3JrLlxuICAgKi9cbiAgd29yayhzdGF0ZT86IGFueSk6IHZvaWR8U3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdm9pZCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHN0YXRlLiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIGdpdmVuIHRvIHRoZSBgd29ya2BcbiAgICogbWV0aG9kLlxuICAgKiBAdHlwZSB7YW55fVxuICAgKi9cbiAgc3RhdGU6IGFueSA9IHZvaWQgMDtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgdGltZSAocmVsYXRpdmUgdG8gdGhlIFNjaGVkdWxlcidzIG93biBjbG9jaykgd2hlbiB0aGlzXG4gICAqIGFjdGlvbiBzaG91bGQgYmUgZXhlY3V0ZWQuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBkZWxheTogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogU2NoZWR1bGVzIHRoaXMgYWN0aW9uIG9uIGl0cyBwYXJlbnQgU2NoZWR1bGVyIGZvciBleGVjdXRpb24uIE1heSBiZSBwYXNzZWRcbiAgICogc29tZSBjb250ZXh0IG9iamVjdCwgYHN0YXRlYC4gTWF5IGhhcHBlbiBhdCBzb21lIHBvaW50IGluIHRoZSBmdXR1cmUsXG4gICAqIGFjY29yZGluZyB0byB0aGUgYGRlbGF5YCBwYXJhbWV0ZXIsIGlmIHNwZWNpZmllZC5cbiAgICogQHBhcmFtIHthbnl9IFtzdGF0ZV0gU29tZSBjb250ZXh0dWFsIGRhdGEgdGhhdCB0aGUgYHdvcmtgIGZ1bmN0aW9uIHVzZXMgd2hlblxuICAgKiBjYWxsZWQgYnkgdGhlIFNjaGVkdWxlci5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheV0gVGltZSB0byB3YWl0IGJlZm9yZSBleGVjdXRpbmcgdGhlIHdvcmssIHdoZXJlIHRoZVxuICAgKiB0aW1lIHVuaXQgaXMgaW1wbGljaXQgYW5kIGRlZmluZWQgYnkgdGhlIFNjaGVkdWxlci5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHNjaGVkdWxlKHN0YXRlPzogYW55LCBkZWxheT86IG51bWJlcik6IHZvaWQge1xuICAgIHJldHVybiB2b2lkIDA7XG4gIH1cblxuICAvKipcbiAgICogSW1tZWRpYXRlbHkgZXhlY3V0ZXMgdGhpcyBhY3Rpb24gYW5kIHRoZSBgd29ya2AgaXQgY29udGFpbnMuXG4gICAqIEByZXR1cm4ge2FueX1cbiAgICovXG4gIGV4ZWN1dGUoKTogdm9pZCB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgU2NoZWR1bGVyIHdoaWNoIG93bnMgdGhpcyBhY3Rpb24uXG4gICAqIEB0eXBlIHtTY2hlZHVsZXJ9XG4gICAqL1xuICBzY2hlZHVsZXI6IFNjaGVkdWxlciA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBsYXRlc3QgZXJyb3IgdGhhdCBtYXkgaGF2ZSBvY2N1cnJlZCBkdXJpbmcgYWN0aW9uXG4gICAqIGV4ZWN1dGlvbi5cbiAgICogQHR5cGUge2FueX1cbiAgICovXG4gIGVycm9yOiBhbnk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
