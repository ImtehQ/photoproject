import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from './photo/photo';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

    constructor(private HttpClient : HttpClient) 
    {

    }

    public GetPhotos():Observable<Photo[]>
    {
      return this.HttpClient.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
    }

}
