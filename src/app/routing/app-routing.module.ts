import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { TableComponent } from '../components/table/table.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { ArchiveComponent } from '../components/archive/archive.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';


const appRoutes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "settings", component: SettingsComponent},
  {path: "archive", component: ArchiveComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "budget", component: TableComponent},
  {path: "**", component: NotFoundComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
