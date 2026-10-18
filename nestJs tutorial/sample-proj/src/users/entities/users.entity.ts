import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    name: 'userName',
    type: 'varchar',
    length: 30,
    default: 'moew',
    unique: true,
    nullable: true,
  })
  name: string;

  @Column({
    name: 'userPass',
    type: 'varchar',
  })
  password: string;
}
