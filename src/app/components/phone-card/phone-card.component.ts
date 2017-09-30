import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'phone-card',
  templateUrl: './phone-card.component.html',
  styleUrls: ['./phone-card.component.scss']
})
export class PhoneCardComponent implements OnInit {
  url = `${environment.BASE_URL}`;
  @Input() phone: any;

  constructor() { }

  ngOnInit() {
  }

}
