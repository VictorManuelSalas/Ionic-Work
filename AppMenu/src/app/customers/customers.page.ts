import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Importacion para que funcione aqui en HTTP
import { HttpClient } from '@angular/common/http'
//Importacion de la propiedad map para poder mapiar el json ya que con esto nos permite generar un nuevo arreglo mediante otro 
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  

  //Se le da el parametro de private router el cual se toma de Router el cual se importo arriba
  constructor(
    private router: Router,
    private http: HttpClient) { }

    //Esta funcion es la que se ejecuta al refrescar o cargar la pagina
  ngOnInit() {
    //Esta es solo para practicar el if
    this.permisos = true;

    
    this.getUsers().subscribe(res => {
      //Mustra la info en una tabla en la consola
      console.table(res)
      this.users = res;

      //Se agrega aqui para que los muestre por default
      this.searchedUser = this.users;
    });
  }

  //Variable creada para almacenar todos los datos recibidos, esta variable es de tipo cualquiera y es una arreglo vacio
  users: any = [];

  // Variable para los usuarios buscados
  searchedUser: any;
  
  //Variable para practicar el *ngIf
  permisos: boolean ;

  //Esta es la funcion que nos permite cambiar la pagina gracias a su contenido el cual usa la ruta de home
  goToHome(){
    this.router.navigate(['/home'])
  }

  getUsers(){
    //Aqui es que regrese la variable http que se definio en el contructor de arriba el cual obtendra con el get los valores de la sig liga
    return this.http.get("assets/files/customers.json")
    //Pipe
    .pipe(
      //Se usa map el cual declara una variable res el cual sera de tipo cualqiera
      map(( res:any ) => {
        //Aqui es que regrese la variable declarada en el map el cual recibe el valor data del json
        return res.data;
      })
    )
  }

  searchCustomer(textoagregado){
    const text = textoagregado.target.value;
    this.searchedUser = this.users;
    if(text && text.trim() != ''){
      this.searchedUser = this.searchedUser.filter((user: any) =>{
        return (user.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }
}
