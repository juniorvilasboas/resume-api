import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Portifolio } from './portifolio.entity'

@Injectable()
export class PortifolioService {
  constructor(
    @InjectRepository(Portifolio)
    private portifolioRepository: Repository<Portifolio>
  ) {}

  async findAll(): Promise<Portifolio[]> {
    return this.portifolioRepository.find({ loadRelationIds: true })
  }

  async findById(id: string): Promise<Portifolio> {
    return this.portifolioRepository.findOne(id, { loadRelationIds: true })
  }

  async create(input: Portifolio): Promise<Portifolio> {
    return this.portifolioRepository.save(input)
  }

  async update(input: Portifolio): Promise<Portifolio> {
    await this.portifolioRepository.update(input.id, {
      layout: input.layout,
      name: input.name,
      site: input.site,
      category: input.category,
      subject: input.subject,
      description: input.description,
      skil: input.skil
    })
    return input
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.portifolioRepository.delete(id)
      return true
    } catch (err) {
      return false
    }
  }
}
