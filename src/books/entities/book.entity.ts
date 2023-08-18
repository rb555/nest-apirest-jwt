import { Reader } from "src/readers/entities/reader.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => Reservation, (reservation) => reservation.id)
    books: Book[];
}
