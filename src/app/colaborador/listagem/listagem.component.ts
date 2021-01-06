import { Component, OnInit } from '@angular/core';
import { ColaboradorResumo, Colaborador } from '../colaborador';
import { ColaboradorService } from '../colaborador.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit {
  colaboradores: ColaboradorResumo[];
  colaborador: Colaborador;
  exibe = false;
  totalRecords = 0;
  size = 5;
  page = 0;

  constructor(
    private service: ColaboradorService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    console.log('criando listagem');
  }

  ngOnInit(): void {
    console.log('Listagem de colaboradores');
    this.onFind();
  }

  onFind() {
    this.service.listaTodos(this.page, this.size).subscribe((response) => {
      this.colaboradores = response.content;
      this.totalRecords = response.totalElements;
    });
  }

  onSort() {

  }

  onAdd() {
    this.router.navigate(['cadastro']);
  }

  onView(id: number) {
    this.service.busca(id).subscribe(
      (response) => {
        this.colaborador = response;
        this.exibe = true;
      },
      (error) => {
        console.log(error);
        this.exibe = false;
        this.showMessage('Erro ao listar!', 'error');
      }
    );
  }

  onDelete(id: number) {
    console.log(`On Delete ${id}`);
    this.confirmationService.confirm({
      header: 'Listagem de Colaborador',
      message: 'Confirma a exclusão do colaborador?',
      accept: () => {
        this.deleteEmpresa(id);
      },
    });
  }

  private deleteEmpresa(id: number) {
    console.log('Deletando ' + id);
    this.service.deleta(id).subscribe(
      (response) => {
        this.showMessage('Registro excluido com sucesso!', 'success');
        this.onFind();
      },
      (error) => {
        console.log(error);
        this.showMessage('Erro ao excluir!', 'error');
      }
    );
  }

  showMessage(mensagem: string, tipo: string) {
    this.messageService.add({
      severity: tipo,
      summary: 'Listagem de Colaboradores',
      detail: mensagem,
    });
  }

  closeDialog(event) {
    this.exibe = event;
    console.log('listagem - close dialog ' + this.exibe);
  }

  onChangePage(event: LazyLoadEvent) {
    const paginaAtual = event.first / event.rows;
    this.page = paginaAtual;
    this.onFind();
  }
}
