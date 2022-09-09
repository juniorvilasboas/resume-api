import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Skil } from '../skil/skil.entity'

@Entity()
export class Portifolio {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 250, nullable: false })
  layout: string

  @Column({ length: 50, nullable: false })
  name: string

  @Column({ length: 200, nullable: false })
  site: string

  @Column({ length: 20, nullable: false })
  category: string

  @Column({ length: 250, nullable: false })
  subject: string

  @Column({ length: 250, nullable: false })
  description: string

  @ManyToOne(type => Skil, skil => skil.id)
  skil: Skil
}
