import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
   { path: "", redirectTo: "home", pathMatch: "full" },
   { path: "home", component: HomeComponent },
   // { path: 'manager', children: managerModuleRoutes }, // Example of eager loading
   {
      path: "manager",
      loadChildren: () => import("./manager/manager.module").then((m) => m.ManagerModule),
   },
   {
      path: "inventory",
      loadChildren: () =>
         import("./inventory/inventory.module").then((m) => m.InventoryModule),
   },
];
