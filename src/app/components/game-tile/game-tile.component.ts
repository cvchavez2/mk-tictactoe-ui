import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.css']
})
export class GameTileComponent implements OnInit {
  @Input() sign:string;
  constructor() { }

  ngOnInit(): void {
  }

}
