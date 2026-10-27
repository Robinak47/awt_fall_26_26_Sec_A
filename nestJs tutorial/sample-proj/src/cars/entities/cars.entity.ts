import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import type { Users } from '../../users/entities/Users.entity.js';

@Entity('cars')
export class Cars {
  @PrimaryColumn({
    type: 'varchar',
    length: 10,
  })
  regiNo: string;
  @Column({
    type: 'varchar',
    length: 20,
  })
  carModel: string;
  @Column({
    type: 'varchar',
    length: 20,
  })
  manufacturer: string;

  @ManyToOne('Users', (user: Users) => user.cars, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: Users;
}
