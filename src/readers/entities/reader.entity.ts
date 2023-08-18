import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reader {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameReader:string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
