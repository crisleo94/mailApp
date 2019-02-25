import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { InboxComponent } from './components/inbox/inbox.component';
import { SentComponent } from './components/sent/sent.component';
import { DeletedComponent } from './components/deleted/deleted.component';
import { SendComponent } from './components/send/send.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { LoginGuard } from './components/login/login.guard';
import { ErrorComponent } from './components/error/error.component';
import { NoLoginGuard } from './components/login/no-login.guard';

const rutas: Routes = [
    { path: 'Error', component: ErrorComponent, canActivate: [LoginGuard] },
    { path: 'Home', component: HomeComponent, canActivate: [LoginGuard] },
    { path: 'Login',  component: LoginComponent, canActivate: [NoLoginGuard] },
    { path: 'Bandeja de Entrada', component: InboxComponent, canActivate: [LoginGuard]},
    { path: 'Enviados', component: SentComponent, canActivate: [LoginGuard] },
    { path: 'Papelera', component: DeletedComponent, canActivate: [LoginGuard] },
    { path: 'Nuevo (+)', component: SendComponent, canActivate: [LoginGuard] },
    { path: 'Sidebar', component: SidebarComponent }, 
    { path: '', pathMatch: 'full', redirectTo: 'Login'},
    { path: '**', pathMatch: 'full', redirectTo: 'Login'},
    { path: 'App', component: AppComponent },
    
]

export const appRutas = RouterModule.forRoot(rutas);