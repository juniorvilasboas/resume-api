import { Field, InputType } from '@nestjs/graphql'
import { Length } from 'class-validator'

@InputType()
export class LanguageCreateInput {
  @Field({ nullable: true })
  item: number

  @Field()
  @Length(3)
  name: string

  @Field({ nullable: true })
  @Length(2)
  understanding: string

  @Field({ nullable: true })
  @Length(2)
  speaking: string

  @Field({ nullable: true })
  @Length(2)
  writing: string
}
