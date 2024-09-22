import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { LoginComponent } from "../login/login.component";

@Component({
   selector: "app-home",
   templateUrl: "./home.component.html",
   styleUrl: "./home.component.scss",
   standalone: true,
   imports: [AsyncPipe, LoginComponent],
})
export class HomeComponent {
   constructor(public authService: AuthService) {}
}
