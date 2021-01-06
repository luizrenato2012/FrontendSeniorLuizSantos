import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  constructor(private router: Router) {
    console.log('Cosntrutcto cadastro');
  }

  ngOnInit(): void {
    console.log('Criando cadastro');
  }

  onBack() {
    this.router.navigate(['listagem']);
  }
}
