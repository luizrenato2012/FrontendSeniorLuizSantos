import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./colaborador/cadastro/cadastro.module').then(
        (m) => m.CadastroModule
      ),
  },
  {
    path: 'listagem',
    loadChildren: () =>
      import('./colaborador/listagem/listagem.module').then(
        (m) => m.ListagemModule
      ),
  },
  {
    path: '',
    redirectTo: '/listagem',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
