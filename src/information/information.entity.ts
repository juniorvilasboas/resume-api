import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Information {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 20, nullable: false })
  phone: string

  @Column({ length: 200, nullable: false })
  address: string

  @Column({ length: 100, nullable: false })
  city: string

  @Column({ length: 30, nullable: false })
  country: string

  @Column({ length: 10, nullable: false })
  cep: string
}
