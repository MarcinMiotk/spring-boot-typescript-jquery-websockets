import {Users} from "./User";

export class UIReportBuilder {

    private readonly location:string;

    constructor(location:string) {
        this.location = location;
    }

    apply(users:Users):void {
        $(this.location + " tr").remove();
        let tBody:JQuery = $(this.location);
        for(let user of users.users) {
            let tr:JQuery = jQuery("<tr>");
            let column_1:JQuery = jQuery("<th>");
            let column_2:JQuery = jQuery("<td>");
            let column_3:JQuery = jQuery("<td>");

            column_1.attr("scope", "row");
            column_1.text(user.sequence);
            column_2.text(user.name);
            column_3.text(user.username);

            tr.append(column_1);
            tr.append(column_2);
            tr.append(column_3);

            tBody.append(tr);
        }
    }
}


