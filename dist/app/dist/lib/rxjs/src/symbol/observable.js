System.register(['../util/root'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1;
    var Symbol, $$observable;
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            }],
        execute: function() {
            Symbol = root_1.root.Symbol;
            if (typeof Symbol === 'function') {
                if (Symbol.observable) {
                    exports_1("$$observable", $$observable = Symbol.observable);
                }
                else {
                    if (typeof Symbol.for === 'function') {
                        exports_1("$$observable", $$observable = Symbol.for('observable'));
                    }
                    else {
                        exports_1("$$observable", $$observable = Symbol('observable'));
                    }
                    Symbol.observable = $$observable;
                }
            }
            else {
                exports_1("$$observable", $$observable = '@@observable');
            }
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3N5bWJvbC9vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFFTSxNQUFNLEVBRUQsWUFBWTs7Ozs7OztZQUZqQixNQUFNLEdBQUcsV0FBSSxDQUFDLE1BQU0sQ0FBQztZQUkzQixFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDdEIsMEJBQUEsWUFBWSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUEsQ0FBQztnQkFDbkMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDckMsMEJBQUEsWUFBWSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztvQkFDMUMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTiwwQkFBQSxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUM7b0JBQ3RDLENBQUM7b0JBQ0QsTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7Z0JBQ25DLENBQUM7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sMEJBQUEsWUFBWSxHQUFRLGNBQWMsQ0FBQSxDQUFDO1lBQ3JDLENBQUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvc3ltYm9sL29ic2VydmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Jvb3R9IGZyb20gJy4uL3V0aWwvcm9vdCc7XG5cbmNvbnN0IFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgbGV0ICQkb2JzZXJ2YWJsZTogc3ltYm9sO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuICBpZiAoU3ltYm9sLm9ic2VydmFibGUpIHtcbiAgICAkJG9ic2VydmFibGUgPSBTeW1ib2wub2JzZXJ2YWJsZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbC5mb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICQkb2JzZXJ2YWJsZSA9IFN5bWJvbC5mb3IoJ29ic2VydmFibGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCRvYnNlcnZhYmxlID0gU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG4gICAgfVxuICAgIFN5bWJvbC5vYnNlcnZhYmxlID0gJCRvYnNlcnZhYmxlO1xuICB9XG59IGVsc2Uge1xuICAkJG9ic2VydmFibGUgPSA8YW55PidAQG9ic2VydmFibGUnO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
