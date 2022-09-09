import { Field, InputType } from '@nestjs/graphql'
import { IsUUID } from 'class-validator'

@InputType()
export class EducationUpdateInput {
  @Field()
  @IsUUID()
  id: string

  @Field({ nullable: true })
  degree: string

  @Field({ nullable: true })
  subject: string

  @Field({ nullable: true })
  institution: string

  @Field({ nullable: true })
  site: string

  @Field({ nullable: true })
  begin: Date

  @Field({ nullable: true })
  end: Date
}
