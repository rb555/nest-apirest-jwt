import { Book } from "src/books/entities/book.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => Book, (book) =>book.id, {
        eager: true,
    })
    book: Book;

    @OneToOne(() => Reservation, reservation => reservation.id)
    reservation: Reservation;
}
