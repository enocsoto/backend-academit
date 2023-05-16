import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager, runSeeder } from "typeorm-extension";
import { UserSeeder } from "./userSeeder";

export class MainSeeder implements Seeder{
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        await runSeeder(dataSource, UserSeeder)
        //more Seeders generate example: await runSeeder(dataSource, AuthSeeder)
        //se ejecutan en orden desendiente primero UserSeeder luego AuthSeeder etc...
    }
}