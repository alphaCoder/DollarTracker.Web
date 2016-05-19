System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MapPolyfill;
    return {
        setters:[],
        execute: function() {
            MapPolyfill = (function () {
                function MapPolyfill() {
                    this.size = 0;
                    this._values = [];
                    this._keys = [];
                }
                MapPolyfill.prototype.get = function (key) {
                    var i = this._keys.indexOf(key);
                    return i === -1 ? undefined : this._values[i];
                };
                MapPolyfill.prototype.set = function (key, value) {
                    var i = this._keys.indexOf(key);
                    if (i === -1) {
                        this._keys.push(key);
                        this._values.push(value);
                        this.size++;
                    }
                    else {
                        this._values[i] = value;
                    }
                    return this;
                };
                MapPolyfill.prototype.delete = function (key) {
                    var i = this._keys.indexOf(key);
                    if (i === -1) {
                        return false;
                    }
                    this._values.splice(i, 1);
                    this._keys.splice(i, 1);
                    this.size--;
                    return true;
                };
                MapPolyfill.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this.size = 0;
                };
                MapPolyfill.prototype.forEach = function (cb, thisArg) {
                    for (var i = 0; i < this.size; i++) {
                        cb.call(thisArg, this._values[i], this._keys[i]);
                    }
                };
                return MapPolyfill;
            }());
            exports_1("MapPolyfill", MapPolyfill);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3V0aWwvTWFwUG9seWZpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUFBO29CQUNTLFNBQUksR0FBRyxDQUFDLENBQUM7b0JBQ1IsWUFBTyxHQUFVLEVBQUUsQ0FBQztvQkFDcEIsVUFBSyxHQUFVLEVBQUUsQ0FBQztnQkF1QzVCLENBQUM7Z0JBckNDLHlCQUFHLEdBQUgsVUFBSSxHQUFRO29CQUNWLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVELHlCQUFHLEdBQUgsVUFBSSxHQUFRLEVBQUUsS0FBVTtvQkFDdEIsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN6QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2QsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztvQkFDMUIsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBRUQsNEJBQU0sR0FBTixVQUFPLEdBQVE7b0JBQ2IsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFBQyxDQUFDO29CQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCwyQkFBSyxHQUFMO29CQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBWSxFQUFFLE9BQVk7b0JBQ2hDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUNuQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkQsQ0FBQztnQkFDSCxDQUFDO2dCQUNILGtCQUFDO1lBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtZQTFDRCxxQ0EwQ0MsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy91dGlsL01hcFBvbHlmaWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1hcFBvbHlmaWxsIHtcbiAgcHVibGljIHNpemUgPSAwO1xuICBwcml2YXRlIF92YWx1ZXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgX2tleXM6IGFueVtdID0gW107XG5cbiAgZ2V0KGtleTogYW55KSB7XG4gICAgY29uc3QgaSA9IHRoaXMuX2tleXMuaW5kZXhPZihrZXkpO1xuICAgIHJldHVybiBpID09PSAtMSA/IHVuZGVmaW5lZCA6IHRoaXMuX3ZhbHVlc1tpXTtcbiAgfVxuXG4gIHNldChrZXk6IGFueSwgdmFsdWU6IGFueSkge1xuICAgIGNvbnN0IGkgPSB0aGlzLl9rZXlzLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuX2tleXMucHVzaChrZXkpO1xuICAgICAgdGhpcy5fdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgdGhpcy5zaXplKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlc1tpXSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlbGV0ZShrZXk6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGkgPSB0aGlzLl9rZXlzLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaSA9PT0gLTEpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgdGhpcy5fdmFsdWVzLnNwbGljZShpLCAxKTtcbiAgICB0aGlzLl9rZXlzLnNwbGljZShpLCAxKTtcbiAgICB0aGlzLnNpemUtLTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuX2tleXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl92YWx1ZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLnNpemUgPSAwO1xuICB9XG5cbiAgZm9yRWFjaChjYjogRnVuY3Rpb24sIHRoaXNBcmc6IGFueSk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcbiAgICAgIGNiLmNhbGwodGhpc0FyZywgdGhpcy5fdmFsdWVzW2ldLCB0aGlzLl9rZXlzW2ldKTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
