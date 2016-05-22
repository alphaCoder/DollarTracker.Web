import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrl {

    constructor() { }

    private baseUrl:string = "http://dev-dollartracker.azurewebsites.net";
    public loginUrl:string = this.baseUrl + "/api/login";
    public signupUrl:string = this.baseUrl + "/api/register";
    public dashboardStatsUrl:string = this.baseUrl + "/api/dashboardStats"
}