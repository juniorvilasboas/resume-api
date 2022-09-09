import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PortifolioPublic } from './dto/portifolio'
import { PortifolioCreateInput } from './dto/portifolioCreate.input'
import { PortifolioUpdateInput } from './dto/portifolioUpdate.input'
import { PortifolioMapper } from './portifolio.mapper'
import { PortifolioService } from './portifolio.service'

@Resolver(of => PortifolioPublic)
export class PortifolioResolver {
  constructor(private readonly portifolioService: PortifolioService) {}

  @Query(returns => [PortifolioPublic], { name: 'getAllPortifolios' })
  async getAllPortifolios(): Promise<PortifolioPublic[]> {
    const Portifolios = await this.portifolioService.findAll()
    return Portifolios.map(PortifolioMapper.fromEntityToPublic)
  }

  @Query(returns => PortifolioPublic, { name: 'getPortifolioById' })
  async getPortifolioById(@Args('id') id: string): Promise<PortifolioPublic> {
    return PortifolioMapper.fromEntityToPublic(
      await this.portifolioService.findById(id)
    )
  }

  @Mutation(returns => PortifolioPublic, { name: 'createPortifolio' })
  async createPortifolio(
    @Args('input') input: PortifolioCreateInput
  ): Promise<PortifolioPublic> {
    return PortifolioMapper.fromEntityToPublic(
      await this.portifolioService.create(PortifolioMapper.toEntity(input))
    )
  }

  @Mutation(returns => PortifolioPublic, { name: 'updatePortifolio' })
  async updatePortifolio(
    @Args('input') input: PortifolioUpdateInput
  ): Promise<PortifolioPublic> {
    return PortifolioMapper.fromEntityToPublic(
      await this.portifolioService.update(
        PortifolioMapper.fromUpdateToEntity(input)
      )
    )
  }

  @Mutation(returns => Boolean, { name: 'deletePortifolio' })
  async deletePortifolio(@Args('id') input: string): Promise<boolean> {
    return this.portifolioService.delete(input)
  }
}
