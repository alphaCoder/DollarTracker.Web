System.register(['../util/root'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1;
    var $$iterator, Symbol;
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            }],
        execute: function() {
            Symbol = root_1.root.Symbol;
            if (typeof Symbol === 'function') {
                if (Symbol.iterator) {
                    exports_1("$$iterator", $$iterator = Symbol.iterator);
                }
                else if (typeof Symbol.for === 'function') {
                    exports_1("$$iterator", $$iterator = Symbol.for('iterator'));
                }
            }
            else {
                if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
                    // Bug for mozilla version
                    exports_1("$$iterator", $$iterator = '@@iterator');
                }
                else if (root_1.root.Map) {
                    // es6-shim specific logic
                    var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
                    for (var i = 0; i < keys.length; ++i) {
                        var key = keys[i];
                        if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
                            exports_1("$$iterator", $$iterator = key);
                            break;
                        }
                    }
                }
                else {
                    exports_1("$$iterator", $$iterator = '@@iterator');
                }
            }
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3N5bWJvbC9pdGVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBRVcsVUFBVSxFQUVmLE1BQU07Ozs7Ozs7WUFBTixNQUFNLEdBQVEsV0FBSSxDQUFDLE1BQU0sQ0FBQztZQUVoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDcEIsd0JBQUEsVUFBVSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUEsQ0FBQztnQkFDL0IsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsR0FBRyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLHdCQUFBLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7Z0JBQ3RDLENBQUM7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osRUFBRSxDQUFDLENBQUMsV0FBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLElBQUksV0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ25FLDBCQUEwQjtvQkFDMUIsd0JBQUEsVUFBVSxHQUFHLFlBQVksQ0FBQSxDQUFDO2dCQUM1QixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsMEJBQTBCO29CQUMxQixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsV0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQ3JDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssTUFBTSxJQUFJLFdBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFdBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDckcsd0JBQUEsVUFBVSxHQUFHLEdBQUcsQ0FBQSxDQUFDOzRCQUNqQixLQUFLLENBQUM7d0JBQ1IsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sd0JBQUEsVUFBVSxHQUFHLFlBQVksQ0FBQSxDQUFDO2dCQUM1QixDQUFDO1lBQ0wsQ0FBQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9zeW1ib2wvaXRlcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Jvb3R9IGZyb20gJy4uL3V0aWwvcm9vdCc7XG5cbmV4cG9ydCBsZXQgJCRpdGVyYXRvcjogYW55O1xuXG5jb25zdCBTeW1ib2w6IGFueSA9IHJvb3QuU3ltYm9sO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yKSB7XG4gICAgJCRpdGVyYXRvciA9IFN5bWJvbC5pdGVyYXRvcjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgU3ltYm9sLmZvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICQkaXRlcmF0b3IgPSBTeW1ib2wuZm9yKCdpdGVyYXRvcicpO1xuICB9XG59IGVsc2Uge1xuICAgIGlmIChyb290LlNldCAmJiB0eXBlb2YgbmV3IHJvb3QuU2V0KClbJ0BAaXRlcmF0b3InXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQnVnIGZvciBtb3ppbGxhIHZlcnNpb25cbiAgICAgICQkaXRlcmF0b3IgPSAnQEBpdGVyYXRvcic7XG4gICAgfSBlbHNlIGlmIChyb290Lk1hcCkge1xuICAgICAgLy8gZXM2LXNoaW0gc3BlY2lmaWMgbG9naWNcbiAgICAgIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocm9vdC5NYXAucHJvdG90eXBlKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ2VudHJpZXMnICYmIGtleSAhPT0gJ3NpemUnICYmIHJvb3QuTWFwLnByb3RvdHlwZVtrZXldID09PSByb290Lk1hcC5wcm90b3R5cGVbJ2VudHJpZXMnXSkge1xuICAgICAgICAgICQkaXRlcmF0b3IgPSBrZXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgJCRpdGVyYXRvciA9ICdAQGl0ZXJhdG9yJztcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
