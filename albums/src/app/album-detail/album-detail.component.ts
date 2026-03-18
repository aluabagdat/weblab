import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Album } from '../models';
import { AlbumsService } from '../album.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'] // fixed 'styleUrl' typo
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  loaded: boolean = false;

  isEditing: boolean = false; // flag for edit mode
  editTitle: string = '';     // bind to input field

  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam) {
        const albumId = Number(idParam);
        this.loaded = false;
        this.albumService.getAlbum(albumId).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        });
      }
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (this.isEditing && this.album) {
      this.editTitle = this.album.title; // populate input when editing
    }
  }

  saveTitle() {
    if (this.album) {
      this.editTitleAlbum(this.editTitle); // call your existing method
      this.isEditing = false; // hide input
    }
  }

  editTitleAlbum(title: string) {
    const userId = this.album.userId;
    const id = this.album.id;
    const updatedAlbum: Album = { userId, id, title };

    this.albumService.updateAlbum(updatedAlbum).subscribe(() => {
      console.log('updated');
      this.album.title = updatedAlbum.title;
    });
  }
}