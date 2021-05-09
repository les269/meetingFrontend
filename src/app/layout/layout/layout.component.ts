import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('snav') snav: MatSidenav | undefined;
  @ViewChild('header') header!: NavbarComponent;
  @Input() title = '';
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    let data: any = this.route.firstChild?.data;
    setTimeout(() => {
      this.header.setTitle(data._value.title);
    }, 0)
  }

  getPageTitle(event: string) {
    this.header.setTitle(event);
  }
}
