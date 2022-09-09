import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Information } from './information.entity'

@Injectable()
export class InformationService {
  constructor(
    @InjectRepository(Information)
    private levelRepository: Repository<Information>
  ) {}

  async findAll(): Promise<Information[]> {
    return this.levelRepository.find()
  }

  async findById(id: string): Promise<Information> {
    return this.levelRepository.findOne(id)
  }

  async create(input: Information): Promise<Information> {
    return this.levelRepository.save(input)
  }

  async update(input: Information): Promise<Information> {
    await this.levelRepository.update(input.id, {
      phone: input.phone,
      address: input.address,
      city: input.city,
      country: input.country,
      cep: input.cep
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
