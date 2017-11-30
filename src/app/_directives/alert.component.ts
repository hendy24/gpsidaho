import { Component, OnInit } from '@angular/core';
// import { AlertService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-alert',
    templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit {
    message: any;

    constructor() {}

    ngOnInit() {
        // this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}
