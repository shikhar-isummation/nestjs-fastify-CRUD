import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

'const PORT = 5000;
async function bootstrap() {
  try {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
    console.log(`Running on Express adapter at port: 3000 ${PORT}`);
    await app.listen(PORT);
    app.useGlobalPipes(new ValidationPipe());
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
