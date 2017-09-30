import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: 'add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.scss']
})
export class AddPhoneComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/phones`
  });

  newPhone = {
    name: '',
    brand: '',
    specs: []
  };

  feedback: string;

  constructor() { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      console.log("success",response);
      this.feedback = JSON.parse(response).message;
    };
    
    this.uploader.onErrorItem = (item, response, status, headers) => {
      console.log("error",response);
      this.feedback = JSON.parse(response).message;
    };
  }

  addSpec(spec) {
    this.newPhone.specs.push(spec);
  }

  submit() {
    console.log("submitPhone",this.newPhone);

    this.uploader.onBuildItemForm = (item, form) => {
      item.withCredentials = false;
      form.append('name', this.newPhone.name);
      form.append('brand', this.newPhone.brand);
      form.append('specs', JSON.stringify(this.newPhone.specs));
      console.log('formStructure->>>>', form);
    };

    this.uploader.uploadAll();
  }

}
