/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Put, Param } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { Documents } from './documents.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('documents')
export class DocumentsController {
    constructor(private readonly documentService: DocumentsService) { }

    @ApiOperation({ summary: 'Crear nuevo documento' })
    @ApiResponse({ status: 200, description: 'Documento creado', type: Documents })
    @Post()
    async createDocument(@Body() document: Documents): Promise<Documents> {
        return this.documentService.create(document);
    }

    @ApiOperation({ summary: 'Editar documento' })
    @ApiResponse({ status: 200, description: 'Documento editado', type: Documents })
    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() document: Documents): Promise<Documents | null> {
        return this.documentService.update(id, document);
    }
}
