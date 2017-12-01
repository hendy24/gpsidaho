import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-footer',
  templateUrl: './dashboard-footer.component.html',
  styleUrls: ['./dashboard-footer.component.scss']
})
export class DashboardFooterComponent implements OnInit {

  public date = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
