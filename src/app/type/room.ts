export interface room {
  handle?: string,
  roomHandle?: string,
  roomNumber?: string,//會議室號碼
  peopleQty?: number,//可容納人數
  availableTimes?: string,//可預約時間
  reservedTime?: string,//已被預約的時間
  people?: string//預約人
  reservedDate?: Date;
  startTime?: Date;
  endTime?: Date;
  purpose?: string;
}
