import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { FlexModule } from "@ngbracket/ngx-layout";

@Component({
   selector: "app-home",
   styles: `div[fxLayout] {margin-top: 32px}`,
   templateUrl: "./home.component.html",
   standalone: true,
   imports: [FlexModule, MatButtonModule, RouterLink],
})
export class HomeComponent {}
