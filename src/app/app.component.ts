import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BIenvenido a Angular';

  curso: string = 'Curso Spring 5 con Angulasr 7';
  alumno: string = 'Raquel Robles';
}
