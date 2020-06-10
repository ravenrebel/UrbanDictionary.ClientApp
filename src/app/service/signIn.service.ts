import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { GlobalApiService } from './global-api.service';
import { SignInDto } from '../model/signIn-dto';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { map } from 'rxjs/operators';
import { CurrentUserService } from './current-user.service';
import { SignUpDto } from '../model/signUp-dto';
@Injectable()

export class SignInService {
    constructor(
        private http: HttpClient,
        private globalService: GlobalApiService,
        private currentUserService: CurrentUserService) {
    }
    signIn(model: SignInDto) {
        return this.http.post<User>(this.globalService.LOG_IN_API, model).pipe(
            map((user: User) => {
                if (user) {
                    this.currentUserService.setCurrentUser(user);
                    return true;
                } else {
                    return false;
                }
            }));
    }

    signUp(model: SignUpDto) {
        return this.http.post<User>(this.globalService.SIGN_UP_API, model).pipe(
            map((user: User) => {
                if (user) {
                    this.currentUserService.setCurrentUser(user);
                    return true;
                } else {
                    return false;
                }
            }));
    }
}
