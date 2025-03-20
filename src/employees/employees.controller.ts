/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employees } from './employees.entity';


@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeeService: EmployeesService) { }

    @Get()
    async getAllUsers(): Promise<Employees[]> {
        return this.employeeService.findAll();
    }

    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<Employees | null> {
        return this.employeeService.findOne(id);
    }

    @Post()
    async createUser(@Body() employee: Employees): Promise<Employees> {
        return this.employeeService.create(employee);
    }

    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() employee: Employees): Promise<Employees | null> {
        return this.employeeService.update(id, employee);
    }
}
