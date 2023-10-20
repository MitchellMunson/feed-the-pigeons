import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {ProcessComponent} from "./process/process.component";

const adminRoute: Route = {
  path: 'admin',
  component: AdminComponent,
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
};

const processRoute: Route = {
  path: 'process',
  component: ProcessComponent,
  loadChildren: () => import('./process/process.module').then(m => m.ProcessModule)
}

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  adminRoute,
  processRoute,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
