import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.scss']
})
export class ProfileOverviewComponent implements OnInit {

  yearsOfExperience: number = 0;
  monthsOfExperience: number = 0;
  constructor() { }

  ngOnInit(): void {
    const dateOfJoin = new Date("13-Jul-2015");
    const currentDate = new Date();

    var startMonth = dateOfJoin.getFullYear() * 12 + dateOfJoin.getMonth();
    var endMonth = currentDate.getFullYear() * 12 + currentDate.getMonth();
    var monthInterval = (endMonth - startMonth);

    this.yearsOfExperience = Math.floor(monthInterval / 12);
    this.monthsOfExperience = monthInterval % 12;

  }

}
