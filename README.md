## Description
Backend para prueba técnica para el puesto de Desarrollador Full Stack
en la empresa DatGeo.

Este proyecto se ha realizado con NestJs y TypeORM. 
Se utiliza entities crear migraciónes y asi generar/actualizar las tablas den la base de datos.
## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# Empezar el proyecto
$ npm run start

# Generar la migración apartir de las entitys creadas
$ npm run generateMigration

# Crear las tablas en la DB 
$ npm run createDataBase

# Correr el seed para la creación del usuario principal
$ npm run runSeed
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.


- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

