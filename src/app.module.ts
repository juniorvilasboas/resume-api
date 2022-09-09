import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EducationModule } from './education/education.module'
import { ExperienceModule } from './experience/experience.module'
import { InformationModule } from './information/information.module'
import { LanguageModule } from './language/language.module'
import { LevelModule } from './level/level.module'
import { SkilModule } from './skil/skil.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: true,
        logging: true
      })
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
    }),
    EducationModule,
    ExperienceModule,
    InformationModule,
    LanguageModule,
    LevelModule,
    SkilModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
