
  export interface LFMethod {
      url: string;
      parameters: any;
      autocorrect: number;
  }

  export interface Track {
    name: string;
    mbid: string;
    url: string;
    duration: string;
    streamable: Streamable;
    listeners: string;
    playcount: string;
    artist: Artist;
    album: Album;
    toptags: Toptags;
    wiki: Wiki;
    image: ImageEntity[];
  }
  export interface Streamable {
    text: string;
    fulltrack: string;
  }
  export interface Artist {
    name: string;
    mbid: string;
    url: string;
  }
  export interface Album {
    artist: string;
    title: string;
    mbid: string;
    url: string;
    image?: (ImageEntity)[] | null;
    '@attr': '@attr';
  }
  export interface ImageEntity {
    '#text': string;
    size: string;
  }
  export interface Toptags {
    tag?: (TagEntity)[] | null;
  }
  export interface TagEntity {
    name: string;
    url: string;
  }
  export interface Wiki {
    published: string;
    summary: string;
    content: string;
  }
