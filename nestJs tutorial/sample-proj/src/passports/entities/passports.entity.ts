import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import type { Users } from '../../users/entities/Users.entity.js';

@Entity('passports')
export class Passports {
  @PrimaryColumn({
    type: 'varchar',
    length: 20,
  })
  passportNo: string;
  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  holderName: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  nationality: string;

  @OneToOne('Users', (user: Users) => user.passport, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: Users;
}
