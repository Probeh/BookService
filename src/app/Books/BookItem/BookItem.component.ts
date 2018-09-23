import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../_Shared/Models/Book';
import { BookService, ServiceType } from '../Book.service';

@Component({
  selector: 'app-BookItem',
  templateUrl: './BookItem.component.html',
  styleUrls: ['./BookItem.component.css']
})
export class BookItemComponent implements OnInit {
  // Properties
  @Input() public bookItem: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  public deleteBook() {
    this.bookService.loadDialog(ServiceType.Delete, this.bookItem);
  }
  public editBook() {
    this.bookService.loadDialog(ServiceType.Edit, this.bookItem);
  }
  public showProfile() {
  }
}
