/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { S3Service } from './s3.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('s3')
export class S3Controller {
    constructor(private readonly s3Service: S3Service) { }

    @ApiOperation({ summary: 'Subir un archivo a S3' })
    @ApiResponse({ status: 200, description: 'Archivo subido', type: S3Service })
    @Get('upload-url')
    async getUploadUrl(@Query('fileName') fileName: string, @Query('contentType') contentType: string) {
        return { url: await this.s3Service.getUploadUrl(fileName, contentType) };
    }

    @ApiOperation({ summary: 'Descargar un archivo a S3' })
    @ApiResponse({ status: 200, description: 'Archivo descargado', type: S3Service })
    @Get('download-url')
    async getDownloadUrl(@Query('fileName') fileName: string) {
        return { url: await this.s3Service.getDownloadUrl(fileName) };
    }
}
