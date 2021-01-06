import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { ListagemComponent } from './listagem.component';
import { ListagemRoutingModule } from './listagem-routing.modules';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    // DropdownModule,
    PanelModule,
    InputMaskModule,
    InputTextModule,
    TableModule,
    ToastModule,
    ListagemRoutingModule,
  ],
  declarations: [ListagemComponent, FormComponent],
  providers: [ConfirmationService],
})
export class ListagemModule { }
