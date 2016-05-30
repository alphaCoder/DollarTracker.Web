System.register(['@angular/core', 'ng2-bs3-modal/ng2-bs3-modal'], function(exports_1, context_1) {
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
    var core_1, ng2_bs3_modal_1;
    var ExpenseModalComponent, Person;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            }],
        execute: function() {
            let ExpenseModalComponent = class ExpenseModalComponent {
                constructor() {
                    this.items = ['item1', 'item2', 'item3'];
                    this.model = new Person();
                    this.index = 0;
                    this.backdropOptions = [true, false, 'static'];
                    this.animation = true;
                    this.keyboard = true;
                    this.backdrop = true;
                }
                closed() {
                    this.output = '(closed) ' + this.selected;
                }
                dismissed() {
                    this.output = '(dismissed)';
                }
                opened() {
                    this.output = '(opened)';
                }
                navigate() {
                }
                open() {
                    this.modal.open();
                }
            };
            __decorate([
                core_1.ViewChild('modal'), 
                __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
            ], ExpenseModalComponent.prototype, "modal", void 0);
            ExpenseModalComponent = __decorate([
                core_1.Component({
                    selector: 'expense',
                    templateUrl: 'app/expense/expense.modal.component.html',
                    directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], ExpenseModalComponent);
            exports_1("ExpenseModalComponent", ExpenseModalComponent);
            class Person {
            }
            exports_1("Person", Person);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFDSTtvQkFHQSxVQUFLLEdBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUc5QyxVQUFLLEdBQVcsSUFBSSxNQUFNLEVBQUUsQ0FBQztvQkFFN0IsVUFBSyxHQUFXLENBQUMsQ0FBQztvQkFDbEIsb0JBQWUsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBRTFDLGNBQVMsR0FBWSxJQUFJLENBQUM7b0JBQzFCLGFBQVEsR0FBWSxJQUFJLENBQUM7b0JBQ3pCLGFBQVEsR0FBcUIsSUFBSSxDQUFDO2dCQWJsQixDQUFDO2dCQWdCakIsTUFBTTtvQkFDRixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM5QyxDQUFDO2dCQUVELFNBQVM7b0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQsTUFBTTtvQkFDRixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCxRQUFRO2dCQUVSLENBQUM7Z0JBRUQsSUFBSTtvQkFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixDQUFDO1lBQ0wsQ0FBQztZQWxDQTtnQkFBQyxnQkFBUyxDQUFDLE9BQU8sQ0FBQzs7Z0VBQUE7WUFQcEI7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsV0FBVyxFQUFFLDBDQUEwQztvQkFDdkQsVUFBVSxFQUFDLENBQUMsZ0NBQWdCLENBQUM7aUJBQ2hDLENBQUM7O3FDQUFBO1lBQ0YseURBb0NDLENBQUE7WUFDRDtZQUdBLENBQUM7WUFIRCwyQkFHQyxDQUFBIiwiZmlsZSI6ImV4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1PREFMX0RJUkVDVElWRVMsIE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnbmcyLWJzMy1tb2RhbC9uZzItYnMzLW1vZGFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdleHBlbnNlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2V4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltNT0RBTF9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZU1vZGFsQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuIEBWaWV3Q2hpbGQoJ21vZGFsJylcclxuICAgIG1vZGFsOiBNb2RhbENvbXBvbmVudDtcclxuICAgIGl0ZW1zOiBzdHJpbmdbXSA9IFsnaXRlbTEnLCAnaXRlbTInLCAnaXRlbTMnXTtcclxuICAgIHNlbGVjdGVkOiBzdHJpbmc7XHJcbiAgICBvdXRwdXQ6IHN0cmluZztcclxuICAgIG1vZGVsOiBQZXJzb24gPSBuZXcgUGVyc29uKCk7XHJcblxyXG4gICAgaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBiYWNrZHJvcE9wdGlvbnMgPSBbdHJ1ZSwgZmFsc2UsICdzdGF0aWMnXTtcclxuXHJcbiAgICBhbmltYXRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgYmFja2Ryb3A6IHN0cmluZyB8IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuXHJcbiAgICBjbG9zZWQoKSB7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSAnKGNsb3NlZCkgJyArIHRoaXMuc2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbWlzc2VkKCkge1xyXG4gICAgICAgIHRoaXMub3V0cHV0ID0gJyhkaXNtaXNzZWQpJztcclxuICAgIH1cclxuXHJcbiAgICBvcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSAnKG9wZW5lZCknO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdmlnYXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwub3BlbigpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBQZXJzb24ge1xyXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
