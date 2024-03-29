import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'src/config/data-source';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    TypeOrmModule.forRoot({...dataSourceOptions}),
    AuthModule,
    UsersModule,
    VideosModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'ERROR_DUP_ENTRY',
      useFactory: () => {
        return 'ER_DUP_ENTRY';
      },
    },
  ],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT');
  }
}
