import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

export type TabItem<TId extends string | number> = {
  id: TId;
  title: string;
  iconSource: string;
}

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs<TId extends string | number> {
  tabsData = input.required<TabItem<TId>[]>();
  selectedId = input.required<TId>();

  selectTab = output<TId>();

  onTabClick(tabItem: TabItem<TId>) {
    this.selectTab.emit(tabItem.id);
  }
}
