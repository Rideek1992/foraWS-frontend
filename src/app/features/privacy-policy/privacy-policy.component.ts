import { Component, OnInit } from '@angular/core';
import { ApibackandService } from '../../core/apibackand.service';
import { DatePipe, JsonPipe } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [JsonPipe, DatePipe, MarkdownModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.sass',
  encapsulation: ViewEncapsulation.None,
})
export class PrivacyPolicyComponent implements OnInit {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private api: ApibackandService) {}

  dataPrivatyPolicy: any = [];

  ngOnInit() {
    this.api.getPrivatyPolicy().subscribe({
      next: (res) => {
        this.dataPrivatyPolicy = res.data[0];
      },
      error: (err) => console.log(err),
    });
  }
}
