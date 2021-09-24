import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { Photo } from './photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  photos : Photo[] = [];
  constructor(private PhotoServiceapi : PhotoService) 
  {


   }

  ngOnInit(): void {
    this.PhotoServiceapi.GetPhotos().subscribe(x => this.photos = x.slice(0,50));
  }

  onClick(id : number)
  {
    
  }
}
