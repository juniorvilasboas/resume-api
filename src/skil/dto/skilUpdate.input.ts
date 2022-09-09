import { Field, InputType } from '@nestjs/graphql'
import { IsUUID, Length } from 'class-validator'

@InputType()
export class SkilUpdateInput {
  @Field()
  @IsUUID()
  id: string

  @Field({ nullable: true })
  @Length(2)
  name: string

  @Field({ nullable: true })
  @Length(1)
  site: string

  @Field({ nullable: true })
  @Length(5)
  ext: string

  @Field({ nullable: true })
  @Length(5)
  tipo: string

  @Field({ nullable: true })
  level: string
}
