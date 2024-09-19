import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
   { path: "", redirectTo: "home", pathMatch: "full" },
   { path: "home", component: HomeComponent },
   {
      path: "manager",
      loadChildren: () => import("./manager/manager.module").then((x) => x.ManagerModule),
   },
];
