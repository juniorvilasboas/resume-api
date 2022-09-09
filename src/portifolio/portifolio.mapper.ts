import { Skil } from '../skil/skil.entity'
import { PortifolioPublic } from './dto/portifolio'
import { PortifolioCreateInput } from './dto/portifolioCreate.input'
import { PortifolioUpdateInput } from './dto/portifolioUpdate.input'
import { Portifolio } from './portifolio.entity'

export class PortifolioMapper {
  public static toEntity(input: PortifolioCreateInput): Portifolio {
    const skil = new Skil()
    skil.id = input.skil

    const entity = new Portifolio()
    entity.layout = input.layout
    entity.name = input.name
    entity.site = input.site
    entity.category = input.category
    entity.subject = input.subject
    entity.description = input.description
    entity.skil = skil

    return entity
  }

  public static fromUpdateToEntity(input: PortifolioUpdateInput): Portifolio {
    const skil = new Skil()
    skil.id = input.skil

    const entity = new Portifolio()
    entity.id = input.id
    entity.layout = input.layout
    entity.name = input.name
    entity.site = input.site
    entity.category = input.category
    entity.subject = input.subject
    entity.description = input.description
    entity.skil = skil

    return entity
  }

  public static fromEntityToPublic(entity: Portifolio): PortifolioPublic {
    const skil = new PortifolioPublic()
    skil.id = entity.id
    skil.layout = entity.layout
    skil.name = entity.name
    skil.site = entity.site
    skil.category = entity.category
    skil.subject = entity.subject
    skil.description = entity.description
    skil.skil = entity.skil.toString()

    return skil
  }
}
