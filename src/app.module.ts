/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';
import { Employees } from './employees/employees.entity';
import { AppDataSource } from './database/data-source';
import { Job_TypesController } from './jobs/job_type.controller';
import { Job_TypesService } from './jobs/job_type.service';
import { Job_Types } from './jobs/job_type.entity';
import { S3Controller } from './s3/s3.controller';
import { S3Service } from './s3/s3.service';
import { Documents } from './documents/documents.entity';
import { DocumentsController } from './documents/documents.controller';
import { DocumentsService } from './documents/documents.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forFeature([Employees]),
    TypeOrmModule.forFeature([Job_Types]),
    TypeOrmModule.forFeature([Documents]),
  ],
  controllers: [EmployeesController, Job_TypesController, S3Controller, DocumentsController],
  providers: [EmployeesService, Job_TypesService, S3Service, DocumentsService],
})
export class AppModule { }
