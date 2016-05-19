System.register(['../../util/root', '../../util/tryCatch', '../../util/errorObject', '../../Observable', '../../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var root_1, tryCatch_1, errorObject_1, Observable_1, Subscriber_1;
    var AjaxObservable, AjaxSubscriber, AjaxResponse, AjaxError, AjaxTimeoutError;
    function createXHRDefault() {
        var xhr = new root_1.root.XMLHttpRequest();
        if (this.crossDomain) {
            if ('withCredentials' in xhr) {
                xhr.withCredentials = true;
                return xhr;
            }
            else if (!!root_1.root.XDomainRequest) {
                return new root_1.root.XDomainRequest();
            }
            else {
                throw new Error('CORS is not supported by your browser');
            }
        }
        else {
            return xhr;
        }
    }
    function defaultGetResultSelector(response) {
        return response.response;
    }
    function ajaxGet(url, resultSelector, headers) {
        if (resultSelector === void 0) { resultSelector = defaultGetResultSelector; }
        if (headers === void 0) { headers = null; }
        return new AjaxObservable({ method: 'GET', url: url, resultSelector: resultSelector, headers: headers });
    }
    exports_1("ajaxGet", ajaxGet);
    function ajaxPost(url, body, headers) {
        return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
    }
    exports_1("ajaxPost", ajaxPost);
    function ajaxDelete(url, headers) {
        return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
    }
    exports_1("ajaxDelete", ajaxDelete);
    function ajaxPut(url, body, headers) {
        return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
    }
    exports_1("ajaxPut", ajaxPut);
    function ajaxGetJSON(url, resultSelector, headers) {
        var finalResultSelector = resultSelector ? function (res) { return resultSelector(res.response); } : function (res) { return res.response; };
        return new AjaxObservable({ method: 'GET', url: url, responseType: 'json', resultSelector: finalResultSelector, headers: headers });
    }
    exports_1("ajaxGetJSON", ajaxGetJSON);
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            },
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            ;
            ;
            ;
            ;
            ;
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            AjaxObservable = (function (_super) {
                __extends(AjaxObservable, _super);
                function AjaxObservable(urlOrRequest) {
                    _super.call(this);
                    var request = {
                        async: true,
                        createXHR: createXHRDefault,
                        crossDomain: false,
                        headers: {},
                        method: 'GET',
                        responseType: 'json',
                        timeout: 0
                    };
                    if (typeof urlOrRequest === 'string') {
                        request.url = urlOrRequest;
                    }
                    else {
                        for (var prop in urlOrRequest) {
                            if (urlOrRequest.hasOwnProperty(prop)) {
                                request[prop] = urlOrRequest[prop];
                            }
                        }
                    }
                    this.request = request;
                }
                /**
                 * Creates an observable for an Ajax request with either a request object with
                 * url, headers, etc or a string for a URL.
                 *
                 * @example
                 * source = Rx.Observable.ajax('/products');
                 * source = Rx.Observable.ajax( url: 'products', method: 'GET' });
                 *
                 * @param {string|Object} request Can be one of the following:
                 *   A string of the URL to make the Ajax call.
                 *   An object with the following properties
                 *   - url: URL of the request
                 *   - body: The body of the request
                 *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
                 *   - async: Whether the request is async
                 *   - headers: Optional headers
                 *   - crossDomain: true if a cross domain request, else false
                 *   - createXHR: a function to override if you need to use an alternate
                 *   XMLHttpRequest implementation.
                 *   - resultSelector: a function to use to alter the output value type of
                 *   the Observable. Gets {@link AjaxResponse} as an argument.
                 * @return {Observable} An observable sequence containing the XMLHttpRequest.
                 * @static true
                 * @name ajax
                 * @owner Observable
                */
                AjaxObservable._create_stub = function () { return null; };
                AjaxObservable.prototype._subscribe = function (subscriber) {
                    return new AjaxSubscriber(subscriber, this.request);
                };
                AjaxObservable.create = (function () {
                    var create = function (urlOrRequest) {
                        return new AjaxObservable(urlOrRequest);
                    };
                    create.get = ajaxGet;
                    create.post = ajaxPost;
                    create.delete = ajaxDelete;
                    create.put = ajaxPut;
                    create.getJSON = ajaxGetJSON;
                    return create;
                })();
                return AjaxObservable;
            }(Observable_1.Observable));
            exports_1("AjaxObservable", AjaxObservable);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            AjaxSubscriber = (function (_super) {
                __extends(AjaxSubscriber, _super);
                function AjaxSubscriber(destination, request) {
                    _super.call(this, destination);
                    this.request = request;
                    this.done = false;
                    var headers = request.headers = request.headers || {};
                    // force CORS if requested
                    if (!request.crossDomain && !headers['X-Requested-With']) {
                        headers['X-Requested-With'] = 'XMLHttpRequest';
                    }
                    // ensure content type is set
                    if (!('Content-Type' in headers)) {
                        headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
                    }
                    // properly serialize body
                    request.body = this.serializeBody(request.body, request.headers['Content-Type']);
                    this.resultSelector = request.resultSelector;
                    this.send();
                }
                AjaxSubscriber.prototype.next = function (e) {
                    this.done = true;
                    var _a = this, resultSelector = _a.resultSelector, xhr = _a.xhr, request = _a.request, destination = _a.destination;
                    var response = new AjaxResponse(e, xhr, request);
                    if (resultSelector) {
                        var result = tryCatch_1.tryCatch(resultSelector)(response);
                        if (result === errorObject_1.errorObject) {
                            this.error(errorObject_1.errorObject.e);
                        }
                        else {
                            destination.next(result);
                        }
                    }
                    else {
                        destination.next(response);
                    }
                };
                AjaxSubscriber.prototype.send = function () {
                    var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
                    var createXHR = request.createXHR;
                    var xhr = tryCatch_1.tryCatch(createXHR).call(request);
                    if (xhr === errorObject_1.errorObject) {
                        this.error(errorObject_1.errorObject.e);
                    }
                    else {
                        this.xhr = xhr;
                        // open XHR first
                        var result = void 0;
                        if (user) {
                            result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async, user, password);
                        }
                        else {
                            result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async);
                        }
                        if (result === errorObject_1.errorObject) {
                            this.error(errorObject_1.errorObject.e);
                            return;
                        }
                        // timeout and responseType can be set once the XHR is open
                        xhr.timeout = request.timeout;
                        xhr.responseType = request.responseType;
                        // set headers
                        this.setHeaders(xhr, headers);
                        // now set up the events
                        this.setupEvents(xhr, request);
                        // finally send the request
                        if (body) {
                            xhr.send(body);
                        }
                        else {
                            xhr.send();
                        }
                    }
                };
                AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
                    if (!body || typeof body === 'string') {
                        return body;
                    }
                    else if (root_1.root.FormData && body instanceof root_1.root.FormData) {
                        return body;
                    }
                    var splitIndex = contentType.indexOf(';');
                    if (splitIndex !== -1) {
                        contentType = contentType.substring(0, splitIndex);
                    }
                    switch (contentType) {
                        case 'application/x-www-form-urlencoded':
                            return Object.keys(body).map(function (key) { return (encodeURI(key) + "=" + encodeURI(body[key])); }).join('&');
                        case 'application/json':
                            return JSON.stringify(body);
                    }
                };
                AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
                    for (var key in headers) {
                        if (headers.hasOwnProperty(key)) {
                            xhr.setRequestHeader(key, headers[key]);
                        }
                    }
                };
                AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
                    var progressSubscriber = request.progressSubscriber;
                    xhr.ontimeout = function xhrTimeout(e) {
                        var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
                        if (progressSubscriber) {
                            progressSubscriber.error(e);
                        }
                        subscriber.error(new AjaxTimeoutError(this, request)); //TODO: Make betterer.
                    };
                    xhr.ontimeout.request = request;
                    xhr.ontimeout.subscriber = this;
                    xhr.ontimeout.progressSubscriber = progressSubscriber;
                    if (xhr.upload && 'withCredentials' in xhr && root_1.root.XDomainRequest) {
                        if (progressSubscriber) {
                            xhr.onprogress = function xhrProgress(e) {
                                var progressSubscriber = xhrProgress.progressSubscriber;
                                progressSubscriber.next(e);
                            };
                            xhr.onprogress.progressSubscriber = progressSubscriber;
                        }
                        xhr.onerror = function xhrError(e) {
                            var _a = xhrError, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                            if (progressSubscriber) {
                                progressSubscriber.error(e);
                            }
                            subscriber.error(new AjaxError('ajax error', this, request));
                        };
                        xhr.onerror.request = request;
                        xhr.onerror.subscriber = this;
                        xhr.onerror.progressSubscriber = progressSubscriber;
                    }
                    xhr.onreadystatechange = function xhrReadyStateChange(e) {
                        var _a = xhrReadyStateChange, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
                        if (this.readyState === 4) {
                            // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                            var status_1 = this.status === 1223 ? 204 : this.status;
                            var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                            // fix status code when it is 0 (0 status is undocumented).
                            // Occurs when accessing file resources or on Android 4.1 stock browser
                            // while retrieving files from application cache.
                            if (status_1 === 0) {
                                status_1 = response ? 200 : 0;
                            }
                            if (200 <= status_1 && status_1 < 300) {
                                if (progressSubscriber) {
                                    progressSubscriber.complete();
                                }
                                subscriber.next(e);
                                subscriber.complete();
                            }
                            else {
                                if (progressSubscriber) {
                                    progressSubscriber.error(e);
                                }
                                subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
                            }
                        }
                    };
                    xhr.onreadystatechange.subscriber = this;
                    xhr.onreadystatechange.progressSubscriber = progressSubscriber;
                    xhr.onreadystatechange.request = request;
                };
                AjaxSubscriber.prototype.unsubscribe = function () {
                    var _a = this, done = _a.done, xhr = _a.xhr;
                    if (!done && xhr && xhr.readyState !== 4) {
                        xhr.abort();
                    }
                    _super.prototype.unsubscribe.call(this);
                };
                return AjaxSubscriber;
            }(Subscriber_1.Subscriber));
            exports_1("AjaxSubscriber", AjaxSubscriber);
            /**
             * A normalized AJAX response.
             *
             * @see {@link ajax}
             *
             * @class AjaxResponse
             */
            AjaxResponse = (function () {
                function AjaxResponse(originalEvent, xhr, request) {
                    this.originalEvent = originalEvent;
                    this.xhr = xhr;
                    this.request = request;
                    this.status = xhr.status;
                    this.responseType = xhr.responseType || request.responseType;
                    switch (this.responseType) {
                        case 'json':
                            if ('response' in xhr) {
                                //IE does not support json as responseType, parse it internally
                                this.response = xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || '');
                            }
                            else {
                                this.response = JSON.parse(xhr.responseText || '');
                            }
                            break;
                        case 'xml':
                            this.response = xhr.responseXML;
                            break;
                        case 'text':
                        default:
                            this.response = ('response' in xhr) ? xhr.response : xhr.responseText;
                            break;
                    }
                }
                return AjaxResponse;
            }());
            exports_1("AjaxResponse", AjaxResponse);
            /**
             * A normalized AJAX error.
             *
             * @see {@link ajax}
             *
             * @class AjaxError
             */
            AjaxError = (function (_super) {
                __extends(AjaxError, _super);
                function AjaxError(message, xhr, request) {
                    _super.call(this, message);
                    this.message = message;
                    this.xhr = xhr;
                    this.request = request;
                    this.status = xhr.status;
                }
                return AjaxError;
            }(Error));
            exports_1("AjaxError", AjaxError);
            /**
             * @see {@link ajax}
             *
             * @class AjaxTimeoutError
             */
            AjaxTimeoutError = (function (_super) {
                __extends(AjaxTimeoutError, _super);
                function AjaxTimeoutError(xhr, request) {
                    _super.call(this, 'ajax timeout', xhr, request);
                }
                return AjaxTimeoutError;
            }(AjaxError));
            exports_1("AjaxTimeoutError", AjaxTimeoutError);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvZG9tL0FqYXhPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUF3QkE7UUFDRSxJQUFJLEdBQUcsR0FBRyxJQUFJLFdBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixFQUFFLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNiLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxXQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztZQUMzRCxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNiLENBQUM7SUFDSCxDQUFDO0lBV0Qsa0NBQXFDLFFBQXNCO1FBQ3pELE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQkFBMkIsR0FBVyxFQUFFLGNBQXdFLEVBQUUsT0FBc0I7UUFBaEcsOEJBQXdFLEdBQXhFLHlDQUF3RTtRQUFFLHVCQUFzQixHQUF0QixjQUFzQjtRQUN0SSxNQUFNLENBQUMsSUFBSSxjQUFjLENBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUEsR0FBRyxFQUFFLGdCQUFBLGNBQWMsRUFBRSxTQUFBLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJ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RyxHQUFHLEdBQUcsQ0FBQztvQkFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUMzQixDQUFDO2dCQUNILGdCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsQ0FqQjhCLEtBQUssR0FpQm5DO1lBakJELGlDQWlCQyxDQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFzQyxvQ0FBUztnQkFDN0MsMEJBQVksR0FBbUIsRUFBRSxPQUFvQjtvQkFDbkQsa0JBQU0sY0FBYyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFDSCx1QkFBQztZQUFELENBSkEsQUFJQyxDQUpxQyxTQUFTLEdBSTlDO1lBSkQsK0NBSUMsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vYnNlcnZhYmxlL2RvbS9BamF4T2JzZXJ2YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cm9vdH0gZnJvbSAnLi4vLi4vdXRpbC9yb290JztcbmltcG9ydCB7dHJ5Q2F0Y2h9IGZyb20gJy4uLy4uL3V0aWwvdHJ5Q2F0Y2gnO1xuaW1wb3J0IHtlcnJvck9iamVjdH0gZnJvbSAnLi4vLi4vdXRpbC9lcnJvck9iamVjdCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uLy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi8uLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7VGVhcmRvd25Mb2dpY30gZnJvbSAnLi4vLi4vU3Vic2NyaXB0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBBamF4UmVxdWVzdCB7XG4gIHVybD86IHN0cmluZztcbiAgYm9keT86IGFueTtcbiAgdXNlcj86IHN0cmluZztcbiAgYXN5bmM/OiBib29sZWFuO1xuICBtZXRob2Q6IHN0cmluZztcbiAgaGVhZGVycz86IE9iamVjdDtcbiAgdGltZW91dD86IG51bWJlcjtcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIGhhc0NvbnRlbnQ/OiBib29sZWFuO1xuICBjcm9zc0RvbWFpbj86IGJvb2xlYW47XG4gIGNyZWF0ZVhIUj86ICgpID0+IFhNTEh0dHBSZXF1ZXN0O1xuICBwcm9ncmVzc1N1YnNjcmliZXI/OiBTdWJzY3JpYmVyPGFueT47XG4gIHJlc3VsdFNlbGVjdG9yPzogPFQ+KHJlc3BvbnNlOiBBamF4UmVzcG9uc2UpID0+IFQ7XG4gIHJlc3BvbnNlVHlwZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlWEhSRGVmYXVsdCgpOiBYTUxIdHRwUmVxdWVzdCB7XG4gIGxldCB4aHIgPSBuZXcgcm9vdC5YTUxIdHRwUmVxdWVzdCgpO1xuICBpZiAodGhpcy5jcm9zc0RvbWFpbikge1xuICAgIGlmICgnd2l0aENyZWRlbnRpYWxzJyBpbiB4aHIpIHtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgcmV0dXJuIHhocjtcbiAgICB9IGVsc2UgaWYgKCEhcm9vdC5YRG9tYWluUmVxdWVzdCkge1xuICAgICAgcmV0dXJuIG5ldyByb290LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ09SUyBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3NlcicpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geGhyO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWpheENyZWF0aW9uTWV0aG9kIHtcbiAgPFQ+KHVybE9yUmVxdWVzdDogc3RyaW5nIHwgQWpheFJlcXVlc3QpOiBPYnNlcnZhYmxlPFQ+O1xuICBnZXQ8VD4odXJsOiBzdHJpbmcsIHJlc3VsdFNlbGVjdG9yPzogKHJlc3BvbnNlOiBBamF4UmVzcG9uc2UpID0+IFQsIGhlYWRlcnM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPFQ+O1xuICBwb3N0PFQ+KHVybDogc3RyaW5nLCBib2R5PzogYW55LCBoZWFkZXJzPzogT2JqZWN0KTogT2JzZXJ2YWJsZTxUPjtcbiAgcHV0PFQ+KHVybDogc3RyaW5nLCBib2R5PzogYW55LCBoZWFkZXJzPzogT2JqZWN0KTogT2JzZXJ2YWJsZTxUPjtcbiAgZGVsZXRlPFQ+KHVybDogc3RyaW5nLCBoZWFkZXJzPzogT2JqZWN0KTogT2JzZXJ2YWJsZTxUPjtcbiAgZ2V0SlNPTjxULCBSPih1cmw6IHN0cmluZywgcmVzdWx0U2VsZWN0b3I/OiAoZGF0YTogVCkgPT4gUiwgaGVhZGVycz86IE9iamVjdCk6IE9ic2VydmFibGU8Uj47XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRHZXRSZXN1bHRTZWxlY3RvcjxUPihyZXNwb25zZTogQWpheFJlc3BvbnNlKTogVCB7XG4gIHJldHVybiByZXNwb25zZS5yZXNwb25zZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhHZXQ8VD4odXJsOiBzdHJpbmcsIHJlc3VsdFNlbGVjdG9yOiAocmVzcG9uc2U6IEFqYXhSZXNwb25zZSkgPT4gVCA9IGRlZmF1bHRHZXRSZXN1bHRTZWxlY3RvciwgaGVhZGVyczogT2JqZWN0ID0gbnVsbCkge1xuICByZXR1cm4gbmV3IEFqYXhPYnNlcnZhYmxlPFQ+KHsgbWV0aG9kOiAnR0VUJywgdXJsLCByZXN1bHRTZWxlY3RvciwgaGVhZGVycyB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhamF4UG9zdDxUPih1cmw6IHN0cmluZywgYm9keT86IGFueSwgaGVhZGVycz86IE9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gbmV3IEFqYXhPYnNlcnZhYmxlPFQ+KHsgbWV0aG9kOiAnUE9TVCcsIHVybCwgYm9keSwgaGVhZGVycyB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhamF4RGVsZXRlPFQ+KHVybDogc3RyaW5nLCBoZWFkZXJzPzogT2JqZWN0KTogT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiBuZXcgQWpheE9ic2VydmFibGU8VD4oeyBtZXRob2Q6ICdERUxFVEUnLCB1cmwsIGhlYWRlcnMgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWpheFB1dDxUPih1cmw6IHN0cmluZywgYm9keT86IGFueSwgaGVhZGVycz86IE9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gbmV3IEFqYXhPYnNlcnZhYmxlPFQ+KHsgbWV0aG9kOiAnUFVUJywgdXJsLCBib2R5LCBoZWFkZXJzIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhHZXRKU09OPFQsIFI+KHVybDogc3RyaW5nLCByZXN1bHRTZWxlY3Rvcj86IChkYXRhOiBUKSA9PiBSLCBoZWFkZXJzPzogT2JqZWN0KTogT2JzZXJ2YWJsZTxSPiB7XG4gIGNvbnN0IGZpbmFsUmVzdWx0U2VsZWN0b3IgPSByZXN1bHRTZWxlY3RvciA/IChyZXM6IEFqYXhSZXNwb25zZSkgPT4gcmVzdWx0U2VsZWN0b3IocmVzLnJlc3BvbnNlKSA6IChyZXM6IEFqYXhSZXNwb25zZSkgPT4gcmVzLnJlc3BvbnNlO1xuICByZXR1cm4gbmV3IEFqYXhPYnNlcnZhYmxlPFI+KHsgbWV0aG9kOiAnR0VUJywgdXJsLCByZXNwb25zZVR5cGU6ICdqc29uJywgcmVzdWx0U2VsZWN0b3I6IGZpbmFsUmVzdWx0U2VsZWN0b3IsIGhlYWRlcnMgfSk7XG59O1xuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqIEBoaWRlIHRydWVcbiAqL1xuZXhwb3J0IGNsYXNzIEFqYXhPYnNlcnZhYmxlPFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgZm9yIGFuIEFqYXggcmVxdWVzdCB3aXRoIGVpdGhlciBhIHJlcXVlc3Qgb2JqZWN0IHdpdGhcbiAgICogdXJsLCBoZWFkZXJzLCBldGMgb3IgYSBzdHJpbmcgZm9yIGEgVVJMLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBzb3VyY2UgPSBSeC5PYnNlcnZhYmxlLmFqYXgoJy9wcm9kdWN0cycpO1xuICAgKiBzb3VyY2UgPSBSeC5PYnNlcnZhYmxlLmFqYXgoIHVybDogJ3Byb2R1Y3RzJywgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSByZXF1ZXN0IENhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcbiAgICogICBBIHN0cmluZyBvZiB0aGUgVVJMIHRvIG1ha2UgdGhlIEFqYXggY2FsbC5cbiAgICogICBBbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXNcbiAgICogICAtIHVybDogVVJMIG9mIHRoZSByZXF1ZXN0XG4gICAqICAgLSBib2R5OiBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiAgIC0gbWV0aG9kOiBNZXRob2Qgb2YgdGhlIHJlcXVlc3QsIHN1Y2ggYXMgR0VULCBQT1NULCBQVVQsIFBBVENILCBERUxFVEVcbiAgICogICAtIGFzeW5jOiBXaGV0aGVyIHRoZSByZXF1ZXN0IGlzIGFzeW5jXG4gICAqICAgLSBoZWFkZXJzOiBPcHRpb25hbCBoZWFkZXJzXG4gICAqICAgLSBjcm9zc0RvbWFpbjogdHJ1ZSBpZiBhIGNyb3NzIGRvbWFpbiByZXF1ZXN0LCBlbHNlIGZhbHNlXG4gICAqICAgLSBjcmVhdGVYSFI6IGEgZnVuY3Rpb24gdG8gb3ZlcnJpZGUgaWYgeW91IG5lZWQgdG8gdXNlIGFuIGFsdGVybmF0ZVxuICAgKiAgIFhNTEh0dHBSZXF1ZXN0IGltcGxlbWVudGF0aW9uLlxuICAgKiAgIC0gcmVzdWx0U2VsZWN0b3I6IGEgZnVuY3Rpb24gdG8gdXNlIHRvIGFsdGVyIHRoZSBvdXRwdXQgdmFsdWUgdHlwZSBvZlxuICAgKiAgIHRoZSBPYnNlcnZhYmxlLiBHZXRzIHtAbGluayBBamF4UmVzcG9uc2V9IGFzIGFuIGFyZ3VtZW50LlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIFhNTEh0dHBSZXF1ZXN0LlxuICAgKiBAc3RhdGljIHRydWVcbiAgICogQG5hbWUgYWpheFxuICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAqL1xuICBzdGF0aWMgX2NyZWF0ZV9zdHViKCk6IHZvaWQgeyByZXR1cm4gbnVsbDsgfVxuXG4gIHN0YXRpYyBjcmVhdGU6IEFqYXhDcmVhdGlvbk1ldGhvZCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlOiBhbnkgPSAodXJsT3JSZXF1ZXN0OiBzdHJpbmcgfCBBamF4UmVxdWVzdCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBBamF4T2JzZXJ2YWJsZSh1cmxPclJlcXVlc3QpO1xuICAgIH07XG5cbiAgICBjcmVhdGUuZ2V0ID0gYWpheEdldDtcbiAgICBjcmVhdGUucG9zdCA9IGFqYXhQb3N0O1xuICAgIGNyZWF0ZS5kZWxldGUgPSBhamF4RGVsZXRlO1xuICAgIGNyZWF0ZS5wdXQgPSBhamF4UHV0O1xuICAgIGNyZWF0ZS5nZXRKU09OID0gYWpheEdldEpTT047XG5cbiAgICByZXR1cm4gPEFqYXhDcmVhdGlvbk1ldGhvZD5jcmVhdGU7XG4gIH0pKCk7XG5cbiAgcHJpdmF0ZSByZXF1ZXN0OiBBamF4UmVxdWVzdDtcblxuICBjb25zdHJ1Y3Rvcih1cmxPclJlcXVlc3Q6IHN0cmluZyB8IEFqYXhSZXF1ZXN0KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IHJlcXVlc3Q6IEFqYXhSZXF1ZXN0ID0ge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBjcmVhdGVYSFI6IGNyZWF0ZVhIUkRlZmF1bHQsXG4gICAgICBjcm9zc0RvbWFpbjogZmFsc2UsXG4gICAgICBoZWFkZXJzOiB7fSxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgIHRpbWVvdXQ6IDBcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiB1cmxPclJlcXVlc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1ZXN0LnVybCA9IHVybE9yUmVxdWVzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBwcm9wIGluIHVybE9yUmVxdWVzdCkge1xuICAgICAgICBpZiAodXJsT3JSZXF1ZXN0Lmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgcmVxdWVzdFtwcm9wXSA9IHVybE9yUmVxdWVzdFtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgcmV0dXJuIG5ldyBBamF4U3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnJlcXVlc3QpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5leHBvcnQgY2xhc3MgQWpheFN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPEV2ZW50PiB7XG4gIHByaXZhdGUgeGhyOiBYTUxIdHRwUmVxdWVzdDtcbiAgcHJpdmF0ZSByZXN1bHRTZWxlY3RvcjogKHJlc3BvbnNlOiBBamF4UmVzcG9uc2UpID0+IFQ7XG4gIHByaXZhdGUgZG9uZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFQ+LCBwdWJsaWMgcmVxdWVzdDogQWpheFJlcXVlc3QpIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gcmVxdWVzdC5oZWFkZXJzID0gcmVxdWVzdC5oZWFkZXJzIHx8IHt9O1xuXG4gICAgLy8gZm9yY2UgQ09SUyBpZiByZXF1ZXN0ZWRcbiAgICBpZiAoIXJlcXVlc3QuY3Jvc3NEb21haW4gJiYgIWhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSkge1xuICAgICAgaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcbiAgICB9XG5cbiAgICAvLyBlbnN1cmUgY29udGVudCB0eXBlIGlzIHNldFxuICAgIGlmICghKCdDb250ZW50LVR5cGUnIGluIGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnO1xuICAgIH1cblxuICAgIC8vIHByb3Blcmx5IHNlcmlhbGl6ZSBib2R5XG4gICAgcmVxdWVzdC5ib2R5ID0gdGhpcy5zZXJpYWxpemVCb2R5KHJlcXVlc3QuYm9keSwgcmVxdWVzdC5oZWFkZXJzWydDb250ZW50LVR5cGUnXSk7XG5cbiAgICB0aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVxdWVzdC5yZXN1bHRTZWxlY3RvcjtcbiAgICB0aGlzLnNlbmQoKTtcbiAgfVxuXG4gIG5leHQoZTogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgIGNvbnN0IHsgcmVzdWx0U2VsZWN0b3IsIHhociwgcmVxdWVzdCwgZGVzdGluYXRpb24gfSA9IHRoaXM7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBuZXcgQWpheFJlc3BvbnNlKGUsIHhociwgcmVxdWVzdCk7XG5cbiAgICBpZiAocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRyeUNhdGNoKHJlc3VsdFNlbGVjdG9yKShyZXNwb25zZSk7XG4gICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iamVjdCkge1xuICAgICAgICB0aGlzLmVycm9yKGVycm9yT2JqZWN0LmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0aW5hdGlvbi5uZXh0KHJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlbmQoKTogWE1MSHR0cFJlcXVlc3Qge1xuICAgIGNvbnN0IHtcbiAgICAgIHJlcXVlc3QsXG4gICAgICByZXF1ZXN0OiB7IHVzZXIsIG1ldGhvZCwgdXJsLCBhc3luYywgcGFzc3dvcmQsIGhlYWRlcnMsIGJvZHkgfVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNyZWF0ZVhIUiA9IHJlcXVlc3QuY3JlYXRlWEhSO1xuICAgIGNvbnN0IHhocjogWE1MSHR0cFJlcXVlc3QgPSB0cnlDYXRjaChjcmVhdGVYSFIpLmNhbGwocmVxdWVzdCk7XG5cbiAgICBpZiAoPGFueT54aHIgPT09IGVycm9yT2JqZWN0KSB7XG4gICAgICB0aGlzLmVycm9yKGVycm9yT2JqZWN0LmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnhociA9IHhocjtcblxuICAgICAgLy8gb3BlbiBYSFIgZmlyc3RcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHJlc3VsdCA9IHRyeUNhdGNoKHhoci5vcGVuKS5jYWxsKHhociwgbWV0aG9kLCB1cmwsIGFzeW5jLCB1c2VyLCBwYXNzd29yZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB0cnlDYXRjaCh4aHIub3BlbikuY2FsbCh4aHIsIG1ldGhvZCwgdXJsLCBhc3luYyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZXJyb3IoZXJyb3JPYmplY3QuZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gdGltZW91dCBhbmQgcmVzcG9uc2VUeXBlIGNhbiBiZSBzZXQgb25jZSB0aGUgWEhSIGlzIG9wZW5cbiAgICAgIHhoci50aW1lb3V0ID0gcmVxdWVzdC50aW1lb3V0O1xuICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHJlcXVlc3QucmVzcG9uc2VUeXBlO1xuXG4gICAgICAvLyBzZXQgaGVhZGVyc1xuICAgICAgdGhpcy5zZXRIZWFkZXJzKHhociwgaGVhZGVycyk7XG5cbiAgICAgIC8vIG5vdyBzZXQgdXAgdGhlIGV2ZW50c1xuICAgICAgdGhpcy5zZXR1cEV2ZW50cyh4aHIsIHJlcXVlc3QpO1xuXG4gICAgICAvLyBmaW5hbGx5IHNlbmQgdGhlIHJlcXVlc3RcbiAgICAgIGlmIChib2R5KSB7XG4gICAgICAgIHhoci5zZW5kKGJvZHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZUJvZHkoYm9keTogYW55LCBjb250ZW50VHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKCFib2R5IHx8IHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfSBlbHNlIGlmIChyb290LkZvcm1EYXRhICYmIGJvZHkgaW5zdGFuY2VvZiByb290LkZvcm1EYXRhKSB7XG4gICAgICByZXR1cm4gYm9keTtcbiAgICB9XG5cbiAgICBjb25zdCBzcGxpdEluZGV4ID0gY29udGVudFR5cGUuaW5kZXhPZignOycpO1xuICAgIGlmIChzcGxpdEluZGV4ICE9PSAtMSkge1xuICAgICAgY29udGVudFR5cGUgPSBjb250ZW50VHlwZS5zdWJzdHJpbmcoMCwgc3BsaXRJbmRleCk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChjb250ZW50VHlwZSkge1xuICAgICAgY2FzZSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGJvZHkpLm1hcChrZXkgPT4gYCR7ZW5jb2RlVVJJKGtleSl9PSR7ZW5jb2RlVVJJKGJvZHlba2V5XSl9YCkuam9pbignJicpO1xuICAgICAgY2FzZSAnYXBwbGljYXRpb24vanNvbic6XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEhlYWRlcnMoeGhyOiBYTUxIdHRwUmVxdWVzdCwgaGVhZGVyczogT2JqZWN0KSB7XG4gICAgZm9yIChsZXQga2V5IGluIGhlYWRlcnMpIHtcbiAgICAgIGlmIChoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBoZWFkZXJzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBFdmVudHMoeGhyOiBYTUxIdHRwUmVxdWVzdCwgcmVxdWVzdDogQWpheFJlcXVlc3QpIHtcbiAgICBjb25zdCBwcm9ncmVzc1N1YnNjcmliZXIgPSByZXF1ZXN0LnByb2dyZXNzU3Vic2NyaWJlcjtcblxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiB4aHJUaW1lb3V0KGUpIHtcbiAgICAgIGNvbnN0IHtzdWJzY3JpYmVyLCBwcm9ncmVzc1N1YnNjcmliZXIsIHJlcXVlc3QgfSA9ICg8YW55PnhoclRpbWVvdXQpO1xuICAgICAgaWYgKHByb2dyZXNzU3Vic2NyaWJlcikge1xuICAgICAgICBwcm9ncmVzc1N1YnNjcmliZXIuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgICBzdWJzY3JpYmVyLmVycm9yKG5ldyBBamF4VGltZW91dEVycm9yKHRoaXMsIHJlcXVlc3QpKTsgLy9UT0RPOiBNYWtlIGJldHRlcmVyLlxuICAgIH07XG4gICAgKDxhbnk+eGhyLm9udGltZW91dCkucmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgKDxhbnk+eGhyLm9udGltZW91dCkuc3Vic2NyaWJlciA9IHRoaXM7XG4gICAgKDxhbnk+eGhyLm9udGltZW91dCkucHJvZ3Jlc3NTdWJzY3JpYmVyID0gcHJvZ3Jlc3NTdWJzY3JpYmVyO1xuXG4gICAgaWYgKHhoci51cGxvYWQgJiYgJ3dpdGhDcmVkZW50aWFscycgaW4geGhyICYmIHJvb3QuWERvbWFpblJlcXVlc3QpIHtcbiAgICAgIGlmIChwcm9ncmVzc1N1YnNjcmliZXIpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiB4aHJQcm9ncmVzcyhlKSB7XG4gICAgICAgICAgY29uc3QgeyBwcm9ncmVzc1N1YnNjcmliZXIgfSA9ICg8YW55PnhoclByb2dyZXNzKTtcbiAgICAgICAgICBwcm9ncmVzc1N1YnNjcmliZXIubmV4dChlKTtcbiAgICAgICAgfTtcbiAgICAgICAgKDxhbnk+eGhyLm9ucHJvZ3Jlc3MpLnByb2dyZXNzU3Vic2NyaWJlciA9IHByb2dyZXNzU3Vic2NyaWJlcjtcbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiB4aHJFcnJvcihlKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvZ3Jlc3NTdWJzY3JpYmVyLCBzdWJzY3JpYmVyLCByZXF1ZXN0IH0gPSAoPGFueT54aHJFcnJvcik7XG4gICAgICAgIGlmIChwcm9ncmVzc1N1YnNjcmliZXIpIHtcbiAgICAgICAgICBwcm9ncmVzc1N1YnNjcmliZXIuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlci5lcnJvcihuZXcgQWpheEVycm9yKCdhamF4IGVycm9yJywgdGhpcywgcmVxdWVzdCkpO1xuICAgICAgfTtcbiAgICAgICg8YW55Pnhoci5vbmVycm9yKS5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICAgICg8YW55Pnhoci5vbmVycm9yKS5zdWJzY3JpYmVyID0gdGhpcztcbiAgICAgICg8YW55Pnhoci5vbmVycm9yKS5wcm9ncmVzc1N1YnNjcmliZXIgPSBwcm9ncmVzc1N1YnNjcmliZXI7XG4gICAgfVxuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIHhoclJlYWR5U3RhdGVDaGFuZ2UoZSkge1xuICAgICAgY29uc3QgeyBzdWJzY3JpYmVyLCBwcm9ncmVzc1N1YnNjcmliZXIsIHJlcXVlc3QgfSA9ICg8YW55PnhoclJlYWR5U3RhdGVDaGFuZ2UpO1xuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAvLyBub3JtYWxpemUgSUU5IGJ1ZyAoaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTQ1MClcbiAgICAgICAgbGV0IHN0YXR1czogbnVtYmVyID0gdGhpcy5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB0aGlzLnN0YXR1cztcbiAgICAgICAgbGV0IHJlc3BvbnNlOiBhbnkgPSAodGhpcy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/ICAoXG4gICAgICAgICAgdGhpcy5yZXNwb25zZSB8fCB0aGlzLnJlc3BvbnNlVGV4dCkgOiB0aGlzLnJlc3BvbnNlKTtcblxuICAgICAgICAvLyBmaXggc3RhdHVzIGNvZGUgd2hlbiBpdCBpcyAwICgwIHN0YXR1cyBpcyB1bmRvY3VtZW50ZWQpLlxuICAgICAgICAvLyBPY2N1cnMgd2hlbiBhY2Nlc3NpbmcgZmlsZSByZXNvdXJjZXMgb3Igb24gQW5kcm9pZCA0LjEgc3RvY2sgYnJvd3NlclxuICAgICAgICAvLyB3aGlsZSByZXRyaWV2aW5nIGZpbGVzIGZyb20gYXBwbGljYXRpb24gY2FjaGUuXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDApIHtcbiAgICAgICAgICBzdGF0dXMgPSByZXNwb25zZSA/IDIwMCA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoMjAwIDw9IHN0YXR1cyAmJiBzdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICBpZiAocHJvZ3Jlc3NTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICBwcm9ncmVzc1N1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGUpO1xuICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocHJvZ3Jlc3NTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICBwcm9ncmVzc1N1YnNjcmliZXIuZXJyb3IoZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IobmV3IEFqYXhFcnJvcignYWpheCBlcnJvciAnICsgc3RhdHVzLCB0aGlzLCByZXF1ZXN0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgICg8YW55Pnhoci5vbnJlYWR5c3RhdGVjaGFuZ2UpLnN1YnNjcmliZXIgPSB0aGlzO1xuICAgICg8YW55Pnhoci5vbnJlYWR5c3RhdGVjaGFuZ2UpLnByb2dyZXNzU3Vic2NyaWJlciA9IHByb2dyZXNzU3Vic2NyaWJlcjtcbiAgICAoPGFueT54aHIub25yZWFkeXN0YXRlY2hhbmdlKS5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIGNvbnN0IHsgZG9uZSwgeGhyIH0gPSB0aGlzO1xuICAgIGlmICghZG9uZSAmJiB4aHIgJiYgeGhyLnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgIHhoci5hYm9ydCgpO1xuICAgIH1cbiAgICBzdXBlci51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cbi8qKlxuICogQSBub3JtYWxpemVkIEFKQVggcmVzcG9uc2UuXG4gKlxuICogQHNlZSB7QGxpbmsgYWpheH1cbiAqXG4gKiBAY2xhc3MgQWpheFJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBBamF4UmVzcG9uc2Uge1xuICAvKiogQHR5cGUge251bWJlcn0gVGhlIEhUVFAgc3RhdHVzIGNvZGUgKi9cbiAgc3RhdHVzOiBudW1iZXI7XG5cbiAgLyoqIEB0eXBlIHtzdHJpbmd8QXJyYXlCdWZmZXJ8RG9jdW1lbnR8b2JqZWN0fGFueX0gVGhlIHJlc3BvbnNlIGRhdGEgKi9cbiAgcmVzcG9uc2U6IGFueTtcblxuICAvKiogQHR5cGUge3N0cmluZ30gVGhlIHJhdyByZXNwb25zZVRleHQgKi9cbiAgcmVzcG9uc2VUZXh0OiBzdHJpbmc7XG5cbiAgLyoqIEB0eXBlIHtzdHJpbmd9IFRoZSByZXNwb25zZVR5cGUgKGUuZy4gJ2pzb24nLCAnYXJyYXlidWZmZXInLCBvciAneG1sJykgKi9cbiAgcmVzcG9uc2VUeXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9yaWdpbmFsRXZlbnQ6IEV2ZW50LCBwdWJsaWMgeGhyOiBYTUxIdHRwUmVxdWVzdCwgcHVibGljIHJlcXVlc3Q6IEFqYXhSZXF1ZXN0KSB7XG4gICAgdGhpcy5zdGF0dXMgPSB4aHIuc3RhdHVzO1xuICAgIHRoaXMucmVzcG9uc2VUeXBlID0geGhyLnJlc3BvbnNlVHlwZSB8fCByZXF1ZXN0LnJlc3BvbnNlVHlwZTtcblxuICAgIHN3aXRjaCAodGhpcy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICBpZiAoJ3Jlc3BvbnNlJyBpbiB4aHIpIHtcbiAgICAgICAgICAvL0lFIGRvZXMgbm90IHN1cHBvcnQganNvbiBhcyByZXNwb25zZVR5cGUsIHBhcnNlIGl0IGludGVybmFsbHlcbiAgICAgICAgICB0aGlzLnJlc3BvbnNlID0geGhyLnJlc3BvbnNlVHlwZSA/IHhoci5yZXNwb25zZSA6IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlIHx8IHhoci5yZXNwb25zZVRleHQgfHwgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQgfHwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneG1sJzpcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHhoci5yZXNwb25zZVhNTDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSAoJ3Jlc3BvbnNlJyBpbiB4aHIpID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQSBub3JtYWxpemVkIEFKQVggZXJyb3IuXG4gKlxuICogQHNlZSB7QGxpbmsgYWpheH1cbiAqXG4gKiBAY2xhc3MgQWpheEVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBamF4RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIC8qKiBAdHlwZSB7WE1MSHR0cFJlcXVlc3R9IFRoZSBYSFIgaW5zdGFuY2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBlcnJvciAqL1xuICB4aHI6IFhNTEh0dHBSZXF1ZXN0O1xuXG4gIC8qKiBAdHlwZSB7QWpheFJlcXVlc3R9IFRoZSBBamF4UmVxdWVzdCBhc3NvY2lhdGVkIHdpdGggdGhlIGVycm9yICovXG4gIHJlcXVlc3Q6IEFqYXhSZXF1ZXN0O1xuXG4gIC8qKiBAdHlwZSB7bnVtYmVyfSBUaGUgSFRUUCBzdGF0dXMgY29kZSAqL1xuICBzdGF0dXM6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHhocjogWE1MSHR0cFJlcXVlc3QsIHJlcXVlc3Q6IEFqYXhSZXF1ZXN0KSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnhociA9IHhocjtcbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICAgIHRoaXMuc3RhdHVzID0geGhyLnN0YXR1cztcbiAgfVxufVxuXG4vKipcbiAqIEBzZWUge0BsaW5rIGFqYXh9XG4gKlxuICogQGNsYXNzIEFqYXhUaW1lb3V0RXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFqYXhUaW1lb3V0RXJyb3IgZXh0ZW5kcyBBamF4RXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih4aHI6IFhNTEh0dHBSZXF1ZXN0LCByZXF1ZXN0OiBBamF4UmVxdWVzdCkge1xuICAgIHN1cGVyKCdhamF4IHRpbWVvdXQnLCB4aHIsIHJlcXVlc3QpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
