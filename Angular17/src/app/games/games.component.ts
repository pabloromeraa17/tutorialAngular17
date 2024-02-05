import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <p>
      Los juegos favoritos de {{nombreUsuario}} son estos.
    </p>
    <ul>
        @for(game of games; track game.id){
          <li (click)="juegoFavorito(game.name)"> {{game.name}}</li>
        }
    </ul>
  `,
  styles: `
  li:hover{
    cursor: pointer;
  }
  `
})
export class GamesComponent {
  @Input() nombreUsuario:string = '';
  @Output() comunicadorDeEventoDeHijoAPadre = new EventEmitter<string>();
  games = [
    {
      id:1,
      name: "Alone in the Dark"
    },
    {
      id:2,
      name: "Need for Speed"
    },
    {
      id:3,
      name: "Out Run"
    }
  ]

  juegoFavorito(j:string):void{
    alert(`A ${this.nombreUsuario} le gusta jugar a ${j}`);
    this.comunicadorDeEventoDeHijoAPadre.emit(j);
  }
}
