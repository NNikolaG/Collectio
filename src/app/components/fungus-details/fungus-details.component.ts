import { Component, OnInit } from '@angular/core';
import { AngularFireAction } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FungusService } from 'src/app/services/fungus.services';
import { $animations } from 'src/app/animations';

@Component({
  selector: 'app-fungus-details',
  templateUrl: './fungus-details.component.html',
  styleUrls: ['./fungus-details.component.scss'],
  animations: [$animations]
})
export class FungusDetailsComponent implements OnInit {

  data!: string[];
  name!: string;
  noModelArr = ["fungi16", 'fungi15', 'fungi14'];
  noModel: boolean = false;
  sub!: any

  singleFungi!: Observable<AngularFireAction<firebase.default.database.DataSnapshot>[]>;
  public infos: any;
  constructor(private route: ActivatedRoute, private fungusService: FungusService) { }

  ngOnInit(): void {
    this.getFungusName();
    this.getDetails(this.name);
  }

  getFungusName() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
      if (this.noModelArr.includes(this.name)) {
        this.noModel = true;
      }
    });
  }

  getDetails(name: string) {
    this.singleFungi = this.fungusService.find(name);
    this.singleFungi.subscribe(val => val.map(x => this.infos = x.payload.val().infos));
  }
}
