import { Field, InputType } from '@nestjs/graphql'
import { Length } from 'class-validator'

@InputType()
export class LevelCreateInput {
  @Field({ nullable: true })
  item: number

  @Field()
  @Length(1)
  value: string

  @Field({ nullable: true })
  @Length(2)
  label: string

  @Field({ nullable: true })
  @Length(2)
  description: string
}
