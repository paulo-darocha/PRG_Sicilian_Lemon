import { provideHttpClient, withInterceptors } from "@angular/common/http";
import {
   ApplicationConfig,
   importProvidersFrom,
   makeEnvironmentProviders,
} from "@angular/core";
import { provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { initializeApp } from "firebase/app";
import { environment } from "../environments/environment";
import { routes } from "./app.routes";
import { AuthMode } from "./auth/auth.enum";
import { authFactory } from "./auth/auth.factory";
import { AuthHttpInterceptor } from "./auth/auth.http.interceptor";
import { AuthService } from "./auth/auth.service";
import { provideUiService } from "./common/ui.service";

export const appConfig: ApplicationConfig = {
   providers: [
      provideAnimationsAsync(),
      provideHttpClient(withInterceptors([AuthHttpInterceptor])),
      provideRouter(routes),
      provideStore(),
      provideEffects(),
      provideStoreDevtools({
         maxAge: 25,
         logOnly: environment.production,
         connectInZone: true,
      }),
      { provide: AuthService, useFactory: authFactory },
      provideUiService(),
   ],
};

