import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListagemComponent } from './listagem.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemComponent,
    // resolve: {
    //   listaMatriz: CadastroResolve,
    //   empresaEdicao: EmpresaEdicaoResolve
    // }
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemRoutingModule {}
