/**
Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
*/
System.register(['./root'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1;
    var ImmediateDefinition, Immediate;
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            }],
        execute: function() {
            ImmediateDefinition = (function () {
                function ImmediateDefinition(root) {
                    this.root = root;
                    if (root.setImmediate && typeof root.setImmediate === 'function') {
                        this.setImmediate = root.setImmediate.bind(root);
                        this.clearImmediate = root.clearImmediate.bind(root);
                    }
                    else {
                        this.nextHandle = 1;
                        this.tasksByHandle = {};
                        this.currentlyRunningATask = false;
                        // Don't get fooled by e.g. browserify environments.
                        if (this.canUseProcessNextTick()) {
                            // For Node.js before 0.9
                            this.setImmediate = this.createProcessNextTickSetImmediate();
                        }
                        else if (this.canUsePostMessage()) {
                            // For non-IE10 modern browsers
                            this.setImmediate = this.createPostMessageSetImmediate();
                        }
                        else if (this.canUseMessageChannel()) {
                            // For web workers, where supported
                            this.setImmediate = this.createMessageChannelSetImmediate();
                        }
                        else if (this.canUseReadyStateChange()) {
                            // For IE 6–8
                            this.setImmediate = this.createReadyStateChangeSetImmediate();
                        }
                        else {
                            // For older browsers
                            this.setImmediate = this.createSetTimeoutSetImmediate();
                        }
                        var ci = function clearImmediate(handle) {
                            delete clearImmediate.instance.tasksByHandle[handle];
                        };
                        ci.instance = this;
                        this.clearImmediate = ci;
                    }
                }
                ImmediateDefinition.prototype.identify = function (o) {
                    return this.root.Object.prototype.toString.call(o);
                };
                ImmediateDefinition.prototype.canUseProcessNextTick = function () {
                    return this.identify(this.root.process) === '[object process]';
                };
                ImmediateDefinition.prototype.canUseMessageChannel = function () {
                    return Boolean(this.root.MessageChannel);
                };
                ImmediateDefinition.prototype.canUseReadyStateChange = function () {
                    var document = this.root.document;
                    return Boolean(document && 'onreadystatechange' in document.createElement('script'));
                };
                ImmediateDefinition.prototype.canUsePostMessage = function () {
                    var root = this.root;
                    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
                    // where `root.postMessage` means something completely different and can't be used for this purpose.
                    if (root.postMessage && !root.importScripts) {
                        var postMessageIsAsynchronous_1 = true;
                        var oldOnMessage = root.onmessage;
                        root.onmessage = function () {
                            postMessageIsAsynchronous_1 = false;
                        };
                        root.postMessage('', '*');
                        root.onmessage = oldOnMessage;
                        return postMessageIsAsynchronous_1;
                    }
                    return false;
                };
                // This function accepts the same arguments as setImmediate, but
                // returns a function that requires no arguments.
                ImmediateDefinition.prototype.partiallyApplied = function (handler) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    var fn = function result() {
                        var _a = result, handler = _a.handler, args = _a.args;
                        if (typeof handler === 'function') {
                            handler.apply(undefined, args);
                        }
                        else {
                            (new Function('' + handler))();
                        }
                    };
                    fn.handler = handler;
                    fn.args = args;
                    return fn;
                };
                ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
                    this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
                    return this.nextHandle++;
                };
                ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
                    var fn = function setImmediate() {
                        var instance = setImmediate.instance;
                        var handle = instance.addFromSetImmediateArguments(arguments);
                        instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
                        return handle;
                    };
                    fn.instance = this;
                    return fn;
                };
                ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
                    // Installs an event handler on `global` for the `message` event: see
                    // * https://developer.mozilla.org/en/DOM/window.postMessage
                    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
                    var root = this.root;
                    var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
                    var onGlobalMessage = function globalMessageHandler(event) {
                        var instance = globalMessageHandler.instance;
                        if (event.source === root &&
                            typeof event.data === 'string' &&
                            event.data.indexOf(messagePrefix) === 0) {
                            instance.runIfPresent(+event.data.slice(messagePrefix.length));
                        }
                    };
                    onGlobalMessage.instance = this;
                    root.addEventListener('message', onGlobalMessage, false);
                    var fn = function setImmediate() {
                        var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
                        var handle = instance.addFromSetImmediateArguments(arguments);
                        instance.root.postMessage(messagePrefix + handle, '*');
                        return handle;
                    };
                    fn.instance = this;
                    fn.messagePrefix = messagePrefix;
                    return fn;
                };
                ImmediateDefinition.prototype.runIfPresent = function (handle) {
                    // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
                    // So if we're currently running a task, we'll need to delay this invocation.
                    if (this.currentlyRunningATask) {
                        // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                        // 'too much recursion' error.
                        this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
                    }
                    else {
                        var task = this.tasksByHandle[handle];
                        if (task) {
                            this.currentlyRunningATask = true;
                            try {
                                task();
                            }
                            finally {
                                this.clearImmediate(handle);
                                this.currentlyRunningATask = false;
                            }
                        }
                    }
                };
                ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
                    var _this = this;
                    var channel = new this.root.MessageChannel();
                    channel.port1.onmessage = function (event) {
                        var handle = event.data;
                        _this.runIfPresent(handle);
                    };
                    var fn = function setImmediate() {
                        var _a = setImmediate, channel = _a.channel, instance = _a.instance;
                        var handle = instance.addFromSetImmediateArguments(arguments);
                        channel.port2.postMessage(handle);
                        return handle;
                    };
                    fn.channel = channel;
                    fn.instance = this;
                    return fn;
                };
                ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
                    var fn = function setImmediate() {
                        var instance = setImmediate.instance;
                        var root = instance.root;
                        var doc = root.document;
                        var html = doc.documentElement;
                        var handle = instance.addFromSetImmediateArguments(arguments);
                        // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                        // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                        var script = doc.createElement('script');
                        script.onreadystatechange = function () {
                            instance.runIfPresent(handle);
                            script.onreadystatechange = null;
                            html.removeChild(script);
                            script = null;
                        };
                        html.appendChild(script);
                        return handle;
                    };
                    fn.instance = this;
                    return fn;
                };
                ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
                    var fn = function setImmediate() {
                        var instance = setImmediate.instance;
                        var handle = instance.addFromSetImmediateArguments(arguments);
                        instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
                        return handle;
                    };
                    fn.instance = this;
                    return fn;
                };
                return ImmediateDefinition;
            }());
            exports_1("ImmediateDefinition", ImmediateDefinition);
            exports_1("Immediate", Immediate = new ImmediateDefinition(root_1.root));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3V0aWwvSW1tZWRpYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFOzs7Ozs2QkEyT1csU0FBUzs7Ozs7OztZQXZPdEI7Z0JBZUUsNkJBQW9CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDakUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkQsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7d0JBRW5DLG9EQUFvRDt3QkFDcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUNqQyx5QkFBeUI7NEJBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLENBQUM7d0JBQy9ELENBQUM7d0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDcEMsK0JBQStCOzRCQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO3dCQUMzRCxDQUFDO3dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUs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RyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBRTFCLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ1osQ0FBQztnQkFFRCwwREFBNEIsR0FBNUI7b0JBQ0UsSUFBSSxFQUFFLEdBQUc7d0JBQ1AsSUFBTSxRQUFRLEdBQVMsWUFBYSxDQUFDLFFBQVEsQ0FBQzt3QkFDOUMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLDRCQUE0QixDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUM5RCxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdEYsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDaEIsQ0FBQyxDQUFDO29CQUVJLEVBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUUxQixNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNaLENBQUM7Z0JBQ0gsMEJBQUM7WUFBRCxDQXRPQSxBQXNPQyxJQUFBO1lBdE9ELHFEQXNPQyxDQUFBO1lBQ1ksdUJBQUEsU0FBUyxHQUFHLElBQUksbUJBQW1CLENBQUMsV0FBSSxDQUFDLENBQUEsQ0FBQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy91dGlsL0ltbWVkaWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuU29tZSBjcmVkaXQgZm9yIHRoaXMgaGVscGVyIGdvZXMgdG8gaHR0cDovL2dpdGh1Yi5jb20vWXV6dUpTL3NldEltbWVkaWF0ZVxuKi9cblxuaW1wb3J0IHsgcm9vdCB9IGZyb20gJy4vcm9vdCc7XG5cbmV4cG9ydCBjbGFzcyBJbW1lZGlhdGVEZWZpbml0aW9uIHtcbiAgc2V0SW1tZWRpYXRlOiAoY2I6ICgpID0+IHZvaWQpID0+IG51bWJlcjtcblxuICBjbGVhckltbWVkaWF0ZTogKGhhbmRsZTogbnVtYmVyKSA9PiB2b2lkO1xuXG4gIHByaXZhdGUgaWRlbnRpZnkobzogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yb290Lk9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbiAgfVxuXG4gIHRhc2tzQnlIYW5kbGU6IGFueTtcblxuICBuZXh0SGFuZGxlOiBudW1iZXI7XG5cbiAgY3VycmVudGx5UnVubmluZ0FUYXNrOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vdDogYW55KSB7XG4gICAgaWYgKHJvb3Quc2V0SW1tZWRpYXRlICYmIHR5cGVvZiByb290LnNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5zZXRJbW1lZGlhdGUgPSByb290LnNldEltbWVkaWF0ZS5iaW5kKHJvb3QpO1xuICAgICAgdGhpcy5jbGVhckltbWVkaWF0ZSA9IHJvb3QuY2xlYXJJbW1lZGlhdGUuYmluZChyb290KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZXh0SGFuZGxlID0gMTtcbiAgICAgIHRoaXMudGFza3NCeUhhbmRsZSA9IHt9O1xuICAgICAgdGhpcy5jdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcblxuICAgICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgICAgaWYgKHRoaXMuY2FuVXNlUHJvY2Vzc05leHRUaWNrKCkpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICB0aGlzLnNldEltbWVkaWF0ZSA9IHRoaXMuY3JlYXRlUHJvY2Vzc05leHRUaWNrU2V0SW1tZWRpYXRlKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIHRoaXMuc2V0SW1tZWRpYXRlID0gdGhpcy5jcmVhdGVQb3N0TWVzc2FnZVNldEltbWVkaWF0ZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNhblVzZU1lc3NhZ2VDaGFubmVsKCkpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgdGhpcy5zZXRJbW1lZGlhdGUgPSB0aGlzLmNyZWF0ZU1lc3NhZ2VDaGFubmVsU2V0SW1tZWRpYXRlKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2FuVXNlUmVhZHlTdGF0ZUNoYW5nZSgpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICB0aGlzLnNldEltbWVkaWF0ZSA9IHRoaXMuY3JlYXRlUmVhZHlTdGF0ZUNoYW5nZVNldEltbWVkaWF0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIHRoaXMuc2V0SW1tZWRpYXRlID0gdGhpcy5jcmVhdGVTZXRUaW1lb3V0U2V0SW1tZWRpYXRlKCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBjaSA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZTogYW55KSB7XG4gICAgICAgIGRlbGV0ZSAoPGFueT5jbGVhckltbWVkaWF0ZSkuaW5zdGFuY2UudGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgfTtcblxuICAgICAgKDxhbnk+Y2kpLmluc3RhbmNlID0gdGhpcztcblxuICAgICAgdGhpcy5jbGVhckltbWVkaWF0ZSA9IGNpO1xuICAgIH1cbiAgfVxuXG4gIGNhblVzZVByb2Nlc3NOZXh0VGljaygpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmeSh0aGlzLnJvb3QucHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcbiAgfVxuXG4gIGNhblVzZU1lc3NhZ2VDaGFubmVsKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMucm9vdC5NZXNzYWdlQ2hhbm5lbCk7XG4gIH1cblxuICBjYW5Vc2VSZWFkeVN0YXRlQ2hhbmdlKCkge1xuICAgIGNvbnN0IGRvY3VtZW50ID0gdGhpcy5yb290LmRvY3VtZW50O1xuICAgIHJldHVybiBCb29sZWFuKGRvY3VtZW50ICYmICdvbnJlYWR5c3RhdGVjaGFuZ2UnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKTtcbiAgfVxuXG4gIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLnJvb3Q7XG4gICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgIC8vIHdoZXJlIGByb290LnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICBpZiAocm9vdC5wb3N0TWVzc2FnZSAmJiAhcm9vdC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICBsZXQgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICBsZXQgb2xkT25NZXNzYWdlID0gcm9vdC5vbm1lc3NhZ2U7XG4gICAgICByb290Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICB9O1xuICAgICAgcm9vdC5wb3N0TWVzc2FnZSgnJywgJyonKTtcbiAgICAgIHJvb3Qub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBhY2NlcHRzIHRoZSBzYW1lIGFyZ3VtZW50cyBhcyBzZXRJbW1lZGlhdGUsIGJ1dFxuICAvLyByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCByZXF1aXJlcyBubyBhcmd1bWVudHMuXG4gIHBhcnRpYWxseUFwcGxpZWQoaGFuZGxlcjogYW55LCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIGxldCBmbiA9IGZ1bmN0aW9uIHJlc3VsdCAoKSB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGFyZ3MgfSA9IDxhbnk+cmVzdWx0O1xuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChuZXcgRnVuY3Rpb24oJycgKyBoYW5kbGVyKSkoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgKDxhbnk+Zm4pLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICg8YW55PmZuKS5hcmdzID0gYXJncztcblxuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJnczogYW55W10pIHtcbiAgICB0aGlzLnRhc2tzQnlIYW5kbGVbdGhpcy5uZXh0SGFuZGxlXSA9IHRoaXMucGFydGlhbGx5QXBwbGllZC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIHJldHVybiB0aGlzLm5leHRIYW5kbGUrKztcbiAgfVxuXG4gIGNyZWF0ZVByb2Nlc3NOZXh0VGlja1NldEltbWVkaWF0ZSgpIHtcbiAgICBsZXQgZm4gPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoKSB7XG4gICAgICBjb25zdCB7IGluc3RhbmNlIH0gPSAoPGFueT5zZXRJbW1lZGlhdGUpO1xuICAgICAgbGV0IGhhbmRsZSA9IGluc3RhbmNlLmFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgIGluc3RhbmNlLnJvb3QucHJvY2Vzcy5uZXh0VGljayhpbnN0YW5jZS5wYXJ0aWFsbHlBcHBsaWVkKGluc3RhbmNlLnJ1bklmUHJlc2VudCwgaGFuZGxlKSk7XG4gICAgICByZXR1cm4gaGFuZGxlO1xuICAgIH07XG5cbiAgICAoPGFueT5mbikuaW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgY3JlYXRlUG9zdE1lc3NhZ2VTZXRJbW1lZGlhdGUoKSB7XG4gICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLnJvb3Q7XG5cbiAgICBsZXQgbWVzc2FnZVByZWZpeCA9ICdzZXRJbW1lZGlhdGUkJyArIHJvb3QuTWF0aC5yYW5kb20oKSArICckJztcbiAgICBsZXQgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24gZ2xvYmFsTWVzc2FnZUhhbmRsZXIoZXZlbnQ6IGFueSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSAoPGFueT5nbG9iYWxNZXNzYWdlSGFuZGxlcikuaW5zdGFuY2U7XG4gICAgICBpZiAoZXZlbnQuc291cmNlID09PSByb290ICYmXG4gICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSAnc3RyaW5nJyAmJlxuICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgaW5zdGFuY2UucnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICAoPGFueT5vbkdsb2JhbE1lc3NhZ2UpLmluc3RhbmNlID0gdGhpcztcblxuICAgIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuXG4gICAgbGV0IGZuID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKCkge1xuICAgICAgY29uc3QgeyBtZXNzYWdlUHJlZml4LCBpbnN0YW5jZSB9ID0gKDxhbnk+c2V0SW1tZWRpYXRlKTtcbiAgICAgIGxldCBoYW5kbGUgPSBpbnN0YW5jZS5hZGRGcm9tU2V0SW1tZWRpYXRlQXJndW1lbnRzKGFyZ3VtZW50cyk7XG4gICAgICBpbnN0YW5jZS5yb290LnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsICcqJyk7XG4gICAgICByZXR1cm4gaGFuZGxlO1xuICAgIH07XG5cbiAgICAoPGFueT5mbikuaW5zdGFuY2UgPSB0aGlzO1xuICAgICg8YW55PmZuKS5tZXNzYWdlUHJlZml4ID0gbWVzc2FnZVByZWZpeDtcblxuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIHJ1bklmUHJlc2VudChoYW5kbGU6IGFueSkge1xuICAgIC8vIEZyb20gdGhlIHNwZWM6ICdXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC4nXG4gICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICBpZiAodGhpcy5jdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAvLyAndG9vIG11Y2ggcmVjdXJzaW9uJyBlcnJvci5cbiAgICAgIHRoaXMucm9vdC5zZXRUaW1lb3V0KHRoaXMucGFydGlhbGx5QXBwbGllZCh0aGlzLnJ1bklmUHJlc2VudCwgaGFuZGxlKSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0YXNrID0gdGhpcy50YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICBpZiAodGFzaykge1xuICAgICAgICB0aGlzLmN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGFzaygpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRoaXMuY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlTWVzc2FnZUNoYW5uZWxTZXRJbW1lZGlhdGUoKSB7XG4gICAgbGV0IGNoYW5uZWwgPSBuZXcgdGhpcy5yb290Lk1lc3NhZ2VDaGFubmVsKCk7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgbGV0IGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICB0aGlzLnJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgIH07XG5cbiAgICBsZXQgZm4gPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoKSB7XG4gICAgICBjb25zdCB7IGNoYW5uZWwsIGluc3RhbmNlIH0gPSAoPGFueT5zZXRJbW1lZGlhdGUpO1xuICAgICAgbGV0IGhhbmRsZSA9IGluc3RhbmNlLmFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgfTtcblxuICAgICg8YW55PmZuKS5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAoPGFueT5mbikuaW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgY3JlYXRlUmVhZHlTdGF0ZUNoYW5nZVNldEltbWVkaWF0ZSgpIHtcbiAgICBsZXQgZm4gPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9ICg8YW55PnNldEltbWVkaWF0ZSkuaW5zdGFuY2U7XG4gICAgICBjb25zdCByb290ID0gaW5zdGFuY2Uucm9vdDtcbiAgICAgIGNvbnN0IGRvYyA9IHJvb3QuZG9jdW1lbnQ7XG4gICAgICBjb25zdCBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgbGV0IGhhbmRsZSA9IGluc3RhbmNlLmFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgIGxldCBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpbnN0YW5jZS5ydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgIH07XG4gICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICByZXR1cm4gaGFuZGxlO1xuICAgIH07XG5cbiAgICAoPGFueT5mbikuaW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgY3JlYXRlU2V0VGltZW91dFNldEltbWVkaWF0ZSgpIHtcbiAgICBsZXQgZm4gPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9ICg8YW55PnNldEltbWVkaWF0ZSkuaW5zdGFuY2U7XG4gICAgICBsZXQgaGFuZGxlID0gaW5zdGFuY2UuYWRkRnJvbVNldEltbWVkaWF0ZUFyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgICAgaW5zdGFuY2Uucm9vdC5zZXRUaW1lb3V0KGluc3RhbmNlLnBhcnRpYWxseUFwcGxpZWQoaW5zdGFuY2UucnVuSWZQcmVzZW50LCBoYW5kbGUpLCAwKTtcbiAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgfTtcblxuICAgICg8YW55PmZuKS5pbnN0YW5jZSA9IHRoaXM7XG5cbiAgICByZXR1cm4gZm47XG4gIH1cbn1cbmV4cG9ydCBjb25zdCBJbW1lZGlhdGUgPSBuZXcgSW1tZWRpYXRlRGVmaW5pdGlvbihyb290KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
