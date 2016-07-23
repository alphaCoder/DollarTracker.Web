import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {DatePicker} from '../shared/datepicker/datepicker.component';
import {Expense} from './expense'
import {SELECT_DIRECTIVES} from 'ng2-select/ng2-select';
import {ExpenseCategoriesService} from './expenseCategories.service';
import {IconMapperService} from '../shared/iconmapper/iconmapper.service';
import {Observable} from 'rxjs/Rx';
import {ExpenseService} from './expense.service';

@Component({
    selector: 'expense',
    templateUrl: 'app/expense/expense.modal.component.html',
    directives:[MODAL_DIRECTIVES,DatePicker, SELECT_DIRECTIVES]
})
export class ExpenseModalComponent{
    private items:Array<any> = [];
    
    @Output() notify: EventEmitter<Expense> = new EventEmitter<Expense>();
    
    @ViewChild('modal')
    modal: ModalComponent;
    
    @ViewChild('datepickerInput') datepickerInput;
    expense : Expense;

    constructor(private _expenseCategoriesService:ExpenseCategoriesService, private _iconMapper:IconMapperService,
    private _expenseService:ExpenseService)
     {
         this.expense = new Expense();
     }
   
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
    //src: http://raydaq.com/example-preview-and-auto-resize-images-for-uploading-angular2-typescript/
    private readThumbnail(event) {
         var img = document.createElement("img");
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

        var dataUrl = canvas.toDataURL('image/jpeg');  
        // IMPORTANT: 'jpeg' NOT 'jpg'
        console.log("Size After:  " + dataUrl.length  + " bytes");
        return dataUrl
    }
    closed() {
        this.modal.close();
    }

    dismissed() {
        console.log("I am in dismissed expense");
        
      //  this.expense.expenseUtcDt = this.datepicker.value;
        console.log("date selected is: "+ this.expense.expenseUtcDt);
        if(this.expense) {
            console.log("Expense::");
            console.log(JSON.stringify(this.expense));
        }
        this.expense = new Expense();
        this.datepickerInput.reset(); //TODO: replace this temporary solution
        this.modal.dismiss();
    }

    open(storyId) {
        console.log("YOU CLICKED OPEN::"+storyId);
        
        this.expense.expenseStoryId = storyId;
        this.modal.open('sm');
    }
    submit() {
        var fn;   
        if(this.files && this.files.length > 0) {
            fn = this._expenseService.addExpense(this.expense, this.files);
        }
        else {
            fn = this._expenseService.addOnlyExpense(this.expense);
        }
        
        fn.subscribe((response)=>{
            if(response.success) {
                this.notify.emit(<Expense>response.data);
            }
        });
    }
   
    cancel() {
        this.modal.dismiss();
    }

    onNotify(message:string):void {
        this.expense.expenseUtcDt = message;
  }

  // ng2-select
  public selected(value:any):void {
      var category = this._expenseCategoriesService.categories.find(x=>x.expenseSubCategoryId == value.id);
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
