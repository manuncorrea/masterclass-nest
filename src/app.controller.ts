import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMenberBody } from './dtos/create-team-member-body';
import { RocketMemberRepository } from './repositories/rocket-members-repository';

@Controller('app')
export class AppController {
  constructor(private RocketMemberRepository: RocketMemberRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMenberBody) {
    const { name, functions } = body;

    await this.RocketMemberRepository.create(name, functions);
  }
}
