System.register(['../observable/ArrayObservable', '../observable/ScalarObservable', '../observable/EmptyObservable', './concat', '../util/isScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ArrayObservable_1, ScalarObservable_1, EmptyObservable_1, concat_1, isScheduler_1;
    /**
     * Returns an Observable that emits the items in a specified Iterable before it begins to emit items emitted by the
     * source Observable.
     *
     * <img src="./img/startWith.png" width="100%">
     *
     * @param {Values} an Iterable that contains the items you want the modified Observable to emit first.
     * @return {Observable} an Observable that emits the items in the specified Iterable and then emits the items
     * emitted by the source Observable.
     * @method startWith
     * @owner Observable
     */
    function startWith() {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i - 0] = arguments[_i];
        }
        var scheduler = array[array.length - 1];
        if (isScheduler_1.isScheduler(scheduler)) {
            array.pop();
        }
        else {
            scheduler = null;
        }
        var len = array.length;
        if (len === 1) {
            return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
        }
        else if (len > 1) {
            return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
        }
        else {
            return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
        }
    }
    exports_1("startWith", startWith);
    return {
        setters:[
            function (ArrayObservable_1_1) {
                ArrayObservable_1 = ArrayObservable_1_1;
            },
            function (ScalarObservable_1_1) {
                ScalarObservable_1 = ScalarObservable_1_1;
            },
            function (EmptyObservable_1_1) {
                EmptyObservable_1 = EmptyObservable_1_1;
            },
            function (concat_1_1) {
                concat_1 = concat_1_1;
            },
            function (isScheduler_1_1) {
                isScheduler_1 = isScheduler_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3N0YXJ0V2l0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBUUE7Ozs7Ozs7Ozs7O09BV0c7SUFDSDtRQUE2QixlQUE4QjthQUE5QixXQUE4QixDQUE5QixzQkFBOEIsQ0FBOUIsSUFBOEI7WUFBOUIsOEJBQThCOztRQUN6RCxJQUFJLFNBQVMsR0FBYyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUMsQ0FBQyx5QkFBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDZCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUM7UUFFRCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxDQUFDLHFCQUFZLENBQUMsSUFBSSxtQ0FBZ0IsQ0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQWlCLElBQUksQ0FBQyxDQUFDO1FBQzVGLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLHFCQUFZLENBQUMsSUFBSSxpQ0FBZSxDQUFTLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBaUIsSUFBSSxDQUFDLENBQUM7UUFDMUYsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLHFCQUFZLENBQUMsSUFBSSxpQ0FBZSxDQUFJLFNBQVMsQ0FBQyxFQUFpQixJQUFJLENBQUMsQ0FBQztRQUM5RSxDQUFDO0lBQ0gsQ0FBQztJQWhCRCxpQ0FnQkMsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9zdGFydFdpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjaGVkdWxlcn0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0FycmF5T2JzZXJ2YWJsZX0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9BcnJheU9ic2VydmFibGUnO1xuaW1wb3J0IHtTY2FsYXJPYnNlcnZhYmxlfSBmcm9tICcuLi9vYnNlcnZhYmxlL1NjYWxhck9ic2VydmFibGUnO1xuaW1wb3J0IHtFbXB0eU9ic2VydmFibGV9IGZyb20gJy4uL29ic2VydmFibGUvRW1wdHlPYnNlcnZhYmxlJztcbmltcG9ydCB7Y29uY2F0U3RhdGljfSBmcm9tICcuL2NvbmNhdCc7XG5pbXBvcnQge2lzU2NoZWR1bGVyfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgaXRlbXMgaW4gYSBzcGVjaWZpZWQgSXRlcmFibGUgYmVmb3JlIGl0IGJlZ2lucyB0byBlbWl0IGl0ZW1zIGVtaXR0ZWQgYnkgdGhlXG4gKiBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3N0YXJ0V2l0aC5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBAcGFyYW0ge1ZhbHVlc30gYW4gSXRlcmFibGUgdGhhdCBjb250YWlucyB0aGUgaXRlbXMgeW91IHdhbnQgdGhlIG1vZGlmaWVkIE9ic2VydmFibGUgdG8gZW1pdCBmaXJzdC5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgaXRlbXMgaW4gdGhlIHNwZWNpZmllZCBJdGVyYWJsZSBhbmQgdGhlbiBlbWl0cyB0aGUgaXRlbXNcbiAqIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICogQG1ldGhvZCBzdGFydFdpdGhcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFdpdGg8VD4oLi4uYXJyYXk6IEFycmF5PFQgfCBTY2hlZHVsZXI+KTogT2JzZXJ2YWJsZTxUPiB7XG4gIGxldCBzY2hlZHVsZXIgPSA8U2NoZWR1bGVyPmFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xuICBpZiAoaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSkge1xuICAgIGFycmF5LnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNjaGVkdWxlciA9IG51bGw7XG4gIH1cblxuICBjb25zdCBsZW4gPSBhcnJheS5sZW5ndGg7XG4gIGlmIChsZW4gPT09IDEpIHtcbiAgICByZXR1cm4gY29uY2F0U3RhdGljKG5ldyBTY2FsYXJPYnNlcnZhYmxlPFQ+KDxUPmFycmF5WzBdLCBzY2hlZHVsZXIpLCA8T2JzZXJ2YWJsZTxUPj50aGlzKTtcbiAgfSBlbHNlIGlmIChsZW4gPiAxKSB7XG4gICAgcmV0dXJuIGNvbmNhdFN0YXRpYyhuZXcgQXJyYXlPYnNlcnZhYmxlPFQ+KDxUW10+YXJyYXksIHNjaGVkdWxlciksIDxPYnNlcnZhYmxlPFQ+PnRoaXMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjb25jYXRTdGF0aWMobmV3IEVtcHR5T2JzZXJ2YWJsZTxUPihzY2hlZHVsZXIpLCA8T2JzZXJ2YWJsZTxUPj50aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXJ0V2l0aFNpZ25hdHVyZTxUPiB7XG4gICh2MTogVCwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUPjtcbiAgKHYxOiBULCB2MjogVCwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUPjtcbiAgKHYxOiBULCB2MjogVCwgdjM6IFQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VD47XG4gICh2MTogVCwgdjI6IFQsIHYzOiBULCB2NDogVCwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUPjtcbiAgKHYxOiBULCB2MjogVCwgdjM6IFQsIHY0OiBULCB2NTogVCwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUPjtcbiAgKHYxOiBULCB2MjogVCwgdjM6IFQsIHY0OiBULCB2NTogVCwgdjY6IFQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VD47XG4gICguLi5hcnJheTogQXJyYXk8VCB8IFNjaGVkdWxlcj4pOiBPYnNlcnZhYmxlPFQ+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
