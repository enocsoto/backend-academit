import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { User } from './user.entity';
import { Categoria } from './category.entity';

@Entity()
export class Video {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  url: string;

  @Column({ length: 500 })
  title: string;

  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @ManyToOne(() => User, (user) => user.videos)
  // user: User;

  @ManyToOne(() => Categoria, (categoria) => categoria.videos)
  categoria: Categoria;
}
