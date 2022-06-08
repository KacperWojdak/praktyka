import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImageUploadService } from './image-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImgUpload';

  form: FormGroup;
  progress: number = 0;
  msgs: any;
  imgMsg: any;

  constructor(public fb: FormBuilder, public imageUploadService: ImageUploadService){
    this.form = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      image: [null]
    })
  }

  uploadFile(event: any){
    const file = event?.target.files ? event.target.files[0] : '';
    this.form.patchValue({
      image: file
    });
    this.form.get('image')?.updateValueAndValidity()
  }

  submitImage(){
    this.imageUploadService.imageUpload(
      this.form.value.first_name,
      this.form.value.last_name,
      this.form.value.email,
      this.form.value.image
  ).subscribe((event: HttpEvent<any>) => {
    switch (event.type){
      case HttpEventType.UploadProgress:
        if (event.total){
          this.progress = Math.round((100 / event.total) * event.loaded);
          this.msgs = `Uploaded! ${this.progress}%`
        }
        break;
        case HttpEventType.Response:
          event.body;
          if (event.body.error){
            this.imgMsg = event.body.error
          }
          else if (event.body.success){
            this.imgMsg = event.body.success
          }

          setTimeout(() => {
            this.progress = 0;
            this.msgs = '';
          }, 1500);
    }
  })
  }
}
