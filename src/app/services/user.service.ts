import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../components/shared/model/user';
import { baseUrl } from '../config/api';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`/users`);
  }

  register(user: User) {
    return this.http.post(baseUrl + '/register', user);
  }

  delete(id: number) {
    return this.http.delete(`/users/${id}`);
  }
}
