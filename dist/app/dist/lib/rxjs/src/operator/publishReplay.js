System.register(['../ReplaySubject', './multicast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ReplaySubject_1, multicast_1;
    /**
     * @param bufferSize
     * @param windowTime
     * @param scheduler
     * @return {ConnectableObservable<T>}
     * @method publishReplay
     * @owner Observable
     */
    function publishReplay(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
    }
    exports_1("publishReplay", publishReplay);
    return {
        setters:[
            function (ReplaySubject_1_1) {
                ReplaySubject_1 = ReplaySubject_1_1;
            },
            function (multicast_1_1) {
                multicast_1 = multicast_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3B1Ymxpc2hSZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQUtBOzs7Ozs7O09BT0c7SUFDSCx1QkFBaUMsVUFBNkMsRUFDN0MsVUFBNkMsRUFDN0MsU0FBcUI7UUFGckIsMEJBQTZDLEdBQTdDLGFBQXFCLE1BQU0sQ0FBQyxpQkFBaUI7UUFDN0MsMEJBQTZDLEdBQTdDLGFBQXFCLE1BQU0sQ0FBQyxpQkFBaUI7UUFFNUUsTUFBTSxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLDZCQUFhLENBQUksVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFKRCx5Q0FJQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3B1Ymxpc2hSZXBsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlcGxheVN1YmplY3R9IGZyb20gJy4uL1JlcGxheVN1YmplY3QnO1xuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge211bHRpY2FzdH0gZnJvbSAnLi9tdWx0aWNhc3QnO1xuaW1wb3J0IHtDb25uZWN0YWJsZU9ic2VydmFibGV9IGZyb20gJy4uL29ic2VydmFibGUvQ29ubmVjdGFibGVPYnNlcnZhYmxlJztcblxuLyoqXG4gKiBAcGFyYW0gYnVmZmVyU2l6ZVxuICogQHBhcmFtIHdpbmRvd1RpbWVcbiAqIEBwYXJhbSBzY2hlZHVsZXJcbiAqIEByZXR1cm4ge0Nvbm5lY3RhYmxlT2JzZXJ2YWJsZTxUPn1cbiAqIEBtZXRob2QgcHVibGlzaFJlcGxheVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1Ymxpc2hSZXBsYXk8VD4oYnVmZmVyU2l6ZTogbnVtYmVyID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93VGltZTogbnVtYmVyID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogQ29ubmVjdGFibGVPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIG11bHRpY2FzdC5jYWxsKHRoaXMsIG5ldyBSZXBsYXlTdWJqZWN0PFQ+KGJ1ZmZlclNpemUsIHdpbmRvd1RpbWUsIHNjaGVkdWxlcikpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFB1Ymxpc2hSZXBsYXlTaWduYXR1cmU8VD4ge1xuICAoYnVmZmVyU2l6ZT86IG51bWJlciwgd2luZG93VGltZT86IG51bWJlciwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogQ29ubmVjdGFibGVPYnNlcnZhYmxlPFQ+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
