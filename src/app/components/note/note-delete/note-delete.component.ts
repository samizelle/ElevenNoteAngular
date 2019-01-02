import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NotesService } from 'elevenNoteAngular/src/app/services/notes.service';
import { Note } from 'src/app/models/Note';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-delete',
  templateUrl: './note-delete.component.html',
  styleUrls: ['./note-delete.component.css']
})
export class NoteDeleteComponent implements OnInit {
  note: Note;

  constructor(private _form: FormBuilder,
              private _noteService: NotesService,
              private _ar: ActivatedRoute,
              private _router: Router) {

    this._ar.paramMap.subscribe(p =>{
      this._noteService.getNote(p.get('id')).subscribe((singleNote: Note) => {
        this.note = singleNote;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this._noteService.deleteNote(this.note.NoteId).subscribe(() => {
      this._router.navigate(['/notes']);
    });
  }

}
