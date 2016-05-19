System.register(['../../Observable', '../../operator/publishLast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, publishLast_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (publishLast_1_1) {
                publishLast_1 = publishLast_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL2FkZC9vcGVyYXRvci9wdWJsaXNoTGFzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1lBSUEsdUJBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLHlCQUFXLENBQUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvYWRkL29wZXJhdG9yL3B1Ymxpc2hMYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uLy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtwdWJsaXNoTGFzdCwgUHVibGlzaExhc3RTaWduYXR1cmV9IGZyb20gJy4uLy4uL29wZXJhdG9yL3B1Ymxpc2hMYXN0JztcblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUucHVibGlzaExhc3QgPSBwdWJsaXNoTGFzdDtcblxuZGVjbGFyZSBtb2R1bGUgJy4uLy4uL09ic2VydmFibGUnIHtcbiAgaW50ZXJmYWNlIE9ic2VydmFibGU8VD4ge1xuICAgIHB1Ymxpc2hMYXN0OiBQdWJsaXNoTGFzdFNpZ25hdHVyZTxUPjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
