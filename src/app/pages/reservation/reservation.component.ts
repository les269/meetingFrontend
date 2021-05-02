import { RoomApi } from './../../core/api/roomApi.service';
import { Component, OnInit } from '@angular/core';
import { room } from 'src/app/type/room';
import { MessageBoxService } from 'src/app/core/services/messageBox.service';
import { ConfirmationService } from 'primeng/api';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  roomList: room[] = [];
  selectedRoom!: room;
  form: room = {};
  minDate!: Date;
  maxDate!: Date;
  constructor(
    private roomApi: RoomApi,
    private msgBox: MessageBoxService,
    private languageService: LanguageService) { }

  ngOnInit(): void {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    this.roomApi.getRoomList()
      .subscribe(res => this.roomList = res);
  }
  //預約
  submit(): void {
    if (!this.selectedRoom) {
      return this.msgBox.showError('請選擇會議室');
    }
    if (!this.form?.people) {
      return this.msgBox.showError('請填寫預約人');
    }
    if (!this.form?.reservedDate) {
      return this.msgBox.showError('請填寫預約日期');
    }
    if (!this.form?.startTime || !this.form?.endTime) {
      return this.msgBox.showError('請填寫預約時間');
    }
    if (this.form.startTime > this.form.endTime) {
      return this.msgBox.showError('預約時間錯誤');
    }
    if (!this.form?.purpose) {
      return this.msgBox.showError('請填寫預約的會議目的');
    }
    const date = this.form.reservedDate;
    const start = this.form.startTime;
    const end = this.form.endTime;
    let req = {
      roomHandle: this.selectedRoom.handle,
      people: this.form.people,
      purpose: this.form.purpose,
      reservedDate: new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 00:00:00`),
      startTime: `${start.getHours()}:${start.getMinutes()}`,
      endTime: `${end.getHours()}:${end.getMinutes()}`
    }
    //送出預約
    this.roomApi.addReservation(req)
      .subscribe(() => {
        this.form = {};
        this.msgBox.showMessage('預約成功');
      }, (res) => {
        this.msgBox.showError(res.response.message);
      })
  }

}
