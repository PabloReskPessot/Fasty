import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [UsuariosModule, DireccionModule, AdministradorRestauranteModule, RestauranteModule, CategoriaModule, CategoriarestauranteModule, PlatoModule, PedidoModule, DetallepedidoModule, DescuentoModule, MetodopagoModule, AdministradorBackofficeModule, RepartidorModule, ReseniaRepartidorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
