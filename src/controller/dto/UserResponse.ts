import { IsEmail } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";


export class UserResponse{

      @ApiProperty({
          description:"The id of created user",
          example: "32323-12309CJMDWD"  
      })
     public id: string;


   
     constructor(id:string) {

        this.id= id
       
        
     }



}