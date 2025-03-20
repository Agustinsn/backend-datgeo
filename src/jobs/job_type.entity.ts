/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Job_Types {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;
}
