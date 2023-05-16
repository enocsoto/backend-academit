import { MainSeeder } from "src/seed/entities/mainSeeder";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
    type: 'mysql', // aquí debe especificar su tipo de base de datos, puede ser mysql, postgresql, sqlite, etc.
    host: 'localhost',
    port: 3310,
    username: 'fran',
    password: 'Adrian12234..',
    database: 'academit-db',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    synchronize:true, 
    seeds: [MainSeeder]
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;