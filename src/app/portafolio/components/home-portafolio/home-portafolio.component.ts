import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'home-portafolio',
  templateUrl: './home-portafolio.component.html',
  styleUrls: ['./home-portafolio.component.css']
})
export class HomePortafolioComponent implements  AfterViewInit{

  ngAfterViewInit(): void {
    const typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 60, // Velocidad de escritura en milisegundos por caracter.
      backSpeed: 40, // Velocidad de borrado en milisegundos por caracter.
      loop: true,// Repetir animación indefinidamente.
      showCursor: true,
    });

  }
}

