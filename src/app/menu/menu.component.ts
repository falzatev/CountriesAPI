import { Component, OnInit } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faMoon = faMoon;

  constructor() { }

  ngOnInit() {
  }

}
