import { Reservation } from "src/reservations/entities/reservation.entity";
import { User } from "src/users/entities/user.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => Reservation, (reservation) => reservation.id, {
        eager: true,
    })
    books: Book[];

}
