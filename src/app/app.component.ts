import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { MainElementComponent } from './shared/components/main-element/main-element.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainHeaderComponent, MainElementComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'siteFORAWS';
}
