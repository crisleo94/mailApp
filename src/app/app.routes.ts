import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { SentComponent } from './components/sent/sent.component';
import { DeletedComponent } from './components/deleted/deleted.component';
import { SendComponent } from './components/send/send.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';




const rutas: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Login',  component: LoginComponent },
    { path: 'Bandeja de Entrada', component: InboxComponent},
    { path: 'Enviados', component: SentComponent },
    { path: 'Papelera', component: DeletedComponent },
    { path: 'Nuevo (+)', component: SendComponent },
    { path: 'Sidebar', component: SidebarComponent }, 
    { path: '', pathMatch: 'full', redirectTo: 'Login'},
    { path: '**', pathMatch: 'full', redirectTo: 'Login'}
]

export const appRutas = RouterModule.forRoot(rutas);