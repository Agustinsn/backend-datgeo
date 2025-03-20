## Descripción
Backend para prueba técnica para el puesto de Desarrollador Full Stack
en la empresa DatGeo.

Este proyecto se ha realizado con NestJs y TypeORM. 
Se utiliza entities crear migraciónes y asi generar/actualizar las tablas den la base de datos.

## Variables de entornos necesarias

DATABASE_URL=postgresql://...

USER_NAME = adminDatGeo
USER_LAST_NAME = adminDatGeo
USER_PASSWORD = adminDatGeo123
USER_EMAIL = adminDatGeo@gmail.com
USER_SALARY = 1000
USER_DNI = 123456789

AWS_ACCESS_KEY_ID = ABCD123FGHE
AWS_SECRET_ACCESS_KEY = *A123*/q01a
AWS_REGION = us-east-1
AWS_BUCKET_NAME = test

## Instalación

```bash
$ npm install
```

## Ejecución

```bash
# Generar la migración apartir de las entitys creadas
$ npm run generateMigration

# Crear las tablas en la DB 
$ npm run createDataBase

# Correr el seed para la creación del usuario principal
$ npm run runSeed

# Empezar el proyecto
$ npm run start
```

## Endpoints
# Se puede encontrar la documentación de los enpoints en localhost:3000/api/docs