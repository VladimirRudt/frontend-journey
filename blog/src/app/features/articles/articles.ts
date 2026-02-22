import { Component, inject } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles-service/articles-service';
import { ArticleSummary } from 'src/app/services/articles-service/ArticleSummary';
import { LinkList } from "src/app/shared/components/link-list/link-list";
import { LinkListData } from 'src/app/shared/components/link-list/LinkListData';

@Component({
  selector: 'app-articles',
  imports: [LinkList],
  templateUrl: './articles.html',
  styleUrl: './articles.scss',
})
export class Articles {
  private readonly articlesService = inject(ArticlesService)

  articles = this.toArticles(this.articlesService.getArticles())

  private toArticles(summaries: ArticleSummary[]): LinkListData<number>[] {
    return summaries.map(summary => ({
      id: summary.id,
      title: summary.title,
      description: summary.description
    }))
  }
}
