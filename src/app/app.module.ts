import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import {BaithiComponent} from "./baithi/baithi.component";
const appRoutes: Routes = [

  {path:'noidung1',component:BaithiComponent},


];
@NgModule({
  declarations: [
    AppComponent,BaithiComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
