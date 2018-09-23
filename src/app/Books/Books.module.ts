import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap';
import { AlertService } from '../_Shared/Services/Alert.service';
import { DataService } from '../_Shared/Services/Data.service';
import { RequestInterceptor } from '../_Shared/Services/Interceptors/Request.interceptor';
import { BookService } from './Book.service';
import { BookItemComponent } from './BookItem/BookItem.component';
import { BookListComponent } from './BookList/BookList.component';
import { BookOptionsModule } from './BookOptions/BookOptions.module';
import { BooksComponent } from './Books.component';

@NgModule({
  imports: [
    CommonModule,
    BookOptionsModule,
    TooltipModule.forRoot(),
  ],
  declarations: [
    BooksComponent,
    BookItemComponent,
    BookListComponent,
  ],
  providers: [
    DataService,
    AlertService,
    BookService,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
})
export class BooksModule { }
