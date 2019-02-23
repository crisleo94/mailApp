import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SentComponent } from './components/sent/sent.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { SendComponent } from './components/send/send.component';
import { DeletedComponent } from './components/deleted/deleted.component';
import { HomeComponent } from './components/home/home.component';
import { appRutas } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    SentComponent,
    InboxComponent,
    SendComponent,
    DeletedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRutas,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
