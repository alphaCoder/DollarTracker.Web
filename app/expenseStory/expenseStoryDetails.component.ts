import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ExpenseStoryService} from './expenseStory.service';
import {ExpenseService} from '../expense/expense.service';
import {Observable} from 'rxjs/Rx';
import {Expense} from '../expense/expense';
import {IconMapperService} from '../shared/iconmapper/iconmapper.service'
@Component({
    selector: 'selector',
    templateUrl: 'app/expenseStory/expenseStoryDetails.component.html',
    providers:[ExpenseStoryService]
})
export class ExpenseStoryDetailsComponent implements OnInit {
    constructor( private _route: ActivatedRoute,
                 private _router: Router, private _expenseStoryService:ExpenseStoryService,
                 private _iconMapper:IconMapperService) { }

    private sub: any;
    private expensesByCategory;
    private expenseStorySummary;
    private categoryKeys =[];
    public ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            let id = params['id']; // (+) converts string 'id' to a number
            this._expenseStoryService
            .getAllExpensesByCategory(id)
            .subscribe(es=>{
                this.expensesByCategory = es.data;
                this.categoryKeys = Object.keys(es.data);
            });

            //get expenseStorySummary TODO: need to optimize this call
            this._expenseStoryService
            .getExpenseStorySummary(id)
            .subscribe(es =>{
                this.expenseStorySummary = es.data;
            });

  	    });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}