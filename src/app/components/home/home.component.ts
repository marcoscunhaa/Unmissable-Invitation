import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  textoCompleto: string = "Só você e eu, no teu restaurante favorito, tomando aquele gin, beijando devagarinho e ver quem resiste mais. Bora?";
  textoDigitando: string = "";
  index: number = 0;
  naoTop = 0;
  naoLeft = 0;
  isBotaoFugindo = false;

  ngOnInit(): void {
    this.digitarTexto();
  }

  digitarTexto() {
    if (this.index < this.textoCompleto.length) {
      this.textoDigitando += this.textoCompleto.charAt(this.index);
      this.index++;
      setTimeout(() => this.digitarTexto(), 40);
    }
  }

  mostrarBalao = false;

  mostrarOcultarBalao() {
    this.mostrarBalao = !this.mostrarBalao;
  }


  mostrarAlerta = false;

  fecharAlerta() {
    this.mostrarAlerta = false;
  }


  aceitarConvite() {
    const numero = '5588997475684';
    const mensagem = encodeURIComponent('Mal posso esperar pra sair com você, gostoso 😈🔥');

    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, '_blank');
  }

  mudarProposta() {
    const numero = '5588997475684';
    const mensagem = encodeURIComponent('Oii gato, tem como mudar o horário ? ❤️');

    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, '_blank');
  }

  ativarFuga() {
    this.isBotaoFugindo = true;
    this.moverBotao();
  }

  moverBotao() {
    const container = document.querySelector('.relative') as HTMLElement;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const buttonWidth = 120;
    const buttonHeight = 60;

    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;

    this.naoLeft = Math.floor(Math.random() * maxX);
    this.naoTop = Math.floor(Math.random() * maxY);
  }


}
