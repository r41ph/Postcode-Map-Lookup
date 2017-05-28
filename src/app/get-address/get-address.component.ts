import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService} from '../app.service';


@Component({
  selector: 'app-get-address',
  templateUrl: './get-address.component.html',
  styleUrls: ['./get-address.component.less']
})
export class GetAddressComponent implements OnInit {
  data = []; // Array with the list of addresses
  showData = false;
  postCode = "";
  addressSelected = "";

  constructor(private AppService: AppService) { }

  ngOnInit() {
  }

  /**
   * Request postcode details
   */
  onGetAddress(){
  	this.AppService.getAddress(this.postCode.replace(/\s+/g, ''))
	  	.subscribe(
	  		(addresses: any[]) => { 
	  			this.data = addresses["Addresses"];
	  			this.showData = true;
	  		},
	  		(error) => console.log(error)
	  	);
  }
}