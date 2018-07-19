import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navLinks = [{path: 'home', label: 'Home'},
              {path: 'search', label: 'Search Tracks'},
              {path: 'addCut', label: 'Add Tracks'},
              {path: 'playlists', label: 'Playlists'},
              {path: 'forum', label: 'Forum'},
             ];

  constructor(private router: Router) { }

  ngOnInit() {

  }
}
