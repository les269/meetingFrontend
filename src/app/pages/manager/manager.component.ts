import { RoomApi } from './../../core/api/roomApi.service';
import { Component, OnInit } from '@angular/core';
import { room } from 'src/app/type/room';
import { DialogService } from 'primeng/dynamicdialog';
import { SelectDialogService } from 'src/app/core/services/selectDialog.service';
import { MessageBoxService } from 'src/app/core/services/messageBox.service';
import { concatMap, map, tap, toArray } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  providers: [SelectDialogService, DialogService]
})
export class ManagerComponent implements OnInit {
  roomList: room[] = [];
  roomNumber: string = '';

  searchRn = '';

  constructor(public selectDialogService: SelectDialogService, public roomApi: RoomApi, private msgBox: MessageBoxService,) { }

  ngOnInit(): void {

  }

  show(): void {
    this.roomApi.getRoomList()
      .subscribe(res => {
        let cols = [
          { field: 'roomNumber', header: '會議室號碼' },
          { field: 'peopleQty', header: '可容納人數' }]
        this.selectDialogService.open('roomNumber', cols, res, (res: any) => {
          this.roomNumber = res.data.roomNumber;
        });

      })
  }
  searchBtn(rn: string): void {
    if (rn === '') {
      return this.msgBox.showError('請填寫會議室號碼');
    }
    this.search$(rn)
      .subscribe((res: any[]) => {
        this.roomList = res;
        this.searchRn = rn;
        if (res.length == 0) {
          return this.msgBox.showMessage('查無資料');
        }

      }, this.msgBox.showErrMsg)
  }

  search$(rn?: string): Observable<room[]> {

    return this.roomApi.getReservedList(rn)
      .pipe(
        concatMap(res => from(res)),
        map((data: room) => {
          data.roomNumber = rn;
          return data;
        }),
        toArray()
      );

  }

  deleteData(evt: room): void {
    //刪除後搜尋
    this.roomApi.deleteReserved(evt.handle)
      .pipe(
        tap(() => this.msgBox.showMessage('刪除成功')),
        concatMap(() => this.search$(evt.roomNumber))
      ).subscribe((res) => {
        this.roomList = res;
      }, this.msgBox.showErrMsg)
  }

}
