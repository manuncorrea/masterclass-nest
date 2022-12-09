import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { RocketMemberRepository } from '../rocket-members-repository';

@Injectable()
export class PrismaMeberRepository implements RocketMemberRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, functions: string): Promise<void> {
    await this.prisma.rocketeamMenber.create({
      data: {
        id: randomUUID(),
        name,
        functions,
      },
    });
  }
}
