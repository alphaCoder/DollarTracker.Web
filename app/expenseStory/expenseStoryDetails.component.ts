import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import {ExpenseStoryService} from './expenseStory.service';
import {ExpenseService} from '../expense/expense.service';
import {Observable} from 'rxjs/Rx';
import {Expense} from '../expense/expense';
import {IconMapperService} from '../shared/iconmapper/iconmapper.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
import {DeleteExpenseDirective} from '../expense/deleteExpense.directive';
import {ExpenseModalComponent} from '../expense/expense.modal.component';
import {PubnubService} from '../shared/notifications/pubnub.service'
@Component({
    templateUrl: 'app/expenseStory/expenseStoryDetails.component.html',
    directives: [ROUTER_DIRECTIVES, DeleteExpenseDirective, ExpenseModalComponent],
    providers:[PubnubService]
})
export class ExpenseStoryDetailsComponent implements OnInit {
    constructor( private _route: ActivatedRoute,
                 private _router: Router, private _expenseStoryService:ExpenseStoryService,
                 private _iconMapper:IconMapperService, private _slimLoader:SlimLoadingBarService,
                 private _pubnubService:PubnubService
                 ) { }

    private sub: any;
    private expensesByCategory;
    private expenseStorySummary;
    private categoryKeys =[];
     @ViewChild('expense')
    expenseModal:ExpenseModalComponent;
    public ngOnInit() {
        this._route.params.subscribe(params => {
            let id = params['id']; // (+) converts string 'id' to a number
            this._slimLoader.start();
            this._expenseStoryService
            .getAllExpensesByCategory(id)
            .subscribe(es => {
                this.expensesByCategory = es.data;
                this.categoryKeys = Object.keys(es.data);
            });

            //get expenseStorySummary TODO: need to optimize this call
            this._expenseStoryService
            .getExpenseStorySummary(id)
            .subscribe(es =>{
                this.expenseStorySummary = es.data;
                 this._slimLoader.complete();
            });

  	    });
    }

    onNotify(expense:Expense):void {
        let exl = this.expensesByCategory[expense.expenseCategoryId.toLowerCase()];
        if(exl){
            var idx = exl.indexOf(expense);
            this.expensesByCategory[expense.expenseCategoryId.toLowerCase()].splice(idx,1);
        }
    }

    onEditNotify(expense:Expense):void{
        alert("In edit notify");
    }

    edit(expense){
       // alert("YOU CLICKED EDIT");
        this.expenseModal.edit(expense);
    }
}