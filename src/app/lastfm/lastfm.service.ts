import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LastfmMethods } from './lastfmEndpoints';
import { Track, Artist, Album, LFMethod } from './lastfm.interface';

@Injectable({
  providedIn: 'root'
})
export class LastfmService {

  private lastFmEnv = environment.lastfm;
  private lastFmMethods = LastfmMethods;
  private readonly apiPath = 'http://ws.audioscrobbler.com/2.0/';
  constructor(private http: HttpClient) { }

  public getTrackInfo(track: string, artist: string = '') {

    const method: LFMethod = this.lastFmMethods.getTrackInfo;

    method.parameters.artist = artist;
    method.parameters.track = track;

    const apiUrl = this.createLastFmURL(method);

    method.parameters = {};

    return this.http.get<any>(apiUrl);
  }

  public getTrackInfoMbid(mbid: string) {

    const method: LFMethod = this.lastFmMethods.getTrackInfo;

    method.parameters.mbid = mbid;

    const apiUrl = this.createLastFmURL(method);

    method.parameters = {};

    return this.http.get<any>(apiUrl);
  }

  public searchTracks(track: string = '', artist: string = '') {

    const method: LFMethod = this.lastFmMethods.searchTracks;
    method.parameters.track = track;

    if (artist !== '') {
      method.parameters.artist = artist;
    }

    const apiUrl = this.createLastFmURL(method);

    return this.http.get<any>(apiUrl);
  }

  public getTrackTags(track: string, artist: string = '') {

    const method = this.lastFmMethods.getTrackTags;

    method.parameters.artist = artist;
    method.parameters.track = track;

    const apiUrl = this.createLastFmURL(method);

    return this.http.get<Track>(apiUrl);

  }

  public createLastFmURL(method: LFMethod): string {

    let url = this.apiPath + method.url;
    const apiKey = '&api_key=' + this.lastFmEnv.apiKey;
    url = url + apiKey;

    for (const key in method.parameters) {
        if (method.parameters.hasOwnProperty(key)) {
          const paramstring = '&' + key + '=' + method.parameters[key];
          url += paramstring;
        }
    }

    url = url + '&format=json';

    return url;
  }







}
