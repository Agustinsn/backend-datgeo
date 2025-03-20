/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Document_Type {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    type!: string;

}
