import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  ngAfterViewInit() {
    const swiperEl = this.swiperContainer.nativeElement;

    // Swiper parameters
    const swiperParams: SwiperOptions = {
      // slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
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
          slidesPerView: 7,
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
