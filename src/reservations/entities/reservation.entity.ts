import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_reader: number;

    @Column()
    id_book: number;

    @Column()
    date: Date;
}
