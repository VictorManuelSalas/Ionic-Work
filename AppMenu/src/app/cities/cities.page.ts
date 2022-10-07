import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Importacion para que funcione aqui en HTTP
import { HttpClient } from '@angular/common/http'
//Importacion de la propiedad map para poder mapiar el json ya que con esto nos permite generar un nuevo arreglo mediante otro 
import { map } from 'rxjs/operators'

//Importacion de Toast
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  cities: any = [];

  constructor(private router: Router,
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController) { }

  ngOnInit() {
    this.getCities().subscribe(res => {
      console.log("Res", res)
      this.cities = res;
    });
  }

  getCities(){
    //Aqui es que regrese la variable http que se definio en el contructor de arriba el cual obtendra con el get los valores de la sig liga
    return this.http.get("assets/files/cities.json")
    //Pipe
    .pipe(
      //Se usa map el cual declara una variable res el cual sera de tipo cualqiera
      map(( res:any ) => {
        //Aqui es que regrese la variable declarada en el map el cual recibe el valor data del json
        return res.data;
      })
    )
  }

  //Funcion del Toast
  async presentToast1(){
    const toast = await this.toastController.create({
      message: 'Ciudad seleccionada',
      duration: 2000,
      position: "bottom" 
    });
    toast.present();
  }


  //Alert 
  async Alert(){
    const alert = await this.alertController.create({
      header: "Ciudades",
      message: "¿ Quieres ver mas informacion sobre esta ciudad ?",
      buttons: [
        {
          text: "Si",
          handler: () => {
            console.log("Abriendo...")
          }
        },
        {
          text: "No",
          handler: () => {
            console.log("Entendido xd")
            this.router.navigate(['/cities'])
          }
        }
    ]
    });
    await alert.present()
    await alert.onDidDismiss();
  }





}
