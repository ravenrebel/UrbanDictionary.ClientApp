import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Role, User } from '../model/user';

@Injectable()
export class CurrentUserService {
    public email$: Observable<string>;
    public username$: Observable<string>;
    public user$: Observable<User>;
    public role$: Observable<Role>;
    public isAuthentificated$: Observable<boolean>;

    private email: BehaviorSubject<string>;
    private username: BehaviorSubject<string>;
    private role: BehaviorSubject<Role>;
    private user: BehaviorSubject<User>;
    private isAuthentificated: BehaviorSubject<boolean>;

    constructor() {
        this.email = new BehaviorSubject<string>(null);
        this.email$ = this.email.asObservable();

        this.username = new BehaviorSubject<string>(null);
        this.username$ = this.username.asObservable();

        this.role = new BehaviorSubject<Role>(null);
        this.role$ = this.role.asObservable();

        this.user = new BehaviorSubject<User>(null);
        this.user$ = this.user.asObservable();

        this.isAuthentificated = new BehaviorSubject<boolean>(null);
        this.isAuthentificated$ = this.isAuthentificated.asObservable();
    }

    setCurrentUser(user: User): void {
        if (user) {
            this.email.next(user.email);
            this.username.next(user.username);
            this.role.next(user.role);
            this.user.next(user);
            this.isAuthentificated.next(true);
        }
    }

    logout(): void {
        this.email.next(null);
        this.username.next(null);
        this.role.next(null);
        this.user.next(null);
        this.isAuthentificated.next(false);
    }

    hasAuthentification(): Observable<boolean> {
        debugger;
        return this.isAuthentificated$;
    }
}
