import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, Request } from '@nestjs/common';
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

    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req) {
        const deleted = await this.workshopsService.delete(id, req.user.id);
        if (deleted === 0) {
            throw new NotFoundException('This workshop doesn\'t exist');
        }
        return 'Successfully deleted';
    }
    
    @Post()
    async create(@Body() workshop: WorkshopDto, @Request() req): Promise<workshopEntity> {
        return await this.workshopsService.create(workshop);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() workshop: WorkshopDto, @Request() req): Promise<workshopEntity> {
        const { updatedWorkshop, numberOfAffectedRows } = await this.workshopsService.update(id, workshop);

        
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This workshop doesn\'t exist');
        }

        
        return updatedWorkshop;
    }
}
