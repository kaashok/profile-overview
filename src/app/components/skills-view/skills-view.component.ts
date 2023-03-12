import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-view',
  templateUrl: './skills-view.component.html',
  styleUrls: ['./skills-view.component.scss']
})
export class SkillsViewComponent implements OnInit {
  skills: any[] = [
    {
      title: 'Languages',
      subSkills: [
        {
          title: '.NET Framework',
          icon: './assets/netframework-1.svg'
        },
        {
          title: '.NET Core',
          icon: './assets/dot-net-core-7.svg'
        },
        {
          title: 'Angular',
          icon: './assets/angular-icon-1.svg'
        },
        {
          title: 'HTML 5',
          icon: './assets/html-1.svg'
        },
        {
          title: 'CSS 3',
          icon: './assets/css-3.svg'
        },
        {
          title: 'Javascript',
          icon: "./assets/logo-javascript.svg"
        },
        {
          title: 'Typescript',
          icon: "./assets/typescript.svg"
        },
        {
          title: 'VBA',
          icon: './assets/vba.svg'
        }
      ]
    },
    {
      title: 'Database',
      subSkills: [
        {
          title: 'SQL Server',
          icon: './assets/microsoft-sql-server-1.svg'
        },
        {
          title: 'Postgres',
          icon: './assets/postgresql.svg'
        }
      ]
    },
    {
      title: 'Tools',
      subSkills: [
        {
          title: 'Git',
          icon: './assets/git-icon.svg'
        },
        {
          title: 'Azure Devops',
          icon: './assets/devops-2.svg'
        }
      ]
    },
    {
      title: 'Platform',
      subSkills: [
        {
          title: 'Docker',
          icon: './assets/docker-3.svg'
        }
      ]
    },
    {
      title: 'Cloud',
      subSkills: [
        {
          title: 'Azure',
          icon: './assets/azure-1.svg'
        }
      ]
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
