import { Component, OnInit } from '@angular/core';

import { timer } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const interval$ = timer(3000, 1000);

  }

}
