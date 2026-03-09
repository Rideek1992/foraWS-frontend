import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { MainElementComponent } from './shared/components/main-element/main-element.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import SeoRouteListenerService from "./core/seo/seo-route-listener.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainHeaderComponent, MainElementComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent  implements OnInit{

  constructor(private seoRouteListener: SeoRouteListenerService) { }

  ngOnInit() {
    document.title = 'PROD TEST 1234';
    this.seoRouteListener.init();
  }

}
