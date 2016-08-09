import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {DatePicker} from '../shared/datepicker/datepicker.component';
import {Expense} from './expense'
import {SelectComponent, SELECT_DIRECTIVES} from 'ng2-select/ng2-select';
import {ExpenseCategoriesService} from './expenseCategories.service';
import {IconMapperService} from '../shared/iconmapper/iconmapper.service';
import {Observable} from 'rxjs/Rx';
import {ExpenseService} from './expense.service';
import {DtAlertComponent} from '../shared/alert/dtalert.component';

@Component({
    selector: 'expense',
    templateUrl: 'app/expense/expense.modal.component.html',
    directives:[MODAL_DIRECTIVES,DatePicker, SELECT_DIRECTIVES, DtAlertComponent]
})
export class ExpenseModalComponent{
    private items:Array<any> = [];
    dtAlert:DtAlertComponent;
    @Output() notify: EventEmitter<Expense> = new EventEmitter<Expense>();
    
    @ViewChild('modal')
    modal: ModalComponent;
    
    @ViewChild('datepickerInput') datepickerInput:DatePicker;
    expense : Expense;
    @ViewChild(SelectComponent) categorySelect:SelectComponent;

    private selectedItem;
    private isEdit = false;
    constructor(private _expenseCategoriesService:ExpenseCategoriesService, 
    private _iconMapper:IconMapperService,
    private _expenseService:ExpenseService)
    {
         this.dtAlert = new DtAlertComponent();
         this.expense = new Expense();
     }
    private selectedCategory = null;
    public ngOnInit():any {
        this._expenseCategoriesService.categories.forEach(
            (category) =>{
                this.items.push({
                    id: category.expenseSubCategoryId,
                    text: `${category.description}`              
                });
            });
    }

    public categoryIcon:string ='fa fa-list';
  
    public files:Array<any>;
    previewImageUrl:string='';
    onChange(event) {
        console.log('onChange');
        
        this.files = event.srcElement.files;
        console.log(this.files);
        this.readThumbnail(event);
    }
    
    private file= null;
    //src: http://raydaq.com/example-preview-and-auto-resize-images-for-uploading-angular2-typescript/
    private readThumbnail(event) {
         var img = document.createElement("img");
         this.file = window.URL.createObjectURL(event.srcElement.files[0]);
            img.src = window.URL.createObjectURL(event.srcElement.files[0]);
          var reader: any, target: EventTarget;
             reader = new FileReader();

            // Add an event listener to deal with the file when the reader is complete
            reader.addEventListener("load", (event1) => {
                // Get the event.target.result from the reader (base64 of the image)
                img.src = event1.target.result;

                // Resize the image
                var resized_img = this.resize(img,500,200);

                // Push the img src (base64 string) into our array that we display in our html template
               this.previewImageUrl = resized_img
            }, false);

            reader.readAsDataURL(event.srcElement.files[0]);    
    }
    private resize (img, MAX_WIDTH:number = 900, MAX_HEIGHT:number = 900){
        var canvas = document.createElement("canvas");

        console.log("Size Before: " + img.src.length + " bytes");

        var width = img.width;
        var height = img.height;

        if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }
        } else {
            if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
            }
        }
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");

        ctx.drawImage(img, 0, 0, width, height);

        var dataUrl = canvas.toDataURL('image/png');  
        // IMPORTANT: 'jpeg' NOT 'jpg'
        console.log("Size After:  " + dataUrl.length  + " bytes");
        return dataUrl
    }
    closed() {
        this.modal.close();
    }

    dismissed() {
        this.reset();
        this.modal.dismiss();
    }

    reset() {
        this.isEdit = false;
        this.expense = new Expense();
        this.previewImageUrl = null;
        this.categorySelect.remove(this.selectedItem);
        this.categoryIcon = 'fa fa-list';
        this.selectedCategory = null;
        this.files = null;
        this.datepickerInput.reset(); //TODO: replace this temporary solution
        this.dtAlert = new DtAlertComponent();
    }
    open(storyId) {
        this.selectedCategory = {};
        this.expense.expenseStoryId = storyId;
        this.modal.open('sm');
    }
    edit(expense){
        this.isEdit = true;
        this.expense = expense;
        console.log("EXPENSE");
        console.log(JSON.stringify(this.expense));
        if(this.expense.receiptThumbnail) {
            this.previewImageUrl = "data:image/png;base64,"+ this.expense.receiptThumbnail;
        }
        this.selectedCategory = this.items.find(x=>x.id == this.expense.expenseSubCategoryId);
        this.datepickerInput.updateDate (this.expense.expenseUtcDt);
        this.modal.open('sm')
    }

    submit() {
        
        if(!this.validate()) return;

        var fn;   
        if(this.files && this.files.length > 0) {
            if(this.isEdit){
               fn = this._expenseService.updateExpense(this.expense, this.files);   
            }
            else{
                fn = this._expenseService.addExpense(this.expense, this.files);
            }
        }
        else {
            if(this.isEdit) {
                fn = this._expenseService.updateOnlyExpense(this.expense);
            }
            else {
                fn = this._expenseService.addOnlyExpense(this.expense);
            }
        }
        
        fn.subscribe((response) => {
            if(response.success) {
                this.notify.emit(<Expense>response.data);
             }
            },
            error=>{},
            completed => {this.isEdit = false;}
          );
    }
   
    validate():boolean {
        let isValid = false;
       if(this.expense.expenseSubCategoryId == null) {
            this.dtAlert.failure("Please select a valid expense category");
        }
        else if(this.expense.amount == null || this.expense.amount <=0) {
            this.dtAlert.failure("Please enter a valid amount");
        }
        else if(this.expense.expenseUtcDt == null) {
            this.dtAlert.failure("Please select a valid expense date");
        }
        else {
            isValid = true;
        }
       return isValid;
   }
    cancel() {
        this.modal.dismiss();
        this.isEdit = false;
    }

    onNotify(message:string):void {
        this.expense.expenseUtcDt = message;
  }

  // ng2-select
  public selected(value:any):void {
      var category = this._expenseCategoriesService.categories.find(x=>x.expenseSubCategoryId == value.id);
      this.selectedItem = category;
      if(category){
          console.log('Expense categories');
          console.log(category);
          this.expense.expenseCategoryId = category.expenseCategoryId;
      }
      this.expense.expenseSubCategoryId = value.id;
      this.categoryIcon='fa fa-list';
      if(this._iconMapper.mapper[value.id]) {
          this.categoryIcon = this._iconMapper.mapper[value.id];
      }
 }
}
