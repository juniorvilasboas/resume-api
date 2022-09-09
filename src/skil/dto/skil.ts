import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('Skil')
export class SkilPublic {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  site: string

  @Field({ nullable: true })
  ext: string

  @Field({ nullable: true })
  tipo: string

  @Field({ nullable: true })
  level: string
}
