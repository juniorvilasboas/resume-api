import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Language } from './language.entity'

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(Language)
    private languageRepository: Repository<Language>
  ) {}

  async findAll(): Promise<Language[]> {
    return this.languageRepository.find()
  }

  async findById(id: string): Promise<Language> {
    return this.languageRepository.findOne(id)
  }

  async create(input: Language): Promise<Language> {
    return this.languageRepository.save(input)
  }

  async update(input: Language): Promise<Language> {
    await this.languageRepository.update(input.id, {
      item: input.item,
      name: input.name,
      understanding: input.understanding,
      speaking: input.speaking,
      writing: input.writing
    })
    return input
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.languageRepository.delete(id)
      return true
    } catch (err) {
      return false
    }
  }
}
