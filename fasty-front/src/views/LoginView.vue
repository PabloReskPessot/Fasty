<template>
  <div class="login-page">
    <!-- Fondo tablero -->
    <div class="background"></div>

    <!-- Tarjeta de login -->
    <div class="login-card">
      <h2 class="titulo">CLIENTE</h2>

      <form @submit.prevent="login">
        <input
          type="text"
          v-model="usuario"
          placeholder="Correo Electronico"
          class="campo"
        />
        <input
          type="password"
          v-model="contrasenia"
          placeholder="Contraseña"
          class="campo"
        />

        <button type="submit" class="btn-ingresar">Ingresar</button>
      </form>

      <p class="crear-usuario" @click="goToRegister">Crear usuario</p>
    </div>

    <!-- Iconos inferiores -->
    <div class="bottom-icons">
      <div class="icon-card">🏪</div>
      <div class="icon-card">🚗</div>
      <div class="icon-card">⚙️</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

// -------------------------
// 📌 STATE
// -------------------------
const usuario = ref("");
const contrasenia = ref("");
const router = useRouter();

// -------------------------
// 📌 LOGIN REAL
// -------------------------
const login = async () => {
  try {
    const res = await fetch("http://localhost:3000/usuarios");
    const usuarios = await res.json();

    const user = usuarios.find(
      (u: any) => u.email === usuario.value && u.contrasena === contrasenia.value
    );

    if (!user) {
      alert("Usuario o contraseña incorrectos");
      return;
    }

    // Guardamos sesión
    localStorage.setItem("usuarioID", user.usuarioID);
    localStorage.setItem("usuarioNombre", user.nombre);

    router.push("/"); // redirige al home
  } catch (error) {
    console.error("Error en login:", error);
  }
};

// -------------------------
// 📌 REGISTER
// -------------------------
const goToRegister = () => {
  router.push("/register");
};
</script>

<style>
/* Fondo tipo tablero */
.background {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: repeating-linear-gradient(
      90deg,
      #ff0012 0,
      #ff0012 50px,
      #ffffff 50px,
      #ffffff 100px
    ),
    repeating-linear-gradient(
      #ff0012 0,
      #ff0012 50px,
      #ffffff 50px,
      #ffffff 100px
    );
  background-size: 100px 100px;
}

/* Layout principal */
.login-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-text);
  position: relative;
  padding: 20px;
}

/* Tarjeta verde */
.login-card {
  background-color: #0a561c;
  color: white;
  padding: 2rem 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
  text-align: center;
  width: 90%;
  max-width: 360px;
  position: relative;
  z-index: 2;
}

.titulo {
  margin-bottom: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
}

/* Campos */
.campo {
  width: 100%;
  padding: 0.8rem 1rem;
  margin: 0.5rem 0;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #333;
}

/* Botón */
.btn-ingresar {
  width: 100%;
  background-color: #ff0012;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.9rem;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.2s ease;
}

.btn-ingresar:hover {
  background-color: #c60010;
}

/* Link crear usuario */
.crear-usuario {
  margin-top: 1rem;
  color: #ffffff;
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.95rem;
}

/* Iconos inferiores */
.bottom-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.icon-card {
  background-color: #0a561c;
  color: white;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.icon-card:hover {
  transform: scale(1.05);
}
</style>
