import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
   selector: "app-inventory",
   styleUrl: "./inventory.component.scss",
   templateUrl: "./inventory.component.html",
   standalone: true,
   imports: [
      MatToolbarModule,
      MatButtonModule,
      RouterLink,
      RouterLinkActive,
      RouterOutlet,
   ],
})
export class InventoryComponent {}
