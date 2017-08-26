import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-business-card-directory',
  templateUrl: './business-card-directory.component.html',
  styleUrls: ['./business-card-directory.component.css']
})
export class BusinessCardDirectoryComponent implements OnInit {
  @Input() x: any ;
  @Output() xx = new EventEmitter(); // not aliased
  _x = 0;
  constructor() { }

  ngOnInit() {
    this.xx.emit(this._x);
  }
  change(x) {
    this.xx.emit(x);
  }

}
