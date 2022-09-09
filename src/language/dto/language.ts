import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('Language')
export class LanguagePublic {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  item: number

  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  understanding: string

  @Field({ nullable: true })
  speaking: string

  @Field({ nullable: true })
  writing: string
}
