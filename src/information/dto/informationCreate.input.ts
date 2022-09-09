import { Field, InputType } from '@nestjs/graphql'
import { Length } from 'class-validator'

@InputType()
export class InformationCreateInput {
  @Field({ nullable: true })
  phone: string

  @Field()
  @Length(1)
  address: string

  @Field({ nullable: true })
  @Length(2)
  city: string

  @Field({ nullable: true })
  @Length(2)
  country: string

  @Field({ nullable: true })
  @Length(2)
  cep: string
}
