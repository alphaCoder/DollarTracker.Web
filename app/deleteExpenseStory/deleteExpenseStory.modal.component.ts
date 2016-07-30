import { Component, OnInit, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {ExpenseStoryService} from '../expenseStory/expenseStory.service';
@Component({
    selector: 'delete-expense-story-modal',
    templateUrl: 'app/deleteExpenseStory/deleteExpenseStory.modal.component.html',
    directives:[MODAL_DIRECTIVES]
})
export class DeleteExpenseStoryModalComponent {
    constructor(private _expenseStoryService:ExpenseStoryService) { }

    @ViewChild('esdeletemodal')
    esdeletemodal: ModalComponent;
    private expenseStoryId = null;
    delete(storyId){
        this._expenseStoryService.deleteExpenseStory(storyId);
    }
    dismissed() {
        this.esdeletemodal.dismiss();
    }

    open(storyId) {
        this.expenseStoryId = storyId;
        this.esdeletemodal.open('sm');
    }
    cancel() {
        this.esdeletemodal.dismiss();
    }

    submit() {
        if(this.expenseStoryId) {
            this._expenseStoryService.deleteExpenseStory(this.expenseStoryId);
        }
        this.esdeletemodal.dismiss();
    }
}