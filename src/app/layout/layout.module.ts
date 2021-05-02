
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedMaterialModule } from '../share/shared-material.module';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports: [
    SharedMaterialModule,
    TranslateModule,
    RouterModule, // 為了使用routerLink
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    // FooterComponent,
    MenuComponent

  ],
  entryComponents: [
  ],
})
export class LayoutModule { }
