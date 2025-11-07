import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ReseniaRepartidorModule } from './resenia-repartidor/resenia-repartidor.module';
import { RepartidorModule } from './repartidor/repartidor.module';
import { AdministradorBackofficeModule } from './administrador-backoffice/administrador-backoffice.module';
import { MetodopagoModule } from './metodopago/metodopago.module';
import { DescuentoModule } from './descuento/descuento.module';
import { DetallepedidoModule } from './detallepedido/detallepedido.module';
import { PedidoModule } from './pedido/pedido.module';
import { PlatoModule } from './plato/plato.module';
import { CategoriarestauranteModule } from './categoriarestaurante/categoriarestaurante.module';
import { CategoriaModule } from './categoria/categoria.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { AdministradorRestauranteModule } from './administrador-restaurante/administrador-restaurante.module';
import { DireccionModule } from './direccion/direccion.module';
import { ConfigModule } from '@nestjs/config';
import { ReseniaRestauranteModule } from './resenia-restaurante/resenia-restaurante.module';
import { DireccionrestauranteModule } from './direccionrestaurante/direccionrestaurante.module';
import { ReseniaRestauranteModule } from './resenia-restaurante/resenia-restaurante.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT ?? '5432', 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),UsuariosModule, ReseniaRestauranteModule, DireccionrestauranteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
