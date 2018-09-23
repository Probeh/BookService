import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../_Shared/Models/Book';
import { BookService } from '../Book.service';

@Component({
  selector: 'app-BookList',
  templateUrl: './BookList.component.html',
  styleUrls: ['./BookList.component.css']
})
export class BookListComponent implements OnInit {
  // Properties
  @Input() public bookList: Book[] = new Array<Book>();

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

}
