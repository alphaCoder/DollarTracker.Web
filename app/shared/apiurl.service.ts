import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrl {

    constructor() { }

    private baseUrl:string = "http://dev-dollartracker.azurewebsites.net";
    public loginUrl:string = this.baseUrl + "/api/login";
    public signupUrl:string = this.baseUrl + "/api/register";
    public dashboardStatsUrl:string = this.baseUrl + "/api/dashboardStats";
    public report:string = this.baseUrl + "/api/dashboard";
    public addOnlyExpense = this.baseUrl + "/api/addOnlyExpense";
    public addExpense = this.baseUrl + "/api/addExpense";
    public updateOnlyExpense = this.baseUrl + "/api/updateOnlyExpense";
    public updateExpense = this.baseUrl + "/api/updateExpense";

    public getAllExpenses = this.baseUrl + "/api/expense";
    public getAllExpensesByCategory = this.baseUrl +"/api/getAllExpensesByCategory";
    public expenseCategory = this.baseUrl + "/api/expenseCategory";
}