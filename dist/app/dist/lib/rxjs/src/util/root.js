System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var objectTypes, root, freeExports, freeModule, freeGlobal;
    return {
        setters:[],
        execute: function() {
            objectTypes = {
                'boolean': false,
                'function': true,
                'object': true,
                'number': false,
                'string': false,
                'undefined': false
            };
            exports_1("root", root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window));
            /* tslint:disable:no-unused-variable */
            freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
            freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
            freeGlobal = objectTypes[typeof global] && global;
            if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
                exports_1("root", root = freeGlobal);
            }
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3V0aWwvcm9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFBSSxXQUFXLEVBb0JKLElBQUksRUFHWCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFVBQVU7Ozs7WUF6QlYsV0FBVyxHQUFHO2dCQUNoQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFdBQVcsRUFBRSxLQUFLO2FBQ25CLENBQUM7WUFhUyxrQkFBQSxJQUFJLEdBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFFcEcsdUNBQXVDO1lBQ25DLFdBQVcsR0FBRyxXQUFXLENBQUMsT0FBTyxPQUFPLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQztZQUNyRixVQUFVLEdBQUcsV0FBVyxDQUFDLE9BQU8sTUFBTSxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUM7WUFDaEYsVUFBVSxHQUFHLFdBQVcsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUV0RCxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekYsa0JBQUEsSUFBSSxHQUFHLFVBQVUsQ0FBQSxDQUFDO1lBQ3BCLENBQUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvdXRpbC9yb290LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IG9iamVjdFR5cGVzID0ge1xuICAnYm9vbGVhbic6IGZhbHNlLFxuICAnZnVuY3Rpb24nOiB0cnVlLFxuICAnb2JqZWN0JzogdHJ1ZSxcbiAgJ251bWJlcic6IGZhbHNlLFxuICAnc3RyaW5nJzogZmFsc2UsXG4gICd1bmRlZmluZWQnOiBmYWxzZVxufTtcblxuZGVjbGFyZSBsZXQgZ2xvYmFsOiBOb2RlSlMuR2xvYmFsO1xuZGVjbGFyZSBsZXQgbW9kdWxlOiBhbnk7XG5kZWNsYXJlIGxldCBleHBvcnRzOiBhbnk7XG5cbmRlY2xhcmUgbW9kdWxlIE5vZGVKUyB7XG4gIGludGVyZmFjZSBHbG9iYWwge1xuICAgIHdpbmRvdzogYW55O1xuICAgIGdsb2JhbDogYW55O1xuICB9XG59XG5cbmV4cG9ydCBsZXQgcm9vdDogYW55ID0gKG9iamVjdFR5cGVzW3R5cGVvZiBzZWxmXSAmJiBzZWxmKSB8fCAob2JqZWN0VHlwZXNbdHlwZW9mIHdpbmRvd10gJiYgd2luZG93KTtcblxuLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLXZhcmlhYmxlICovXG5sZXQgZnJlZUV4cG9ydHMgPSBvYmplY3RUeXBlc1t0eXBlb2YgZXhwb3J0c10gJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xubGV0IGZyZWVNb2R1bGUgPSBvYmplY3RUeXBlc1t0eXBlb2YgbW9kdWxlXSAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5sZXQgZnJlZUdsb2JhbCA9IG9iamVjdFR5cGVzW3R5cGVvZiBnbG9iYWxdICYmIGdsb2JhbDtcblxuaWYgKGZyZWVHbG9iYWwgJiYgKGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8IGZyZWVHbG9iYWwud2luZG93ID09PSBmcmVlR2xvYmFsKSkge1xuICByb290ID0gZnJlZUdsb2JhbDtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
