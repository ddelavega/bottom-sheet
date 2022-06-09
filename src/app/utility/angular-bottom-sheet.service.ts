import { ChangeDetectorRef, Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, timeInterval } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AngularBottomSheetService {
  apiMock = 'https://6239d4e1bbe20c3f66cac67f.mockapi.io/productos/detalle';


  constructor(
    private http: HttpClient,
  ) {}

  millisToTime = function (ms): string {
    const x = ms / 1000;
    const seconds = Math.floor(x % 60);
    // x /= 60;
    // let minutes = Math.floor(x % 60);
    // x /= 60;
    // let hours = Math.floor(x % 24);
    // x /= 24;
    // let days = Math.floor(x);
    const msg = `Recibido ${seconds === 0 ? x : seconds} seg. aprox.`;
    return msg;
  };

  getAllAbmItems(): Observable<any> {
    return this.http.get<any>(this.apiMock).pipe(
      timeInterval(),
      map((data) => {
        console.log('Datos', data.value);
        console.log('tiempo de demora', this.millisToTime(data.interval));
        console.log('Dato crudo:', data);
        return data.value;
      }),
    );
  }
}
