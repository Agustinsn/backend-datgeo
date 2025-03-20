/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employees } from './employees.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employees)
        private readonly employeeRepository: Repository<Employees>,
    ) { }

    async findAll(): Promise<Employees[]> {
        return this.employeeRepository.find({
            relations: [
                'job_type',
                'role',
                'document_dni',
                'document_license',
                'document_cv',
            ],
        });
    }

    async findOne(id: number): Promise<Employees | null> {
        return this.employeeRepository.findOneBy({ id });
    }

    async create(employee: Employees): Promise<Employees> {
        const { document_dni, document_cv, document_license, password, ...rest } = employee;
        const hashedPassword = await bcrypt.hash(password, 10);

        return this.employeeRepository.save({
            ...rest,
            password: hashedPassword,
            document_dni: document_dni || null,
            document_license: document_license || null,
            document_cv: document_cv || null,
        });
    }

    async update(id: number, employee: Employees): Promise<Employees | null> {
        const { document_dni, document_cv, document_license, password, ...rest } = employee;

        const user = await this.employeeRepository.findOneBy({ id });
        const hashedPassword = password
            ? await bcrypt.hash(password, 10)
            : user?.password;

        await this.employeeRepository.update(id, {
            ...rest,
            password: hashedPassword,
            document_dni: document_dni || null,
            document_license: document_license || null,
            document_cv: document_cv || null,
        });
        return this.employeeRepository.findOneBy({ id });
    }
}
