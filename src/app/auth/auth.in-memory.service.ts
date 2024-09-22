import { Injectable } from "@angular/core";
import { sign } from "fake-jwt-sign";
import { Observable, of, throwError } from "rxjs";
import { PhoneType, User } from "../user/user/user";
import { Role } from "./auth.enum";
import { AuthService, IAuthStatus, IServerAuthResponse } from "./auth.service";

@Injectable({ providedIn: "root" })
export class InMemoryAuthService extends AuthService {
   constructor() {
      super();
      console.warn(
         "You're using the InMemoryAuthService. Do not use this service in production."
      );
   }

   private defaultUser = User.Build({
      _id: "5da01751da27cc462d265913",
      email: "paulo@gmail.com",
      name: { first: "Paulo", last: "Gonçalves" },
      picture:
         "https://media.licdn.com/dms/image/D4D03AQGoMV9XyRCRXQ/profile-displayphoto-shrink_200_200/0/1698665708163?e=2147483647&v=beta&t=euBxu1zbi_sGc-viPyfCuDB9LRs0OepsSOsb60jWosg",
      role: Role.Manager,
      dateOfBirth: new Date(1980, 4, 4),
      userStatus: true,
      address: {
         line1: "Rua Estado da Índia, 454",
         city: "Vila Nova de Gaia",
         state: "Porto",
         zip: "4430094",
      },
      level: 2,
      phones: [{ id: 0, type: PhoneType.Mobile, digits: "9159613810" }],
   });

   protected override authProvider(
      email: string,
      password: string
   ): Observable<IServerAuthResponse> {
      email = email.toLowerCase();
      if (!email.endsWith("@test.com")) {
         return throwError(() => `Failed to login. Emais needs to end with @test.com.`);
      }
      const authStatus = {
         isAuthenticated: true,
         userId: this.defaultUser._id,
         userRole: email.includes("cashier")
            ? Role.Cashier
            : email.includes("clerk")
            ? Role.Clerk
            : email.includes("manager")
            ? Role.Manager
            : Role.None,
      } as IAuthStatus;

      this.defaultUser.role = authStatus.userRole;

      const authResponse = {
         accessToken: sign(authStatus, "secret", { expiresIn: "1h", algorithm: "none" }),
      } as IServerAuthResponse;

      return of(authResponse);
   }

   protected override transformJwtToken(token: IAuthStatus): IAuthStatus {
      return token;
   }

   protected override getCurrentUser(): Observable<User> {
      return of(this.defaultUser);
   }
}
