import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Beer } from '../beer';

@Pipe({
 name: 'searchFilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
    transform(beers: Beer[], searchTerm: string, filterMetaData): Beer[] {
        if(!beers || !searchTerm){
            return beers;
        }
        let bSearch = beers.filter(beer => 
            beer.company.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

            //console.log("Returning " + bSearch.length + " results");
        let countResults = "Returning " + bSearch.length + " results";
        console.log(countResults);
        filterMetaData = "RESULTS";
        return bSearch;
        /*
        beers.filter(beer => 
            beer.company.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
          */  
    } 

}