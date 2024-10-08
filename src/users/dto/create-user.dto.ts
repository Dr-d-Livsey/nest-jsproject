import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto{
    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    readonly email: string;

    @ApiProperty({example: '1Fgsh123DD', description: 'Пароль'})
    readonly password: string;
}