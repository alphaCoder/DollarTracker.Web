System.register(['./Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Subscriber_1;
    var Operator;
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            Operator = (function () {
                function Operator() {
                }
                Operator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new Subscriber_1.Subscriber(subscriber));
                };
                return Operator;
            }());
            exports_1("Operator", Operator);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL09wZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQUE7Z0JBSUEsQ0FBQztnQkFIQyx1QkFBSSxHQUFKLFVBQUssVUFBeUIsRUFBRSxNQUFXO29CQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLHVCQUFVLENBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztnQkFDSCxlQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCwrQkFJQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL09wZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuL1N1YnNjcmliZXInO1xuXG5leHBvcnQgY2xhc3MgT3BlcmF0b3I8VCwgUj4ge1xuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Uj4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFN1YnNjcmliZXI8VD4oc3Vic2NyaWJlcikpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
