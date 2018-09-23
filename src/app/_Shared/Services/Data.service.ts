import { HttpClient, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { QueryParams } from '../Interfaces/QueryParams';
import { Book } from '../Models/Book';

@Injectable()
export class DataService {
  // Properties
  public resultsList: Book[] = new Array<Book>();
  public displayList: EventEmitter<Book[]> = new EventEmitter<Book[]>();
  public isLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Default Constructor
  constructor(private http: HttpClient) { }

  public getItems(params?: QueryParams[]) {
    return this.http
      .get('books' + this.getParams(params), { observe: 'body' })
      .pipe(
        map((response: HttpResponse<any>) => {
          var result: Book[] = new Array<Book>();
          response['items'].forEach(element => {
            var item = new Book(element['kind'], element['id'], element['etag'], element['selfLink'], element['volumeInfo'], element['saleInfo'], element['accessInfo'], element['searchInfo']);
            this.resultsList.push(item);
            result.push(item);
          });
          this.isLoading.emit(false);
          this.displayList.emit(this.resultsList.slice());
          return result;
        })
      );
  }

  public createBook(result: Book) {
    this.resultsList.unshift(result);
    this.displayList.emit(this.resultsList.slice());
  }

  public updateBook(result: Book) {
    this.resultsList.splice(this.resultsList.findIndex(item => item.id == result.id), 1);
    this.resultsList.unshift(result);
    this.displayList.emit(this.resultsList.slice());
  }

  public removeBook(result: Book) {
    this.resultsList.splice(this.resultsList.findIndex(item => item.id == result.id), 1);
    this.displayList.emit(this.resultsList.slice());
  }

  public getParams(params?: QueryParams[]) {
    var options: string = '';

    if (params) {
      options = '&';
      for (let index = 0; index < params.length; index++) {
        options += `${params[index].param}=${params[index].value}`;
        if (params[index + 1]) { options += '&'; }
      }
    }
    return options;
  }

  public titleExists(title: string): boolean {
    return (this.resultsList.findIndex(book => book.volumeInfo.title.toLowerCase() == title.toLowerCase()) != -1) ? true : false;
  }
}
