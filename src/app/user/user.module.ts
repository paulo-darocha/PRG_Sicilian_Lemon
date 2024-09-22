import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserRoutingModule } from "./user-routing.module";
import { ProfileComponent } from "./profile/profile.component";
import { LogoutComponent } from "./logout/logout.component";

@NgModule({
   imports: [CommonModule, UserRoutingModule, ProfileComponent, LogoutComponent],
})
export class UserModule {}
