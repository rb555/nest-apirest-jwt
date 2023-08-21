import { Book } from "src/books/entities/book.entity";
import { Reader } from "src/readers/entities/reader.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_reader: number;

    @Column()
    date: Date;

    @ManyToOne(() => Book, (book) => book.id, {
        eager: true,
    })
    book: Book;

    @OneToOne(() => Reader, reader => reader.id)
    @JoinColumn()
    reader: Reader;

    @DeleteDateColumn()
    deletedAt: Date;
}
