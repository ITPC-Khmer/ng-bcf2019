import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  messages: any[];

  loading = false;
  total = 1000;
  page = 1;
  limit = 20;
  constructor() { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void {
    this.loading = true;
    /*this.messageService.getMessages({ page: this.page, limit: this.limit }).subscribe(res => {
      this.total = res.total;
      this.messages = res.messages;
      this.loading = false;
    });*/
  }


  goToPage(n: number): void {
    this.page = n;
    this.getMessages();
  }

  onNext(): void {
    this.page++;
    this.getMessages();
  }

  onPrev(): void {
    this.page--;
    this.getMessages();
  }

}
