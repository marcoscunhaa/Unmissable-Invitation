import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  naoTop = 0;
  naoLeft = 0;
  isBotaoFugindo = false;

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
