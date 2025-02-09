import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgIf, NgStyle} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [
    NgStyle,
    NgIf,
  ],
  templateUrl: './landing-page.component.html',
  standalone: true,
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  @ViewChild('bgMusic', {static: true}) bgMusic!: ElementRef<HTMLAudioElement>;

  gifLink = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTR6Zzh5d2VuZXZrcHh3eHFxenZ1ZXE5MWx5a3JrMWc0eWJoaGJlMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gAuRTx50WsS2AOlup6/giphy.gif";//'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWlsc3R4bm53cDllZ3Nwb2owejUyb3VnamtsaDhhN3N3Y213MTBkZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26gN2pxF0yTSeZFqo/giphy.gif'

  isAbsolute = false;
  positionXNo = 0;
  positionYNo = 0;

  widthYes = 100;
  heightYes = 48;

  counter = 0;

  volumeOn = false;
  isMusicOn: boolean = false;
  song: string = '/eyesNoseLips.mp3';

  constructor( private readonly router: Router) {}

  ngOnInit() {
    this.bgMusic.nativeElement.volume = 0.2;
  }

  playMusic() {
    this.bgMusic.nativeElement.play().then(() => {
        this.isMusicOn = true;
      }
    );
  }

  muteMusic() {
    this.bgMusic.nativeElement.muted = true;
  }

  unmuteMusic() {
    this.bgMusic.nativeElement.muted = false;
  }


  changeVolume(): boolean {
    if (this.volumeOn) {
      this.muteMusic();
      return this.volumeOn = false;
    } else {
      if (!this.isMusicOn) {
        this.playMusic();
      }
      this.unmuteMusic();
      return this.volumeOn = true;
    }
  }

  absoluteStyle = 0
  absoluteYes = false;

  expandButton() {
    if (this.counter === 2) {
      this.absoluteYes = true;
      this.widthYes = window.innerWidth;
      this.heightYes = window.innerHeight;

    } else {
      this.widthYes += 50;
      this.heightYes += 50;
      this.counter++;
    }

  }

  actionButton() {
    this.moveButton();
    this.expandButton();
  }

  moveButton() {
    this.isAbsolute = true;
    this.positionXNo = Math.random() * window.innerWidth * 0.8;
    this.positionYNo = Math.random() * window.innerHeight * 0.8;
  }

  navigate(){
    this.router.navigate(['/yes']);
  }

}
