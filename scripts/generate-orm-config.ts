const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

const relative = path.join(path.relative('.', 'practice_paulinamandujano'), '..');

dotenv.config({ path: `${relative}/.env` });

fs.writeFileSync(
  path.join('practice_paulinamandujano','/../ormconfig.json'),
  JSON.stringify(
    {
      type: process.env.MAIN_DB_TYPE,
      host: process.env.MAIN_DB_HOST,
      port: process.env.MAIN_DB_PORT ? parseInt(process.env.MAIN_DB_PORT, 10) : 5432,
      username: process.env.MAIN_DB_USERNAME,
      password: process.env.MAIN_DB_PASSWORD,
      database: process.env.MAIN_DB_NAME,
      synchronize: process.env.MAIN_DB_SYNC === '1',
      autoLoadEntities: true,
      migrationsTableName: 'migrations',
      cli: {
        migrationsDir: `${relative}/database/migration`
      },
      entities: [`${relative}/src/entities/*.entity.ts`],
      migrations: [`${relative}/database/migration/*.ts`]
    },
    null,
    2
  )
);
