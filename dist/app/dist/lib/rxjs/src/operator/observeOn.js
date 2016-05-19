System.register(['../Subscriber', '../Notification'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, Notification_1;
    var ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage;
    /**
     * @see {@link Notification}
     *
     * @param scheduler
     * @param delay
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method observeOn
     * @owner Observable
     */
    function observeOn(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        return this.lift(new ObserveOnOperator(scheduler, delay));
    }
    exports_1("observeOn", observeOn);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (Notification_1_1) {
                Notification_1 = Notification_1_1;
            }],
        execute: function() {
            ObserveOnOperator = (function () {
                function ObserveOnOperator(scheduler, delay) {
                    if (delay === void 0) { delay = 0; }
                    this.scheduler = scheduler;
                    this.delay = delay;
                }
                ObserveOnOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
                };
                return ObserveOnOperator;
            }());
            exports_1("ObserveOnOperator", ObserveOnOperator);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ObserveOnSubscriber = (function (_super) {
                __extends(ObserveOnSubscriber, _super);
                function ObserveOnSubscriber(destination, scheduler, delay) {
                    if (delay === void 0) { delay = 0; }
                    _super.call(this, destination);
                    this.scheduler = scheduler;
                    this.delay = delay;
                }
                ObserveOnSubscriber.dispatch = function (arg) {
                    var notification = arg.notification, destination = arg.destination;
                    notification.observe(destination);
                };
                ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
                    this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
                };
                ObserveOnSubscriber.prototype._next = function (value) {
                    this.scheduleMessage(Notification_1.Notification.createNext(value));
                };
                ObserveOnSubscriber.prototype._error = function (err) {
                    this.scheduleMessage(Notification_1.Notification.createError(err));
                };
                ObserveOnSubscriber.prototype._complete = function () {
                    this.scheduleMessage(Notification_1.Notification.createComplete());
                };
                return ObserveOnSubscriber;
            }(Subscriber_1.Subscriber));
            exports_1("ObserveOnSubscriber", ObserveOnSubscriber);
            ObserveOnMessage = (function () {
                function ObserveOnMessage(notification, destination) {
                    this.notification = notification;
                    this.destination = destination;
                }
                return ObserveOnMessage;
            }());
            exports_1("ObserveOnMessage", ObserveOnMessage);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL29ic2VydmVPbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBT0E7Ozs7Ozs7O09BUUc7SUFDSCxtQkFBNkIsU0FBb0IsRUFBRSxLQUFpQjtRQUFqQixxQkFBaUIsR0FBakIsU0FBaUI7UUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRkQsaUNBRUMsQ0FBQTs7Ozs7Ozs7OztZQU1EO2dCQUNFLDJCQUFvQixTQUFvQixFQUFVLEtBQWlCO29CQUF6QixxQkFBeUIsR0FBekIsU0FBeUI7b0JBQS9DLGNBQVMsR0FBVCxTQUFTLENBQVc7b0JBQVUsVUFBSyxHQUFMLEtBQUssQ0FBWTtnQkFDbkUsQ0FBQztnQkFFRCxnQ0FBSSxHQUFKLFVBQUssVUFBeUIsRUFBRSxNQUFXO29CQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM1RixDQUFDO2dCQUNILHdCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCxpREFPQyxDQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUE0Qyx1Q0FBYTtnQkFNdkQsNkJBQVksV0FBMEIsRUFDbEIsU0FBb0IsRUFDcEIsS0FBaUI7b0JBQXpCLHFCQUF5QixHQUF6QixTQUF5QjtvQkFDbkMsa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBRkQsY0FBUyxHQUFULFNBQVMsQ0FBVztvQkFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtnQkFFckMsQ0FBQztnQkFUTSw0QkFBUSxHQUFmLFVBQWdCLEdBQXFCO29CQUMzQixtQ0FBWSxFQUFFLDZCQUFXLENBQVM7b0JBQzFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBUU8sNkNBQWUsR0FBdkIsVUFBd0IsWUFBK0I7b0JBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUM1QixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFGLENBQUM7Z0JBRVEsbUNBQUssR0FBZixVQUFnQixLQUFRO29CQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELENBQUM7Z0JBRVMsb0NBQU0sR0FBaEIsVUFBaUIsR0FBUTtvQkFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQUVTLHVDQUFTLEdBQW5CO29CQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQUNILDBCQUFDO1lBQUQsQ0E3QkEsQUE2QkMsQ0E3QjJDLHVCQUFVLEdBNkJyRDtZQTdCRCxxREE2QkMsQ0FBQTtZQUVEO2dCQUNFLDBCQUFtQixZQUErQixFQUMvQixXQUFpQztvQkFEakMsaUJBQVksR0FBWixZQUFZLENBQW1CO29CQUMvQixnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7Z0JBQ3BELENBQUM7Z0JBQ0gsdUJBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELCtDQUlDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3Ivb2JzZXJ2ZU9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U2NoZWR1bGVyfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtQYXJ0aWFsT2JzZXJ2ZXJ9IGZyb20gJy4uL09ic2VydmVyJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge05vdGlmaWNhdGlvbn0gZnJvbSAnLi4vTm90aWZpY2F0aW9uJztcblxuLyoqXG4gKiBAc2VlIHtAbGluayBOb3RpZmljYXRpb259XG4gKlxuICogQHBhcmFtIHNjaGVkdWxlclxuICogQHBhcmFtIGRlbGF5XG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFI+fFdlYlNvY2tldFN1YmplY3Q8VD58T2JzZXJ2YWJsZTxUPn1cbiAqIEBtZXRob2Qgb2JzZXJ2ZU9uXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZU9uPFQ+KHNjaGVkdWxlcjogU2NoZWR1bGVyLCBkZWxheTogbnVtYmVyID0gMCk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBPYnNlcnZlT25PcGVyYXRvcihzY2hlZHVsZXIsIGRlbGF5KSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JzZXJ2ZU9uU2lnbmF0dXJlPFQ+IHtcbiAgKHNjaGVkdWxlcjogU2NoZWR1bGVyLCBkZWxheT86IG51bWJlcik6IE9ic2VydmFibGU8VD47XG59XG5cbmV4cG9ydCBjbGFzcyBPYnNlcnZlT25PcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzY2hlZHVsZXI6IFNjaGVkdWxlciwgcHJpdmF0ZSBkZWxheTogbnVtYmVyID0gMCkge1xuICB9XG5cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBPYnNlcnZlT25TdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuc2NoZWR1bGVyLCB0aGlzLmRlbGF5KSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmV4cG9ydCBjbGFzcyBPYnNlcnZlT25TdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIHN0YXRpYyBkaXNwYXRjaChhcmc6IE9ic2VydmVPbk1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IG5vdGlmaWNhdGlvbiwgZGVzdGluYXRpb24gfSA9IGFyZztcbiAgICBub3RpZmljYXRpb24ub2JzZXJ2ZShkZXN0aW5hdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxUPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzY2hlZHVsZXI6IFNjaGVkdWxlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkZWxheTogbnVtYmVyID0gMCkge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgc2NoZWR1bGVNZXNzYWdlKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uPGFueT4pOiB2b2lkIHtcbiAgICAgdGhpcy5hZGQodGhpcy5zY2hlZHVsZXIuc2NoZWR1bGUoT2JzZXJ2ZU9uU3Vic2NyaWJlci5kaXNwYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE9ic2VydmVPbk1lc3NhZ2Uobm90aWZpY2F0aW9uLCB0aGlzLmRlc3RpbmF0aW9uKSkpO1xuICAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMuc2NoZWR1bGVNZXNzYWdlKE5vdGlmaWNhdGlvbi5jcmVhdGVOZXh0KHZhbHVlKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2Vycm9yKGVycjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zY2hlZHVsZU1lc3NhZ2UoTm90aWZpY2F0aW9uLmNyZWF0ZUVycm9yKGVycikpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNjaGVkdWxlTWVzc2FnZShOb3RpZmljYXRpb24uY3JlYXRlQ29tcGxldGUoKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9ic2VydmVPbk1lc3NhZ2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb248YW55PixcbiAgICAgICAgICAgICAgcHVibGljIGRlc3RpbmF0aW9uOiBQYXJ0aWFsT2JzZXJ2ZXI8YW55Pikge1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
