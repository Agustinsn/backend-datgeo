/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Job_TypesService } from './job_type.service';
import { Job_Types } from './job_type.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('job_types')
export class Job_TypesController {
    constructor(private readonly job_TypesService: Job_TypesService) { }

    @ApiOperation({ summary: 'Obtener todos los tipos de trabajo' })
    @ApiResponse({ status: 200, description: 'Usuario modificado', type: [Job_Types] })
    @Get()
    async getAllJobType(): Promise<Job_Types[]> {
        return this.job_TypesService.findAll();
    }

}
