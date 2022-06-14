import { $animations } from 'src/app/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [$animations]
})
export class BannerComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}
