/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employees } from './employees.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeeService: EmployeesService) { }

    @ApiOperation({ summary: 'Obtener todos los usuarios' })
    @ApiResponse({ status: 200, description: 'Lista de usuarios', type: [Employees] })
    @Get()
    async getAllUsers(): Promise<Employees[]> {
        return this.employeeService.findAll();
    }

    @ApiOperation({ summary: 'Obtener un usuario' })
    @ApiResponse({ status: 200, description: 'Datos del usuario', type: Employees })
    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<Employees | null> {
        return this.employeeService.findOne(id);
    }

    @ApiOperation({ summary: 'Crear un usuario' })
    @ApiResponse({ status: 201, description: 'Usuario creado', type: Employees })
    @Post()
    async createUser(@Body() employee: Employees): Promise<Employees> {
        return this.employeeService.create(employee);
    }

    @ApiOperation({ summary: 'Editar datos un usuario' })
    @ApiResponse({ status: 200, description: 'Usuario modificado', type: Employees })
    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() employee: Employees): Promise<Employees | null> {
        return this.employeeService.update(id, employee);
    }
}
