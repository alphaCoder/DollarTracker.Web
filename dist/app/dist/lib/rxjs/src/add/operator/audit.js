System.register(['../../Observable', '../../operator/audit'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, audit_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (audit_1_1) {
                audit_1 = audit_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.audit = audit_1.audit;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL2FkZC9vcGVyYXRvci9hdWRpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1lBR0EsdUJBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGFBQUssQ0FBQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9hZGQvb3BlcmF0b3IvYXVkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uLy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHthdWRpdCwgQXVkaXRTaWduYXR1cmV9IGZyb20gJy4uLy4uL29wZXJhdG9yL2F1ZGl0JztcblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuYXVkaXQgPSBhdWRpdDtcblxuZGVjbGFyZSBtb2R1bGUgJy4uLy4uL09ic2VydmFibGUnIHtcbiAgaW50ZXJmYWNlIE9ic2VydmFibGU8VD4ge1xuICAgIGF1ZGl0OiBBdWRpdFNpZ25hdHVyZTxUPjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
