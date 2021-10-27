import { Component, ViewChild } from '@angular/core';
import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('dado') dado!:DadoComponent;
  dize(){
    console.log('asdasd');
    console.log(this.dado.valor1)
    this.dado.cambiarValor();
  }
}
