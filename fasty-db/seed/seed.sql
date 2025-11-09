-- ============================================
-- 1. CATEGORIAS DE RESTAURANTE
-- ============================================

INSERT INTO categoria_restaurante ("nombre", "descripcion") VALUES
  ('Hamburguesas', 'Locales especializados en burgers'),
  ('Pizzerías', 'Pizzas estilo napolitana, piedra y clásico'),
  ('Comida Mexicana', 'Tacos, burritos y platos típicos');


-- ============================================
-- 2. CATEGORÍAS DE PLATOS
-- ============================================

INSERT INTO categorias ("tipoComida") VALUES
  ('Hamburguesas'),
  ('Pizzas'),
  ('Tacos'),
  ('Bebidas'),
  ('Postres');


-- ============================================
-- 3. MÉTODOS DE PAGO DISPONIBLES
-- ============================================

INSERT INTO metodos_pago_disponibles ("tipo", "banco") VALUES
  ('Tarjeta de Crédito', 'Visa'),
  ('Tarjeta de Débito', 'Mastercard'),
  ('Efectivo', 'N/A'),
  ('Mercado Pago', 'Mercado Libre');


-- ============================================
-- 4. DESCUENTOS
-- ============================================

INSERT INTO descuento ("descripcion", "tipo", "valor", "fechaInicio", "fechaFin", "codigo", "activo") VALUES
  ('Promo 2x1', 'Porcentaje', 50.00, '2024-01-01', '2025-12-31', 'DOSXUNO', TRUE),
  ('Descuento Nuevo Usuario', 'Fijo', 5000.00, '2024-01-01', '2025-12-31', 'NUEVO1000', TRUE),
  ('Sin descuento', 'Porcentaje', 0, '2024-01-01', '2030-12-31', NULL, TRUE);


-- ============================================
-- 5. REPARTIDORES
-- ============================================

INSERT INTO repartidor ("nombre", "vehiculo", "patente", "documento", "disponible", "calificacion", "activo") VALUES
  ('Carlos López', 'Moto', 'A123BCD', '32145678', TRUE, 4.7, TRUE),
  ('Mariana Díaz', 'Bicicleta', NULL, '33999888', TRUE, 4.5, TRUE),
  ('Julián Torres', 'Auto', 'KAA987', '30111222', FALSE, 4.9, TRUE);


-- ============================================
-- 6. USUARIOS
-- ============================================

INSERT INTO usuario ("nombre", "apellido", "email", "contrasena", "telefono", "fechaNacimiento", "genero", "activo") VALUES
  ('Pablo', 'Resk', 'pablo@test.com', '1234', '1133445566', '2002-04-10', 'Masculino', TRUE),
  ('Ana', 'Gómez', 'ana@test.com', '1234', '1177889900', '1995-08-21', 'Femenino', TRUE),
  ('Lucas', 'Ramos', 'lucas@test.com', '1234', '1155998833', '1998-02-12', 'Masculino', TRUE);


-- ============================================
-- 7. DIRECCIONES
-- ============================================

INSERT INTO direccion ("usuarioID", "calle", "altura", "ciudad", "provincia", "pisoDepartamento", "indicaciones", "latitud", "longitud", "predeterminada")
VALUES
  ((SELECT "usuarioID" FROM usuario WHERE "email"='pablo@test.com'),
    'Av. Rivadavia', '4500', 'Buenos Aires', 'Buenos Aires', '3B', 'Tocar timbre', -34.6100, -58.4300, TRUE),

  ((SELECT "usuarioID" FROM usuario WHERE "email"='ana@test.com'),
    'Córdoba', '900', 'Buenos Aires', 'Buenos Aires', NULL, 'Casa verde', -34.6001, -58.3802, TRUE),

  ((SELECT "usuarioID" FROM usuario WHERE "email"='lucas@test.com'),
    'Medrano', '1200', 'Buenos Aires', 'Buenos Aires', '2A', 'Puerta negra', -34.6200, -58.4201, TRUE);


-- ============================================
-- 8. DIRECCIONES DE RESTAURANTES
-- ============================================

INSERT INTO direccion_restaurante ("calle", "altura", "ciudad", "latitud", "longitud")
VALUES
  ('Av. Corrientes', '2500', 'Buenos Aires', -34.6030, -58.4000),
  ('Scalabrini Ortiz', '1500', 'Buenos Aires', -34.5830, -58.4200),
  ('Av. San Juan', '800', 'Buenos Aires', -34.6200, -58.3850);


-- ============================================
-- 9. RESTAURANTES
-- ============================================

INSERT INTO restaurante ("nombre", "descripcion", "telefono", "horarioApertura", "horarioCierre", "logo",
                         "puntuacion", "activo", "categoriaCategoriaRestauranteID",
                         "direccionRestauranteDireccionRestauranteID")
VALUES
  ('Burger King', 'Hamburguesas clásicas y combos', '1144556677', '11:00', '23:00', 'bk.png',
   4.3, TRUE,
   (SELECT "categoriaRestauranteID" FROM categoria_restaurante WHERE "nombre"='Hamburguesas'),
   1),

  ('Guerrin Pizza', 'Pizzería clásica porteña', '1133557799', '11:30', '00:00', 'guerrin.png',
   4.8, TRUE,
   (SELECT "categoriaRestauranteID" FROM categoria_restaurante WHERE "nombre"='Pizzerías'),
   2),

  ('El Mariachi', 'Tacos, burritos y quesadillas', '1166778899', '12:00', '23:30', 'mariachi.png',
   4.6, TRUE,
   (SELECT "categoriaRestauranteID" FROM categoria_restaurante WHERE "nombre"='Comida Mexicana'),
   3);


-- ============================================
-- 10. ADMINISTRADOR DE RESTAURANTE
-- ============================================

INSERT INTO administrador_restaurante ("restauranteID", "cuit", "mail", "nombre", "clave", "activo") VALUES
  (1, '30-12345678-9', 'admin@bk.com', 'Roberto Burgers', 'admin123', TRUE),
  (2, '30-98765432-1', 'admin@guerrin.com', 'Carlos Pizza', 'admin123', TRUE),
  (3, '30-56789123-4', 'admin@mariachi.com', 'Ana Taco', 'admin123', TRUE);


-- ============================================
-- 11. PLATOS
-- ============================================

INSERT INTO plato ("nombre", "precio", "porcentajeDescuento", "total", "imagen", "descripcion", "activo",
                   "categoriaId", "restauranteID")
VALUES
  -- BURGER KING
  ('Whopper', 35000, 0, 35000, 'whopper.png', 'Clásica Whopper con carne grillada', TRUE,
    (SELECT "categoriaID" FROM categorias WHERE "tipoComida"='Hamburguesas'), 1),

  ('Stacker Doble', 42000, 10, 37800, 'stacker.png', 'Doble carne con bacon y queso', TRUE,
    (SELECT "categoriaID" FROM categorias WHERE "tipoComida"='Hamburguesas'), 1),

  -- GUERRIN
  ('Pizza Muzza', 30000, 0, 30000, 'muzza.png', 'Muzzarella clásica', TRUE,
    (SELECT "categoriaID" FROM categorias WHERE "tipoComida"='Pizzas'), 2),

  ('Pizza Napolitana', 35000, 0, 35000, 'napo.png', 'Napolitana con tomate fresco', TRUE,
    (SELECT "categoriaID" FROM categorias WHERE "tipoComida"='Pizzas'), 2),

  -- MARIACHI
  ('Taco al Pastor', 18000, 0, 18000, 'pastor.png', 'Taco mexicano legítimo', TRUE,
    (SELECT "categoriaID" FROM categorias WHERE "tipoComida"='Tacos'), 3),

  ('Burrito Grande', 25000, 15, 21250, 'burrito.png', 'Burrito tamaño XL', TRUE,
    (SELECT "categoriaID" FROM categorias WHERE "tipoComida"='Tacos'), 3);


-- ============================================
-- 12. MÉTODOS DE PAGO POR USUARIO
-- ============================================

INSERT INTO metodo_pago ("usuarioID", "predeterminado", "metodoPagoDisponibleID") VALUES
  ((SELECT "usuarioID" FROM usuario WHERE "email"='pablo@test.com'), TRUE,
    (SELECT "metodoPagoDisponibleID" FROM metodos_pago_disponibles WHERE "tipo"='Tarjeta de Crédito')),

  ((SELECT "usuarioID" FROM usuario WHERE "email"='ana@test.com'), FALSE,
    (SELECT "metodoPagoDisponibleID" FROM metodos_pago_disponibles WHERE "tipo"='Mercado Pago')),

  ((SELECT "usuarioID" FROM usuario WHERE "email"='lucas@test.com'), FALSE,
    (SELECT "metodoPagoDisponibleID" FROM metodos_pago_disponibles WHERE "tipo"='Efectivo'));


-- ============================================
-- 13. PEDIDO (1 solo pedido)
-- ============================================

INSERT INTO pedido ("usuarioID", "direccionID", "direccionRestauranteID", "repartidorID",
                    "metodoPagoID", "descuentoID", "fechaPedido", "estado",
                    "subtotal", "costoEnvio", "impuesto", "total", "codigoSeguimiento")
VALUES
  (
    (SELECT "usuarioID" FROM usuario WHERE "email"='pablo@test.com'),
    (SELECT "direccionID" FROM direccion WHERE "calle"='Av. Rivadavia'),
    1,
    (SELECT "repartidorID" FROM repartidor WHERE "nombre"='Carlos López'),
    (SELECT "metodoPagoID" FROM metodo_pago WHERE "usuarioID"=(SELECT "usuarioID" FROM usuario WHERE "email"='pablo@test.com')),
    (SELECT "descuentoID" FROM descuento WHERE "descripcion"='Sin descuento'),
    '2024-05-10 20:30:00', 'Entregado',
    35000, 4000, 0, 39000, 'PED001'
  );


-- ============================================
-- 14. DETALLE DEL PEDIDO
-- ============================================

INSERT INTO detalle_pedido ("pedidoID", "platoID", "descuentoID", "cantidad", "precioUnitario", "subtotal")
VALUES
  (
    (SELECT "pedidoID" FROM pedido WHERE "codigoSeguimiento"='PED001'),
    (SELECT "platoID" FROM plato WHERE "nombre"='Whopper'),
    NULL,
    1, 35000, 35000
  );


