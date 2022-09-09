import { Level } from '../level/level.entity'
import { SkilPublic } from './dto/skil'
import { SkilCreateInput } from './dto/skilCreate.input'
import { SkilUpdateInput } from './dto/skilUpdate.input'
import { Skil } from './skil.entity'

export class SkilMapper {
  public static toEntity(input: SkilCreateInput): Skil {
    const level = new Level()
    level.id = input.level

    const entity = new Skil()
    entity.name = input.name
    entity.site = input.site
    entity.ext = input.ext
    entity.tipo = input.tipo
    entity.level = level

    return entity
  }

  public static fromUpdateToEntity(input: SkilUpdateInput): Skil {
    const level = new Level()
    level.id = input.level

    const entity = new Skil()
    entity.id = input.id
    entity.name = input.name
    entity.site = input.site
    entity.ext = input.ext
    entity.tipo = input.tipo
    entity.level = level

    return entity
  }

  public static fromEntityToPublic(entity: Skil): SkilPublic {
    const skil = new SkilPublic()
    skil.id = entity.id
    skil.name = entity.name
    skil.site = entity.site
    skil.ext = entity.ext
    skil.tipo = entity.tipo
    skil.level = entity.level.toString()

    return skil
  }
}
