import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal'

@Component({
  selector: 'studies-portafolio',
  templateUrl: './studies-portafolio.component.html',
  styleUrls: ['./studies-portafolio.component.css']
})
export class StudiesPortafolioComponent  implements AfterViewInit {

  constructor() { }

    ngAfterViewInit(): void {


    ScrollReveal().reveal(".anim-izq", {

      origin: 'left',    // Cambiado de 'bottom' a 'left'
        distance: '40px',
        duration: 2000,
        delay: 500,
        opacity: 0,
        reset:true,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'

  })
      ScrollReveal().reveal(".anim-der", {

        origin: 'right',    // Cambiado de 'bottom' a 'left'
        distance: '40px',
        duration: 2000,
        delay: 500,
        opacity: 0,
        reset:true,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'

    })


    }
  }



