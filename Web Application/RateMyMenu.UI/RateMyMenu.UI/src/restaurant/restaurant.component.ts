import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './restaurant.component.html',
})
export class Restaurant {
  public textToShow: string;

  public constructor() {
    this.textToShow = "Hello again";
  }

  public changeText() {
    this.textToShow = "Hello 2";
  }
}
