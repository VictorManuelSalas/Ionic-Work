import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  //Se le da el parametro de private router el cual se toma de Router el cual se importo arriba
  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Esta es la funcion que nos permite cambiar la pagina gracias a su contenido el cual usa la ruta de home
  goToHome(){
    this.router.navigate(['/home'])
  }

}
