/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { S3Service } from './s3.service';

@Controller('s3')
export class S3Controller {
    constructor(private readonly s3Service: S3Service) { }

    @Get('upload-url')
    async getUploadUrl(@Query('fileName') fileName: string, @Query('contentType') contentType: string) {
        return { url: await this.s3Service.getUploadUrl(fileName, contentType) };
    }

    @Get('download-url')
    async getDownloadUrl(@Query('fileName') fileName: string) {
        return { url: await this.s3Service.getDownloadUrl(fileName) };
    }
}
