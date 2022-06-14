import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Fun } from 'src/app/interfaces/funFacts';
import { FungusService } from 'src/app/services/fungus.services';

@Component({
  selector: 'app-fun-facts',
  templateUrl: './fun-facts.component.html',
  styleUrls: ['./fun-facts.component.scss']
})
export class FunFactsComponent implements OnInit {

  public facts!: Observable<Fun[]>;
  public data!: any;

  constructor(private fungusService: FungusService) { }

  ngOnInit(): void {

    this.getFacts();

  }

  getFacts(){
    this.facts = this.fungusService.getFunFacts();
  }
}
