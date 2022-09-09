import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('Level')
export class LevelPublic {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  item: number

  @Field({ nullable: true })
  value: string

  @Field({ nullable: true })
  label: string

  @Field({ nullable: true })
  description: string
}
