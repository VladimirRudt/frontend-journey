import { Injectable } from '@angular/core';
import { ArcticleSummary } from './ArcticleSummary';
import { ArcticleData } from './ArcticleData';

@Injectable({
  providedIn: 'root',
})
export class ArcticlesService {
  private readonly arcricles: ArcticleData[] = [
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

  getArcticles(): ArcticleSummary[] {
    return this.arcricles
  }

  getArcticleById(id: number): ArcticleData | null {
    return this.arcricles.find(arcticle => arcticle.id == id) ?? null
  }
}
