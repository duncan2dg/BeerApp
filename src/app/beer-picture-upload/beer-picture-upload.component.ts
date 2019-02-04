import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-beer-picture-upload',
  templateUrl: './beer-picture-upload.component.html',
  styleUrls: ['./beer-picture-upload.component.scss']
})

/*
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  
  constructor(public src: string, public file: File){}
}
*/

export class BeerPictureUploadComponent implements OnInit {


  constructor(
    private router: Router, 
    private api: ApiService, 
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }
/*
  selectedFile: ImageSnippet;

  private onSuccess(){
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
    this.selectedFile.src = '';
  }
    
  private onError(){
    this.selectedFile.pending = true;
    this.selectedFile.status = 'fail';
  }
*/

  uploadFile(uploadedFile) {
    let id = 1;
    this.api.uploadImage(id, uploadedFile)
      .subscribe(res => {
        //this.onSuccess();
        debugger;
        let id = res['id'];
        console.log("success");
        //this.router.navigate(['/beer-detail', id]);
        //console.log(this.router + "/" + id);
      }, 
      (err) => {
        //this.onError();
        debugger;
        console.log("ERROR: " + err);
          
      }
    );
  }  


}
