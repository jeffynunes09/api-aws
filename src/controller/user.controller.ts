import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/CreateUserDto";
import { UserResponse } from "./dto/UserResponse";
import { UserService } from "@root/service/user.service";
import { ApiTags,ApiResponse} from "@nestjs/swagger";


@ApiTags('users')
@Controller('users')
export class UserController{

      constructor(
            private readonly userService:UserService
      ){}

      @Post("")
      @ApiResponse({
            status:HttpStatus.CREATED,description:"User created!",type:UserResponse
      })
      public async createUser(@Body() createUserDto: CreateUserDto):Promise<UserResponse> {
            
            const user = await this.userService.createUser({
                  name: createUserDto.name,
                  email: createUserDto.email,
                  password: createUserDto.password,
            })

            return new UserResponse(user)
      
      }





} 
