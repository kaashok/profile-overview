import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-view',
  templateUrl: './experience-view.component.html',
  styleUrls: ['./experience-view.component.scss']
})
export class ExperienceViewComponent implements OnInit {
  experienceDetails: any[] = [
    {
      companyName: 'Siemens Technology and Services Private Limited',      
      designation: 'Software Engineer & Scrum Master',
      startYear: 'Jul-2021',
      endYear: 'Present',
      workDetails: [
        'Experienced Full Stack Web Developer with a proven record of accomplishment of delivering high-quality software, on- time',
        'Involved in Design, Development and Testing of Web Application and Web API using Angular and .NET Core',
        'Working experience in .NET Core, Angular and Docker',
        'Working experience in Web sockets .NET',
        'Developing a web UI framework, chart framework using Typescripts and echarts library',
        'Experience in developing various reuse components using Typescripts',
        'Developed test strategies, test plans and test cases and performed Unit Testing to identify and resolve integration, functional and usability issues before deployment. ',
        'Designed DB Scheme and create stored procedures, triggers, views, and functions in SQL and Postgres',
        'Managing one scrum team with different components',
        'Handling various scrum ceremonies like Backlog Refinement, Daily Scrum, Sprint planning and Retrospective',        
      ]
    },
    {
      companyName: 'Acuity Knowledge Partners',      
      designation: 'Senior Associate',
      startYear: 'Jul-2015',
      endYear: 'Jun-2021',
      workDetails: [
        'Developed .NET libraries for various financial models',
        'Experienced with C#, Web API, Angular and VBA',      
        'Designed and Developed Web Application using Angular',        
        'Developed windows services for scheduling the jobs',
        'Developed Store Procedure, functions and other SQL objects in SQL Server',
        'Experienced in deployment of Angular and .NET applications',
        'Migrated AngularJs and .NET framework APIs to latest Angular version and .NET Core',
        'Developed Excel DNA Add-ins to communicated with .NET libraries',
        'Experienced in developing report generation tools with VBA for powerpoint, documents and PDF.',
        'Handled and maintained On-premise server.',
        'Good relationship with clients and partners'       
      ]
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
