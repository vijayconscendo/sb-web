import { CommonModule} from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-icon-text-carousel',
  imports: [CommonModule],
  templateUrl: './icon-text-carousel.component.html',
  styleUrl: './icon-text-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IconTextCarouselComponent {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  ngAfterViewInit() {
    const swiperEl = this.swiperContainer.nativeElement;

    // Swiper parameters
    const swiperParams: SwiperOptions = {
      slidesPerView: 1.2,
      spaceBetween: 20,
      initialSlide: 0,
      // loop: true,
      centeredSlides: true,

      // Connect to external elements
      pagination: {
        el: '.custom-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
          centeredSlides: false,
        },
      },
    };

    // Assign parameters
    Object.assign(swiperEl, swiperParams);

    setTimeout(() => {
    swiperEl.initialize();
    }, 100);
  }
  
}
