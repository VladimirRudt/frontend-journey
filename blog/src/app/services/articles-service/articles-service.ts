import { Injectable } from '@angular/core';
import { ArticleSummary } from './ArticleSummary';
import { ArticleData } from './ArticleData';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private readonly arcricles: ArticleData[] = [
    {
      id: 1,
      title: "AI-based Summarization",
      description: "AI-based Summarization",
      content: "AI-based Summarization"
    },
    {
      id: 2,
      title: "AI Atrifacts Distribution",
      description: "AI Atrifacts Distribution",
      content: "AI Atrifacts Distribution"
    },
    {
      id: 3,
      title: "Writing Custom GC",
      description: "Writing Custom GC",
      content: "Writing Custom GC"
    },
    {
      id: 4,
      title: "ZIP Streaming",
      description: "ZIP Streaming",
      content: "ZIP Streaming"
    },
    {
      id: 5,
      title: "CSV Streaming",
      description: "CSV Streaming",
      content: "CSV Streaming"
    },
  ]

  getArticles(): ArticleSummary[] {
    return this.arcricles
  }

  getArcticleById(id: number): ArticleData | null {
    return this.arcricles.find(arcticle => arcticle.id == id) ?? null
  }
}
