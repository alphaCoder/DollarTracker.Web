import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {DeleteExpenseStoryModalComponent} from './deleteExpenseStory.modal.component'
@Component({
    selector: 'delete-expense-story',
    template: `
            <div class="btn-group pull-right">
               <a class="btn btn-default btn-xs" (click)="open()">
                   <i class="fa fa-trash"></i>
               </a>
           </div>
            <delete-expense-story-modal #deleteesmodal></delete-expense-story-modal>
        `,
    directives:[DeleteExpenseStoryModalComponent]    
})
export class DeleteExpenseStoryComponent implements OnInit {
    constructor() { }
    @Input('storyId') storyId:string='';
    @ViewChild('deleteesmodal')
    deleteesmodal: DeleteExpenseStoryModalComponent;
    ngOnInit() { }

    open() {
        console.log("DELETE EXPENSE STORY ID", this.storyId);
        this.deleteesmodal.open(this.storyId);
    }
}