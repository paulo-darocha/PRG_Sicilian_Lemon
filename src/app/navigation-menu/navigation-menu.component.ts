import { Component } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
   selector: "app-navigation-menu",
   templateUrl: "./navigation-menu.component.html",
   styleUrl: "./navigation-menu.component.scss",
   imports: [MatListModule, RouterLink, RouterLinkActive],
   standalone: true,
})
export class NavigationMenuComponent {}
