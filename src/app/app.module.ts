import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DashComponent } from './layout/dash/dash.component';
import { FireComponent } from './svg/fire/fire.component';
import { WaveComponent } from './svg/wave/wave.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { TestComponent } from './components/test/test.component';
import { ButtonComponent } from './common/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    FireComponent,
    WaveComponent,
    ProgressbarComponent,
    TestComponent,
    ButtonComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
