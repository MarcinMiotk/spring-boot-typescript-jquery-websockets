import {Users, UsersProvider} from "./User";
import jQuery = require('jquery');

export class UsersProviderAjax implements UsersProvider {
    get(callback: (l: Users) => void): void {
        jQuery.getJSON("users.json", (data, textStatus) => {
            let casted:Users = data;
            callback(casted);
        });
    }
}
