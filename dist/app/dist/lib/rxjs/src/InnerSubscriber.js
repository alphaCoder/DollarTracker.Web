System.register(['./Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var InnerSubscriber;
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            InnerSubscriber = (function (_super) {
                __extends(InnerSubscriber, _super);
                function InnerSubscriber(parent, outerValue, outerIndex) {
                    _super.call(this);
                    this.parent = parent;
                    this.outerValue = outerValue;
                    this.outerIndex = outerIndex;
                    this.index = 0;
                }
                InnerSubscriber.prototype._next = function (value) {
                    this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
                };
                InnerSubscriber.prototype._error = function (error) {
                    this.parent.notifyError(error, this);
                    this.unsubscribe();
                };
                InnerSubscriber.prototype._complete = function () {
                    this.parent.notifyComplete(this);
                    this.unsubscribe();
                };
                return InnerSubscriber;
            }(Subscriber_1.Subscriber));
            exports_1("InnerSubscriber", InnerSubscriber);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL0lubmVyU3Vic2NyaWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Ozs7ZUFJRztZQUNIO2dCQUEyQyxtQ0FBYTtnQkFHdEQseUJBQW9CLE1BQTZCLEVBQVUsVUFBYSxFQUFVLFVBQWtCO29CQUNsRyxpQkFBTyxDQUFDO29CQURVLFdBQU0sR0FBTixNQUFNLENBQXVCO29CQUFVLGVBQVUsR0FBVixVQUFVLENBQUc7b0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFGNUYsVUFBSyxHQUFXLENBQUMsQ0FBQztnQkFJMUIsQ0FBQztnQkFFUywrQkFBSyxHQUFmLFVBQWdCLEtBQVE7b0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN0RixDQUFDO2dCQUVTLGdDQUFNLEdBQWhCLFVBQWlCLEtBQVU7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQUVTLG1DQUFTLEdBQW5CO29CQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNqQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0gsc0JBQUM7WUFBRCxDQXBCQSxBQW9CQyxDQXBCMEMsdUJBQVUsR0FvQnBEO1lBcEJELDZDQW9CQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL0lubmVyU3Vic2NyaWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7T3V0ZXJTdWJzY3JpYmVyfSBmcm9tICcuL091dGVyU3Vic2NyaWJlcic7XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5leHBvcnQgY2xhc3MgSW5uZXJTdWJzY3JpYmVyPFQsIFI+IGV4dGVuZHMgU3Vic2NyaWJlcjxSPiB7XG4gIHByaXZhdGUgaW5kZXg6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJlbnQ6IE91dGVyU3Vic2NyaWJlcjxULCBSPiwgcHJpdmF0ZSBvdXRlclZhbHVlOiBULCBwcml2YXRlIG91dGVySW5kZXg6IG51bWJlcikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFIpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmVudC5ub3RpZnlOZXh0KHRoaXMub3V0ZXJWYWx1ZSwgdmFsdWUsIHRoaXMub3V0ZXJJbmRleCwgdGhpcy5pbmRleCsrLCB0aGlzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZXJyb3IoZXJyb3I6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyZW50Lm5vdGlmeUVycm9yKGVycm9yLCB0aGlzKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMucGFyZW50Lm5vdGlmeUNvbXBsZXRlKHRoaXMpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
