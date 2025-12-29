import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RadioService } from '../services/radio';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ]
})
export class HomePage implements OnInit, OnDestroy {

  currentSong = '';
  currentCover = '';
  private intervalId: any;

  constructor(
    public radio: RadioService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loadStreamInfo();
    this.intervalId = setInterval(() => this.loadStreamInfo(), 8000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  toggle() {
    this.radio.isPlaying ? this.radio.pause() : this.radio.play();
  }

  loadStreamInfo() {
    this.http
      .get<any>('https://servers58.com:2199/rpc/energiafm/streaminfo.get')
      .subscribe(res => {
        const info = res?.data?.[0];
        this.currentSong = info?.song || '';
        this.currentCover = info?.track.imageurl || '';


      });
      
  }

  onImageError(event: Event) {
  const img = event.target as HTMLImageElement;
  img.src = 'assets/default-album.jpg';
}

}