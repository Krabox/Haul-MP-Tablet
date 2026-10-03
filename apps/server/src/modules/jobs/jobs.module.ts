import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { JobAssignmentService } from './job-assignment.service';

@Module({
  controllers: [JobsController],
  providers: [JobsService, JobAssignmentService],
  exports: [JobsService, JobAssignmentService],
})
export class JobsModule {}
