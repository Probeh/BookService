import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { BookOptions, BookService } from '../Book.service';

@Component({
  selector: 'app-BookOptions',
  templateUrl: './BookOptions.component.html',
  styleUrls: ['./BookOptions.component.css']
})
export class BookOptionsComponent implements OnInit {
  // Properties
  @ViewChild('template') private template;
  private modalRef: BsModalRef;
  public  options: BookOptions;

  constructor(private bookService: BookService, private modalService: BsModalService) { }

  ngOnInit() {
    this.bookService.showModal
      .subscribe((options: BookOptions) => {
        this.options = options;
        this.loadModal(this.template);
      });
  }

  private loadModal(template: TemplateRef<any> = this.template) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  public closeModal() {
    this.modalRef.hide();
  }
}
