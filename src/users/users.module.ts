import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Video } from './entities/video.entity';
import { Categoria } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([User, Video, Categoria])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
