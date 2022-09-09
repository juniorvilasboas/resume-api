import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Language {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  @Generated('increment')
  item: number

  @Column({ length: 30, nullable: false })
  name: string

  @Column({ length: 2, nullable: false })
  understanding: string

  @Column({ length: 2, nullable: false })
  speaking: string

  @Column({ length: 2, nullable: false })
  writing: string
}
