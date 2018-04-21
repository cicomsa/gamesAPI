import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
//import { Contains } from 'class-validator';

//import { ColorValidator } from './validator'
//import {color} from './controller'

@Entity({name: "games"})
export default class Games extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  name: string

  //@ValidateIf(o => o.color ==="yellow" || o.color==="red" || o.color==="blue" || o.color==="magenta" || o.color==="green")
  //@Contains("yellow" || "red" || "blue" || "magenta" || "green")
  @Column('text')
  color: string
 
  @Column('json', {nullable: true})
  board: JSON
}