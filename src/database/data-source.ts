/* eslint-disable prettier/prettier */
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
console.log(process.env.DATABASE_URL)
export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  migrations: [__dirname + '/../migrations/*.ts'],
  migrationsTableName: 'migrations_history',
  synchronize: false,
  logging: true,
  ssl: true,
});
AppDataSource.initialize()
  .then(() => console.log('Data Source initialized'))
  .catch((err) => console.error('Error initializing Data Source', err));
