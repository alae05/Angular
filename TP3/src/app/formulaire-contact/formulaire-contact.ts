import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact } from '../contact.interface';

@Component({
  selector: 'app-formulaire-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulaire-contact.html',
})
export class FormulaireContactComponent {

  @Output() contactAjoute = new EventEmitter<Contact>();

  nouveau: Contact = {
    nom: '',
    email: '',
    actif: true,
    score: 10,
    role: 'user'
  };

  soumettre(): void {
    if (this.nouveau.nom && this.nouveau.email) {
      this.contactAjoute.emit({ ...this.nouveau });
      this.nouveau = { nom: '', email: '', actif: true, score: 10, role: 'user' };
    }
  }
}