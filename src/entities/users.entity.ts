import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,DeleteDateColumn,UpdateDateColumn} from 'typeorm';


@Entity({name: 'users'})
export class UsersEntity {
    @PrimaryGeneratedColumn('increment')
    id!: string;

    @Column('uuid')
    uuid!: string

    @CreateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt!: Date;

    @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
        nullable: true
    })
    updatedAt!: Date;

    @DeleteDateColumn({
    type: 'timestamp',
    name: 'deleted_at',
        nullable: true
    })
    deletedAt!: Date;

    @Column({ name: 'user_name', type: 'varchar' , length: 50})
    userName!: string;

    @Column({ name: 'password', type: 'varchar', length: 200 })
    password!: string;
}