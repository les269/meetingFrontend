import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('snav') snav: MatSidenav | undefined;
  @ViewChild('header') header: any;
  @Input() title = '';
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    let data: any = this.route.firstChild?.data;
    setTimeout(() => {
      this.header.setTitle(data._value.title);
    }, 0)
  }

  getPageTitle(event: any) {
    this.header.setTitle(event);
  }
}
