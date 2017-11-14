import {Lead, LeadProvider} from "./Lead";
import jQuery = require('jquery');

export class LeadProviderAjax implements LeadProvider {
    get(callback: (l: Lead) => void): void {

        jQuery.getJSON("lead.json", (data, textStatus) => {
            let casted:Lead = data;
            callback(casted);
        });
    }

}