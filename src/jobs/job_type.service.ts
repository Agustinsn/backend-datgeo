/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job_Types } from './job_type.entity';

@Injectable()
export class Job_TypesService {
    constructor(
        @InjectRepository(Job_Types)
        private readonly job_TypesRepository: Repository<Job_Types>,
    ) { }

    async findAll(): Promise<Job_Types[]> {
        return this.job_TypesRepository.find();
    }
}
