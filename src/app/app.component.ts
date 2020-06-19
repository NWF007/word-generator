import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import countriesArray from '../utils/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;
  countries = '';

  handleSlideChange(newLimit: number){
    this.limit = newLimit;
  }

  generate(){
    this.words = arrayWords.slice(0, this.limit).join(" ");
  }

  randomCountries(){
    this.countries = countriesArray.slice(0,Math.random()*15).join(" ");
  }

}
