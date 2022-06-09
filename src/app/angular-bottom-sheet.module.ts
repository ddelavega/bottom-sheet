import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularBottomSheetComponent } from './component/angular-bottom-sheet.component';
import { TestingComponent } from './testing/testing.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AngularBottomSheetComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,

  ],
  exports: [
    AngularBottomSheetComponent
  ],
  providers: [],
  bootstrap: [TestingComponent]
})
export class AngularBottomSheetModule { }
