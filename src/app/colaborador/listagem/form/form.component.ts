import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Colaborador } from '../../colaborador';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formColaborador: FormGroup;

  @Input("colaborador")
  colaborador: Colaborador;

  @Input("exibe")
  exibe = true;

  @Output()
  closeDialog = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formColaborador = this.formBuilder.group({
      'cpf': [{ value: '', disabled: true }],
      'nome': [{ value: '', disabled: true }],
      'telefone': [{ value: '', disabled: true }],
      'email': [{ value: '', disabled: true }],
      'dataNascimento': [{ value: '', disabled: true }],
    });
    // this.fillEdits();
    console.log('onInit form');
  }

  fillEdits() {
    if (this.colaborador) {
      this.formColaborador.get('nome').setValue(this.colaborador.nome);
      this.formColaborador.get('cpf').setValue(this.colaborador.cpf);
      this.formColaborador.get('telefone').setValue(this.colaborador.telefone);
      this.formColaborador.get('email').setValue(this.colaborador.email);
      this.formColaborador.get('dataNascimento').setValue(this.colaborador.dataDeNascimento);
    }
  }

  onHide() {
    this.exibe = false;
    this.onClosing(false);
  }

  onClosing(value) {
    value = false;
    this.closeDialog.emit(value);
  }

  onCloseAction() {
    this.onClosing(false);
  }
}
