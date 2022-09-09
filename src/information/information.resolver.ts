import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { InformationPublic } from './dto/information'
import { InformationCreateInput } from './dto/informationCreate.input'
import { InformationUpdateInput } from './dto/informationUpdate.input'
import { InformationMapper } from './information.mapper'
import { InformationService } from './information.service'

@Resolver(of => InformationPublic)
export class InformationResolver {
  constructor(private readonly informationService: InformationService) {}

  @Query(returns => [InformationPublic], { name: 'getAllInformations' })
  async getAllInformations(): Promise<InformationPublic[]> {
    return this.informationService.findAll()
  }

  @Query(returns => InformationPublic, { name: 'getInformationById' })
  async getInformationById(@Args('id') id: string): Promise<InformationPublic> {
    return this.informationService.findById(id)
  }

  @Mutation(returns => InformationPublic, { name: 'createInformation' })
  async createInformation(
    @Args('input') input: InformationCreateInput
  ): Promise<InformationPublic> {
    return this.informationService.create(InformationMapper.toEntity(input))
  }

  @Mutation(returns => InformationPublic, { name: 'updateInformation' })
  async updateInformation(
    @Args('input') input: InformationUpdateInput
  ): Promise<InformationPublic> {
    return this.informationService.update(input)
  }

  @Mutation(returns => Boolean, { name: 'deleteInformation' })
  async deleteInformation(@Args('id') input: string): Promise<boolean> {
    return this.informationService.delete(input)
  }
}
