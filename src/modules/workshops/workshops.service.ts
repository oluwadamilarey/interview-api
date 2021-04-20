import { Injectable, Inject } from '@nestjs/common';
import { Workshop } from './workshop.entity';
import { WorkshopDto } from './dto/workshop.dto';
import { WORKSHOP_REPOSITORY } from '../../core/constants';

@Injectable()
export class WorkshopsService {

    constructor(@Inject(WORKSHOP_REPOSITORY) private readonly workshopRepository: typeof Workshop) { }

    async create(workshop: WorkshopDto): Promise<Workshop> {
        return await this.workshopRepository.create<Workshop>(workshop);
    }

    async findOneByField(field: string): Promise<Workshop> {
        return await this.workshopRepository.findOne<Workshop>({ where: { field } });
    }

    async findById(id: number): Promise<Workshop> {
        return await this.workshopRepository.findOne<Workshop>({ where: { id } });
    }

    async findAll(): Promise<Workshop[]> {
        return await this.workshopRepository.findAll<Workshop>();
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedWorkshop]] = await this.workshopRepository.update({ ...data }, { where: { id }, returning: true });

        return { numberOfAffectedRows, updatedWorkshop };
    }

    async delete(id, userId) {
        return await this.workshopRepository.destroy({ where: { id } });
    }

}