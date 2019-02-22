import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './components/inbox/inbox.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SendComponent } from './components/send/send.component';
import { DeletedComponent } from './components/deleted/deleted.component';
import { SentComponent } from './components/sent/sent.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


const routes: Routes = [
{ path: 'Bandeja de Entrada (+)', component: InboxComponent },
{ path: 'Inicio', component: HomeComponent },
{ path: 'LogIn', component: LoginComponent },
{ path: 'Enviados', component: SentComponent },
{ path: 'Eliminados', component: DeletedComponent },
{ path: 'Nuevo', component: SendComponent },
{ path: 'Barra Lateral', component: SidebarComponent }
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
