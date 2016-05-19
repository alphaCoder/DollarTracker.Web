System.register(['./Subject', './scheduler/queue', './operator/observeOn'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1, queue_1, observeOn_1;
    var ReplaySubject, ReplayEvent;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (queue_1_1) {
                queue_1 = queue_1_1;
            },
            function (observeOn_1_1) {
                observeOn_1 = observeOn_1_1;
            }],
        execute: function() {
            /**
             * @class ReplaySubject<T>
             */
            ReplaySubject = (function (_super) {
                __extends(ReplaySubject, _super);
                function ReplaySubject(bufferSize, windowTime, scheduler) {
                    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
                    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
                    _super.call(this);
                    this.events = [];
                    this.scheduler = scheduler;
                    this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
                    this._windowTime = windowTime < 1 ? 1 : windowTime;
                }
                ReplaySubject.prototype._next = function (value) {
                    var now = this._getNow();
                    this.events.push(new ReplayEvent(now, value));
                    this._trimBufferThenGetEvents(now);
                    _super.prototype._next.call(this, value);
                };
                ReplaySubject.prototype._subscribe = function (subscriber) {
                    var events = this._trimBufferThenGetEvents(this._getNow());
                    var scheduler = this.scheduler;
                    if (scheduler) {
                        subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
                    }
                    var index = -1;
                    var len = events.length;
                    while (++index < len && !subscriber.isUnsubscribed) {
                        subscriber.next(events[index].value);
                    }
                    return _super.prototype._subscribe.call(this, subscriber);
                };
                ReplaySubject.prototype._getNow = function () {
                    return (this.scheduler || queue_1.queue).now();
                };
                ReplaySubject.prototype._trimBufferThenGetEvents = function (now) {
                    var bufferSize = this.bufferSize;
                    var _windowTime = this._windowTime;
                    var events = this.events;
                    var eventsCount = events.length;
                    var spliceCount = 0;
                    // Trim events that fall out of the time window.
                    // Start at the front of the list. Break early once
                    // we encounter an event that falls within the window.
                    while (spliceCount < eventsCount) {
                        if ((now - events[spliceCount].time) < _windowTime) {
                            break;
                        }
                        spliceCount += 1;
                    }
                    if (eventsCount > bufferSize) {
                        spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
                    }
                    if (spliceCount > 0) {
                        events.splice(0, spliceCount);
                    }
                    return events;
                };
                return ReplaySubject;
            }(Subject_1.Subject));
            exports_1("ReplaySubject", ReplaySubject);
            ReplayEvent = (function () {
                function ReplayEvent(time, value) {
                    this.time = time;
                    this.value = value;
                }
                return ReplayEvent;
            }());
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL1JlcGxheVN1YmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BOztlQUVHO1lBQ0g7Z0JBQXNDLGlDQUFVO2dCQU05Qyx1QkFBWSxVQUE2QyxFQUM3QyxVQUE2QyxFQUM3QyxTQUFxQjtvQkFGckIsMEJBQTZDLEdBQTdDLGFBQXFCLE1BQU0sQ0FBQyxpQkFBaUI7b0JBQzdDLDBCQUE2QyxHQUE3QyxhQUFxQixNQUFNLENBQUMsaUJBQWlCO29CQUV2RCxpQkFBTyxDQUFDO29CQVJGLFdBQU0sR0FBcUIsRUFBRSxDQUFDO29CQVNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUM7b0JBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUNyRCxDQUFDO2dCQUVTLDZCQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNuQyxnQkFBSyxDQUFDLEtBQUssWUFBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsQ0FBQztnQkFFUyxrQ0FBVSxHQUFwQixVQUFxQixVQUF5QjtvQkFDNUMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUM3RCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUVqQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNkLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksK0JBQW1CLENBQUksVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pGLENBQUM7b0JBRUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDMUIsT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ25ELFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxDQUFDO29CQUNELE1BQU0sQ0FBQyxnQkFBSyxDQUFDLFVBQVUsWUFBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFFTywrQkFBTyxHQUFmO29CQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksYUFBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRU8sZ0RBQXdCLEdBQWhDLFVBQWlDLEdBQVc7b0JBQzFDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ25DLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ3JDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBRTNCLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2hDLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFFcEIsZ0RBQWdEO29CQUNoRCxtREFBbUQ7b0JBQ25ELHNEQUFzRDtvQkFDdEQsT0FBTyxXQUFXLEdBQUcsV0FBVyxFQUFFLENBQUM7d0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDOzRCQUNuRCxLQUFLLENBQUM7d0JBQ1IsQ0FBQzt3QkFDRCxXQUFXLElBQUksQ0FBQyxDQUFDO29CQUNuQixDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDO29CQUNoRSxDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDaEMsQ0FBQztvQkFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNoQixDQUFDO2dCQUNILG9CQUFDO1lBQUQsQ0F0RUEsQUFzRUMsQ0F0RXFDLGlCQUFPLEdBc0U1QztZQXRFRCx5Q0FzRUMsQ0FBQTtZQUVEO2dCQUNFLHFCQUFtQixJQUFZLEVBQVMsS0FBUTtvQkFBN0IsU0FBSSxHQUFKLElBQUksQ0FBUTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFHO2dCQUNoRCxDQUFDO2dCQUNILGtCQUFDO1lBQUQsQ0FIQSxBQUdDLElBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvUmVwbGF5U3ViamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3ViamVjdH0gZnJvbSAnLi9TdWJqZWN0JztcbmltcG9ydCB7U2NoZWR1bGVyfSBmcm9tICcuL1NjaGVkdWxlcic7XG5pbXBvcnQge3F1ZXVlfSBmcm9tICcuL3NjaGVkdWxlci9xdWV1ZSc7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQge1RlYXJkb3duTG9naWN9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7T2JzZXJ2ZU9uU3Vic2NyaWJlcn0gZnJvbSAnLi9vcGVyYXRvci9vYnNlcnZlT24nO1xuXG4vKipcbiAqIEBjbGFzcyBSZXBsYXlTdWJqZWN0PFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBsYXlTdWJqZWN0PFQ+IGV4dGVuZHMgU3ViamVjdDxUPiB7XG4gIHByaXZhdGUgZXZlbnRzOiBSZXBsYXlFdmVudDxUPltdID0gW107XG4gIHByaXZhdGUgc2NoZWR1bGVyOiBTY2hlZHVsZXI7XG4gIHByaXZhdGUgYnVmZmVyU2l6ZTogbnVtYmVyO1xuICBwcml2YXRlIF93aW5kb3dUaW1lOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoYnVmZmVyU2l6ZTogbnVtYmVyID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgICAgICAgICAgICB3aW5kb3dUaW1lOiBudW1iZXIgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG4gICAgICAgICAgICAgIHNjaGVkdWxlcj86IFNjaGVkdWxlcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgdGhpcy5idWZmZXJTaXplID0gYnVmZmVyU2l6ZSA8IDEgPyAxIDogYnVmZmVyU2l6ZTtcbiAgICB0aGlzLl93aW5kb3dUaW1lID0gd2luZG93VGltZSA8IDEgPyAxIDogd2luZG93VGltZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIGNvbnN0IG5vdyA9IHRoaXMuX2dldE5vdygpO1xuICAgIHRoaXMuZXZlbnRzLnB1c2gobmV3IFJlcGxheUV2ZW50KG5vdywgdmFsdWUpKTtcbiAgICB0aGlzLl90cmltQnVmZmVyVGhlbkdldEV2ZW50cyhub3cpO1xuICAgIHN1cGVyLl9uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICBjb25zdCBldmVudHMgPSB0aGlzLl90cmltQnVmZmVyVGhlbkdldEV2ZW50cyh0aGlzLl9nZXROb3coKSk7XG4gICAgY29uc3Qgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG5cbiAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICBzdWJzY3JpYmVyLmFkZChzdWJzY3JpYmVyID0gbmV3IE9ic2VydmVPblN1YnNjcmliZXI8VD4oc3Vic2NyaWJlciwgc2NoZWR1bGVyKSk7XG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgY29uc3QgbGVuID0gZXZlbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbiAmJiAhc3Vic2NyaWJlci5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgc3Vic2NyaWJlci5uZXh0KGV2ZW50c1tpbmRleF0udmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuX3N1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldE5vdygpOiBudW1iZXIge1xuICAgIHJldHVybiAodGhpcy5zY2hlZHVsZXIgfHwgcXVldWUpLm5vdygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHJpbUJ1ZmZlclRoZW5HZXRFdmVudHMobm93OiBudW1iZXIpOiBSZXBsYXlFdmVudDxUPltdIHtcbiAgICBjb25zdCBidWZmZXJTaXplID0gdGhpcy5idWZmZXJTaXplO1xuICAgIGNvbnN0IF93aW5kb3dUaW1lID0gdGhpcy5fd2luZG93VGltZTtcbiAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50cztcblxuICAgIGxldCBldmVudHNDb3VudCA9IGV2ZW50cy5sZW5ndGg7XG4gICAgbGV0IHNwbGljZUNvdW50ID0gMDtcblxuICAgIC8vIFRyaW0gZXZlbnRzIHRoYXQgZmFsbCBvdXQgb2YgdGhlIHRpbWUgd2luZG93LlxuICAgIC8vIFN0YXJ0IGF0IHRoZSBmcm9udCBvZiB0aGUgbGlzdC4gQnJlYWsgZWFybHkgb25jZVxuICAgIC8vIHdlIGVuY291bnRlciBhbiBldmVudCB0aGF0IGZhbGxzIHdpdGhpbiB0aGUgd2luZG93LlxuICAgIHdoaWxlIChzcGxpY2VDb3VudCA8IGV2ZW50c0NvdW50KSB7XG4gICAgICBpZiAoKG5vdyAtIGV2ZW50c1tzcGxpY2VDb3VudF0udGltZSkgPCBfd2luZG93VGltZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHNwbGljZUNvdW50ICs9IDE7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50c0NvdW50ID4gYnVmZmVyU2l6ZSkge1xuICAgICAgc3BsaWNlQ291bnQgPSBNYXRoLm1heChzcGxpY2VDb3VudCwgZXZlbnRzQ291bnQgLSBidWZmZXJTaXplKTtcbiAgICB9XG5cbiAgICBpZiAoc3BsaWNlQ291bnQgPiAwKSB7XG4gICAgICBldmVudHMuc3BsaWNlKDAsIHNwbGljZUNvdW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXZlbnRzO1xuICB9XG59XG5cbmNsYXNzIFJlcGxheUV2ZW50PFQ+IHtcbiAgY29uc3RydWN0b3IocHVibGljIHRpbWU6IG51bWJlciwgcHVibGljIHZhbHVlOiBUKSB7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
