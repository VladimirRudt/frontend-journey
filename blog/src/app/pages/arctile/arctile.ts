import { Component, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArcticleData } from 'src/app/services/arcticles-service/ArcticleData';
import { ArcticlesService } from 'src/app/services/arcticles-service/arcticles-service';
import { ArcticleSummary } from 'src/app/services/arcticles-service/ArcticleSummary';

@Component({
  selector: 'app-arctile',
  imports: [],
  templateUrl: './arctile.html',
  styleUrl: './arctile.scss',
})
export class Arctile {
  private readonly route = inject(ActivatedRoute)
  private readonly arcticlesService = inject(ArcticlesService) 

  arcticle: ArcticleData | null = null

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
