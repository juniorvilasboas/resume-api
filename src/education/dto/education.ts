import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('Education')
export class EducationPublic {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  degree: string

  @Field({ nullable: true })
  subject: string

  @Field({ nullable: true })
  institution: string

  @Field({ nullable: true })
  site: string

  @Field({ nullable: true })
  begin: Date

  @Field({ nullable: true })
  end: Date
}
