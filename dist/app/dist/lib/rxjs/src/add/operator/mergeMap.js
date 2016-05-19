System.register(['../../Observable', '../../operator/mergeMap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, mergeMap_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (mergeMap_1_1) {
                mergeMap_1 = mergeMap_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
            Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL2FkZC9vcGVyYXRvci9tZXJnZU1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1lBSUEsdUJBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFRLG1CQUFRLENBQUM7WUFDOUMsdUJBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFRLG1CQUFRLENBQUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvYWRkL29wZXJhdG9yL21lcmdlTWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uLy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHttZXJnZU1hcCwgTWVyZ2VNYXBTaWduYXR1cmV9IGZyb20gJy4uLy4uL29wZXJhdG9yL21lcmdlTWFwJztcblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUubWVyZ2VNYXAgPSA8YW55Pm1lcmdlTWFwO1xuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmxhdE1hcCA9IDxhbnk+bWVyZ2VNYXA7XG5cbmRlY2xhcmUgbW9kdWxlICcuLi8uLi9PYnNlcnZhYmxlJyB7XG4gIGludGVyZmFjZSBPYnNlcnZhYmxlPFQ+IHtcbiAgICBmbGF0TWFwOiBNZXJnZU1hcFNpZ25hdHVyZTxUPjtcbiAgICBtZXJnZU1hcDogTWVyZ2VNYXBTaWduYXR1cmU8VD47XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
