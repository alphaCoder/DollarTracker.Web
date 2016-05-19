System.register(['./errorObject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var errorObject_1;
    var tryCatchTarget;
    function tryCatcher() {
        try {
            return tryCatchTarget.apply(this, arguments);
        }
        catch (e) {
            errorObject_1.errorObject.e = e;
            return errorObject_1.errorObject;
        }
    }
    function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
    }
    exports_1("tryCatch", tryCatch);
    return {
        setters:[
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            }],
        execute: function() {
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3V0aWwvdHJ5Q2F0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUVJLGNBQWM7SUFFbEI7UUFDRSxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDL0MsQ0FBRTtRQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCx5QkFBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLHlCQUFXLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUM7SUFFRCxrQkFBNkMsRUFBSztRQUNoRCxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sQ0FBTSxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUhELCtCQUdDLENBQUE7Ozs7Ozs7WUFBQSxDQUFDIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL3V0aWwvdHJ5Q2F0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Vycm9yT2JqZWN0fSBmcm9tICcuL2Vycm9yT2JqZWN0JztcblxubGV0IHRyeUNhdGNoVGFyZ2V0OiBGdW5jdGlvbjtcblxuZnVuY3Rpb24gdHJ5Q2F0Y2hlcigpOiBhbnkge1xuICB0cnkge1xuICAgIHJldHVybiB0cnlDYXRjaFRhcmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZXJyb3JPYmplY3QuZSA9IGU7XG4gICAgcmV0dXJuIGVycm9yT2JqZWN0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnlDYXRjaDxUIGV4dGVuZHMgRnVuY3Rpb24+KGZuOiBUKTogVCB7XG4gIHRyeUNhdGNoVGFyZ2V0ID0gZm47XG4gIHJldHVybiA8YW55PnRyeUNhdGNoZXI7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
