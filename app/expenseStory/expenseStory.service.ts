import { Injectable } from '@angular/core';
import {Observable,BehaviorSubject} from 'rxjs/Rx';
import {Expense} from '../expense/expense';
import {ApiUrl} from '../shared/apiurl.service';
import {ApiService} from '../shared/api/api.service';
import {Http, Response} from '@angular/http';
import {ExpenseStory, ExpenseStorySummary} from './expenseStory.model';
import {UserService} from '../user/user.service';
@Injectable()
export class ExpenseStoryService {

    public expenseCategoryById = {};
    public expenseCategories = [];
    public expenseStorySummaries:BehaviorSubject<Array<ExpenseStorySummary>> = new BehaviorSubject<Array<ExpenseStorySummary>>(null) ;
    constructor(private _apiUrl:ApiUrl, private _apiService:ApiService, private _userService:UserService) {
        this.loadExpenseCategories();
        this.loadExpenseStorySummaries();
        _userService
            .currentUser
            .filter(x=>x==null)
            .subscribe(x=>{
                this.expenseCategoryById = null;
                this.expenseCategories = [];
                this.expenseStorySummaries.next([]);
            })
    }
    public addExpenseStory(expenseStory:ExpenseStory): Observable<any>
    {
        return this._apiService
        .post(this._apiUrl.addExpenseStory, expenseStory)
        .map(x=>{
            let val = this.expenseStorySummaries.getValue();
            let arr = val.concat(x.data);
            arr = arr.sort((es1, es2)=>{
                if(es1.expenseStory.createdUtcDt > es2.expenseStory.createdUtcDt) return -1;
                if(es1.expenseStory.createdUtcDt < es2.expenseStory.createdUtcDt) return 1;
                return 0;
            })
            this.expenseStorySummaries.next(arr);
        });
    }
    public getAllExpenses(storyId): Observable<any>
    {
        var url = this._apiUrl.getAllExpenses + '/' + storyId;
        return this._apiService.get(url);
    }
    public getAllExpensesByCategory(storyId) : Observable<any>
    {
        var url = this._apiUrl.getAllExpensesByCategory + '/' + storyId;
        return this._apiService.get(url);
    }

    public getExpenseStorySummary(storyId) : Observable<any>
    {
        var url = this._apiUrl.expenseStorySummary + '/' + storyId;
        return this._apiService.get(url);
    }

    public deleteExpenseStory(storyId) {
        var url = this._apiUrl.deleteExpenseStory + '/' + storyId;
        this._apiService
        .delete(url)
        .subscribe(x=>{
            this.loadExpenseStorySummaries()
        });
    }

    public loadExpenseStorySummaries() {
        this._apiService
        .get(this._apiUrl.report)
        .subscribe((rs) => {
            this.expenseStorySummaries.next(rs.data.expenseStorySummaries);
        })
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private loadExpenseCategories(){
        this._apiService
        .get(this._apiUrl.expenseCategory)
        .subscribe(ec=>{
            this.expenseCategories = ec;
            this.buildExpenseCategoriesById();
        })
    }
    private buildExpenseCategoriesById() {
        
        var len = this.expenseCategories.length;
        var categoriesById = {};
        for (var i = 0; i < len; i++) {
            categoriesById[this.expenseCategories[i].expenseSubCategoryId] = this.expenseCategories[i]; //re-visit
        }
        this.expenseCategoryById = categoriesById;
    }
}