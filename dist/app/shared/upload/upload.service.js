System.register(['@angular/core', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1;
    var UploadService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            //http://stackoverflow.com/questions/35985347/how-to-upload-file-in-angular2
            let UploadService = class UploadService {
                constructor() {
                    this.progress = Rx_1.Observable.create(observer => {
                        this.progressObserver = observer;
                    }).share();
                }
                makeFileRequest(url, params, files) {
                    return Rx_1.Observable.create(observer => {
                        let formData = new FormData(), xhr = new XMLHttpRequest();
                        for (let i = 0; i < files.length; i++) {
                            formData.append("FILE", files[i], files[i].name);
                        }
                        if (params.length >= 1) {
                            formData.append("DTD", params[0]);
                        }
                        xhr.onreadystatechange = () => {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    observer.next(JSON.parse(xhr.response));
                                    observer.complete();
                                }
                                else {
                                    observer.error(xhr.response);
                                }
                            }
                        };
                        xhr.upload.onprogress = (event) => {
                            this.progress = Math.round(event.loaded / event.total * 100);
                            this.progressObserver.next(this.progress);
                        };
                        xhr.open('POST', url, true);
                        xhr.send(formData);
                    });
                }
            };
            UploadService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], UploadService);
            exports_1("UploadService", UploadService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC91cGxvYWQvdXBsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSw0RUFBNEU7WUFFNUU7Z0JBR0k7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFVLENBQUMsTUFBTSxDQUFFLFFBQVE7d0JBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7b0JBQ3JDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNmLENBQUM7Z0JBQ0UsZUFBZSxDQUFFLEdBQVcsRUFBRSxNQUFnQixFQUFFLEtBQWE7b0JBQ2hFLE1BQU0sQ0FBQyxlQUFVLENBQUMsTUFBTSxDQUFDLFFBQVE7d0JBQzdCLElBQUksUUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLEVBQ25DLEdBQUcsR0FBbUIsSUFBSSxjQUFjLEVBQUUsQ0FBQzt3QkFFL0MsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQ3BDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3JELENBQUM7d0JBQ0QsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNwQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEMsQ0FBQzt3QkFFRCxHQUFHLENBQUMsa0JBQWtCLEdBQUc7NEJBQ3JCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDdkIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29DQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0NBQ3hDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQ0FDeEIsQ0FBQztnQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDSixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQ0FDakMsQ0FBQzs0QkFDTCxDQUFDO3dCQUNMLENBQUMsQ0FBQzt3QkFFRixHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUs7NEJBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7NEJBRTdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUM5QyxDQUFDLENBQUM7d0JBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN2QixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO1lBQ0gsQ0FBQztZQTFDRDtnQkFBQyxpQkFBVSxFQUFFOzs2QkFBQTtZQUNiLHlDQXlDQyxDQUFBIiwiZmlsZSI6InNoYXJlZC91cGxvYWQvdXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCdcclxuLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1OTg1MzQ3L2hvdy10by11cGxvYWQtZmlsZS1pbi1hbmd1bGFyMlxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVcGxvYWRTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBwcm9ncmVzcztcclxuICAgIHB1YmxpYyBwcm9ncmVzc09ic2VydmVyO1xyXG4gICAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBPYnNlcnZhYmxlLmNyZWF0ZSggb2JzZXJ2ZXIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzT2JzZXJ2ZXIgPSBvYnNlcnZlcjtcclxuICAgICAgICB9KS5zaGFyZSgpO1xyXG4gICAgfVxyXG5wdWJsaWMgbWFrZUZpbGVSZXF1ZXN0ICh1cmw6IHN0cmluZywgcGFyYW1zOiBzdHJpbmdbXSwgZmlsZXM6IEZpbGVbXSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICAgIGxldCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSxcclxuICAgICAgICAgICAgeGhyOiBYTUxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIkZJTEVcIiwgZmlsZXNbaV0sIGZpbGVzW2ldLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwYXJhbXMubGVuZ3RoID49IDEpIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiRFREXCIsIHBhcmFtc1swXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5yb3VuZChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCAqIDEwMCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzT2JzZXJ2ZXIubmV4dCh0aGlzLnByb2dyZXNzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
