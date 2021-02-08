import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { GameTileComponent } from './components/game-tile/game-tile.component';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameBoardComponent,
    GameTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
