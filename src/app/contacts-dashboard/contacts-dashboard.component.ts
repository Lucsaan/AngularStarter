import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trm-contacts-dashboard',
  template: `
    <md-sidenav-container>
      <md-sidenav mode="side" opened="true">
        <trm-contacs-list></trm-contacs-list>
      </md-sidenav>
      <div class="main-content">
        <router-outlet></router-outlet>
      </div>
    </md-sidenav-container>
  `,
})
export class ContactsDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
