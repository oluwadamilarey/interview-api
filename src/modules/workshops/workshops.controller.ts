import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { Workshop as workshopEntity } from './workshop.entity';
import { WorkshopDto } from './dto/workshop.dto';
import { WORKSHOP_REPOSITORY } from '../../core/constants';
import { WorkshopsService } from './workshops.service'
import { get } from 'node:http';

@Controller('workshops')
export class WorkshopsController {
    constructor(private readonly workshopsService: WorkshopsService ) { }

    @Get()
    async findAll(){
        return await this.workshopsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<workshopEntity> {
       
        const workshop = await this.workshopsService.findById(id);
        if (!workshop) {
            throw new NotFoundException('This Workshop doesn\'t exist');
        }
        return workshop;
    }

}
