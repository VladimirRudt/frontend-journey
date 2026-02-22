import { Component, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleData } from 'src/app/services/articles-service/ArticleData';
import { ArticlesService } from 'src/app/services/articles-service/articles-service';
import { ArticleSummary } from 'src/app/services/articles-service/ArticleSummary';

@Component({
  selector: 'app-arctile',
  imports: [],
  templateUrl: './arctile.html',
  styleUrl: './arctile.scss',
})
export class Arctile {
  private readonly route = inject(ActivatedRoute)
  private readonly arcticlesService = inject(ArticlesService)

  arcticle: ArticleData | null = null

  constructor() {
    this.route.params.subscribe((params) =>{
      const arcticleId = params['id'];
      this.loadArcticle(arcticleId);
    });
  }

  loadArcticle(id: number) {
    this.arcticle = this.arcticlesService.getArcticleById(id)
  }
}
