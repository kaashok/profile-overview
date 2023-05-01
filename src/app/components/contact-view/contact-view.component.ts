import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})

export class ContactViewComponent {

  contactLists: any[] = [
    {
      iconClass: 'fa-solid fa-envelope',
      text: 'kaashok1993@gmail.com',
      isLink: true,
      url: 'mailto:kaashok1993@gmail.com'
    },
    {
      iconClass: 'fa-brands fa-linkedin',
      text: 'Linkedin',
      isLink: true,
      url: 'https://www.linkedin.com/in/ashok-kuduva-ananthan-0a2b84121/'
    },
    {
      iconClass: 'fa-brands fa-github',
      text: 'Github',
      isLink: true,
      url: 'https://github.com/kaashok'
    },
    {
      iconClass: 'fa-solid fa-map-location-dot',
      text: 'Electronic City, Bangalore - 560100',
      isLink: false,
      url: ''
    }
  ];

  constructor() {

  }

}
