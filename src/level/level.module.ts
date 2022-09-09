import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Level } from './level.entity'
import { LevelResolver } from './level.resolver'
import { LevelService } from './level.service'

@Module({
  imports: [TypeOrmModule.forFeature([Level])],
  providers: [LevelService, LevelResolver]
})
export class LevelModule {}
