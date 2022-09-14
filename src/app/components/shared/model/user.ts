import {IUser} from '../interfaces/user.interface';
import {v4 as uuidv4} from 'uuid';

export class User {
  email: string;
  token: string;
  id?: string;
  displayName?: string;

  constructor(user: IUser) {
    this.id = this.randomId();
    this.email = user.email;
    this.token = user.token;
    this.displayName = user.email.split('@')[0];
  }
  randomId(): string {
    return uuidv4();
  }
}
