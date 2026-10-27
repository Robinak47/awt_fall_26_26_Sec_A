import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import type { Cars } from './../../cars/entities/cars.entity.js';
import type { Passports } from '../../passports/entities/passports.entity.js';

@Entity('users')
export class Users {
  @PrimaryColumn({
    length: 10,
    type: 'varchar',
  })
  id: string;

  @Column({
    name: 'userName',
    type: 'varchar',
    length: 100,
    nullable: true,
    default: 'meow',
  })
  name: string;

  @Column({
    name: 'userAge',
    type: 'int',
  })
  age: number;
  @Column({
    name: 'userEmail',
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  email: string;
  @Column({
    name: 'userAddress',
    type: 'varchar',
    length: 1000,
  })
  address: string;
  @Column({
    name: 'userGender',
    type: 'varchar',
    length: 6,
  })
  gender: string;
  @Column()
  isBangladeshi: boolean;

  @Column({
    name: 'pass',
    type: 'varchar',
    length: 20,
  })
  password: string;

  @OneToOne('Passports', (passport: Passports) => passport.user)
  passport: Passports;

  @OneToMany('Cars', (cars: Cars) => cars.user)
  cars: Cars[];

  @UpdateDateColumn()
  updateUser: Date;

  @CreateDateColumn()
  createUser: Date;

  @DeleteDateColumn()
  deleteUser: Date;
}
