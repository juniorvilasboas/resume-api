import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Level } from './level.entity'

@Injectable()
export class LevelService {
  constructor(
    @InjectRepository(Level)
    private levelRepository: Repository<Level>
  ) {}

  async findAll(): Promise<Level[]> {
    return this.levelRepository.find()
  }

  async findById(id: string): Promise<Level> {
    return this.levelRepository.findOne(id)
  }

  async findBySlug(slug: string): Promise<Level> {
    return this.levelRepository.findOne({ where: [{ slug }] })
  }

  async create(input: Level): Promise<Level> {
    return this.levelRepository.save(input)
  }

  async update(input: Level): Promise<Level> {
    await this.levelRepository.update(input.id, {
      item: input.item,
      value: input.value,
      description: input.description,
      label: input.label
    })
    return input
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.levelRepository.delete(id)
      return true
    } catch (err) {
      return false
    }
  }
}
