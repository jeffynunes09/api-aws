import { v4 as uuid } from 'uuid';
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "@root/controller/dto/CreateUserDto";


interface CreateUserParams {

      name:string;
      email:string;
      password:string;
}


@Injectable()
export class UserService{


createUser(params:CreateUserParams):Promise<string> {

    console.log(params)
      return uuid()
      
       
 }


      




}