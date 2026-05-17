import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact';
import { Contact } from './contact.interface';
import { ListeContactsComponent } from './liste-contacts/liste-contacts';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact';
import { StatsContactsComponent } from './stats-contacts/stats-contacts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListeContactsComponent, FormulaireContactComponent, StatsContactsComponent],
  template: `
    <h1>📋 Gestionnaire de Contacts Angular 20</h1>
    <app-stats-contacts></app-stats-contacts>
    <app-formulaire-contact (contactAjoute)="onContactAjoute($event)"></app-formulaire-contact>
    <app-liste-contacts></app-liste-contacts>
  `
})
export class AppComponent implements OnInit {

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    console.log('App initialisée. Contacts :', this.contactService.getAll().length);
  }

  onContactAjoute(contact: Contact): void {
    this.contactService.ajouter(contact);
  }
}