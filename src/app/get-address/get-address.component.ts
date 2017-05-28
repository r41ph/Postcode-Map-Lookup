import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AppService} from '../app.service';


@Component({
  selector: 'app-get-address',
  templateUrl: './get-address.component.html',
  styleUrls: ['./get-address.component.less']
})
export class GetAddressComponent implements OnInit {
  addresses = []; // Array with the list of addresses
  showAddresses = false;
  postCode = "";
  addressSelected = "";
  error = false;
  
  // Map starting marker lat/lng
  lat = 51.5085489;
  lng = -0.1257543;

  windowHeight;

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
	  			this.addresses = addresses["Addresses"];
	  			this.showAddresses = true;
	  			this.error = false;
	  			// Update map marker with new postcode lat/lng
	  			this.lat = addresses["Latitude"];
  				this.lng = addresses["Longitude"];
	  		},
	  		(error) => {
	  			// console.log(error)
	  			// Show error message
	  			this.error = true;
	  			// Hide error message after interval
	  			setInterval(() => {
	  				this.error = false;
	  			}, 4000);
	  			// Hide addresses
	  			this.showAddresses = false;
	  		}
	  	);
  }
}