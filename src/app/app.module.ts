import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//routes
import { APP_ROUTING } from "./routes";

//services
import { UserService } from "./services/user.service";

// Pipes
import { KeysPipe } from './pipes/keys.pipe';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { JsonPipe } from './pipe/json.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    KeysPipe,
    JsonPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
