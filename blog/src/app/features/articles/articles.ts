import { Component, inject } from '@angular/core';
import { ArcticlesService } from 'src/app/services/arcticles-service/arcticles-service';
import { ArcticleSummary } from 'src/app/services/arcticles-service/ArcticleSummary';
import { LinkList } from "src/app/shared/components/link-list/link-list";
import { LinkListData } from 'src/app/shared/components/link-list/LinkListData';

@Component({
  selector: 'app-articles',
  imports: [LinkList],
  templateUrl: './articles.html',
  styleUrl: './articles.scss',
})
export class Articles {
  private readonly arcticlesService = inject(ArcticlesService)

  arcticles = this.toArcticles(this.arcticlesService.getArcticles())

  private toArcticles(summaries: ArcticleSummary[]): LinkListData<number>[] {
    return summaries.map(summay => ({
      id: summay.id,
      title: summay.title,
      description: summay.description
    }))
  }
}
