import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/CreateUserDto";
import { UserResponse } from "./dto/UserResponse";
import { UserService } from "@root/service/userr.service";
import { ApiTags,ApiResponse} from "@nestjs/swagger";



@ApiTags('users')
@Controller('users')
export class UserController{

      @Post("")
      @ApiResponse({
            status:HttpStatus.CREATED,description:"User created!",type:UserResponse
      })
      public async createUser(@Body() createUserDto: CreateUserDto):Promise<UserResponse> {


            return {
                  id:"ramdom-id"
            }
      
      }





} 
