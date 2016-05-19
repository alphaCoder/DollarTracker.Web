System.register(['../Subscriber', '../Subscription'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, Subscription_1;
    var FinallyOperator, FinallySubscriber;
    /**
     * Returns an Observable that mirrors the source Observable, but will call a specified function when
     * the source terminates on complete or error.
     * @param {function} finallySelector function to be called when source terminates.
     * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
     * @method finally
     * @owner Observable
     */
    function _finally(finallySelector) {
        return this.lift(new FinallyOperator(finallySelector));
    }
    exports_1("_finally", _finally);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            }],
        execute: function() {
            FinallyOperator = (function () {
                function FinallyOperator(finallySelector) {
                    this.finallySelector = finallySelector;
                }
                FinallyOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new FinallySubscriber(subscriber, this.finallySelector));
                };
                return FinallyOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            FinallySubscriber = (function (_super) {
                __extends(FinallySubscriber, _super);
                function FinallySubscriber(destination, finallySelector) {
                    _super.call(this, destination);
                    this.add(new Subscription_1.Subscription(finallySelector));
                }
                return FinallySubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2ZpbmFsbHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUtBOzs7Ozs7O09BT0c7SUFDSCxrQkFBNEIsZUFBMkI7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRkQsK0JBRUMsQ0FBQTs7Ozs7Ozs7OztZQU1EO2dCQUNFLHlCQUFvQixlQUEyQjtvQkFBM0Isb0JBQWUsR0FBZixlQUFlLENBQVk7Z0JBQy9DLENBQUM7Z0JBRUQsOEJBQUksR0FBSixVQUFLLFVBQXlCLEVBQUUsTUFBVztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BGLENBQUM7Z0JBQ0gsc0JBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQUVEOzs7O2VBSUc7WUFDSDtnQkFBbUMscUNBQWE7Z0JBQzlDLDJCQUFZLFdBQTBCLEVBQUUsZUFBMkI7b0JBQ2pFLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksMkJBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2dCQUNILHdCQUFDO1lBQUQsQ0FMQSxBQUtDLENBTGtDLHVCQUFVLEdBSzVDIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2ZpbmFsbHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuXG4vKipcbiAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG1pcnJvcnMgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCBidXQgd2lsbCBjYWxsIGEgc3BlY2lmaWVkIGZ1bmN0aW9uIHdoZW5cbiAqIHRoZSBzb3VyY2UgdGVybWluYXRlcyBvbiBjb21wbGV0ZSBvciBlcnJvci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZpbmFsbHlTZWxlY3RvciBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBzb3VyY2UgdGVybWluYXRlcy5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IGFuIE9ic2VydmFibGUgdGhhdCBtaXJyb3JzIHRoZSBzb3VyY2UsIGJ1dCB3aWxsIGNhbGwgdGhlIHNwZWNpZmllZCBmdW5jdGlvbiBvbiB0ZXJtaW5hdGlvbi5cbiAqIEBtZXRob2QgZmluYWxseVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9maW5hbGx5PFQ+KGZpbmFsbHlTZWxlY3RvcjogKCkgPT4gdm9pZCk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBGaW5hbGx5T3BlcmF0b3IoZmluYWxseVNlbGVjdG9yKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluYWxseVNpZ25hdHVyZTxUPiB7XG4gIDxUPihmaW5hbGx5U2VsZWN0b3I6ICgpID0+IHZvaWQpOiBPYnNlcnZhYmxlPFQ+O1xufVxuXG5jbGFzcyBGaW5hbGx5T3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmluYWxseVNlbGVjdG9yOiAoKSA9PiB2b2lkKSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IEZpbmFsbHlTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuZmluYWxseVNlbGVjdG9yKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIEZpbmFsbHlTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFQ+LCBmaW5hbGx5U2VsZWN0b3I6ICgpID0+IHZvaWQpIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gICAgdGhpcy5hZGQobmV3IFN1YnNjcmlwdGlvbihmaW5hbGx5U2VsZWN0b3IpKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
