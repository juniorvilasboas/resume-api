import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Education {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 50, nullable: false })
  degree: string

  @Column({ length: 200, nullable: false })
  subject: string

  @Column({ length: 50, nullable: false })
  institution: string

  @Column({ length: 200, nullable: false })
  site: string

  @Column({ type: 'timestamptz', nullable: false })
  begin: Date

  @Column({ type: 'timestamptz', nullable: true })
  end: Date
}
