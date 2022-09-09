import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Education } from './education.entity'

@Injectable()
export class EducationService {
  constructor(
    @InjectRepository(Education)
    private educationRepository: Repository<Education>
  ) {}

  async findAll(): Promise<Education[]> {
    return this.educationRepository.find({ loadRelationIds: true })
  }

  async findById(id: string): Promise<Education> {
    return this.educationRepository.findOne(id, { loadRelationIds: true })
  }

  async findBySlug(slug: string): Promise<Education> {
    return this.educationRepository.findOne({ where: [{ slug }] })
  }

  async create(input: Education): Promise<Education> {
    return this.educationRepository.save(input)
  }

  async update(input: Education): Promise<Education> {
    await this.educationRepository.update(input.id, {
      degree: input.degree,
      subject: input.subject,
      institution: input.institution,
      site: input.site,
      begin: input.begin,
      end: input.end
    })
    return input
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.educationRepository.delete(id)
      return true
    } catch (err) {
      return false
    }
  }
}
