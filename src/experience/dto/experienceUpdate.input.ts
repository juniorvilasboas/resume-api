import { Field, InputType } from '@nestjs/graphql'
import { IsUUID } from 'class-validator'

@InputType()
export class ExperienceUpdateInput {
  @Field()
  @IsUUID()
  id: string

  @Field({ nullable: true })
  role: string

  @Field({ nullable: true })
  type: string

  @Field({ nullable: true })
  company: string

  @Field({ nullable: true })
  city: string

  @Field({ nullable: true })
  country: string

  @Field({ nullable: true })
  description: string

  @Field({ nullable: true })
  begin: Date

  @Field({ nullable: true })
  end: Date
}
