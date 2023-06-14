import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class ProductosEditService {

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get<any>('https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json').pipe(
      map((productos: any[]) => {
        return productos
          .filter((producto: any) => producto.activo !== false)
          .map((producto, index) => ({ ...producto, index: index + 1 }));
      })
    ).toPromise();
  }


  getProductoById(id: string) {
    const url = `https://tu-tienda-pc-default-rtdb.firebaseio.com/productos/${id}.json`;
    return this.http.get<any>(url).toPromise();
  }
  editProductoById(id: string, producto: any) {
    const url = `https://tu-tienda-pc-default-rtdb.firebaseio.com/productos/${id}.json`;
    return this.http.put(url, producto).toPromise();
  }

  deleteProductoById(id: number) {
    const url = `https://tu-tienda-pc-default-rtdb.firebaseio.com/productos/${id}.json`;
    console.log(`soy el del service ${id}, este es el id`);

    // En lugar de eliminar el producto, actualiza la propiedad "activo" a falso
    const productoDesactivado = { activo: false };

    return this.http.patch<any>(url, productoDesactivado).toPromise();

  }


}
