import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InventoryRoutingModule } from "./inventory-routing.module";
import { InventoryComponent } from "./inventory.component";
import { InventoryHomeComponent } from "./inventory-home/inventory-home.component";

@NgModule({
   imports: [
      CommonModule,
      InventoryRoutingModule,
      InventoryComponent,
      InventoryHomeComponent,
   ],
})
export class InventoryModule {}
