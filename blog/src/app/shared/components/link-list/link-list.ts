import { Component, input } from '@angular/core';
import { LinkListData } from './LinkListData';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-list',
  imports: [RouterLink],
  templateUrl: './link-list.html',
  styleUrl: './link-list.scss',
})
export class LinkList<TId> {
  list = input.required<LinkListData<TId>[]>()
}
