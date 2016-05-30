import { Component, ViewChild } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BarChartDemo} from '../charts/barchartdemo';
import {ChartDemo} from '../charts/chartdemo';
import {ReportService} from './report.service';
import {Observable} from 'rxjs/Rx';
import {ExpenseModalComponent} from '../expense/expense.modal.component'
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
@Component({
    templateUrl: 'app/report/report.component.html',
    directives:[BarChartDemo, ChartDemo, ExpenseModalComponent,MODAL_DIRECTIVES]
})
export class ReportComponent {
    public expenseStories:Observable<Array<any>>;
    public colors = ['success', 'info', 'danger', 'warning'];
    constructor(private _reportService: ReportService) {
        console.log('LOADING REPORT');
        this._reportService.get()
        .subscribe(result => {
            this.expenseStories = result.data.expenseStorySummaries;
        },
        error => {
            console.log('ERROR REPORT', JSON.stringify(error));
        });
     }
     
     @ViewChild('modal')
    modal: ModalComponent;
    items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;
    model: Person = new Person();

    index: number = 0;
    backdropOptions = [true, false, 'static'];

    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;


    closed() {
        this.output = '(closed) ' + this.selected;
    }

    dismissed() {
        this.output = '(dismissed)';
    }

    opened() {
        this.output = '(opened)';
    }

    navigate() {

    }

    open() {
        this.modal.open();
    }
}
export class Person {
    firstName: string;
    lastName: string;
}