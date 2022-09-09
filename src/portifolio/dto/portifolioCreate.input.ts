import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class PortifolioCreateInput {
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
