import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature: string = 'recipe';

  onFeatureSelected(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB2mx57aSPtyWyWZ0KcXLpcsb_88Th10xE",
      authDomain: "recipeapp-8d830.firebaseapp.com",
    });
  }
}
