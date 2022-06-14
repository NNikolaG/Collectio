import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fungi } from 'src/app/interfaces/fungi';
import { FungusService } from 'src/app/services/fungus.services';

@Component({
  selector: 'app-fungus-table',
  templateUrl: './fungus-table.component.html',
  styleUrls: ['./fungus-table.component.scss'],
})
export class FungusTableComponent implements OnInit {

  fungus!: Observable<Fungi[]>;
  data!: Fungi[];
  datax!: any;

  constructor(private fungusService: FungusService) { }

  ngOnInit(): void {
    this.getFungus();
    this.getPosts();
  }

  getFungus(): void {
    this.fungus = this.fungusService.getFungus();
  }

  getPosts(): void {
    this.fungusService.getPosts().subscribe(response => { this.datax = response }
    );
  }

}
