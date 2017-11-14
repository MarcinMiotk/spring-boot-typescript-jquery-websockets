export interface Lead {
    name:string;
}

export interface LeadProvider {

    get(callback: (l:Lead)=>void):void;
}

export class LeadProviderFake implements LeadProvider {
    get(callback: (l: Lead) => void): void {
        callback({
            name: "Lorem ipsum dolor sit amet quam. Phasellus laoreet condimentum, pulvinar ut, pulvinar mollis, orci ac turpis egestas. Mauris rutrum, est diam magna sapien, nec turpis id consequat porttitor. Maecenas blandit velit nec erat. Integer quis viverra mattis. Pellentesque placerat. Mauris luctus eget, dolor. Aliquam nonummy, erat. Vestibulum metus nec est. Aliquam commodo ipsum dolor quam, lobortis mauris rhoncus nunc, fringilla gravida. Pellentesque laoreet enim. Aliquam erat eu mauris tincidunt lorem, tempus nunc sem, lobortis metus. Class aptent taciti sociosqu ad."
        });
    }
}
