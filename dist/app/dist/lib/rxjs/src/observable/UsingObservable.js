System.register(['../Observable', '../util/subscribeToResult', '../OuterSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, subscribeToResult_1, OuterSubscriber_1;
    var UsingObservable, UsingSubscriber;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            UsingObservable = (function (_super) {
                __extends(UsingObservable, _super);
                function UsingObservable(resourceFactory, observableFactory) {
                    _super.call(this);
                    this.resourceFactory = resourceFactory;
                    this.observableFactory = observableFactory;
                }
                UsingObservable.create = function (resourceFactory, observableFactory) {
                    return new UsingObservable(resourceFactory, observableFactory);
                };
                UsingObservable.prototype._subscribe = function (subscriber) {
                    var _a = this, resourceFactory = _a.resourceFactory, observableFactory = _a.observableFactory;
                    var resource;
                    try {
                        resource = resourceFactory();
                        return new UsingSubscriber(subscriber, resource, observableFactory);
                    }
                    catch (err) {
                        subscriber.error(err);
                    }
                };
                return UsingObservable;
            }(Observable_1.Observable));
            exports_1("UsingObservable", UsingObservable);
            UsingSubscriber = (function (_super) {
                __extends(UsingSubscriber, _super);
                function UsingSubscriber(destination, resource, observableFactory) {
                    _super.call(this, destination);
                    this.resource = resource;
                    this.observableFactory = observableFactory;
                    destination.add(resource);
                    this.tryUse();
                }
                UsingSubscriber.prototype.tryUse = function () {
                    try {
                        var source = this.observableFactory.call(this, this.resource);
                        if (source) {
                            this.add(subscribeToResult_1.subscribeToResult(this, source));
                        }
                    }
                    catch (err) {
                        this._error(err);
                    }
                };
                return UsingSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvVXNpbmdPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTs7OztlQUlHO1lBQ0g7Z0JBQXdDLG1DQUFhO2dCQU9uRCx5QkFBb0IsZUFBbUQsRUFDbkQsaUJBQXVGO29CQUN6RyxpQkFBTyxDQUFDO29CQUZVLG9CQUFlLEdBQWYsZUFBZSxDQUFvQztvQkFDbkQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFzRTtnQkFFM0csQ0FBQztnQkFSTSxzQkFBTSxHQUFiLFVBQWlCLGVBQW1ELEVBQ25ELGlCQUF1RjtvQkFDdEcsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFJLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNwRSxDQUFDO2dCQU9TLG9DQUFVLEdBQXBCLFVBQXFCLFVBQXlCO29CQUM1QyxJQUFBLFNBQW1ELEVBQTNDLG9DQUFlLEVBQUUsd0NBQWlCLENBQVU7b0JBRXBELElBQUksUUFBK0IsQ0FBQztvQkFFcEMsSUFBSSxDQUFDO3dCQUNILFFBQVEsR0FBMEIsZUFBZSxFQUFFLENBQUM7d0JBQ3BELE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7b0JBQ3RFLENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDYixVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixDQUFDO2dCQUNILENBQUM7Z0JBQ0gsc0JBQUM7WUFBRCxDQXhCQSxBQXdCQyxDQXhCdUMsdUJBQVUsR0F3QmpEO1lBeEJELDZDQXdCQyxDQUFBO1lBRUQ7Z0JBQWlDLG1DQUFxQjtnQkFDcEQseUJBQVksV0FBMEIsRUFDbEIsUUFBK0IsRUFDL0IsaUJBQXVGO29CQUN6RyxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFGRCxhQUFRLEdBQVIsUUFBUSxDQUF1QjtvQkFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFzRTtvQkFFekcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNoQixDQUFDO2dCQUVPLGdDQUFNLEdBQWQ7b0JBQ0UsSUFBSSxDQUFDO3dCQUNILElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDaEUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLHFDQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUM1QyxDQUFDO29CQUNILENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNuQixDQUFDO2dCQUNILENBQUM7Z0JBQ0gsc0JBQUM7WUFBRCxDQW5CQSxBQW1CQyxDQW5CZ0MsaUNBQWUsR0FtQi9DIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvVXNpbmdPYnNlcnZhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpYmFibGVPclByb21pc2V9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7QW5vbnltb3VzU3Vic2NyaXB0aW9uLCBUZWFyZG93bkxvZ2ljfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuXG5pbXBvcnQge3N1YnNjcmliZVRvUmVzdWx0fSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcbmltcG9ydCB7T3V0ZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKiBAaGlkZSB0cnVlXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2luZ09ic2VydmFibGU8VD4gZXh0ZW5kcyBPYnNlcnZhYmxlPFQ+IHtcblxuICBzdGF0aWMgY3JlYXRlPFQ+KHJlc291cmNlRmFjdG9yeTogKCkgPT4gQW5vbnltb3VzU3Vic2NyaXB0aW9uIHwgdm9pZCxcbiAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlRmFjdG9yeTogKHJlc291cmNlOiBBbm9ueW1vdXNTdWJzY3JpcHRpb24pID0+IFN1YnNjcmliYWJsZU9yUHJvbWlzZTxUPiB8IHZvaWQpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFVzaW5nT2JzZXJ2YWJsZTxUPihyZXNvdXJjZUZhY3RvcnksIG9ic2VydmFibGVGYWN0b3J5KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb3VyY2VGYWN0b3J5OiAoKSA9PiBBbm9ueW1vdXNTdWJzY3JpcHRpb24gfCB2b2lkLFxuICAgICAgICAgICAgICBwcml2YXRlIG9ic2VydmFibGVGYWN0b3J5OiAocmVzb3VyY2U6IEFub255bW91c1N1YnNjcmlwdGlvbikgPT4gU3Vic2NyaWJhYmxlT3JQcm9taXNlPFQ+IHwgdm9pZCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgY29uc3QgeyByZXNvdXJjZUZhY3RvcnksIG9ic2VydmFibGVGYWN0b3J5IH0gPSB0aGlzO1xuXG4gICAgbGV0IHJlc291cmNlOiBBbm9ueW1vdXNTdWJzY3JpcHRpb247XG5cbiAgICB0cnkge1xuICAgICAgcmVzb3VyY2UgPSA8QW5vbnltb3VzU3Vic2NyaXB0aW9uPnJlc291cmNlRmFjdG9yeSgpO1xuICAgICAgcmV0dXJuIG5ldyBVc2luZ1N1YnNjcmliZXIoc3Vic2NyaWJlciwgcmVzb3VyY2UsIG9ic2VydmFibGVGYWN0b3J5KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgVXNpbmdTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgT3V0ZXJTdWJzY3JpYmVyPFQsIFQ+IHtcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8VD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVzb3VyY2U6IEFub255bW91c1N1YnNjcmlwdGlvbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBvYnNlcnZhYmxlRmFjdG9yeTogKHJlc291cmNlOiBBbm9ueW1vdXNTdWJzY3JpcHRpb24pID0+IFN1YnNjcmliYWJsZU9yUHJvbWlzZTxUPiB8IHZvaWQpIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gICAgZGVzdGluYXRpb24uYWRkKHJlc291cmNlKTtcbiAgICB0aGlzLnRyeVVzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlVc2UoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMub2JzZXJ2YWJsZUZhY3RvcnkuY2FsbCh0aGlzLCB0aGlzLnJlc291cmNlKTtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgdGhpcy5hZGQoc3Vic2NyaWJlVG9SZXN1bHQodGhpcywgc291cmNlKSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
