import { Component, enableProdMode } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl :'heroe.component.html'
})
export class heroeComponent{
    nombre :string= 'hulk';
    edad: number =43;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string {
        //return this.nombre+' - '+this.edad;
        return `${this.nombre}-${this.edad}` ;       
    }
    cambiarNombre():void{
        this.nombre='Thor'
    }
    cambiarEdad():void{

       this.edad=54;
    }
}
