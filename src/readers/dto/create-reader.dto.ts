import { IsString } from "class-validator";


export class CreateReaderDto {

    @IsString()
    nameReader: string;

    @IsString()
    email: string;

    @IsString()
    phone: string;
}
