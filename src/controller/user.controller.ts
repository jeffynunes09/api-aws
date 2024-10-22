import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/CreateUserDto";

@Controller('user')
export class UserController {

@Post()             
public async createUser(@Body() createUserDto:CreateUserDto) : Promise<any>{

      return {
            ok:true,
      }

}
      

}