import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates-view',
  templateUrl: './certificates-view.component.html',
  styleUrls: ['./certificates-view.component.scss']
})
export class CertificatesViewComponent implements OnInit {
  certificates: any[] = [
    {
      title: 'Certificates',
      certDetails: [
        {
          title: 'Azure Fundamentals',
          icon: './assets/az900.png'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
