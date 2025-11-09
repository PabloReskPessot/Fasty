#!/bin/sh
set -e

echo "Esperando a que el backend esté listo..."
/wait/wait-for-it.sh fasty-back:3000 -- echo "Backend listo. Ejecutando seeds..."

echo "Ejecutando seeds en Postgres..."

PGPASSWORD=123 psql \
  -h fasty-db \
  -U postgres \
  -d fasty-db \
  -f /seed/seed.sql

echo "✅ SEED ejecutado correctamente"
