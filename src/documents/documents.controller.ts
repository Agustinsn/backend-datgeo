/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Put, Param } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { Documents } from './documents.entity';


@Controller('documents')
export class DocumentsController {
    constructor(private readonly documentService: DocumentsService) { }

    @Post()
    async createDocument(@Body() document: Documents): Promise<Documents> {
        return this.documentService.create(document);
    }

    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() document: Documents): Promise<Documents | null> {
        return this.documentService.update(id, document);
    }
}
