import { MainSeeder } from "src/seed/entities/mainSeeder";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { ConfigModule, ConfigService } from '@nestjs/config';

ConfigModule.forRoot({
    envFilePath: `.${process.env.NODE_ENV}.env` 
  });
  const configService = new ConfigService();
export const dataSourceOptions: DataSourceOptions & SeederOptions = {
    type: 'mysql', // aquí debe especificar su tipo de base de datos, puede ser mysql, postgresql, sqlite, etc.
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'), 
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    synchronize:true, 
    seeds: [MainSeeder]
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;