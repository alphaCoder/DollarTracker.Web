System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FastMap;
    return {
        setters:[],
        execute: function() {
            FastMap = (function () {
                function FastMap() {
                    this.values = {};
                }
                FastMap.prototype.delete = function (key) {
                    this.values[key] = null;
                    return true;
                };
                FastMap.prototype.set = function (key, value) {
                    this.values[key] = value;
                    return this;
                };
                FastMap.prototype.get = function (key) {
                    return this.values[key];
                };
                FastMap.prototype.forEach = function (cb, thisArg) {
                    var values = this.values;
                    for (var key in values) {
                        if (values.hasOwnProperty(key) && values[key] !== null) {
                            cb.call(thisArg, values[key], key);
                        }
                    }
                };
                FastMap.prototype.clear = function () {
                    this.values = {};
                };
                return FastMap;
            }());
            exports_1("FastMap", FastMap);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3V0aWwvRmFzdE1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQUE7Z0JBQUE7b0JBQ1UsV0FBTSxHQUFXLEVBQUUsQ0FBQztnQkE0QjlCLENBQUM7Z0JBMUJDLHdCQUFNLEdBQU4sVUFBTyxHQUFXO29CQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUVELHFCQUFHLEdBQUgsVUFBSSxHQUFXLEVBQUUsS0FBVTtvQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCxxQkFBRyxHQUFILFVBQUksR0FBVztvQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCx5QkFBTyxHQUFQLFVBQVEsRUFBa0MsRUFBRSxPQUFhO29CQUN2RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUMzQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUN2RCxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ3JDLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUVELHVCQUFLLEdBQUw7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBQ0gsY0FBQztZQUFELENBN0JBLEFBNkJDLElBQUE7WUE3QkQsNkJBNkJDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvdXRpbC9GYXN0TWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEZhc3RNYXAge1xuICBwcml2YXRlIHZhbHVlczogT2JqZWN0ID0ge307XG5cbiAgZGVsZXRlKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgdGhpcy52YWx1ZXNba2V5XSA9IG51bGw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBGYXN0TWFwIHtcbiAgICB0aGlzLnZhbHVlc1trZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlc1trZXldO1xuICB9XG5cbiAgZm9yRWFjaChjYjogKHZhbHVlOiBhbnksIGtleTogYW55KSA9PiB2b2lkLCB0aGlzQXJnPzogYW55KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHZhbHVlc1trZXldICE9PSBudWxsKSB7XG4gICAgICAgIGNiLmNhbGwodGhpc0FyZywgdmFsdWVzW2tleV0sIGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
