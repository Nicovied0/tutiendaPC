import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PayService {
  url = "https://cpu-central-back.vercel.app/api/pay/create-order";

  constructor(private http: HttpClient) {}

  async createOrder(unitPrice: number, title: string): Promise<any> {
    const body = {
      unit_price: unitPrice,
      title: title
    };

    try {
      const response = await this.http.post(this.url, body).toPromise();
      return response;
    } catch (error) {
      throw new Error("error");
    }
  }
}

