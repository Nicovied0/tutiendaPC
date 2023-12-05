import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class ProductosService {
  public carrito: any

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get<any>('https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json').toPromise()
      .then((productos: any[]) => {
        return productos.filter((producto: any) => producto.activo !== false);
      });
  }


  getProductoById(id: string) {
    const url = `https://tu-tienda-pc-default-rtdb.firebaseio.com/productos/${id}.json`;
    return this.http.get<any>(url).toPromise()
      .then((producto: any) => {
        if (producto && producto.activo !== false) {
          return producto;
        } else {
          return null;
        }
      });
  }

  async getMemorias() {
    try {
      const productos = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json').toPromise();

      if (productos) {
        const productosFilter = productos
          .filter((producto: any) => producto.categoria === "Memorias RAM" && producto.activo !== false);

        return productosFilter;
      }
      return [];
    } catch (error) {
      console.error("Ocurrió un error:", error);
      return [];
    }
  }

  async getProcesadores() {
    try {
      const productos = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json').toPromise();

      if (productos) {
        const productosFilter = productos
          .filter((producto: any) => producto.categoria === "Procesadores" && producto.activo !== false);

        return productosFilter;
      }
      return [];
    } catch (error) {
      console.error("Ocurrió un error:", error);
      return [];
    }
  }

  async getPlacas() {
    try {
      const productos = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json').toPromise();

      if (productos) {
        const productosFilter = productos
          .filter((producto: any) => producto.categoria === "Placas de Video" && producto.activo !== false);

        return productosFilter;
      }
      return [];
    } catch (error) {
      console.error("Ocurrió un error:", error);
      return [];
    }
  }
  
  async getGabinetes() {
    try {
      const productos = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json').toPromise();

      if (productos) {
        const productosFilter = productos
          .filter((producto: any) => producto.categoria === "Gabinetes" && producto.activo !== false);

        return productosFilter;
      }
      return [];
    } catch (error) {
      console.error("Ocurrió un error:", error);
      return [];
    }
  }





  async getOferta(): Promise<any[]> {
    try {
      const response = await this.http.get<any[]>('https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json').toPromise();

      if (response) {
        const productos = Object.values(response);
        const productosOferta = productos
          .filter((producto: any) => producto.activo !== false)
          .sort(() => Math.random() - 0.5)
          .slice(0, 7);
        return productosOferta;
      }

      return [];
    } catch (error) {
      console.error("Ocurrió un error:", error);
      return [];
    }
  }

  getProductoCarrito(): any[] {
    const carritoActual = localStorage.getItem('carrito');
    if (carritoActual) {
      this.carrito = JSON.parse(carritoActual);
    } else {
      this.carrito = [];
    }

    return this.carrito;
  }


  deleteProductoCarrito(id: any): any {
    const carritoActual = this.getProductoCarrito()
    const index = this.getProductoCarrito().findIndex(objeto => objeto.id === id)
    if (index !== -1) {
      carritoActual.splice(index, 1);

    }
    localStorage.setItem('carrito', JSON.stringify(carritoActual));
  }

}
