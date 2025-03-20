/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Document_Type } from './document_type.entity';

@Entity()
export class Documents {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Document_Type, document_type => document_type.id)
  @JoinColumn({ name: 'type' })
  type!: Document_Type;

  @Column()
  path!: string;

  @Column({ default: '' })
  name!: string;

  @Column({ default: false })
  is_active!: boolean;

}
