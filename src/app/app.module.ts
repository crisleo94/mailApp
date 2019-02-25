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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginGuard } from './components/login/login.guard';
import { ErrorComponent } from './components/error/error.component';
import { NoLoginGuard } from './components/login/no-login.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    SentComponent,
    InboxComponent,
    SendComponent,
    DeletedComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRutas,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LoginGuard, NoLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
