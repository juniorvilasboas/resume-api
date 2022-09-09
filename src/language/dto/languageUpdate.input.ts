import { Field, InputType } from '@nestjs/graphql'
import { IsUUID, Length } from 'class-validator'

@InputType()
export class LanguageUpdateInput {
  @Field()
  @IsUUID()
  id: string

  @Field()
  item: number

  @Field()
  @Length(3)
  name: string

  @Field()
  @Length(2)
  understanding: string

  @Field()
  @Length(2)
  speaking: string

  @Field()
  @Length(2)
  writing: string
}
