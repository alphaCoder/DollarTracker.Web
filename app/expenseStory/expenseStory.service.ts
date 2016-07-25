import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Expense} from '../expense/expense';
import {ApiUrl} from '../shared/apiurl.service';
import {ApiService} from '../shared/api/api.service';
import {Http, Response} from '@angular/http';
@Injectable()
export class ExpenseStoryService {

    public expenseCategoryById = {};
    public expenseCategories = [];

    constructor(private _apiUrl:ApiUrl, private _apiService:ApiService) {
        this.loadExpenseCategories();
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