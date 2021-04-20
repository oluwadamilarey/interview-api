import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { WorkshopsModule } from './modules/workshops/workshop.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    WorkshopsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
