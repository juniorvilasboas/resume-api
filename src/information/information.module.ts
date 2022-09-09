import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Information } from './information.entity'
import { InformationResolver } from './information.resolver'
import { InformationService } from './information.service'

@Module({
  imports: [TypeOrmModule.forFeature([Information])],
  providers: [InformationService, InformationResolver]
})
export class InformationModule {}
