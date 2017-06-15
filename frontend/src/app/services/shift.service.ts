import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Handler } from '../shared/errorhandler';
import 'rxjs/add/operator/toPromise';

import { Shift } from '../models/shift';


@Injectable()
export class ShiftService {

  private shiftUrl = 'http://localhost:8081/shift';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getShifts(): Promise<Shift[]> {
    return this.http.get(this.shiftUrl + "/get_shifts")
      .toPromise()
      .then(response => response.json() as Shift[])
      .catch(Handler.handleError);
  }

  get(id: number): Promise<Shift> {
    return this.http.get(this.shiftUrl + "/get/" + id)
      .toPromise()
      .then(response => response.json() as Shift)
      .catch(Handler.handleError);
  }

  update(shift: Shift): Promise<null> {
    return this.http.put(this.shiftUrl + "/update", JSON.stringify(shift), { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(Handler.handleError);
  }

  create(shift: Shift): Promise<null> {
    return this.http.put(this.shiftUrl + "/create", JSON.stringify(shift), { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(Handler.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.shiftUrl}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(Handler.handleError);
  }
}

