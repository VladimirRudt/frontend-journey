import { Component } from '@angular/core';
import { About } from "../about/about";
import { TabItem, Tabs } from "../shared/components/tabs/tabs";
import { Articles } from "../articles/articles";
import { Projects } from "../projects/projects";

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
      iconSource: '../../assets/articles.png'
    },
    {
      id: TabId.Projects,
      title: 'Projects',
      iconSource: '../../assets/projects.png'
    },
  ]

  selectedTabId: TabId = TabId.Articles

  onTabChanged(tabId: TabId) {
    this.selectedTabId = tabId;
  }
}
