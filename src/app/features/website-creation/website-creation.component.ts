import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";
import {ApibackandService} from "../../core/apibackand.service";
import {JsonPipe} from "@angular/common";
import {
  ScopeServiceComponent
} from "../../shared/components/scope-service/scope-service.component";
import {
  ButtonLinkComponent
} from "../../shared/uploadComponents/button-link/button-link.component";

@Component({
  selector: 'app-website-creation',
  standalone: true,
  imports: [
    HeroComponent,
    JsonPipe,
    ScopeServiceComponent,
    ButtonLinkComponent
  ],
  templateUrl: './website-creation.component.html',
  styleUrl: './website-creation.component.sass'
})
export class WebsiteCreationComponent implements AfterViewInit, OnInit {
  @ViewChild('observeSection') observeSection!: ElementRef;

  constructor(private api: ApibackandService){}

  sectionVisible = false;
  dataScopeWeb:any = []
  dataWhyElement:any = []
  activeElement:number = 0

  getElementNubrer = (element:number) => {
     this.activeElement = element
  }

  ngOnInit(): void {
    this.api.getGraphicElements('web-service').subscribe({
      next: (data) => {
        this.dataScopeWeb = data.data
      },
      error: (err) => {
        console.log(err.error.message)
      }
      }
    )
    this.api.getSiteMarkingWarehouse('why_web_service').subscribe({
      next: (data) => {
        this.dataWhyElement =data.data.map((item:any) => item.why_web_service)

      },
      error: (err) => {}
    })


  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.sectionVisible = true;
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    observer.observe(this.observeSection.nativeElement);
  }


}
