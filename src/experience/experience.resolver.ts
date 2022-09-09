import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ExperiencePublic } from './dto/experience'
import { ExperienceCreateInput } from './dto/experienceCreate.input'
import { ExperienceUpdateInput } from './dto/experienceUpdate.input'
import { ExperienceMapper } from './experience.mapper'
import { ExperienceService } from './experience.service'

@Resolver(of => ExperiencePublic)
export class ExperienceResolver {
  constructor(private readonly experienceService: ExperienceService) {}

  @Query(returns => [ExperiencePublic], { name: 'getAllExperiences' })
  async getAllExperiences(): Promise<ExperiencePublic[]> {
    return this.experienceService.findAll()
  }

  @Query(returns => ExperiencePublic, { name: 'getExperienceById' })
  async getExperienceById(@Args('id') id: string): Promise<ExperiencePublic> {
    return this.experienceService.findById(id)
  }

  @Mutation(returns => ExperiencePublic, { name: 'createExperience' })
  async createExperience(
    @Args('input') input: ExperienceCreateInput
  ): Promise<ExperiencePublic> {
    return this.experienceService.create(ExperienceMapper.toEntity(input))
  }

  @Mutation(returns => ExperiencePublic, { name: 'updateExperience' })
  async updateExperience(
    @Args('input') input: ExperienceUpdateInput
  ): Promise<ExperiencePublic> {
    return this.experienceService.update(input)
  }

  @Mutation(returns => Boolean, { name: 'deleteExperience' })
  async deleteExperience(@Args('id') input: string): Promise<boolean> {
    return this.experienceService.delete(input)
  }
}
