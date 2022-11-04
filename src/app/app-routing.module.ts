import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/crud/list/list.component';
import { UpdateComponent } from './pages/crud/update/update.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { title: "Dashboard" }
  },
  {
    path: ':crud/list',
    component: ListComponent,
    data: { title: "Pesquisar" }
  },
  {
    path: ':crud/:id',
    component: UpdateComponent,
    data: { title: "Edição de Registro" }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
