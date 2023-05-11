import { createConnection } from 'typeorm';

export async function connect() { 
    try {
        createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234567',
    database: 'pruebapaulina',
    entities: ['../src/entities/*.ts'],
    synchronize: true,
});
    } catch (error) {
    console.log('Error al Conectar a la base de datos:')
   }
}
