import { LanguageCreateInput } from './dto/languageCreate.input'
import { Language } from './language.entity'

export class LanguageMapper {
  public static toEntity(input: LanguageCreateInput): Language {
    const entity = new Language()
    entity.item = input.item
    entity.name = input.name
    entity.understanding = input.understanding
    entity.speaking = input.speaking
    entity.writing = input.writing

    return entity
  }
}
