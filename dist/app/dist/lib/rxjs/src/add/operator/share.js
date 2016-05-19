System.register(['../../Observable', '../../operator/share'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, share_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (share_1_1) {
                share_1 = share_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.share = share_1.share;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL2FkZC9vcGVyYXRvci9zaGFyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1lBSUEsdUJBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGFBQUssQ0FBQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9hZGQvb3BlcmF0b3Ivc2hhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge3NoYXJlLCBTaGFyZVNpZ25hdHVyZX0gZnJvbSAnLi4vLi4vb3BlcmF0b3Ivc2hhcmUnO1xuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5zaGFyZSA9IHNoYXJlO1xuXG5kZWNsYXJlIG1vZHVsZSAnLi4vLi4vT2JzZXJ2YWJsZScge1xuICBpbnRlcmZhY2UgT2JzZXJ2YWJsZTxUPiB7XG4gICAgc2hhcmU6IFNoYXJlU2lnbmF0dXJlPFQ+O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
