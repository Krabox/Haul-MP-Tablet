import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateJobDto, JobStatus, JobsService } from './jobs.service';
import { JobAssignmentService } from './job-assignment.service';

@Controller('jobs')
export class JobsController {
  constructor(
    private readonly jobsService: JobsService,
    private readonly assignmentService: JobAssignmentService,
  ) {}

  @Get()
  getJobs(@Query('status') status?: JobStatus) {
    return { jobs: this.jobsService.findAll(status) };
  }

  @Get(':id')
  getJobById(@Param('id') id: string) {
    const job = this.jobsService.findById(id);
    const assignments = this.assignmentService.getAssignmentsForJob(id);
    return { job, assignments };
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

  @Post(':id/assign')
  assignJob(@Param('id') jobId: string, @Body() payload: { playerId: string; role: 'driver' | 'escort' | 'support' }) {
    const assignment = this.assignmentService.createAssignment(jobId, payload.playerId, payload.role);
    return { message: 'Job assigned', assignment };
  }

  @Post(':id/accept')
  acceptJob(@Param('id') jobId: string, @Body() payload: { playerId: string }) {
    const assignment = this.assignmentService.acceptAssignment(jobId, payload.playerId);
    const job = this.jobsService.updateStatus(jobId, 'accepted');
    return { message: 'Job accepted', assignment, job };
  }
}
