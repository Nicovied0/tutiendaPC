import { Injectable } from "@angular/core" //al ser un servicio importo el injectable de angular y ejecuto el servicion abajo
import { HttpClient } from "@angular/common/http"

@Injectable({ providedIn: 'root' }) //Injectable para injectar la dependencia y ROOt para poder solicitar el servicio

export class ProductosService {

  constructor(private http: HttpClient) { }
  getProductos() {
    let datos = this.http.get('https://tu-tienda-pc-default-rtdb.firebaseio.com/.json').toPromise()
    console.log(datos)
    return datos
    //toPromiseActiva una futura ejecusion
  }



}
