/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard";
// import UserProfile from "views/UserProfile.js";
import TableList from "./views/TableList";
// import Typography from "views/Typography.js";
import Maps from "./views/Maps";
// import Notifications from "views/Notifications.js";
// import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/profile",
  },
  {
    path: "/table",
    name: "Lista de Usuarios",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/profile",
  },
  {
    path: "/maps",
    name: "Proyecciones",
    icon: "nc-icon nc-chart-bar-32",
    component: Maps,
    layout: "/profile",
  },
];

export default dashboardRoutes;
