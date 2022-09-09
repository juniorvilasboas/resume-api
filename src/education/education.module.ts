import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Education } from './education.entity'
import { EducationResolver } from './education.resolver'
import { EducationService } from './education.service'

@Module({
  imports: [TypeOrmModule.forFeature([Education])],
  providers: [EducationService, EducationResolver]
})
export class EducationModule {}
