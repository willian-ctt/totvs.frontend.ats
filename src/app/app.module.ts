import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarCurriculoModalComponent } from './customs/cadastrar-curriculo-modal/cadastrar-curriculo-modal.component';
import { CadastrarVagaModalComponent } from './customs/cadastrar-vaga-modal/cadastrar-vaga-modal.component';
import { CandidatosModalsComponent } from './customs/candidatos-modals/candidatos-modals.component';
import { CreateComponent } from './pages/crud/create/create.component';
import { ListComponent } from './pages/crud/list/list.component';
import { UpdateComponent } from './pages/crud/update/update.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UpdateComponent,
    CreateComponent,
    ListComponent,
    CandidatosModalsComponent,
    CadastrarVagaModalComponent,
    CadastrarCurriculoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
