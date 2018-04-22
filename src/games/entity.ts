import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Validate } from 'class-validator';
import { ColorValidator } from './validator';


@Entity({name: "games"})
export default class Games extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

 
  @Column('text')
  name: string

  //@ValidateIf(o => o.color ==="yellow" || o.color==="red" || o.color==="blue" || o.color==="magenta" || o.color==="green")
  //@Contains("yellow" || "red" || "blue" || "magenta" || "green")
  //@Equals("red")
  @Validate(ColorValidator)
  @Column('text')
  color: string
 

  @Column('json', {nullable: true})
  board: JSON
}