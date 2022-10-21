import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
//Se usa el metodo input en donde se decalara una variable distinguida para el elemento que se estara mandando y asignar su tipo de dato que es
@Input() title: any;

  constructor() { }

  ngOnInit() {
    console.log("dato entrante: ", this.title)
  }


}
