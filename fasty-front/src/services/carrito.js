export const carritoService = {
  key: "carrito",

  obtener() {
    return JSON.parse(localStorage.getItem(this.key)) || [];
  },

  guardar(carrito) {
    localStorage.setItem(this.key, JSON.stringify(carrito));
  },

  agregar(plato) {
    const carrito = this.obtener();

    const existente = carrito.find(item => item.platoID === plato.platoID);

    if (existente) {
      existente.cantidad++;
    } else {
      carrito.push({
        ...plato,
        cantidad: 1
      });
    }

    this.guardar(carrito);
  },

  quitar(platoID) {
    let carrito = this.obtener();

    const item = carrito.find(x => x.platoID === platoID);

    if (!item) return;

    if (item.cantidad > 1) {
      item.cantidad--;
    } else {
      carrito = carrito.filter(x => x.platoID !== platoID);
    }

    this.guardar(carrito);
  },

  total() {
    return this.obtener().reduce((sum, item) => sum + item.total * item.cantidad, 0);
  },

  cantidadTotal() {
    return this.obtener().reduce((sum, item) => sum + item.cantidad, 0);
  }
};