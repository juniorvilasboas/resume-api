import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Experience } from './experience.entity'

@Injectable()
export class ExperienceService {
  constructor(
    @InjectRepository(Experience)
    private experienceRepository: Repository<Experience>
  ) {}

  async findAll(): Promise<Experience[]> {
    return this.experienceRepository.find()
  }

  async findById(id: string): Promise<Experience> {
    return this.experienceRepository.findOne(id)
  }

  async create(input: Experience): Promise<Experience> {
    return this.experienceRepository.save(input)
  }

  async update(input: Experience): Promise<Experience> {
    await this.experienceRepository.update(input.id, {
      role: input.role,
      type: input.type,
      company: input.company,
      city: input.city,
      country: input.country,
      description: input.description,
      begin: input.begin,
      end: input.end
    })
    return input
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.experienceRepository.delete(id)
      return true
    } catch (err) {
      return false
    }
  }
}
