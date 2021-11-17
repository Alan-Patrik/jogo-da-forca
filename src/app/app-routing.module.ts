import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './pages/wrapper/wrapper.component';
import { WinnerComponent } from './components/winner/winner.component';

const routes: Routes = [
  {
    path: "", pathMatch: "full", redirectTo: "/home"
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "game", component: WrapperComponent
  },
  {
    path: "winner", component: WinnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
