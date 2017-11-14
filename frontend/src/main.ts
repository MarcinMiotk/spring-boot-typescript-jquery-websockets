import {Lead, LeadProvider, LeadProviderFake} from "./Lead";
import {LeadProviderAjax} from "./LeadProviderAjax";
import {Users, UsersProvider, UsersProviderFake} from "./User";
import {UsersProviderAjax} from "./UsersProviderAjax";
import {UIReportBuilder} from "./UIReportBuilder";
import {Notifier} from "./Notifier";

jQuery(function () {

    let fake:boolean = false;


    let leadProvider:LeadProvider;
    let usersProvider:UsersProvider;

    if(fake) {
        leadProvider = new LeadProviderFake();
        usersProvider = new UsersProviderFake();
    } else {
        leadProvider = new LeadProviderAjax();
        usersProvider = new UsersProviderAjax();
    }

    leadProvider.get((lead:Lead)=> {
        $("p.lead").text(lead.name);
    });

    usersProvider.get((users:Users)=> {
        new UIReportBuilder("table.table tbody").apply(users);
    });

    let notifier:Notifier = new Notifier();
    notifier.connect();
})