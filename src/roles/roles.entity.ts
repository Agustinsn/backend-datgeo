/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Roles {
    @PrimaryColumn()
    id!: number;

    @Column()
    name!: string;
}
