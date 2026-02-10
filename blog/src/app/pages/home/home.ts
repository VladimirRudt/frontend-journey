import { Component } from '@angular/core';
import { About } from 'src/app/features/about/about';
import { Articles } from 'src/app/features/articles/articles';
import { Projects } from 'src/app/features/projects/projects';
import { Tabs, TabItem } from 'src/app/shared/components/tabs/tabs';

export enum TabId {
  Articles = 'Articles',
  Projects = 'Projects'
}

@Component({
  selector: 'app-home',
  imports: [About, Tabs, Articles, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  TabId = TabId; // Expose enum to template

  tabs: TabItem<TabId>[] = [
    {
      id: TabId.Articles,
      title: 'Articles',
      iconSource: 'src/assets/articles.png'
    },
    {
      id: TabId.Projects,
      title: 'Projects',
      iconSource: 'src/assets/projects.png'
    },
  ]

  selectedTabId: TabId = TabId.Articles

  onTabChanged(tabId: TabId) {
    this.selectedTabId = tabId;
  }
}
