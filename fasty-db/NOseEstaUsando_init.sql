-- ===========================================
--   FASTY - INSERTS DE DATOS DE EJEMPLO - se lo pedi al chat para que sea mas rapido, pero es en base a nuestra estructura, eso me asegure
--   Sin CREATE TABLE (TypeORM los crea) - para ahora que lo hace TypeORM con sincronizacion no es necesario, despues en la migraciones a lo mejor lo ponemos 
--   Sin IDs hardcodeados - para que sean escalables en cualquier compu y no dependa de un ID fijo
-- ===========================================


-- ===========================================
-- 1) CATEGORÍAS DE RESTAURANTE
-- ===========================================
INSERT INTO categoria_restaurante (nombre, descripcion) VALUES
('Comida Rápida', 'Restaurantes de servicio rápido y menú variado'),
('Comida Mexicana', 'Auténtica comida mexicana y tex-mex'),
('Italiana', 'Pasta, pizza y especialidades italianas');


-- ===========================================
-- 2) CATEGORÍAS DE PLATOS
-- ===========================================
INSERT INTO categorias (tipoComida) VALUES
('Hamburguesas'),
('Pizzas'),
('Tacos'),
('Ensaladas'),
('Postres');


-- ===========================================
-- 3) MÉTODOS DE PAGO DISPONIBLES
-- ===========================================
INSERT INTO metodos_pago_disponibles (tipo, banco) VALUES
('Tarjeta de Crédito', 'Visa'),
('Tarjeta de Débito', 'Mastercard'),
('Efectivo', 'N/A'),
('Mercado Pago', 'Mercado Libre');


-- ===========================================
-- 4) USUARIOS
-- ===========================================
INSERT INTO usuario (nombre, apellido, email, contrasena, telefono, "fechaNacimiento", genero, activo) VALUES
('Ana', 'García', 'ana@example.com', '123', '1156789012', '1990-05-15', 'Femenino', true),
('Juan', 'Martínez', 'juan@example.com', '123', '1167890123', '1985-08-22', 'Masculino', true),
('Laura', 'López', 'laura@example.com', '123', '1178901234', '1992-12-10', 'Femenino', true);


-- ===========================================
-- 5) DIRECCIONES DE USUARIOS
-- ===========================================
INSERT INTO direccion (usuarioID, calle, altura, ciudad, provincia, "pisoDepartamento", indicaciones, latitud, longitud, predeterminada)
VALUES
((SELECT usuarioID FROM usuario WHERE email='ana@example.com'), 'Av. Corrientes', '1234', 'Buenos Aires', 'Buenos Aires', '1A', 'Timbre García', -34.603722, -58.381592, true),
((SELECT usuarioID FROM usuario WHERE email='juan@example.com'), 'Florida', '567', 'Buenos Aires', 'Buenos Aires', '5B', 'Dejar en portería', -34.608119, -58.373619, false),
((SELECT usuarioID FROM usuario WHERE email='laura@example.com'), 'Av. Santa Fe', '2345', 'Buenos Aires', 'Buenos Aires', NULL, 'Casa con reja negra', -34.586815, -58.411020, true);


-- ===========================================
-- 6) DIRECCIONES DE RESTAURANTES
-- ===========================================
INSERT INTO direccion_restaurante (calle, altura, ciudad, latitud, longitud) VALUES
('Av. Rivadavia', '4567', 'Buenos Aires', -34.610035, -58.422386),
('Av. Directorio', '2345', 'Buenos Aires', -34.635929, -58.447411),
('Av. Juan B. Justo', '3456', 'Buenos Aires', -34.587157, -58.430428);


-- ===========================================
-- 7) RESTAURANTES
-- ===========================================
INSERT INTO restaurante
(nombre, descripcion, telefono, "horarioApertura", "horarioCierre", logo, puntuacion, activo, categoriaRestauranteID, direccionRestauranteID)
VALUES
('Burger House', 'Hamburguesas artesanales', '1145678901', '11:00', '23:00', 'burger_house_logo.jpg', 4.5, true,
 (SELECT categoriaRestauranteID FROM categoria_restaurante WHERE nombre='Comida Rápida'),
 1
),
('El Taco Loco', 'Comida mexicana auténtica', '1145678902', '12:00', '00:00', 'taco_loco_logo.jpg', 4.7, true,
 (SELECT categoriaRestauranteID FROM categoria_restaurante WHERE nombre='Comida Mexicana'),
 2
),
('Pizza Napoli', 'Pizza napolitana', '1145678903', '10:00', '23:30', 'pizza_napoli_logo.jpg', 4.3, true,
 (SELECT categoriaRestauranteID FROM categoria_restaurante WHERE nombre='Italiana'),
 3
);


-- ===========================================
-- 8) ADMINISTRADORES DE RESTAURANTE
-- ===========================================
INSERT INTO administrador_restaurante (restauranteID, cuit, mail, nombre, clave, activo) VALUES
((SELECT restauranteID FROM restaurante WHERE nombre='Burger House'), '30-12345678-9', 'admin@burgerhouse.com', 'Roberto Sánchez', 'admin123', true),
((SELECT restauranteID FROM restaurante WHERE nombre='El Taco Loco'), '30-98765432-1', 'admin@eltacoloco.com', 'Carmen Mendoza', 'admin123', true),
((SELECT restauranteID FROM restaurante WHERE nombre='Pizza Napoli'), '30-56789123-4', 'admin@pizzanapoli.com', 'Giuseppe Romano', 'admin123', true);


-- ===========================================
-- 9) REPARTIDORES
-- ===========================================
INSERT INTO repartidor (nombre, vehiculo, patente, documento, disponible, calificacion, activo) VALUES
('Carlos Rodríguez', 'Moto', 'ABC123', '30123456', true, 4.5, true),
('María González', 'Auto', 'DEF456', '32987654', true, 4.8, true),
('Luis Fernández', 'Bicicleta', NULL, '35123456', false, 4.2, true);


-- ===========================================
-- 10) PLATOS
-- ===========================================
INSERT INTO plato
(nombre, precio, porcentajeDescuento, total, imagen, descripcion, activo, categoriaId, restauranteID)
VALUES
('Hamburguesa Clásica', 2500, 0, 2500, 'clasica.jpg', 'Carne, lechuga, tomate y queso', true,
 (SELECT categoriaID FROM categorias WHERE tipoComida='Hamburguesas'),
 (SELECT restauranteID FROM restaurante WHERE nombre='Burger House')
),
('Hamburguesa BBQ', 2800, 10, 2520, 'bbq.jpg', 'Con salsa barbacoa', true,
 (SELECT categoriaID FROM categorias WHERE tipoComida='Hamburguesas'),
 (SELECT restauranteID FROM restaurante WHERE nombre='Burger House')
),
('Papas Fritas', 800, 0, 800, 'papas.jpg', 'Porción grande', true,
 (SELECT categoriaID FROM categorias WHERE tipoComida='Hamburguesas'),
 (SELECT restauranteID FROM restaurante WHERE nombre='Burger House')
),

('Tacos al Pastor', 1800, 0, 1800, 'pastor.jpg', 'Tres tacos al pastor', true,
 (SELECT categoriaID FROM categorias WHERE tipoComida='Tacos'),
 (SELECT restauranteID FROM restaurante WHERE nombre='El Taco Loco')
),
('Burrito Supreme', 2200, 15, 1870, 'burrito.jpg', 'Burrito gigante', true,
 (SELECT categoriaID FROM categorias WHERE tipoComida='Tacos'),
 (SELECT restauranteID FROM restaurante WHERE nombre='El Taco Loco')
),
('Guacamole', 900, 0, 900, 'guacamole.jpg', 'Guacamole fresco', true,
 (SELECT categoriaID FROM categorias WHERE tipoComida='Tacos'),
 (SELECT restauranteID FROM restaurante WHERE nombre='El Taco Loco')
),

('Pizza Margherita', 3000, 0, 3000, 'margherita.jpg', 'Mozzarella y tomate', true,
 (SELECT categoriaID FROM categorias WHERE tipoComida='Pizzas'),
 (SELECT restauranteID FROM restaurante WHERE nombre='Pizza Napoli')
),
('Pizza Pepperoni', 3500, 20, 2800, 'pepperoni.jpg', 'Doble pepperoni', true,
 (SELECT categoriaID FROM categorias WHERE tipoComida='Pizzas'),
 (SELECT restauranteID FROM restaurante WHERE nombre='Pizza Napoli')
),
('Calzone', 2800, 0, 2800, 'calzone.jpg', 'Relleno de jamón y queso', true,
 (SELECT categoriaID FROM categorias WHERE tipoComida='Pizzas'),
 (SELECT restauranteID FROM restaurante WHERE nombre='Pizza Napoli')
);


-- ===========================================
-- 11) MÉTODOS DE PAGO (DEL USUARIO)
-- ===========================================
INSERT INTO metodo_pago (usuarioID, predeterminado, metodoPagoDisponibleID)
VALUES
((SELECT usuarioID FROM usuario WHERE email='ana@example.com'), true, 1),
((SELECT usuarioID FROM usuario WHERE email='juan@example.com'), false, 2),
((SELECT usuarioID FROM usuario WHERE email='laura@example.com'), false, 4);


-- ===========================================
-- 12) PEDIDOS
-- ===========================================
INSERT INTO pedido
(usuarioID, direccionID, direccionRestauranteID, repartidorID, metodoPagoID, descuentoID,
 fechaPedido, estado, subtotal, costoEnvio, impuesto, total, codigoSeguimiento)
VALUES
((SELECT usuarioID FROM usuario WHERE email='ana@example.com'),
 (SELECT direccionID FROM direccion WHERE usuarioID=(SELECT usuarioID FROM usuario WHERE email='ana@example.com') LIMIT 1),
 1,
 1,
 1,
 NULL,
 '2024-01-15 19:30:00', 'Entregado', 6300, 300, 1260, 7860, 'PED001ABC'),

((SELECT usuarioID FROM usuario WHERE email='juan@example.com'),
 (SELECT direccionID FROM direccion WHERE usuarioID=(SELECT usuarioID FROM usuario WHERE email='juan@example.com') LIMIT 1),
 2,
 2,
 2,
 NULL,
 '2024-01-15 20:15:00', 'En Camino', 4900, 300, 980, 6180, 'PED002DEF'),

((SELECT usuarioID FROM usuario WHERE email='laura@example.com'),
 (SELECT direccionID FROM direccion WHERE usuarioID=(SELECT usuarioID FROM usuario WHERE email='laura@example.com') LIMIT 1),
 3,
 NULL,
 3,
 NULL,
 '2024-01-15 21:00:00', 'Preparando', 5800, 300, 1160, 7260, 'PED003GHI');


-- ===========================================
-- 13) DETALLES DE PEDIDO
-- ===========================================
INSERT INTO detalle_pedido (pedidoID, platoID, descuentoID, cantidad, precioUnitario, subtotal)
VALUES
((SELECT pedidoID FROM pedido WHERE codigoSeguimiento='PED001ABC'),
 (SELECT platoID FROM plato WHERE nombre='Hamburguesa Clásica'), NULL, 2, 2500, 5000),

((SELECT pedidoID FROM pedido WHERE codigoSeguimiento='PED001ABC'),
 (SELECT platoID FROM plato WHERE nombre='Papas Fritas'), NULL, 1, 800, 800),

((SELECT pedidoID FROM pedido WHERE codigoSeguimiento='PED002DEF'),
 (SELECT platoID FROM plato WHERE nombre='Tacos al Pastor'), NULL, 1, 1800, 1800),

((SELECT pedidoID FROM pedido WHERE codigoSeguimiento='PED002DEF'),
 (SELECT platoID FROM plato WHERE nombre='Burrito Supreme'), NULL, 1, 1870, 1870),

((SELECT pedidoID FROM pedido WHERE codigoSeguimiento='PED003GHI'),
 (SELECT platoID FROM plato WHERE nombre='Pizza Margherita'), NULL, 1, 3000, 3000);


-- ===========================================
-- 14) RESEÑAS DE RESTAURANTES
-- ===========================================
INSERT INTO resenia_restaurante (usuarioID, restauranteID, puntuacion, descripcion)
VALUES
((SELECT usuarioID FROM usuario WHERE email='ana@example.com'),
 (SELECT restauranteID FROM restaurante WHERE nombre='Burger House'),
 5, 'Excelentes hamburguesas'),

((SELECT usuarioID FROM usuario WHERE email='juan@example.com'),
 (SELECT restauranteID FROM restaurante WHERE nombre='El Taco Loco'),
 4, 'Muy buenos tacos'),

((SELECT usuarioID FROM usuario WHERE email='ana@example.com'),
 (SELECT restauranteID FROM restaurante WHERE nombre='Pizza Napoli'),
 3, 'Buena pizza pero la masa podría mejorar');


-- ===========================================
-- 15) RESEÑAS DE REPARTIDORES
-- ===========================================
INSERT INTO resenia_repartidor (usuarioID, repartidorID, puntuacion, descripcion)
VALUES
((SELECT usuarioID FROM usuario WHERE email='ana@example.com'), 1, 5, 'Muy puntual y amable'),
((SELECT usuarioID FROM usuario WHERE email='juan@example.com'), 2, 4, 'Buen servicio');
