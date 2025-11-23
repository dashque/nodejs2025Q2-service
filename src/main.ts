import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import yaml from 'yamljs';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const swaggerDocument = yaml.load('./doc/api.yaml');
  SwaggerModule.setup('api', app, swaggerDocument);
  await app.listen(process.env.PORT);
}
bootstrap();
