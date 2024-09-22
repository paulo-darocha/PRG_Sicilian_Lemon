import { Component, Inject, Injectable } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@Component({
   templateUrl: "./simple-dialog.component.html",
   standalone: true,
   imports: [MatDialogModule, MatButtonModule],
})
export class SimpleDialogComponent {
   constructor(
      public dialogRef: MatDialogRef<SimpleDialogComponent, boolean>,
      @Inject(MAT_DIALOG_DATA)
      public data: { title: string; content: string; okText: string; cancelText: string }
   ) {}
}
