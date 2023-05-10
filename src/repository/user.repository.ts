import {  Repository,  getManager, getRepository } from 'typeorm';
import { UsersEntity } from '@/entities/users.entity';

export class UsersRepository extends Repository<UsersEntity> {
    static getOneUser(userName: string): Promise<UsersEntity | null> {
        console.log('-----estoy en repository');
        console.log(getManager().getRepository(UsersEntity).findOne({ where: { userName } }));
        return getManager().getRepository(UsersEntity).findOne({ where: { userName } });
  }
}
