import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";
import { room } from "src/app/type/room";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomApi {
  url: string = environment.backendPath;
  constructor() { }

  public getRoomList(): Observable<any> {
    return ajax(`${this.url}/room/list`)
      .pipe(map(res => res.response));
  }

  public getReservedList(roomNumber: any): Observable<room[]> {
    return ajax(`${this.url}/reserved/list?roomNumber=${roomNumber}`)
      .pipe(map(res => res.response));
  }

  public deleteReserved(handle: any): Observable<any> {
    return ajax.delete(`${this.url}/reserved/delete?handle=${handle}`)
      .pipe(map(res => res.response));
  }

  public addReservation(req: any): Observable<any> {
    return ajax.post(`${this.url}/room/reserved/add`, req,
      { 'Content-Type': 'application/json;charset=utf-8' })
      .pipe(map(res => res.response));
  }

}
