import { Component, HostBinding, OnInit } from '@angular/core';
import { ApibackandService } from '../../../core/apibackand.service';
import { enviroment } from '../../../../envirpments/enviroment';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-svg-icons',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './svg-icons.component.html',
  styleUrl: './svg-icons.component.sass',
})
export class SvgIconsComponent implements OnInit {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private apiSVG: ApibackandService) {}

  urlAddres = enviroment.apiUrl;
  allIconSVG: any[] = [];
  svgIcons: any[] = [];
  svgIconsLength = 0;
  @HostBinding('style.--svgGridLength')
  svgGridLength!: number;

  ngOnInit(): void {
    this.apiSVG.getSVGIcon().subscribe({
      next: (res) => {
        this.allIconSVG = res.data;
        this.svgIcons = this.allIconSVG.filter((icon) => icon.workingElement === 'allpage');
        this.svgGridLength = this.svgIcons.length;
      },
      error: (err) => console.log(err),
    });
  }
}
