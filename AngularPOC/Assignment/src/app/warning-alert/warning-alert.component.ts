import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-warning-alert',
  template: `
    <p>
      warning-alert works separate component!
    </p>
  `,
  styles: []
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
