import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductosService } from './productos.service';

@Injectable({ providedIn: 'root' })
export class SearchService {

  constructor(private http: HttpClient, private productosService: ProductosService) { }

  async getProductsByName(data: string) {
    try {
      const results = await this.productosService.getProductos();
      const filteredProducts = results.filter((producto: any) => {
        const nombre = producto.nombre.toLowerCase();
        const categoria = producto.categoria.toLowerCase();
        const termino = data.toLowerCase();
        return nombre.includes(termino) || categoria.includes(termino);
      }).slice(0, 5); // Limit the results to 5 products
      console.log(filteredProducts, "resultados de búsqueda");
      return filteredProducts;
    } catch (error) {
      console.error('Error occurred while getting products:', error);
      throw error; // rethrow the error to be handled by the caller
    }
  }
}
