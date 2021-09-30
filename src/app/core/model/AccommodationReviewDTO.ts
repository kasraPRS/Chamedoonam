export class AccommodationReviewDTO {
    item: any[] = [];
    pagingInfo: {
        totalItems: number,
        pageSize: number,
        currentPage: number,
        next: boolean,
        previous: boolean,
        isFirst: boolean,
        isLast: boolean,
        totalPages: number
    }
}