import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  template: `
        <p-table [value]="rowData" [paginator]="true" [rows]="5" [dataKey]="key" [responsive]="true" [(selection)]="selectedData" [columns]="cols" selectionMode="single"  (onRowSelect)="selectProduct($event)">
            <ng-template pTemplate="header" let-columns>
                <tr>
                  <th *ngFor="let col of columns">
                    {{col.header}}
                  </th>

                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-rowData let-rowIndex let-columns="columns">
                <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">
                  <td *ngFor="let col of columns">
                    {{rowData[col.field]}}
                  </td>

                </tr>
            </ng-template>
        </p-table>
    `
})
export class SelectDialog {
  key = "";
  rowData: unknown[] = [];
  cols: unknown[] = [];
  selectedData: unknown;
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
    this.rowData = this.config.data.rowData;
    this.cols = this.config.data.cols;
    this.key = this.config.data.callBackKey;
  }

  selectProduct(data: unknown) {
    if (this.config.data.callfunction) {
      this.config.data.callfunction(data);
      this.ref.close();
    }
  }
}
