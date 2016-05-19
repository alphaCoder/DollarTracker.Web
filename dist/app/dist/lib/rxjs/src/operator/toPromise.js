System.register(['../util/root'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1;
    /**
     * @param PromiseCtor
     * @return {Promise<T>}
     * @method toPromise
     * @owner Observable
     */
    function toPromise(PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    }
    exports_1("toPromise", toPromise);
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3RvUHJvbWlzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBRUE7Ozs7O09BS0c7SUFDSCxtQkFBNkIsV0FBNEI7UUFBekQsaUJBaUJDO1FBaEJDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNqQixFQUFFLENBQUMsQ0FBQyxXQUFJLENBQUMsRUFBRSxJQUFJLFdBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLFdBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELFdBQVcsR0FBRyxXQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDdkMsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsV0FBVyxHQUFHLFdBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsQ0FBQztRQUNILENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxXQUFXLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNyQyxJQUFJLEtBQVUsQ0FBQztZQUNmLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFJLElBQUssT0FBQSxLQUFLLEdBQUcsQ0FBQyxFQUFULENBQVMsRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBZCxDQUFjLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQkQsaUNBaUJDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvdG9Qcm9taXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyb290fSBmcm9tICcuLi91dGlsL3Jvb3QnO1xuXG4vKipcbiAqIEBwYXJhbSBQcm9taXNlQ3RvclxuICogQHJldHVybiB7UHJvbWlzZTxUPn1cbiAqIEBtZXRob2QgdG9Qcm9taXNlXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9Qcm9taXNlPFQ+KFByb21pc2VDdG9yPzogdHlwZW9mIFByb21pc2UpOiBQcm9taXNlPFQ+IHtcbiAgaWYgKCFQcm9taXNlQ3Rvcikge1xuICAgIGlmIChyb290LlJ4ICYmIHJvb3QuUnguY29uZmlnICYmIHJvb3QuUnguY29uZmlnLlByb21pc2UpIHtcbiAgICAgIFByb21pc2VDdG9yID0gcm9vdC5SeC5jb25maWcuUHJvbWlzZTtcbiAgICB9IGVsc2UgaWYgKHJvb3QuUHJvbWlzZSkge1xuICAgICAgUHJvbWlzZUN0b3IgPSByb290LlByb21pc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFQcm9taXNlQ3Rvcikge1xuICAgIHRocm93IG5ldyBFcnJvcignbm8gUHJvbWlzZSBpbXBsIGZvdW5kJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2VDdG9yKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgdmFsdWU6IGFueTtcbiAgICB0aGlzLnN1YnNjcmliZSgoeDogVCkgPT4gdmFsdWUgPSB4LCAoZXJyOiBhbnkpID0+IHJlamVjdChlcnIpLCAoKSA9PiByZXNvbHZlKHZhbHVlKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvUHJvbWlzZVNpZ25hdHVyZTxUPiB7XG4gICgpOiBQcm9taXNlPFQ+O1xuICAoUHJvbWlzZUN0b3I6IHR5cGVvZiBQcm9taXNlKTogUHJvbWlzZTxUPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
