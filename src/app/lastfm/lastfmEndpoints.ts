import { LFMethod } from './lastfm.interface';

export class LastfmMethods {
    public static getTrackInfo: LFMethod = {
        url: '?method=track.getInfo',
        parameters: {
                        artist: '',
                        track: '',
                    },
        autocorrect: 1
        };

    public static getTrackTags: LFMethod = {
        url: '?method=track.gettoptags',
        parameters: {
            artist: '',
            track: '',
        },
        autocorrect: 1
    };
    public static searchTracks: LFMethod = {
        url: '?method=track.search',
        parameters: {
            track: '',
        },
        autocorrect: 1
    };
}
