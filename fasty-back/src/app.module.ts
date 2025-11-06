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


@Module({
  imports: [UsuariosModule, DireccionModule, AdministradorRestauranteModule, RestauranteModule, CategoriaModule, CategoriarestauranteModule, PlatoModule, PedidoModule, DetallepedidoModule, DescuentoModule, MetodopagoModule, AdministradorBackofficeModule, RepartidorModule, ReseniaRepartidorModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database_name',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Busca automáticamente todas las entidades
      synchronize: true, // ¡Cuidado en producción!
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
