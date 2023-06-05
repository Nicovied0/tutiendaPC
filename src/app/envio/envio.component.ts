import { Component } from '@angular/core';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent {
  public loading = true
  public showLoader: boolean = true;


  public iframeLoaded: boolean = false;

  funCargando() {
    this.loading = true;
  }

  onIframeLoad() {
    this.iframeLoaded = true;
    this.loading = false;
  }
}
