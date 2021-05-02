import { Injectable } from "@angular/core";
import { DialogService } from "primeng/dynamicdialog";
import { SelectDialog } from "../dialog/selectDialog";

@Injectable({
  providedIn: 'root'
})
export class SelectDialogService {
  constructor(public dialogService: DialogService) {

  }

  open(callBackKey: any, cols: any, rowData: any, callfunction: any) {
    this.dialogService.open(SelectDialog, {
      header: '請選擇',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: {
        callBackKey: callBackKey,
        cols: cols,
        rowData: rowData,
        callfunction: callfunction
      }
    });
  }
}
