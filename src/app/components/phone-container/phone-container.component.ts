import { Component, OnInit } from '@angular/core';
import { PhoneApiService } from './../../services/phone-api.service';

@Component({
  selector: 'phone-container',
  templateUrl: './phone-container.component.html',
  styleUrls: ['./phone-container.component.scss'],
  providers: [PhoneApiService]
})
export class PhoneContainerComponent implements OnInit {
  phones = [];

  constructor(private phoneApi: PhoneApiService) { }

  ngOnInit() {
    this.phoneApi.getList()
      .subscribe( (phones) => {
        console.log("Obtención de todos los datos -> ", phones);
        this.phones = phones;
      });
  }

}
