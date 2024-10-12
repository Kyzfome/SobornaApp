import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent {
  @Input() slides: any[] = [];
  currentSlide = 0;

  next(){
    this.currentSlide = (this.currentSlide + 1) % this.slides.length
  }

  prev(){
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
  }
}

