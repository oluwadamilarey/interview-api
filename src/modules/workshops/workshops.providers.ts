import { Workshop } from './workshop.entity';
import { WORKSHOP_REPOSITORY } from '../../core/constants';

export const workshopsProviders = [{
    provide: WORKSHOP_REPOSITORY,
    useValue: Workshop,
}];

//provider for communicating with the database