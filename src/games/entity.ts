import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Contains } from 'class-validator';

@Entity({name: "games"})
export default class Games extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  name: string

  @Contains("red" || "blue" || "yellow" || "magenta" || "green")
  @Column('text')
  color: string


  @Column('json', {nullable: true})
  board: string[]
}