import ActivitiesComponent from "../components/ActivitiesComponent";
import ContactUsComponent from "../components/ContactUsComponent";
import DeliverablesComponent from "../components/DeliverablesComponent";
import HomeComponent from "../components/HomeComponent"
import MaterialsComponent from "../components/MaterialsComponent";
import ObjectivesComponent from "../components/ObjectivesComponent";
import PartnersComponent from "../components/PartnersComponent"

const RouteNames = [
    {
        name: "/",
        component: <HomeComponent />
    },

    {
        name: "/home",
        component: <HomeComponent />
    },

    {
        name: "/partners",
        component: <PartnersComponent />
    },

    {
        name: "/objectives",
        component: <ObjectivesComponent />
    },

    {
        name: "/activities",
        component: <ActivitiesComponent />
    },
    
    {
        name: "/deliverables",
        component: <DeliverablesComponent />
    },
    
    {
        name: "/materials",
        component: <MaterialsComponent />
    },

    {
        name: "/contactus",
        component: <ContactUsComponent />
    },
];

export const ROOT = {
    name: "/",
    component: <HomeComponent />
};

export const HOME = {
    name: "/",
    component: <HomeComponent />
};

export const PARTNERS = {
    name: "/partners",
    component: <PartnersComponent />
};

export const OBJECTIVES = {
    name: "/objectives",
    component: <ObjectivesComponent />
};

export const ACTIVITIES = {
    name: "/activities",
    component: <ActivitiesComponent />
};

export const DELIVERABLES = {
    name: "/deliverables",
    component: <DeliverablesComponent />
};

export const MATERIALS = {
    name: "/materials",
    component: <MaterialsComponent />
};

export const CONTACTUS = {
    name: "/contactus",
    component: <ContactUsComponent />
};

export default RouteNames;
