import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainSliderComponent } from '../../uploadComponents/main-slider/main-slider.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-element',
  standalone: true,
  imports: [RouterOutlet, MainSliderComponent, FooterComponent],
  templateUrl: './main-element.component.html',
  styleUrl: './main-element.component.sass',
})
export class MainElementComponent {}
