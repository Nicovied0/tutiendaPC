import { ImageService } from './../Servicios/Image.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sponsor-scroll',
  templateUrl: './sponsor-scroll.component.html',
  styleUrls: ['./sponsor-scroll.component.css']
})
export class SponsorScrollComponent implements OnInit{
  images: any[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe((data) => {
      this.images = data;
      console.log(data,"soy imagenes")
    });
  }
}
