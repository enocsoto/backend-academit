import { User } from 'src/users/entities';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import * as bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { } from 'uuid'
import { randFutureDate } from '@ngneat/falso';

export class UserSeeder implements Seeder {
  async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
    const userRepository = dataSource.getRepository(User)
    userRepository.delete({})

    const userData = await this.createFake()
    const dataCreated = await Promise.all(userData.map(item => userRepository.create(item)))
    const dataFull = await Promise.all(dataCreated.map(item => userRepository.save(item)))

    return dataFull
  }

  async createFake() {
    const data: Array<User> = []
    for (let i = 0; i < 20; i++) {
      data.push({
        id: faker.string.uuid(),
        name: faker.person.firstName('male'),
        lastname: faker.person.lastName('male'),
        username: faker.internet.userName(),
        password: await bcrypt.hash('example', 8),
        email: faker.internet.email(),
        createdat: faker.date.anytime(),
      })
    }

    return data
  }
}

