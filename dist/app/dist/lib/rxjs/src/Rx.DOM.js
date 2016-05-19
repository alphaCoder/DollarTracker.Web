System.register(['./Rx', './add/observable/dom/ajax', './add/observable/dom/webSocket', './observable/dom/AjaxObservable', './scheduler/asap', './scheduler/async', './scheduler/queue', './scheduler/animationFrame'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var asap_1, async_1, queue_1, animationFrame_1;
    var Scheduler;
    var exportedNames_1 = {
        'Scheduler': true,
        'AjaxRequest': true,
        'AjaxResponse': true,
        'AjaxError': true,
        'AjaxTimeoutError': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (Rx_1_1) {
                exportStar_1(Rx_1_1);
            },
            function (_1) {},
            function (_2) {},
            function (AjaxObservable_1_1) {
                exports_1({
                    "AjaxRequest": AjaxObservable_1_1["AjaxRequest"],
                    "AjaxResponse": AjaxObservable_1_1["AjaxResponse"],
                    "AjaxError": AjaxObservable_1_1["AjaxError"],
                    "AjaxTimeoutError": AjaxObservable_1_1["AjaxTimeoutError"]
                });
            },
            function (asap_1_1) {
                asap_1 = asap_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (queue_1_1) {
                queue_1 = queue_1_1;
            },
            function (animationFrame_1_1) {
                animationFrame_1 = animationFrame_1_1;
            }],
        execute: function() {
            /* tslint:enable:no-unused-variable */
            exports_1("Scheduler", Scheduler = {
                asap: asap_1.asap,
                async: async_1.async,
                queue: queue_1.queue,
                animationFrame: animationFrame_1.animationFrame
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL1J4LkRPTS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBbUJXLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFGcEIsc0NBQXNDO1lBRTNCLHVCQUFBLFNBQVMsR0FBRztnQkFDckIsTUFBQSxXQUFJO2dCQUNKLE9BQUEsYUFBSztnQkFDTCxPQUFBLGFBQUs7Z0JBQ0wsZ0JBQUEsK0JBQWM7YUFDZixDQUFBLENBQUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvUnguRE9NLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9SeCc7XG5cbmltcG9ydCAnLi9hZGQvb2JzZXJ2YWJsZS9kb20vYWpheCc7XG5pbXBvcnQgJy4vYWRkL29ic2VydmFibGUvZG9tL3dlYlNvY2tldCc7XG5cbmV4cG9ydCB7QWpheFJlcXVlc3QsIEFqYXhSZXNwb25zZSwgQWpheEVycm9yLCBBamF4VGltZW91dEVycm9yfSBmcm9tICcuL29ic2VydmFibGUvZG9tL0FqYXhPYnNlcnZhYmxlJztcblxuLy8gUmVidWlsZCBgU2NoZWR1bGVyYCBmb3IgUnguRE9NXG5pbXBvcnQge2FzYXB9IGZyb20gJy4vc2NoZWR1bGVyL2FzYXAnO1xuaW1wb3J0IHthc3luY30gZnJvbSAnLi9zY2hlZHVsZXIvYXN5bmMnO1xuaW1wb3J0IHtxdWV1ZX0gZnJvbSAnLi9zY2hlZHVsZXIvcXVldWUnO1xuaW1wb3J0IHthbmltYXRpb25GcmFtZX0gZnJvbSAnLi9zY2hlZHVsZXIvYW5pbWF0aW9uRnJhbWUnO1xuLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLXZhcmlhYmxlICovXG5pbXBvcnQge0FzYXBTY2hlZHVsZXJ9IGZyb20gJy4vc2NoZWR1bGVyL0FzYXBTY2hlZHVsZXInO1xuaW1wb3J0IHtBc3luY1NjaGVkdWxlcn0gZnJvbSAnLi9zY2hlZHVsZXIvQXN5bmNTY2hlZHVsZXInO1xuaW1wb3J0IHtRdWV1ZVNjaGVkdWxlcn0gZnJvbSAnLi9zY2hlZHVsZXIvUXVldWVTY2hlZHVsZXInO1xuaW1wb3J0IHtBbmltYXRpb25GcmFtZVNjaGVkdWxlcn0gZnJvbSAnLi9zY2hlZHVsZXIvQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXInO1xuLyogdHNsaW50OmVuYWJsZTpuby11bnVzZWQtdmFyaWFibGUgKi9cblxuZXhwb3J0IHZhciBTY2hlZHVsZXIgPSB7XG4gIGFzYXAsXG4gIGFzeW5jLFxuICBxdWV1ZSxcbiAgYW5pbWF0aW9uRnJhbWVcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
