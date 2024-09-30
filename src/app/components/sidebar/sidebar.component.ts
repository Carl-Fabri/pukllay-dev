import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Reportes',  icon: 'business_chart-bar-32', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Notificaciones',  icon:'ui-1_bell-53', class: '' },
    { path: '/table-list', title: 'Sliders',  icon:'business_chart-bar-32', class: '' },
    { path: '/table-list', title: 'Ordenes',  icon:'business_money-coins', class: '' },
    { path: '/table-list', title: 'Productos',  icon:'shopping_basket', class: '' },
    { path: '/table-list', title: 'Categorias',  icon:'shopping_shop', class: '' },
    { path: '/table-list', title: 'Usuarios',  icon:'users_single-02', class: '' },
    { path: '/table-list', title: 'Perfil',  icon:'loader_gear', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
