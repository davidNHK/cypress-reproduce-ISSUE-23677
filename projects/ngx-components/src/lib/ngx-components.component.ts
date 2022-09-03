import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-ngx-components',
  template: `
    <p>
      ngx-components works!
    </p>
  `,
  styles: [
  ]
})
export class NgxComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
