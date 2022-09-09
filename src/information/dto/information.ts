import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('Information')
export class InformationPublic {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  phone: string

  @Field({ nullable: true })
  address: string

  @Field({ nullable: true })
  city: string

  @Field({ nullable: true })
  country: string

  @Field({ nullable: true })
  cep: string
}
