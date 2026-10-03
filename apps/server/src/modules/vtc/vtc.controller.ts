import { Controller, Get } from '@nestjs/common';

@Controller('vtc')
export class VtcController {
  @Get()
  getVtcs() {
    return {
      vtcs: [
        {
          id: 'vtc_001',
          name: 'Eiffel Express',
          tag: 'EE',
          members: 26,
          activeJobs: 18,
        },
      ],
    };
  }
}
