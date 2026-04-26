import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-contacts',
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-contacts.html',
  styleUrl: './liste-contacts.css',
})
export class ListeContacts {
  @Input() Contacts: Contact[] = [];
  dateChargement: string = '';
  constructor(){
    console.log('[1] constructor() appelé');  
  }

  ngOnInit(): void {
    console.log('[2] ngOnInit() appelé');
    console.log(` Contacts reçus : ${this.Contacts.length}`);
    this.dateChargement = new Date().toLocaleTimeString('fr-FR');
  }
  ngOnDestroy(): void{
    console.log('[3] ngOnDestroy() appelé — nettoyage');
  }

  nombreAjouts: number = 0;

  ngOnChanges(changes : SimpleChanges): void{
    if (changes['Contacts']){
      const avant = changes['Contacts'].previousValue;
      const apres = changes['Contacts'].currentValue;
      const premier = changes['Contacts'].firstChange;
      console.log('ngOnChanges() appelé');
      console.log(' Premier appel ?', premier);
      console.log(' Avant :', avant?.length ?? 0, 'contact(s)');
      console.log(' Après :', apres?.length ?? 0, 'contact(s)');
      if (!premier) this.nombreAjouts++;
    }
  }

  @Output() contactSupprime = new EventEmitter<number>();
  supprimer(index: number): void {
    if (confirm('Confirmer la suppression ?')) {
      this.contactSupprime.emit(index);
    }
  }

  recherche: string = '';
  get contactsFiltres(): Contact[] {
    if (!this.recherche.trim()) return this.Contacts;
    const terme = this.recherche.toLowerCase();
    return this.Contacts.filter(c =>
      c.nom.toLowerCase().includes(terme) ||
      c.email.toLowerCase().includes(terme)
    );
  }
}
