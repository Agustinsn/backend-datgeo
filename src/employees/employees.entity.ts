/* eslint-disable prettier/prettier */
import { Documents } from 'src/documents/documents.entity';
import { Job_Types } from 'src/jobs/job_type.entity';
import { Roles } from 'src/roles/roles.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Employees {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  last_name!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ select: false })
  password!: string;

  @ManyToOne(() => Job_Types, job_type => job_type.id)
  @JoinColumn({ name: 'job_type' })
  job_type!: Job_Types;

  @Column()
  dni!: number;

  @Column({ default: 0 })
  salary!: number;

  @ManyToOne(() => Documents, document => document.id)
  @JoinColumn({ name: 'document_dni' })
  document_dni?: Documents | null;

  @ManyToOne(() => Documents, document => document.id)
  @JoinColumn({ name: 'document_license' })
  document_license?: Documents | null;

  @ManyToOne(() => Documents, document => document.id)
  @JoinColumn({ name: 'document_cv' })
  document_cv?: Documents | null;

  @ManyToOne(() => Roles, role => role.id)
  @JoinColumn({ name: 'role' })
  role!: Roles;

  @Column({ default: true })
  is_active!: boolean;

}
