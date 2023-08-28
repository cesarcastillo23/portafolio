import { AfterViewInit, Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal'


@Component({
  selector: 'portafolio-main',
  templateUrl: './portafolio-main.component.html',
  styleUrls: ['./portafolio-main.component.css']
})
export class PortafolioMainComponent implements AfterViewInit {

  constructor() { }

    ngAfterViewInit(): void {

      ScrollReveal().reveal(".menu", {

        origin: 'top',
        distance: '100px',
        duration: 1500,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'

    })


    ScrollReveal().reveal(".inicio", {

      origin: 'left',    // Cambiado de 'bottom' a 'left'
        distance: '800px',
        duration: 1500,
        delay: 200,
        opacity: 0,
        reset:true,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'

  })


    ScrollReveal().reveal(".skillset", {

      origin: 'top',    // Cambiado de 'bottom' a 'left'
        distance: '-400px',
        duration: 1500,
        delay: 200,
        opacity: 0,
        reset:true,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'

  })


  ScrollReveal().reveal(".proyectos", {

    origin: 'top',    // Cambiado de 'bottom' a 'left'
    distance: '-400px',
    duration: 3000,
    delay: 800,
    opacity: 0,
    reset:true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'

  })


  ScrollReveal().reveal(".cont-footer", {

    origin: 'top',    // Cambiado de 'bottom' a 'left'
      distance: '-400px',
      duration: 1500,
      delay: 200,
      opacity: 0,
      reset:true,
      easing: 'cubic-bezier(0.5, 0, 0, 1)'

})



















    }
  }


