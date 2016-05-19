System.register(['../../Observable', '../../operator/let'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, let_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (let_1_1) {
                let_1 = let_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.let = let_1.letProto;
            Observable_1.Observable.prototype.letBind = let_1.letProto;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL2FkZC9vcGVyYXRvci9sZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztZQUlBLHVCQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxjQUFRLENBQUM7WUFDcEMsdUJBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLGNBQVEsQ0FBQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9hZGQvb3BlcmF0b3IvbGV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uLy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtsZXRQcm90bywgTGV0U2lnbmF0dXJlfSBmcm9tICcuLi8uLi9vcGVyYXRvci9sZXQnO1xuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5sZXQgPSBsZXRQcm90bztcbk9ic2VydmFibGUucHJvdG90eXBlLmxldEJpbmQgPSBsZXRQcm90bztcblxuZGVjbGFyZSBtb2R1bGUgJy4uLy4uL09ic2VydmFibGUnIHtcbiAgaW50ZXJmYWNlIE9ic2VydmFibGU8VD4ge1xuICAgIGxldDogTGV0U2lnbmF0dXJlPFQ+O1xuICAgIGxldEJpbmQ6IExldFNpZ25hdHVyZTxUPjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
