import { Component, OnInit } from '@angular/core';
import { AboutUsService } from './about-us.service';
import { NgForOf } from '@angular/common';
import { IconButtonComponent } from '../../shared/uploadComponents/icon-button/icon-button.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NgForOf, IconButtonComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.sass',
})
export class AboutUsComponent implements OnInit {
  item: any[] = [];

  constructor(private aboutUsService: AboutUsService) {}

  ngOnInit() {
    this.aboutUsService.getData().subscribe({
      next: (res) => {
        this.item = res.data;
      },
      error: (err) => console.log(err),
    });
  }
}
