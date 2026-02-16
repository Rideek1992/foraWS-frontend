import { Component, OnInit } from '@angular/core';
import { ApibackandService } from '../../../core/apibackand.service';
import { interval } from 'rxjs';
import { enviroment } from '../../../../envirpments/enviroment';
import { Router } from '@angular/router';
import { SvgIconsComponent } from '../svg-icons/svg-icons.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-main-slider',
  standalone: true,
  imports: [SvgIconsComponent, NgStyle],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.sass',
})
export class MainSliderComponent implements OnInit {
  dataSlider: any[] = [];
  activeElementSlider: any[] = [];
  activeSlide = 0;
  lengthSlide = 0;
  env = enviroment.apiUrl;

  constructor(
    private api: ApibackandService,
    public router: Router,
  ) {}

  ngOnInit() {
    this.api.getDataSlider().subscribe({
      next: (res) => {
        this.dataSlider = res.data;
        this.activeElementSlider = this.dataSlider;
      },
      error: (err) => console.log(err),
    });
    interval(10000).subscribe(() => {
      this.changeSlide();
      if (this.activeSlide >= this.activeElementSlider.length) this.activeSlide = 0;
      if (this.activeSlide === this.activeElementSlider.length - 1) {
        this.activeSlide = 0;
      } else {
        this.activeSlide++;
      }
    });
  }

  changeSlide() {
    this.activeElementSlider = this.dataSlider.filter(
      (item) => item.activesite === null || this.router.url.slice(1) === item.activesite,
    );
  }
}
