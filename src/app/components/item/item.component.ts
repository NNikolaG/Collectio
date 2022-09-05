import { ItemsService } from './../../services/items.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  private sub!: any;
  private itemName!: string;

  data!: any;
  item!: Observable<unknown[]>;
  infosObs!: Observable<unknown[]>[];

  infos = new Array<any>();

  constructor(private route: ActivatedRoute, private itemServices: ItemsService) { }

  ngOnInit(): void {
    this.getItemName();
    this.getItem(this.itemName);
  }

  ngAfterViewInit() {
    this.valueChecker();
  }
  
  valueChecker() {
    if (this.data == undefined) {
      this.valueChecker();
    }
    this.getInfos(this.data.infos);
  }

  getItemName() {
    this.sub = this.route.params.subscribe((params: { [x: string]: any; }) => {
      this.itemName = params['name'].replaceAll('-', ' ');
    });
  }

  getItem(name: string) {
    this.item = this.itemServices.find(name);
    this.item.subscribe(val => this.data = val[0]);
  }

  getInfos(infosIds: []) {
    this.infosObs = this.itemServices.infos(infosIds);
    this.infosObs.forEach(element => {
      element.subscribe(val => this.infos.push(val[0]));
    });
  }

}
