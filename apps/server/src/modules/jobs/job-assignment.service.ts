import { Injectable } from '@nestjs/common';

export interface JobAssignment {
  jobId: string;
  playerId: string;
  role: 'driver' | 'escort' | 'support';
  status: 'pending' | 'accepted' | 'declined';
  acceptedAt?: string;
}

@Injectable()
export class JobAssignmentService {
  private assignments: JobAssignment[] = [];

  createAssignment(jobId: string, playerId: string, role: 'driver' | 'escort' | 'support') {
    const assignment: JobAssignment = {
      jobId,
      playerId,
      role,
      status: 'pending',
    };
    this.assignments.push(assignment);
    return assignment;
  }

  acceptAssignment(jobId: string, playerId: string) {
    const assignment = this.assignments.find((a) => a.jobId === jobId && a.playerId === playerId);
    if (assignment) {
      assignment.status = 'accepted';
      assignment.acceptedAt = new Date().toISOString();
    }
    return assignment;
  }

  declineAssignment(jobId: string, playerId: string) {
    const assignment = this.assignments.find((a) => a.jobId === jobId && a.playerId === playerId);
    if (assignment) {
      assignment.status = 'declined';
    }
    return assignment;
  }

  getAssignmentsForJob(jobId: string) {
    return this.assignments.filter((a) => a.jobId === jobId);
  }
}
