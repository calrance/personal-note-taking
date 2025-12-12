import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  imports: [FormsModule],
  templateUrl: './notes.html',
})
export class Notes {
  noteTitle = 'Getting Started';
}
