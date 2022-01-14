import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = [{name: 'Dani'}, {name: 'Lopes'}, {name: 'DaniLo'},
    {name: 'DaniLo'},
    {name: 'DaniLo'},
    {name: 'DaniLo'},
    {name: 'DaniLo'},
    {name: 'DaniLo'},
    {name: 'DaniLo'},
    {name: 'DaniLo'}];

  constructor() {}
}
