import { Module } from '@nestjs/common';
import { WorkshopsService } from './workshops.service';
import { workshopsProviders } from './workshops.providers'
import { WorkshopsController } from './workshops.controller';


@Module({
    providers: [WorkshopsService, ...workshopsProviders],
    exports: [WorkshopsService],
    controllers: [WorkshopsController],
})
export class WorkshopsModule {}
