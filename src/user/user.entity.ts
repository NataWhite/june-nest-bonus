import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from '../common/abstract.entity';

export interface UserCreationAttrs {
  email: string;
  password: string;
  username: string;
  city: string;
  status: boolean;
}

@Entity()
export class User extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  city: string;

  @Column({ type: 'boolean' })
  status: boolean;

  @Column({ type: 'varchar', nullable: false })
  username: string;
}
