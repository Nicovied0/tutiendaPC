import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get<any>('https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json').toPromise();
  }


  getProductoById(id: string) {
    const url = `https://tu-tienda-pc-default-rtdb.firebaseio.com/productos/${id}.json`;
    return this.http.get<any>(url).toPromise();
  }

  async getMemorias() {
    try {
      const productos = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json').toPromise();

      if (productos) {
        const productosFilter = productos
          .filter((producto: any) => producto.categoria === "Memorias RAM");

        console.log("funcionó");
        console.log(productosFilter);
        return productosFilter;
      }
      return []
    } catch (error) {
      console.error("Ocurrió un error:", error);
      return []
    }
  }

  async getProcesadores() {
    try {
      const productos = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json').toPromise();

      if (productos) {
        const productosFilter = productos
          .filter((producto: any) => producto.categoria === "Procesadores");
        return productosFilter;
      }
      return []
    } catch (error) {
      console.error("Ocurrió un error:", error);
      return []
    }
  }

  async getPlacas() {
    try {
      const productos = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json').toPromise();

      if (productos) {
        const productosFilter = productos
          .filter((producto: any) => producto.categoria === "Placas de Video");
        return productosFilter;
      }
      return []
    } catch (error) {
      console.error("Ocurrió un error:", error);
      return []
    }
  }
  async getGabinetes() {
    try {
      const productos = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json').toPromise();

      if (productos) {
        const productosFilter = productos
          .filter((producto: any) => producto.categoria === "Gabinetes");
        return productosFilter;
      }
      return []
    } catch (error) {
      console.error("Ocurrió un error:", error);
      return []
    }
  }




  async getOferta(): Promise<any[]> {
    try {
      const response = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json').toPromise();

      if (response) {
        const productos = Object.values(response); // Obtén los valores de la respuesta como un arreglo de productos

        const productosOferta = productos.sort(() => Math.random() - 0.5).slice(0, 7);

        console.log("Oferta:");
        console.log(productosOferta);
        return productosOferta;
      }

      return []; // Valor de retorno predeterminado si la respuesta es null o undefined
    } catch (error) {
      console.error("Ocurrió un error:", error);
      return []; // Valor de retorno predeterminado en caso de error
    }
  }



}
