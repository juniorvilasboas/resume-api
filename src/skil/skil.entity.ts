import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Level } from '../level/level.entity'

@Entity()
export class Skil {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 30, nullable: false })
  name: string

  @Column({ length: 40, nullable: false })
  site: string

  @Column({ length: 20, nullable: false })
  ext: string

  @Column({ length: 20, nullable: false })
  tipo: string

  @ManyToOne(type => Level, level => level.id)
  level: Level
}
