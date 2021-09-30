export class GetBestAccommodationsDTP {
    id: number;
    title: string;
    price: number;
    totalScore: number;
    address: string;
    instanteBooking: boolean;
    liked: boolean;
    type: string;
    images: [
        string
    ]

    constructor(
        id: number,
        title: string,
        price: number,
        totalScore: number,
        address: string,
        instanteBooking: boolean,
        liked: boolean,
        type: string,
        images: [
            string
        ]) {


        this.id = id;
        this.title = title;
        this.price = price;
        this.totalScore = totalScore;
        this.address = address;
        this.instanteBooking = instanteBooking;
        this.liked = liked;
        this.type = type;
        this.images = images[''];



    }
}