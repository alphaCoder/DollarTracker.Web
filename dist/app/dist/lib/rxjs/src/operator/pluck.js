System.register(['./map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var map_1;
    /**
     * Maps each source value (an object) to its specified nested property.
     *
     * <span class="informal">Like {@link map}, but meant only for picking one of
     * the nested properties of every emitted object.</span>
     *
     * <img src="./img/pluck.png" width="100%">
     *
     * Given a list of strings describing a path to an object property, retrieves
     * the value of a specified nested property from all values in the source
     * Observable. If a property can't be resolved, it will return `undefined` for
     * that value.
     *
     * @example <caption>Map every every click to the tagName of the clicked target element</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var tagNames = clicks.pluck('target', 'tagName');
     * tagNames.subscribe(x => console.log(x));
     *
     * @see {@link map}
     *
     * @param {...string} properties The nested properties to pluck from each source
     * value (an object).
     * @return {Observable} Returns a new Observable of property values from the
     * source values.
     * @method pluck
     * @owner Observable
     */
    function pluck() {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i - 0] = arguments[_i];
        }
        var length = properties.length;
        if (length === 0) {
            throw new Error('List of properties cannot be empty.');
        }
        return map_1.map.call(this, plucker(properties, length));
    }
    exports_1("pluck", pluck);
    function plucker(props, length) {
        var mapper = function (x) {
            var currentProp = x;
            for (var i = 0; i < length; i++) {
                var p = currentProp[props[i]];
                if (typeof p !== 'undefined') {
                    currentProp = p;
                }
                else {
                    return undefined;
                }
            }
            return currentProp;
        };
        return mapper;
    }
    return {
        setters:[
            function (map_1_1) {
                map_1 = map_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3BsdWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0EwQkc7SUFDSDtRQUF5QixvQkFBdUI7YUFBdkIsV0FBdUIsQ0FBdkIsc0JBQXVCLENBQXZCLElBQXVCO1lBQXZCLG1DQUF1Qjs7UUFDOUMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNELE1BQU0sQ0FBQyxTQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQU5ELHlCQU1DLENBQUE7SUFNRCxpQkFBaUIsS0FBZSxFQUFFLE1BQWM7UUFDOUMsSUFBTSxNQUFNLEdBQUcsVUFBQyxDQUFTO1lBQ3ZCLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNwQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNoQyxJQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDbkIsQ0FBQztZQUNILENBQUM7WUFDRCxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JCLENBQUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9wbHVjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge21hcH0gZnJvbSAnLi9tYXAnO1xuXG4vKipcbiAqIE1hcHMgZWFjaCBzb3VyY2UgdmFsdWUgKGFuIG9iamVjdCkgdG8gaXRzIHNwZWNpZmllZCBuZXN0ZWQgcHJvcGVydHkuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkxpa2Uge0BsaW5rIG1hcH0sIGJ1dCBtZWFudCBvbmx5IGZvciBwaWNraW5nIG9uZSBvZlxuICogdGhlIG5lc3RlZCBwcm9wZXJ0aWVzIG9mIGV2ZXJ5IGVtaXR0ZWQgb2JqZWN0Ljwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3BsdWNrLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIEdpdmVuIGEgbGlzdCBvZiBzdHJpbmdzIGRlc2NyaWJpbmcgYSBwYXRoIHRvIGFuIG9iamVjdCBwcm9wZXJ0eSwgcmV0cmlldmVzXG4gKiB0aGUgdmFsdWUgb2YgYSBzcGVjaWZpZWQgbmVzdGVkIHByb3BlcnR5IGZyb20gYWxsIHZhbHVlcyBpbiB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlLiBJZiBhIHByb3BlcnR5IGNhbid0IGJlIHJlc29sdmVkLCBpdCB3aWxsIHJldHVybiBgdW5kZWZpbmVkYCBmb3JcbiAqIHRoYXQgdmFsdWUuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+TWFwIGV2ZXJ5IGV2ZXJ5IGNsaWNrIHRvIHRoZSB0YWdOYW1lIG9mIHRoZSBjbGlja2VkIHRhcmdldCBlbGVtZW50PC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciB0YWdOYW1lcyA9IGNsaWNrcy5wbHVjaygndGFyZ2V0JywgJ3RhZ05hbWUnKTtcbiAqIHRhZ05hbWVzLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBtYXB9XG4gKlxuICogQHBhcmFtIHsuLi5zdHJpbmd9IHByb3BlcnRpZXMgVGhlIG5lc3RlZCBwcm9wZXJ0aWVzIHRvIHBsdWNrIGZyb20gZWFjaCBzb3VyY2VcbiAqIHZhbHVlIChhbiBvYmplY3QpLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gUmV0dXJucyBhIG5ldyBPYnNlcnZhYmxlIG9mIHByb3BlcnR5IHZhbHVlcyBmcm9tIHRoZVxuICogc291cmNlIHZhbHVlcy5cbiAqIEBtZXRob2QgcGx1Y2tcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwbHVjazxSPiguLi5wcm9wZXJ0aWVzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8Uj4ge1xuICBjb25zdCBsZW5ndGggPSBwcm9wZXJ0aWVzLmxlbmd0aDtcbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTGlzdCBvZiBwcm9wZXJ0aWVzIGNhbm5vdCBiZSBlbXB0eS4nKTtcbiAgfVxuICByZXR1cm4gbWFwLmNhbGwodGhpcywgcGx1Y2tlcihwcm9wZXJ0aWVzLCBsZW5ndGgpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQbHVja1NpZ25hdHVyZTxUPiB7XG4gIDxSPiguLi5wcm9wZXJ0aWVzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8Uj47XG59XG5cbmZ1bmN0aW9uIHBsdWNrZXIocHJvcHM6IHN0cmluZ1tdLCBsZW5ndGg6IG51bWJlcik6ICh4OiBzdHJpbmcpID0+IGFueSB7XG4gIGNvbnN0IG1hcHBlciA9ICh4OiBzdHJpbmcpID0+IHtcbiAgICBsZXQgY3VycmVudFByb3AgPSB4O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHAgPSBjdXJyZW50UHJvcFtwcm9wc1tpXV07XG4gICAgICBpZiAodHlwZW9mIHAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGN1cnJlbnRQcm9wID0gcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50UHJvcDtcbiAgfTtcblxuICByZXR1cm4gbWFwcGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
