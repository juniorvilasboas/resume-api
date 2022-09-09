import { EducationCreateInput } from './dto/educationCreate.input'
import { Education } from './education.entity'

export class EducationMapper {
  public static toEntity(input: EducationCreateInput): Education {
    const entity = new Education()
    entity.degree = input.degree
    entity.subject = input.subject
    entity.institution = input.institution
    entity.site = input.site
    entity.begin = input.begin
    entity.end = input.end

    return entity
  }
}
