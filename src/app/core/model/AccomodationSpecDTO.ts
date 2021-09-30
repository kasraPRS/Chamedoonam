export class AccommodationDTO {
    images: any[] = [];
    id: number;
    title: string;
    type: string;
    address: string;
    instantBooking: boolean;
    area: number;
    capacity: number;
    city: string;
    extraGuestCount: number;
    roomCount: number;
    singleBedCount: number;
    doubleBedCount: number;
    bathRoomCount: number;
    wcCount: number;
    maxRentDays: number;
    hostUserId: number;
    host: string;
    hostScore: number;
    hostAccommodationCount: number;
    hostAvatarImage: string;
    hostReservesCount: string;
    faq: boolean;
    options: any[] = [];
    customOptions: any[] = [];
    rules: any[] = [];
    customRules: any[] = [];
    descriptions: string;
    locationInfo: [{
        lat: number;
        lng: number;
    }];
    checkinTime: number;
    checkoutTime: number;
    liked: boolean;
    pricePerNight: number;
    holidayPrice: number;
    weekendPrice: number;
    totalScore: number;
    scoresCount: number;
    cleanLinessScore: number;
    hostingScore: number;
    infoAccuracyScore: number;
    localAccessScore: number
}