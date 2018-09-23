import { Component, OnInit } from '@angular/core';
import { Book } from '../_Shared/Models/Book';
import { DataService } from '../_Shared/Services/Data.service';
import { QueryParams } from '../_Shared/Interfaces/QueryParams';
import { BookService, ServiceType } from './Book.service';

@Component({
  selector: 'app-Books',
  templateUrl: './Books.component.html',
  styleUrls: ['./Books.component.css']
})
export class BooksComponent implements OnInit {
  // Properties
  public displayItems: Book[] = new Array<Book>();

  // Default Constructor
  constructor(private dataService: DataService, private bookService: BookService) { }

  ngOnInit() {
    var params: QueryParams[] = [
      { param: 'orderBy', value: 'relevance' },
      { param: 'maxResults', value: '36' }];

    this.dataService.getItems(params)
      .subscribe((result: Book[]) => {
        this.displayItems = result;
      });
    this.dataService.displayList
      .subscribe((result: Book[]) => {
        this.displayItems = result;
      });
  }

  public createBook() {
    this.bookService.loadDialog(ServiceType.Create);
  }
}
