import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./componentes/header/header";
import { Footer } from "./componentes/footer/footer";
import { Main } from "./componentes/main/main";

@Component({
  selector: 'app-root',
  imports: [ Header, Footer, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vasco2');
}
