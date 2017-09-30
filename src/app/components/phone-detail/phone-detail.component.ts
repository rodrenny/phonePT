import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhoneApiService } from '../../services/phone-api.service';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent implements OnInit {

  phone = {
    _id: '',
    brand: '',
    name: '',
    specs: [],
    image: ''
  };
  spec:String = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private phoneAPI: PhoneApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getPhoneDetails(params.id);
    })
  }

  getPhoneDetails(id) {
    this.phoneAPI.get(id)
      .subscribe((phone) => {
        this.phone = phone;
      })
  }

  addSpec() {
    this.phone.specs.push(this.spec)
  }

  delete() {
    this.phoneAPI.remove(this.phone._id)
      .subscribe(() => {
        this.router.navigate(['/phones'])
      })
  }

  submitForm() {
    this.phoneAPI.edit(this.phone)
      .subscribe((e) => {
        console.log('update', e);
        console.log('update');
      })
  }
}
