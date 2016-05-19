System.register(['./publishReplay'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var publishReplay_1;
    /**
     * @param bufferSize
     * @param windowTime
     * @param scheduler
     * @return {Observable<any>}
     * @method cache
     * @owner Observable
     */
    function cache(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        return publishReplay_1.publishReplay.call(this, bufferSize, windowTime, scheduler).refCount();
    }
    exports_1("cache", cache);
    return {
        setters:[
            function (publishReplay_1_1) {
                publishReplay_1 = publishReplay_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2NhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFLQTs7Ozs7OztPQU9HO0lBQ0gsZUFBeUIsVUFBNkMsRUFDN0MsVUFBNkMsRUFDN0MsU0FBcUI7UUFGckIsMEJBQTZDLEdBQTdDLGFBQXFCLE1BQU0sQ0FBQyxpQkFBaUI7UUFDN0MsMEJBQTZDLEdBQTdDLGFBQXFCLE1BQU0sQ0FBQyxpQkFBaUI7UUFFcEUsTUFBTSxDQUE4Qiw2QkFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5RyxDQUFDO0lBSkQseUJBSUMsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9jYWNoZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge3B1Ymxpc2hSZXBsYXl9IGZyb20gJy4vcHVibGlzaFJlcGxheSc7XG5pbXBvcnQge1NjaGVkdWxlcn0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbmltcG9ydCB7Q29ubmVjdGFibGVPYnNlcnZhYmxlfSBmcm9tICcuLi9vYnNlcnZhYmxlL0Nvbm5lY3RhYmxlT2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogQHBhcmFtIGJ1ZmZlclNpemVcbiAqIEBwYXJhbSB3aW5kb3dUaW1lXG4gKiBAcGFyYW0gc2NoZWR1bGVyXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gKiBAbWV0aG9kIGNhY2hlXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGU8VD4oYnVmZmVyU2l6ZTogbnVtYmVyID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1RpbWU6IG51bWJlciA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuICg8Q29ubmVjdGFibGVPYnNlcnZhYmxlPGFueT4+cHVibGlzaFJlcGxheS5jYWxsKHRoaXMsIGJ1ZmZlclNpemUsIHdpbmRvd1RpbWUsIHNjaGVkdWxlcikpLnJlZkNvdW50KCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVTaWduYXR1cmU8VD4ge1xuICAoYnVmZmVyU2l6ZT86IG51bWJlciwgd2luZG93VGltZT86IG51bWJlciwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
