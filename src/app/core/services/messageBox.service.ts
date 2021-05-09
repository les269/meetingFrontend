import { ConfirmationService } from 'primeng/api';
import { Injectable } from "@angular/core";
import { AjaxResponse } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {
  constructor(private confirmationService: ConfirmationService) { }

  showError(msg: string, accept?: Function | undefined) {
    this.confirmationService.confirm({
      message: msg,
      header: '錯誤',
      acceptLabel: '確定',
      rejectVisible: false,
      closeOnEscape: false,
      accept: accept
    });
  }
  showMessage(msg: string, accept?: Function | undefined) {
    this.confirmationService.confirm({
      message: msg,
      header: '訊息',
      acceptLabel: '確定',
      rejectVisible: false,
      closeOnEscape: false,
      accept: accept
    });
  }

  showErrMsg(res: AjaxResponse, accept?: Function | undefined) {
    this.confirmationService.confirm({
      message: res.response.message,
      header: '錯誤',
      acceptLabel: '確定',
      rejectVisible: false,
      closeOnEscape: false,
      accept: accept
    });
  }
}
