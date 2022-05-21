import { Injectable } from '@angular/core';
import { Menu } from '../interface/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  MENUITEMS: Menu[] = [
    { title: 'Dashboard', path: 'dashboard/default', icon: 'home', type: 'link', active: true },
    {
      title: 'Products', icon: 'box', type: 'sub', active: false, children: [
        {
          title: 'Physical', type: 'sub', children: [
            { title: 'Product List', path: 'products/physical/product-list', type: 'link' },
            { title: 'Add-Product', path: 'products/physical/add-product', type: 'link' }

          ]
        }
      ]
    },
    {
      title: 'Sales', icon: 'dollar-sign', type: 'sub', active: false, children: [

        { title: 'Orders', path: 'sales/orders', type: 'link' },
        { title: 'Transactions', path: 'sales/transactions', type: 'link' }

      ]
    },
    {
      title: 'Mater', icon: 'clipboard', type: 'sub', active: false, children: [

        { title: 'Brandlogo', path: 'masters/brandlogo', type: 'link' },
        { title: 'Tag', path: 'masters/tag', type: 'link' },
        { title: 'Category', path: 'masters/category', type: 'link' },
        { title: 'Usertype', path: 'masters/usertype', type: 'link' },
        { title: 'Color', path: 'masters/color', type: 'link' },
        { title: 'Size', path: 'masters/size', type: 'link' }

      ]
    },
    {
      title: 'Users', icon: 'user-plus', type: 'sub', active: false, children: [

        { title: 'Add-user', path: 'users/add-user', type: 'link' },
        { title: 'List-user', path: 'users/list-user', type: 'link' }

      ]
    },

    { title: 'Reports', path: 'reports', icon: 'bar-chart', type: 'link', active: true },
    { title: 'Invoice', path: 'invoice', icon: 'archive', type: 'link', active: true },
    {
      title: 'Setting', icon: 'settings', type: 'sub', active: false, children: [

        { title: 'Profile', path: 'setting/profile', type: 'link' },

      ]
    },
    { title: 'Logout', path: 'auth/login', icon: 'log-out', type: 'link', active: true },

  ]
}
