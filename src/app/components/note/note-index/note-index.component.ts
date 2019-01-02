import { Component, OnInit } from '@angular/core';
import { NotesService } from 'elevenNoteAngular/src/app/services/notes.service';
import { MatTableDataSource } from '@angular/material';
import { Note } from 'src/app/models/Note';
import { DataSource } from '@angular/cdk/table';
import { RegistrationComponent } from 'src/app/components/registration/registration.component';
import { LoginComponent } from '../../login/login.component';
import { NoteCreateComponent } from 'src/app/components/note/note-create/note-create.component';
import { NoteEditComponent } from 'src/app/components/note/note-edit/note-edit.component';
import { NoteDetailComponent } from 'src/app/components/note/note-detail/note-detail.component';
import { NoteDeleteComponent } from 'src/app/components/note/note-delete/note-delete.component';

@Component({
  selector: 'app-note-index',
  templateUrl: './note-index.component.html',
  styleUrls: ['./note-index.component.css']
})
export class NoteIndexComponent implements OnInit {

  constructor(private _noteService: NotesService) { }

  columnNames = ['details', 'NoteId', 'Title', 'IsStarred', 'CreatedUtc', 'buttons'];

  dataSource: MatTableDataSource<Note>

  ngOnInit() {
    this._noteService.getNotes().subscribe((notes: Note[]) => {
      this.dataSource = new MatTableDataSource<Note>(notes);
    });
  }

  const routes = [
    { path: 'register', component: RegistrationComponent },
    { path: 'login', component: LoginComponent},
    {
      path: 'notes', children: [
        { path: '', component: NoteIndexComponent },
        { path: 'create', component: NoteCreateComponent },
        { path: 'detail/:id', component: NoteDetailComponent },
        { path: 'edit/:id', component: NoteEditComponent },
        { path: 'delete/:id', component: NoteDeleteComponent }
      ]
    },
    { path: '**', component: RegistrationComponent }
  ];
}
