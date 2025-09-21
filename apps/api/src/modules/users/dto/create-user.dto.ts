import { IsEmail, IsInt, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ description: 'Name of the user' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'Age of the user' })
    @IsInt()
    @Min(0)
    age: number;

    @ApiProperty({ description: 'Email of the user' })
    @IsEmail()
    email: string;
}