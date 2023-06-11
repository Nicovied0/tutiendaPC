import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../Servicios/productos.service';
import { ProductosEditService } from '../Servicios/productsEdit.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  @Input() producto: any;
  public productoId: any;
  public loading = false;
  public editImage = false;
  public imageSrc: string | ArrayBuffer | null = null;

  // constructor(private route: ActivatedRoute, private productosService: ProductosService, private editProducts: ProductosEditService) { }
  constructor(private route: ActivatedRoute, private productosService: ProductosEditService) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.getProductById(productId);
      }
    });
  }


  getProductById(id: string) {
    this.productosService
      .getProductoById(id)
      .then(producto => {
        console.log(producto);
        this.productoId = producto;
        this.loading = true;
      })
      .catch(error => {
        console.error(error);
      });

  }

  editImagen() {
    this.editImage = !this.editImage;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
        this.productoId.imagen = file
      };
      reader.readAsDataURL(file);
    }
  }

  onFileLink(event: any) {
    const newValue: string = event.target.value;
    if (newValue) {
      this.imageSrc = newValue;
    }
  }

  guardarProducto() {
    console.log(this.productoId)
    if (this.productoId) {
      this.productosService.editProductoById(this.productoId.id, this.productoId)
        .then(() => {
          console.log('¡Producto editado exitosamente!');
        })
        .catch(error => {
          console.error('Ocurrió un error al editar el producto:', error);
        });
    }
  }
}
