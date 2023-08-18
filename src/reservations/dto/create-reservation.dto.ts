import { IsInt, IsString } from "class-validator";


export class CreateReservationDto {

    @IsInt()
    id_reader: number;

    @IsInt()
    id_book: number;

    
    date: Date;
}
