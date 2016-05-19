System.register(['../util/isArray'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var isArray_1;
    function isNumeric(val) {
        // parseFloat NaNs numeric-cast false positives (null|true|false|"")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        // adding 1 corrects loss of precision from parseFloat (#15100)
        return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
    }
    exports_1("isNumeric", isNumeric);
    return {
        setters:[
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
            }],
        execute: function() {
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3V0aWwvaXNOdW1lcmljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFFQSxtQkFBMEIsR0FBUTtRQUNoQyxvRUFBb0U7UUFDcEUsbUZBQW1GO1FBQ25GLHVDQUF1QztRQUN2QywrREFBK0Q7UUFDL0QsTUFBTSxDQUFDLENBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFORCxpQ0FNQyxDQUFBOzs7Ozs7O1lBQUEsQ0FBQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy91dGlsL2lzTnVtZXJpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNBcnJheX0gZnJvbSAnLi4vdXRpbC9pc0FycmF5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtZXJpYyh2YWw6IGFueSk6IHZhbCBpcyBudW1iZXIge1xuICAvLyBwYXJzZUZsb2F0IE5hTnMgbnVtZXJpYy1jYXN0IGZhbHNlIHBvc2l0aXZlcyAobnVsbHx0cnVlfGZhbHNlfFwiXCIpXG4gIC8vIC4uLmJ1dCBtaXNpbnRlcnByZXRzIGxlYWRpbmctbnVtYmVyIHN0cmluZ3MsIHBhcnRpY3VsYXJseSBoZXggbGl0ZXJhbHMgKFwiMHguLi5cIilcbiAgLy8gc3VidHJhY3Rpb24gZm9yY2VzIGluZmluaXRpZXMgdG8gTmFOXG4gIC8vIGFkZGluZyAxIGNvcnJlY3RzIGxvc3Mgb2YgcHJlY2lzaW9uIGZyb20gcGFyc2VGbG9hdCAoIzE1MTAwKVxuICByZXR1cm4gIWlzQXJyYXkodmFsKSAmJiAodmFsIC0gcGFyc2VGbG9hdCh2YWwpICsgMSkgPj0gMDtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
