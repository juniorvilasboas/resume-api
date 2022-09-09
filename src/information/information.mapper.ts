import { InformationCreateInput } from './dto/informationCreate.input'
import { Information } from './information.entity'

export class InformationMapper {
  public static toEntity(input: InformationCreateInput): Information {
    const entity = new Information()
    entity.phone = input.phone
    entity.address = input.address
    entity.city = input.city
    entity.country = input.country
    entity.cep = input.cep

    return entity
  }
}
