import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Beer } from '../beer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
//const apiUrl = "/api/v1/beers";
const apiUrl = "http://localhost:3000/beer";
const apiUrlImages = "http://localhost:3000/API_Beer_Pics";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //error handler
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getBeers (): Observable<Beer[]> {
    return this.http.get<Beer[]>(apiUrl)
      .pipe(
        tap(beers => console.log('CONNECTED TO API, and have fetched beers!')),
        catchError(this.handleError('getBeers', []))
      );
  }
  
  getBeer(id: number): Observable<Beer> {
    const endpoint = `${apiUrl}/${id}`;
    return this.http.get<Beer>(endpoint).pipe(
      tap(_ => console.log(`fetched Beer id=${id}`)),
      catchError(this.handleError<Beer>(`getBeer id=${id}`))
    );
  }
  
  addBeer (beer): Observable<Beer> {
    return this.http.post<Beer>(apiUrl, beer, httpOptions)
    .pipe(
      tap((beer: Beer) => console.log(`added Beer w/ id=${beer.id}`)),
      catchError(this.handleError<Beer>('addBeer'))
    );
  }
  
  updateBeer (id, beer): Observable<any> {
    const endpoint = `${apiUrl}/${id}`;
    return this.http
      .put(endpoint, beer, httpOptions)
      .pipe(
        tap(_ => console.log(`updated beer id=${id}`)),
        catchError(this.handleError<any>('updateBeer'))
    );
  }
  
  deleteBeer (id): Observable<Beer> {
    const endpoint = `${apiUrl}/${id}`;
    return this.http.delete<Beer>(endpoint, httpOptions).pipe(
      tap(_ => console.log(`deleted beer id=${id}`)),
      catchError(this.handleError<Beer>('deleteBeer'))
    );
  }


  //TODO; UPLOAD AN IMAGE TO THE BEER PROFILE
/*
  uploadImage(id, beer): Observable<Beer>{
      const url = `${apiUrl}/${id}`;
      return this.http.put(url, beer, httpOptions).pipe(
        tap(_ => console.log(`updated beer id=${id}`)),
        catchError(this.handleError<any>('updateBeer'))
      );
  }*/
//CANT UPLOAD TO A HOST FOLDER, IT HAS TO BE A SERVER FOLDER
//YOU REQUIRE AN API TO UPLOAD FILES
//NEED A REAL SERVER JSON-SERVER IS JUST USED FOR MOCK UP AND TESTING
  uploadImage(id, fileToUpload: File): Observable<any>{
    const endpoint = `${apiUrlImages}`;
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
    .post(endpoint, formData, httpOptions)
    .pipe(
      tap(_ => console.log(`uploaded image of beer to id=${id}`)),
      catchError(this.handleError<any>('uploadImage'))
    
    );
  }  

  mySearchConfig(){
    return this.http.get<Beer[]>(apiUrl);
  }

}