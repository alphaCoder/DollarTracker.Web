System.register(['./root'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1;
    var Object, assign;
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            }],
        execute: function() {
            Object = root_1.root.Object;
            if (typeof Object.assign != 'function') {
                (function () {
                    Object.assign = function assignPolyfill(target) {
                        var sources = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                            sources[_i - 1] = arguments[_i];
                        }
                        if (target === undefined || target === null) {
                            throw new TypeError('Cannot convert undefined or null to object');
                        }
                        var output = Object(target);
                        var len = sources.length;
                        for (var index = 0; index < len; index++) {
                            var source = sources[index];
                            if (source !== undefined && source !== null) {
                                for (var key in source) {
                                    if (source.hasOwnProperty(key)) {
                                        output[key] = source[key];
                                    }
                                }
                            }
                        }
                        return output;
                    };
                })();
            }
            exports_1("assign", assign = Object.assign);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3V0aWwvYXNzaWduLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFFTSxNQUFNLEVBMkJDLE1BQU07Ozs7Ozs7WUEzQmIsTUFBTSxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQUM7WUFFM0IsRUFBRSxDQUFDLENBQUMsT0FBYSxNQUFPLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLENBQUM7b0JBQ08sTUFBTyxDQUFDLE1BQU0sR0FBRyx3QkFBd0IsTUFBYzt3QkFBRSxpQkFBeUI7NkJBQXpCLFdBQXlCLENBQXpCLHNCQUF5QixDQUF6QixJQUF5Qjs0QkFBekIsZ0NBQXlCOzt3QkFDdEYsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDNUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO3dCQUNwRSxDQUFDO3dCQUVELElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDOUIsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzt3QkFDM0IsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQzs0QkFDekMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUM1QixFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dDQUM1QyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO29DQUN2QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3Q0FDL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQ0FDNUIsQ0FBQztnQ0FDSCxDQUFDOzRCQUNILENBQUM7d0JBQ0gsQ0FBQzt3QkFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO29CQUNoQixDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNQLENBQUM7WUFFWSxvQkFBQSxNQUFNLEdBQTBELE1BQU0sQ0FBQyxNQUFNLENBQUEsQ0FBQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy91dGlsL2Fzc2lnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cm9vdH0gZnJvbSAnLi9yb290JztcblxuY29uc3QgT2JqZWN0ID0gcm9vdC5PYmplY3Q7XG5cbmlmICh0eXBlb2YgKDxhbnk+T2JqZWN0KS5hc3NpZ24gIT0gJ2Z1bmN0aW9uJykge1xuICAoZnVuY3Rpb24gKCkge1xuICAgICg8YW55Pk9iamVjdCkuYXNzaWduID0gZnVuY3Rpb24gYXNzaWduUG9seWZpbGwodGFyZ2V0OiBPYmplY3QsIC4uLnNvdXJjZXM6IEFycmF5PE9iamVjdD4pOiBPYmplY3Qge1xuICAgICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkIHx8IHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3V0cHV0ID0gT2JqZWN0KHRhcmdldCk7XG4gICAgICBjb25zdCBsZW4gPSBzb3VyY2VzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgICAgbGV0IHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQgJiYgc291cmNlICE9PSBudWxsKSB7XG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIG91dHB1dFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFzc2lnbjogKHRhcmdldDogT2JqZWN0LCAuLi5zb3VyY2VzOiBBcnJheTxPYmplY3Q+KSA9PiBPYmplY3QgPSBPYmplY3QuYXNzaWduOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
