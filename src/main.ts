import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import * as yaml from 'yamljs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerDocument = yaml.load('./doc/api.yaml');
  SwaggerModule.setup('api', app, swaggerDocument);
  await app.listen(process.env.PORT);
}
bootstrap();
