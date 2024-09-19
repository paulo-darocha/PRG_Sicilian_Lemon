import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";

@Component({
   selector: "app-manager",
   standalone: true,
   imports: [
      MatToolbarModule,
      MatButtonModule,
      RouterLink,
      RouterLinkActive,
      MatToolbarModule,
      MatIconModule,
      RouterModule,
   ],
   templateUrl: "./manager.component.html",
   styleUrl: "./manager.component.scss",
})
export class ManagerComponent {}
