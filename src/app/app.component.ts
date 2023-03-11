import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-portfolio';
  navItems: any[] = [
    { name: 'Profile Overview', isSelected: true, routerLink: '' },
    { name: 'Experience', isSelected: false },
    { name: 'Projects', isSelected: false },
    { name: 'Certificates', isSelected: false }
  ];

  onClickNavItem(name: string) {
    const selectedItem = this.navItems.find(x => x.name === name);
    if (selectedItem) {
      selectedItem.isSelected = true;
      const unselectedItems = this.navItems.filter(x => x.name !== name);
      unselectedItems.forEach(navItem => {
        navItem.isSelected = false;
      });
    }
  }

  getSelectedNavItem(name: string) {
    return this.navItems.find(x => x.name === name && x.isSelected === true) != null;
  }
}
