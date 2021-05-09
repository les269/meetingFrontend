import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() menu!: MatSidenav;
  @Input() title!: string;


  ngOnInit() {

  }

  setTitle(evt: string) {
    this.title = evt;
  }

}
