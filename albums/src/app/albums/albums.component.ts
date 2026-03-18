import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Album } from '../models';
import { AlbumsService } from '../album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  loaded: boolean = false;

  constructor(private albumService: AlbumsService){}

  ngOnInit(): void {
      this.loaded = false;
      this.albumService.getAlbums().subscribe((albums) =>{
        this.albums = albums;
        this.loaded = true;
        console.log('Полученные альбомы:', albums);
      });
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter((album) => album.id !== id);
    this.albumService.deleteAlbum(id).subscribe(()=>{
      console.log("deleted")
    });
  }

  updateAlbum(userId: number, id: number, title: string){
    const album: Album = { userId, id, title };
    this.albumService.updateAlbum(album).subscribe(()=>{
      console.log("updated");
    });
  }

  createAlbum(userId: number, id: number, title: string){
    const newAlbum: Album = { userId, id, title };
    this.albumService.createAlbum(newAlbum).subscribe((createdAlbum) => {
      this.albums.push(createdAlbum);
      console.log('Created', createdAlbum);
    });
  }

}