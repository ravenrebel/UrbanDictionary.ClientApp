export class User {
    username: string;
    email: string;
    role: Role;
}
export enum Role {
    Admin = 1, Moderator, User
}