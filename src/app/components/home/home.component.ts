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

  textoCompleto: string = "Só você e eu, no teu restaurante favorito, tomando aquele gin, uma boa conversa... E quem sabe algo a mais? Bora?";
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

  aceitarConvite() {
  const mensagem = encodeURIComponent("Mal posso esperar pra sair com você, gostoso 😈🔥");
  window.open(`https://wa.me/5588997475684?text=${mensagem}`, '_blank');
}
  ativarFuga() {
    this.isBotaoFugindo = true;
    this.moverBotao();
  }

  moverBotao() {
    if (!this.isBotaoFugindo) return;

    const containerWidth = 300;
    const containerHeight = 200;
    const buttonWidth = 120;
    const buttonHeight = 60;

    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;

    this.naoLeft = Math.floor(Math.random() * maxX);
    this.naoTop = Math.floor(Math.random() * maxY);
  }
}
