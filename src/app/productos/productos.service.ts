import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get<any>('https://tu-tienda-pc-default-rtdb.firebaseio.com/.json').pipe(
      map((productos: any[]) => {
        return productos.map((producto, index) => ({ ...producto, index: index + 1 }));
      })
    ).toPromise();
  }


  getProductoById(id: string) {
    const url = `https://tu-tienda-pc-default-rtdb.firebaseio.com/${id}.json`;
    return this.http.get<any>(url).toPromise();
  }

  async getMemorias() {
    try {
      const productos = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/.json').toPromise();

      if (productos) {
        const productosFilter = productos
          .map((producto: any, index: number) => ({ ...producto, index: index + 1 }))
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
      const productos = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/.json').toPromise();

      if (productos) {
        const productosFilter = productos
          .map((producto: any, index: number) => ({ ...producto, index: index + 1 }))
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
      const productos = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/.json').toPromise();

      if (productos) {
        const productosFilter = productos
          .map((producto: any, index: number) => ({ ...producto, index: index + 1 }))
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
      const productos = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/.json').toPromise();

      if (productos) {
        const productosFilter = productos
          .map((producto: any, index: number) => ({ ...producto, index: index + 1 }))
          .filter((producto: any) => producto.categoria === "Gabinetes");
        return productosFilter;
      }
      return []
    } catch (error) {
      console.error("Ocurrió un error:", error);
      return []
    }
  }




  async getOferta() {
    try {
      const productos = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/.json').toPromise();

      if (productos) {
        const productosOferta = productos.sort(() => Math.random() - 0.5).slice(0, 7);

        console.log("Oferta:");
        console.log(productosOferta);
        return productosOferta;
      }

      return []; // Valor de retorno predeterminado si productos es null o undefined
    } catch (error) {
      console.error("Ocurrió un error:", error);
      return []; // Valor de retorno predeterminado en caso de error
    }
  }


}
