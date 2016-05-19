System.register(['../Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1;
    var EmptyObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            EmptyObservable = (function (_super) {
                __extends(EmptyObservable, _super);
                function EmptyObservable(scheduler) {
                    _super.call(this);
                    this.scheduler = scheduler;
                }
                /**
                 * Creates an Observable that emits no items to the Observer and immediately
                 * emits a complete notification.
                 *
                 * <span class="informal">Just emits 'complete', and nothing else.
                 * </span>
                 *
                 * <img src="./img/empty.png" width="100%">
                 *
                 * This static operator is useful for creating a simple Observable that only
                 * emits the complete notification. It can be used for composing with other
                 * Observables, such as in a {@link mergeMap}.
                 *
                 * @example <caption>Emit the number 7, then complete.</caption>
                 * var result = Rx.Observable.empty().startWith(7);
                 * result.subscribe(x => console.log(x));
                 *
                 * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
                 * var interval = Rx.Observable.interval(1000);
                 * var result = interval.mergeMap(x =>
                 *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
                 * );
                 * result.subscribe(x => console.log(x));
                 *
                 * @see {@link create}
                 * @see {@link never}
                 * @see {@link of}
                 * @see {@link throw}
                 *
                 * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
                 * the emission of the complete notification.
                 * @return {Observable} An "empty" Observable: emits only the complete
                 * notification.
                 * @static true
                 * @name empty
                 * @owner Observable
                 */
                EmptyObservable.create = function (scheduler) {
                    return new EmptyObservable(scheduler);
                };
                EmptyObservable.dispatch = function (arg) {
                    var subscriber = arg.subscriber;
                    subscriber.complete();
                };
                EmptyObservable.prototype._subscribe = function (subscriber) {
                    var scheduler = this.scheduler;
                    if (scheduler) {
                        return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
                    }
                    else {
                        subscriber.complete();
                    }
                };
                return EmptyObservable;
            }(Observable_1.Observable));
            exports_1("EmptyObservable", EmptyObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvRW1wdHlPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTs7OztlQUlHO1lBQ0g7Z0JBQXdDLG1DQUFhO2dCQWdEbkQseUJBQW9CLFNBQXFCO29CQUN2QyxpQkFBTyxDQUFDO29CQURVLGNBQVMsR0FBVCxTQUFTLENBQVk7Z0JBRXpDLENBQUM7Z0JBaEREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBb0NHO2dCQUNJLHNCQUFNLEdBQWIsVUFBaUIsU0FBcUI7b0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBSSxTQUFTLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkFFTSx3QkFBUSxHQUFmLFVBQW1CLEdBQW1CO29CQUM1QiwrQkFBVSxDQUFTO29CQUMzQixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBTVMsb0NBQVUsR0FBcEIsVUFBcUIsVUFBeUI7b0JBRTVDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBRWpDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ2QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxZQUFBLFVBQVUsRUFBRSxDQUFDLENBQUM7b0JBQ3pFLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN4QixDQUFDO2dCQUNILENBQUM7Z0JBQ0gsc0JBQUM7WUFBRCxDQTlEQSxBQThEQyxDQTlEdUMsdUJBQVUsR0E4RGpEO1lBOURELDZDQThEQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvRW1wdHlPYnNlcnZhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7VGVhcmRvd25Mb2dpY30gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBEaXNwYXRjaEFyZzxUPiB7XG4gIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD47XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG5leHBvcnQgY2xhc3MgRW1wdHlPYnNlcnZhYmxlPFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG5vIGl0ZW1zIHRvIHRoZSBPYnNlcnZlciBhbmQgaW1tZWRpYXRlbHlcbiAgICogZW1pdHMgYSBjb21wbGV0ZSBub3RpZmljYXRpb24uXG4gICAqXG4gICAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5KdXN0IGVtaXRzICdjb21wbGV0ZScsIGFuZCBub3RoaW5nIGVsc2UuXG4gICAqIDwvc3Bhbj5cbiAgICpcbiAgICogPGltZyBzcmM9XCIuL2ltZy9lbXB0eS5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICpcbiAgICogVGhpcyBzdGF0aWMgb3BlcmF0b3IgaXMgdXNlZnVsIGZvciBjcmVhdGluZyBhIHNpbXBsZSBPYnNlcnZhYmxlIHRoYXQgb25seVxuICAgKiBlbWl0cyB0aGUgY29tcGxldGUgbm90aWZpY2F0aW9uLiBJdCBjYW4gYmUgdXNlZCBmb3IgY29tcG9zaW5nIHdpdGggb3RoZXJcbiAgICogT2JzZXJ2YWJsZXMsIHN1Y2ggYXMgaW4gYSB7QGxpbmsgbWVyZ2VNYXB9LlxuICAgKlxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FbWl0IHRoZSBudW1iZXIgNywgdGhlbiBjb21wbGV0ZS48L2NhcHRpb24+XG4gICAqIHZhciByZXN1bHQgPSBSeC5PYnNlcnZhYmxlLmVtcHR5KCkuc3RhcnRXaXRoKDcpO1xuICAgKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICAgKlxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5NYXAgYW5kIGZsYXR0ZW4gb25seSBvZGQgbnVtYmVycyB0byB0aGUgc2VxdWVuY2UgJ2EnLCAnYicsICdjJzwvY2FwdGlvbj5cbiAgICogdmFyIGludGVydmFsID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKTtcbiAgICogdmFyIHJlc3VsdCA9IGludGVydmFsLm1lcmdlTWFwKHggPT5cbiAgICogICB4ICUgMiA9PT0gMSA/IFJ4Lk9ic2VydmFibGUub2YoJ2EnLCAnYicsICdjJykgOiBSeC5PYnNlcnZhYmxlLmVtcHR5KClcbiAgICogKTtcbiAgICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICpcbiAgICogQHNlZSB7QGxpbmsgY3JlYXRlfVxuICAgKiBAc2VlIHtAbGluayBuZXZlcn1cbiAgICogQHNlZSB7QGxpbmsgb2Z9XG4gICAqIEBzZWUge0BsaW5rIHRocm93fVxuICAgKlxuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gQSB7QGxpbmsgU2NoZWR1bGVyfSB0byB1c2UgZm9yIHNjaGVkdWxpbmdcbiAgICogdGhlIGVtaXNzaW9uIG9mIHRoZSBjb21wbGV0ZSBub3RpZmljYXRpb24uXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIFwiZW1wdHlcIiBPYnNlcnZhYmxlOiBlbWl0cyBvbmx5IHRoZSBjb21wbGV0ZVxuICAgKiBub3RpZmljYXRpb24uXG4gICAqIEBzdGF0aWMgdHJ1ZVxuICAgKiBAbmFtZSBlbXB0eVxuICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTxUPihzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gbmV3IEVtcHR5T2JzZXJ2YWJsZTxUPihzY2hlZHVsZXIpO1xuICB9XG5cbiAgc3RhdGljIGRpc3BhdGNoPFQ+KGFyZzogRGlzcGF0Y2hBcmc8VD4pIHtcbiAgICBjb25zdCB7IHN1YnNjcmliZXIgfSA9IGFyZztcbiAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjaGVkdWxlcj86IFNjaGVkdWxlcikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogVGVhcmRvd25Mb2dpYyB7XG5cbiAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcblxuICAgIGlmIChzY2hlZHVsZXIpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoRW1wdHlPYnNlcnZhYmxlLmRpc3BhdGNoLCAwLCB7IHN1YnNjcmliZXIgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
