import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private http: HttpClient) { }


  editProductoById(id: string, producto: any) {
    const url = `https://tu-tienda-pc-default-rtdb.firebaseio.com/productos/${id}.json`;
    return this.http.put<any>(url, producto).toPromise();
  }

}
