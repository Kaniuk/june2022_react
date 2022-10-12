import {IUser} from "./interfaces/userInterface";

function sum(a: number, b: number): number {
    return a + b;
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc;
    return someUser;
}

const user: IUser = {
    age: 27,
    gender: 'male',
    name: 'Vasyl'
};

console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);