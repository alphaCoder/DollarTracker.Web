System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function not(pred, thisArg) {
        function notPred() {
            return !(notPred.pred.apply(notPred.thisArg, arguments));
        }
        notPred.pred = pred;
        notPred.thisArg = thisArg;
        return notPred;
    }
    exports_1("not", not);
    return {
        setters:[],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3V0aWwvbm90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGFBQW9CLElBQWMsRUFBRSxPQUFZO1FBQzlDO1lBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBUSxPQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBUSxPQUFRLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUNNLE9BQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE9BQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQVBELHFCQU9DLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvdXRpbC9ub3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbm90KHByZWQ6IEZ1bmN0aW9uLCB0aGlzQXJnOiBhbnkpOiBGdW5jdGlvbiB7XG4gIGZ1bmN0aW9uIG5vdFByZWQoKTogYW55IHtcbiAgICByZXR1cm4gISgoPGFueT4gbm90UHJlZCkucHJlZC5hcHBseSgoPGFueT4gbm90UHJlZCkudGhpc0FyZywgYXJndW1lbnRzKSk7XG4gIH1cbiAgKDxhbnk+IG5vdFByZWQpLnByZWQgPSBwcmVkO1xuICAoPGFueT4gbm90UHJlZCkudGhpc0FyZyA9IHRoaXNBcmc7XG4gIHJldHVybiBub3RQcmVkO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
