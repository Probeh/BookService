import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../../_Shared/Models/Book';
import { BookService } from '../../Book.service';

@Component({
  selector: 'app-BookDelete',
  templateUrl: './BookDelete.component.html',
  styleUrls: ['./BookDelete.component.css']
})
export class BookDeleteComponent implements OnInit {
  // Properties
  @Input()  public bookItem: Book;
  @Output() public closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  public confirm() {
    this.bookService.removeBook(this.bookItem);
    this.closeModal.emit(true);
  }

  public cancel() {
    this.closeModal.emit(true);
  }

}
