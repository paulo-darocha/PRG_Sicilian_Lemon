import { AsyncPipe } from "@angular/common";
import { NgOptimizedImage } from "@angular/common";
import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { DomSanitizer } from "@angular/platform-browser";
import { RouterLink, RouterOutlet } from "@angular/router";
import { MediaObserver } from "@ngbracket/ngx-layout";
import { FlexModule } from "@ngbracket/ngx-layout/flex";
import { combineLatest } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthService } from "./auth/auth.service";
import { NavigationMenuComponent } from "./navigation-menu/navigation-menu.component";

@Component({
   selector: "app-root",
   templateUrl: "./app.component.html",
   styleUrl: "./app.component.scss",
   standalone: true,
   imports: [
      FlexModule,
      RouterLink,
      NavigationMenuComponent,
      RouterOutlet,
      AsyncPipe,
      MatIconModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      NgOptimizedImage,
   ],
})
export class AppComponent implements OnInit {
   private readonly destroyRef = inject(DestroyRef);
   opened!: boolean;

   constructor(
      iconRegistry: MatIconRegistry,
      sanitizer: DomSanitizer,
      public authService: AuthService,
      public media: MediaObserver
   ) {
      iconRegistry.addSvgIcon(
         "lemon",
         sanitizer.bypassSecurityTrustResourceUrl("assets/lemon.svg")
      );
   }

   ngOnInit() {
      combineLatest([this.media.asObservable(), this.authService.authStatus$])
         .pipe(
            tap(([mediaValue, authStatus]) => {
               if (!authStatus?.isAuthenticated) {
                  this.opened = false;
               } else {
                  if (mediaValue[0].mqAlias === "xs") {
                     this.opened = false;
                  } else {
                     this.opened = true;
                  }
               }
            }),
            takeUntilDestroyed(this.destroyRef)
         )
         .subscribe();
   }
}
