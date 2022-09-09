import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Skil } from './skil.entity'

@Injectable()
export class SkilService {
  constructor(
    @InjectRepository(Skil)
    private skilRepository: Repository<Skil>
  ) {}

  async findAll(): Promise<Skil[]> {
    return this.skilRepository.find({ loadRelationIds: true })
  }

  async findById(id: string): Promise<Skil> {
    return this.skilRepository.findOne(id, { loadRelationIds: true })
  }

  async create(input: Skil): Promise<Skil> {
    return this.skilRepository.save(input)
  }

  async update(input: Skil): Promise<Skil> {
    await this.skilRepository.update(input.id, {
      name: input.name,
      site: input.site,
      ext: input.ext,
      tipo: input.tipo,
      level: input.level
    })
    return input
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.skilRepository.delete(id)
      return true
    } catch (err) {
      return false
    }
  }
}
