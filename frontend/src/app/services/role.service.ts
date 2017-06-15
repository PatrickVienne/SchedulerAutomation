import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Handler } from '../shared/errorhandler';
import 'rxjs/add/operator/toPromise';

import { Role } from '../models/role';

@Injectable()
export class RoleService {

  private roleUrl = 'http://localhost:8081/role';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getRoles(): Promise<Role[]> {
    return this.http.get(this.roleUrl + "/get_roles")
      .toPromise()
      .then(response => response.json() as Role[])
      .catch(Handler.handleError);
  }

  get(id: number): Promise<Role> {
    return this.http.get(this.roleUrl + "/get/" + id)
      .toPromise()
      .then(response => response.json() as Role)
      .catch(Handler.handleError);
  }

  update(role: Role): Promise<null> {
    return this.http.put(this.roleUrl + "/update", JSON.stringify(role), { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(Handler.handleError);
  }

  create(role: Role): Promise<null> {
    return this.http.put(this.roleUrl + "/create", JSON.stringify(role), { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(Handler.handleError);
  }

  delete(id: number): Promise<void> {
      const url = `${this.roleUrl}/delete/${id}`;
      return this.http.delete(url, { headers: this.headers })
          .toPromise()
          .then(() => null)
          .catch(Handler.handleError);
  }
}


