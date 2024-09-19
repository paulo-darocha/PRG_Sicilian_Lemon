import { RouterModule, Routes } from "@angular/router";
import { ManagerComponent } from "./manager.component";
import { NgModule } from "@angular/core";
import { ManagerHomeComponent } from "./manager-home/manager-home.component";

const routes: Routes = [
   {
      path: "",
      component: ManagerComponent,
      children: [{ path: "", component: ManagerHomeComponent }],
   },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class MangerRoutingComponent {}
