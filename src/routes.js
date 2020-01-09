import Family from "./components/contents/family.jsx";
import Profile from "./components/contents/tabs/profile.jsx";
import Events from "./components/contents/tabs/events.jsx";
import Management from "./components/contents/tabs/management.jsx";
import ManagementAddFamily from "./components/contents/tabs/managementAddFamily.jsx";



var routes = [
  {
    path: "/index",
    name: "Family",
    icon: "ni ni-satisfied text-primary",
    component: Family,
    layout: "/admin"
  },
  {
    path: "/events",
    name: "Events",
    icon: "ni ni-square-pin text-red",
    component: Events,
    layout: "/admin"
  },
  {
    path: "/management",
    name: "Management",
    icon: "ni ni-bullet-list-67 text-green",
    component: Management,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/management-add-family",
    name: "Add Family",
    icon: "ni ni-rocket text-yellow",
    component: ManagementAddFamily,
    layout: "/admin",
    invisible: true
  }
];

export default routes;
