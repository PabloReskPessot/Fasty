#!/usr/bin/env bash
# De: https://github.com/vishnubob/wait-for-it
set -e

host="$1"
shift
cmd="$@"

until curl -s "$host" >/dev/null; do
  echo "Esperando a que la API esté lista..."
  sleep 2
done

echo "API lista. Ejecutando seed..."
exec $cmd

# esto es una completa recomendacion del chat cuando le pedi que me recomendara una forma de cargar tablas y datos iniciales para hacer los testings