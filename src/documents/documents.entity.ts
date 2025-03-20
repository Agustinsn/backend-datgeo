/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Document_Type } from './document_type.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Documents {
  @ApiProperty({ example: 1, description: 'ID único del documento' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 1, description: 'ID del tipo de documento, relacionado a la tabla Document_Type' })
  @ManyToOne(() => Document_Type, document_type => document_type.id)
  @JoinColumn({ name: 'type' })
  type!: Document_Type;

  @ApiProperty({ example: 'https://datgeo-prueba.s3.us-ea...', description: 'Path del documento alojado en S3' })
  @Column()
  path!: string;

  @ApiProperty({ example: 'Cv-Sosa.pdf', description: 'Nombre del documento' })
  @Column({ default: '' })
  name!: string;

  @ApiProperty({ example: true, description: 'Estado del documento' })
  @Column({ default: false })
  is_active!: boolean;

}
