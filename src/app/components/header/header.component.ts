import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private communicationService: CommunicationService) {

   }


  ngOnInit(): void {
  }

  onBoardRestartClick()
  {
    this.communicationService.reloadBoard();
  }

}
