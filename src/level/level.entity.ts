import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Level {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  @Generated('increment')
  item: number

  @Column({ length: 30, nullable: false })
  value: string

  @Column({ length: 20, nullable: false })
  label: string

  @Column({ length: 900, nullable: false })
  description: string
}
