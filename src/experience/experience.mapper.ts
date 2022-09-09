import { ExperienceCreateInput } from './dto/experienceCreate.input'
import { Experience } from './experience.entity'

export class ExperienceMapper {
  public static toEntity(input: ExperienceCreateInput): Experience {
    const entity = new Experience()
    entity.role = input.role
    entity.type = input.type
    entity.company = input.company
    entity.city = input.city
    entity.country = input.country
    entity.description = input.description
    entity.begin = input.begin
    entity.end = input.end

    return entity
  }
}
