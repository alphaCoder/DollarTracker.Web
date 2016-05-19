System.register(['../../Observable', '../../operator/pairwise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, pairwise_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (pairwise_1_1) {
                pairwise_1 = pairwise_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.pairwise = pairwise_1.pairwise;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL2FkZC9vcGVyYXRvci9wYWlyd2lzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1lBSUEsdUJBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLG1CQUFRLENBQUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvYWRkL29wZXJhdG9yL3BhaXJ3aXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uLy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtwYWlyd2lzZSwgUGFpcndpc2VTaWduYXR1cmV9IGZyb20gJy4uLy4uL29wZXJhdG9yL3BhaXJ3aXNlJztcblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUucGFpcndpc2UgPSBwYWlyd2lzZTtcblxuZGVjbGFyZSBtb2R1bGUgJy4uLy4uL09ic2VydmFibGUnIHtcbiAgaW50ZXJmYWNlIE9ic2VydmFibGU8VD4ge1xuICAgIHBhaXJ3aXNlOiBQYWlyd2lzZVNpZ25hdHVyZTxUPjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
