import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Experience {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 250, nullable: false })
  role: string

  @Column({ length: 20, nullable: false })
  type: string

  @Column({ length: 250, nullable: false })
  company: string

  @Column({ length: 200, nullable: false })
  city: string

  @Column({ length: 200, nullable: false })
  country: string

  @Column({ length: 200, nullable: false })
  description: string

  @Column({ type: 'timestamptz', nullable: false })
  begin: Date

  @Column({ type: 'timestamptz', nullable: true })
  end: Date
}
