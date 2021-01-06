import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    PanelModule,
    CadastroRoutingModule,
  ],
})
export class CadastroModule {}
