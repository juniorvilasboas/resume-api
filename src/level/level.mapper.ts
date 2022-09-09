import { LevelCreateInput } from './dto/levelCreate.input'
import { Level } from './level.entity'

export class LevelMapper {
  public static toEntity(input: LevelCreateInput): Level {
    const entity = new Level()
    entity.item = input.item
    entity.value = input.value
    entity.label = input.label
    entity.description = input.description

    return entity
  }
}
