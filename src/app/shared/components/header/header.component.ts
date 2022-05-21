import { Component, OnInit } from '@angular/core';
import { CollaspeService } from '../../services/collaspe.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userImage: string = "assets/images/user.png";

  constructor(public _collaspeService: CollaspeService) { }

  ngOnInit(): void {

  }

  collaspeSidebar() {
    this._collaspeService.openNav = !this._collaspeService.openNav;
  }

}
