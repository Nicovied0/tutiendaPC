import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private http: HttpClient) { }


  editProductoById(id: string, producto: any) {
    const url = `https://tu-tienda-pc-default-rtdb.firebaseio.com/productos/${id}.json`;
    return this.http.put<any>(url, producto).toPromise();
  }

  obtenerProductos() {
    const url = 'https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json';
    return this.http.get<any>(url).toPromise()
      .then(response => {
        console.log('Productos obtenidos:', response);
        return response;
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
        throw error;
      });
  }

  obtenerUltimoId(productos: any) {
    let ultimoId = 0;
    for (const id in productos) {
      if (productos.hasOwnProperty(id)) {
        const numeroId = parseInt(id.replace(/[^0-9]/g, ''), 10);
        if (numeroId > ultimoId) {
          ultimoId = numeroId;
        }
      }
    }
    return ultimoId;
  }

  generarNuevoId(ultimoId: number) {
    return ultimoId + 1;
  }

  async postProducto(producto: any) {
    const url = `https://tu-tienda-pc-default-rtdb.firebaseio.com/productos.json`;

    try {
      const productos = await this.obtenerProductos();
      const ultimoId = this.obtenerUltimoId(productos);
      const nuevoId = this.generarNuevoId(ultimoId);

      producto.id = nuevoId.toString(); // Convertir el ID a una cadena antes de asignarlo

      const nuevoProducto = {
        [nuevoId]: producto
      };

      const response = await this.http.patch<any>(url, nuevoProducto).toPromise();
      console.log('Producto creado:', response);
      return response;
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    }
  }






}
