import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-privacy-policy',
    templateUrl: './privacy-policy.page.html',
    styleUrls: ['./privacy-policy.page.scss'],
    standalone: false
})
export class PrivacyPolicyPage implements OnInit {

  constructor( private location: Location,) { }

  goBack() {
    this.location.back(); // Navega a la página anterior
  }
  ngOnInit() {
  }

}
