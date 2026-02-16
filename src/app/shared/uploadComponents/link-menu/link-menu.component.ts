import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './link-menu.component.html',
  styleUrl: './link-menu.component.sass',
})
export class LinkMenuComponent {
  @Input() nameInput?: string;
  @Input() linkInput?: string;
}
