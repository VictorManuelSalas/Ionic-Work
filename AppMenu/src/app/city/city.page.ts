import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  //Se declaran las variables para usarlos para enlazarlos con los del json
  id: any;
  finalID: number;
  //Varibale la cual es un arreglo donde se almacenaran las ciudades completas
  cities: any = [];
  name: string;
  image: string;
  description: string;
  cosa1: string;
  cosa2: string;
  cosa3: string;
  cosa4 : string;
  icon1: string;
  icon2: string;
  icon3: string;
  icon4: string;

  //Se copiaron del ts de ciudades ya que con esto sirve la funcion de getCities
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {

    /* activatedRoute: Proporciona acceso a información sobre una ruta asociada a un 
    componente que se carga en una toma de corriente. Se utiliza para atravesar el árbol y extraer información de los nodos. 

    Snapshot es una imagen estática de la información de la ruta poco después de que se creó el componente.

    El paramMap es un diccionario de valores de parámetros de ruta extraídos de la URL.*/

    //Aqui se obtiene el id de la url y se asigna a la variable id que se definio arriba
    this.id = this.activatedRoute.snapshot.paramMap.get("id")

    /*Aqui se define que la variable finalId es igual al id obtenido y a este se
     le resta 1 ya que en la programacion siempre se empieza en el cero y como en el J
     SON estan los id establecidos desde el 1 por eso a este id se le resta 1 en el codigo. */
    this.finalID = this.id - 1;
    console.log("id", this.id)

    //Se copio de la pagina ts de ciudades 
    this.getCities().subscribe(res => {
      console.table(res)

      //Se pasan los datos hacia cities para almacenar las en el arreglo vacio
      this.cities = res;

      //Aqui se les da los valores a las variables definidas arriba con los datos del arreglo cities, accediendo a ellos mediante 
      //cities[finalID].(nombre del elemento), this.image = this.cities.this.finalID.image; esta es una forma que no nos permite iterar 
      this.name = this.cities[this.finalID].name;
      this.image = this.cities[this.finalID].image;
      this.cosa1 = this.cities[this.finalID].cosa1;
      this.cosa2 = this.cities[this.finalID].cosa2;
      this.cosa3 = this.cities[this.finalID].cosa3;
      this.cosa4 = this.cities[this.finalID].cosa4;
      this.icon1 = this.cities[this.finalID].icon1;
      this.icon2 = this.cities[this.finalID].icon2;
      this.icon3 = this.cities[this.finalID].icon3;
      this.icon4 = this.cities[this.finalID].icon4;
      this.description = this.cities[this.finalID].description;


    });

  }

  //Se copea la funcion que se uso para obtener los datos del JSON
  getCities() {
    //Aqui es que regrese la variable http que se definio en el contructor de arriba el cual obtendra con el get los valores de la sig liga
    return this.http.get("assets/files/cities.json")
      //Pipe
      .pipe(
        //Se usa map el cual declara una variable res el cual sera de tipo cualqiera
        map((res: any) => {
          //Aqui es que regrese la variable declarada en el map el cual recibe el valor data del json
          return res.data;
        })
      )
  }


}
