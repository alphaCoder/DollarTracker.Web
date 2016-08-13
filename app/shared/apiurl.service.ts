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
    public deleteExpense = this.baseUrl + "/api/Expense";

    public getAllExpenses = this.baseUrl + "/api/expense";
    public getAllExpensesByCategory = this.baseUrl +"/api/getAllExpensesByCategory";
    public expenseCategory = this.baseUrl + "/api/expenseCategory";
    public expenseStorySummary = this.baseUrl + "/api/expenseStorySummary";
    public addExpenseStory = this.baseUrl + "/api/addExpenseStory";
    public deleteExpenseStory = this.baseUrl + "/api/deleteExpenseStory";

    public pubnubSubscribeKey = this.baseUrl + "/api/pubnub/subscribekey";
    public getAllActiveExpenseStories = this.baseUrl + "/api/getAllActiveExpenseStories";

    public getNotifications = this.baseUrl + "/api/notifications";
    public profilePicUrl = this.baseUrl + "/api/profilePic";
}