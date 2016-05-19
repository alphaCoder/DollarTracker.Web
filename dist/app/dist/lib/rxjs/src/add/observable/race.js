System.register(['../../Observable', '../../operator/race'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, race_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (race_1_1) {
                race_1 = race_1_1;
            }],
        execute: function() {
            Observable_1.Observable.race = race_1.raceStatic;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL2FkZC9vYnNlcnZhYmxlL3JhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztZQUdBLHVCQUFVLENBQUMsSUFBSSxHQUFHLGlCQUFVLENBQUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvYWRkL29ic2VydmFibGUvcmFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge3JhY2VTdGF0aWN9IGZyb20gJy4uLy4uL29wZXJhdG9yL3JhY2UnO1xuXG5PYnNlcnZhYmxlLnJhY2UgPSByYWNlU3RhdGljO1xuXG5kZWNsYXJlIG1vZHVsZSAnLi4vLi4vT2JzZXJ2YWJsZScge1xuICBuYW1lc3BhY2UgT2JzZXJ2YWJsZSB7XG4gICAgZXhwb3J0IGxldCByYWNlOiB0eXBlb2YgcmFjZVN0YXRpYztcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
