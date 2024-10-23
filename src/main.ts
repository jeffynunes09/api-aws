import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';


const { PORT = 3000 } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({transform:true,whitelist:true}))

  const config = new DocumentBuilder()
  .setTitle("API Rest Nest Js do zero a AWS com Terraform")
  .addBearerAuth()
  .setVersion("1.0")
  .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);


  await app.listen(PORT);

  console.log(`Server is running on port ${PORT}`)
  console.log(`Swagger id on : http://localhost:${PORT}/api`)
}
bootstrap();
