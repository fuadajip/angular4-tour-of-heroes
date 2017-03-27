import { Component } from '@angular/core';
export class Hero {
  id : number;
  name : String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template : '<h1>{{title}}</h1> and the hero is <h2> {{hero.name}} </h2>'
})
export class AppComponent {
  title = 'We are awesome heroes!';
  hero : Hero = {
    id : 1,
    name :'Simba'
  };
}



