System.register(['../Observable', '../util/noop'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, noop_1;
    var NeverObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (noop_1_1) {
                noop_1 = noop_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            NeverObservable = (function (_super) {
                __extends(NeverObservable, _super);
                function NeverObservable() {
                    _super.call(this);
                }
                /**
                 * Creates an Observable that emits no items to the Observer.
                 *
                 * <span class="informal">An Observable that never emits anything.</span>
                 *
                 * <img src="./img/never.png" width="100%">
                 *
                 * This static operator is useful for creating a simple Observable that emits
                 * neither values nor errors nor the completion notification. It can be used
                 * for testing purposes or for composing with other Observables. Please not
                 * that by never emitting a complete notification, this Observable keeps the
                 * subscription from being disposed automatically. Subscriptions need to be
                 * manually disposed.
                 *
                 * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
                 * function info() {
                 *   console.log('Will not be called');
                 * }
                 * var result = Rx.Observable.never().startWith(7);
                 * result.subscribe(x => console.log(x), info, info);
                 *
                 * @see {@link create}
                 * @see {@link empty}
                 * @see {@link of}
                 * @see {@link throw}
                 *
                 * @return {Observable} A "never" Observable: never emits anything.
                 * @static true
                 * @name never
                 * @owner Observable
                 */
                NeverObservable.create = function () {
                    return new NeverObservable();
                };
                NeverObservable.prototype._subscribe = function (subscriber) {
                    noop_1.noop();
                };
                return NeverObservable;
            }(Observable_1.Observable));
            exports_1("NeverObservable", NeverObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvTmV2ZXJPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTs7OztlQUlHO1lBQ0g7Z0JBQXdDLG1DQUFhO2dCQW9DbkQ7b0JBQ0UsaUJBQU8sQ0FBQztnQkFDVixDQUFDO2dCQXJDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQThCRztnQkFDSSxzQkFBTSxHQUFiO29CQUNFLE1BQU0sQ0FBQyxJQUFJLGVBQWUsRUFBSyxDQUFDO2dCQUNsQyxDQUFDO2dCQU1TLG9DQUFVLEdBQXBCLFVBQXFCLFVBQXlCO29CQUM1QyxXQUFJLEVBQUUsQ0FBQztnQkFDVCxDQUFDO2dCQUNILHNCQUFDO1lBQUQsQ0EzQ0EsQUEyQ0MsQ0EzQ3VDLHVCQUFVLEdBMkNqRDtZQTNDRCw2Q0EyQ0MsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vYnNlcnZhYmxlL05ldmVyT2JzZXJ2YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtub29wfSBmcm9tICcuLi91dGlsL25vb3AnO1xuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqIEBoaWRlIHRydWVcbiAqL1xuZXhwb3J0IGNsYXNzIE5ldmVyT2JzZXJ2YWJsZTxUPiBleHRlbmRzIE9ic2VydmFibGU8VD4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgbm8gaXRlbXMgdG8gdGhlIE9ic2VydmVyLlxuICAgKlxuICAgKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+QW4gT2JzZXJ2YWJsZSB0aGF0IG5ldmVyIGVtaXRzIGFueXRoaW5nLjwvc3Bhbj5cbiAgICpcbiAgICogPGltZyBzcmM9XCIuL2ltZy9uZXZlci5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICpcbiAgICogVGhpcyBzdGF0aWMgb3BlcmF0b3IgaXMgdXNlZnVsIGZvciBjcmVhdGluZyBhIHNpbXBsZSBPYnNlcnZhYmxlIHRoYXQgZW1pdHNcbiAgICogbmVpdGhlciB2YWx1ZXMgbm9yIGVycm9ycyBub3IgdGhlIGNvbXBsZXRpb24gbm90aWZpY2F0aW9uLiBJdCBjYW4gYmUgdXNlZFxuICAgKiBmb3IgdGVzdGluZyBwdXJwb3NlcyBvciBmb3IgY29tcG9zaW5nIHdpdGggb3RoZXIgT2JzZXJ2YWJsZXMuIFBsZWFzZSBub3RcbiAgICogdGhhdCBieSBuZXZlciBlbWl0dGluZyBhIGNvbXBsZXRlIG5vdGlmaWNhdGlvbiwgdGhpcyBPYnNlcnZhYmxlIGtlZXBzIHRoZVxuICAgKiBzdWJzY3JpcHRpb24gZnJvbSBiZWluZyBkaXNwb3NlZCBhdXRvbWF0aWNhbGx5LiBTdWJzY3JpcHRpb25zIG5lZWQgdG8gYmVcbiAgICogbWFudWFsbHkgZGlzcG9zZWQuXG4gICAqXG4gICAqIEBleGFtcGxlIDxjYXB0aW9uPkVtaXQgdGhlIG51bWJlciA3LCB0aGVuIG5ldmVyIGVtaXQgYW55dGhpbmcgZWxzZSAobm90IGV2ZW4gY29tcGxldGUpLjwvY2FwdGlvbj5cbiAgICogZnVuY3Rpb24gaW5mbygpIHtcbiAgICogICBjb25zb2xlLmxvZygnV2lsbCBub3QgYmUgY2FsbGVkJyk7XG4gICAqIH1cbiAgICogdmFyIHJlc3VsdCA9IFJ4Lk9ic2VydmFibGUubmV2ZXIoKS5zdGFydFdpdGgoNyk7XG4gICAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSwgaW5mbywgaW5mbyk7XG4gICAqXG4gICAqIEBzZWUge0BsaW5rIGNyZWF0ZX1cbiAgICogQHNlZSB7QGxpbmsgZW1wdHl9XG4gICAqIEBzZWUge0BsaW5rIG9mfVxuICAgKiBAc2VlIHtAbGluayB0aHJvd31cbiAgICpcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQSBcIm5ldmVyXCIgT2JzZXJ2YWJsZTogbmV2ZXIgZW1pdHMgYW55dGhpbmcuXG4gICAqIEBzdGF0aWMgdHJ1ZVxuICAgKiBAbmFtZSBuZXZlclxuICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTxUPigpIHtcbiAgICByZXR1cm4gbmV3IE5ldmVyT2JzZXJ2YWJsZTxUPigpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiB2b2lkIHtcbiAgICBub29wKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
