System.register(['../../Observable', '../../operator/catch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, catch_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (catch_1_1) {
                catch_1 = catch_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.catch = catch_1._catch;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL2FkZC9vcGVyYXRvci9jYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1lBSUEsdUJBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGNBQU0sQ0FBQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9hZGQvb3BlcmF0b3IvY2F0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge19jYXRjaCwgQ2F0Y2hTaWduYXR1cmV9IGZyb20gJy4uLy4uL29wZXJhdG9yL2NhdGNoJztcblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuY2F0Y2ggPSBfY2F0Y2g7XG5cbmRlY2xhcmUgbW9kdWxlICcuLi8uLi9PYnNlcnZhYmxlJyB7XG4gIGludGVyZmFjZSBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjYXRjaDogQ2F0Y2hTaWduYXR1cmU8VD47XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
