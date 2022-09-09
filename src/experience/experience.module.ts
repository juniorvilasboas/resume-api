import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Experience } from './experience.entity'
import { ExperienceResolver } from './experience.resolver'
import { ExperienceService } from './experience.service'

@Module({
  imports: [TypeOrmModule.forFeature([Experience])],
  providers: [ExperienceService, ExperienceResolver]
})
export class ExperienceModule {}
