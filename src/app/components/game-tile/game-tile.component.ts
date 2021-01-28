import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.css']
})
export class GameTileComponent implements OnInit {
  @Output() tileClickEvent = new EventEmitter();

  @Input() sign:string;
  @Input() x: number;
  @Input() y: number;
  constructor() { }

  ngOnInit(): void {
  }

  clickTile(){
    this.tileClickEvent.emit({x:this.x, y:this.y});
  }

}
