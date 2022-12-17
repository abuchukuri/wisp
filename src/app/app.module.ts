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
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BlueFireComponent } from './svg/blue-fire/blue-fire.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    FireComponent,
    WaveComponent,
    ProgressbarComponent,
    TestComponent,
    DictionaryComponent,
    BlueFireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
