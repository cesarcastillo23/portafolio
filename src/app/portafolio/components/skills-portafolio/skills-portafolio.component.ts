import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'skills-portafolio',
  templateUrl: './skills-portafolio.component.html',
  styleUrls: ['./skills-portafolio.component.css']
})
export class SkillsPortafolioComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.mySwiper', {
      effect: 'coverflow',
      spaceBetween:30,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,

      },
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false, // Cambia la velocidad de rotación aquí (3 segundos)
      },
    });
  }
}
