import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

heroes :string[] = ['Goku','Trunks','Vegeta','Gotten']
heroeBorrado:string ='';
  eliminarHeroe(){
    this.heroeBorrado =this.heroes.pop()||'';
   
  }

  // constructor() { }
  // ngOnInit(): void {}

}
