import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaMeberRepository } from './repositories/prisma/prisma-members-repository';
import { RocketMemberRepository } from './repositories/rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RocketMemberRepository,
      useClass: PrismaMeberRepository,
    },
  ],
})
export class AppModule {}
