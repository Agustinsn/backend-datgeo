/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Job_Types {
    @ApiProperty({ example: 1, description: 'ID único del tipo de trabajo' })
    @PrimaryGeneratedColumn()
    id!: number;

    @ApiProperty({ example: "Jefe", description: 'ID único del tipo de trabajo' })
    @Column()
    name!: string;
}
