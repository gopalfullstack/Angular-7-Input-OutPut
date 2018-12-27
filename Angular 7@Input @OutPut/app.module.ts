import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,

      } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
