import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto{


    
      @ApiProperty({
            description:"The name of the user",
            example: "Johny Doe"
      })
      @IsNotEmpty()
      name: string;
      @ApiProperty({
            description:"The email of the user",
            example: "johnydoe@gmail.com"
      })
      @IsNotEmpty()
      @IsEmail()
      email: string;

      @ApiProperty({
            description:"The password of the user",
            example: "123456"
      })
      @IsNotEmpty()
      password: string;



}

