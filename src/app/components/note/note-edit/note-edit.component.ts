import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NotesService } from 'elevenNoteAngular/src/app/services/notes.service';
import { Note } from 'src/app/models/Note';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  note: Note;

  editNoteForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _noteService: NotesService,
              private _ar: ActivatedRoute,
              private _router: Router) {

      this._ar.paramMap.subscribe(p =>{
        this._noteService.getNote(p.get('id')).subscribe((singleNote: Note) => {
          this.note = singleNote;
          this.createForm();
        });
      });
   }

  ngOnInit() {
  }

  createForm() {
    this.editNoteForm = this._form.group({
      NoteId: new FormControl(this.note.NoteId),
      IsStarred: new FormControl(this.note.IsStarred),
      Title: new FormControl(this.note.Title),
      Content: new FormControl(this.note.Content)
    });
  }

  onSubmit(form) {
    const updateNote: Note = {
      NoteId:form.value.NoteId,
      Title: form.value.Title,
      Content: form.value.Content,
      IsStarred: form.value.IsStarred
    };
    this._noteService.updateNote(updateNote).subscribe(d => {
      this._router.navigate(['/notes']);
    });
  }
}
