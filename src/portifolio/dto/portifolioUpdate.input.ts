import { Field, InputType } from '@nestjs/graphql'
import { IsUUID } from 'class-validator'

@InputType()
export class PortifolioUpdateInput {
  @Field()
  @IsUUID()
  id: string

  @Field({ nullable: true })
  layout: string

  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  site: string

  @Field({ nullable: true })
  category: string

  @Field({ nullable: true })
  subject: string

  @Field({ nullable: true })
  description: string

  @Field({ nullable: true })
  skil: string
}
