import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('Experience')
export class ExperiencePublic {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  role: string

  @Field({ nullable: true })
  type: string

  @Field({ nullable: true })
  company: string

  @Field({ nullable: true })
  city: string

  @Field({ nullable: true })
  country: string

  @Field({ nullable: true })
  description: string

  @Field({ nullable: true })
  begin: Date

  @Field({ nullable: true })
  end: Date
}
