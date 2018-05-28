import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity({name: "games"})
export default class Games extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number
 
  @Column('text')
  name: string

  @Column('text')
  color: string
 
  @Column('json')
  board: String[][]
}