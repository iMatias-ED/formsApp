import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  @ViewChild('myForm') form!:NgForm; 

  guardar() {
    console.log( this.form.value );
    console.log( this.form.controls.precio.value );
  }

  //Validations
  nombreValido (): boolean {
    return  this.form?.controls.producto?.invalid &&
            this.form?.controls.producto?.touched;
  }

  precioValido (): boolean {
    return this.form?.controls.precio?.value >= 0 &&
          this.form?.controls.precio?.touched;
  }

}
