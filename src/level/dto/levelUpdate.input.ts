import { Field, InputType } from '@nestjs/graphql'
import { IsUUID, Length } from 'class-validator'

@InputType()
export class LevelUpdateInput {
  @Field()
  @IsUUID()
  id: string

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
