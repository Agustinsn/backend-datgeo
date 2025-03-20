/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Roles {
    @ApiProperty({ example: 1, description: 'ID único del rol' })
    @PrimaryColumn()
    id!: number;

    @ApiProperty({ example: "admin", description: 'Nombre del rol' })
    @Column()
    name!: string;
}
