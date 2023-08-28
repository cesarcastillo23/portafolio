import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioMainComponent } from './layout/portafolio-main/portafolio-main.component';

import { SkillsPortafolioComponent } from './components/skills-portafolio/skills-portafolio.component';
import { ProjectsPortafolioComponent } from './components/projects-portafolio/projects-portafolio.component';
import { ContactPortafolioComponent } from './components/contact-portafolio/contact-portafolio.component';
import { FooterPortafolioComponent } from './components/footer-portafolio/footer-portafolio.component';
import { HomePortafolioComponent } from './components/home-portafolio/home-portafolio.component';
import { StudiesPortafolioComponent } from './components/studies-portafolio/studies-portafolio.component';



@NgModule({
  declarations: [
    PortafolioMainComponent,
    HomePortafolioComponent,
    SkillsPortafolioComponent,
    ProjectsPortafolioComponent,
    ContactPortafolioComponent,
    FooterPortafolioComponent,
    StudiesPortafolioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PortafolioMainComponent
  ]
})
export class PortafolioModule { }
