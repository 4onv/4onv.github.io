interface Resource {
    name: string;
    url: string;
}

const resources: Resource[] = [
    { name: "National Inquiry into Missing and Murdered Indigenous Women and Girls", url: "https://www.mmiwg-ffada.ca" },
    { name: "Indian Residential Schools Crisis Line", url: "https://www.irsss.ca" },
    { name: "Assembly of First Nations", url: "https://www.afn.ca" },
    { name: "Indigenous Services Canada", url: "https://www.sac-isc.gc.ca" }
];

resources.forEach(resource => {
    console.log(`${resource.name}: ${resource.url}`);
});
