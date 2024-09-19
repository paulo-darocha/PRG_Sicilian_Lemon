import { RouterModule, Routes } from "@angular/router";
import { ManagerComponent } from "./manager.component";
import { NgModule } from "@angular/core";
import { ManagerHomeComponent } from "./manager-home/manager-home.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { ReceiptLookupComponent } from "./receipt-lookup/receipt-lookup.component";

const routes: Routes = [
   {
      path: "",
      component: ManagerComponent,
      children: [
         { path: "", redirectTo: "home", pathMatch: "full" },
         { path: "home", component: ManagerHomeComponent },
         { path: "users", component: UserManagementComponent },
         { path: "receipts", component: ReceiptLookupComponent },
      ],
   },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class ManagerRoutingModule {}
