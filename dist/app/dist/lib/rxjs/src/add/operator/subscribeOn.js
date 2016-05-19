System.register(['../../Observable', '../../operator/subscribeOn'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, subscribeOn_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (subscribeOn_1_1) {
                subscribeOn_1 = subscribeOn_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL2FkZC9vcGVyYXRvci9zdWJzY3JpYmVPbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1lBSUEsdUJBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLHlCQUFXLENBQUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvYWRkL29wZXJhdG9yL3N1YnNjcmliZU9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uLy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtzdWJzY3JpYmVPbiwgU3Vic2NyaWJlT25TaWduYXR1cmV9IGZyb20gJy4uLy4uL29wZXJhdG9yL3N1YnNjcmliZU9uJztcblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlT24gPSBzdWJzY3JpYmVPbjtcblxuZGVjbGFyZSBtb2R1bGUgJy4uLy4uL09ic2VydmFibGUnIHtcbiAgaW50ZXJmYWNlIE9ic2VydmFibGU8VD4ge1xuICAgIHN1YnNjcmliZU9uOiBTdWJzY3JpYmVPblNpZ25hdHVyZTxUPjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
