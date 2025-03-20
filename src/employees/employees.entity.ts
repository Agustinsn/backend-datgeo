/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Documents } from 'src/documents/documents.entity';
import { Job_Types } from 'src/jobs/job_type.entity';
import { Roles } from 'src/roles/roles.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Employees {
  @ApiProperty({ example: 1, description: 'ID único del usuario' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'Agustin', description: 'Nombre del usuario' })
  @Column()
  name!: string;

  @ApiProperty({ example: 'Sosa', description: 'Apellido del usuario' })
  @Column()
  last_name!: string;

  @ApiProperty({ example: 'agustinasn95@gmail.com', description: 'Correo del usuario' })
  @Column({ unique: true })
  email!: string;

  @ApiProperty({ example: '$123SD#3424', description: 'Contraseña del usuario hasheada' })
  @Column({ select: false })
  password!: string;

  @ApiProperty({ example: 1, description: 'Id del tipo de trabajo del usuario, relacionada a la tabla Job_Types' })
  @ManyToOne(() => Job_Types, job_type => job_type.id)
  @JoinColumn({ name: 'job_type' })
  job_type!: Job_Types;

  @ApiProperty({ example: 12456971, description: 'Número de dni del usuario' })
  @Column()
  dni!: number;

  @ApiProperty({ example: 2000, description: 'Sueldo del usuario' })
  @Column({ default: 0 })
  salary!: number;

  @ApiProperty({ example: 1, description: 'Id del documento DNI del usuario, relacionada a la tabla Documents' })
  @ManyToOne(() => Documents, document => document.id)
  @JoinColumn({ name: 'document_dni' })
  document_dni?: Documents | null;

  @ApiProperty({ example: 2, description: 'Id del documento License del usuario, relacionada a la tabla Documents' })
  @ManyToOne(() => Documents, document => document.id)
  @JoinColumn({ name: 'document_license' })
  document_license?: Documents | null;

  @ApiProperty({ example: 3, description: 'Id del documento CV del usuario, relacionada a la tabla Documents' })
  @ManyToOne(() => Documents, document => document.id)
  @JoinColumn({ name: 'document_cv' })
  document_cv?: Documents | null;

  @ApiProperty({ example: 1, description: 'Id del rol del usuario, relacionada a la tabla Roles' })
  @ManyToOne(() => Roles, role => role.id)
  @JoinColumn({ name: 'role' })
  role!: Roles;

  @ApiProperty({ example: true, description: 'Estado del usuario.' })
  @Column({ default: true })
  is_active!: boolean;

}
