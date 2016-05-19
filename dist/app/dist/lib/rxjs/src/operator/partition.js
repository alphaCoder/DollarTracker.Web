System.register(['../util/not', './filter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var not_1, filter_1;
    /**
     * @param predicate
     * @param thisArg
     * @return {Observable<T>[]}
     * @method partition
     * @owner Observable
     */
    function partition(predicate, thisArg) {
        return [
            filter_1.filter.call(this, predicate),
            filter_1.filter.call(this, not_1.not(predicate, thisArg))
        ];
    }
    exports_1("partition", partition);
    return {
        setters:[
            function (not_1_1) {
                not_1 = not_1_1;
            },
            function (filter_1_1) {
                filter_1 = filter_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3BhcnRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBSUE7Ozs7OztPQU1HO0lBQ0gsbUJBQTZCLFNBQWdDLEVBQUUsT0FBYTtRQUMxRSxNQUFNLENBQUM7WUFDTCxlQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUM7WUFDNUIsZUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUMzQyxDQUFDO0lBQ0osQ0FBQztJQUxELGlDQUtDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvcGFydGl0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtub3R9IGZyb20gJy4uL3V0aWwvbm90JztcbmltcG9ydCB7ZmlsdGVyfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuXG4vKipcbiAqIEBwYXJhbSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB0aGlzQXJnXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFQ+W119XG4gKiBAbWV0aG9kIHBhcnRpdGlvblxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpdGlvbjxUPihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbiwgdGhpc0FyZz86IGFueSk6IFtPYnNlcnZhYmxlPFQ+LCBPYnNlcnZhYmxlPFQ+XSB7XG4gIHJldHVybiBbXG4gICAgZmlsdGVyLmNhbGwodGhpcywgcHJlZGljYXRlKSxcbiAgICBmaWx0ZXIuY2FsbCh0aGlzLCBub3QocHJlZGljYXRlLCB0aGlzQXJnKSlcbiAgXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJ0aXRpb25TaWduYXR1cmU8VD4ge1xuICAocHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4sIHRoaXNBcmc/OiBhbnkpOiBbT2JzZXJ2YWJsZTxUPiwgT2JzZXJ2YWJsZTxUPl07XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
