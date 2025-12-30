import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RadioService {

  private audio!: HTMLAudioElement;
  public isPlaying: boolean = false;
  public isLoading: boolean = false;

  constructor() {
    this.audio = new Audio();
    this.audio.src = 'https://servers58.com/proxy/energiafm?mp=/stream';
    this.audio.preload = 'none';
  }

  async play() {
    this.isLoading = true;
    try {
      await this.audio.play();
      this.isPlaying = true;
    } finally {
      this.isLoading = false;
    }
  }


  setVolume(value: number) {
  this.audio.volume = value; // 0.0 a 1.0
}


  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }
}
