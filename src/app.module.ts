import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    AuthModule,
    UsersModule,
    VideosModule,
    TypeOrmModule.forRoot({
      type: 'mysql', // aquí debe especificar su tipo de base de datos, puede ser mysql, postgresql, sqlite, etc.
      host: 'localhost',
      port: 3306,
      username: 'fran',
      password: 'Adrian12234..',
      database: 'academit-db',
      autoLoadEntities: true,
    }),
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
export class AppModule {}
