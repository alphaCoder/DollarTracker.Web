System.register(['../../Observable', '../../operator/retry'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, retry_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (retry_1_1) {
                retry_1 = retry_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.retry = retry_1.retry;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL2FkZC9vcGVyYXRvci9yZXRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1lBSUEsdUJBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGFBQUssQ0FBQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9hZGQvb3BlcmF0b3IvcmV0cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge3JldHJ5LCBSZXRyeVNpZ25hdHVyZX0gZnJvbSAnLi4vLi4vb3BlcmF0b3IvcmV0cnknO1xuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5yZXRyeSA9IHJldHJ5O1xuXG5kZWNsYXJlIG1vZHVsZSAnLi4vLi4vT2JzZXJ2YWJsZScge1xuICBpbnRlcmZhY2UgT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0cnk6IFJldHJ5U2lnbmF0dXJlPFQ+O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
