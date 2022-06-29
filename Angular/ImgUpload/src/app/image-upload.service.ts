import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http: HttpClient) { }

  imageUpload(
    first_name: string,
    last_name: string,
    email: string,
    profileImage: File): Observable<any> {
      var formData: any = new FormData();
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("email", email);
      formData.append("fileToUpload", profileImage);
      return this.http.post('http://localhost/ImageUpload/upload.php',
      formData, {
        reportProgress: true,
        observe: 'events'
      }).pipe(
        catchError((err: any) => {
          alert(err.message);
          return throwError(err.message);
        })
      )
    }

  }
