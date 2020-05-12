import {Component} from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-typinggame',
  templateUrl: './typinggame.component.html',
  styleUrls: ['./typinggame.component.css']
})
export class TypinggameComponent {

  randomText = lorem.sentence();
  enteredText = '';

  onInput(value: string) {
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }

}
