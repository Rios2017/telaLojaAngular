import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { HeaderData } from './../footer/header-data-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routUrl(): string {
    return this.headerService.headerData.routeUrl
  }
}
