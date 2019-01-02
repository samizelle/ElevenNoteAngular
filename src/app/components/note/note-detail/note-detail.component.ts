import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/models/Note';
import { NotesService } from 'elevenNoteAngular/src/app/services/notes.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  note: Note;

  constructor(private _activatedRoute: ActivatedRoute, private _noteService: NotesService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._noteService.getNote(routeData.get('id')).subscribe((singleNote: Note) => {
        this.note = singleNote;
      });
    });
  }
}
