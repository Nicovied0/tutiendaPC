import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos/productos.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  @Input() producto: any;
  public productoId: any
  public loading = false

  public image = false
  public cargadas: any
  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.getProductById(productId);
      }
    })
  }

  getProductById(id: string) {
    this.productosService.getProductoById(id)
      .then(producto => {
        // Aquí puedes hacer lo que necesites con los detalles del producto
        console.log(producto);
        this.productoId = producto
        this.loading = true
      })
      .catch(error => {
        // Manejo de errores
        console.error(error);
      });
  }


  // subir imagenes
  public imageSrc: string | ArrayBuffer | null = null;
  public imageSrcLink: string | null = null;
  public editImage = false

  editImagen() {
    this.editImage = !this.editImage
  }

  onFileSelected(event: any) { //carga de archivo
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onFileLink(event: any) { //carga a travez de link
    const newValue: string = event.target.value;
    if (newValue) {
      this.imageSrc = newValue
    };
  }

}
