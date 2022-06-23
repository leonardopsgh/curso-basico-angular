import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { ContadorComponent } from './contador/contador.component';
import { AppComponent } from './app.component';
// import { heroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
//import { ContadorModule } from './contadores/contador.Module';
import { ContadorModule } from './contadores/contador/contador.Module';


@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,

    // heroeComponent,
    // ListadoComponent
    
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
