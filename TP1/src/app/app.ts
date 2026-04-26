import { Component } from '@angular/core';
import { Salutation } from './salutation/salutation'  
import { Profil } from './profil/profil'  

@Component({
  selector: 'app-root',
  imports: [Salutation, Profil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titre = 'Mon Application Angular 20';  
  description = 'Ma première application Angular !';
  annee = 2025;
  version = 'Angular v20';
  prenom:string = 'Alae'
  noteMax:number = 20;
  estEtudiant:boolean = true;
}
