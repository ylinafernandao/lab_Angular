import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  form={
    nombre:'',
    apellido:'',
    edad:'',
    cedula:'',
  };
  
  personas: any[] = [];

  agregarPersona(){
    this.personas.push({
      nombre: this.form.nombre, 
      apellido: this.form.apellido,
      edad: this.form.edad,
      cedula: this.form.cedula
    }
    )

    this.form={
      nombre:'',
      apellido:'',
      edad:'',
      cedula:'',
    };

    // console.log(this.personas);
  };

}