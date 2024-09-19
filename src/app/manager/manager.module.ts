import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ManagerRoutingModule } from "./manager-routing.module";
import { ManagerHomeComponent } from "./manager-home/manager-home.component";
import { ManagerComponent } from "./manager.component";

@NgModule({
   imports: [CommonModule, ManagerRoutingModule, ManagerHomeComponent, ManagerComponent],
})
export class ManagerModule {}
