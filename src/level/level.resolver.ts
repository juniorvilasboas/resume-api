import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { LevelPublic } from './dto/level'
import { LevelCreateInput } from './dto/levelCreate.input'
import { LevelUpdateInput } from './dto/levelUpdate.input'
import { LevelMapper } from './level.mapper'
import { LevelService } from './level.service'

@Resolver(of => LevelPublic)
export class LevelResolver {
  constructor(private readonly levelService: LevelService) {}

  @Query(returns => [LevelPublic], { name: 'getAllLevels' })
  async getAllLevels(): Promise<LevelPublic[]> {
    return this.levelService.findAll()
  }

  @Query(returns => LevelPublic, { name: 'getLevelById' })
  async getLevelById(@Args('id') id: string): Promise<LevelPublic> {
    return this.levelService.findById(id)
  }

  @Mutation(returns => LevelPublic, { name: 'createLevel' })
  async createLevel(
    @Args('input') input: LevelCreateInput
  ): Promise<LevelPublic> {
    return this.levelService.create(LevelMapper.toEntity(input))
  }

  @Mutation(returns => LevelPublic, { name: 'updateLevel' })
  async updateLevel(
    @Args('input') input: LevelUpdateInput
  ): Promise<LevelPublic> {
    return this.levelService.update(input)
  }

  @Mutation(returns => Boolean, { name: 'deleteLevel' })
  async deleteLevel(@Args('id') input: string): Promise<boolean> {
    return this.levelService.delete(input)
  }
}
