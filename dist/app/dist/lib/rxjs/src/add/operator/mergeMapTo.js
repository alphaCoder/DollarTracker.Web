System.register(['../../Observable', '../../operator/mergeMapTo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, mergeMapTo_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (mergeMapTo_1_1) {
                mergeMapTo_1 = mergeMapTo_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
            Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL2FkZC9vcGVyYXRvci9tZXJnZU1hcFRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7WUFJQSx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQVEsdUJBQVUsQ0FBQztZQUNqRCx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQVEsdUJBQVUsQ0FBQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBUby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi8uLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7bWVyZ2VNYXBUbywgTWVyZ2VNYXBUb1NpZ25hdHVyZX0gZnJvbSAnLi4vLi4vb3BlcmF0b3IvbWVyZ2VNYXBUbyc7XG5cbk9ic2VydmFibGUucHJvdG90eXBlLmZsYXRNYXBUbyA9IDxhbnk+bWVyZ2VNYXBUbztcbk9ic2VydmFibGUucHJvdG90eXBlLm1lcmdlTWFwVG8gPSA8YW55Pm1lcmdlTWFwVG87XG5cbmRlY2xhcmUgbW9kdWxlICcuLi8uLi9PYnNlcnZhYmxlJyB7XG4gIGludGVyZmFjZSBPYnNlcnZhYmxlPFQ+IHtcbiAgICBmbGF0TWFwVG86IE1lcmdlTWFwVG9TaWduYXR1cmU8VD47XG4gICAgbWVyZ2VNYXBUbzogTWVyZ2VNYXBUb1NpZ25hdHVyZTxUPjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
