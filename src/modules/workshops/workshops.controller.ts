import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { Workshop } from './workshop.entity';
import { WorkshopDto } from './dto/workshop.dto';
import { WORKSHOP_REPOSITORY } from '../../core/constants';
import { WorkshopsService } from './workshops.service'
import { get } from 'node:http';

@Controller('workshops')
export class WorkshopsController {
    constructor(private readonly workshopsService: WorkshopsService ) { }

    @Get()
    async findAll(){
        return await this.post
    }
}
