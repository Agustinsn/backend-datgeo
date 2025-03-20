/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Documents } from './documents.entity';

@Injectable()
export class DocumentsService {
    constructor(
        @InjectRepository(Documents)
        private readonly documentsRepository: Repository<Documents>,
    ) { }

    async create(document: Documents): Promise<Documents> {
        return this.documentsRepository.save(document);
    }

    async update(id: number, document: Documents): Promise<Documents | null> {
        await this.documentsRepository.update(id, document);
        return this.documentsRepository.findOneBy({ id });
    }
}
