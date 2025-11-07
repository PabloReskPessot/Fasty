import "reflect-metadata";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // lo saque de otro proyecto que hice seguir integrando despues


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //sugerencia de chat gpt para validacion global de dto
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,            // quita props extra no declaradas en DTO
    forbidNonWhitelisted: true, // lanza error si vienen props no permitidos
    transform: true,            // transforma payloads a los tipos de DTO (importante) // transform: true es clave: convierte strings a numbers si usás @Type(() => Number) en el DTO.
  }));

  app.enableCors(); // lo saque de otro proyecto, me habia ayudado con problemas de permisos con el front
  await app.listen(process.env.PORT ?? 3000);



}
bootstrap();
