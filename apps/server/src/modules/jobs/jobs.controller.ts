import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateJobDto, JobStatus, JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getJobs(@Query('status') status?: JobStatus) {
    return { jobs: this.jobsService.findAll(status) };
  }

  @Get(':id')
  getJobById(@Param('id') id: string) {
    const job = this.jobsService.findById(id);
    return job ?? { message: 'Job not found' };
  }

  @Post()
  createJob(@Body() payload: CreateJobDto) {
    return { message: 'Job created', job: this.jobsService.create(payload) };
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: JobStatus) {
    const job = this.jobsService.updateStatus(id, status);
    return job ? { message: 'Status updated', job } : { message: 'Job not found' };
  }
}
