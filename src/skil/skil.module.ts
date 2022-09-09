import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Skil } from './skil.entity'
import { SkilResolver } from './skil.resolver'
import { SkilService } from './skil.service'

@Module({
  imports: [TypeOrmModule.forFeature([Skil])],
  providers: [SkilService, SkilResolver]
})
export class SkilModule {}
