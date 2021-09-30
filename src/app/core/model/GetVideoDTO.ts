export class GetVideoDTO {
    videoLink: string;
    videoTitle: string;
    videoSubTitle: string;
    destinationLink: null;
    cover: string
    constructor(
        videoLink: string,
        videoTitle: string,
        videoSubTitle: string,
        destinationLink: null,
        cover: string
    ) {
        this.videoLink = videoLink;
        this.videoTitle = videoTitle;
        this.videoSubTitle = videoSubTitle;
        this.destinationLink = destinationLink;
        this.cover = cover;
    }
}