import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { LanguagePublic } from './dto/language'
import { LanguageCreateInput } from './dto/languageCreate.input'
import { LanguageUpdateInput } from './dto/languageUpdate.input'
import { LanguageMapper } from './language.mapper'
import { LanguageService } from './language.service'

@Resolver(of => LanguagePublic)
export class LanguageResolver {
  constructor(private readonly languageService: LanguageService) {}

  @Query(returns => [LanguagePublic], { name: 'getAllLanguages' })
  async getAllLanguages(): Promise<LanguagePublic[]> {
    return this.languageService.findAll()
  }

  @Query(returns => LanguagePublic, { name: 'getLanguageById' })
  async getLanguageById(@Args('id') id: string): Promise<LanguagePublic> {
    return this.languageService.findById(id)
  }

  @Mutation(returns => LanguagePublic, { name: 'createLanguage' })
  async createLanguage(
    @Args('input') input: LanguageCreateInput
  ): Promise<LanguagePublic> {
    return this.languageService.create(LanguageMapper.toEntity(input))
  }

  @Mutation(returns => LanguagePublic, { name: 'updateLanguage' })
  async updateLanguage(
    @Args('input') input: LanguageUpdateInput
  ): Promise<LanguagePublic> {
    return this.languageService.update(input)
  }

  @Mutation(returns => Boolean, { name: 'deleteLanguage' })
  async deleteLanguage(@Args('id') input: string): Promise<boolean> {
    return this.languageService.delete(input)
  }
}
