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
    { name: 'Skills', isSelected: false },
    // { name: 'Projects', isSelected: false },
    { name: 'Certificates', isSelected: false },
    { name: 'Contact', isSelected: false }
  ];

  bShowToggleMenu = false;

  onClickToggle() {
    this.bShowToggleMenu = !this.bShowToggleMenu
  }

  onClickNavItem(name: string) {
    const selectedItem = this.navItems.find(x => x.name === name);
    if (selectedItem) {
      selectedItem.isSelected = true;
      const unselectedItems = this.navItems.filter(x => x.name !== name);
      unselectedItems.forEach(navItem => {
        navItem.isSelected = false;
      });
    }
    this.bShowToggleMenu = false;
  }

  getSelectedNavItem(name: string) {
    return this.navItems.find(x => x.name === name && x.isSelected === true) != null;
  }
}
