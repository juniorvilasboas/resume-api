import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { EducationPublic } from './dto/education'
import { EducationCreateInput } from './dto/educationCreate.input'
import { EducationUpdateInput } from './dto/educationUpdate.input'
import { EducationMapper } from './education.mapper'
import { EducationService } from './education.service'

@Resolver(of => EducationPublic)
export class EducationResolver {
  constructor(private readonly educationService: EducationService) {}

  @Query(returns => [EducationPublic], { name: 'getAllEducations' })
  async getAllEducations(): Promise<EducationPublic[]> {
    return this.educationService.findAll()
  }

  @Query(returns => EducationPublic, { name: 'getEducationById' })
  async getEducationById(@Args('id') id: string): Promise<EducationPublic> {
    return this.educationService.findById(id)
  }

  @Mutation(returns => EducationPublic, { name: 'createEducation' })
  async createEducation(
    @Args('input') input: EducationCreateInput
  ): Promise<EducationPublic> {
    return this.educationService.create(EducationMapper.toEntity(input))
  }

  @Mutation(returns => EducationPublic, { name: 'updateEducation' })
  async updateEducation(
    @Args('input') input: EducationUpdateInput
  ): Promise<EducationPublic> {
    return this.educationService.update(input)
  }

  @Mutation(returns => Boolean, { name: 'deleteEducation' })
  async deleteEducation(@Args('id') input: string): Promise<boolean> {
    return this.educationService.delete(input)
  }
}
