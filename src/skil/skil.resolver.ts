import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { SkilPublic } from './dto/skil'
import { SkilCreateInput } from './dto/skilCreate.input'
import { SkilUpdateInput } from './dto/skilUpdate.input'
import { SkilMapper } from './skil.mapper'
import { SkilService } from './skil.service'

@Resolver(of => SkilPublic)
export class SkilResolver {
  constructor(private readonly skilService: SkilService) {}

  @Query(returns => [SkilPublic], { name: 'getAllSkils' })
  async getAllSkils(): Promise<SkilPublic[]> {
    const skils = await this.skilService.findAll()
    return skils.map(SkilMapper.fromEntityToPublic)
  }

  @Query(returns => SkilPublic, { name: 'getSkilById' })
  async getSkilById(@Args('id') id: string): Promise<SkilPublic> {
    return SkilMapper.fromEntityToPublic(await this.skilService.findById(id))
  }

  @Mutation(returns => SkilPublic, { name: 'createSkil' })
  async createSkil(@Args('input') input: SkilCreateInput): Promise<SkilPublic> {
    return SkilMapper.fromEntityToPublic(
      await this.skilService.create(SkilMapper.toEntity(input))
    )
  }

  @Mutation(returns => SkilPublic, { name: 'updateSkil' })
  async updateSkil(@Args('input') input: SkilUpdateInput): Promise<SkilPublic> {
    return SkilMapper.fromEntityToPublic(
      await this.skilService.update(SkilMapper.fromUpdateToEntity(input))
    )
  }

  @Mutation(returns => Boolean, { name: 'deleteSkil' })
  async deleteSkil(@Args('id') input: string): Promise<boolean> {
    return this.skilService.delete(input)
  }
}
