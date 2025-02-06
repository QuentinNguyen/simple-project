import {Component} from '@angular/core';
import {NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [
    NgStyle,
    NgIf
  ],
  templateUrl: './landing-page.component.html',
  standalone: true,
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  gifLink = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWlsc3R4bm53cDllZ3Nwb2owejUyb3VnamtsaDhhN3N3Y213MTBkZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26gN2pxF0yTSeZFqo/giphy.gif'

  isAbsolute = false;
  positionXNo = 0;
  positionYNo = 0;

  widthYes = 91;
  heightYes = 48;

  counter = 0;

  volumeOn = true;

  changeVolume(): boolean {
    if (this.volumeOn) {
      return this.volumeOn = false;
    } else {
      return this.volumeOn = true;
    }
  }

  expandButton() {
    this.widthYes += 50;
    this.heightYes += 50;
    this.counter++;
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
}
