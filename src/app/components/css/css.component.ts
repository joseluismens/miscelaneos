import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error totam, quidem consequatur, corporis temporibus itaque, iure deserunt architecto fuga cum! Tenetur iure nostrum accusantium earum culpa, optio doloremque porro.
    </p>
  `,
  styles: [
    `
    p{
      color:red
    }
    `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
