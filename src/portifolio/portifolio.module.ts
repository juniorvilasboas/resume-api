import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Portifolio } from './portifolio.entity'
import { PortifolioResolver } from './portifolio.resolver'
import { PortifolioService } from './portifolio.service'

@Module({
  imports: [TypeOrmModule.forFeature([Portifolio])],
  providers: [PortifolioService, PortifolioResolver]
})
export class PortifolioModule {}
