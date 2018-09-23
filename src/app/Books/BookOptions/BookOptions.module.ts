import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule, TabsModule } from 'ngx-bootstrap';
import { TitleSplitPipe } from '../../_Shared/Pipes/TitleSplit.pipe';
import { BookDeleteComponent } from './BookDelete/BookDelete.component';
import { BookEditComponent } from './BookEdit/BookEdit.component';
import { BookOptionsComponent } from './BookOptions.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
  ],
  declarations: [
    BookOptionsComponent,
    BookDeleteComponent,
    BookEditComponent,
    TitleSplitPipe
  ],
  providers: [],
  exports: [BookOptionsComponent]
})
export class BookOptionsModule { }
