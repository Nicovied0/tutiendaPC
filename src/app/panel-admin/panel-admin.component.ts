
import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent {

  public admin = true
  public edit = false
  public newProduct = false

  editProduct() {
    this.edit = !this.edit
  }

  addProduct() {
    this.newProduct = !this.newProduct
  }
}
