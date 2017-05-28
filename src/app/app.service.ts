import { Injectable } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AppService {
	
	constructor( private http: Http) { }

	/**
   * Request postcode details
   */
	getAddress(post) {
		return this.http.get('https://api.getAddress.io/v2/uk/' + post + '?api-key=ivpv5-TFI02Ymn3YxgHU_g8614')
			.map(
				(response: Response) => {
					const data = response.json();
					return data;
				}
			);
		;
	}

}
