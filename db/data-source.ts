import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions= {
    type: 'mysql', // aquí debe especificar su tipo de base de datos, puede ser mysql, postgresql, sqlite, etc.
    host: 'localhost',
    port: 3310,
    username: 'fran',
    password: 'Adrian12234..',
    database: 'academit-db',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js']
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;