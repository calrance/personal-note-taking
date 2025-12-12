import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NoteList } from '@components/note-list/note-list';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-notes',
  imports: [FormsModule, DatePipe, NoteList, ButtonModule],
  templateUrl: './notes.html',
})
export class Notes {
  noteTitle = 'Getting Started';
  lastEditeDate = new Date();
}
