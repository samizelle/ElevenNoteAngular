import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import {
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule, 
  MatInputModule
} from '@angular/material'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { NotesService } from './services/notes.service';
import { NoteCreateComponent } from './components/note/note-create/note-create.component';
import { LoginComponent } from './components/login/login.component';
import { NoteIndexComponent } from './components/note/note-index/note-index.component';
import { NoteDetailComponent } from './components/note/note-detail/note-detail.component';
import { NoteEditComponent } from './components/note/note-edit/note-edit.component';
import { NoteDeleteComponent } from './components/note/note-delete/note-delete.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'notes', children: [
     { path: '', component: NoteIndexComponent },
     { path: 'create', component: NoteCreateComponent },
     { path: 'details', component: NoteDetailComponent },
     { path: 'edit/:id', component: NoteEditComponent },
     { path: 'delete/:id', component: NoteDeleteComponent }
   ]},
  { path: '**', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    NoteCreateComponent,
    NoteIndexComponent,
    NoteDetailComponent,
    NoteEditComponent,
    NoteDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    AuthService,
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
