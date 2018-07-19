export interface FireBaseTrack {
    Artist: string;
    Album: string;
    Track: string;
    Genre: Genre[];
    Description: string;
    Release: string;
    Tags: Tag[];
    AlbumArt: string;
    CutRating: number;
    DeepRating: number;
    id?: string;
}


export interface Genre {
    name: string;
}

export interface Tag {
    name: string;
}

export interface TrackFilter {
    artistName: string;
    trackName: string;
    year: string;
    rating: string;
}
