import { Component } from '@angular/core';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent {
  public loading = false

  ngOnInit() {
    this.funCargando()
  }
  funCargando() {
    console.log("hola")
    setTimeout(() => {
      this.loading = true
    }, 3000);
  }

}
