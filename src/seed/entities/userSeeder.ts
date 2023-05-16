import { User } from 'src/users/entities';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

export class UserSeeder implements Seeder{
   async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
      const userRepository = dataSource.getRepository(User)

      const userData= {
        id: randomUUID(),
        name    : 'example',
        lastname: 'second example',
        username: 'userexample',
        password: await bcrypt.hash('example', 8),
        email   : 'examplemail@mail.com',
      }
      const newUser = userRepository.create(userData);
      await userRepository.save(newUser);
    }
}

function UUID() {
    throw new Error('Function not implemented.');
}
