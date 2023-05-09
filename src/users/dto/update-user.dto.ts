import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    example: 'John',
    description: 'The name of the user',
    maxLength: 50,
  })
  name?: string;

  @ApiProperty({
    example: 'Doe',
    description: 'The last name of the user',
    maxLength: 50,
  })
  lastname?: string;

  @ApiProperty({
    example: 'johndoe',
    description: 'The username of the user',
    maxLength: 50,
  })
  username?: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the user',
  })
  password?: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email address of the user',
    maxLength: 255,
  })
  email?: string;

  @ApiProperty({
    example: '1990-01-01',
    description: 'The birthdate of the user in ISO date format',
  })
  birthdate?: Date;
}
