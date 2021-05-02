
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { DynamicDialogModule } from 'primeng/dynamicdialog';


@NgModule({
  exports: [
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ButtonModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    RadioButtonModule,
    RatingModule,
    ToolbarModule,
    SidebarModule,
    CardModule,
    CalendarModule,
    InputMaskModule,
    DynamicDialogModule
  ],
  providers: [ConfirmationService]
})
export class PrimeShareModule {


  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
