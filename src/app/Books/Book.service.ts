import { EventEmitter, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../_Shared/Models/Book';
import { AlertService, AlertType } from '../_Shared/Services/Alert.service';
import { DataService } from '../_Shared/Services/Data.service';

@Injectable()
export class BookService {
  // Properties
  private dateReg = '^(?:(?:10|12|0?[13578])/(?:3[01]|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|(?:11|0?[469])/(?:30|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/(?:2[0-8]|1[0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/29/[2468][048]00|0?2/29/[3579][26]00|0?2/29/[1][89][0][48]|0?2/29/[2-9][0-9][0][48]|0?2/29/1[89][2468][048]|0?2/29/[2-9][0-9][2468][048]|0?2/29/1[89][13579][26]|0?2/29/[2-9][0-9][13579][26])$';
  public showModal: EventEmitter<BookOptions> = new EventEmitter<BookOptions>();
  public currentItem: Book;

  constructor(private dataService: DataService, private alertService: AlertService, private router: Router) { }

  public loadDialog(service: ServiceType, book?: Book) {
    this.currentItem = book;
    this.showModal.emit({ service, book });
  }

  public createBook(item: Book) {
    this.dataService.createBook(item);
    this.router.navigate(['/']);
    this.alertService.Show({ type: AlertType.Success, title: 'Book Created', content: 'Item Successfully Created' });
  }

  public updateBook(item: Book) {
    this.dataService.updateBook(item);
    this.router.navigate(['/']);
    this.alertService.Show({ type: AlertType.Success, title: 'Book Updated', content: 'Item Successfully Updated' });
  }

  public removeBook(item: Book) {
    this.dataService.removeBook(item);
    this.alertService.Show({ type: AlertType.Info, title: 'Book Deleted', content: 'Item Successfully Removed' });
  }

  public formBuilder(item?: Book): FormGroup {
    if (item) {
      return new FormGroup({
        details: new FormGroup({
          id: new FormControl(item.id),
          title: new FormControl(item.volumeInfo.title, [Validators.required, this.titleValidator.bind(this)]),
          published: new FormControl(item.volumeInfo.publishedDate, [Validators.required, Validators.pattern(this.dateReg)]),
          author: new FormControl(item.volumeInfo.authors[0], [Validators.required])
        }),
      });
    }
    else {
      return new FormGroup({
        details: new FormGroup({
          id: new FormControl(Math.floor(Math.random() * 100000) + 10000),
          title: new FormControl('', [Validators.required, this.titleValidator.bind(this)]),
          published: new FormControl('', [Validators.required, Validators.pattern(this.dateReg)]),
          author: new FormControl('', [Validators.required])
        }),
      });
    }
  }

  private setAuthors(item: Book): FormControl[] | null {
    var controls: FormControl[] = new Array<FormControl>();
    item.volumeInfo.authors.forEach(author => {
      controls.push(new FormControl(author, Validators.required));
    });
    return controls;
  }

  private titleValidator(control: FormControl): { [s: string]: boolean } {
    if (this.currentItem && this.dataService.titleExists(control.value) && control.value.toLowerCase() != this.currentItem.volumeInfo.title.toLowerCase()) {
      return { 'Title Exists': true };
    }
    else if (this.dataService.titleExists(control.value)) {
      return { 'Title Exists': true };
    }
    return null;
  }
}

export interface BookOptions {
  service: ServiceType;
  book?: Book;
}
export enum ServiceType {
  Create,
  Edit,
  Delete
}