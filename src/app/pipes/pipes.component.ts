import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public username ;
  public birthdate = new Date();

  constructor() { }

  ngOnInit() {
    this.username = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Luiz Teste Async');
      }, 3000);
    });
  }

}
