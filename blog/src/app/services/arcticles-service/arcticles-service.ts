import { Injectable } from '@angular/core';
import { ArcticleSummary } from './ArcticleSummary';

@Injectable({
  providedIn: 'root',
})
export class ArcticlesService {
  private readonly arcricles: ArcticleSummary[] = [
    {
      id: 1,
      title: "AI-based Summarization",
      description: "AI-based Summarization"
    },
    {
      id: 2,
      title: "AI Atrifacts Distribution",
      description: "AI Atrifacts Distribution"
    },
    {
      id: 3,
      title: "Writing Custom GC",
      description: "Writing Custom GC"
    },
    {
      id: 4,
      title: "ZIP Streaming",
      description: "ZIP Streaming"
    },
    {
      id: 5,
      title: "CSV Streaming",
      description: "CSV Streaming"
    },
  ]

  getArcticles(): ArcticleSummary[] {
    return this.arcricles
  }
}
