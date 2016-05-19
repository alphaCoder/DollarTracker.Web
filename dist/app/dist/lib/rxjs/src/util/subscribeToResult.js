System.register(['./root', './isArray', './isPromise', '../Observable', '../symbol/iterator', '../symbol/observable', '../InnerSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1, isArray_1, isPromise_1, Observable_1, iterator_1, observable_1, InnerSubscriber_1;
    function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
        var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
        if (destination.isUnsubscribed) {
            return;
        }
        if (result instanceof Observable_1.Observable) {
            if (result._isScalar) {
                destination.next(result.value);
                destination.complete();
                return;
            }
            else {
                return result.subscribe(destination);
            }
        }
        if (isArray_1.isArray(result)) {
            for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
                destination.next(result[i]);
            }
            if (!destination.isUnsubscribed) {
                destination.complete();
            }
        }
        else if (isPromise_1.isPromise(result)) {
            result.then(function (value) {
                if (!destination.isUnsubscribed) {
                    destination.next(value);
                    destination.complete();
                }
            }, function (err) { return destination.error(err); })
                .then(null, function (err) {
                // Escaping the Promise trap: globally throw unhandled errors
                root_1.root.setTimeout(function () { throw err; });
            });
            return destination;
        }
        else if (typeof result[iterator_1.$$iterator] === 'function') {
            for (var _i = 0, _a = result; _i < _a.length; _i++) {
                var item = _a[_i];
                destination.next(item);
                if (destination.isUnsubscribed) {
                    break;
                }
            }
            if (!destination.isUnsubscribed) {
                destination.complete();
            }
        }
        else if (typeof result[observable_1.$$observable] === 'function') {
            var obs = result[observable_1.$$observable]();
            if (typeof obs.subscribe !== 'function') {
                destination.error('invalid observable');
            }
            else {
                return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
            }
        }
        else {
            destination.error(new TypeError('unknown type returned'));
        }
    }
    exports_1("subscribeToResult", subscribeToResult);
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            },
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
            },
            function (isPromise_1_1) {
                isPromise_1 = isPromise_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (iterator_1_1) {
                iterator_1 = iterator_1_1;
            },
            function (observable_1_1) {
                observable_1 = observable_1_1;
            },
            function (InnerSubscriber_1_1) {
                InnerSubscriber_1 = InnerSubscriber_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQWVBLDJCQUFxQyxlQUEwQyxFQUMxQyxNQUEwQixFQUMxQixVQUFjLEVBQ2QsVUFBbUI7UUFDdEQsSUFBSSxXQUFXLEdBQW9CLElBQUksaUNBQWUsQ0FBQyxlQUFlLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRWhHLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLFlBQVksdUJBQVUsQ0FBQyxDQUFDLENBQUM7WUFDakMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLFdBQVcsQ0FBQyxJQUFJLENBQU8sTUFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQztZQUNULENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN2QyxDQUFDO1FBQ0gsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNqRixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekIsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMscUJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FDVCxVQUFDLEtBQUs7Z0JBQ0osRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsV0FBVyxDQUFDLElBQUksQ0FBTSxLQUFLLENBQUMsQ0FBQztvQkFDN0IsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN6QixDQUFDO1lBQ0gsQ0FBQyxFQUNELFVBQUMsR0FBUSxJQUFLLE9BQUEsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBdEIsQ0FBc0IsQ0FDckM7aUJBQ0EsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFDLEdBQVE7Z0JBQ25CLDZEQUE2RDtnQkFDN0QsV0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFRLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMscUJBQVUsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEQsR0FBRyxDQUFDLENBQWEsVUFBVyxFQUFYLEtBQUssTUFBTSxFQUFYLGNBQVcsRUFBWCxJQUFXLENBQUM7Z0JBQXhCLElBQUksSUFBSSxTQUFBO2dCQUNYLFdBQVcsQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLENBQUM7Z0JBQzVCLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUMvQixLQUFLLENBQUM7Z0JBQ1IsQ0FBQzthQUNGO1lBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pCLENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLHlCQUFZLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyx5QkFBWSxDQUFDLEVBQUUsQ0FBQztZQUNuQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDeEMsV0FBVyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzFDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLGlDQUFlLENBQUMsZUFBZSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JGLENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQTlERCxpREE4REMsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy91dGlsL3N1YnNjcmliZVRvUmVzdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyb290fSBmcm9tICcuL3Jvb3QnO1xuaW1wb3J0IHtpc0FycmF5fSBmcm9tICcuL2lzQXJyYXknO1xuaW1wb3J0IHtpc1Byb21pc2V9IGZyb20gJy4vaXNQcm9taXNlJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge09ic2VydmFibGUsIE9ic2VydmFibGVJbnB1dH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyQkaXRlcmF0b3J9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5pbXBvcnQgeyQkb2JzZXJ2YWJsZX0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQge0lubmVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vSW5uZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7T3V0ZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlVG9SZXN1bHQ8VCwgUj4ob3V0ZXJTdWJzY3JpYmVyOiBPdXRlclN1YnNjcmliZXI8VCwgUj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJWYWx1ZT86IFQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJJbmRleD86IG51bWJlcik6IFN1YnNjcmlwdGlvbjtcbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVUb1Jlc3VsdDxUPihvdXRlclN1YnNjcmliZXI6IE91dGVyU3Vic2NyaWJlcjxhbnksIGFueT4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBPYnNlcnZhYmxlSW5wdXQ8VD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJWYWx1ZT86IFQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJJbmRleD86IG51bWJlcik6IFN1YnNjcmlwdGlvbiB7XG4gIGxldCBkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxhbnk+ID0gbmV3IElubmVyU3Vic2NyaWJlcihvdXRlclN1YnNjcmliZXIsIG91dGVyVmFsdWUsIG91dGVySW5kZXgpO1xuXG4gIGlmIChkZXN0aW5hdGlvbi5pc1Vuc3Vic2NyaWJlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgaWYgKHJlc3VsdC5faXNTY2FsYXIpIHtcbiAgICAgIGRlc3RpbmF0aW9uLm5leHQoKDxhbnk+cmVzdWx0KS52YWx1ZSk7XG4gICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0LnN1YnNjcmliZShkZXN0aW5hdGlvbik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzQXJyYXkocmVzdWx0KSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXN1bHQubGVuZ3RoOyBpIDwgbGVuICYmICFkZXN0aW5hdGlvbi5pc1Vuc3Vic2NyaWJlZDsgaSsrKSB7XG4gICAgICBkZXN0aW5hdGlvbi5uZXh0KHJlc3VsdFtpXSk7XG4gICAgfVxuICAgIGlmICghZGVzdGluYXRpb24uaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgIGRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgcmVzdWx0LnRoZW4oXG4gICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCFkZXN0aW5hdGlvbi5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgIGRlc3RpbmF0aW9uLm5leHQoPGFueT52YWx1ZSk7XG4gICAgICAgICAgZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChlcnI6IGFueSkgPT4gZGVzdGluYXRpb24uZXJyb3IoZXJyKVxuICAgIClcbiAgICAudGhlbihudWxsLCAoZXJyOiBhbnkpID0+IHtcbiAgICAgIC8vIEVzY2FwaW5nIHRoZSBQcm9taXNlIHRyYXA6IGdsb2JhbGx5IHRocm93IHVuaGFuZGxlZCBlcnJvcnNcbiAgICAgIHJvb3Quc2V0VGltZW91dCgoKSA9PiB7IHRocm93IGVycjsgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiByZXN1bHRbJCRpdGVyYXRvcl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIDxhbnk+cmVzdWx0KSB7XG4gICAgICBkZXN0aW5hdGlvbi5uZXh0KDxhbnk+aXRlbSk7XG4gICAgICBpZiAoZGVzdGluYXRpb24uaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZGVzdGluYXRpb24uaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgIGRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiByZXN1bHRbJCRvYnNlcnZhYmxlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IG9icyA9IHJlc3VsdFskJG9ic2VydmFibGVdKCk7XG4gICAgaWYgKHR5cGVvZiBvYnMuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkZXN0aW5hdGlvbi5lcnJvcignaW52YWxpZCBvYnNlcnZhYmxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvYnMuc3Vic2NyaWJlKG5ldyBJbm5lclN1YnNjcmliZXIob3V0ZXJTdWJzY3JpYmVyLCBvdXRlclZhbHVlLCBvdXRlckluZGV4KSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRlc3RpbmF0aW9uLmVycm9yKG5ldyBUeXBlRXJyb3IoJ3Vua25vd24gdHlwZSByZXR1cm5lZCcpKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
