System.register(['../../Observable', '../../operator/finally'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, finally_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (finally_1_1) {
                finally_1 = finally_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.finally = finally_1._finally;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL2FkZC9vcGVyYXRvci9maW5hbGx5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7WUFJQSx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsa0JBQVEsQ0FBQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9hZGQvb3BlcmF0b3IvZmluYWxseS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi8uLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7X2ZpbmFsbHksIEZpbmFsbHlTaWduYXR1cmV9IGZyb20gJy4uLy4uL29wZXJhdG9yL2ZpbmFsbHknO1xuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5maW5hbGx5ID0gX2ZpbmFsbHk7XG5cbmRlY2xhcmUgbW9kdWxlICcuLi8uLi9PYnNlcnZhYmxlJyB7XG4gIGludGVyZmFjZSBPYnNlcnZhYmxlPFQ+IHtcbiAgICBmaW5hbGx5OiBGaW5hbGx5U2lnbmF0dXJlPFQ+O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
