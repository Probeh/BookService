import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Book } from '../../../_Shared/Models/Book';
import { BookService } from '../../Book.service';

@Component({
  selector: 'app-BookEdit',
  templateUrl: './BookEdit.component.html',
  styleUrls: ['./BookEdit.component.css']
})
export class BookEditComponent implements OnInit {
  // Properties
  @Input() public bookItem: Book;
  @Input() public createMode: boolean;
  @Output() public closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  public booksForm: FormGroup;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.booksForm = this.createMode ? this.bookService.formBuilder() : this.bookService.formBuilder(this.bookItem);
    this.booksForm.valueChanges
      .subscribe(() => {
        console.log(this.booksForm);
      });
  }

  public canSubmit(): boolean {
    if (!this.createMode) {
      return this.booksForm.valid || this.booksForm.get('details').get('published').value == this.bookItem.volumeInfo.publishedDate &&
        this.booksForm.get('details').get('author').valid && this.booksForm.get('details').get('title').valid;
    }
    else return this.booksForm.valid ||
      this.booksForm.get('details').get('author').valid && this.booksForm.get('details').get('title').valid &&
      this.booksForm.get('details').get('published').valid;
  }

  public saveChanges() {
    this.bookItem.volumeInfo.publishedDate = this.booksForm.value['details'].published;
    this.bookItem.volumeInfo.title = this.booksForm.value['details'].title;
    this.bookItem.volumeInfo.authors.unshift(this.booksForm.value['details'].author);
    this.bookService.updateBook(this.bookItem);
    this.closeModal.emit(true);
  }

  public createBook() {
    var book: Book = new Book();
    book.id = this.booksForm.value['details'].id;
    book.volumeInfo = { publishedDate: this.booksForm.value['details'].published, title: this.booksForm.value['details'].title, authors: new Array<string>(this.booksForm.value['details'].author), imageLinks: { smallThumbnail: 'http://www.umlib.com/images/pdf_nopreview.png', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAYsT9tW8TYirUm-msP4lWP7D4Ez4GHGwztoIKmBbt4-zHNFH' } };
    this.bookService.createBook(book);
    this.closeModal.emit(true);
  }

  public cancel() {
    this.closeModal.emit(true);
  }
}
