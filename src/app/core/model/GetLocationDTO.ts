export class GetLocationDTO {
    accommodationCount: number;
    id: number;
    title: string;
    discriminator: number; //3 = city , 6 = province
}