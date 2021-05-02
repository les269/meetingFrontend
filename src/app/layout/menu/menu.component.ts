import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // @Input() value: Observable<Menu[]>;
  @Input() menu!: MatSidenav;
  @Output() getTitle = new EventEmitter<string>();

  ngOnInit() { }

  addSetTitle(evt: any) {
    this.getTitle.emit(evt);
    this.menu.close()
  }
}
