<template>
  <div class="registro-page">
    <div class="background"></div>

    <div class="registro-card">
      <h2 class="titulo">CREAR CUENTA</h2>

      <form @submit.prevent="registrar">

        <input
          type="text"
          v-model="nombre"
          placeholder="Nombre"
          class="campo"
        />

        <input
          type="text"
          v-model="apellido"
          placeholder="Apellido"
          class="campo"
        />

        <input
          type="email"
          v-model="email"
          placeholder="Correo Electrónico"
          class="campo"
        />

        <input
          type="password"
          v-model="contrasena"
          placeholder="Contraseña"
          class="campo"
        />

        <button type="submit" class="btn-registrar">
          Registrarse
        </button>
      </form>

      <p class="volver-login" @click="goToLogin">
        ¿Ya tenés cuenta? Iniciar sesión
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const nombre = ref("");
const apellido = ref("");
const email = ref("");
const contrasena = ref("");

const router = useRouter();

const registrar = async () => {
  if (!nombre.value || !apellido.value || !email.value || !contrasena.value) {
    alert("Todos los campos son obligatorios");
    return;
  }

  const body = {
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    contrasena: contrasena.value,
  };

  try {
    const res = await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const error = await res.json();
      alert("Error al registrarse: " + error.message);
      return;
    }

    alert("Usuario creado con éxito");
    router.push("/login");

  } catch (error) {
    console.error("Error al registrar:", error);
  }
};

const goToLogin = () => router.push("/login");
</script>

<style>


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

.registro-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.registro-card {
  background-color: #0a561c;
  color: white;
  padding: 2rem 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
  width: 90%;
  max-width: 360px;
  text-align: center;
  z-index: 2;
}

.titulo {
  margin-bottom: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
}

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

.btn-registrar {
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

.btn-registrar:hover {
  background-color: #c60010;
}

.volver-login {
  margin-top: 1rem;
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.95rem;
}
</style>
