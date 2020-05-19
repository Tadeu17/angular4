import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoService } from './shared/demo.service';
import { DemoComponent } from './components/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
