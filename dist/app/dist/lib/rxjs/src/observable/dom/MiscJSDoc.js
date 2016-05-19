System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AjaxRequestDoc;
    return {
        setters:[],
        execute: function() {
            /**
             * @see {@link ajax}
             *
             * @interface
             * @name AjaxRequest
             * @noimport true
             */
            AjaxRequestDoc = (function () {
                function AjaxRequestDoc() {
                    /**
                     * @type {string}
                     */
                    this.url = '';
                    /**
                     * @type {number}
                     */
                    this.body = 0;
                    /**
                     * @type {string}
                     */
                    this.user = '';
                    /**
                     * @type {boolean}
                     */
                    this.async = false;
                    /**
                     * @type {string}
                     */
                    this.method = '';
                    /**
                     * @type {Object}
                     */
                    this.headers = null;
                    /**
                     * @type {number}
                     */
                    this.timeout = 0;
                    /**
                     * @type {string}
                     */
                    this.password = '';
                    /**
                     * @type {boolean}
                     */
                    this.hasContent = false;
                    /**
                     * @type {boolean}
                     */
                    this.crossDomain = false;
                    /**
                     * @type {Subscriber}
                     */
                    this.progressSubscriber = null;
                    /**
                     * @type {string}
                     */
                    this.responseType = '';
                }
                /**
                 * @return {XMLHttpRequest}
                 */
                AjaxRequestDoc.prototype.createXHR = function () {
                    return null;
                };
                /**
                 * @param {AjaxResponse} response
                 * @return {T}
                 */
                AjaxRequestDoc.prototype.resultSelector = function (response) {
                    return null;
                };
                return AjaxRequestDoc;
            }());
            exports_1("AjaxRequestDoc", AjaxRequestDoc);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvZG9tL01pc2NKU0RvYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBR0E7Ozs7OztlQU1HO1lBQ0g7Z0JBQUE7b0JBQ0U7O3VCQUVHO29CQUNILFFBQUcsR0FBVyxFQUFFLENBQUM7b0JBQ2pCOzt1QkFFRztvQkFDSCxTQUFJLEdBQVEsQ0FBQyxDQUFDO29CQUNkOzt1QkFFRztvQkFDSCxTQUFJLEdBQVcsRUFBRSxDQUFDO29CQUNsQjs7dUJBRUc7b0JBQ0gsVUFBSyxHQUFZLEtBQUssQ0FBQztvQkFDdkI7O3VCQUVHO29CQUNILFdBQU0sR0FBVyxFQUFFLENBQUM7b0JBQ3BCOzt1QkFFRztvQkFDSCxZQUFPLEdBQVcsSUFBSSxDQUFDO29CQUN2Qjs7dUJBRUc7b0JBQ0gsWUFBTyxHQUFXLENBQUMsQ0FBQztvQkFDcEI7O3VCQUVHO29CQUNILGFBQVEsR0FBVyxFQUFFLENBQUM7b0JBQ3RCOzt1QkFFRztvQkFDSCxlQUFVLEdBQVksS0FBSyxDQUFDO29CQUM1Qjs7dUJBRUc7b0JBQ0gsZ0JBQVcsR0FBWSxLQUFLLENBQUM7b0JBTzdCOzt1QkFFRztvQkFDSCx1QkFBa0IsR0FBb0IsSUFBSSxDQUFDO29CQVEzQzs7dUJBRUc7b0JBQ0gsaUJBQVksR0FBVyxFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBckJDOzttQkFFRztnQkFDSCxrQ0FBUyxHQUFUO29CQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFLRDs7O21CQUdHO2dCQUNILHVDQUFjLEdBQWQsVUFBa0IsUUFBc0I7b0JBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFLSCxxQkFBQztZQUFELENBOURBLEFBOERDLElBQUE7WUE5REQsMkNBOERDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb2JzZXJ2YWJsZS9kb20vTWlzY0pTRG9jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi8uLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7QWpheFJlc3BvbnNlfSBmcm9tICcuL0FqYXhPYnNlcnZhYmxlJztcblxuLyoqXG4gKiBAc2VlIHtAbGluayBhamF4fVxuICpcbiAqIEBpbnRlcmZhY2VcbiAqIEBuYW1lIEFqYXhSZXF1ZXN0XG4gKiBAbm9pbXBvcnQgdHJ1ZVxuICovXG5leHBvcnQgY2xhc3MgQWpheFJlcXVlc3REb2Mge1xuICAvKipcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHVybDogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgYm9keTogYW55ID0gMDtcbiAgLyoqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB1c2VyOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgYXN5bmM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBtZXRob2Q6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGhlYWRlcnM6IE9iamVjdCA9IG51bGw7XG4gIC8qKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgdGltZW91dDogbnVtYmVyID0gMDtcbiAgLyoqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBwYXNzd29yZDogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NvbnRlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgY3Jvc3NEb21haW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEByZXR1cm4ge1hNTEh0dHBSZXF1ZXN0fVxuICAgKi9cbiAgY3JlYXRlWEhSKCk6IFhNTEh0dHBSZXF1ZXN0IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKipcbiAgICogQHR5cGUge1N1YnNjcmliZXJ9XG4gICAqL1xuICBwcm9ncmVzc1N1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PiA9IG51bGw7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0FqYXhSZXNwb25zZX0gcmVzcG9uc2VcbiAgICogQHJldHVybiB7VH1cbiAgICovXG4gIHJlc3VsdFNlbGVjdG9yPFQ+KHJlc3BvbnNlOiBBamF4UmVzcG9uc2UpOiBUIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKipcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHJlc3BvbnNlVHlwZTogc3RyaW5nID0gJyc7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
