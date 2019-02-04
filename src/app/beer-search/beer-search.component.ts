import { Component, OnInit, ViewChildren } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Beer } from '../beer';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.scss']
})
export class BeerSearchComponent implements OnInit {
  queriedBeerData: Beer[];

  constructor(
    private route:ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.returnAll();
  }

  data: Beer[] =[];
  returnAll(){
    return this.api.mySearchConfig()
    .subscribe(data =>{
      this.queriedBeerData = data;
      //console.log(this.queriedBeerData.length);
    }, (error) => console.error(error)
    )    
  }
//@ViewChildren('searchCounter') beerCounter;
//SearchCountPipe

/*
  value="";

  onEnter(value: string) { 
    this.value = value;
    this.getBeerSearch(value); 
    }
    getBeerSearch(company:string){
    
      return this.api.mySearchConfig()
      .subscribe(data =>{this.queriedBeerData = data.filter((e) => e.company == company);
      console.log(company + data);
      })
    }
  
  */

}
