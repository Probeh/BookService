import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { BookRoutes } from './Books/Book.routing';
import { BooksModule } from './Books/Books.module';
import { HeaderComponent } from './Header/Header.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ReactiveFormsModule,
      ToastrModule.forRoot(),
      RouterModule.forRoot(BookRoutes),
      BooksModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
