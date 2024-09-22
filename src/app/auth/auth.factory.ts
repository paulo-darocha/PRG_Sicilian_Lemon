import { environment } from "../../environments/environment";
import { AuthMode } from "./auth.enum";
import { InMemoryAuthService } from "./auth.in-memory.service";

export function authFactory() {
   switch (environment.authMode) {
      case AuthMode.InMemory:
         return new InMemoryAuthService();
      case AuthMode.CustomServer:
         throw new Error("Not yet implemented");
   }
   throw new Error("No Auth Service found");
}
