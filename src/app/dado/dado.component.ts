import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  valor1:number=0;
  valor2:number=0;
  valor3:number=0;
  flag1:Boolean=false;
  flag2:Boolean=false;
  flag3:Boolean=false;
  flag4:Boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.valor1=Math.trunc(Math.random()*6)+1;
    this.valor2=Math.trunc(Math.random()*6)+1;
    this.valor3=Math.trunc(Math.random()*6)+1;
  }
  cambiarValor(){
    this.valor1=Math.trunc(Math.random()*6)+1;
    this.valor2=Math.trunc(Math.random()*6)+1;
    this.valor3=Math.trunc(Math.random()*6)+1;
    this.validarValores();
  }
  validarValores(){
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;
    if(this.valor1==this.valor2){
      this.flag1=true;
      this.flag2=true;
      if(this.valor1==this.valor3){
        this.flag4=true;
      }
      console.log('1=2')

    }
    if(this.valor2==this.valor3){
      this.flag3=true;
      this.flag2=true;

      console.log('2=3')

    }
    if(this.valor3==this.valor1){
      this.flag3=true;
      this.flag1=true;

      console.log('1=3')

    }
  }
}
