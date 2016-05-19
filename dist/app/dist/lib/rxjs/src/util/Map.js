System.register(['./root', './MapPolyfill'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1, MapPolyfill_1;
    var Map;
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            },
            function (MapPolyfill_1_1) {
                MapPolyfill_1 = MapPolyfill_1_1;
            }],
        execute: function() {
            exports_1("Map", Map = root_1.root.Map || (function () { return MapPolyfill_1.MapPolyfill; })());
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3V0aWwvTWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFHYSxHQUFHOzs7Ozs7Ozs7O1lBQUgsaUJBQUEsR0FBRyxHQUFHLFdBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFNLE9BQUEseUJBQVcsRUFBWCxDQUFXLENBQUMsRUFBRSxDQUFBLENBQUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvdXRpbC9NYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Jvb3R9IGZyb20gJy4vcm9vdCc7XG5pbXBvcnQge01hcFBvbHlmaWxsfSBmcm9tICcuL01hcFBvbHlmaWxsJztcblxuZXhwb3J0IGNvbnN0IE1hcCA9IHJvb3QuTWFwIHx8ICgoKSA9PiBNYXBQb2x5ZmlsbCkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
