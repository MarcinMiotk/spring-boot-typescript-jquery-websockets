export interface Users {
    all:number;
    users:User[];
}

export interface User {
    sequence:number;
    name:string;
    username:string;
}

export interface UsersProvider {

    get(callback: (l:Users)=>void):void;
}

export class UsersProviderFake implements UsersProvider {
    get(callback: (l: Users) => void): void {
        callback({
            "all": 2,
            "users": [
                {
                    "sequence": 1,
                    "name": "Mark Otto",
                    "username": "@mdoa"
                },
                {
                    "sequence": 2,
                    "name": "De Vries",
                    "username": "@mdob"
                }
            ]
        });
    }
}