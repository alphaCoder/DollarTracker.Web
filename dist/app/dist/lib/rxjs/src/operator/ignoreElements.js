System.register(['../Subscriber', '../util/noop'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, noop_1;
    var IgnoreElementsOperator, IgnoreElementsSubscriber;
    /**
     * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
     *
     * <img src="./img/ignoreElements.png" width="100%">
     *
     * @return {Observable} an empty Observable that only calls `complete`
     * or `error`, based on which one is called by the source Observable.
     * @method ignoreElements
     * @owner Observable
     */
    function ignoreElements() {
        return this.lift(new IgnoreElementsOperator());
    }
    exports_1("ignoreElements", ignoreElements);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (noop_1_1) {
                noop_1 = noop_1_1;
            }],
        execute: function() {
            ;
            IgnoreElementsOperator = (function () {
                function IgnoreElementsOperator() {
                }
                IgnoreElementsOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new IgnoreElementsSubscriber(subscriber));
                };
                return IgnoreElementsOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            IgnoreElementsSubscriber = (function (_super) {
                __extends(IgnoreElementsSubscriber, _super);
                function IgnoreElementsSubscriber() {
                    _super.apply(this, arguments);
                }
                IgnoreElementsSubscriber.prototype._next = function (unused) {
                    noop_1.noop();
                };
                return IgnoreElementsSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2lnbm9yZUVsZW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFLQTs7Ozs7Ozs7O09BU0c7SUFDSDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFGRCwyQ0FFQyxDQUFBOzs7Ozs7Ozs7O1lBQUEsQ0FBQztZQU1GO2dCQUFBO2dCQUlBLENBQUM7Z0JBSEMscUNBQUksR0FBSixVQUFLLFVBQXlCLEVBQUUsTUFBVztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNyRSxDQUFDO2dCQUNILDZCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQTBDLDRDQUFhO2dCQUF2RDtvQkFBMEMsOEJBQWE7Z0JBSXZELENBQUM7Z0JBSFcsd0NBQUssR0FBZixVQUFnQixNQUFTO29CQUN2QixXQUFJLEVBQUUsQ0FBQztnQkFDVCxDQUFDO2dCQUNILCtCQUFDO1lBQUQsQ0FKQSxBQUlDLENBSnlDLHVCQUFVLEdBSW5EIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2lnbm9yZUVsZW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge25vb3B9IGZyb20gJy4uL3V0aWwvbm9vcCc7XG5cbi8qKlxuICogSWdub3JlcyBhbGwgaXRlbXMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUgYW5kIG9ubHkgcGFzc2VzIGNhbGxzIG9mIGBjb21wbGV0ZWAgb3IgYGVycm9yYC5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL2lnbm9yZUVsZW1lbnRzLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIEByZXR1cm4ge09ic2VydmFibGV9IGFuIGVtcHR5IE9ic2VydmFibGUgdGhhdCBvbmx5IGNhbGxzIGBjb21wbGV0ZWBcbiAqIG9yIGBlcnJvcmAsIGJhc2VkIG9uIHdoaWNoIG9uZSBpcyBjYWxsZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICogQG1ldGhvZCBpZ25vcmVFbGVtZW50c1xuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlnbm9yZUVsZW1lbnRzPFQ+KCk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBJZ25vcmVFbGVtZW50c09wZXJhdG9yKCkpO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBJZ25vcmVFbGVtZW50c1NpZ25hdHVyZTxUPiB7XG4gICgpOiBPYnNlcnZhYmxlPFQ+O1xufVxuXG5jbGFzcyBJZ25vcmVFbGVtZW50c09wZXJhdG9yPFQsIFI+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgUj4ge1xuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Uj4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IElnbm9yZUVsZW1lbnRzU3Vic2NyaWJlcihzdWJzY3JpYmVyKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIElnbm9yZUVsZW1lbnRzU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBwcm90ZWN0ZWQgX25leHQodW51c2VkOiBUKTogdm9pZCB7XG4gICAgbm9vcCgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
